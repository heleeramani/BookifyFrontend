// // // import { Box, Typography, useTheme, IconButton, Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions } from "@mui/material";
// // // import { DataGrid, GridToolbar } from "@mui/x-data-grid";
// // // import { tokens } from "../../theme";
// // // import { mockDataTeam } from "../../data/mockData";
// // // import EditIcon from "@mui/icons-material/Edit";
// // // import DeleteIcon from "@mui/icons-material/Delete";
// // // import AddIcon from "@mui/icons-material/Add";
// // // import InfoIcon from "@mui/icons-material/Info";
// // // import Header from "../../components/Header";
// // // import { useState } from "react";

// // // const Book = () => {
// // //   const theme = useTheme();
// // //   const colors = tokens(theme.palette.mode);
// // //   const [openDialog, setOpenDialog] = useState(false);
// // //   const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
// // //   const [selectedBook, setSelectedBook] = useState(null);
// // //   const [isEdit, setIsEdit] = useState(false);
// // //   const [bookData, setBookData] = useState({
// // //     bookName: "",
// // //     title: "",
// // //     image: "",
// // //     author: "",
// // //     isbn: "",
// // //     category: "",
// // //     price: "",
// // //     publishYear: "",
// // //     publisher: "",
// // //     description: "",
// // //     totalCopy: ""
// // //   });

// // //   const handleOpenDialog = (isEditMode = false, data = null) => {
// // //     setIsEdit(isEditMode);
// // //     if (data) {
// // //       setBookData(data);
// // //     } else {
// // //       setBookData({
// // //         bookName: "",
// // //         title: "",
// // //         image: "",
// // //         author: "",
// // //         isbn: "",
// // //         category: "",
// // //         price: "",
// // //         publishYear: "",
// // //         publisher: "",
// // //         description: "",
// // //         totalCopy: ""
// // //       });
// // //     }
// // //     setOpenDialog(true);
// // //   };

// // //   const handleCloseDialog = () => {
// // //     setOpenDialog(false);
// // //   };

// // //   const handleOpenDetails = (book) => {
// // //     setSelectedBook(book);
// // //     setOpenDetailsDialog(true);
// // //   };

// // //   const handleCloseDetails = () => {
// // //     setOpenDetailsDialog(false);
// // //     setSelectedBook(null);
// // //   };

// // //   const handleSubmit = () => {
// // //     // Handle form submission here
// // //     console.log(bookData);
// // //     handleCloseDialog();
// // //   };

// // //   const handleDelete = (id) => {
// // //     // Handle delete functionality here
// // //     console.log("Delete book with id:", id);
// // //   };

// // //   const columns = [
// // //     { field: "id", headerName: "ID" },
// // //     {
// // //       field: "bookName",
// // //       headerName: "Book Name",
// // //       flex: 1,
// // //       cellClassName: "name-column--cell",
// // //     },
// // //     {
// // //       field: "title",
// // //       headerName: "Title",
// // //       type: "text",
// // //       headerAlign: "left",
// // //       align: "left",
// // //     },
// // //     {
// // //       field: "image",
// // //       headerName: "Image",
// // //       flex: 1,
// // //     },
// // //     {
// // //       field: "author",
// // //       headerName: "Author",
// // //       flex: 1,
// // //     },
// // //     {
// // //       field: "category",
// // //       headerName: "Category",
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

// // //   return (
// // //     <Box m="20px">
// // //       <Box display="flex" justifyContent="space-between" alignItems="center">
// // //         <Header title="BOOK" subtitle="Managing the Books" />
// // //         <Button
// // //           variant="contained"
// // //           startIcon={<AddIcon />}
// // //           onClick={() => handleOpenDialog(false)}
// // //         >
// // //           Add Book
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
// // //         <DataGrid checkboxSelection rows={mockDataTeam} columns={columns} components={{ Toolbar: GridToolbar }}/>
// // //       </Box>

// // //       {/* Add/Edit Dialog */}
// // //       <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="md" fullWidth>
// // //         <DialogTitle>{isEdit ? "Edit Book" : "Add New Book"}</DialogTitle>
// // //         <DialogContent>
// // //           <Box
// // //             component="form"
// // //             sx={{
// // //               '& .MuiTextField-root': { m: 1, width: '47%' },
// // //               mt: 2
// // //             }}
// // //           >
// // //             <TextField
// // //               label="Book Name"
// // //               value={bookData.bookName}
// // //               onChange={(e) => setBookData({...bookData, bookName: e.target.value})}
// // //             />
// // //             <TextField
// // //               label="Title"
// // //               value={bookData.title}
// // //               onChange={(e) => setBookData({...bookData, title: e.target.value})}
// // //             />
// // //             <TextField
// // //               label="Image URL"
// // //               value={bookData.image}
// // //               onChange={(e) => setBookData({...bookData, image: e.target.value})}
// // //             />
// // //             <TextField
// // //               label="Author"
// // //               value={bookData.author}
// // //               onChange={(e) => setBookData({...bookData, author: e.target.value})}
// // //             />
// // //             <TextField
// // //               label="ISBN"
// // //               value={bookData.isbn}
// // //               onChange={(e) => setBookData({...bookData, isbn: e.target.value})}
// // //             />
// // //             <TextField
// // //               label="Category"
// // //               value={bookData.category}
// // //               onChange={(e) => setBookData({...bookData, category: e.target.value})}
// // //             />
// // //             <TextField
// // //               label="Price"
// // //               type="number"
// // //               value={bookData.price}
// // //               onChange={(e) => setBookData({...bookData, price: e.target.value})}
// // //             />
// // //             <TextField
// // //               label="Publish Year"
// // //               value={bookData.publishYear}
// // //               onChange={(e) => setBookData({...bookData, publishYear: e.target.value})}
// // //             />
// // //             <TextField
// // //               label="Publisher"
// // //               value={bookData.publisher}
// // //               onChange={(e) => setBookData({...bookData, publisher: e.target.value})}
// // //             />
// // //             <TextField
// // //               label="Total Copies"
// // //               type="number"
// // //               value={bookData.totalCopy}
// // //               onChange={(e) => setBookData({...bookData, totalCopy: e.target.value})}
// // //             />
// // //             <TextField
// // //               label="Description"
// // //               multiline
// // //               rows={4}
// // //               fullWidth
// // //               sx={{ width: '96.5% !important' }}
// // //               value={bookData.description}
// // //               onChange={(e) => setBookData({...bookData, description: e.target.value})}
// // //             />
// // //           </Box>
// // //         </DialogContent>
// // //         <DialogActions>
// // //           <Button onClick={handleCloseDialog}>Cancel</Button>
// // //           <Button onClick={handleSubmit} variant="contained">
// // //             {isEdit ? "Update" : "Add"}
// // //           </Button>
// // //         </DialogActions>
// // //       </Dialog>

// // //       {/* Details Dialog */}
// // //       <Dialog open={openDetailsDialog} onClose={handleCloseDetails} maxWidth="sm" fullWidth>
// // //         <DialogTitle>Book Details</DialogTitle>
// // //         <DialogContent>
// // //           {selectedBook && (
// // //             <Box sx={{ mt: 2 }}>
// // //             <Typography variant="subtitle1" sx={{ mb: 1 }}>
// // //                 <strong>book Name:</strong> {selectedBook.bookName || 'N/A'}
// // //               </Typography>
// // //             <Typography variant="subtitle1" sx={{ mb: 1 }}>
// // //                 <strong>Title:</strong> {selectedBook.title || 'N/A'}
// // //               </Typography>
// // //               <Typography variant="subtitle1" sx={{ mb: 1 }}>
// // //                 <strong>Image:</strong> {selectedBook.image || 'N/A'}
// // //               </Typography>
// // //               <Typography variant="subtitle1" sx={{ mb: 1 }}>
// // //                 <strong>Author:</strong> {selectedBook.author || 'N/A'}
// // //               </Typography>
// // //               <Typography variant="subtitle1" sx={{ mb: 1 }}>
// // //                 <strong>ISBN:</strong> {selectedBook.isbn || 'N/A'}
// // //               </Typography>
// // //               <Typography variant="subtitle1" sx={{ mb: 1 }}>
// // //                 <strong>Category:</strong> {selectedBook.category || 'N/A'}
// // //               </Typography>
// // //               <Typography variant="subtitle1" sx={{ mb: 1 }}>
// // //                 <strong>Price:</strong> ${selectedBook.price || 'N/A'}
// // //               </Typography>
// // //               <Typography variant="subtitle1" sx={{ mb: 1 }}>
// // //                 <strong>Publish Year:</strong> {selectedBook.publishYear || 'N/A'}
// // //               </Typography>
// // //               <Typography variant="subtitle1" sx={{ mb: 1 }}>
// // //                 <strong>Publisher:</strong> {selectedBook.publisher || 'N/A'}
// // //               </Typography>
// // //               <Typography variant="subtitle1" sx={{ mb: 1 }}>
// // //                 <strong>Total Copies:</strong> {selectedBook.totalCopy || 'N/A'}
// // //               </Typography>
// // //               <Typography variant="subtitle1" sx={{ mb: 1 }}>
// // //                 <strong>Description:</strong>
// // //               </Typography>
// // //               <Typography variant="body1" sx={{ mb: 1 }}>
// // //                 {selectedBook.description || 'No description available.'}
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

// // // export default Book;

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
// // const Book = () => {
// //   const [loading, setLoading] = useState(false);
// //   const [alert, setAlert] = useState({ show: false, message: "", type: "" });
// //   const [books, setBooks] = useState([]);
// //   const [error, setError] = useState(null);
// //   const theme = useTheme();
// //   const colors = tokens(theme.palette.mode);
// //   const [openDialog, setOpenDialog] = useState(false);
// //   const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
// //   const [selectedBook, setSelectedBook] = useState([]);
// //   const [isEdit, setIsEdit] = useState(false);
// //   const [book, setBook] = useState([]);
// //   const [bookData, setBookData] = useState({
// //     title: "",
// //     image: "",
// //     author: "",
// //     isbn: "",
// //     category: "",
// //     price: "",
// //     publishYear: "",
// //     publisher: "",
// //     description: "",
// //     totalCopy: "",
// //   });
// //   //upload image  1
// //   const handleFileChange = (e) => {
// //     const file = e.target.files[0];
// //     if (file) {
// //       setBookData({
// //         ...bookData,
// //         image: file,
// //       });
// //     }
// //   };
// //   // 1
// //   const handleInputChange = (e) => {
// //     const { id, value } = e.target;
// //     setBookData((prev) => ({
// //       ...prev,
// //       [id]: value,
// //     }));
// //   };
// //   const handleOpenDialog = (isEditMode = false, data = null) => {
// //     console.log("-----enter in handle open dialog");

