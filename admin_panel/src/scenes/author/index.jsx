// // // // // import {
// // // // //   Box,
// // // // //   Typography,
// // // // //   useTheme,
// // // // //   IconButton,
// // // // //   Button,
// // // // //   Dialog,
// // // // //   DialogTitle,
// // // // //   DialogContent,
// // // // //   TextField,
// // // // //   DialogActions,
// // // // // } from "@mui/material";
// // // // // import { DataGrid, GridToolbar } from "@mui/x-data-grid";
// // // // // import { tokens } from "../../theme";
// // // // // import { mockDataTeam } from "../../data/mockData";
// // // // // import EditIcon from "@mui/icons-material/Edit";
// // // // // import DeleteIcon from "@mui/icons-material/Delete";
// // // // // import AddIcon from "@mui/icons-material/Add";
// // // // // import InfoIcon from "@mui/icons-material/Info";
// // // // // import Header from "../../components/Header";
// // // // // import { useState } from "react";

// // // // // const Author = () => {
// // // // //   const theme = useTheme();
// // // // //   const colors = tokens(theme.palette.mode);
// // // // //   const [openDialog, setOpenDialog] = useState(false);
// // // // //   const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
// // // // //   const [selectedAuthor, setSelectedAuthor] = useState(null);
// // // // //   const [isEdit, setIsEdit] = useState(false);
// // // // //   const [authorData, setAuthorData] = useState({
// // // // //     authorName: "",
// // // // //     image: "",
// // // // //     bio: "",
// // // // //   });

// // // // //   const handleOpenDialog = (isEditMode = false, data = null) => {
// // // // //     setIsEdit(isEditMode);
// // // // //     if (data) {
// // // // //       setAuthorData(data);
// // // // //     } else {
// // // // //       setAuthorData({
// // // // //         authorName: "",
// // // // //         image: "",
// // // // //         bio: "",
// // // // //       });
// // // // //     }
// // // // //     setOpenDialog(true);
// // // // //   };

// // // // //   const handleCloseDialog = () => {
// // // // //     setOpenDialog(false);
// // // // //   };

// // // // //   const handleOpenDetails = (book) => {
// // // // //     setSelectedAuthor(book);
// // // // //     setOpenDetailsDialog(true);
// // // // //   };

// // // // //   const handleCloseDetails = () => {
// // // // //     setOpenDetailsDialog(false);
// // // // //     setSelectedAuthor(null);
// // // // //   };

// // // // //   const handleSubmit = () => {
// // // // //     // Handle form submission here
// // // // //     console.log(authorData);
// // // // //     handleCloseDialog();
// // // // //   };

// // // // //   const handleDelete = (id) => {
// // // // //     // Handle delete functionality here
// // // // //     console.log("Delete book with id:", id);
// // // // //   };

// // // // //   const columns = [
// // // // //     { field: "id", headerName: "ID" },
// // // // //     {
// // // // //       field: "authorName",
// // // // //       headerName: "Book Name",
// // // // //       flex: 1,
// // // // //       cellClassName: "name-column--cell",
// // // // //     },
// // // // //     {
// // // // //       field: "image",
// // // // //       headerName: "Image",
// // // // //       flex: 1,
// // // // //     },
// // // // //     {
// // // // //       field: "bio",
// // // // //       headerName: "Bio",
// // // // //       flex: 1,
// // // // //     },
// // // // //     {
// // // // //       field: "actions",
// // // // //       headerName: "Actions",
// // // // //       flex: 1,
// // // // //       renderCell: (params) => {
// // // // //         return (
// // // // //           <Box>
// // // // //             <IconButton onClick={() => handleOpenDetails(params.row)}>
// // // // //               <InfoIcon />
// // // // //             </IconButton>
// // // // //             <IconButton onClick={() => handleOpenDialog(true, params.row)}>
// // // // //               <EditIcon />
// // // // //             </IconButton>
// // // // //             <IconButton onClick={() => handleDelete(params.row.id)}>
// // // // //               <DeleteIcon />
// // // // //             </IconButton>
// // // // //           </Box>
// // // // //         );
// // // // //       },
// // // // //     },
// // // // //   ];

// // // // //   return (
// // // // //     <Box m="20px">
// // // // //       <Box display="flex" justifyContent="space-between" alignItems="center">
// // // // //         <Header title="BOOK" subtitle="Managing the Books" />
// // // // //         <Button
// // // // //           variant="contained"
// // // // //           startIcon={<AddIcon />}
// // // // //           onClick={() => handleOpenDialog(false)}
// // // // //         >
// // // // //           Add Book
// // // // //         </Button>
// // // // //       </Box>

// // // // //       <Box
// // // // //         m="40px 0 0 0"
// // // // //         height="75vh"
// // // // //         sx={{
// // // // //           "& .MuiDataGrid-root": {
// // // // //             border: "none",
// // // // //           },
// // // // //           "& .MuiDataGrid-cell": {
// // // // //             borderBottom: "none",
// // // // //           },
// // // // //           "& .name-column--cell": {
// // // // //             color: colors.greenAccent[300],
// // // // //           },
// // // // //           "& .MuiDataGrid-columnHeaders": {
// // // // //             backgroundColor: colors.blueAccent[700],
// // // // //             borderBottom: "none",
// // // // //           },
// // // // //           "& .MuiDataGrid-virtualScroller": {
// // // // //             backgroundColor: colors.primary[400],
// // // // //           },
// // // // //           "& .MuiDataGrid-footerContainer": {
// // // // //             borderTop: "none",
// // // // //             backgroundColor: colors.blueAccent[700],
// // // // //           },
// // // // //           "& .MuiCheckbox-root": {
// // // // //             color: `${colors.greenAccent[200]} !important`,
// // // // //           },
// // // // //           "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
// // // // //             color: `${colors.grey[100]} !important`,
// // // // //           },
// // // // //         }}
// // // // //       >
// // // // //         <DataGrid checkboxSelection rows={mockDataTeam} columns={columns} components={{ Toolbar: GridToolbar }}/>
// // // // //       </Box>

// // // // //       {/* Add/Edit Dialog */}
// // // // //       <Dialog
// // // // //         open={openDialog}
// // // // //         onClose={handleCloseDialog}
// // // // //         maxWidth="md"
// // // // //         fullWidth
// // // // //       >
// // // // //         <DialogTitle>{isEdit ? "Edit Book" : "Add New Book"}</DialogTitle>
// // // // //         <DialogContent>
// // // // //           <Box
// // // // //             component="form"
// // // // //             sx={{
// // // // //               "& .MuiTextField-root": { m: 1, width: "47%" },
// // // // //               mt: 2,
// // // // //             }}
// // // // //           >
// // // // //             <TextField
// // // // //               label="autorName"
// // // // //               value={authorData.title}
// // // // //               onChange={(e) =>
// // // // //                 setAuthorData({ ...authorData, title: e.target.value })
// // // // //               }
// // // // //             />
// // // // //             <TextField
// // // // //               label="Image URL"
// // // // //               value={authorData.image}
// // // // //               onChange={(e) =>
// // // // //                 setAuthorData({ ...authorData, image: e.target.value })
// // // // //               }
// // // // //             />
// // // // //             <TextField
// // // // //               label="Bio"
// // // // //               multiline
// // // // //               rows={4}
// // // // //               fullWidth
// // // // //               sx={{ width: "96.5% !important" }}
// // // // //               value={authorData.description}
// // // // //               onChange={(e) =>
// // // // //                 setAuthorData({ ...authorData, description: e.target.value })
// // // // //               }
// // // // //             />
// // // // //           </Box>
// // // // //         </DialogContent>
// // // // //         <DialogActions>
// // // // //           <Button onClick={handleCloseDialog}>Cancel</Button>
// // // // //           <Button onClick={handleSubmit} variant="contained">
// // // // //             {isEdit ? "Update" : "Add"}
// // // // //           </Button>
// // // // //         </DialogActions>
// // // // //       </Dialog>

// // // // //       {/* Details Dialog */}
// // // // //       <Dialog
// // // // //         open={openDetailsDialog}
// // // // //         onClose={handleCloseDetails}
// // // // //         maxWidth="sm"
// // // // //         fullWidth
// // // // //       >
// // // // //         <DialogTitle>Book Details</DialogTitle>
// // // // //         <DialogContent>
// // // // //           {selectedAuthor && (
// // // // //             <Box sx={{ mt: 2 }}>
// // // // //               <Typography variant="subtitle1" sx={{ mb: 1 }}>
// // // // //                 <strong>Author Name:</strong>{" "}
// // // // //                 {selectedAuthor.authorName || "N/A"}
// // // // //               </Typography>
// // // // //               <Typography variant="subtitle1" sx={{ mb: 1 }}>
// // // // //                 <strong>Bio:</strong> {selectedAuthor.bio || "N/A"}
// // // // //               </Typography>
// // // // //               <Typography variant="subtitle1" sx={{ mb: 1 }}>
// // // // //                 <strong>Image:</strong> {selectedAuthor.image || "N/A"}
// // // // //               </Typography>
// // // // //             </Box>
// // // // //           )}
// // // // //         </DialogContent>
// // // // //         <DialogActions>
// // // // //           <Button onClick={handleCloseDetails}>Close</Button>
// // // // //         </DialogActions>
// // // // //       </Dialog>
// // // // //     </Box>
// // // // //   );
// // // // // };

// // // // // export default Author;

// // // // // import {
// // // // //   Box,
// // // // //   Typography,
// // // // //   useTheme,
// // // // //   IconButton,
// // // // //   Button,
// // // // //   Dialog,
// // // // //   DialogTitle,
// // // // //   DialogContent,
// // // // //   TextField,
// // // // //   DialogActions,
// // // // // } from "@mui/material";
// // // // // import { DataGrid, GridToolbar } from "@mui/x-data-grid";
// // // // // import { tokens } from "../../theme";
// // // // // import { mockDataTeam } from "../../data/mockData";
// // // // // import EditIcon from "@mui/icons-material/Edit";
// // // // // import DeleteIcon from "@mui/icons-material/Delete";
// // // // // import AddIcon from "@mui/icons-material/Add";
// // // // // import InfoIcon from "@mui/icons-material/Info";
// // // // // import Header from "../../components/Header";
// // // // // import { useEffect, useState } from "react";
// // // // // import axios from "axios";
// // // // // const Author = () => {
// // // // //   const [loading, setLoading] = useState(false);
// // // // //   const [alert, setAlert] = useState({ show: false, message: "", type: "" });
// // // // //   const [authors, setAuthors] = useState([]);
// // // // //   const [error, setError] = useState(null);
// // // // //   const theme = useTheme();
// // // // //   const colors = tokens(theme.palette.mode);
// // // // //   const [openDialog, setOpenDialog] = useState(false);
// // // // //   const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
// // // // //   const [selectedAuthor, setSelectedAuthor] = useState([]);
// // // // //   const [isEdit, setIsEdit] = useState(false);
// // // // //   const [author, setAuthor] = useState([]);
// // // // //   const [authorData, setAuthorData] = useState({
// // // // //     firstName: "",
// // // // //     lastName: "",
// // // // //     email: "",
// // // // //     password: "",
// // // // //     gender: "",
// // // // //     role: "author",
// // // // //     phone: "",
// // // // //     address: "",
// // // // //   });
// // // // //   //upload image  1
// // // // //   const handleFileChange = (e) => {
// // // // //     const file = e.target.files[0];
// // // // //     if (file) {
// // // // //       setAuthorData({
// // // // //         ...authorData,
// // // // //       });
// // // // //     }
// // // // //   };
// // // // //   // 1
// // // // //   const handleInputChange = (e) => {
// // // // //     const { id, value } = e.target;
// // // // //     setAuthorData((prev) => ({
// // // // //       ...prev,
// // // // //       [id]: value,
// // // // //     }));
// // // // //   };
// // // // //   const handleOpenDialog = (isEditMode = false, data = null) => {
// // // // //     console.log("-----enter in handle open dialog");

// // // // //     setIsEdit(isEditMode);
// // // // //     if (isEditMode && data) {
// // // // //       console.log("📌 Editing Book Data:", data); // Debugging
// // // // //       setAuthorData({ ...data });
// // // // //     } else {
// // // // //       setAuthorData({
// // // // //         firstName: "",
// // // // //         lastName: "",
// // // // //         email: "",
// // // // //         password: "",
// // // // //         gender: "",
// // // // //         role: "author",
// // // // //         phone: "",
// // // // //         address: "",
// // // // //       });
// // // // //     }
// // // // //     setOpenDialog(true);
// // // // //     console.log("-----enter in handle open dialog");
// // // // //   };

// // // // //   const handleCloseDialog = () => {
// // // // //     setOpenDialog(false);
// // // // //   };

// // // // //   // 2
// // // // //   const handleOpenDetails = (book) => {
// // // // //     setSelectedAuthor(book);
// // // // //     setOpenDetailsDialog(true);
// // // // //   };

// // // // //   const handleCloseDetails = () => {
// // // // //     setOpenDetailsDialog(false);
// // // // //     setSelectedAuthor(null);
// // // // //   };

// // // // //   //upload image and book
// // // // //   // const handleSubmit = async () => {
// // // // //   //   // Handle form submission here
// // // // //   //   console.log(authorData);
// // // // //   //   try {
// // // // //   //     setLoading(true);

