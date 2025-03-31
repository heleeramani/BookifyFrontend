// import {
//   Box,
//   Typography,
//   useTheme,
//   IconButton,
//   Button,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   TextField,
//   DialogActions,
// } from "@mui/material";
// import { DataGrid, GridToolbar } from "@mui/x-data-grid";
// import { tokens } from "../../theme";
// import { mockDataTeam } from "../../data/mockData";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
// import AddIcon from "@mui/icons-material/Add";
// import InfoIcon from "@mui/icons-material/Info";
// import Header from "../../components/Header";
// import { useEffect, useState } from "react";
// import axios from "axios";
// const User = () => {
//   const [loading, setLoading] = useState(false);
//   const [alert, setAlert] = useState({ show: false, message: "", type: "" });
//   const [author, setAuthor] = useState([]);
//   const [authors, setAuthors] = useState([]);
//   const [error, setError] = useState(null);
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   const [openDialog, setOpenDialog] = useState(false);
//   const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
//   const [selectedAuthor, setSelectedAuthor] = useState([]);
//   const [isEdit, setIsEdit] = useState(false);
//   const [authorData, setAuthorData] = useState({
//     firstName: "",
//     lastName: "",
//     profile: "",
//     email: "",
//     password: "",
//     gender: "",
//     role: "author",
//     phone: "",
//     address: "",
//     name: "",
//     // bio: "",
//   });
//   //upload image  1
//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setAuthorData({
//         ...authorData,
//         profile: file,
//       });
//     }
//   };
//   // 1
//   const handleInputChange = (e) => {
//     const { id, value } = e.target;
//     setAuthorData((prev) => ({
//       ...prev,
//       [id]: value,
//     }));
//   };
//   const handleOpenDialog = (isEditMode = false, data = null) => {
//     console.log("-----enter in handle open dialog");

//     setIsEdit(isEditMode);
//     if (isEditMode && data) {
//       console.log("📌 Editing Book Data:", data); // Debugging
//       setAuthorData({ ...data, profile: null });
//     } else {
//       setAuthorData({
//         firstName: "",
//         lastName: "",
//         profile: "",
//         email: "",
//         password: "",
//         gender: "",
//         role: "user",
//         phone: "",
//         address: "",
//         name: "",
//         // bio: "",
//       });
//     }
//     setOpenDialog(true);
//     console.log("-----enter in handle open dialog");
//   };

//   const handleCloseDialog = () => {
//     setOpenDialog(false);
//   };

//   // 2
//   const handleOpenDetails = (book) => {
//     setSelectedAuthor(book);
//     setOpenDetailsDialog(true);
//   };

//   const handleCloseDetails = () => {
//     setOpenDetailsDialog(false);
//     setSelectedAuthor(null);
//   };

//   //upload image and book
//   const handleSubmit = async () => {
//     // Handle form submission here
//     console.log(authorData);
//     try {
//       const authToken = localStorage.getItem("authToken");

//       setLoading(true);

//       // Validate required fields
//       if (!authorData.firstName || !authorData.lastName || !authorData.email) {
//         setAlert({
//           show: true,
//           message: "First name, last name and email are required",
//           severity: "error",
//         });
//         return;
//       }
//       //--------------------
//       let imageId = null;
//       if (authorData.profile instanceof File) {
//         const formData = new FormData();
//         formData.append("file", authorData.profile);
//         console.log(authorData.profile, "book dataaaa");
//         // console.log(formData,"form data");

//         for (let pair of formData.entries()) {
//           console.log(`FormData Key: ${pair[0]}, Value: ${pair[1]}`);
//         }

//         // Upload image first
//         const imageResponse = await axios.post(
//           `${process.env.REACT_APP_BASE_URL}/admin/user/upload`,
//           formData,
//           {
//             headers: {
//               "Content-Type": "multipart/form-data",
//               Authorization: authToken,
//             },
//           }
//         );
//         console.log(imageResponse, "image responseeee");

//         imageId = imageResponse.data.data._id;
//         console.log(imageId, "image iddddd");
//       }
//       //-------------------------------
//       // Prepare book data
//       const authorPayload = {
//         firstName: authorData.firstName,
//         lastName: authorData.lastName,
//         email: authorData.email,
//         password: authorData.password,
//         gender: authorData.gender,
//         role: authorData.role,
//         phone: authorData.phone,
//         address: authorData.address,
//         // name: authorData.name,
//         // bio: authorData.bio,
//       };
//       //-------------------image
//       // Add image ID to payload if we have one
//       if (imageId) {
//         authorPayload.profile = imageId;
//       }
//       //-------------------image
//       let response1;
//       if (isEdit) {
//         // Update existing book
//         response1 = await axios.patch(
//           `${process.env.REACT_APP_BASE_URL}/admin/user/update/${authorData._id}`, // Use _id
//           authorPayload,
//           {
//             headers: {
//               Authorization: authToken,
//               "Content-Type": "application/json",
//             },
//           }
//         );
//         setAlert({
//           open: true,
//           message: "Author updated successfully",
//           severity: "success",
//         });
//       } else {
//         // Create new book
//         response1 = await axios.post(
//           `${process.env.REACT_APP_BASE_URL}/admin/user/create`,
//           authorPayload,
//           {
//             headers: {
//               "Authorization": authToken,
//               "Content-Type": "application/json",
//             },
//           }
//         );
//         setAlert({
//           open: true,
//           message: "Author added successfully",
//           severity: "success",
//         });
//       }

