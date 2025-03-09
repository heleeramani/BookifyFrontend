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
  import { DataGrid } from "@mui/x-data-grid";
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
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [openDialog, setOpenDialog] = useState(false);
    const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
    const [selectedNewsLetter, setSelectedNewsLetter] = useState(null);
    const [isEdit, setIsEdit] = useState(false);
    const [NewsLetterData, setNewsLetterData] = useState({
      email: "",
    });

    
  const [newsLetter, setNewsLetter] = useState([]);
  const [newsLetters, setNewsLetters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ show: false, message: '', type: '' });
  
    const handleOpenDialog = (isEditMode = false, data = null) => {
      setIsEdit(isEditMode);
      if (data) {
        setNewsLetterData(data);
      } else {
        setNewsLetterData({
          email: "",
        });
      }
      setOpenDialog(true);
    };
  
    const handleCloseDialog = () => {
      setOpenDialog(false);
    };
  
    const handleOpenDetails = (book) => {
      setSelectedNewsLetter(book);
      setOpenDetailsDialog(true);
    };
    
    const handleCloseDetails = () => {
      setOpenDetailsDialog(false);
      setSelectedNewsLetter(null);
    };
  
    const handleSubmit = () => {
      // Handle form submission here
      console.log(NewsLetterData);
      handleCloseDialog();
    };
  
    // const handleDelete = (id) => {
    //   // Handle delete functionality here
    //   console.log("Delete NewsLetter with id:", id);
    // };
  
    //delete ...
  const handleDelete =async (id) => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      try {
        setLoading(true);
        await axios.delete(
          `${process.env.REACT_APP_BASE_URL}/admin/newsLetter/delete/${id}`
        );
        
        // Update the books list
        setNewsLetters(newsLetters.filter(book => book.id !== id));
        
        setAlert({
          open: true,
          message: "NewsLetter deleted successfully",
          severity: "success"
        });
        fetchNewsLetter()
      } catch (error) {
        console.error("Error deleting NewsLetter:", error);
        setAlert({
          open: true,
          message: "Failed to delete NewsLetter",
          severity: "error"
        });
      } finally {
        setLoading(false);
      }
    }
  };

  const fetchNewsLetter = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/admin/newsLetter/get`
      );
      console.log("response", response?.data?.data);

      // Check if response.data is an array or wrapped inside another object
      const newsLetterArray = Array.isArray(response.data)
        ? response.data
        : response.data?.data || [];
      console.log(newsLetterArray,"shhrreeee");
      
      const formattedNewsLetter = newsLetterArray.map((book) => ({
        ...book,
        id: book._id,
      }));
      console.log(formattedNewsLetter,"hellllll");
      
      

      setNewsLetter(formattedNewsLetter);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNewsLetter();
    // console.log(book, "skjcskhc");
  }, []);

    const columns = [
      { field: "id", headerName: "ID" },
      {
        field: "email",
        headerName: "Email",
        flex: 1,
        cellClassName: "name-column--cell",
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
              {/* <IconButton onClick={() => handleOpenDialog(true, params.row)}>
                <EditIcon />
              </IconButton> */}
              <IconButton onClick={() => handleDelete(params.row.id)}>
                <DeleteIcon />
              </IconButton>
            </Box>
          );
        },
      },
    ];
  
    return (
      <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Header title="NEWSLETTER" subtitle="Managing the Newsletter" />
          {/* <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => handleOpenDialog(false)}
          >
            Add Newsletter
          </Button> */}
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
          }}
        >
          <DataGrid checkboxSelection rows={newsLetter} columns={columns} />
        </Box>
  
        {/* Add/Edit Dialog */}
        <Dialog
          open={openDialog}
          onClose={handleCloseDialog}
          maxWidth="md"
          fullWidth
        >
          <DialogTitle>
            {isEdit ? "Edit NewsLetter" : "Add New NewsLetter"}
          </DialogTitle>
          <DialogContent>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "47%" },
                mt: 2,
              }}
            >
              <TextField
                label="Email"
                value={NewsLetterData.email}
                onChange={(e) =>
                  setNewsLetterData({ ...NewsLetterData, email: e.target.value })
                }
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
          <DialogTitle>NewsLetter</DialogTitle>
          <DialogContent>
            {selectedNewsLetter && (
              <Box sx={{ mt: 2 }}>
                <Typography variant="subtitle1" sx={{ mb: 1 }}>
                  <strong>email :</strong> {selectedNewsLetter.email || "N/A"}
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
  