// // // // //   //     // Validate required fields
// // // // //   //     if (!authorData.authorName) {
// // // // //   //       setAlert({
// // // // //   //         open: true,
// // // // //   //         message: "required",
// // // // //   //         severity: "error",
// // // // //   //       });
// // // // //   //       return;
// // // // //   //     }
// // // // //   //     //--------------------
// // // // //   //     let imageId = null;
// // // // //   //     if (!(authorData.image instanceof File)) {
// // // // //   //       console.error("Invalid file format", authorData.image);

// // // // //   //       return;
// // // // //   //     }

// // // // //   //     // If there's a new image to upload
// // // // //   //     if (authorData.image) {
// // // // //   //       const formData = new FormData();
// // // // //   //       formData.append("file", authorData.image);
// // // // //   //       console.log(authorData.image, "book dataaaa");
// // // // //   //       // console.log(formData,"form data");

// // // // //   //       for (let pair of formData.entries()) {
// // // // //   //         console.log(`FormData Key: ${pair[0]}, Value: ${pair[1]}`);
// // // // //   //       }

// // // // //   //     // Prepare book data
// // // // //   //     const authorPayload = {
// // // // //   //       // title: bookData.title,
// // // // //   //       // author: bookData.author,
// // // // //   //       // isbn: bookData.isbn,
// // // // //   //       // category: bookData.category,
// // // // //   //       // price: bookData.price,
// // // // //   //       // publishYear: bookData.publishYear,
// // // // //   //       // publisher: bookData.publisher,
// // // // //   //       // description: bookData.description,
// // // // //   //       // totalCopy: bookData.totalCopy,
// // // // //   //       // authorName: authorData.authorName,
// // // // //   //       // bio: authorData.bio,

// // // // //   //       firstName: authorData.firstName,
// // // // //   //       lastName: authorData.lastName,
// // // // //   //       email: authorData.email,
// // // // //   //       password: authorData.password,
// // // // //   //       gender: authorData.gender,
// // // // //   //       role: authorData.role,
// // // // //   //       phone: authorData.phone,
// // // // //   //       address: authorData.address
// // // // //   //     };

// // // // //   //     let response1;

// // // // //   //       response1 = await axios.post(
// // // // //   //         `${process.env.REACT_APP_BASE_URL}/admin/author/create`,
// // // // //   //         authorData
// // // // //   //       );
// // // // //   //       setAlert({
// // // // //   //         open: true,
// // // // //   //         message: "Book added successfully",
// // // // //   //         severity: "success",
// // // // //   //       });

// // // // //   //     // Refresh the book list
// // // // //   //     fetchAuthor();

// // // // //   //     handleCloseDialog();
// // // // //   //   } catch (err) {
// // // // //   //     console.error("Error saving book:", error);
// // // // //   //     setAlert({
// // // // //   //       open: true,
// // // // //   //       message: `Failed to ${isEdit ? "update" : "add"} book: ${
// // // // //   //         error.response?.data?.message || error.message
// // // // //   //       }`,
// // // // //   //       severity: "error",
// // // // //   //     });
// // // // //   //   } finally {
// // // // //   //     setLoading(false);
// // // // //   //   }
// // // // //   // };

// // // // //   const handleSubmit = async () => {
// // // // //     // Handle form submission here
// // // // //     console.log(authorData);

// // // // //     try {
// // // // //       let authToken = localStorage.getItem("authToken");

// // // // //       setLoading(true);

// // // // //       // Validate required fields
// // // // //       if (!authorData.authorName) {
// // // // //         setAlert({
// // // // //           open: true,
// // // // //           message: "Author name is required",
// // // // //           severity: "error",
// // // // //         });
// // // // //         return;
// // // // //       }

// // // // //       // Prepare author data payload
// // // // //       const authorPayload = {
// // // // //         firstName: authorData.firstName,
// // // // //         lastName: authorData.lastName,
// // // // //         email: authorData.email,
// // // // //         password: authorData.password,
// // // // //         gender: authorData.gender,
// // // // //         role: authorData.role,
// // // // //         phone: authorData.phone,
// // // // //         address: authorData.address,
// // // // //         authorName: authorData.authorName,
// // // // //         bio: authorData.bio,
// // // // //       };

// // // // //       // Send author data to API
// // // // //       const response = await axios.post(
// // // // //         `${process.env.REACT_APP_BASE_URL}/admin/author/create`,
// // // // //         authorPayload,
// // // // //         {
// // // // //           headers: {
// // // // //             Authorization: authToken,
// // // // //             "Content-Type": "application/json",
// // // // //           },
// // // // //         }
// // // // //       );

// // // // //       // Refresh the author list
// // // // //       fetchAuthor();
// // // // //       handleCloseDialog();
// // // // //     } catch (error) {
// // // // //       console.error("Error saving author:", error);
// // // // //     } finally {
// // // // //       setLoading(false);
// // // // //     }
// // // // //   };

// // // // //   //delete ...
// // // // //   // const handleDelete = async (id) => {
// // // // //   //   if (window.confirm("Are you sure you want to delete this book?")) {
// // // // //   //     try {
// // // // //   //       const authToken = localStorage.getItem("authToken");
// // // // //   //       setLoading(true);
// // // // //   //       await axios.delete(
// // // // //   //         `${process.env.REACT_APP_BASE_URL}/admin/author/delete/${id}`,
// // // // //   //         {
// // // // //   //           headers: {
// // // // //   //             Authorization: authToken,
// // // // //   //             "Content-Type": "application/json",
// // // // //   //           },
// // // // //   //         }
// // // // //   //       );

// // // // //   //       // Update the books list
// // // // //   //       setAuthors(authors.filter((book) => book.id !== id));

// // // // //   //       setAlert({
// // // // //   //         open: true,
// // // // //   //         message: "Book deleted successfully",
// // // // //   //         severity: "success",
// // // // //   //       });
// // // // //   //       fetchAuthor();
// // // // //   //     } catch (error) {
// // // // //   //       console.error("Error deleting book:", error);
// // // // //   //       setAlert({
// // // // //   //         open: true,
// // // // //   //         message: "Failed to delete book",
// // // // //   //         severity: "error",
// // // // //   //       });
// // // // //   //     } finally {
// // // // //   //       setLoading(false);
// // // // //   //     }
// // // // //   //   }
// // // // //   // };

// // // // //   const handleDelete = async (id) => {
// // // // //     if (window.confirm("Are you sure you want to delete this author?")) {
// // // // //       try {
// // // // //         const authToken = localStorage.getItem("authToken");
// // // // //         setLoading(true);

// // // // //         // Make the API call to delete the author
// // // // //         await axios.delete(
// // // // //           `${process.env.REACT_APP_BASE_URL}/admin/author/delete/${id}`,
// // // // //           {
// // // // //             headers: {
// // // // //               Authorization: authToken,
// // // // //               "Content-Type": "application/json",
// // // // //             },
// // // // //           }
// // // // //         );

// // // // //         // Update the local state to remove the deleted author
// // // // //         setAuthor((prevAuthors) => prevAuthors.filter((item) => item.id !== id));

// // // // //         setAlert({
// // // // //           open: true,
// // // // //           message: "Author deleted successfully",
// // // // //           severity: "success",
// // // // //         });
// // // // //       } catch (error) {
// // // // //         console.error("Error deleting author:", error);
// // // // //         setAlert({
// // // // //           open: true,
// // // // //           message: "Failed to delete author: " + (error.response?.data?.message || error.message),
// // // // //           severity: "error",
// // // // //         });
// // // // //       } finally {
// // // // //         setLoading(false);
// // // // //       }
// // // // //     }
// // // // //   };

// // // // //   // for get data
// // // // //   const columns = [
// // // // //     { field: "id", headerName: "ID" },
// // // // //     // {
// // // // //     //   field: "bookName",
// // // // //     //   headerName: "Book Name",
// // // // //     //   flex: 1,
// // // // //     //   cellClassName: "name-column--cell",
// // // // //     // },
// // // // //     {
// // // // //       field: "firstName",
// // // // //       headerName: "First Name",
// // // // //       type: "text",
// // // // //       headerAlign: "left",
// // // // //       align: "left",
// // // // //     },
// // // // //     {
// // // // //       field: "lastName",
// // // // //       headerName: "Last Name",
// // // // //       flex: 1,
// // // // //     },
// // // // //     {
// // // // //       field: "email",
// // // // //       headerName: "Email",
// // // // //       flex: 1,
// // // // //     },
// // // // //     {
// // // // //       field: "password",
// // // // //       headerName: "Password",
// // // // //       flex: 1,
// // // // //     },
// // // // //     {
// // // // //       field: "gender",
// // // // //       headerName: "Gender",
// // // // //       flex: 1,
// // // // //     },
// // // // //     {
// // // // //       field: "role",
// // // // //       headerName: "Role",
// // // // //       flex: 1,
// // // // //     },
// // // // //     {
// // // // //       field: "phone",
// // // // //       headerName: "Phone",
// // // // //       flex: 1,
// // // // //     },
// // // // //     {
// // // // //       field: "address",
// // // // //       headerName: "Address",
// // // // //       flex: 1,
// // // // //     },
// // // // //     {
// // // // //       field: "actions",
// // // // //       headerName: "Actions",
// // // // //       flex: 1,
// // // // //       renderCell: (params) => {
// // // // //         return (
// // // // //           <Box>
// // // // //             <IconButton onClick={() => handleOpenDetails(params.row)}>
// // // // //               <InfoIcon />
// // // // //             </IconButton>
// // // // //             <IconButton onClick={() => handleOpenDialog(true, params.row)}>
// // // // //               <EditIcon />
// // // // //             </IconButton>
// // // // //             <IconButton onClick={() => handleDelete(params.row.id)}>
// // // // //               <DeleteIcon />
// // // // //             </IconButton>
// // // // //           </Box>
// // // // //         );
// // // // //       },
// // // // //     },
// // // // //   ];

// // // // //   const fetchAuthor = async () => {
// // // // //     try {
// // // // //       let token = localStorage.getItem("authToken");

// // // // //       const response = await axios.get(
// // // // //         `${process.env.REACT_APP_BASE_URL}/admin/author/getAll`,
// // // // //         {
// // // // //           headers: {
// // // // //             Authorization: token,
// // // // //             "Content-Type": "application/json",
// // // // //           },
// // // // //         }
// // // // //       );
// // // // //       console.log("response", response?.data?.data);

// // // // //       // Check if response.data is an array or wrapped inside another object
// // // // //       const authorArray = Array.isArray(response.data)
// // // // //         ? response.data
// // // // //         : response.data?.data || [];
// // // // //       console.log(authorArray, "shhrreeee");

// // // // //       const formattedAuthors = authorArray.map((book) => ({
// // // // //         ...book,
// // // // //         id: book._id,
// // // // //       }));
// // // // //       console.log(formattedAuthors, "hellllll");

// // // // //       setAuthor(formattedAuthors);
// // // // //     } catch (error) {
// // // // //       console.log(error);
// // // // //     }
// // // // //   };

// // // // //   useEffect(() => {
// // // // //     fetchAuthor();
// // // // //     // console.log(book, "skjcskhc");
// // // // //   }, []);

// // // // //   return (
// // // // //     <Box m="20px">
// // // // //       <Box display="flex" justifyContent="space-between" alignItems="center">
// // // // //         <Header title="AUTHOR" subtitle="Managing the Author" />
// // // // //         <Button
// // // // //           variant="contained"
// // // // //           startIcon={<AddIcon />}
// // // // //           onClick={() => handleOpenDialog(false)}
// // // // //         >
// // // // //           Add Author
// // // // //         </Button>
// // // // //       </Box>

// // // // //       <Box
// // // // //         m="40px 0 0 0"
// // // // //         height="75vh"
// // // // //         sx={{
// // // // //           "& .MuiDataGrid-root": {
// // // // //             border: "none",
// // // // //           },
// // // // //           "& .MuiDataGrid-cell": {
// // // // //             borderBottom: "none",
// // // // //           },
// // // // //           "& .name-column--cell": {
// // // // //             color: colors.greenAccent[300],
// // // // //           },
// // // // //           "& .MuiDataGrid-columnHeaders": {
// // // // //             backgroundColor: colors.blueAccent[700],
// // // // //             borderBottom: "none",
// // // // //           },
// // // // //           "& .MuiDataGrid-virtualScroller": {
// // // // //             backgroundColor: colors.primary[400],
// // // // //           },
// // // // //           "& .MuiDataGrid-footerContainer": {
// // // // //             borderTop: "none",
// // // // //             backgroundColor: colors.blueAccent[700],
// // // // //           },
// // // // //           "& .MuiCheckbox-root": {
// // // // //             color: `${colors.greenAccent[200]} !important`,
// // // // //           },
// // // // //           "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
// // // // //             color: `${colors.grey[100]} !important`,
// // // // //           },
// // // // //         }}
// // // // //       >
// // // // //         <DataGrid
// // // // //           checkboxSelection
// // // // //           rows={author}
// // // // //           columns={columns}
// // // // //           components={{ Toolbar: GridToolbar }}
// // // // //         />
// // // // //       </Box>

