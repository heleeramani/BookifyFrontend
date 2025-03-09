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
  const User = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [openDialog, setOpenDialog] = useState(false);
    const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [isEdit, setIsEdit] = useState(false);
    const [UserData, setUserData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      role: "",
      gender: "",
      phone: "",
      address: "",
      borrowedBook: "",
      purchaseBook: "",
    });
    const [loading, setLoading] = useState(false);
    const [users,setUsers] = useState([]);
    const [alert, setAlert] = useState({
      open: false,
      message: "",
      severity: "info",
    });


    const handleOpenDialog = (isEditMode = false, data = null) => {
      setIsEdit(isEditMode);
      if (data) {
        setUserData(data);
      } else {
        setUserData({
          firstName: "",
          lastName: "",
          email: "",
          role: "",
          gender: "",
          phone: "",
          address: "",
          borrowedBook: "",
          purchaseBook: "",
        });
      }
      setOpenDialog(true);
    };
  
    const handleCloseDialog = () => {
      setOpenDialog(false);
    };
  
    const handleOpenDetails = (book) => {
      setSelectedUser(book);
      setOpenDetailsDialog(true);
    };
  
    const handleCloseDetails = () => {
      setOpenDetailsDialog(false);
      setSelectedUser(null);
    };
  
    const handleSubmit = () => {
      // Handle form submission here
      console.log(UserData);
      handleCloseDialog();
    };
  
    const handleDelete = (id) => {
      // Handle delete functionality here
      console.log("Delete User with id:", id);
    };
  


    const fetchUsers = async () => {
        try {
          setLoading(true);
          const response = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/admin/user/getAll`
          );
    
          // Check if response.data is an array or wrapped inside another object
          const usersArray = Array.isArray(response.data)
            ? response.data
            : response.data?.data || [];
          console.log(usersArray, "usersArray");
    
          const formattedUsers = usersArray.map((book) => ({
            ...book,
            id: book._id,
            image: book.image ? book.image.url : null,
          }));
          console.log(usersArray.image, "image");
    
          setUsers(formattedUsers);
        } catch (error) {
          console.error("Error fetching books:", error);
          setAlert({
            open: true,
            message:
              "Failed to fetch books: " +
              (error.response?.data?.message || error.message),
            severity: "error",
          });
        } finally {
          setLoading(false);
        }
      };

      useEffect(() => {
          fetchUsers();
        }, []);

    const columns = [
      { field: "id", headerName: "ID" },
      {
        field: "firstName",
        headerName: "First Name",
        flex: 1,
        cellClassName: "name-column--cell",
      },
      {
        field: "lastName",
        headerName: "Last Name",
        type: "text",
        headerAlign: "left",
        align: "left",
      },
      {
        field: "email",
        headerName: "Email",
        type: "text",
        headerAlign: "left",
        align: "left",
      },
      {
        field: "phone",
        headerName: "Phone",
        type: "number",
        headerAlign: "left",
        align: "left",
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
  
    return (
      <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Header title="BOOK CATEGORY" subtitle="Managing the Books Category" />
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => handleOpenDialog(false)}
          >
            Add User
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
            rows={users}
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
          <DialogTitle>
            {isEdit ? "Edit User" : "Add New User"}
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
                label="First Name"
                value={UserData.firstName}
                onChange={(e) =>
                  setUserData({
                    ...UserData,
                    firstName: e.target.value,
                  })
                }
              />
              <TextField
                label="Last Name"
                value={UserData.lastName}
                onChange={(e) =>
                  setUserData({
                    ...UserData,
                    lastName: e.target.value,
                  })
                }
              />
              <TextField
                label="Email"
                value={UserData.email}
                onChange={(e) =>
                  setUserData({
                    ...UserData,
                    email: e.target.value,
                  })
                }
              />
              <TextField
                label="Role"
                value={UserData.role}
                onChange={(e) =>
                  setUserData({
                    ...UserData,
                    role: e.target.value,
                  })
                }
              />
              <TextField
                label="Gender"
                value={UserData.gender}
                onChange={(e) =>
                  setUserData({
                    ...UserData,
                    gender: e.target.value,
                  })
                }
              />
              <TextField
                label="Phone"
                value={UserData.phone}
                onChange={(e) =>
                  setUserData({
                    ...UserData,
                    phone: e.target.value,
                  })
                }
              />
              <TextField
                label="Address"
                value={UserData.address}
                onChange={(e) =>
                  setUserData({
                    ...UserData,
                    address: e.target.value,
                  })
                }
              />
              <TextField
                label="Borrowed Book"
                value={UserData.brrowedBook}
                onChange={(e) =>
                  setUserData({
                    ...UserData,
                    borrowedook: e.target.value,
                  })
                }
              />
              <TextField
                label="Purchase Book"
                value={UserData.purchaseBook}
                onChange={(e) =>
                  setUserData({
                    ...UserData,
                    purchaseBook: e.target.value,
                  })
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
          <DialogTitle>User</DialogTitle>
          <DialogContent>
            {selectedUser && (
              <Box sx={{ mt: 2 }}>
                <Typography variant="subtitle1" sx={{ mb: 1 }}>
                  <strong>First Name :</strong>{" "}
                  {selectedUser.firstName || "N/A"}
                </Typography>
                <Typography variant="subtitle1" sx={{ mb: 1 }}>
                  <strong>Last Name:</strong>{" "}
                  {selectedUser.lastName || "N/A"}
                </Typography>
                <Typography variant="subtitle1" sx={{ mb: 1 }}>
                  <strong>Email :</strong>{" "}
                  {selectedUser.email || "N/A"}
                </Typography>
                <Typography variant="subtitle1" sx={{ mb: 1 }}>
                  <strong>Role :</strong>{" "}
                  {selectedUser.role || "N/A"}
                </Typography>
                <Typography variant="subtitle1" sx={{ mb: 1 }}>
                  <strong>Gender :</strong>{" "}
                  {selectedUser.gender || "N/A"}
                </Typography>
                <Typography variant="subtitle1" sx={{ mb: 1 }}>
                  <strong>Phone :</strong>{" "}
                  {selectedUser.phone || "N/A"}
                </Typography>
                <Typography variant="subtitle1" sx={{ mb: 1 }}>
                  <strong>Address :</strong>{" "}
                  {selectedUser.address || "N/A"}
                </Typography>
                <Typography variant="subtitle1" sx={{ mb: 1 }}>
                  <strong>Borrowed Book :</strong>{" "}
                  {selectedUser.borrowedBook || "N/A"}
                </Typography>
                <Typography variant="subtitle1" sx={{ mb: 1 }}>
                  <strong>Purchase Book :</strong>{" "}
                  {selectedUser.purchaseBook || "N/A"}
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
  
  export default User;
  