// //     setIsEdit(isEditMode);
// //     if (isEditMode && data) {
// //       console.log("📌 Editing Book Data:", data); // Debugging
// //       setBookData({ ...data, image: null });
// //     } else {
// //       setBookData({
// //         // bookName: "",
// //         title: "",
// //         image: null,
// //         author: "",
// //         isbn: "",
// //         category: "",
// //         price: "",
// //         publishYear: "",
// //         publisher: "",
// //         description: "",
// //         totalCopy: "",
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
// //     setSelectedBook(book);
// //     setOpenDetailsDialog(true);
// //   };

// //   const handleCloseDetails = () => {
// //     setOpenDetailsDialog(false);
// //     setSelectedBook(null);
// //   };

// //   //upload image and book
// //   const handleSubmit = async () => {
// //     const authToken = localStorage.getItem("authToken");
// //     // Handle form submission here
// //     console.log(bookData);
// //     try {
      
// //       setLoading(true);

// //       // Validate required fields
// //       if (!bookData.title || !bookData.author || !bookData.category) {
// //         setAlert({
// //           open: true,
// //           message: "Title, author, and category are required",
// //           severity: "error",
// //         });
// //         return;
// //       }
// //       //--------------------
// //       let imageId = null;
// //       if (!(bookData.image instanceof File)) {
// //         console.error("Invalid file format", bookData.image);

// //         return;
// //       }

// //       // If there's a new image to upload
// //       if (bookData.image) {
// //         const formData = new FormData();
// //         formData.append("file", bookData.image);
// //         console.log(bookData.image, "book dataaaa");
// //         // console.log(formData,"form data");

// //         for (let pair of formData.entries()) {
// //           console.log(`FormData Key: ${pair[0]}, Value: ${pair[1]}`);
// //         }

// //         // Upload image first
// //         const imageResponse = await axios.post(
// //           `${process.env.REACT_APP_BASE_URL}/author/book/upload`,
// //           formData,
// //           {
// //             headers: {
// //               Authorization: authToken,
// //               "Content-Type": "multipart/form-data",
// //             },
// //           }
// //         );
// //         console.log(imageResponse, "image responseeee");

// //         imageId = imageResponse.data.data._id;
// //         console.log(imageId, "image iddddd");
// //       }
// //       //-------------------------------
// //       // Prepare book data
// //       const bookPayload = {
// //         title: bookData.title,
// //         author: bookData.author,
// //         isbn: bookData.isbn,
// //         category: bookData.category,
// //         price: bookData.price,
// //         publishYear: bookData.publishYear,
// //         publisher: bookData.publisher,
// //         description: bookData.description,
// //         totalCopy: bookData.totalCopy,
// //       };
// //       //-------------------image
// //       // Add image ID to payload if we have one
// //       if (imageId) {
// //         bookPayload.image = imageId;
// //       }
// //       //-------------------image
// //       let response1;
// //       if (isEdit) {
// //         // Update existing book
// //         response1 = await axios.patch(
// //           `${process.env.REACT_APP_BASE_URL}/author/book/update/${bookData.id}`,
// //           bookPayload,
// //           {
// //             headers: {
// //               Authorization: authToken,
// //             },
// //           }
// //         );
// //         setAlert({
// //           open: true,
// //           message: "Book updated successfully",
// //           severity: "success",
// //         });
// //       } else {
// //         // Create new book
// //         response1 = await axios.post(
// //           `${process.env.REACT_APP_BASE_URL}/author/book/create`,
// //           bookPayload, {
// //             headers: {
// //               Authorization: authToken
// //             }
// //           }
// //         );
// //         setAlert({
// //           open: true,
// //           message: "Book added successfully",
// //           severity: "success",
// //         });
// //       }

// //       // Refresh the book list
// //       fetchBook();

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
// //     const authToken = localStorage.getItem("authToken");
// //     if (window.confirm("Are you sure you want to delete this book?")) {
// //       try {
// //         setLoading(true);
// //         await axios.delete(
// //           `${process.env.REACT_APP_BASE_URL}/author/book/delete/${id}`,
// //           {
// //             headers: {
// //               Authorization: authToken,
// //             },
// //           }
// //         );

// //         // Update the books list
// //         setBooks(books.filter((book) => book.id !== id));

// //         setAlert({
// //           open: true,
// //           message: "Book deleted successfully",
// //           severity: "success",
// //         });
// //         fetchBook();
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
// //     { field: "id", headerName: "ID" },
// //     // {
// //     //   field: "bookName",
// //     //   headerName: "Book Name",
// //     //   flex: 1,
// //     //   cellClassName: "name-column--cell",
// //     // },
// //     {
// //       field: "title",
// //       headerName: "Title",
// //       type: "text",
// //       headerAlign: "left",
// //       align: "left",
// //     },
// //     {
// //       field: "image",
// //       headerName: "Image",
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
// //       field: "author",
// //       headerName: "Author",
// //       flex: 1,
// //     },
// //     {
// //       field: "category",
// //       headerName: "Category",
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

// //   const fetchBook = async () => {
// //     try {
// //       const authToken = localStorage.getItem("authToken");
// //       const response = await axios.get(
// //         `${process.env.REACT_APP_BASE_URL}/author/book/get`,
// //         {
// //           headers: {
// //             Authorization: authToken,
// //           },
// //         }
// //       );
// //       console.log("response", response?.data?.data);

// //       // Check if response.data is an array or wrapped inside another object
// //       const booksArray = Array.isArray(response.data)
// //         ? response.data
// //         : response.data?.data || [];
// //       console.log(booksArray, "shhrreeee");

// //       const formattedBooks = booksArray.map((book) => ({
// //         ...book,
// //         id: book._id,
// //         image: book.image ? book.image.url : "", // Check if image exists // Ensure DataGrid has an id
// //       }));
// //       console.log(formattedBooks, "hellllll");

// //       setBook(formattedBooks);
// //     } catch (error) {
// //       console.log(error);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchBook();
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
// //           Add Book
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
// //           rows={book}
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
// //           <Box
// //             component="form"
// //             sx={{
// //               "& .MuiTextField-root": { m: 1, width: "47%" },
// //               mt: 2,
// //             }}
// //           >
// //             {/* <TextField
// //               label="Book Name"
// //               value={bookData.bookName}
// //               onChange={(e) =>
// //                 setBookData({ ...bookData, bookName: e.target.value })
// //               }
// //             /> */}
// //             <TextField
// //               label="Title"
// //               id="title"
// //               value={bookData.title}
// //               onChange={handleInputChange}
// //             />
// //             <TextField
// //               label="Image URL"
// //               id="image"
// //               type="file"
// //               title="Upload Image"
// //               // InputLabelProps={{ shrink: true }}
// //               // value={bookData.image}
// //               onChange={handleFileChange}
// //             />
// //             <TextField
// //               label="Author"
// //               id="author"
// //               value={bookData.author}
// //               onChange={handleInputChange}
// //             />
// //             <TextField
// //               label="ISBN"
// //               id="isbn"
// //               value={bookData.isbn}
// //               onChange={handleInputChange}
// //             />
// //             <TextField
// //               label="Category"
// //               id="category"
// //               value={bookData.category}
// //               onChange={handleInputChange}
// //             />
// //             <TextField
// //               label="Price"
// //               id="price"
// //               type="number"
// //               value={bookData.price}
// //               onChange={handleInputChange}
// //             />
// //             <TextField
// //               label="Publish Year"
// //               id="publishYear"
// //               value={bookData.publishYear}
// //               onChange={handleInputChange}
// //             />
// //             <TextField
// //               label="Publisher"
// //               id="publisher"
// //               value={bookData.publisher}
// //               onChange={handleInputChange}
// //             />
// //             <TextField
// //               label="Total Copies"
// //               id="totalCopy"
// //               type="number"
// //               value={bookData.totalCopy}
// //               onChange={handleInputChange}
// //             />
// //             <TextField
// //               label="Description"
// //               id="description"
// //               multiline
// //               rows={4}
// //               fullWidth
// //               sx={{ width: "96.5% !important" }}
// //               value={bookData.description}
// //               onChange={handleInputChange}
// //             />
// //           </Box>
// //         </DialogContent>
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
// //         <DialogTitle>Book Details</DialogTitle>
// //         <DialogContent>
// //           {selectedBook && (
// //             <Box sx={{ mt: 2 }}>
// //               <Typography variant="subtitle1" sx={{ mb: 1 }}>
// //                 <strong>book Name:</strong> {selectedBook.bookName || "N/A"}
// //               </Typography>
// //               <Typography variant="subtitle1" sx={{ mb: 1 }}>
// //                 <strong>Title:</strong> {selectedBook.title || "N/A"}
// //               </Typography>
// //               <Typography variant="subtitle1" sx={{ mb: 1 }}>
// //                 <strong>Image:</strong> {selectedBook.image || "N/A"}
// //               </Typography>
// //               <Typography variant="subtitle1" sx={{ mb: 1 }}>
// //                 <strong>Author:</strong> {selectedBook.author || "N/A"}
// //               </Typography>
// //               <Typography variant="subtitle1" sx={{ mb: 1 }}>
// //                 <strong>ISBN:</strong> {selectedBook.isbn || "N/A"}
// //               </Typography>
// //               <Typography variant="subtitle1" sx={{ mb: 1 }}>
// //                 <strong>Category:</strong> {selectedBook.category || "N/A"}
// //               </Typography>
// //               <Typography variant="subtitle1" sx={{ mb: 1 }}>
// //                 <strong>Price:</strong> ${selectedBook.price || "N/A"}
// //               </Typography>
// //               <Typography variant="subtitle1" sx={{ mb: 1 }}>
// //                 <strong>Publish Year:</strong>{" "}
// //                 {selectedBook.publishYear || "N/A"}
// //               </Typography>
// //               <Typography variant="subtitle1" sx={{ mb: 1 }}>
// //                 <strong>Publisher:</strong> {selectedBook.publisher || "N/A"}
// //               </Typography>
// //               <Typography variant="subtitle1" sx={{ mb: 1 }}>
// //                 <strong>Total Copies:</strong> {selectedBook.totalCopy || "N/A"}
// //               </Typography>
// //               <Typography variant="subtitle1" sx={{ mb: 1 }}>
// //                 <strong>Description:</strong>
// //               </Typography>
// //               <Typography variant="body1" sx={{ mb: 1 }}>
// //                 {selectedBook.description || "No description available."}
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

// // export default Book;


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
// //   MenuItem,
// //   FormControl,
// //   InputLabel,
// //   Select,
// //   CircularProgress,
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