// // // // //       {/* Add/Edit Dialog */}
// // // // //       <Dialog
// // // // //         open={openDialog}
// // // // //         onClose={handleCloseDialog}
// // // // //         maxWidth="md"
// // // // //         fullWidth
// // // // //       >
// // // // //         <DialogTitle>{isEdit ? "Edit Book" : "Add New Book"}</DialogTitle>
// // // // //         <DialogContent>
// // // // //           <Box
// // // // //             component="form"
// // // // //             sx={{
// // // // //               "& .MuiTextField-root": { m: 1, width: "47%" },
// // // // //               mt: 2,
// // // // //             }}
// // // // //           >
// // // // //             {/* <TextField
// // // // //               label="Book Name"
// // // // //               value={bookData.bookName}
// // // // //               onChange={(e) =>
// // // // //                 setBookData({ ...bookData, bookName: e.target.value })
// // // // //               }
// // // // //             /> */}
// // // // //             <TextField
// // // // //               label="firstName"
// // // // //               id="firstName"
// // // // //               value={authorData.firstName}
// // // // //               onChange={handleInputChange}
// // // // //             />
// // // // //             <TextField
// // // // //               label="lastName"
// // // // //               id="lastName"
// // // // //               value={authorData.lastName}
// // // // //               onChange={handleInputChange}
// // // // //             />
// // // // //             <TextField
// // // // //               label="email"
// // // // //               id="email"
// // // // //               value={authorData.email}
// // // // //               onChange={handleInputChange}
// // // // //             />
// // // // //             <TextField
// // // // //               label="pasword"
// // // // //               id="password"
// // // // //               value={authorData.password}
// // // // //               onChange={handleInputChange}
// // // // //             />
// // // // //             <TextField
// // // // //               label="phone"
// // // // //               id="phone"
// // // // //               value={authorData.phone}
// // // // //               onChange={handleInputChange}
// // // // //             />
// // // // //             <TextField
// // // // //               label="address"
// // // // //               id="address"
// // // // //               value={authorData.address}
// // // // //               onChange={handleInputChange}
// // // // //             />
// // // // //           </Box>
// // // // //         </DialogContent>
// // // // //         <DialogActions>
// // // // //           <Button onClick={handleCloseDialog}>Cancel</Button>
// // // // //           <Button onClick={handleSubmit} variant="contained">
// // // // //             {isEdit ? "Update" : "Add"}
// // // // //           </Button>
// // // // //         </DialogActions>
// // // // //       </Dialog>

// // // // //       {/* Details Dialog */}
// // // // //       <Dialog
// // // // //         open={openDetailsDialog}
// // // // //         onClose={handleCloseDetails}
// // // // //         maxWidth="sm"
// // // // //         fullWidth
// // // // //       >
// // // // //         <DialogTitle>Author Details</DialogTitle>
// // // // //         <DialogContent>
// // // // //           {selectedAuthor && (
// // // // //             <Box sx={{ mt: 2 }}>
// // // // //               <Typography variant="subtitle1" sx={{ mb: 1 }}>
// // // // //                 <strong>Author Name:</strong>{" "}
// // // // //                 {selectedAuthor.authorName || "N/A"}
// // // // //               </Typography>
// // // // //               <Typography variant="subtitle1" sx={{ mb: 1 }}>
// // // // //                 <strong>Image:</strong> {selectedAuthor.image || "N/A"}
// // // // //               </Typography>
// // // // //               <Typography variant="subtitle1" sx={{ mb: 1 }}>
// // // // //                 <strong>BIO:</strong> {selectedAuthor.bio || "N/A"}
// // // // //               </Typography>
// // // // //             </Box>
// // // // //           )}
// // // // //         </DialogContent>
// // // // //         <DialogActions>
// // // // //           <Button onClick={handleCloseDetails}>Close</Button>
// // // // //         </DialogActions>
// // // // //       </Dialog>
// // // // //     </Box>
// // // // //   );
// // // // // };

// // // // // export default Author;

// // // // import {
// // // //   Box,
// // // //   Typography,
// // // //   useTheme,
// // // //   IconButton,
// // // //   Button,
// // // //   Dialog,
// // // //   DialogTitle,
// // // //   DialogContent,
// // // //   TextField,
// // // //   DialogActions,
// // // //   FormControl,
// // // //   InputLabel,
// // // //   Select,
// // // //   MenuItem,
// // // //   Alert,
// // // //   Snackbar
// // // // } from "@mui/material";
// // // // import { DataGrid, GridToolbar } from "@mui/x-data-grid";
// // // // import { tokens } from "../../theme";
// // // // import EditIcon from "@mui/icons-material/Edit";
// // // // import DeleteIcon from "@mui/icons-material/Delete";
// // // // import AddIcon from "@mui/icons-material/Add";
// // // // import InfoIcon from "@mui/icons-material/Info";
// // // // import Header from "../../components/Header";
// // // // import { useEffect, useState } from "react";
// // // // import axios from "axios";

// // // // const Author = () => {
// // // //   const [loading, setLoading] = useState(false);
// // // //   const [alert, setAlert] = useState({ show: false, message: "", severity: "" });
// // // //   const [authors, setAuthors] = useState([]);
// // // //   const [error, setError] = useState(null);
// // // //   const theme = useTheme();
// // // //   const colors = tokens(theme.palette.mode);
// // // //   const [openDialog, setOpenDialog] = useState(false);
// // // //   const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
// // // //   const [selectedAuthor, setSelectedAuthor] = useState(null);
// // // //   const [isEdit, setIsEdit] = useState(false);

// // // //   const [authorData, setAuthorData] = useState({
// // // //     firstName: "",
// // // //     lastName: "",
// // // //     email: "",
// // // //     password: "",
// // // //     gender: "",
// // // //     role: "author",
// // // //     phone: "",
// // // //     address: "",
// // // //     authorName: "",
// // // //     bio: ""
// // // //   });

// // // //   const handleInputChange = (e) => {
// // // //     const { id, value } = e.target;
// // // //     setAuthorData((prev) => ({
// // // //       ...prev,
// // // //       [id]: value,
// // // //     }));
// // // //   };

// // // //   const handleSelectChange = (e) => {
// // // //     const { name, value } = e.target;
// // // //     setAuthorData((prev) => ({
// // // //       ...prev,
// // // //       [name]: value,
// // // //     }));
// // // //   };

// // // //   const handleOpenDialog = (isEditMode = false, data = null) => {
// // // //     setIsEdit(isEditMode);
// // // //     if (isEditMode && data) {
// // // //       console.log("📌 Editing Author Data:", data);
// // // //       setAuthorData({
// // // //         id: data.id,
// // // //         firstName: data.firstName || "",
// // // //         lastName: data.lastName || "",
// // // //         email: data.email || "",
// // // //         password: data.password || "",
// // // //         gender: data.gender || "",
// // // //         role: data.role || "author",
// // // //         phone: data.phone || "",
// // // //         address: data.address || "",
// // // //         authorName: data.authorName || "",
// // // //         bio: data.bio || ""
// // // //       });
// // // //     } else {
// // // //       setAuthorData({
// // // //         firstName: "",
// // // //         lastName: "",
// // // //         email: "",
// // // //         password: "",
// // // //         gender: "",
// // // //         role: "author",
// // // //         phone: "",
// // // //         address: "",
// // // //         authorName: "",
// // // //         bio: ""
// // // //       });
// // // //     }
// // // //     setOpenDialog(true);
// // // //   };

// // // //   const handleCloseDialog = () => {
// // // //     setOpenDialog(false);
// // // //   };

// // // //   const handleOpenDetails = (author) => {
// // // //     setSelectedAuthor(author);
// // // //     setOpenDetailsDialog(true);
// // // //   };

// // // //   const handleCloseDetails = () => {
// // // //     setOpenDetailsDialog(false);
// // // //     setSelectedAuthor(null);
// // // //   };

// // // //   const handleCloseAlert = () => {
// // // //     setAlert({ ...alert, show: false });
// // // //   };

// // // //   const handleSubmit = async () => {
// // // //     try {
// // // //       const authToken = localStorage.getItem("authToken");
// // // //       setLoading(true);

// // // //       // Validate required fields
// // // //       if (!authorData.firstName || !authorData.lastName || !authorData.email) {
// // // //         setAlert({
// // // //           show: true,
// // // //           message: "First name, last name and email are required",
// // // //           severity: "error",
// // // //         });
// // // //         return;
// // // //       }

// // // //       // Prepare author data payload
// // // //       const authorPayload = {
// // // //         firstName: authorData.firstName,
// // // //         lastName: authorData.lastName,
// // // //         email: authorData.email,
// // // //         password: authorData.password,
// // // //         gender: authorData.gender,
// // // //         role: authorData.role,
// // // //         phone: authorData.phone,
// // // //         address: authorData.address,
// // // //         authorName: authorData.authorName,
// // // //         bio: authorData.bio,
// // // //       };

// // // //       let response;
// // // //       if (isEdit) {
// // // //         // Update existing author
// // // //         response = await axios.put(
// // // //           `${process.env.REACT_APP_BASE_URL}/admin/author/update/${authorData.id}`,
// // // //           authorPayload,
// // // //           {
// // // //             headers: {
// // // //               Authorization: authToken,
// // // //               "Content-Type": "application/json",
// // // //             },
// // // //           }
// // // //         );
// // // //         setAlert({
// // // //           show: true,
// // // //           message: "Author updated successfully",
// // // //           severity: "success",
// // // //         });
// // // //       } else {
// // // //         // Create new author
// // // //         response = await axios.post(
// // // //           `${process.env.REACT_APP_BASE_URL}/admin/author/create`,
// // // //           authorPayload,
// // // //           {
// // // //             headers: {
// // // //               Authorization: authToken,
// // // //               "Content-Type": "application/json",
// // // //             },
// // // //           }
// // // //         );
// // // //         setAlert({
// // // //           show: true,
// // // //           message: "Author added successfully",
// // // //           severity: "success",
// // // //         });
// // // //       }

// // // //       // Refresh the author list
// // // //       fetchAuthors();
// // // //       handleCloseDialog();
// // // //     } catch (error) {
// // // //       console.error("Error saving author:", error);
// // // //       setAlert({
// // // //         show: true,
// // // //         message: `Failed to ${isEdit ? "update" : "add"} author: ${
// // // //           error.response?.data?.message || error.message
// // // //         }`,
// // // //         severity: "error",
// // // //       });
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   // const handleDelete = async (id) => {
// // // //   //   if (window.confirm("Are you sure you want to delete this author?")) {
// // // //   //     try {
// // // //   //       const authToken = localStorage.getItem("authToken");
// // // //   //       setLoading(true);

// // // //   //       await axios.delete(
// // // //   //         `${process.env.REACT_APP_BASE_URL}/admin/author/delete/${id}`,
// // // //   //         {
// // // //   //           headers: {
// // // //   //             Authorization: authToken,
// // // //   //             "Content-Type": "application/json",
// // // //   //           },
// // // //   //         }
// // // //   //       );

// // // //   //       // Update the local state to remove the deleted author
// // // //   //       setAuthors((prevAuthors) => prevAuthors.filter((item) => item.id !== id));

// // // //   //       setAlert({
// // // //   //         show: true,
// // // //   //         message: "Author deleted successfully",
// // // //   //         severity: "success",
// // // //   //       });
// // // //   //     } catch (error) {
// // // //   //       console.error("Error deleting author:", error);
// // // //   //       setAlert({
// // // //   //         show: true,
// // // //   //         message: "Failed to delete author: " + (error.response?.data?.message || error.message),
// // // //   //         severity: "error",
// // // //   //       });
// // // //   //     } finally {
// // // //   //       setLoading(false);
// // // //   //     }
// // // //   //   }
// // // //   // };

// // // //   const handleDelete = async (id) => {
// // // //     if (window.confirm("Are you sure you want to delete this author?")) {
// // // //       try {
// // // //         const authToken = localStorage.getItem("authToken");
// // // //         setLoading(true);

// // // //         // The URL structure must match exactly what your backend expects
// // // //         // If your backend route is '/author/delete/:aId'
// // // //         const deleteUrl = `${process.env.REACT_APP_BASE_URL}/admin/author/delete/${id}`;

// // // //         // For debugging
// // // //         console.log("Deleting author with URL:", deleteUrl);
// // // //         console.log("Attempting to delete author with ID:", id);
// // // //         const response = await axios.delete(
// // // //           deleteUrl,
// // // //           {
// // // //             headers: {
// // // //               Authorization: authToken,
// // // //               "Content-Type": "application/json",
// // // //             }
// // // //           }
// // // //         );

// // // //         console.log("Delete response:", response.data);

// // // //         if (response.data.success) {
// // // //           // Refresh the author list after successful deletion
// // // //           await fetchAuthors();

// // // //           setAlert({
// // // //             show: true,
// // // //             message: response.data.message || "Author deleted successfully",
// // // //             severity: "success",
// // // //           });
// // // //         } else {
// // // //           throw new Error(response.data.msg || "Failed to delete author");
// // // //         }
// // // //       } catch (error) {
// // // //         console.error("Error deleting author:", error);
// // // //         setAlert({
// // // //           show: true,
// // // //           message: "Failed to delete author: " + (error.response?.data?.message || error.response?.data?.msg || error.message),
// // // //           severity: "error",
// // // //         });
// // // //       } finally {
// // // //         setLoading(false);
// // // //       }
// // // //     }
// // // //   };