//       // Refresh the book list
//       fetchAuthor();

//       handleCloseDialog();
//     } catch (err) {
//       console.error("Error saving author:", err);
//       setAlert({
//         open: true,
//         message: `Failed to ${isEdit ? "update" : "add"} author: ${
//           err.response?.data?.message || err.message
//         }`,
//         severity: "error",
//       });
//     } finally {
//       setLoading(false);
//     }
//   };
  
//   //delete function - FIXED to use aId
//   // const handleDelete = async (id) => {
//   //   if (window.confirm("Are you sure you want to delete this author?")) {
//   //     try {
//   //       const authToken = localStorage.getItem("authToken");
//   //       setLoading(true);
        
//   //       // Use aId parameter as expected by the backend
//   //       await axios.delete(
//   //         `${process.env.REACT_APP_BASE_URL}/admin/author/delete/${id}`,
//   //         {
//   //           headers: {
//   //             "Authorization": authToken,
//   //             "Content-Type": "application/json",
//   //           },
//   //           params: {
//   //             aId: id // Add the aId parameter here
//   //           }
//   //         }
//   //       );
        
//   //       // Update the authors list
//   //       setAuthor(author.filter((item) => item._id !== id));
        
//   //       setAlert({
//   //         open: true,
//   //         message: "Author deleted successfully",
//   //         severity: "success",
//   //       });
        
//   //       // Refresh the data
//   //       fetchAuthor();
//   //     } catch (error) {
//   //       console.error("Error deleting author:", error);
//   //       setAlert({
//   //         open: true,
//   //         message: "Failed to delete author",
//   //         severity: "error",
//   //       });
//   //     } finally {
//   //       setLoading(false);
//   //     }
//   //   }
//   // };

//   //  const handleDelete = async (id) => {
//   //     if (window.confirm("Are you sure you want to delete this book?")) {
//   //       try {
//   //         const authToken = localStorage.getItem("authToken")
//   //         setLoading(true);
//   //         await axios.delete(
//   //           `${process.env.REACT_APP_BASE_URL}/admin/author/delete/${id}`, {
//   //             headers: {
//   //               Authorization: authToken,
//   //               "Content-Type": "application/json",
//   //             }, }
//   //         );
  
//   //         // Update the books list
//   //         setAuthors(authors.filter((book) => book.id !== id));
  
//   //         setAlert({
//   //           open: true,
//   //           message: "Book deleted successfully",
//   //           severity: "success",
//   //         });
//   //         fetchAuthor();
//   //       } catch (error) {
//   //         console.error("Error deleting book:", error);
//   //         setAlert({
//   //           open: true,
//   //           message: "Failed to delete book",
//   //           severity: "error",
//   //         });
//   //       } finally {
//   //         setLoading(false);
//   //       }
//   //     }
//   //   };
//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete this author?")) {
//       try {
//         const authToken = localStorage.getItem("authToken");
//         setLoading(true);
        
//         // Use the correct endpoint with the author ID as a URL parameter
//         await axios.delete(
//           `${process.env.REACT_APP_BASE_URL}/admin/user/delete/${id}`, 
//           {
//             headers: {
//               Authorization: authToken,
//               "Content-Type": "application/json",
//             }
//           }
//         );
        
//         // Update the local state to remove the deleted author
//         setAuthor(author.filter((item) => item._id !== id));
        
//         setAlert({
//           open: true,
//           message: "Author deleted successfully",
//           severity: "success",
//         });
        