// // const Book = () => {
// //   const [loading, setLoading] = useState(false);
// //   const [alert, setAlert] = useState({ show: false, message: "", type: "" });
// //   const [books, setBooks] = useState([]);
// //   const [error, setError] = useState(null);
// //   const [categories, setCategories] = useState([]);
// //   const [loadingCategories, setLoadingCategories] = useState(false);
  
// //   const theme = useTheme();
// //   const colors = tokens(theme.palette.mode);
// //   const [openDialog, setOpenDialog] = useState(false);
// //   const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
// //   const [selectedBook, setSelectedBook] = useState([]);
// //   const [isEdit, setIsEdit] = useState(false);
// //   const [book, setBook] = useState([]);
// //   const [bookData, setBookData] = useState({
// //     title: "",
// //     image: "",
// //     author: "",
// //     isbn: "",
// //     category: "",
// //     price: "",
// //     publishYear: "",
// //     publisher: "",
// //     description: "",
// //     totalCopy: "",
// //   });
  
// //   // Fetch categories when component mounts
 
  
// //   // Fetch categories from API
  
// //   //upload image  1
// //   const handleFileChange = (e) => {
// //     const file = e.target.files[0];
// //     if (file) {
// //       setBookData({
// //         ...bookData,
// //         image: file,
// //       });
// //     }
// //   };
  
// //   // 1
// //   const handleInputChange = (e) => {
// //     const { id, value } = e.target;
// //     setBookData((prev) => ({
// //       ...prev,
// //       [id]: value,
// //     }));
// //   };
  
// //   // Handle category select change
// //   const handleCategoryChange = (e) => {
// //     setBookData({
// //       ...bookData,
// //       category: e.target.value,
// //     });
// //   };
  
// //   const handleOpenDialog = (isEditMode = false, data = null) => {
// //     console.log("-----enter in handle open dialog");

// //     setIsEdit(isEditMode);
// //     if (isEditMode && data) {
// //       console.log("📌 Editing Book Data:", data); // Debugging
// //       setBookData({ ...data, image: null });
// //     } else {
// //       setBookData({
// //         title: "",
// //         image: null,
// //         author: "",
// //         isbn: "",
// //         category: "",
// //         price: "",
// //         publishYear: "",
// //         publisher: "",
// //         description: "",
// //         totalCopy: "",
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
// //     setSelectedBook(book);
// //     setOpenDetailsDialog(true);
// //   };

// //   const handleCloseDetails = () => {
// //     setOpenDetailsDialog(false);
// //     setSelectedBook(null);
// //   };

// //   //upload image and book
// //   const handleSubmit = async () => {
// //     const authToken = localStorage.getItem("authToken");
// //     // Handle form submission here
// //     console.log(bookData);
// //     try {
      
// //       setLoading(true);

// //       // Validate required fields
// //       if (!bookData.title || !bookData.author || !bookData.category) {
// //         setAlert({
// //           open: true,
// //           message: "Title, author, and category are required",
// //           severity: "error",
// //         });
// //         return;
// //       }
// //       //--------------------
// //       let imageId = null;
// //       if (bookData.image instanceof File) {
// //         const formData = new FormData();
// //         formData.append("file", bookData.image);
// //         console.log(bookData.image, "book dataaaa");

// //         for (let pair of formData.entries()) {
// //           console.log(`FormData Key: ${pair[0]}, Value: ${pair[1]}`);
// //         }

// //         // Upload image first
// //         const imageResponse = await axios.post(
// //           `${process.env.REACT_APP_BASE_URL}/author/book/upload`,
// //           formData,
// //           {
// //             headers: {
// //               Authorization: authToken,
// //               "Content-Type": "multipart/form-data",
// //             },
// //           }
// //         );
// //         console.log(imageResponse, "image responseeee");

// //         imageId = imageResponse.data.data._id;
// //         console.log(imageId, "image iddddd");
// //       }
// //       //-------------------------------
// //       // Prepare book data
// //       const bookPayload = {
// //         title: bookData.title,
// //         author: bookData.author,
// //         isbn: bookData.isbn,
// //         category: bookData.category,
// //         price: bookData.price,
// //         publishYear: bookData.publishYear,
// //         publisher: bookData.publisher,
// //         description: bookData.description,
// //         totalCopy: bookData.totalCopy,
// //       };
// //       //-------------------image
// //       // Add image ID to payload if we have one
// //       if (imageId) {
// //         bookPayload.image = imageId;
// //       }
// //       //-------------------image
// //       let response1;
// //       if (isEdit) {
// //         // Update existing book
// //         response1 = await axios.patch(
// //           `${process.env.REACT_APP_BASE_URL}/author/book/update/${bookData.id}`,
// //           bookPayload,
// //           {
// //             headers: {
// //               Authorization: authToken,
// //             },
// //           }
// //         );
// //         setAlert({
// //           open: true,
// //           message: "Book updated successfully",
// //           severity: "success",
// //         });
// //       } else {
// //         // Create new book
// //         response1 = await axios.post(
// //           `${process.env.REACT_APP_BASE_URL}/author/book/create`,
// //           bookPayload, {
// //             headers: {
// //               Authorization: authToken
// //             }
// //           }
// //         );
// //         setAlert({
// //           open: true,
// //           message: "Book added successfully",
// //           severity: "success",
// //         });
// //       }

// //       // Refresh the book list
// //       fetchBook();

// //       handleCloseDialog();
// //     } catch (err) {
// //       console.error("Error saving book:", err);
// //       setAlert({
// //         open: true,
// //         message: `Failed to ${isEdit ? "update" : "add"} book: ${
// //           err.response?.data?.message || err.message
// //         }`,
// //         severity: "error",
// //       });
// //     } finally {
// //       setLoading(false);
// //     }
// //   };
// //   //delete ...
// //   const handleDelete = async (id) => {
// //     const authToken = localStorage.getItem("authToken");
// //     if (window.confirm("Are you sure you want to delete this book?")) {
// //       try {
// //         setLoading(true);
// //         await axios.delete(
// //           `${process.env.REACT_APP_BASE_URL}/author/book/delete/${id}`,
// //           {
// //             headers: {
// //               Authorization: authToken,
// //             },
// //           }
// //         );

// //         // Update the books list
// //         setBooks(books.filter((book) => book.id !== id));

// //         setAlert({
// //           open: true,
// //           message: "Book deleted successfully",
// //           severity: "success",
// //         });
// //         fetchBook();
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

// //   const fetchCategories = async () => {
// //     const authToken = localStorage.getItem("authToken");

// //     setLoadingCategories(true);
    
// //     try {
// //       const response = await axios.get(
// //         `${process.env.REACT_APP_BASE_URL}author/category/getAll`,
// //         {
// //           headers: {
// //             Authorization: authToken,
// //           },
// //         }
// //       );
      
// //       // Assuming the categories are in response.data.data
// //       const categoriesData = Array.isArray(response.data) 
// //         ? response.data 
// //         : response.data?.data || [];
        
// //       setCategories(categoriesData);
// //       console.log("Categories loaded:", categoriesData);
// //     } catch (error) {
// //       console.error("Error fetching categories:", error);
// //       setError("Failed to load categories");
// //     } finally {
// //       setLoadingCategories(false);
// //     }
// //   };
  
// //   useEffect(() => {
// //     fetchCategories();
// //     fetchBook();
// //   }, []);
// //   // for get data
// //   const columns = [
// //     { field: "id", headerName: "ID" },
// //     {
// //       field: "title",
// //       headerName: "Title",
// //       type: "text",
// //       headerAlign: "left",
// //       align: "left",
// //     },
// //     {
// //       field: "image",
// //       headerName: "Image",
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
// //       field: "author",
// //       headerName: "Author",
// //       flex: 1,
// //     },
// //     {
// //       field: "category",
// //       headerName: "Category",
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

// //   const fetchBook = async () => {
// //     try {
// //       const authToken = localStorage.getItem("authToken");
// //       const response = await axios.get(
// //         `${process.env.REACT_APP_BASE_URL}/author/book/get`,
// //         {
// //           headers: {
// //             Authorization: authToken,
// //           },
// //         }
// //       );
// //       console.log("response", response?.data?.data);

// //       // Check if response.data is an array or wrapped inside another object
// //       const booksArray = Array.isArray(response.data)
// //         ? response.data
// //         : response.data?.data || [];
// //       console.log(booksArray, "shhrreeee");

// //       const formattedBooks = booksArray.map((book) => ({
// //         ...book,
// //         id: book._id,
// //         image: book.image ? book.image.url : "", // Check if image exists // Ensure DataGrid has an id
// //       }));
// //       console.log(formattedBooks, "hellllll");

// //       setBook(formattedBooks);
// //     } catch (error) {
// //       console.log(error);
// //     }
// //   };

// //   return (
// //     <Box m="20px">
// //       <Box display="flex" justifyContent="space-between" alignItems="center">
// //         <Header title="BOOK" subtitle="Managing the Books" />
// //         <Button
// //           variant="contained"
// //           startIcon={<AddIcon />}
// //           onClick={() => handleOpenDialog(false)}
// //         >
// //           Add Book
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
// //           rows={book}
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
// //           <Box
// //             component="form"
// //             sx={{
// //               "& .MuiTextField-root": { m: 1, width: "47%" },
// //               "& .MuiFormControl-root": { m: 1, width: "47%" },
// //               mt: 2,
// //             }}
// //           >
// //             <TextField
// //               label="Title"
// //               id="title"
// //               value={bookData.title}
// //               onChange={handleInputChange}
// //             />
// //             <TextField
// //               label="Image URL"
// //               id="image"
// //               type="file"
// //               title="Upload Image"
// //               InputLabelProps={{ shrink: true }}
// //               onChange={handleFileChange}
// //             />
// //             <TextField
// //               label="Author"
// //               id="author"
// //               value={bookData.author}
// //               onChange={handleInputChange}
// //             />
// //             <TextField
// //               label="ISBN"
// //               id="isbn"
// //               value={bookData.isbn}
// //               onChange={handleInputChange}
// //             />
            
// //             {/* Category Dropdown */}
// //             <FormControl>
// //               <InputLabel id="category-label">Category</InputLabel>
// //               <Select
// //                 labelId="category-label"
// //                 id="category"
// //                 value={bookData.category}
// //                 label="Category"
// //                 onChange={handleCategoryChange}
// //                 disabled={loadingCategories}
// //               >
// //                 {loadingCategories ? (
// //                   <MenuItem value="">
// //                     <CircularProgress size={20} />
// //                   </MenuItem>
// //                 ) : (
// //                   <>
// //                     <MenuItem value="">Select a category</MenuItem>
// //                     {categories.map((category) => (
// //                       <MenuItem key={category._id} value={category._id}>
// //                         {category.name}
// //                       </MenuItem>
// //                     ))}
// //                   </>
// //                 )}
// //               </Select>
// //             </FormControl>
            