// // // //   const columns = [
// // // //     { field: "id", headerName: "ID", width: 90 },
// // // //     {
// // // //       field: "firstName",
// // // //       headerName: "First Name",
// // // //       flex: 1,
// // // //       headerAlign: "left",
// // // //       align: "left",
// // // //     },
// // // //     {
// // // //       field: "lastName",
// // // //       headerName: "Last Name",
// // // //       flex: 1,
// // // //     },
// // // //     {
// // // //       field: "email",
// // // //       headerName: "Email",
// // // //       flex: 1,
// // // //     },
// // // //     {
// // // //       field: "gender",
// // // //       headerName: "Gender",
// // // //       flex: 1,
// // // //     },
// // // //     {
// // // //       field: "phone",
// // // //       headerName: "Phone",
// // // //       flex: 1,
// // // //     },
// // // //     {
// // // //       field: "actions",
// // // //       headerName: "Actions",
// // // //       flex: 1,
// // // //       renderCell: (params) => {
// // // //         return (
// // // //           <Box>
// // // //             <IconButton onClick={() => handleOpenDetails(params.row)}>
// // // //               <InfoIcon />
// // // //             </IconButton>
// // // //             <IconButton onClick={() => handleOpenDialog(true, params.row)}>
// // // //               <EditIcon />
// // // //             </IconButton>
// // // //             <IconButton onClick={() => handleDelete(params.row.id)}>
// // // //               <DeleteIcon />
// // // //             </IconButton>
// // // //           </Box>
// // // //         );
// // // //       },
// // // //     },
// // // //   ];

// // // //   const fetchAuthors = async () => {
// // // //     try {
// // // //       const token = localStorage.getItem("authToken");

// // // //       const response = await axios.get(
// // // //         `${process.env.REACT_APP_BASE_URL}/admin/author/getAll`,
// // // //         {
// // // //           headers: {
// // // //             Authorization: token,
// // // //             "Content-Type": "application/json",
// // // //           },
// // // //         }
// // // //       );

// // // //       // Check if response.data is an array or wrapped inside another object
// // // //       const authorArray = Array.isArray(response.data)
// // // //         ? response.data
// // // //         : response.data?.data || [];

// // // //         const formattedAuthors = authorArray.map((author) => ({
// // // //           ...author,
// // // //           id: author._id,
// // // //         }));

// // // //       setAuthors(formattedAuthors);
// // // //     } catch (error) {
// // // //       console.error("Error fetching authors:", error);
// // // //       setError(error.message);
// // // //     }
// // // //   };

// // // //   useEffect(() => {
// // // //     fetchAuthors();
// // // //   }, []);

// // // //   return (
// // // //     <Box m="20px">
// // // //       <Box display="flex" justifyContent="space-between" alignItems="center">
// // // //         <Header title="AUTHORS" subtitle="Managing the Authors" />
// // // //         <Button
// // // //           variant="contained"
// // // //           startIcon={<AddIcon />}
// // // //           onClick={() => handleOpenDialog(false)}
// // // //         >
// // // //           Add Author
// // // //         </Button>
// // // //       </Box>

// // // //       <Box
// // // //         m="40px 0 0 0"
// // // //         height="75vh"
// // // //         sx={{
// // // //           "& .MuiDataGrid-root": {
// // // //             border: "none",
// // // //           },
// // // //           "& .MuiDataGrid-cell": {
// // // //             borderBottom: "none",
// // // //           },
// // // //           "& .name-column--cell": {
// // // //             color: colors.greenAccent[300],
// // // //           },
// // // //           "& .MuiDataGrid-columnHeaders": {
// // // //             backgroundColor: colors.blueAccent[700],
// // // //             borderBottom: "none",
// // // //           },
// // // //           "& .MuiDataGrid-virtualScroller": {
// // // //             backgroundColor: colors.primary[400],
// // // //           },
// // // //           "& .MuiDataGrid-footerContainer": {
// // // //             borderTop: "none",
// // // //             backgroundColor: colors.blueAccent[700],
// // // //           },
// // // //           "& .MuiCheckbox-root": {
// // // //             color: `${colors.greenAccent[200]} !important`,
// // // //           },
// // // //           "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
// // // //             color: `${colors.grey[100]} !important`,
// // // //           },
// // // //         }}
// // // //       >
// // // //         <DataGrid
// // // //           rows={authors}
// // // //           columns={columns}
// // // //           components={{ Toolbar: GridToolbar }}
// // // //           loading={loading}
// // // //           checkboxSelection
// // // //         />
// // // //       </Box>

// // // //       {/* Snackbar for alerts */}
// // // //       <Snackbar
// // // //         open={alert.show}
// // // //         autoHideDuration={6000}
// // // //         onClose={handleCloseAlert}
// // // //         anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
// // // //       >
// // // //         <Alert onClose={handleCloseAlert} severity={alert.severity || "info"}>
// // // //           {alert.message}
// // // //         </Alert>
// // // //       </Snackbar>

// // // //       {/* Add/Edit Dialog */}
// // // //       <Dialog
// // // //         open={openDialog}
// // // //         onClose={handleCloseDialog}
// // // //         maxWidth="md"
// // // //         fullWidth
// // // //       >
// // // //         <DialogTitle>{isEdit ? "Edit Author" : "Add New Author"}</DialogTitle>
// // // //         <DialogContent>
// // // //           <Box
// // // //             component="form"
// // // //             sx={{
// // // //               "& .MuiTextField-root": { m: 1, width: "47%" },
// // // //               mt: 2,
// // // //             }}
// // // //           >
// // // //             <TextField
// // // //               label="First Name"
// // // //               id="firstName"
// // // //               value={authorData.firstName}
// // // //               onChange={handleInputChange}
// // // //               required
// // // //             />
// // // //             <TextField
// // // //               label="Last Name"
// // // //               id="lastName"
// // // //               value={authorData.lastName}
// // // //               onChange={handleInputChange}
// // // //               required
// // // //             />
// // // //             <TextField
// // // //               label="Author Name"
// // // //               id="authorName"
// // // //               value={authorData.authorName}
// // // //               onChange={handleInputChange}
// // // //             />
// // // //             <TextField
// // // //               label="Email"
// // // //               id="email"
// // // //               type="email"
// // // //               value={authorData.email}
// // // //               onChange={handleInputChange}
// // // //               required
// // // //             />
// // // //             {!isEdit && (
// // // //               <TextField
// // // //                 label="Password"
// // // //                 id="password"
// // // //                 type="password"
// // // //                 value={authorData.password}
// // // //                 onChange={handleInputChange}
// // // //                 required={!isEdit}
// // // //               />
// // // //             )}
// // // //             <FormControl sx={{ m: 1, width: "47%" }}>
// // // //               <InputLabel id="gender-label">Gender</InputLabel>
// // // //               <Select
// // // //                 labelId="gender-label"
// // // //                 id="gender"
// // // //                 name="gender"
// // // //                 value={authorData.gender}
// // // //                 label="Gender"
// // // //                 onChange={handleSelectChange}
// // // //               >
// // // //                 <MenuItem value="male">Male</MenuItem>
// // // //                 <MenuItem value="female">Female</MenuItem>
// // // //                 <MenuItem value="other">Other</MenuItem>
// // // //               </Select>
// // // //             </FormControl>
// // // //             <TextField
// // // //               label="Phone"
// // // //               id="phone"
// // // //               value={authorData.phone}
// // // //               onChange={handleInputChange}
// // // //             />
// // // //             <TextField
// // // //               label="Address"
// // // //               id="address"
// // // //               value={authorData.address}
// // // //               onChange={handleInputChange}
// // // //             />
// // // //             <TextField
// // // //               label="Bio"
// // // //               id="bio"
// // // //               value={authorData.bio}
// // // //               onChange={handleInputChange}
// // // //               multiline
// // // //               rows={4}
// // // //               fullWidth
// // // //               sx={{ width: "96%" }}
// // // //             />
// // // //           </Box>
// // // //         </DialogContent>
// // // //         <DialogActions>
// // // //           <Button onClick={handleCloseDialog}>Cancel</Button>
// // // //           <Button
// // // //             onClick={handleSubmit}
// // // //             variant="contained"
// // // //             disabled={loading}
// // // //           >
// // // //             {loading ? "Processing..." : (isEdit ? "Update" : "Add")}
// // // //           </Button>
// // // //         </DialogActions>
// // // //       </Dialog>

// // // //       {/* Details Dialog */}
// // // //       <Dialog
// // // //         open={openDetailsDialog}
// // // //         onClose={handleCloseDetails}
// // // //         maxWidth="sm"
// // // //         fullWidth
// // // //       >
// // // //         <DialogTitle>Author Details</DialogTitle>
// // // //         <DialogContent>
// // // //           {selectedAuthor && (
// // // //             <Box sx={{ mt: 2 }}>
// // // //               <Typography variant="subtitle1" sx={{ mb: 1 }}>
// // // //                 <strong>ID:</strong> {selectedAuthor.id}
// // // //               </Typography>
// // // //               <Typography variant="subtitle1" sx={{ mb: 1 }}>
// // // //                 <strong>Name:</strong> {selectedAuthor.firstName} {selectedAuthor.lastName}
// // // //               </Typography>
// // // //               <Typography variant="subtitle1" sx={{ mb: 1 }}>
// // // //                 <strong>Author Name:</strong> {selectedAuthor.authorName || "N/A"}
// // // //               </Typography>
// // // //               <Typography variant="subtitle1" sx={{ mb: 1 }}>
// // // //                 <strong>Email:</strong> {selectedAuthor.email}
// // // //               </Typography>
// // // //               <Typography variant="subtitle1" sx={{ mb: 1 }}>
// // // //                 <strong>Gender:</strong> {selectedAuthor.gender || "N/A"}
// // // //               </Typography>
// // // //               <Typography variant="subtitle1" sx={{ mb: 1 }}>
// // // //                 <strong>Phone:</strong> {selectedAuthor.phone || "N/A"}
// // // //               </Typography>
// // // //               <Typography variant="subtitle1" sx={{ mb: 1 }}>
// // // //                 <strong>Address:</strong> {selectedAuthor.address || "N/A"}
// // // //               </Typography>
// // // //               <Typography variant="subtitle1" sx={{ mb: 1 }}>
// // // //                 <strong>Role:</strong> {selectedAuthor.role || "author"}
// // // //               </Typography>
// // // //               <Typography variant="subtitle1" sx={{ mb: 1 }}>
// // // //                 <strong>Bio:</strong> {selectedAuthor.bio || "N/A"}
// // // //               </Typography>
// // // //             </Box>
// // // //           )}
// // // //         </DialogContent>
// // // //         <DialogActions>
// // // //           <Button onClick={handleCloseDetails}>Close</Button>
// // // //         </DialogActions>
// // // //       </Dialog>
// // // //     </Box>
// // // //   );
// // // // };

// // // // export default Author;

// // // import {
// // //   Box,
// // //   Typography,
// // //   useTheme,
// // //   IconButton,
// // //   Button,
// // //   Dialog,
// // //   DialogTitle,
// // //   DialogContent,
// // //   TextField,
// // //   DialogActions,
// // //   FormControl,
// // //   InputLabel,
// // //   Select,
// // //   MenuItem,
// // //   Alert,
// // //   Snackbar
// // // } from "@mui/material";
// // // import { DataGrid, GridToolbar } from "@mui/x-data-grid";
// // // import { tokens } from "../../theme";
// // // import EditIcon from "@mui/icons-material/Edit";
// // // import DeleteIcon from "@mui/icons-material/Delete";
// // // import AddIcon from "@mui/icons-material/Add";
// // // import InfoIcon from "@mui/icons-material/Info";
// // // import Header from "../../components/Header";
// // // import { useEffect, useState } from "react";
// // // import axios from "axios";

// // // const Author = () => {
// // //   const [loading, setLoading] = useState(false);
// // //   const [alert, setAlert] = useState({ show: false, message: "", severity: "" });
// // //   const [authors, setAuthors] = useState([]);
// // //   const [error, setError] = useState(null);
// // //   const theme = useTheme();
// // //   const colors = tokens(theme.palette.mode);
// // //   const [openDialog, setOpenDialog] = useState(false);
// // //   const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
// // //   const [selectedAuthor, setSelectedAuthor] = useState(null);
// // //   const [isEdit, setIsEdit] = useState(false);

// // //   const [authorData, setAuthorData] = useState({
// // //     firstName: "",
// // //     lastName: "",
// // //     email: "",
// // //     password: "",
// // //     gender: "",
// // //     role: "author",
// // //     phone: "",
// // //     address: "",
// // //     authorName: "",
// // //     bio: ""
// // //   });

// // //   const handleInputChange = (e) => {
// // //     const { id, value } = e.target;
// // //     setAuthorData((prev) => ({
// // //       ...prev,
// // //       [id]: value,
// // //     }));
// // //   };

// // //   const handleSelectChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setAuthorData((prev) => ({
// // //       ...prev,
// // //       [name]: value,
// // //     }));
// // //   };

// // //   const handleOpenDialog = (isEditMode = false, data = null) => {
// // //     setIsEdit(isEditMode);
// // //     if (isEditMode && data) {
// // //       console.log("📌 Editing Author Data:", data);
// // //       setAuthorData({
// // //         id: data.id,
// // //         firstName: data.firstName || "",
// // //         lastName: data.lastName || "",
// // //         email: data.email || "",
// // //         password: data.password || "",
// // //         gender: data.gender || "",
// // //         role: data.role || "author",
// // //         phone: data.phone || "",
// // //         address: data.address || "",
// // //         authorName: data.authorName || "",
// // //         bio: data.bio || ""
// // //       });
// // //     } else {
// // //       setAuthorData({
// // //         firstName: "",
// // //         lastName: "",
// // //         email: "",
// // //         password: "",
// // //         gender: "",
// // //         role: "author",
// // //         phone: "",
// // //         address: "",
// // //         authorName: "",
// // //         bio: ""
// // //       });
// // //     }
// // //     setOpenDialog(true);
// // //   };

// // //   const handleCloseDialog = () => {
// // //     setOpenDialog(false);
// // //   };