//         // Fetch fresh data from the server
//         fetchAuthor();
//       } catch (error) {
//         console.error("Error deleting author:", error);
//         setAlert({
//           open: true,
//           message: `Failed to delete author: ${error.response?.data?.message || error.message}`,
//           severity: "error",
//         });
//       } finally {
//         setLoading(false);
//       }
//     }
//   };
//   // for get data
//   const columns = [
//     { field: "id", headerName: "ID", width: 90 },
//     {
//       field: "firstName",
//       headerName: "First Name",
//       flex: 1,
//       headerAlign: "left",
//       align: "left",
//     },
//     {
//       field: "lastName",
//       headerName: "Last Name",
//       flex: 1,
//     },
//     {
//       field: "profile",
//       headerName: "Profile",
//       flex: 1,
//       renderCell: (params) => (
//         <img
//           src={params.value}
//           alt="Profile"
//           style={{ width: 50, height: 50, objectFit: "cover", borderRadius: 5 }}
//         />
//       ),
//     },
//     {
//       field: "email",
//       headerName: "Email",
//       flex: 1,
//     },
//     {
//       field: "gender",
//       headerName: "Gender",
//       flex: 1,
//     },
//     {
//       field: "phone",
//       headerName: "Phone",
//       flex: 1,
//     },
//     {
//       field: "actions",
//       headerName: "Actions",
//       flex: 1,
//       renderCell: (params) => {
//         return (
//           <Box>
//             <IconButton onClick={() => handleOpenDetails(params.row)}>
//               <InfoIcon />
//             </IconButton>
//             <IconButton onClick={() => handleOpenDialog(true, params.row)}>
//               <EditIcon />
//             </IconButton>
//             <IconButton onClick={() => handleDelete(params.row._id)}>
//               <DeleteIcon />
//             </IconButton>
//           </Box>
//         );
//       },
//     },
//   ];

//   const fetchAuthor = async () => {
//     try {
//       const token = localStorage.getItem("authToken");
//       const response = await axios.get(
//         `${process.env.REACT_APP_BASE_URL}/admin/user/get`,
//         {
//           headers: {
//             Authorization: token,
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       console.log("response", response?.data?.data);

//       // Check if response.data is an array or wrapped inside another object
//       const authorArray = Array.isArray(response.data)
//         ? response.data
//         : response.data?.data || [];
//       console.log(authorArray, "shhrreeee");

//       const formattedAuthors = authorArray.map((book) => ({
//         ...book,
//         id: book._id, // Keep the _id as well for consistent identification
//         profile: book.profile ? book.profile.url : "", // Check if image exists
//       }));
//       console.log(formattedAuthors, "hellllll");

//       setAuthor(formattedAuthors);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchAuthor();
//   }, []);

//   return (
//     <Box m="20px">
//       <Box display="flex" justifyContent="space-between" alignItems="center">
//         <Header title="AUTHORS" subtitle="Managing the Authors" />
//         <Button
//           variant="contained"
//           startIcon={<AddIcon />}
//           onClick={() => handleOpenDialog(false)}
//         >
//           Add Author
//         </Button>
//       </Box>

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
//           checkboxSelection
//           rows={author}
//           columns={columns}
//           components={{ Toolbar: GridToolbar }}
//         />
//       </Box>

//       {/* Add/Edit Dialog */}
//       <Dialog
//         open={openDialog}
//         onClose={handleCloseDialog}
//         maxWidth="md"
//         fullWidth
//       >
//         <DialogTitle>{isEdit ? "Edit Author" : "Add New Author"}</DialogTitle>
//         <DialogContent>
//           <Box
//             component="form"
//             sx={{
//               "& .MuiTextField-root": { m: 1, width: "47%" },
//               mt: 2,
//             }}
//           >
//             <TextField
//               label="First Name"
//               id="firstName"
//               value={authorData.firstName}
//               onChange={handleInputChange}
//               required
//             />
//             <TextField
//               label="Last Name"
//               id="lastName"
//               value={authorData.lastName}
//               onChange={handleInputChange}
//               required
//             />
//             <TextField
//               label="Email"
//               id="email"
//               type="email"
//               value={authorData.email}
//               onChange={handleInputChange}
//               required
//             />
//             {!isEdit && (
//               <TextField
//                 label="Password"
//                 id="password"
//                 type="password"
//                 value={authorData.password}
//                 onChange={handleInputChange}
//                 required={!isEdit}
//               />
//             )}
//             <TextField
//               label="Gender"
//               id="gender"
//               value={authorData.gender}
//               onChange={handleInputChange}
//             />
//             <TextField
//               label="Phone"
//               id="phone"
//               value={authorData.phone}
//               onChange={handleInputChange}
//             />
//             <TextField
//               label="Address"
//               id="address"
//               value={authorData.address}
//               onChange={handleInputChange}
//             />
//             <TextField
//               label="Bio"
//               id="bio"
//               value={authorData.bio}
//               onChange={handleInputChange}
//               multiline
//               rows={4}
//               fullWidth
//               sx={{ width: "97%!important" }}
//             />
//             <TextField
//               label="Profile"
//               id="profile"
//               type="file"
//               InputLabelProps={{ shrink: true }}
//               onChange={handleFileChange}
//             />
//           </Box>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseDialog}>Cancel</Button>
//           <Button onClick={handleSubmit} variant="contained">
//             {isEdit ? "Update" : "Add"}
//           </Button>
//         </DialogActions>
//       </Dialog>