// //             <TextField
// //               label="Price"
// //               id="price"
// //               type="number"
// //               value={bookData.price}
// //               onChange={handleInputChange}
// //             />
// //             <TextField
// //               label="Publish Year"
// //               id="publishYear"
// //               value={bookData.publishYear}
// //               onChange={handleInputChange}
// //             />
// //             <TextField
// //               label="Publisher"
// //               id="publisher"
// //               value={bookData.publisher}
// //               onChange={handleInputChange}
// //             />
// //             <TextField
// //               label="Total Copies"
// //               id="totalCopy"
// //               type="number"
// //               value={bookData.totalCopy}
// //               onChange={handleInputChange}
// //             />
// //             <TextField
// //               label="Description"
// //               id="description"
// //               multiline
// //               rows={4}
// //               fullWidth
// //               sx={{ width: "96.5% !important" }}
// //               value={bookData.description}
// //               onChange={handleInputChange}
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
// //             {loading ? <CircularProgress size={24} /> : isEdit ? "Update" : "Add"}
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
// //         <DialogTitle>Book Details</DialogTitle>
// //         <DialogContent>
// //           {selectedBook && (
// //             <Box sx={{ mt: 2 }}>
// //               <Typography variant="subtitle1" sx={{ mb: 1 }}>
// //                 <strong>Title:</strong> {selectedBook.title || "N/A"}
// //               </Typography>
// //               <Typography variant="subtitle1" sx={{ mb: 1 }}>
// //                 <strong>Image:</strong>
// //                 {selectedBook.image ? (
// //                   <img 
// //                     src={selectedBook.image} 
// //                     alt="Book cover" 
// //                     style={{ display: "block", maxWidth: "200px", marginTop: "8px" }} 
// //                   />
// //                 ) : "N/A"}
// //               </Typography>
// //               <Typography variant="subtitle1" sx={{ mb: 1 }}>
// //                 <strong>Author:</strong> {selectedBook.author || "N/A"}
// //               </Typography>
// //               <Typography variant="subtitle1" sx={{ mb: 1 }}>
// //                 <strong>ISBN:</strong> {selectedBook.isbn || "N/A"}
// //               </Typography>
// //               <Typography variant="subtitle1" sx={{ mb: 1 }}>
// //                 <strong>Category:</strong> {selectedBook.category || "N/A"}
// //               </Typography>
// //               <Typography variant="subtitle1" sx={{ mb: 1 }}>
// //                 <strong>Price:</strong> ${selectedBook.price || "N/A"}
// //               </Typography>
// //               <Typography variant="subtitle1" sx={{ mb: 1 }}>
// //                 <strong>Publish Year:</strong>{" "}
// //                 {selectedBook.publishYear || "N/A"}
// //               </Typography>
// //               <Typography variant="subtitle1" sx={{ mb: 1 }}>
// //                 <strong>Publisher:</strong> {selectedBook.publisher || "N/A"}
// //               </Typography>
// //               <Typography variant="subtitle1" sx={{ mb: 1 }}>
// //                 <strong>Total Copies:</strong> {selectedBook.totalCopy || "N/A"}
// //               </Typography>
// //               <Typography variant="subtitle1" sx={{ mb: 1 }}>
// //                 <strong>Description:</strong>
// //               </Typography>
// //               <Typography variant="body1" sx={{ mb: 1 }}>
// //                 {selectedBook.description || "No description available."}
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

// // export default Book;


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
// //   MenuItem,
// //   FormControl,
// //   InputLabel,
// //   Select,
// //   CircularProgress,
// //   Alert,
// //   Snackbar,
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

// // const Book = () => {
// //   const [loading, setLoading] = useState(false);
// //   const [alert, setAlert] = useState({ show: false, message: "", type: "" });
// //   const [books, setBooks] = useState([]);
// //   const [error, setError] = useState(null);
// //   const [categories, setCategories] = useState([]);
// //   const [loadingCategories, setLoadingCategories] = useState(false);
  
// //   const theme = useTheme();
// //   const colors = tokens(theme.palette.mode);
// //   const [openDialog, setOpenDialog] = useState(false);
// //   const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
// //   const [selectedBook, setSelectedBook] = useState([]);
// //   const [isEdit, setIsEdit] = useState(false);
// //   const [book, setBook] = useState([]);
// //   const [bookData, setBookData] = useState({
// //     title: "",
// //     image: "",
// //     author: "",
// //     isbn: "",
// //     category: "",
// //     price: "",
// //     publishYear: "",
// //     publisher: "",
// //     description: "",
// //     totalCopy: "",
// //   });
  
// //   // Handle alert close
// //   const handleAlertClose = () => {
// //     setAlert({ ...alert, show: false });
// //   };
  
// //   // Upload image  
// //   const handleFileChange = (e) => {
// //     const file = e.target.files[0];
// //     if (file) {
// //       setBookData({
// //         ...bookData,
// //         image: file,
// //       });
// //     }
// //   };
  
// //   // Handle input change
// //   const handleInputChange = (e) => {
// //     const { id, value } = e.target;
// //     setBookData((prev) => ({
// //       ...prev,
// //       [id]: value,
// //     }));
// //   };
  
// //   // Handle category select change
// //   const handleCategoryChange = (e) => {
// //     setBookData({
// //       ...bookData,
// //       category: e.target.value,
// //     });
// //   };
  
// //   const handleOpenDialog = (isEditMode = false, data = null) => {
// //     console.log("Opening dialog, edit mode:", isEditMode);

// //     setIsEdit(isEditMode);
// //     if (isEditMode && data) {
// //       console.log("Editing Book Data:", data);
// //       setBookData({ ...data, image: null });
// //     } else {
// //       setBookData({
// //         title: "",
// //         image: null,
// //         author: "",
// //         isbn: "",
// //         category: "",
// //         price: "",
// //         publishYear: "",
// //         publisher: "",
// //         description: "",
// //         totalCopy: "",
// //       });
// //     }
// //     setOpenDialog(true);
// //   };

// //   const handleCloseDialog = () => {
// //     setOpenDialog(false);
// //   };

// //   const handleOpenDetails = (book) => {
// //     setSelectedBook(book);
// //     setOpenDetailsDialog(true);
// //   };

// //   const handleCloseDetails = () => {
// //     setOpenDetailsDialog(false);
// //     setSelectedBook(null);
// //   };

// //   // Upload image and book
// //   const handleSubmit = async () => {
// //     const authToken = localStorage.getItem("authToken");
// //     console.log("Submitting book data:", bookData);
    
// //     try {
// //       setLoading(true);

// //       // Validate required fields
// //       if (!bookData.title || !bookData.author || !bookData.category) {
// //         setAlert({
// //           show: true,
// //           message: "Title, author, and category are required",
// //           type: "error",
// //         });
// //         setLoading(false);
// //         return;
// //       }
      
// //       // Handle image upload if there's a new image
// //       let imageId = null;
// //       if (bookData.image instanceof File) {
// //         const formData = new FormData();
// //         formData.append("file", bookData.image);
// //         console.log("Uploading image:", bookData.image);

// //         // Debug FormData contents
// //         for (let pair of formData.entries()) {
// //           console.log(`FormData Key: ${pair[0]}, Value: ${pair[1]}`);
// //         }

// //         // Upload image first
// //         const imageResponse = await axios.post(
// //           `${process.env.REACT_APP_BASE_URL}/author/book/upload`,
// //           formData,
// //           {
// //             headers: {
// //               Authorization: authToken,
// //               "Content-Type": "multipart/form-data",
// //             },
// //           }
// //         );
// //         console.log("Image upload response:", imageResponse);

// //         imageId = imageResponse.data.data._id;
// //         console.log("Image ID:", imageId);
// //       }
      
// //       // Prepare book data
// //       const bookPayload = {
// //         title: bookData.title,
// //         author: bookData.author,
// //         isbn: bookData.isbn,
// //         category: bookData.category,
// //         price: bookData.price,
// //         publishYear: bookData.publishYear,
// //         publisher: bookData.publisher,
// //         description: bookData.description,
// //         totalCopy: bookData.totalCopy,
// //       };
      
// //       // Add image ID to payload if we have one
// //       if (imageId) {
// //         bookPayload.image = imageId;
// //       }
      
// //       console.log("Book payload:", bookPayload);
// //       let response;
      
// //       if (isEdit) {
// //         // Update existing book
// //         response = await axios.patch(
// //           `${process.env.REACT_APP_BASE_URL}/author/book/update/${bookData.id}`,
// //           bookPayload,
// //           {
// //             headers: {
// //               Authorization: authToken,
// //             },
// //           }
// //         );
// //         setAlert({
// //           show: true,
// //           message: "Book updated successfully",
// //           type: "success",
// //         });
// //       } else {
// //         // Create new book
// //         response = await axios.post(
// //           `${process.env.REACT_APP_BASE_URL}/author/book/create`,
// //           bookPayload, {
// //             headers: {
// //               Authorization: authToken
// //             }
// //           }
// //         );
// //         setAlert({
// //           show: true,
// //           message: "Book added successfully",
// //           type: "success",
// //         });
// //       }
      
// //       console.log("Book save response:", response);

// //       // Refresh the book list
// //       fetchBook();
// //       handleCloseDialog();
// //     } catch (err) {
// //       console.error("Error saving book:", err);
// //       setAlert({
// //         show: true,
// //         message: `Failed to ${isEdit ? "update" : "add"} book: ${
// //           err.response?.data?.message || err.message
// //         }`,
// //         type: "error",
// //       });
// //     } finally {
// //       setLoading(false);
// //     }
// //   };
  
// //   // Delete book
// //   const handleDelete = async (id) => {
// //     const authToken = localStorage.getItem("authToken");
// //     if (window.confirm("Are you sure you want to delete this book?")) {
// //       try {
// //         setLoading(true);
// //         await axios.delete(
// //           `${process.env.REACT_APP_BASE_URL}/author/book/delete/${id}`,
// //           {
// //             headers: {
// //               Authorization: authToken,
// //             },
// //           }
// //         );

// //         // Update the books list
// //         setBooks(books.filter((book) => book.id !== id));

// //         setAlert({
// //           show: true,
// //           message: "Book deleted successfully",
// //           type: "success",
// //         });
// //         fetchBook();
// //       } catch (error) {
// //         console.error("Error deleting book:", error);
// //         setAlert({
// //           show: true,
// //           message: "Failed to delete book",
// //           type: "error",
// //         });
// //       } finally {
// //         setLoading(false);
// //       }
// //     }
// //   };