// // //   const handleOpenDetails = (author) => {
// // //     setSelectedAuthor(author);
// // //     setOpenDetailsDialog(true);
// // //   };

// // //   const handleCloseDetails = () => {
// // //     setOpenDetailsDialog(false);
// // //     setSelectedAuthor(null);
// // //   };

// // //   const handleCloseAlert = () => {
// // //     setAlert({ ...alert, show: false });
// // //   };

// // //   const handleSubmit = async () => {
// // //     try {
// // //       const authToken = localStorage.getItem("authToken");
// // //       setLoading(true);

// // //       // Validate required fields
// // //       if (!authorData.firstName || !authorData.lastName || !authorData.email) {
// // //         setAlert({
// // //           show: true,
// // //           message: "First name, last name and email are required",
// // //           severity: "error",
// // //         });
// // //         return;
// // //       }

// // //       // Prepare author data payload
// // //       const authorPayload = {
// // //         firstName: authorData.firstName,
// // //         lastName: authorData.lastName,
// // //         email: authorData.email,
// // //         password: authorData.password,
// // //         gender: authorData.gender,
// // //         role: authorData.role,
// // //         phone: authorData.phone,
// // //         address: authorData.address,
// // //         authorName: authorData.authorName,
// // //         bio: authorData.bio,
// // //       };

// // //       let response;
// // //       if (isEdit) {
// // //         // Update existing author - make sure to use aId consistently here
// // //         response = await axios.put(
// // //           `${process.env.REACT_APP_BASE_URL}/admin/author/update/${authorData.id}`,
// // //           authorPayload,
// // //           {
// // //             headers: {
// // //               Authorization: authToken,
// // //               "Content-Type": "application/json",
// // //             },
// // //           }
// // //         );
// // //         setAlert({
// // //           show: true,
// // //           message: "Author updated successfully",
// // //           severity: "success",
// // //         });
// // //       } else {
// // //         // Create new author
// // //         response = await axios.post(
// // //           `${process.env.REACT_APP_BASE_URL}/admin/author/create`,
// // //           authorPayload,
// // //           {
// // //             headers: {
// // //               Authorization: authToken,
// // //               "Content-Type": "application/json",
// // //             },
// // //           }
// // //         );
// // //         setAlert({
// // //           show: true,
// // //           message: "Author added successfully",
// // //           severity: "success",
// // //         });
// // //       }

// // //       // Refresh the author list
// // //       fetchAuthors();
// // //       handleCloseDialog();
// // //     } catch (error) {
// // //       console.error("Error saving author:", error);
// // //       setAlert({
// // //         show: true,
// // //         message: `Failed to ${isEdit ? "update" : "add"} author: ${
// // //           error.response?.data?.message || error.message
// // //         }`,
// // //         severity: "error",
// // //       });
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const handleDelete = async (id) => {
// // //     if (window.confirm("Are you sure you want to delete this author?")) {
// // //       try {
// // //         const authToken = localStorage.getItem("authToken");
// // //         setLoading(true);

// // //         // Debug: Log the ID being sent
// // //         console.log("Attempting to delete author with ID:", id);

// // //         // IMPORTANT: Use aId as the parameter name in the URL
// // //         const deleteUrl = `${process.env.REACT_APP_BASE_URL}/admin/author/delete/${id}`;

// // //         console.log("Delete URL:", deleteUrl);

// // //         const response = await axios.delete(
// // //           deleteUrl,
// // //           {
// // //             headers: {
// // //               Authorization: authToken,
// // //               "Content-Type": "application/json",
// // //             }
// // //           }
// // //         );

// // //         console.log("Delete response:", response.data);

// // //         if (response.data.success) {
// // //           // Always refresh the list after a successful delete response
// // //           await fetchAuthors();

// // //           setAlert({
// // //             show: true,
// // //             message: response.data.message || "Author deleted successfully",
// // //             severity: "success",
// // //           });
// // //         } else {
// // //           throw new Error(response.data.msg || "Failed to delete author");
// // //         }
// // //       } catch (error) {
// // //         console.error("Error deleting author:", error);
// // //         setAlert({
// // //           show: true,
// // //           message: "Failed to delete author: " + (error.response?.data?.message || error.response?.data?.msg || error.message),
// // //           severity: "error",
// // //         });
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     }
// // //   };

// // //   const columns = [
// // //     { field: "id", headerName: "ID", width: 90 },
// // //     {
// // //       field: "firstName",
// // //       headerName: "First Name",
// // //       flex: 1,
// // //       headerAlign: "left",
// // //       align: "left",
// // //     },
// // //     {
// // //       field: "lastName",
// // //       headerName: "Last Name",
// // //       flex: 1,
// // //     },
// // //     {
// // //       field: "email",
// // //       headerName: "Email",
// // //       flex: 1,
// // //     },
// // //     {
// // //       field: "gender",
// // //       headerName: "Gender",
// // //       flex: 1,
// // //     },
// // //     {
// // //       field: "phone",
// // //       headerName: "Phone",
// // //       flex: 1,
// // //     },
// // //     {
// // //       field: "actions",
// // //       headerName: "Actions",
// // //       flex: 1,
// // //       renderCell: (params) => {
// // //         return (
// // //           <Box>
// // //             <IconButton onClick={() => handleOpenDetails(params.row)}>
// // //               <InfoIcon />
// // //             </IconButton>
// // //             <IconButton onClick={() => handleOpenDialog(true, params.row)}>
// // //               <EditIcon />
// // //             </IconButton>
// // //             <IconButton onClick={() => handleDelete(params.row.id)}>
// // //               <DeleteIcon />
// // //             </IconButton>
// // //           </Box>
// // //         );
// // //       },
// // //     },
// // //   ];

// // //   const fetchAuthors = async () => {
// // //     try {
// // //       const token = localStorage.getItem("authToken");

// // //       const response = await axios.get(
// // //         `${process.env.REACT_APP_BASE_URL}/admin/author/getAll`,
// // //         {
// // //           headers: {
// // //             Authorization: token,
// // //             "Content-Type": "application/json",
// // //           },
// // //         }
// // //       );

// // //       // Check if response.data is an array or wrapped inside another object
// // //       const authorArray = Array.isArray(response.data)
// // //         ? response.data
// // //         : response.data?.data || [];

// // //       const formattedAuthors = authorArray.map((author) => ({
// // //         ...author,
// // //         id: author._id, // Make sure this mapping is correct
// // //       }));

// // //       setAuthors(formattedAuthors);
// // //     } catch (error) {
// // //       console.error("Error fetching authors:", error);
// // //       setError(error.message);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     fetchAuthors();
// // //   }, []);

// // //   return (
// // //     <Box m="20px">
// // //       <Box display="flex" justifyContent="space-between" alignItems="center">
// // //         <Header title="AUTHORS" subtitle="Managing the Authors" />
// // //         <Button
// // //           variant="contained"
// // //           startIcon={<AddIcon />}
// // //           onClick={() => handleOpenDialog(false)}
// // //         >
// // //           Add Author
// // //         </Button>
// // //       </Box>

// // //       <Box
// // //         m="40px 0 0 0"
// // //         height="75vh"
// // //         sx={{
// // //           "& .MuiDataGrid-root": {
// // //             border: "none",
// // //           },
// // //           "& .MuiDataGrid-cell": {
// // //             borderBottom: "none",
// // //           },
// // //           "& .name-column--cell": {
// // //             color: colors.greenAccent[300],
// // //           },
// // //           "& .MuiDataGrid-columnHeaders": {
// // //             backgroundColor: colors.blueAccent[700],
// // //             borderBottom: "none",
// // //           },
// // //           "& .MuiDataGrid-virtualScroller": {
// // //             backgroundColor: colors.primary[400],
// // //           },
// // //           "& .MuiDataGrid-footerContainer": {
// // //             borderTop: "none",
// // //             backgroundColor: colors.blueAccent[700],
// // //           },
// // //           "& .MuiCheckbox-root": {
// // //             color: `${colors.greenAccent[200]} !important`,
// // //           },
// // //           "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
// // //             color: `${colors.grey[100]} !important`,
// // //           },
// // //         }}
// // //       >
// // //         <DataGrid
// // //           rows={authors}
// // //           columns={columns}
// // //           components={{ Toolbar: GridToolbar }}
// // //           loading={loading}
// // //           checkboxSelection
// // //         />
// // //       </Box>

// // //       {/* Snackbar for alerts */}
// // //       <Snackbar
// // //         open={alert.show}
// // //         autoHideDuration={6000}
// // //         onClose={handleCloseAlert}
// // //         anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
// // //       >
// // //         <Alert onClose={handleCloseAlert} severity={alert.severity || "info"}>
// // //           {alert.message}
// // //         </Alert>
// // //       </Snackbar>

// // //       {/* Add/Edit Dialog */}
// // //       <Dialog
// // //         open={openDialog}
// // //         onClose={handleCloseDialog}
// // //         maxWidth="md"
// // //         fullWidth
// // //       >
// // //         <DialogTitle>{isEdit ? "Edit Author" : "Add New Author"}</DialogTitle>
// // //         <DialogContent>
// // //           <Box
// // //             component="form"
// // //             sx={{
// // //               "& .MuiTextField-root": { m: 1, width: "47%" },
// // //               mt: 2,
// // //             }}
// // //           >
// // //             <TextField
// // //               label="First Name"
// // //               id="firstName"
// // //               value={authorData.firstName}
// // //               onChange={handleInputChange}
// // //               required
// // //             />
// // //             <TextField
// // //               label="Last Name"
// // //               id="lastName"
// // //               value={authorData.lastName}
// // //               onChange={handleInputChange}
// // //               required
// // //             />
// // //             <TextField
// // //               label="Author Name"
// // //               id="authorName"
// // //               value={authorData.authorName}
// // //               onChange={handleInputChange}
// // //             />
// // //             <TextField
// // //               label="Email"
// // //               id="email"
// // //               type="email"
// // //               value={authorData.email}
// // //               onChange={handleInputChange}
// // //               required
// // //             />
// // //             {!isEdit && (
// // //               <TextField
// // //                 label="Password"
// // //                 id="password"
// // //                 type="password"
// // //                 value={authorData.password}
// // //                 onChange={handleInputChange}
// // //                 required={!isEdit}
// // //               />
// // //             )}
// // //             <FormControl sx={{ m: 1, width: "47%" }}>
// // //               <InputLabel id="gender-label">Gender</InputLabel>
// // //               <Select
// // //                 labelId="gender-label"
// // //                 id="gender"
// // //                 name="gender"
// // //                 value={authorData.gender}
// // //                 label="Gender"
// // //                 onChange={handleSelectChange}
// // //               >
// // //                 <MenuItem value="male">Male</MenuItem>
// // //                 <MenuItem value="female">Female</MenuItem>
// // //                 <MenuItem value="other">Other</MenuItem>
// // //               </Select>
// // //             </FormControl>
// // //             <TextField
// // //               label="Phone"
// // //               id="phone"
// // //               value={authorData.phone}
// // //               onChange={handleInputChange}
// // //             />
// // //             <TextField
// // //               label="Address"
// // //               id="address"
// // //               value={authorData.address}
// // //               onChange={handleInputChange}
// // //             />
// // //             <TextField
// // //               label="Bio"
// // //               id="bio"
// // //               value={authorData.bio}
// // //               onChange={handleInputChange}
// // //               multiline
// // //               rows={4}
// // //               fullWidth
// // //               sx={{ width: "96%" }}
// // //             />
// // //           </Box>
// // //         </DialogContent>
// // //         <DialogActions>
// // //           <Button onClick={handleCloseDialog}>Cancel</Button>
// // //           <Button
// // //             onClick={handleSubmit}
// // //             variant="contained"
// // //             disabled={loading}
// // //           >
// // //             {loading ? "Processing..." : (isEdit ? "Update" : "Add")}
// // //           </Button>
// // //         </DialogActions>
// // //       </Dialog>

// // //       {/* Details Dialog */}
// // //       <Dialog
// // //         open={openDetailsDialog}
// // //         onClose={handleCloseDetails}
// // //         maxWidth="sm"
// // //         fullWidth
// // //       >
// // //         <DialogTitle>Author Details</DialogTitle>
// // //         <DialogContent>
// // //           {selectedAuthor && (
// // //             <Box sx={{ mt: 2 }}>
// // //               <Typography variant="subtitle1" sx={{ mb: 1 }}>
// // //                 <strong>ID:</strong> {selectedAuthor.id}
// // //               </Typography>
// // //               <Typography variant="subtitle1" sx={{ mb: 1 }}>
// // //                 <strong>Name:</strong> {selectedAuthor.firstName} {selectedAuthor.lastName}
// // //               </Typography>
// // //               <Typography variant="subtitle1" sx={{ mb: 1 }}>
// // //                 <strong>Author Name:</strong> {selectedAuthor.authorName || "N/A"}
// // //               </Typography>
// // //               <Typography variant="subtitle1" sx={{ mb: 1 }}>
// // //                 <strong>Email:</strong> {selectedAuthor.email}
// // //               </Typography>
// // //               <Typography variant="subtitle1" sx={{ mb: 1 }}>
// // //                 <strong>Gender:</strong> {selectedAuthor.gender || "N/A"}
// // //               </Typography>
// // //               <Typography variant="subtitle1" sx={{ mb: 1 }}>
// // //                 <strong>Phone:</strong> {selectedAuthor.phone || "N/A"}
// // //               </Typography>
// // //               <Typography variant="subtitle1" sx={{ mb: 1 }}>
// // //                 <strong>Address:</strong> {selectedAuthor.address || "N/A"}
// // //               </Typography>
// // //               <Typography variant="subtitle1" sx={{ mb: 1 }}>
// // //                 <strong>Role:</strong> {selectedAuthor.role || "author"}
// // //               </Typography>
// // //               <Typography variant="subtitle1" sx={{ mb: 1 }}>
// // //                 <strong>Bio:</strong> {selectedAuthor.bio || "N/A"}
// // //               </Typography>
// // //             </Box>
// // //           )}
// // //         </DialogContent>
// // //         <DialogActions>
// // //           <Button onClick={handleCloseDetails}>Close</Button>
// // //         </DialogActions>
// // //       </Dialog>
// // //     </Box>
// // //   );
// // // };