//       {/* Details Dialog */}
//       <Dialog
//         open={openDetailsDialog}
//         onClose={handleCloseDetails}
//         maxWidth="sm"
//         fullWidth
//       >
//         <DialogTitle>Author Details</DialogTitle>
//         <DialogContent>
//           {selectedAuthor && (
//             <Box sx={{ mt: 2 }}>
//               <Typography variant="subtitle1" sx={{ mb: 1 }}>
//                 <strong>First Name:</strong> {selectedAuthor.firstName || "N/A"}
//               </Typography>
//               <Typography variant="subtitle1" sx={{ mb: 1 }}>
//                 <strong>Last Name:</strong> {selectedAuthor.lastName || "N/A"}
//               </Typography>
//               <Typography variant="subtitle1" sx={{ mb: 1 }}>
//                 <strong>Email:</strong> {selectedAuthor.email || "N/A"}
//               </Typography>
//               <Typography variant="subtitle1" sx={{ mb: 1 }}>
//                 <strong>Gender:</strong> {selectedAuthor.gender || "N/A"}
//               </Typography>
//               <Typography variant="subtitle1" sx={{ mb: 1 }}>
//                 <strong>Phone:</strong> {selectedAuthor.phone || "N/A"}
//               </Typography>
//               <Typography variant="subtitle1" sx={{ mb: 1 }}>
//                 <strong>Address:</strong> {selectedAuthor.address || "N/A"}
//               </Typography>
//             </Box>
//           )}
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseDetails}>Close</Button>
//         </DialogActions>
//       </Dialog>
//     </Box>
//   );
// };

// export default User;

import {
  Box,
  Typography,
  useTheme,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import InfoIcon from "@mui/icons-material/Info";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";

const User = () => {
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ show: false, message: "", type: "" });
  const [author, setAuthor] = useState([]);
  const [error, setError] = useState(null);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
  const [selectedAuthor, setSelectedAuthor] = useState(null);

  // Handle opening details dialog
  const handleOpenDetails = (book) => {
    setSelectedAuthor(book);
    setOpenDetailsDialog(true);
  };

  // Handle closing details dialog
  const handleCloseDetails = () => {
    setOpenDetailsDialog(false);
    setSelectedAuthor(null);
  };

  // DataGrid columns configuration - only view functionality
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "firstName",
      headerName: "First Name",
      flex: 1,
      headerAlign: "left",
      align: "left",
    },
    {
      field: "lastName",
      headerName: "Last Name",
      flex: 1,
    },
    {
      field: "profile",
      headerName: "Profile",
      flex: 1,
      renderCell: (params) => (
        <img
          src={params.value}
          alt="Profile"
          style={{ width: 50, height: 50, objectFit: "cover", borderRadius: 5 }}
        />
      ),
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "gender",
      headerName: "Gender",
      flex: 1,
    },
    {
      field: "phone",
      headerName: "Phone",
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
          </Box>
        );
      },
    },
  ];

  // Fetch author data from the API
  const fetchAuthor = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("authToken");
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/admin/user/get`,
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("response", response?.data?.data);

      // Check if response.data is an array or wrapped inside another object
      const authorArray = Array.isArray(response.data)
        ? response.data
        : response.data?.data || [];

      const formattedAuthors = authorArray.map((book) => ({
        ...book,
        id: book._id, // Keep the _id as well for consistent identification
        profile: book.profile ? book.profile.url : "", // Check if image exists
      }));

      setAuthor(formattedAuthors);
    } catch (error) {
      console.log(error);
      setError("Failed to fetch authors data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAuthor();
  }, []);

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="AUTHORS" subtitle="View Authors Information" />
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
          rows={author}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          loading={loading}
        />
      </Box>

      {/* Details Dialog - View Only */}
      <Dialog
        open={openDetailsDialog}
        onClose={handleCloseDetails}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Author Details</DialogTitle>
        <DialogContent>
          {selectedAuthor && (
            <Box sx={{ mt: 2 }}>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                <strong>First Name:</strong> {selectedAuthor.firstName || "N/A"}
              </Typography>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                <strong>Last Name:</strong> {selectedAuthor.lastName || "N/A"}
              </Typography>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                <strong>Email:</strong> {selectedAuthor.email || "N/A"}
              </Typography>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                <strong>Gender:</strong> {selectedAuthor.gender || "N/A"}
              </Typography>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                <strong>Phone:</strong> {selectedAuthor.phone || "N/A"}
              </Typography>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                <strong>Address:</strong> {selectedAuthor.address || "N/A"}
              </Typography>
              {selectedAuthor.bio && (
                <Typography variant="subtitle1" sx={{ mb: 1 }}>
                  <strong>Bio:</strong> {selectedAuthor.bio}
                </Typography>
              )}
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