// //   // Fetch categories
// //   const fetchCategories = async () => {
// //     const authToken = localStorage.getItem("authToken");
    
// //     console.log("Fetching categories from:", `${process.env.REACT_APP_BASE_URL}/author/category/getAll`);
// //     setLoadingCategories(true);
    
// //     try {
// //       const response = await axios.get(
// //         `${process.env.REACT_APP_BASE_URL}/author/category/getAll`,
// //         {
// //           headers: {
// //             Authorization: authToken,
// //           },
// //         }
// //       );
      
// //       console.log("Categories API response:", response);
      
// //       // Assuming the categories are in response.data.data
// //       const categoriesData = Array.isArray(response.data) 
// //         ? response.data 
// //         : response.data?.data || [];
        
// //       setCategories(categoriesData);
// //       console.log("Categories loaded:", categoriesData);
// //     } catch (error) {
// //       console.error("Error fetching categories:", error);
// //       console.error("Error details:", error.response || error.message);
// //       setError("Failed to load categories");
// //       setAlert({
// //         show: true,
// //         message: "Failed to load categories",
// //         type: "error",
// //       });
// //     } finally {
// //       setLoadingCategories(false);
// //     }
// //   };
  
// //   // Load data on component mount
// //   useEffect(() => {
// //     let isMounted = true;
    
// //     const loadData = async () => {
// //       try {
// //         if (isMounted) await fetchCategories();
// //         if (isMounted) await fetchBook();
// //       } catch (error) {
// //         console.error("Error loading data:", error);
// //         if (isMounted) {
// //           setAlert({
// //             show: true,
// //             message: "Error loading data",
// //             type: "error",
// //           });
// //         }
// //       }
// //     };
    
// //     loadData();
    
// //     return () => {
// //       isMounted = false;
// //     };
// //   }, []);
  
// //   // DataGrid columns
// //   const columns = [
// //     { field: "id", headerName: "ID" },
// //     {
// //       field: "title",
// //       headerName: "Title",
// //       type: "text",
// //       headerAlign: "left",
// //       align: "left",
// //       flex: 1,
// //     },
// //     {
// //       field: "image",
// //       headerName: "Image",
// //       flex: 1,
// //       renderCell: (params) => (
// //         params.value ? (
// //           <img
// //             src={params.value}
// //             alt="Book Cover"
// //             style={{ width: 50, height: 50, objectFit: "cover", borderRadius: 5 }}
// //           />
// //         ) : (
// //           <Box>No Image</Box>
// //         )
// //       ),
// //     },
// //     {
// //       field: "author",
// //       headerName: "Author",
// //       flex: 1,
// //     },
// //     {
// //       field: "category",
// //       headerName: "Category",
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

// //   // Fetch books
// //   const fetchBook = async () => {
// //     try {
// //       const authToken = localStorage.getItem("authToken");
// //       console.log("Fetching books from:", `${process.env.REACT_APP_BASE_URL}/author/book/get`);
      
// //       const response = await axios.get(
// //         `${process.env.REACT_APP_BASE_URL}/author/book/get`,
// //         {
// //           headers: {
// //             Authorization: authToken,
// //           },
// //         }
// //       );
// //       console.log("Book API response:", response);

// //       // Check if response.data is an array or wrapped inside another object
// //       const booksArray = Array.isArray(response.data)
// //         ? response.data
// //         : response.data?.data || [];
// //       console.log("Books array:", booksArray);

// //       const formattedBooks = booksArray.map((book) => ({
// //         ...book,
// //         id: book._id,
// //         image: book.image ? book.image.url : "", // Check if image exists
// //       }));
// //       console.log("Formatted books:", formattedBooks);

// //       setBook(formattedBooks);
// //     } catch (error) {
// //       console.error("Error fetching books:", error);
// //       console.error("Error details:", error.response || error.message);
// //       setAlert({
// //         show: true,
// //         message: "Failed to load books",
// //         type: "error",
// //       });
// //     }
// //   };

// //   return (
// //     <Box m="20px">
// //       {/* Alert for notifications */}
// //       <Snackbar 
// //         open={alert.show} 
// //         autoHideDuration={6000} 
// //         onClose={handleAlertClose}
// //         anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
// //       >
// //         <Alert onClose={handleAlertClose} severity={alert.type} sx={{ width: '100%' }}>
// //           {alert.message}
// //         </Alert>
// //       </Snackbar>
      
// //       <Box display="flex" justifyContent="space-between" alignItems="center">
// //         <Header title="BOOK" subtitle="Managing the Books" />
// //         <Button
// //           variant="contained"
// //           startIcon={<AddIcon />}
// //           onClick={() => handleOpenDialog(false)}
// //         >
// //           Add Book
// //         </Button>
// //       </Box>

// //       {/* Main DataGrid */}
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
// //           rows={book}
// //           columns={columns}
// //           components={{ Toolbar: GridToolbar }}
// //           loading={loading}
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
// //           <Box
// //             component="form"
// //             sx={{
// //               "& .MuiTextField-root": { m: 1, width: "47%" },
// //               "& .MuiFormControl-root": { m: 1, width: "47%" },
// //               mt: 2,
// //             }}
// //           >
// //             <TextField
// //               label="Title"
// //               id="title"
// //               value={bookData.title}
// //               onChange={handleInputChange}
// //               required
// //             />
// //             <TextField
// //               label="Image"
// //               id="image"
// //               type="file"
// //               title="Upload Image"
// //               InputLabelProps={{ shrink: true }}
// //               onChange={handleFileChange}
// //             />
// //             <TextField
// //               label="Author"
// //               id="author"
// //               value={bookData.author}
// //               onChange={handleInputChange}
// //               required
// //             />
// //             <TextField
// //               label="ISBN"
// //               id="isbn"
// //               value={bookData.isbn}
// //               onChange={handleInputChange}
// //             />
            
// //             {/* Category Dropdown */}
// //             <FormControl required>
// //               <InputLabel id="category-label">Category</InputLabel>
// //               <Select
// //                 labelId="category-label"
// //                 id="category"
// //                 value={bookData.category}
// //                 label="Category"
// //                 onChange={handleCategoryChange}
// //                 disabled={loadingCategories}
// //               >
// //                 {loadingCategories ? (
// //                   <MenuItem value="">
// //                     <CircularProgress size={20} />
// //                   </MenuItem>
// //                 ) : (
// //                   <>
// //                     <MenuItem value="">Select a category</MenuItem>
// //                     {categories.map((category) => (
// //                       <MenuItem key={category._id} value={category._id}>
// //                         {category.name}
// //                       </MenuItem>
// //                     ))}
// //                   </>
// //                 )}
// //               </Select>
// //             </FormControl>
            
// //             <TextField
// //               label="Price"
// //               id="price"
// //               type="number"
// //               value={bookData.price}
// //               onChange={handleInputChange}
// //             />
// //             <TextField
// //               label="Publish Year"
// //               id="publishYear"
// //               value={bookData.publishYear}
// //               onChange={handleInputChange}
// //             />
// //             <TextField
// //               label="Publisher"
// //               id="publisher"
// //               value={bookData.publisher}
// //               onChange={handleInputChange}
// //             />
// //             <TextField
// //               label="Total Copies"
// //               id="totalCopy"
// //               type="number"
// //               value={bookData.totalCopy}
// //               onChange={handleInputChange}
// //             />
// //             <TextField
// //               label="Description"
// //               id="description"
// //               multiline
// //               rows={4}
// //               fullWidth
// //               sx={{ width: "96.5% !important" }}
// //               value={bookData.description}
// //               onChange={handleInputChange}
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
// //             {loading ? <CircularProgress size={24} /> : isEdit ? "Update" : "Add"}
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
// //         <DialogTitle>Book Details</DialogTitle>
// //         <DialogContent>
// //           {selectedBook && (
// //             <Box sx={{ mt: 2 }}>
// //               <Typography variant="subtitle1" sx={{ mb: 1 }}>
// //                 <strong>Title:</strong> {selectedBook.title || "N/A"}
// //               </Typography>
// //               <Typography variant="subtitle1" sx={{ mb: 1 }}>
// //                 <strong>Image:</strong>
// //                 {selectedBook.image ? (
// //                   <img 
// //                     src={selectedBook.image} 
// //                     alt="Book cover" 
// //                     style={{ display: "block", maxWidth: "200px", marginTop: "8px" }} 
// //                   />
// //                 ) : "N/A"}
// //               </Typography>
// //               <Typography variant="subtitle1" sx={{ mb: 1 }}>
// //                 <strong>Author:</strong> {selectedBook.author || "N/A"}
// //               </Typography>
// //               <Typography variant="subtitle1" sx={{ mb: 1 }}>
// //                 <strong>ISBN:</strong> {selectedBook.isbn || "N/A"}
// //               </Typography>
// //               <Typography variant="subtitle1" sx={{ mb: 1 }}>
// //                 <strong>Category:</strong> {selectedBook.category || "N/A"}
// //               </Typography>
// //               <Typography variant="subtitle1" sx={{ mb: 1 }}>
// //                 <strong>Price:</strong> ${selectedBook.price || "N/A"}
// //               </Typography>
// //               <Typography variant="subtitle1" sx={{ mb: 1 }}>
// //                 <strong>Publish Year:</strong>{" "}
// //                 {selectedBook.publishYear || "N/A"}
// //               </Typography>
// //               <Typography variant="subtitle1" sx={{ mb: 1 }}>
// //                 <strong>Publisher:</strong> {selectedBook.publisher || "N/A"}
// //               </Typography>
// //               <Typography variant="subtitle1" sx={{ mb: 1 }}>
// //                 <strong>Total Copies:</strong> {selectedBook.totalCopy || "N/A"}
// //               </Typography>
// //               <Typography variant="subtitle1" sx={{ mb: 1 }}>
// //                 <strong>Description:</strong>
// //               </Typography>
// //               <Typography variant="body1" sx={{ mb: 1 }}>
// //                 {selectedBook.description || "No description available."}
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

// // export default Book;


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
//   MenuItem,
//   FormControl,
//   InputLabel,
//   Select,
//   CircularProgress,
//   Alert,
//   Snackbar,
// } from "@mui/material";
// import { DataGrid, GridToolbar } from "@mui/x-data-grid";
// import { tokens } from "../../theme";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
// import AddIcon from "@mui/icons-material/Add";
// import InfoIcon from "@mui/icons-material/Info";
// import Header from "../../components/Header";
// import { useEffect, useState } from "react";
// import axios from "axios";