// // // export default Author;

// // import {
// //   Box,
// //   Typography,
// //   useTheme,
// //   IconButton,
// //   Button,
// //   Dialog,
// //   DialogTitle,
// //   DialogContent,
// //   TextField,
// //   DialogActions,
// //   FormControl,
// //   InputLabel,
// //   Select,
// //   MenuItem,
// //   Alert,
// //   Snackbar
// // } from "@mui/material";
// // import { DataGrid, GridToolbar } from "@mui/x-data-grid";
// // import { tokens } from "../../theme";
// // import EditIcon from "@mui/icons-material/Edit";
// // import DeleteIcon from "@mui/icons-material/Delete";
// // import AddIcon from "@mui/icons-material/Add";
// // import InfoIcon from "@mui/icons-material/Info";
// // import Header from "../../components/Header";
// // import { useEffect, useState } from "react";
// // import axios from "axios";

// // const Author = () => {
// //   const [loading, setLoading] = useState(false);
// //   const [alert, setAlert] = useState({ show: false, message: "", severity: "" });
// //   const [authors, setAuthors] = useState([]);
// //   const [error, setError] = useState(null);
// //   const theme = useTheme();
// //   const colors = tokens(theme.palette.mode);
// //   const [openDialog, setOpenDialog] = useState(false);
// //   const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
// //   const [selectedAuthor, setSelectedAuthor] = useState(null);
// //   const [isEdit, setIsEdit] = useState(false);

// //   const [authorData, setAuthorData] = useState({
// //     firstName: "",
// //     lastName: "",
// //     email: "",
// //     password: "",
// //     gender: "",
// //     role: "author",
// //     phone: "",
// //     address: "",
// //     authorName: "",
// //     bio: ""
// //   });

// //   const handleInputChange = (e) => {
// //     const { id, value } = e.target;
// //     setAuthorData((prev) => ({
// //       ...prev,
// //       [id]: value,
// //     }));
// //   };

// //   const handleSelectChange = (e) => {
// //     const { name, value } = e.target;
// //     setAuthorData((prev) => ({
// //       ...prev,
// //       [name]: value,
// //     }));
// //   };

// //   const handleOpenDialog = (isEditMode = false, data = null) => {
// //     setIsEdit(isEditMode);
// //     if (isEditMode && data) {
// //       console.log("📌 Editing Author Data:", data);
// //       setAuthorData({
// //         id: data.id,
// //         firstName: data.firstName || "",
// //         lastName: data.lastName || "",
// //         email: data.email || "",
// //         password: data.password || "",
// //         gender: data.gender || "",
// //         role: data.role || "author",
// //         phone: data.phone || "",
// //         address: data.address || "",
// //         authorName: data.authorName || "",
// //         bio: data.bio || ""
// //       });
// //     } else {
// //       setAuthorData({
// //         firstName: "",
// //         lastName: "",
// //         email: "",
// //         password: "",
// //         gender: "",
// //         role: "author",
// //         phone: "",
// //         address: "",
// //         authorName: "",
// //         bio: ""
// //       });
// //     }
// //     setOpenDialog(true);
// //   };

// //   const handleCloseDialog = () => {
// //     setOpenDialog(false);
// //   };

// //   const handleOpenDetails = (author) => {
// //     setSelectedAuthor(author);
// //     setOpenDetailsDialog(true);
// //   };

// //   const handleCloseDetails = () => {
// //     setOpenDetailsDialog(false);
// //     setSelectedAuthor(null);
// //   };

// //   const handleCloseAlert = () => {
// //     setAlert({ ...alert, show: false });
// //   };

// //   const handleSubmit = async () => {
// //     try {
// //       const authToken = localStorage.getItem("authToken");
// //       setLoading(true);

// //       // Validate required fields
// //       if (!authorData.firstName || !authorData.lastName || !authorData.email) {
// //         setAlert({
// //           show: true,
// //           message: "First name, last name and email are required",
// //           severity: "error",
// //         });
// //         return;
// //       }

// //       // Prepare author data payload
// //       const authorPayload = {
// //         firstName: authorData.firstName,
// //         lastName: authorData.lastName,
// //         email: authorData.email,
// //         password: authorData.password,
// //         gender: authorData.gender,
// //         role: authorData.role,
// //         phone: authorData.phone,
// //         address: authorData.address,
// //         authorName: authorData.authorName,
// //         bio: authorData.bio,
// //       };

// //       let response;
// //       if (isEdit) {
// //         // Update existing author - make sure to use aId consistently here
// //         response = await axios.put(
// //           `${process.env.REACT_APP_BASE_URL}/admin/author/update/${authorData.id}`,
// //           authorPayload,
// //           {
// //             headers: {
// //               Authorization: authToken,
// //               "Content-Type": "application/json",
// //             },
// //           }
// //         );
// //         setAlert({
// //           show: true,
// //           message: "Author updated successfully",
// //           severity: "success",
// //         });
// //       } else {
// //         // Create new author
// //         response = await axios.post(
// //           `${process.env.REACT_APP_BASE_URL}/admin/author/create`,
// //           authorPayload,
// //           {
// //             headers: {
// //               Authorization: authToken,
// //               "Content-Type": "application/json",
// //             },
// //           }
// //         );
// //         setAlert({
// //           show: true,
// //           message: "Author added successfully",
// //           severity: "success",
// //         });
// //       }

