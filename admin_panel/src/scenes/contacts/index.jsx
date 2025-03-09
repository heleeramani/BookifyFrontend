// import { Box } from "@mui/material";
// import { DataGrid, GridToolbar } from "@mui/x-data-grid";
// import { tokens } from "../../theme";
// import { mockDataContacts } from "../../data/mockData";
// import Header from "../../components/Header";
// import { useTheme } from "@mui/material";

// const Contacts = () => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);

//   const columns = [
//     { field: "id", headerName: "ID", flex: 0.5 },
//     { field: "registrarId", headerName: "Registrar ID" },
//     {
//       field: "name",
//       headerName: "Name",
//       flex: 1,
//       cellClassName: "name-column--cell",
//     },
//     {
//       field: "age",
//       headerName: "Age",
//       type: "number",
//       headerAlign: "left",
//       align: "left",
//     },
//     {
//       field: "phone",
//       headerName: "Phone Number",
//       flex: 1,
//     },
//     {
//       field: "email",
//       headerName: "Email",
//       flex: 1,
//     },
//     {
//       field: "address",
//       headerName: "Address",
//       flex: 1,
//     },
//     {
//       field: "city",
//       headerName: "City",
//       flex: 1,
//     },
//     {
//       field: "zipCode",
//       headerName: "Zip Code",
//       flex: 1,
//     },
//   ];

//   return (
//     <Box m="20px">
//       <Header
//         title="CONTACTS"
//         subtitle="List of Contacts for Future Reference"
//       />
//       <Box
//         m="40px 0 0 0"
//         height="75vh"
//         sx={{
//           "& .MuiDataGrid-root": {
//             border: "none",
//           },
//           "& .MuiDataGrid-cell": {
//             borderBottom: "none",
//           },
//           "& .name-column--cell": {
//             color: colors.greenAccent[300],
//           },
//           "& .MuiDataGrid-columnHeaders": {
//             backgroundColor: colors.blueAccent[700],
//             borderBottom: "none",
//           },
//           "& .MuiDataGrid-virtualScroller": {
//             backgroundColor: colors.primary[400],
//           },
//           "& .MuiDataGrid-footerContainer": {
//             borderTop: "none",
//             backgroundColor: colors.blueAccent[700],
//           },
//           "& .MuiCheckbox-root": {
//             color: `${colors.greenAccent[200]} !important`,
//           },
//           "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
//             color: `${colors.grey[100]} !important`,
//           },
//         }}
//       >
//         <DataGrid
//           rows={mockDataContacts}
//           columns={columns}
//           components={{ Toolbar: GridToolbar }}
//         />
//       </Box>
//     </Box>
//   );
// };

// export default Contacts;


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

const Contact = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [openDialog, setOpenDialog] = useState(false);
  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [ContactData, setContactData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

const [contact, setContact] = useState([]);
const [contacts, setContacts] = useState([]);
const [loading, setLoading] = useState(false);
const [alert, setAlert] = useState({ show: false, message: '', type: '' });

  const handleOpenDialog = (isEditMode = false, data = null) => {
    setIsEdit(isEditMode);
    if (data) {
      setContactData(data);
    } else {
      setContactData({
        name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
      });
    }
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleOpenDetails = (book) => {
    setContact(book);
    setOpenDetailsDialog(true);
  };
  
  const handleCloseDetails = () => {
    setOpenDetailsDialog(false);
    setContact(null);
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log(ContactData);
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
        `${process.env.REACT_APP_BASE_URL}/admin/contact/delete/${id}`
      );
      
      // Update the books list
      setContacts(contacts.filter(book => book.id !== id));
      
      setAlert({
        open: true,
        message: "Contact deleted successfully",
        severity: "success"
      });
      fetchContact()
    } catch (error) {
      console.error("Error deleting Contact:", error);
      setAlert({
        open: true,
        message: "Failed to delete Contact",
        severity: "error"
      });
    } finally {
      setLoading(false);
    }
  }
};

const fetchContact = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/admin/contact/getAll`
    );
    console.log("response", response?.data?.data);

    // Check if response.data is an array or wrapped inside another object
    const contactArray = Array.isArray(response.data)
      ? response.data
      : response.data?.data || [];
    console.log(contactArray,"shhrreeee");
    
    const formattedContact = contactArray.map((book) => ({
      ...book,
      id: book._id,
    }));
    console.log(formattedContact,"hellllll");
    
    

    setContact(formattedContact);
  } catch (error) {
    console.log(error);
  }
};

useEffect(() => {
  fetchContact();
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
        <Header title="CONTACT" subtitle="Managing the Contact" />
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
            color: `${colors.greenAccent[200]}!important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={contact} columns={columns} />
      </Box>

      {/* Add/Edit Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>
          {isEdit ? "Edit Contact" : "Add New Contact"}
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
              label="Name"
              value={ContactData.name}
              onChange={(e) =>
                setContactData({ ...ContactData, name: e.target.value })
              }
            />
            <TextField
              label="Email"
              value={ContactData.email}
              onChange={(e) =>
                setContactData({ ...ContactData, email: e.target.value })
              }
            />
            <TextField
              label="Phone"
              value={ContactData.phone}
              onChange={(e) =>
                setContactData({ ...ContactData, phone: e.target.value })
              }
            />
            <TextField
              label="Subject"
              value={ContactData.subject}
              onChange={(e) =>
                setContactData({ ...ContactData, subject: e.target.value })
              }
            />
            <TextField
              label="Message"
              value={ContactData.message}
              onChange={(e) =>
                setContactData({ ...ContactData, message: e.target.value })
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
        <DialogTitle>Contact</DialogTitle>
        <DialogContent>
          {setContact && (
            <Box sx={{ mt: 2 }}>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                <strong>email :</strong> {setContact.email || "N/A"}
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

export default Contact;