// const Book = () => {
//   const [loading, setLoading] = useState(false);
//   const [alert, setAlert] = useState({ show: false, message: "", type: "" });
//   const [books, setBooks] = useState([]);
//   const [error, setError] = useState(null);
//   const [categories, setCategories] = useState([]);
//   const [loadingCategories, setLoadingCategories] = useState(false);
  
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   const [openDialog, setOpenDialog] = useState(false);
//   const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
//   const [selectedBook, setSelectedBook] = useState([]);
//   const [isEdit, setIsEdit] = useState(false);
//   const [book, setBook] = useState([]);
//   const [bookData, setBookData] = useState({
//     title: "",
//     image: "",
//     author: "",
//     isbn: "",
//     category: "",
//     price: "",
//     publishYear: "",
//     publisher: "",
//     description: "",
//     totalCopy: "",
//   });
  
//   // Handle alert close
//   const handleAlertClose = () => {
//     setAlert({ ...alert, show: false });
//   };
  
//   // Upload image  
//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setBookData({
//         ...bookData,
//         image: file,
//       });
//     }
//   };
  
//   // Handle input change
//   const handleInputChange = (e) => {
//     const { id, value } = e.target;
//     setBookData((prev) => ({
//       ...prev,
//       [id]: value,
//     }));
//   };
  
//   // Handle category select change
//   const handleCategoryChange = (e) => {
//     setBookData({
//       ...bookData,
//       category: e.target.value,
//     });
//     console.log("Category selected:", e.target.value);
//   };
  
//   const handleOpenDialog = (isEditMode = false, data = null) => {
//     console.log("Opening dialog, edit mode:", isEditMode);

//     setIsEdit(isEditMode);
//     if (isEditMode && data) {
//       console.log("Editing Book Data:", data);
//       // Make sure we're using the category ID, not the display name
//       setBookData({ 
//         ...data, 
//         image: null,
//         // Ensure the category field contains the ID
//         category: data.categoryId || data.category
//       });
//     } else {
//       setBookData({
//         title: "",
//         image: null,
//         author: "",
//         isbn: "",
//         category: "",
//         price: "",
//         publishYear: "",
//         publisher: "",
//         description: "",
//         totalCopy: "",
//       });
//     }
//     setOpenDialog(true);
//   };

//   const handleCloseDialog = () => {
//     setOpenDialog(false);
//   };

//   const handleOpenDetails = (book) => {
//     // Find category name based on ID for the details view
//     const categoryObj = categories.find(cat => cat._id === book.categoryId);
//     const bookWithCategoryName = {
//       ...book,
//       categoryName: categoryObj ? categoryObj.name : "Unknown"
//     };
//     setSelectedBook(bookWithCategoryName);
//     setOpenDetailsDialog(true);
//   };

//   const handleCloseDetails = () => {
//     setOpenDetailsDialog(false);
//     setSelectedBook(null);
//   };

//   // Upload image and book
//   const handleSubmit = async () => {
//     const authToken = localStorage.getItem("authToken");
//     console.log("Submitting book data:", bookData);
    
//     try {
//       setLoading(true);

//       // Validate required fields
//       if (!bookData.title || !bookData.category) {
//         setAlert({
//           show: true,
//           message: "Title, author, and category are required",
//           type: "error",
//         });
//         setLoading(false);
//         return;
//       }
      
//       // Handle image upload if there's a new image
//       let imageId = null;
//       if (bookData.image instanceof File) {
//         const formData = new FormData();
//         formData.append("file", bookData.image);
//         console.log("Uploading image:", bookData.image);

//         // Debug FormData contents
//         for (let pair of formData.entries()) {
//           console.log(`FormData Key: ${pair[0]}, Value: ${pair[1]}`);
//         }

//         // Upload image first
//         const imageResponse = await axios.post(
//           `${process.env.REACT_APP_BASE_URL}/author/book/upload`,
//           formData,
//           {
//             headers: {
//               Authorization: authToken,
//               "Content-Type": "multipart/form-data",
//             },
//           }
//         );
//         console.log("Image upload response:", imageResponse);

//         imageId = imageResponse.data.data._id;
//         console.log("Image ID:", imageId);
//       }
      
//       // Prepare book data
//       const bookPayload = {
//         title: bookData.title,
//         author: bookData.author,
//         isbn: bookData.isbn,
//         category: bookData.category, // Make sure this is the category ID
//         price: bookData.price,
//         publishYear: bookData.publishYear,
//         publisher: bookData.publisher,
//         description: bookData.description,
//         totalCopy: bookData.totalCopy,
//       };
      
//       // Add image ID to payload if we have one
//       if (imageId) {
//         bookPayload.image = imageId;
//       }
      
//       console.log("Book payload:", bookPayload);
//       let response;
      
//       if (isEdit) {
//         // Update existing book
//         response = await axios.patch(
//           `${process.env.REACT_APP_BASE_URL}/author/book/update/${bookData.id}`,
//           bookPayload,
//           {
//             headers: {
//               Authorization: authToken,
//             },
//           }
//         );
//         setAlert({
//           show: true,
//           message: "Book updated successfully",
//           type: "success",
//         });
//       } else {
//         // Create new book
//         response = await axios.post(
//           `${process.env.REACT_APP_BASE_URL}/author/book/create`,
//           bookPayload, {
//             headers: {
//               Authorization: authToken
//             }
//           }
//         );
//         setAlert({
//           show: true,
//           message: "Book added successfully",
//           type: "success",
//         });
//       }
      
//       console.log("Book save response:", response);

//       // Refresh the book list
//       fetchBook();
//       handleCloseDialog();
//     } catch (err) {
//       console.error("Error saving book:", err);
//       setAlert({
//         show: true,
//         message: `Failed to ${isEdit ? "update" : "add"} book: ${
//           err.response?.data?.message || err.message
//         }`,
//         type: "error",
//       });
//     } finally {
//       setLoading(false);
//     }
//   };
  
//   // Delete book
//   const handleDelete = async (id) => {
//     const authToken = localStorage.getItem("authToken");
//     if (window.confirm("Are you sure you want to delete this book?")) {
//       try {
//         setLoading(true);
//         await axios.delete(
//           `${process.env.REACT_APP_BASE_URL}/author/book/delete/${id}`,
//           {
//             headers: {
//               Authorization: authToken,
//             },
//           }
//         );

//         // Update the books list
//         setBooks(books.filter((book) => book.id !== id));

//         setAlert({
//           show: true,
//           message: "Book deleted successfully",
//           type: "success",
//         });
//         fetchBook();
//       } catch (error) {
//         console.error("Error deleting book:", error);
//         setAlert({
//           show: true,
//           message: "Failed to delete book",
//           type: "error",
//         });
//       } finally {
//         setLoading(false);
//       }
//     }
//   };

//   // Fetch categories
//   const fetchCategories = async () => {
//     const authToken = localStorage.getItem("authToken");
    
//     console.log("Fetching categories from:", `${process.env.REACT_APP_BASE_URL}/author/category/getAll`);
//     setLoadingCategories(true);
    
//     try {
//       const response = await axios.get(
//         `${process.env.REACT_APP_BASE_URL}/author/category/getAll`,
//         {
//           headers: {
//             Authorization: authToken,
//           },
//         }
//       );
      
//       console.log("Categories API response:", response);
      
//       // Assuming the categories are in response.data.data
//       const categoriesData = Array.isArray(response.data) 
//         ? response.data 
//         : response.data?.data || [];
        
//       setCategories(categoriesData);
//       console.log("Categories loaded:", categoriesData);
//     } catch (error) {
//       console.error("Error fetching categories:", error);
//       console.error("Error details:", error.response || error.message);
//       setError("Failed to load categories");
//       setAlert({
//         show: true,
//         message: "Failed to load categories",
//         type: "error",
//       });
//     } finally {
//       setLoadingCategories(false);
//     }
//   };
  
//   // Load data on component mount
//   useEffect(() => {
//     let isMounted = true;
    
//     const loadData = async () => {
//       try {
//         if (isMounted) await fetchCategories();
//         if (isMounted) await fetchBook();
//       } catch (error) {
//         console.error("Error loading data:", error);
//         if (isMounted) {
//           setAlert({
//             show: true,
//             message: "Error loading data",
//             type: "error",
//           });
//         }
//       }
//     };
    
//     loadData();
    
//     return () => {
//       isMounted = false;
//     };
//   }, []);
  
//   // DataGrid columns - Updated to use categoryName for display
//   const columns = [
//     { field: "id", headerName: "ID" },
//     {
//       field: "title",
//       headerName: "Title",
//       type: "text",
//       headerAlign: "left",
//       align: "left",
//       flex: 1,
//     },
//     {
//       field: "image",
//       headerName: "Image",
//       flex: 1,
//       renderCell: (params) => (
//         params.value ? (
//           <img
//             src={params.value}
//             alt="Book Cover"
//             style={{ width: 50, height: 50, objectFit: "cover", borderRadius: 5 }}
//           />
//         ) : (
//           <Box>No Image</Box>
//         )
//       ),
//     },
//     {
//       field: "author",
//       headerName: "Author",
//       flex: 1,
//     },
//     {
//       field: "categoryName", // Updated to use categoryName instead of category
//       headerName: "Category",
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
//             <IconButton onClick={() => handleDelete(params.row.id)}>
//               <DeleteIcon />
//             </IconButton>
//           </Box>
//         );
//       },
//     },
//   ];

//   // Fetch books - Modified to map category IDs to names
//   // const fetchBook = async () => {
//   //   try {
//   //     const authToken = localStorage.getItem("authToken");
//   //     console.log("Fetching books from:", `${process.env.REACT_APP_BASE_URL}/author/book/get`);
      
//   //     const response = await axios.get(
//   //       `${process.env.REACT_APP_BASE_URL}/author/book/get`,
//   //       {
//   //         headers: {
//   //           Authorization: authToken,
//   //         },
//   //       }
//   //     );
//   //     console.log("Book API response:", response);

//   //     // Check if response.data is an array or wrapped inside another object
//   //     const booksArray = Array.isArray(response.data)
//   //       ? response.data
//   //       : response.data?.data || [];
//   //     console.log("Books array:", booksArray);

//   //     const formattedBooks = booksArray.map((book) => {
//   //       // Find the category object that matches this book's category ID
//   //       const categoryObj = categories.find(cat => cat._id === book.category);
        
//   //       return {
//   //         ...book,
//   //         id: book._id,
//   //         image: book.image ? book.image.url : "",
//   //         // Store both the category ID and the category name
//   //         categoryId: book.category, // Store the original ID
//   //         categoryName: categoryObj ? categoryObj.name : "Unknown Category" // Use name for display
//   //       };
//   //     });
//   //     console.log("Formatted books with category names:", formattedBooks);