// //       // Refresh the author list
// //       fetchAuthors();
// //       handleCloseDialog();
// //     } catch (error) {
// //       console.error("Error saving author:", error);
// //       setAlert({
// //         show: true,
// //         message: `Failed to ${isEdit ? "update" : "add"} author: ${
// //           error.response?.data?.message || error.message
// //         }`,
// //         severity: "error",
// //       });
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handleDelete = async (id) => {
// //     if (window.confirm("Are you sure you want to delete this author?")) {
// //       try {
// //         const authToken = localStorage.getItem("authToken");
// //         setLoading(true);

// //         // Debug: Log the ID being sent
// //         console.log("Attempting to delete author with ID:", id);

// //         // Changed from id to aId as per the comment
// //         const deleteUrl = `${process.env.REACT_APP_BASE_URL}/admin/author/delete/${id}`;

// //         console.log("Delete URL:", deleteUrl);

// //         const response = await axios.delete(
// //           deleteUrl,
// //           {
// //             headers: {
// //               Authorization: authToken,
// //               "Content-Type": "application/json",
// //             }
// //           }
// //         );

// //         console.log("Delete response:", response.data);

// //         if (response.data.success) {
// //           // Always refresh the list after a successful delete response
// //           await fetchAuthors();

// //           setAlert({
// //             show: true,
// //             message: response.data.message || "Author deleted successfully",
// //             severity: "success",
// //           });
// //         } else {
// //           throw new Error(response.data.msg || "Failed to delete author");
// //         }
// //       } catch (error) {
// //         console.error("Error deleting author:", error);
// //         setAlert({
// //           show: true,
// //           message: "Failed to delete author: " + (error.response?.data?.message || error.response?.data?.msg || error.message),
// //           severity: "error",
// //         });
// //       } finally {
// //         setLoading(false);
// //       }
// //     }
// //   };

// //   const columns = [
// //     { field: "id", headerName: "ID", width: 90 },
// //     {
// //       field: "firstName",
// //       headerName: "First Name",
// //       flex: 1,
// //       headerAlign: "left",
// //       align: "left",
// //     },
// //     {
// //       field: "lastName",
// //       headerName: "Last Name",
// //       flex: 1,
// //     },
// //     {
// //       field: "email",
// //       headerName: "Email",
// //       flex: 1,
// //     },
// //     {
// //       field: "gender",
// //       headerName: "Gender",
// //       flex: 1,
// //     },
// //     {
// //       field: "phone",
// //       headerName: "Phone",
// //       flex: 1,
// //     },
// //     {
// //       field: "actions",
// //       headerName: "Actions",
// //       flex: 1,
// //       renderCell: (params) => {
// //         return (
// //           <Box>
// //             <IconButton onClick={() => handleOpenDetails(params.row)}>
// //               <InfoIcon />
// //             </IconButton>
// //             <IconButton onClick={() => handleOpenDialog(true, params.row)}>
// //               <EditIcon />
// //             </IconButton>
// //             <IconButton onClick={() => handleDelete(params.row.id)}>
// //               <DeleteIcon />
// //             </IconButton>
// //           </Box>
// //         );
// //       },
// //     },
// //   ];

// //   const fetchAuthors = async () => {
// //     try {
// //       const token = localStorage.getItem("authToken");

// //       const response = await axios.get(
// //         `${process.env.REACT_APP_BASE_URL}/admin/author/getAll`,
// //         {
// //           headers: {
// //             Authorization: token,
// //             "Content-Type": "application/json",
// //           },
// //         }
// //       );

// //       // Check if response.data is an array or wrapped inside another object
// //       const authorArray = Array.isArray(response.data)
// //         ? response.data
// //         : response.data?.data || [];

// //       const formattedAuthors = authorArray.map((author) => ({
// //         ...author,
// //         id: author._id, // Make sure this mapping is correct
// //       }));

// //       setAuthors(formattedAuthors);
// //     } catch (error) {
// //       console.error("Error fetching authors:", error);
// //       setError(error.message);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchAuthors();
// //   }, []);

// //   return (
// //     <Box m="20px">
// //       <Box display="flex" justifyContent="space-between" alignItems="center">
// //         <Header title="AUTHORS" subtitle="Managing the Authors" />
// //         <Button
// //           variant="contained"
// //           startIcon={<AddIcon />}
// //           onClick={() => handleOpenDialog(false)}
// //         >
// //           Add Author
// //         </Button>
// //       </Box>

// //       <Box
// //         m="40px 0 0 0"
// //         height="75vh"
// //         sx={{
// //           "& .MuiDataGrid-root": {
// //             border: "none",
// //           },
// //           "& .MuiDataGrid-cell": {
// //             borderBottom: "none",
// //           },
// //           "& .name-column--cell": {
// //             color: colors.greenAccent[300],
// //           },
// //           "& .MuiDataGrid-columnHeaders": {
// //             backgroundColor: colors.blueAccent[700],
// //             borderBottom: "none",
// //           },
// //           "& .MuiDataGrid-virtualScroller": {
// //             backgroundColor: colors.primary[400],
// //           },
// //           "& .MuiDataGrid-footerContainer": {
// //             borderTop: "none",
// //             backgroundColor: colors.blueAccent[700],
// //           },
// //           "& .MuiCheckbox-root": {
// //             color: `${colors.greenAccent[200]} !important`,
// //           },
// //           "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
// //             color: `${colors.grey[100]} !important`,
// //           },
// //         }}
// //       >
// //         <DataGrid
// //           rows={authors}
// //           columns={columns}
// //           components={{ Toolbar: GridToolbar }}
// //           loading={loading}
// //           checkboxSelection
// //         />
// //       </Box>

// //       {/* Snackbar for alerts */}
// //       <Snackbar
// //         open={alert.show}
// //         autoHideDuration={6000}
// //         onClose={handleCloseAlert}
// //         anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
// //       >
// //         <Alert onClose={handleCloseAlert} severity={alert.severity || "info"}>
// //           {alert.message}
// //         </Alert>
// //       </Snackbar>

// //       {/* Add/Edit Dialog */}
// //       <Dialog
// //         open={openDialog}
// //         onClose={handleCloseDialog}
// //         maxWidth="md"
// //         fullWidth
// //       >
// //         <DialogTitle>{isEdit ? "Edit Author" : "Add New Author"}</DialogTitle>
// //         <DialogContent>
// //           <Box
// //             component="form"
// //             sx={{
// //               "& .MuiTextField-root": { m: 1, width: "47%" },
// //               mt: 2,
// //             }}
// //           >
// //             <TextField
// //               label="First Name"
// //               id="firstName"
// //               value={authorData.firstName}
// //               onChange={handleInputChange}
// //               required
// //             />
// //             <TextField
// //               label="Last Name"
// //               id="lastName"
// //               value={authorData.lastName}
// //               onChange={handleInputChange}
// //               required
// //             />
// //             <TextField
// //               label="Author Name"
// //               id="authorName"
// //               value={authorData.authorName}
// //               onChange={handleInputChange}
// //             />
// //             <TextField
// //               label="Email"
// //               id="email"
// //               type="email"
// //               value={authorData.email}
// //               onChange={handleInputChange}
// //               required
// //             />
// //             {!isEdit && (
// //               <TextField
// //                 label="Password"
// //                 id="password"
// //                 type="password"
// //                 value={authorData.password}
// //                 onChange={handleInputChange}
// //                 required={!isEdit}
// //               />
// //             )}
// //             <FormControl sx={{ m: 1, width: "47%" }}>
// //               <InputLabel id="gender-label">Gender</InputLabel>
// //               <Select
// //                 labelId="gender-label"
// //                 id="gender"
// //                 name="gender"
// //                 value={authorData.gender}
// //                 label="Gender"
// //                 onChange={handleSelectChange}
// //               >
// //                 <MenuItem value="male">Male</MenuItem>
// //                 <MenuItem value="female">Female</MenuItem>
// //                 <MenuItem value="other">Other</MenuItem>
// //               </Select>
// //             </FormControl>
// //             <TextField
// //               label="Phone"
// //               id="phone"
// //               value={authorData.phone}
// //               onChange={handleInputChange}
// //             />
// //             <TextField
// //               label="Address"
// //               id="address"
// //               value={authorData.address}
// //               onChange={handleInputChange}
// //             />
// //             <TextField
// //               label="Bio"
// //               id="bio"
// //               value={authorData.bio}
// //               onChange={handleInputChange}
// //               multiline
// //               rows={4}
// //               fullWidth
// //               sx={{ width: "96%" }}
// //             />
// //           </Box>
// //         </DialogContent>
// //         <DialogActions>
// //           <Button onClick={handleCloseDialog}>Cancel</Button>
// //           <Button
// //             onClick={handleSubmit}
// //             variant="contained"
// //             disabled={loading}
// //           >
// //             {loading ? "Processing..." : (isEdit ? "Update" : "Add")}
// //           </Button>
// //         </DialogActions>
// //       </Dialog>

// //       {/* Details Dialog */}
// //       <Dialog
// //         open={openDetailsDialog}
// //         onClose={handleCloseDetails}
// //         maxWidth="sm"
// //         fullWidth
// //       >
// //         <DialogTitle>Author Details</DialogTitle>
// //         <DialogContent>
// //           {selectedAuthor && (
// //             <Box sx={{ mt: 2 }}>
// //               <Typography variant="subtitle1" sx={{ mb: 1 }}>
// //                 <strong>ID:</strong> {selectedAuthor.id}
// //               </Typography>
// //               <Typography variant="subtitle1" sx={{ mb: 1 }}>
// //                 <strong>Name:</strong> {selectedAuthor.firstName} {selectedAuthor.lastName}
// //               </Typography>
// //               <Typography variant="subtitle1" sx={{ mb: 1 }}>
// //                 <strong>Author Name:</strong> {selectedAuthor.authorName || "N/A"}
// //               </Typography>
// //               <Typography variant="subtitle1" sx={{ mb: 1 }}>
// //                 <strong>Email:</strong> {selectedAuthor.email}
// //               </Typography>
// //               <Typography variant="subtitle1" sx={{ mb: 1 }}>
// //                 <strong>Gender:</strong> {selectedAuthor.gender || "N/A"}
// //               </Typography>
// //               <Typography variant="subtitle1" sx={{ mb: 1 }}>
// //                 <strong>Phone:</strong> {selectedAuthor.phone || "N/A"}
// //               </Typography>
// //               <Typography variant="subtitle1" sx={{ mb: 1 }}>
// //                 <strong>Address:</strong> {selectedAuthor.address || "N/A"}
// //               </Typography>
// //               <Typography variant="subtitle1" sx={{ mb: 1 }}>
// //                 <strong>Role:</strong> {selectedAuthor.role || "author"}
// //               </Typography>
// //               <Typography variant="subtitle1" sx={{ mb: 1 }}>
// //                 <strong>Bio:</strong> {selectedAuthor.bio || "N/A"}
// //               </Typography>
// //             </Box>
// //           )}
// //         </DialogContent>
// //         <DialogActions>
// //           <Button onClick={handleCloseDetails}>Close</Button>
// //         </DialogActions>
// //       </Dialog>
// //     </Box>
// //   );
// // };

// // export default Author;

// // import {
// //   Box,
// //   Typography,
// //   useTheme,
// //   IconButton,
// //   Button,
// //   Dialog,
// //   DialogTitle,
// //   DialogContent,
// //   TextField,
// //   DialogActions,
// // } from "@mui/material";
// // import { DataGrid, GridToolbar } from "@mui/x-data-grid";
// // import { tokens } from "../../theme";
// // import { mockDataTeam } from "../../data/mockData";
// // import EditIcon from "@mui/icons-material/Edit";
// // import DeleteIcon from "@mui/icons-material/Delete";
// // import AddIcon from "@mui/icons-material/Add";
// // import InfoIcon from "@mui/icons-material/Info";
// // import Header from "../../components/Header";
// // import { useEffect, useState } from "react";
// // import axios from "axios";
// // const Author = () => {
// //   const [loading, setLoading] = useState(false);
// //   const [alert, setAlert] = useState({ show: false, message: "", type: "" });
// //   const [authors, setAuthors] = useState([]);
// //   const [error, setError] = useState(null);
// //   const theme = useTheme();
// //   const colors = tokens(theme.palette.mode);
// //   const [openDialog, setOpenDialog] = useState(false);
// //   const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
// //   const [selectedAuthor, setSelectedAuthor] = useState([]);
// //   const [isEdit, setIsEdit] = useState(false);
// //   const [author, setAuthor] = useState([]);
// //   const [authorData, setAuthorData] = useState({
// //     firstName: "",
// //     lastName: "",
// //     profile: "",
// //     email: "",
// //     password: "",
// //     gender: "",
// //     role: "author",
// //     phone: "",
// //     address: "",
// //     name: "",
// //     // bio: "",
// //   });
// //   //upload image  1
// //   const handleFileChange = (e) => {
// //     const file = e.target.files[0];
// //     if (file) {
// //       setAuthorData({
// //         ...authorData,
// //         profile: file,
// //       });
// //     }
// //   };
// //   // 1
// //   const handleInputChange = (e) => {
// //     const { id, value } = e.target;
// //     setAuthorData((prev) => ({
// //       ...prev,
// //       [id]: value,
// //     }));
// //   };
// //   const handleOpenDialog = (isEditMode = false, data = null) => {
// //     console.log("-----enter in handle open dialog");

// //     setIsEdit(isEditMode);
// //     if (isEditMode && data) {
// //       console.log("📌 Editing Book Data:", data); // Debugging
// //       setAuthorData({ ...data, profile: null });
// //     } else {
// //       setAuthorData({
// //         firstName: "",
// //         lastName: "",
// //         profile: "",
// //         email: "",
// //         password: "",
// //         gender: "",
// //         role: "author",
// //         phone: "",
// //         address: "",
// //         name: "",
// //         // bio: "",
// //       });
// //     }
// //     setOpenDialog(true);
// //     console.log("-----enter in handle open dialog");
// //   };

// //   const handleCloseDialog = () => {
// //     setOpenDialog(false);
// //   };

// //   // 2
// //   const handleOpenDetails = (book) => {
// //     setSelectedAuthor(book);
// //     setOpenDetailsDialog(true);
// //   };

// //   const handleCloseDetails = () => {
// //     setOpenDetailsDialog(false);
// //     setSelectedAuthor(null);
// //   };

// //   //upload image and book
// //   const handleSubmit = async () => {
// //     // Handle form submission here
// //     console.log(authorData);
// //     try {
// //       const authToken = localStorage.getItem("authToken");

// //       setLoading(true);

// //       // Validate required fields
// //       if (!authorData.firstName || !authorData.lastName || !authorData.email) {
// //         setAlert({
// //           show: true,
// //           message: "First name, last name and email are required",
// //           severity: "error",
// //         });
// //         return;
// //       }
// //       //--------------------
// //       let imageId = null;
// //       if (!(authorData.profile instanceof File)) {
// //         console.error("Invalid file format", authorData.profile);

// //         return;
// //       }

// //       // If there's a new image to upload
// //       if (authorData.profile) {
// //         const formData = new FormData();
// //         formData.append("file", authorData.profile);
// //         console.log(authorData.profile, "book dataaaa");
// //         // console.log(formData,"form data");

// //         for (let pair of formData.entries()) {
// //           console.log(`FormData Key: ${pair[0]}, Value: ${pair[1]}`);
// //         }

// //         // Upload image first
// //         const imageResponse = await axios.post(
// //           `${process.env.REACT_APP_BASE_URL}/admin/author/upload`,
// //           formData,
// //           {
// //             headers: {
// //               "Content-Type": "multipart/form-data",
// //               Authorization: authToken,
// //             },
// //           }
// //         );
// //         console.log(imageResponse, "image responseeee");

// //         imageId = imageResponse.data.data._id;
// //         console.log(imageId, "image iddddd");
// //       }
// //       //-------------------------------
// //       // Prepare book data
// //       const authorPayload = {
// //         firstName: authorData.firstName,
// //         lastName: authorData.lastName,
// //         email: authorData.email,
// //         password: authorData.password,
// //         gender: authorData.gender,
// //         role: authorData.role,
// //         phone: authorData.phone,
// //         address: authorData.address,
// //         // name: authorData.name,
// //         // bio: authorData.bio,
// //       };
// //       //-------------------image
// //       // Add image ID to payload if we have one
// //       if (imageId) {
// //         authorPayload.profile = imageId;
// //       }
// //       //-------------------image
// //       let response1;
// //       if (isEdit) {
// //         // Update existing book
// //         response1 = await axios.put(
// //           `${process.env.REACT_APP_BASE_URL}/admin/author/update/${authorData.id}`,
// //           authorPayload,
// //           {
// //             headers: {
// //               Authorization: authToken,
// //               "Content-Type": "application/json",
// //             },
// //           }
// //         );
// //         setAlert({
// //           open: true,
// //           message: "Blog updated successfully",
// //           severity: "success",
// //         });
// //       } else {
// //         // Create new book
// //         response1 = await axios.post(
// //           `${process.env.REACT_APP_BASE_URL}/admin/author/create`,
// //           authorPayload,
// //           {
// //             headers: {
// //               "Authorization": authToken,
// //               "Content-Type": "application/json",
// //             },
// //           }
// //         );
// //         setAlert({
// //           open: true,
// //           message: "Author added successfully",
// //           severity: "success",
// //         });
// //       }

// //       // Refresh the book list
// //       fetchAuthor();

// //       handleCloseDialog();
// //     } catch (err) {
// //       console.error("Error saving book:", error);
// //       setAlert({
// //         open: true,
// //         message: `Failed to ${isEdit ? "update" : "add"} book: ${
// //           error.response?.data?.message || error.message
// //         }`,
// //         severity: "error",
// //       });
// //     } finally {
// //       setLoading(false);
// //     }
// //   };
// //   //delete ...
// //   const handleDelete = async (id) => {
// //     if (window.confirm("Are you sure you want to delete this book?")) {
// //       try {
// //         const authToken = localStorage.getItem("authToken");
// //         setLoading(true);
// //         await axios.delete(
// //           `${process.env.REACT_APP_BASE_URL}/admin/author/delete/${id}`,
// //           {
// //             headers: {
// //               "Authorization": authToken,
// //               "Content-Type": "application/json",
// //             },
// //           }
// //         );

// //         // Update the books list
// //         setAuthors(authors.filter((book) => book.id !== id));
// //         console.log(id, "id");
        
// //         setAlert({
// //           open: true,
// //           message: "Book deleted successfully",
// //           severity: "success",
// //         });
// //         fetchAuthor();
// //       } catch (error) {
// //         console.error("Error deleting book:", error);
// //         setAlert({
// //           open: true,
// //           message: "Failed to delete book",
// //           severity: "error",
// //         });
// //       } finally {
// //         setLoading(false);
// //       }
// //     }
// //   };

// //   // for get data
// //   const columns = [
// //     { field: "id", headerName: "ID", width: 90 },
// //     {
// //       field: "firstName",
// //       headerName: "First Name",
// //       flex: 1,
// //       headerAlign: "left",
// //       align: "left",
// //     },
// //     {
// //       field: "lastName",
// //       headerName: "Last Name",
// //       flex: 1,
// //     },
// //     {
// //       field: "profile",
// //       headerName: "Profile",
// //       flex: 1,
// //       renderCell: (params) => (
// //         <img
// //           src={params.value}
// //           alt="Book Cover"
// //           style={{ width: 50, height: 50, objectFit: "cover", borderRadius: 5 }}
// //         />
// //       ),
// //     },
// //     {
// //       field: "email",
// //       headerName: "Email",
// //       flex: 1,
// //     },
// //     {
// //       field: "gender",
// //       headerName: "Gender",
// //       flex: 1,
// //     },
// //     {
// //       field: "phone",
// //       headerName: "Phone",
// //       flex: 1,
// //     },
// //     {
// //       field: "actions",
// //       headerName: "Actions",
// //       flex: 1,
// //       renderCell: (params) => {
// //         return (
// //           <Box>
// //             <IconButton onClick={() => handleOpenDetails(params.row)}>
// //               <InfoIcon />
// //             </IconButton>
// //             <IconButton onClick={() => handleOpenDialog(true, params.row)}>
// //               <EditIcon />
// //             </IconButton>
// //             <IconButton onClick={() => handleDelete(params.row.id)}>
// //               <DeleteIcon />
// //             </IconButton>
// //           </Box>
// //         );
// //       },
// //     },
// //   ];

// //   const fetchAuthor = async () => {
// //     try {
// //       const token = localStorage.getItem("authToken");
// //       const response = await axios.get(
// //         `${process.env.REACT_APP_BASE_URL}/admin/author/getAll`,
// //         {
// //           headers: {
// //             Authorization: token,
// //             "Content-Type": "application/json",
// //           },
// //         }
// //       );
// //       console.log("response", response?.data?.data);

// //       // Check if response.data is an array or wrapped inside another object
// //       const authorArray = Array.isArray(response.data)
// //         ? response.data
// //         : response.data?.data || [];
// //       console.log(authorArray, "shhrreeee");

// //       const formattedAuthors = authorArray.map((book) => ({
// //         ...book,
// //         id: book._id,
// //         profile: book.profile ? book.profile.url : "", // Check if image exists // Ensure DataGrid has an id
// //       }));
// //       console.log(formattedAuthors, "hellllll");

// //       setAuthor(formattedAuthors);
// //     } catch (error) {
// //       console.log(error);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchAuthor();
// //     // console.log(book, "skjcskhc");
// //   }, []);

// //   return (
// //     <Box m="20px">
// //       <Box display="flex" justifyContent="space-between" alignItems="center">
// //         <Header title="BOOK" subtitle="Managing the Books" />
// //         <Button
// //           variant="contained"
// //           startIcon={<AddIcon />}
// //           onClick={() => handleOpenDialog(false)}
// //         >
// //           Add Author
// //         </Button>
// //       </Box>

// //       <Box
// //         m="40px 0 0 0"
// //         height="75vh"
// //         sx={{
// //           "& .MuiDataGrid-root": {
// //             border: "none",
// //           },
// //           "& .MuiDataGrid-cell": {
// //             borderBottom: "none",
// //           },
// //           "& .name-column--cell": {
// //             color: colors.greenAccent[300],
// //           },
// //           "& .MuiDataGrid-columnHeaders": {
// //             backgroundColor: colors.blueAccent[700],
// //             borderBottom: "none",
// //           },
// //           "& .MuiDataGrid-virtualScroller": {
// //             backgroundColor: colors.primary[400],
// //           },
// //           "& .MuiDataGrid-footerContainer": {
// //             borderTop: "none",
// //             backgroundColor: colors.blueAccent[700],
// //           },
// //           "& .MuiCheckbox-root": {
// //             color: `${colors.greenAccent[200]} !important`,
// //           },
// //           "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
// //             color: `${colors.grey[100]} !important`,
// //           },
// //         }}
// //       >
// //         <DataGrid
// //           checkboxSelection
// //           rows={author}
// //           columns={columns}
// //           components={{ Toolbar: GridToolbar }}
// //         />
// //       </Box>

// //       {/* Add/Edit Dialog */}
// //       <Dialog
// //         open={openDialog}
// //         onClose={handleCloseDialog}
// //         maxWidth="md"
// //         fullWidth
// //       >
// //         <DialogTitle>{isEdit ? "Edit Book" : "Add New Book"}</DialogTitle>
// //         <DialogContent>
// //   <Box
// //     component="form"
// //     sx={{
// //       "& .MuiTextField-root": { m: 1, width: "47%" },
// //       mt: 2,
// //     }}
// //   >
// //     <TextField
// //       label="First Name"
// //       id="firstName"
// //       value={authorData.firstName}
// //       onChange={handleInputChange}
// //       required
// //     />
// //     <TextField
// //       label="Last Name"
// //       id="lastName"
// //       value={authorData.lastName}
// //       onChange={handleInputChange}
// //       required
// //     />
// //     {/* <TextField
// //       label="Author Name"
// //       id="name"
// //       value={authorData.name}
// //       onChange={handleInputChange}
// //     /> */}
// //     <TextField
// //       label="Email"
// //       id="email"
// //       type="email"
// //       value={authorData.email}
// //       onChange={handleInputChange}
// //       required
// //     />
// //     {!isEdit && (
// //       <TextField
// //         label="Password"
// //         id="password"
// //         type="password"
// //         value={authorData.password}
// //         onChange={handleInputChange}
// //         required={!isEdit}
// //       />
// //     )}
// //     <TextField
// //       label="Gender"
// //       id="gender"
// //       value={authorData.gender}
// //       onChange={handleInputChange}
// //     />
// //     <TextField
// //       label="Phone"
// //       id="phone"
// //       value={authorData.phone}
// //       onChange={handleInputChange}
// //     />
// //     <TextField
// //       label="Address"
// //       id="address"
// //       value={authorData.address}
// //       onChange={handleInputChange}
// //     />
// //     <TextField
// //       label="Bio"
// //       id="bio"
// //       value={authorData.bio}
// //       onChange={handleInputChange}
// //       multiline
// //       rows={4}
// //       fullWidth
// //       sx={{ width: "97%!important" }}
// //     />
// //     <TextField
// //       label="Profile"
// //       id="profile"
// //       type="file"
// //       InputLabelProps={{ shrink: true }}
// //       onChange={handleFileChange}
// //     />
// //   </Box>
// // </DialogContent>
// //         <DialogActions>
// //           <Button onClick={handleCloseDialog}>Cancel</Button>
// //           <Button onClick={handleSubmit} variant="contained">
// //             {isEdit ? "Update" : "Add"}
// //           </Button>
// //         </DialogActions>
// //       </Dialog>

// //       {/* Details Dialog */}
// //       <Dialog
// //         open={openDetailsDialog}
// //         onClose={handleCloseDetails}
// //         maxWidth="sm"
// //         fullWidth
// //       >
// //         <DialogTitle>Blog Details</DialogTitle>
// //         <DialogContent>
// //           {selectedAuthor && (
// //             <Box sx={{ mt: 2 }}>
// //               <Typography variant="subtitle1" sx={{ mb: 1 }}>
// //                 <strong>firstName:</strong> {selectedAuthor.firstName || "N/A"}
// //               </Typography>
// //               <Typography variant="subtitle1" sx={{ mb: 1 }}>
// //                 <strong>lastName:</strong> {selectedAuthor.lastName|| "N/A"}
// //               </Typography>
// //             </Box>
// //           )}
// //         </DialogContent>
// //         <DialogActions>
// //           <Button onClick={handleCloseDetails}>Close</Button>
// //         </DialogActions>
// //       </Dialog>
// //     </Box>
// //   );
// // };

// // export default Author;


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
const Author = () => {
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ show: false, message: "", type: "" });
  const [author, setAuthor] = useState([]);
  const [error, setError] = useState(null);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [openDialog, setOpenDialog] = useState(false);
  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
  const [selectedAuthor, setSelectedAuthor] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [authorData, setAuthorData] = useState({
    firstName: "",
    lastName: "",
    profile: "",
    email: "",
    password: "",
    gender: "",
    role: "author",
    phone: "",
    address: "",
    name: "",
    // bio: "",
  });
  //upload image  1
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAuthorData({
        ...authorData,
        profile: file,
      });
    }
  };
  // 1
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setAuthorData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };
  const handleOpenDialog = (isEditMode = false, data = null) => {
    console.log("-----enter in handle open dialog");

    setIsEdit(isEditMode);
    if (isEditMode && data) {
      console.log("📌 Editing Book Data:", data); // Debugging
      setAuthorData({ ...data, profile: null });
    } else {
      setAuthorData({
        firstName: "",
        lastName: "",
        profile: "",
        email: "",
        password: "",
        gender: "",
        role: "author",
        phone: "",
        address: "",
        name: "",
        // bio: "",
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
    setSelectedAuthor(book);
    setOpenDetailsDialog(true);
  };

  const handleCloseDetails = () => {
    setOpenDetailsDialog(false);
    setSelectedAuthor(null);
  };

  //upload image and book
  const handleSubmit = async () => {
    // Handle form submission here
    console.log(authorData);
    try {
      const authToken = localStorage.getItem("authToken");

      setLoading(true);

      // Validate required fields
      if (!authorData.firstName || !authorData.lastName || !authorData.email) {
        setAlert({
          show: true,
          message: "First name, last name and email are required",
          severity: "error",
        });
        return;
      }
      //--------------------
      let imageId = null;
      if (authorData.profile instanceof File) {
        const formData = new FormData();
        formData.append("file", authorData.profile);
        console.log(authorData.profile, "book dataaaa");
        // console.log(formData,"form data");

        for (let pair of formData.entries()) {
          console.log(`FormData Key: ${pair[0]}, Value: ${pair[1]}`);
        }

        // Upload image first
        const imageResponse = await axios.post(
          `${process.env.REACT_APP_BASE_URL}/admin/author/upload`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: authToken,
            },
          }
        );
        console.log(imageResponse, "image responseeee");

        imageId = imageResponse.data.data._id;
        console.log(imageId, "image iddddd");
      }
      //-------------------------------
      // Prepare book data
      const authorPayload = {
        firstName: authorData.firstName,
        lastName: authorData.lastName,
        email: authorData.email,
        password: authorData.password,
        gender: authorData.gender,
        role: authorData.role,
        phone: authorData.phone,
        address: authorData.address,
        // name: authorData.name,
        // bio: authorData.bio,
      };
      //-------------------image
      // Add image ID to payload if we have one
      if (imageId) {
        authorPayload.profile = imageId;
      }
      //-------------------image
      let response1;
      if (isEdit) {
        // Update existing book
        response1 = await axios.patch(
          `${process.env.REACT_APP_BASE_URL}/admin/author/update/${authorData._id}`, // Use _id instead of id
          authorPayload,
          {
            headers: {
              Authorization: authToken,
              "Content-Type": "application/json",
            },
          }
        );
        setAlert({
          open: true,
          message: "Author updated successfully",
          severity: "success",
        });
      } else {
        // Create new book
        response1 = await axios.post(
          `${process.env.REACT_APP_BASE_URL}/admin/author/create`,
          authorPayload,
          {
            headers: {
              "Authorization": authToken,
              "Content-Type": "application/json",
            },
          }
        );
        setAlert({
          open: true,
          message: "Author added successfully",
          severity: "success",
        });
      }

      // Refresh the book list
      fetchAuthor();

      handleCloseDialog();
    } catch (err) {
      console.error("Error saving author:", err);
      setAlert({
        open: true,
        message: `Failed to ${isEdit ? "update" : "add"} author: ${
          err.response?.data?.message || err.message
        }`,
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };
  
  //delete function - FIXED
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this author?")) {
      try {
        const authToken = localStorage.getItem("authToken");
        setLoading(true);
        
        // Send the same id as _id to the delete endpoint
        await axios.delete(
          `${process.env.REACT_APP_BASE_URL}/admin/author/delete/${id}`,
          {
            headers: {
              "Authorization": authToken,
              "Content-Type": "application/json",
            },
          }
        );
        
        // Update the authors list - use the correct state variable (author)
        setAuthor(author.filter((item) => item._id !== id));
        console.log(id, "id");
        
        setAlert({
          open: true,
          message: "Author deleted successfully",
          severity: "success",
        });
        
        // Refresh the data
        fetchAuthor();
      } catch (error) {
        console.error("Error deleting author:", error);
        setAlert({
          open: true,
          message: "Failed to delete author",
          severity: "error",
        });
      } finally {
        setLoading(false);
      }
    }
  };

  // for get data
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
            <IconButton onClick={() => handleOpenDialog(true, params.row)}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => handleDelete(params.row._id)}>
              <DeleteIcon />
            </IconButton>
          </Box>
        );
      },
    },
  ];

  const fetchAuthor = async () => {
    try {
      const token = localStorage.getItem("authToken");
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/admin/author/getAll`,
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
      console.log(authorArray, "shhrreeee");

      const formattedAuthors = authorArray.map((book) => ({
        ...book,
        id: book._id, // Keep the _id as well for consistent identification
        profile: book.profile ? book.profile.url : "", // Check if image exists
      }));
      console.log(formattedAuthors, "hellllll");

      setAuthor(formattedAuthors);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAuthor();
  }, []);

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="AUTHORS" subtitle="Managing the Authors" />
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => handleOpenDialog(false)}
        >
          Add Author
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
          rows={author}
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
        <DialogTitle>{isEdit ? "Edit Author" : "Add New Author"}</DialogTitle>
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
              id="firstName"
              value={authorData.firstName}
              onChange={handleInputChange}
              required
            />
            <TextField
              label="Last Name"
              id="lastName"
              value={authorData.lastName}
              onChange={handleInputChange}
              required
            />
            <TextField
              label="Email"
              id="email"
              type="email"
              value={authorData.email}
              onChange={handleInputChange}
              required
            />
            {!isEdit && (
              <TextField
                label="Password"
                id="password"
                type="password"
                value={authorData.password}
                onChange={handleInputChange}
                required={!isEdit}
              />
            )}
            <TextField
              label="Gender"
              id="gender"
              value={authorData.gender}
              onChange={handleInputChange}
            />
            <TextField
              label="Phone"
              id="phone"
              value={authorData.phone}
              onChange={handleInputChange}
            />
            <TextField
              label="Address"
              id="address"
              value={authorData.address}
              onChange={handleInputChange}
            />
            <TextField
              label="Bio"
              id="bio"
              value={authorData.bio}
              onChange={handleInputChange}
              multiline
              rows={4}
              fullWidth
              sx={{ width: "97%!important" }}
            />
            <TextField
              label="Profile"
              id="profile"
              type="file"
              InputLabelProps={{ shrink: true }}
              onChange={handleFileChange}
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

export default Author;

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
// const Author = () => {
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
//         role: "author",
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
//           `${process.env.REACT_APP_BASE_URL}/admin/author/upload`,
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
//           `${process.env.REACT_APP_BASE_URL}/admin/author/update/${authorData._id}`, // Use _id
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
//           `${process.env.REACT_APP_BASE_URL}/admin/author/create`,
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
//           `${process.env.REACT_APP_BASE_URL}/admin/author/delete/${id}`, 
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
//         `${process.env.REACT_APP_BASE_URL}/admin/author/getAll`,
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

// export default Author;