// import { Box, useTheme } from "@mui/material";
// import Header from "../../components/Header";
// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import { tokens } from "../../theme";

// const FAQ = () => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   return (
//     <Box m="20px">
//       <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

//       <Accordion defaultExpanded>
//         <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//           <Typography color={colors.greenAccent[500]} variant="h5">
//             An Important Question
//           </Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             malesuada lacus ex, sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion defaultExpanded>
//         <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//           <Typography color={colors.greenAccent[500]} variant="h5">
//             Another Important Question
//           </Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             malesuada lacus ex, sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion defaultExpanded>
//         <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//           <Typography color={colors.greenAccent[500]} variant="h5">
//             Your Favorite Question
//           </Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             malesuada lacus ex, sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion defaultExpanded>
//         <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//           <Typography color={colors.greenAccent[500]} variant="h5">
//             Some Random Question
//           </Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             malesuada lacus ex, sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion defaultExpanded>
//         <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//           <Typography color={colors.greenAccent[500]} variant="h5">
//             The Final Question
//           </Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             malesuada lacus ex, sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//     </Box>
//   );
// };

// export default FAQ;



import {
  Box,
  Typography,
  useTheme,
  IconButton,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
} from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import InfoIcon from "@mui/icons-material/Info";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
const Book = () => {
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ show: false, message: '', type: '' });
  const [faqs, setFaqs] = useState([]);
  const [error, setError] = useState(null);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [openDialog, setOpenDialog] = useState(false);
  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
  const [selectedFaq, setSelectedFaq] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [faq,setFaq]=useState([]);
  const [faqData, setFaqData] = useState({
    question: "",
    answer: ""
  });
//upload image  1
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFaqData({
        ...faqData,
      });
    }
  };
  // 1
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFaqData(prev => ({
      ...prev,
      [id]: value
    }));
  };
  const handleOpenDialog = (isEditMode = false, data = null) => {
    console.log("-----enter in handle open dialog");
    
    setIsEdit(isEditMode);
    if (isEditMode && data) {
      console.log("📌 Editing Book Data:", data); // Debugging
      setFaqData({ ...data});
    } else {
      setFaqData({
        question: "",
        answer: ""
      });
    }
    setOpenDialog(true);
    console.log("-----enter in handle open dialog");
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  // 2
  const handleOpenDetails = (book) => {
    setSelectedFaq(book);
    setOpenDetailsDialog(true);
  };

  const handleCloseDetails = () => {
    setOpenDetailsDialog(false);
    setSelectedFaq(null);
  };

  //upload image and book
  const handleSubmit =async () => {
    // Handle form submission here
    console.log(faqData);
    try{
      setLoading(true);

        // Validate required fields
        if (!faqData.question || !faqData.answer) {
          setAlert({
            open: true,
            message: "Required",
            severity: "error"
          });
          return;
        }

      // Prepare book data
      const faqPayload = {
        question: faqData.question,
        answer: faqData.answer,
        };
    
      let response1;
      if (isEdit) {
        // Update existing book
        response1 = await axios.patch(
          `${process.env.REACT_APP_BASE_URL}/admin/faq/update/${faqData.id}`,
          faqPayload
        );
        setAlert({
          open: true,
          message: "FAQ updated successfully",
          severity: "success"
        });
      } else {
        // Create new book
        response1 = await axios.post(
          `${process.env.REACT_APP_BASE_URL}/admin/faq/create`,
          faqPayload
        );
        setAlert({
          open: true,
          message: "FAQ added successfully",
          severity: "success"
        });
      }

      // Refresh the book list
      fetchFaq();

      handleCloseDialog();
    }catch(err){
      console.error("Error saving book:", error);
      setAlert({
        open: true,
        message: `Failed to ${isEdit ? 'update' : 'add'} book: ${error.response?.data?.message || error.message}`,
        severity: "error"
      });
    }finally {
      setLoading(false);
    }
  };
//delete ...
  const handleDelete =async (id) => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      try {
        setLoading(true);
        await axios.delete(
          `${process.env.REACT_APP_BASE_URL}/admin/faq/delete/${id}`
        );
        
        // Update the books list
        setFaqs(faqs.filter(book => book.id !== id));
        
        setAlert({
          open: true,
          message: "Book deleted successfully",
          severity: "success"
        });
        fetchFaq()
      } catch (error) {
        console.error("Error deleting book:", error);
        setAlert({
          open: true,
          message: "Failed to delete Faq",
          severity: "error"
        });
      } finally {
        setLoading(false);
      }
    }
  };

  // for get data
  const columns = [
    { field: "id", headerName: "ID" },
    // {
    //   field: "bookName",
    //   headerName: "Book Name",
    //   flex: 1,
    //   cellClassName: "name-column--cell",
    // },
    {
      field: "question",
      headerName: "Question",
      type: "text",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "answer",
      headerName: "Answer",
      flex: 1,
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      renderCell: (params) => {
        return (
          <Box>
            <IconButton onClick={() => handleOpenDetails(params.row)}>
              <InfoIcon />
            </IconButton>
            <IconButton onClick={() => handleOpenDialog(true, params.row)}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => handleDelete(params.row.id)}>
              <DeleteIcon />
            </IconButton>
          </Box>
        );
      },
    },
  ];

  const fetchFaq = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/admin/faq/getAll`
      );
      console.log("response", response?.data?.data);

      // Check if response.data is an array or wrapped inside another object
      const faqArray = Array.isArray(response.data)
        ? response.data
        : response.data?.data || [];
      console.log(faqArray,"shhrreeee");
      
      const formattedfaq = faqArray.map((faq) => ({
        ...faq,
        id: faq._id,
      }));
      console.log(formattedfaq,"helllllliii");
      
      

      setFaq(formattedfaq);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFaq();
    // console.log(book, "skjcskhc");
  }, []);

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="FAQS" subtitle="Managing the FAQS" />
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => handleOpenDialog(false)}
        >
          Add FAQ
        </Button>
      </Box>

      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          checkboxSelection
          rows={faq}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>

      {/* Add/Edit Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>{isEdit ? "Edit Book" : "Add New Book"}</DialogTitle>
        <DialogContent>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "47%" },
              mt: 2,
            }}
          >
            {/* <TextField
              label="Book Name"
              value={bookData.bookName}
              onChange={(e) =>
                setBookData({ ...bookData, bookName: e.target.value })
              }
            /> */}
            <TextField
              label="question"
              id="question"
              value={faqData.question}
              onChange={handleInputChange}
            />
            <TextField
              label="answer"
              id="answer"
              value={faqData.answer}
              onChange={handleInputChange}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained">
            {isEdit ? "Update" : "Add"}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Details Dialog */}
      <Dialog
        open={openDetailsDialog}
        onClose={handleCloseDetails}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Book Details</DialogTitle>
        <DialogContent>
          {selectedFaq && (
            <Box sx={{ mt: 2 }}>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                <strong>book Name:</strong> {selectedFaq.question || "N/A"}
              </Typography>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                <strong>Title:</strong> {selectedFaq.answer || "N/A"}
              </Typography>
              
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDetails}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Book;