//   //     setBook(formattedBooks);
//   //   } catch (error) {
//   //     console.error("Error fetching books:", error);
//   //     console.error("Error details:", error.response || error.message);
//   //     setAlert({
//   //       show: true,
//   //       message: "Failed to load books",
//   //       type: "error",
//   //     });
//   //   }
//   // };
// // Fetch books - Modified to handle nested category and author objects
// const fetchBook = async () => {
//   try {
//     const authToken = localStorage.getItem("authToken");
//     console.log("Fetching books from:", `${process.env.REACT_APP_BASE_URL}/author/book/get`);
    
//     const response = await axios.get(
//       `${process.env.REACT_APP_BASE_URL}/author/book/get`,
//       {
//         headers: {
//           Authorization: authToken,
//         },
//       }
//     );
//     console.log("Book API response:", response);

//     // Check if response.data is an array or wrapped inside another object
//     const booksArray = Array.isArray(response.data)
//       ? response.data
//       : response.data?.data || [];
//     console.log("Books array:", booksArray);

//     const formattedBooks = booksArray.map((book) => {
//       // Extract the nested author and category information
//       const authorName = book.author ? 
//         `${book.author.firstName || ''} ${book.author.lastName || ''}`.trim() : 
//         "Unknown Author";
      
//       const categoryName = book.category?.name || "Unknown Category";
      
//       return {
//         ...book,
//         id: book._id,
//         image: book.image ? book.image.url : "",
//         // Store author information
//         // authorId: book.author?._id || "",
//         author: authorName,
//         // Store category information
//         // categoryId: book.category?._id || "",
//         categoryName: categoryName
//       };
//     });
//     console.log("Formatted books with author and category names:", formattedBooks);

//     setBook(formattedBooks);
//   } catch (error) {
//     console.error("Error fetching books:", error);
//     console.error("Error details:", error.response || error.message);
//     setAlert({
//       show: true,
//       message: "Failed to load books",
//       type: "error",
//     });
//   }
// };
//   return (
//     <Box m="20px">
//       {/* Alert for notifications */}
//       <Snackbar 
//         open={alert.show} 
//         autoHideDuration={6000} 
//         onClose={handleAlertClose}
//         anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//       >
//         <Alert onClose={handleAlertClose} severity={alert.type} sx={{ width: '100%' }}>
//           {alert.message}
//         </Alert>
//       </Snackbar>
      
//       <Box display="flex" justifyContent="space-between" alignItems="center">
//         <Header title="BOOK" subtitle="Managing the Books" />
//         <Button
//           variant="contained"
//           startIcon={<AddIcon />}
//           onClick={() => handleOpenDialog(false)}
//         >
//           Add Book
//         </Button>
//       </Box>

//       {/* Main DataGrid */}
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
//           rows={book}
//           columns={columns}
//           components={{ Toolbar: GridToolbar }}
//           loading={loading}
//         />
//       </Box>

//       {/* Add/Edit Dialog */}
//       <Dialog
//         open={openDialog}
//         onClose={handleCloseDialog}
//         maxWidth="md"
//         fullWidth
//       >
//         <DialogTitle>{isEdit ? "Edit Book" : "Add New Book"}</DialogTitle>
//         <DialogContent>
//           <Box
//             component="form"
//             sx={{
//               "& .MuiTextField-root": { m: 1, width: "47%" },
//               "& .MuiFormControl-root": { m: 1, width: "47%" },
//               mt: 2,
//             }}
//           >
//             <TextField
//               label="Title"
//               id="title"
//               value={bookData.title}
//               onChange={handleInputChange}
//               required
//             />
//             <TextField
//               label="Image"
//               id="image"
//               type="file"
//               title="Upload Image"
//               InputLabelProps={{ shrink: true }}
//               onChange={handleFileChange}
//             />
//             <TextField
//               label="Author"
//               id="author"
//               value={bookData.author}
//               onChange={handleInputChange}
//               required
//             />
//             <TextField
//               label="ISBN"
//               id="isbn"
//               value={bookData.isbn}
//               onChange={handleInputChange}
//             />
            
//             {/* Category Dropdown - Improved display of selected category */}
//             <FormControl required>
//               <InputLabel id="category-label">Category</InputLabel>
//               <Select
//                 labelId="category-label"
//                 id="category"
//                 value={bookData.category}
//                 label="Category"
//                 onChange={handleCategoryChange}
//                 disabled={loadingCategories}
//               >
//                 <MenuItem value="">Select a category</MenuItem>
//                 {categories.map((category) => (
//                   <MenuItem key={category._id} value={category._id}>
//                     {category.name}
//                   </MenuItem>
//                 ))}
//               </Select>
//             </FormControl>
            
//             <TextField
//               label="Price"
//               id="price"
//               type="number"
//               value={bookData.price}
//               onChange={handleInputChange}
//             />
//             <TextField
//               label="Publish Year"
//               id="publishYear"
//               value={bookData.publishYear}
//               onChange={handleInputChange}
//             />
//             <TextField
//               label="Publisher"
//               id="publisher"
//               value={bookData.publisher}
//               onChange={handleInputChange}
//             />
//             <TextField
//               label="Total Copies"
//               id="totalCopy"
//               type="number"
//               value={bookData.totalCopy}
//               onChange={handleInputChange}
//             />
//             <TextField
//               label="Description"
//               id="description"
//               multiline
//               rows={4}
//               fullWidth
//               sx={{ width: "96.5% !important" }}
//               value={bookData.description}
//               onChange={handleInputChange}
//             />
//           </Box>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseDialog}>Cancel</Button>
//           <Button 
//             onClick={handleSubmit} 
//             variant="contained"
//             disabled={loading}
//           >
//             {loading ? <CircularProgress size={24} /> : isEdit ? "Update" : "Add"}
//           </Button>
//         </DialogActions>
//       </Dialog>

//       {/* Details Dialog - Updated to show category name */}
//       <Dialog
//         open={openDetailsDialog}
//         onClose={handleCloseDetails}
//         maxWidth="sm"
//         fullWidth
//       >
//         <DialogTitle>Book Details</DialogTitle>
//         <DialogContent>
//           {selectedBook && (
//             <Box sx={{ mt: 2 }}>
//               <Typography variant="subtitle1" sx={{ mb: 1 }}>
//                 <strong>Title:</strong> {selectedBook.title || "N/A"}
//               </Typography>
//               <Typography variant="subtitle1" sx={{ mb: 1 }}>
//                 <strong>Image:</strong>
//                 {selectedBook.image ? (
//                   <img 
//                     src={selectedBook.image} 
//                     alt="Book cover" 
//                     style={{ display: "block", maxWidth: "200px", marginTop: "8px" }} 
//                   />
//                 ) : "N/A"}
//               </Typography>
//               <Typography variant="subtitle1" sx={{ mb: 1 }}>
//                 <strong>Author:</strong> {selectedBook.author || "N/A"}
//               </Typography>
//               <Typography variant="subtitle1" sx={{ mb: 1 }}>
//                 <strong>ISBN:</strong> {selectedBook.isbn || "N/A"}
//               </Typography>
//               <Typography variant="subtitle1" sx={{ mb: 1 }}>
//                 <strong>Category:</strong> {selectedBook.categoryName || "N/A"}
//               </Typography>
//               <Typography variant="subtitle1" sx={{ mb: 1 }}>
//                 <strong>Price:</strong> ${selectedBook.price || "N/A"}
//               </Typography>
//               <Typography variant="subtitle1" sx={{ mb: 1 }}>
//                 <strong>Publish Year:</strong>{" "}
//                 {selectedBook.publishYear || "N/A"}
//               </Typography>
//               <Typography variant="subtitle1" sx={{ mb: 1 }}>
//                 <strong>Publisher:</strong> {selectedBook.publisher || "N/A"}
//               </Typography>
//               <Typography variant="subtitle1" sx={{ mb: 1 }}>
//                 <strong>Total Copies:</strong> {selectedBook.totalCopy || "N/A"}
//               </Typography>
//               <Typography variant="subtitle1" sx={{ mb: 1 }}>
//                 <strong>Description:</strong>
//               </Typography>
//               <Typography variant="body1" sx={{ mb: 1 }}>
//                 {selectedBook.description || "No description available."}
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

// export default Book;


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
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  CircularProgress,
  Alert,
  Snackbar,
} from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import InfoIcon from "@mui/icons-material/Info";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";

const Book = () => {
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ show: false, message: "", type: "" });
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(false);
  
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [openDialog, setOpenDialog] = useState(false);
  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
  const [selectedBook, setSelectedBook] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [book, setBook] = useState([]);
  const [bookData, setBookData] = useState({
    title: "",
    image: "",
    author: "",
    isbn: "",
    category: "",
    price: "",
    publishYear: "",
    publisher: "",
    description: "",
    totalCopy: "",
  });
  
  // Handle alert close
  const handleAlertClose = () => {
    setAlert({ ...alert, show: false });
  };
  
  // Upload image  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBookData({
        ...bookData,
        image: file,
      });
    }
  };
  
  // Handle input change
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setBookData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };
  
  // Handle category select change
  const handleCategoryChange = (e) => {
    setBookData({
      ...bookData,
      category: e.target.value,
    });
    console.log("Category selected:", e.target.value);
  };
  
  const handleOpenDialog = (isEditMode = false, data = null) => {
    console.log("Opening dialog, edit mode:", isEditMode);

    setIsEdit(isEditMode);
    if (isEditMode && data) {
      console.log("Editing Book Data:", data);
      // Make sure we're using the category ID, not the display name
      setBookData({ 
        ...data, 
        image: null,
        // Ensure the category field contains the ID
        category: data.categoryId || data.category
      });
    } else {
      setBookData({
        title: "",
        image: null,
        author: "",
        isbn: "",
        category: "",
        price: "",
        publishYear: "",
        publisher: "",
        description: "",
        totalCopy: "",
      });
    }
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleOpenDetails = (book) => {
    // Set the selected book for details view
    setSelectedBook(book);
    setOpenDetailsDialog(true);
  };

  const handleCloseDetails = () => {
    setOpenDetailsDialog(false);
    setSelectedBook(null);
  };

  // Upload image and book
  const handleSubmit = async () => {
    const authToken = localStorage.getItem("authToken");
    console.log("Submitting book data:", bookData);
    
    try {
      setLoading(true);

      // Validate required fields
      if (!bookData.title || !bookData.category) {
        setAlert({
          show: true,
          message: "Title, author, and category are required",
          type: "error",
        });
        setLoading(false);
        return;
      }
      
      // Handle image upload if there's a new image
      let imageId = null;
      if (bookData.image instanceof File) {
        const formData = new FormData();
        formData.append("file", bookData.image);
        console.log("Uploading image:", bookData.image);

        // Debug FormData contents
        for (let pair of formData.entries()) {
          console.log(`FormData Key: ${pair[0]}, Value: ${pair[1]}`);
        }

        // Upload image first
        const imageResponse = await axios.post(
          `${process.env.REACT_APP_BASE_URL}/author/book/upload`,
          formData,
          {
            headers: {
              Authorization: authToken,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log("Image upload response:", imageResponse);

        imageId = imageResponse.data.data._id;
        console.log("Image ID:", imageId);
      }
      
      // Prepare book data
      const bookPayload = {
        title: bookData.title,
        author: bookData.author,
        isbn: bookData.isbn,
        category: bookData.category, // Make sure this is the category ID
        price: bookData.price,
        publishYear: bookData.publishYear,
        publisher: bookData.publisher,
        description: bookData.description,
        totalCopy: bookData.totalCopy,
      };
      
      // Add image ID to payload if we have one
      if (imageId) {
        bookPayload.image = imageId;
      }
      
      console.log("Book payload:", bookPayload);
      let response;
      
      if (isEdit) {
        // Update existing book
        response = await axios.patch(
          `${process.env.REACT_APP_BASE_URL}/author/book/update/${bookData.id}`,
          bookPayload,
          {
            headers: {
              Authorization: authToken,
            },
          }
        );
        setAlert({
          show: true,
          message: "Book updated successfully",
          type: "success",
        });
      } else {
        // Create new book
        response = await axios.post(
          `${process.env.REACT_APP_BASE_URL}/author/book/create`,
          bookPayload, {
            headers: {
              Authorization: authToken
            }
          }
        );
        setAlert({
          show: true,
          message: "Book added successfully",
          type: "success",
        });
      }
      
      console.log("Book save response:", response);

      // Refresh the book list
      fetchBook();
      handleCloseDialog();
    } catch (err) {
      console.error("Error saving book:", err);
      setAlert({
        show: true,
        message: `Failed to ${isEdit ? "update" : "add"} book: ${
          err.response?.data?.message || err.message
        }`,
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };
  
  // Delete book
  const handleDelete = async (id) => {
    const authToken = localStorage.getItem("authToken");
    if (window.confirm("Are you sure you want to delete this book?")) {
      try {
        setLoading(true);
        await axios.delete(
          `${process.env.REACT_APP_BASE_URL}/author/book/delete/${id}`,
          {
            headers: {
              Authorization: authToken,
            },
          }
        );

        // Update the books list
        setBooks(books.filter((book) => book.id !== id));

        setAlert({
          show: true,
          message: "Book deleted successfully",
          type: "success",
        });
        fetchBook();
      } catch (error) {
        console.error("Error deleting book:", error);
        setAlert({
          show: true,
          message: "Failed to delete book",
          type: "error",
        });
      } finally {
        setLoading(false);
      }
    }
  };

  // Fetch categories
  const fetchCategories = async () => {
    const authToken = localStorage.getItem("authToken");
    
    console.log("Fetching categories from:", `${process.env.REACT_APP_BASE_URL}/author/category/getAll`);
    setLoadingCategories(true);
    
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/author/category/getAll`,
        {
          headers: {
            Authorization: authToken,
          },
        }
      );
      
      console.log("Categories API response:", response);
      
      // Assuming the categories are in response.data.data
      const categoriesData = Array.isArray(response.data) 
        ? response.data 
        : response.data?.data || [];
        
      setCategories(categoriesData);
      console.log("Categories loaded:", categoriesData);
    } catch (error) {
      console.error("Error fetching categories:", error);
      console.error("Error details:", error.response || error.message);
      setError("Failed to load categories");
      setAlert({
        show: true,
        message: "Failed to load categories",
        type: "error",
      });
    } finally {
      setLoadingCategories(false);
    }
  };
  
  // Load data on component mount
  useEffect(() => {
    let isMounted = true;
    
    const loadData = async () => {
      try {
        if (isMounted) await fetchCategories();
        if (isMounted) await fetchBook();
      } catch (error) {
        console.error("Error loading data:", error);
        if (isMounted) {
          setAlert({
            show: true,
            message: "Error loading data",
            type: "error",
          });
        }
      }
    };
    
    loadData();
    
    return () => {
      isMounted = false;
    };
  }, []);
  
  // DataGrid columns - Updated to use authorName and categoryName for display
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "title",
      headerName: "Title",
      type: "text",
      headerAlign: "left",
      align: "left",
      flex: 1,
    },
    {
      field: "image",
      headerName: "Image",
      flex: 1,
      renderCell: (params) => (
        params.value ? (
          <img
            src={params.value}
            alt="Book Cover"
            style={{ width: 50, height: 50, objectFit: "cover", borderRadius: 5 }}
          />
        ) : (
          <Box>No Image</Box>
        )
      ),
    },
    {
      field: "authorName", // Updated to use authorName for display
      headerName: "Author",
      flex: 1,
    },
    {
      field: "categoryName", 
      headerName: "Category",
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

  // Fetch books - Modified to handle nested category and author objects while preserving update functionality
  const fetchBook = async () => {
    try {
      const authToken = localStorage.getItem("authToken");
      console.log("Fetching books from:", `${process.env.REACT_APP_BASE_URL}/author/book/get`);
      
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/author/book/get`,
        {
          headers: {
            Authorization: authToken,
          },
        }
      );
      console.log("Book API response:", response);

      // Check if response.data is an array or wrapped inside another object
      const booksArray = Array.isArray(response.data)
        ? response.data
        : response.data?.data || [];
      console.log("Books array:", booksArray);

      const formattedBooks = booksArray.map((book) => {
        // Extract the nested author and category information for display purposes
        const authorName = book.author ? 
          `${book.author.firstName || ''} ${book.author.lastName || ''}`.trim() : 
          "Unknown Author";
        
        const categoryName = book.category?.name || "Unknown Category";
        
        // Preserve the original structure needed for updates while adding display fields
        return {
          ...book,
          id: book._id,
          image: book.image ? book.image.url : "",
          // Original author field stays for updates 
          author: book.author?._id || book.author,  // Keep original value for updates
          authorName: authorName, // Add display name for the table
          // Original category field stays for updates
          category: book.category?._id || book.category, // Keep original value for updates
          categoryName: categoryName, // Add display name for the table
          // For edit dialog, we need these IDs
          categoryId: book.category?._id || book.category,
          authorId: book.author?._id || book.author
        };
      });
      console.log("Formatted books with author and category names:", formattedBooks);

      setBook(formattedBooks);
    } catch (error) {
      console.error("Error fetching books:", error);
      console.error("Error details:", error.response || error.message);
      setAlert({
        show: true,
        message: "Failed to load books",
        type: "error",
      });
    }
  };

  return (
    <Box m="20px">
      {/* Alert for notifications */}
      <Snackbar 
        open={alert.show} 
        autoHideDuration={6000} 
        onClose={handleAlertClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert onClose={handleAlertClose} severity={alert.type} sx={{ width: '100%' }}>
          {alert.message}
        </Alert>
      </Snackbar>
      
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="BOOK" subtitle="Managing the Books" />
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => handleOpenDialog(false)}
        >
          Add Book
        </Button>
      </Box>

      {/* Main DataGrid */}
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
          rows={book}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          loading={loading}
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
              "& .MuiFormControl-root": { m: 1, width: "47%" },
              mt: 2,
            }}
          >
            <TextField
              label="Title"
              id="title"
              value={bookData.title}
              onChange={handleInputChange}
              required
            />
            <TextField
              label="Image"
              id="image"
              type="file"
              title="Upload Image"
              InputLabelProps={{ shrink: true }}
              onChange={handleFileChange}
            />
            <TextField
              label="Author"
              id="author"
              value={bookData.author}
              onChange={handleInputChange}
              required
            />
            <TextField
              label="ISBN"
              id="isbn"
              value={bookData.isbn}
              onChange={handleInputChange}
            />
            
            {/* Category Dropdown - Improved display of selected category */}
            <FormControl required>
              <InputLabel id="category-label">Category</InputLabel>
              <Select
                labelId="category-label"
                id="category"
                value={bookData.category}
                label="Category"
                onChange={handleCategoryChange}
                disabled={loadingCategories}
              >
                <MenuItem value="">Select a category</MenuItem>
                {categories.map((category) => (
                  <MenuItem key={category._id} value={category._id}>
                    {category.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            
            <TextField
              label="Price"
              id="price"
              type="number"
              value={bookData.price}
              onChange={handleInputChange}
            />
            <TextField
              label="Publish Year"
              id="publishYear"
              value={bookData.publishYear}
              onChange={handleInputChange}
            />
            <TextField
              label="Publisher"
              id="publisher"
              value={bookData.publisher}
              onChange={handleInputChange}
            />
            <TextField
              label="Total Copies"
              id="totalCopy"
              type="number"
              value={bookData.totalCopy}
              onChange={handleInputChange}
            />
            <TextField
              label="Description"
              id="description"
              multiline
              rows={4}
              fullWidth
              sx={{ width: "96.5% !important" }}
              value={bookData.description}
              onChange={handleInputChange}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button 
            onClick={handleSubmit} 
            variant="contained"
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : isEdit ? "Update" : "Add"}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Details Dialog - Updated to show author and category names */}
      <Dialog
        open={openDetailsDialog}
        onClose={handleCloseDetails}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Book Details</DialogTitle>
        <DialogContent>
          {selectedBook && (
            <Box sx={{ mt: 2 }}>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                <strong>Title:</strong> {selectedBook.title || "N/A"}
              </Typography>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                <strong>Image:</strong>
                {selectedBook.image ? (
                  <img 
                    src={selectedBook.image} 
                    alt="Book cover" 
                    style={{ display: "block", maxWidth: "200px", marginTop: "8px" }} 
                  />
                ) : "N/A"}
              </Typography>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                <strong>Author:</strong> {selectedBook.authorName || "N/A"}
              </Typography>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                <strong>ISBN:</strong> {selectedBook.isbn || "N/A"}
              </Typography>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                <strong>Category:</strong> {selectedBook.categoryName || "N/A"}
              </Typography>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                <strong>Price:</strong> ${selectedBook.price || "N/A"}
              </Typography>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                <strong>Publish Year:</strong>{" "}
                {selectedBook.publishYear || "N/A"}
              </Typography>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                <strong>Publisher:</strong> {selectedBook.publisher || "N/A"}
              </Typography>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                <strong>Total Copies:</strong> {selectedBook.totalCopy || "N/A"}
              </Typography>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                <strong>Description:</strong>
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                {selectedBook.description || "No description available."}
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