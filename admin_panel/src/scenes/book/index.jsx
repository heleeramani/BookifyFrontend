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
// //   const [alert, setAlert] = useState({ show: false, message: '', type: '' });
// //   const [books, setBooks] = useState([]);
// //   const [error, setError] = useState(null);
// //   const theme = useTheme();
// //   const colors = tokens(theme.palette.mode);
// //   const [openDialog, setOpenDialog] = useState(false);
// //   const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
// //   const [selectedBook, setSelectedBook] = useState([]);
// //   const [isEdit, setIsEdit] = useState(false);
// //   const [book,setBook]=useState([]);
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
// // //upload image  1
// //   const handleFileChange = (e) => {
// //     const file = e.target.files[0];
// //     if (file) {
// //       setBookData({
// //         ...bookData,
// //         image: file
// //       });
// //     }
// //   };
// //   // 1
// //   const handleInputChange = (e) => {
// //     const { id, value } = e.target;
// //     setBookData(prev => ({
// //       ...prev,
// //       [id]: value
// //     }));
// //   };
// //   const handleOpenDialog = (isEditMode = false, data = null) => {
// //     console.log("-----enter in handle open dialog");

// //     setIsEdit(isEditMode);
// //     if (isEditMode && data) {
// //       console.log("📌 Editing Book Data:", data); // Debugging
// //       setBookData({ ...data,image:null });
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
// //   const handleSubmit =async () => {
// //     // Handle form submission here
// //     console.log(bookData);
// //     try{
// //       setLoading(true);

// //         // Validate required fields
// //         if (!bookData.title || !bookData.author || !bookData.category) {
// //           setAlert({
// //             open: true,
// //             message: "Title, author, and category are required",
// //             severity: "error"
// //           });
// //           return;
// //         }
// // //--------------------
// //         let imageId = null;
// //         if (!(bookData.image instanceof File)) {
// //           console.error("Invalid file format", bookData.image);

// //           return;
// //         }

// //         // If there's a new image to upload
// //       if (bookData.image) {
// //         const formData = new FormData();
// //         formData.append("file", bookData.image);
// //         console.log(bookData.image,"book dataaaa");
// //         // console.log(formData,"form data");

// //         for (let pair of formData.entries()) {
// //           console.log(`FormData Key: ${pair[0]}, Value: ${pair[1]}`);
// //         }

// //         // Upload image first
// //         const imageResponse = await axios.post(
// //           `${process.env.REACT_APP_BASE_URL}/admin/book/upload`,
// //           formData,
// //           {
// //             headers: {
// //               'Content-Type': 'multipart/form-data'
// //             }
// //           }
// //         );
// //         console.log(imageResponse,"image responseeee");

// //         imageId = imageResponse.data.data._id
// //         console.log(imageId,"image iddddd");

// //       }
// // //-------------------------------
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
// //         totalCopy: bookData.totalCopy
// //       };
// // //-------------------image
// //       // Add image ID to payload if we have one
// //       if (imageId) {
// //         bookPayload.image = imageId;
// //       }
// // //-------------------image
// //       let response1;
// //       if (isEdit) {
// //         // Update existing book
// //         response1 = await axios.patch(
// //           `${process.env.REACT_APP_BASE_URL}/admin/book/update/${bookData.id}`,
// //           bookPayload
// //         );
// //         setAlert({
// //           open: true,
// //           message: "Book updated successfully",
// //           severity: "success"
// //         });
// //       } else {
// //         // Create new book
// //         response1 = await axios.post(
// //           `${process.env.REACT_APP_BASE_URL}/admin/book/create`,
// //           bookPayload
// //         );
// //         setAlert({
// //           open: true,
// //           message: "Book added successfully",
// //           severity: "success"
// //         });
// //       }

// //       // Refresh the book list
// //       fetchBook();

// //       handleCloseDialog();
// //     }catch(err){
// //       console.error("Error saving book:", error);
// //       setAlert({
// //         open: true,
// //         message: `Failed to ${isEdit ? 'update' : 'add'} book: ${error.response?.data?.message || error.message}`,
// //         severity: "error"
// //       });
// //     }finally {
// //       setLoading(false);
// //     }
// //   };
// // //delete ...
// //   const handleDelete =async (id) => {
// //     if (window.confirm("Are you sure you want to delete this book?")) {
// //       try {
// //         setLoading(true);
// //         await axios.delete(
// //           `${process.env.REACT_APP_BASE_URL}/admin/book/delete/${id}`
// //         );

// //         // Update the books list
// //         setBooks(books.filter(book => book.id !== id));

// //         setAlert({
// //           open: true,
// //           message: "Book deleted successfully",
// //           severity: "success"
// //         });
// //         fetchBook()
// //       } catch (error) {
// //         console.error("Error deleting book:", error);
// //         setAlert({
// //           open: true,
// //           message: "Failed to delete book",
// //           severity: "error"
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
// //       const response = await axios.get(
// //         `${process.env.REACT_APP_BASE_URL}/admin/book/get`
// //       );
// //       console.log("response", response?.data?.data);

// //       // Check if response.data is an array or wrapped inside another object
// //       const booksArray = Array.isArray(response.data)
// //         ? response.data
// //         : response.data?.data || [];
// //       console.log(booksArray,"shhrreeee");

// //       const formattedBooks = booksArray.map((book) => ({
// //         ...book,
// //         id: book._id,
// //         image: book.image ? book.image.url : "" // Check if image exists // Ensure DataGrid has an id
// //       }));
// //       console.log(formattedBooks,"hellllll");

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
//   Select,
//   FormControl,
//   InputLabel,
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
// const Book = () => {
//   const [loading, setLoading] = useState(false);
//   const [alert, setAlert] = useState({ show: false, message: '', type: '' });
//   const [books, setBooks] = useState([]);
//   const [error, setError] = useState(null);
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   const [openDialog, setOpenDialog] = useState(false);
//   const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
//   const [selectedBook, setSelectedBook] = useState([]);
//   const [isEdit, setIsEdit] = useState(false);
//   const [book,setBook]=useState([]);
//   const [authors, setAuthors] = useState([]);
//   const [categories, setCategories] = useState([]);
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
// //upload image  1
//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setBookData({
//         ...bookData,
//         image: file
//       });
//     }
//   };
//   // 1
//   const handleInputChange = (e) => {
//     const { id, value } = e.target;
//     setBookData(prev => ({
//       ...prev,
//       [id]: value
//     }));
//   };

//   const handleSelectChange = (e) => {
//     const { name, value } = e.target;
//     setBookData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleOpenDialog = (isEditMode = false, data = null) => {
//     console.log("-----enter in handle open dialog");

//     setIsEdit(isEditMode);
//     if (isEditMode && data) {
//       console.log("📌 Editing Book Data:", data); // Debugging
//       setBookData({ ...data,image:null });
//     } else {
//       setBookData({
//         // bookName: "",
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
//     console.log("-----enter in handle open dialog");
//   };

//   const handleCloseDialog = () => {
//     setOpenDialog(false);
//   };

//   // 2
//   const handleOpenDetails = (book) => {
//     setSelectedBook(book);
//     setOpenDetailsDialog(true);
//   };

//   const handleCloseDetails = () => {
//     setOpenDetailsDialog(false);
//     setSelectedBook(null);
//   };

//   //upload image and book
//   const handleSubmit =async () => {
//     // Handle form submission here
//     console.log(bookData);
//     try{
//       setLoading(true);

//         // Validate required fields
//         if (!bookData.title || !bookData.author || !bookData.category) {
//           setAlert({
//             open: true,
//             message: "Title, author, and category are required",
//             severity: "error"
//           });
//           return;
//         }
// //--------------------
//         let imageId = null;
//         if (!(bookData.image instanceof File)) {
//           console.error("Invalid file format", bookData.image);

//           return;
//         }

//         // If there's a new image to upload
//       if (bookData.image) {
//         const formData = new FormData();
//         formData.append("file", bookData.image);
//         console.log(bookData.image,"book dataaaa");
//         // console.log(formData,"form data");

//         for (let pair of formData.entries()) {
//           console.log(`FormData Key: ${pair[0]}, Value: ${pair[1]}`);
//         }

//         // Upload image first
//         const imageResponse = await axios.post(
//           `${process.env.REACT_APP_BASE_URL}/admin/book/upload`,
//           formData,
//           {
//             headers: {
//               'Content-Type': 'multipart/form-data'
//             }
//           }
//         );
//         console.log(imageResponse,"image responseeee");

//         imageId = imageResponse.data.data._id
//         console.log(imageId,"image iddddd");

//       }
// //-------------------------------
//       // Prepare book data
//       const bookPayload = {
//         title: bookData.title,
//         author: bookData.author,
//         isbn: bookData.isbn,
//         category: bookData.category,
//         price: bookData.price,
//         publishYear: bookData.publishYear,
//         publisher: bookData.publisher,
//         description: bookData.description,
//         totalCopy: bookData.totalCopy
//       };
// //-------------------image
//       // Add image ID to payload if we have one
//       if (imageId) {
//         bookPayload.image = imageId;
//       }
// //-------------------image
//       let response1;
//       if (isEdit) {
//         // Update existing book
//         response1 = await axios.patch(
//           `${process.env.REACT_APP_BASE_URL}/admin/book/update/${bookData.id}`,
//           bookPayload
//         );
//         setAlert({
//           open: true,
//           message: "Book updated successfully",
//           severity: "success"
//         });
//       } else {
//         // Create new book
//         response1 = await axios.post(
//           `${process.env.REACT_APP_BASE_URL}/admin/book/create`,
//           bookPayload
//         );
//         setAlert({
//           open: true,
//           message: "Book added successfully",
//           severity: "success"
//         });
//       }

//       // Refresh the book list
//       fetchBook();

//       handleCloseDialog();
//     }catch(err){
//       console.error("Error saving book:", error);
//       setAlert({
//         open: true,
//         message: `Failed to ${isEdit ? 'update' : 'add'} book: ${error.response?.data?.message || error.message}`,
//         severity: "error"
//       });
//     }finally {
//       setLoading(false);
//     }
//   };
// //delete ...
//   const handleDelete =async (id) => {
//     if (window.confirm("Are you sure you want to delete this book?")) {
//       try {
//         setLoading(true);
//         await axios.delete(
//           `${process.env.REACT_APP_BASE_URL}/admin/book/delete/${id}`
//         );

//         // Update the books list
//         setBooks(books.filter(book => book.id !== id));

//         setAlert({
//           open: true,
//           message: "Book deleted successfully",
//           severity: "success"
//         });
//         fetchBook()
//       } catch (error) {
//         console.error("Error deleting book:", error);
//         setAlert({
//           open: true,
//           message: "Failed to delete book",
//           severity: "error"
//         });
//       } finally {
//         setLoading(false);
//       }
//     }
//   };

//   // for get data
//   const columns = [
//     { field: "id", headerName: "ID" },
//     // {
//     //   field: "bookName",
//     //   headerName: "Book Name",
//     //   flex: 1,
//     //   cellClassName: "name-column--cell",
//     // },
//     {
//       field: "title",
//       headerName: "Title",
//       type: "text",
//       headerAlign: "left",
//       align: "left",
//     },
//     {
//       field: "image",
//       headerName: "Image",
//       flex: 1,
//       renderCell: (params) => (
//         <img
//           src={params.value}
//           alt="Book Cover"
//           style={{ width: 50, height: 50, objectFit: "cover", borderRadius: 5 }}
//         />
//       ),
//     },
//     {
//       field: "author",
//       headerName: "Author",
//       flex: 1,
//     },
//     {
//       field: "category",
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

//   const fetchBook = async () => {
//     try {
//       const response = await axios.get(
//         `${process.env.REACT_APP_BASE_URL}/admin/book/get`
//       );
//       console.log("response", response?.data?.data);

//       // Check if response.data is an array or wrapped inside another object
//       const booksArray = Array.isArray(response.data)
//         ? response.data
//         : response.data?.data || [];
//       console.log(booksArray,"shhrreeee");

//       const formattedBooks = booksArray.map((book) => ({
//         ...book,
//         id: book._id,
//         image: book.image ? book.image.url : "" // Check if image exists // Ensure DataGrid has an id
//       }));
//       console.log(formattedBooks,"hellllll");

//       setBook(formattedBooks);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // Fetch authors
//   const fetchAuthors = async () => {
//     try {
//       const response = await axios.get(
//         `${process.env.REACT_APP_BASE_URL}/admin/author/get`
//       );

//       const authorsArray = Array.isArray(response.data)
//         ? response.data
//         : response.data?.data || [];

//       setAuthors(authorsArray);
//     } catch (error) {
//       console.error("Error fetching authors:", error);
//     }
//   };

//   // Fetch categories
//   const fetchCategories = async () => {
//     try {
//       const response = await axios.get(
//         `${process.env.REACT_APP_BASE_URL}/admin/category/get`
//       );

//       const categoriesArray = Array.isArray(response.data)
//         ? response.data
//         : response.data?.data || [];

//       setCategories(categoriesArray);
//     } catch (error) {
//       console.error("Error fetching categories:", error);
//     }
//   };

//   useEffect(() => {
//     fetchBook();
//     fetchAuthors();
//     fetchCategories();
//     // console.log(book, "skjcskhc");
//   }, []);

//   return (
//     <Box m="20px">
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
//             {/* <TextField
//               label="Book Name"
//               value={bookData.bookName}
//               onChange={(e) =>
//                 setBookData({ ...bookData, bookName: e.target.value })
//               }
//             /> */}
//             <TextField
//               label="Title"
//               id="title"
//               value={bookData.title}
//               onChange={handleInputChange}
//             />
//             <TextField
//               label="Image URL"
//               id="image"
//               type="file"
//               title="Upload Image"
//               // InputLabelProps={{ shrink: true }}
//               // value={bookData.image}
//               onChange={handleFileChange}
//             />
//             <FormControl>
//               <InputLabel id="author-label">Author</InputLabel>
//               <Select
//                 labelId="author-label"
//                 name="author"
//                 value={bookData.author}
//                 onChange={handleSelectChange}
//                 label="Author"
//               >
//                 {authors.map((author) => (
//                   <MenuItem key={author._id} value={author._id}>
//                     {author.name}
//                   </MenuItem>
//                 ))}
//               </Select>
//             </FormControl>
//             <TextField
//               label="ISBN"
//               id="isbn"
//               value={bookData.isbn}
//               onChange={handleInputChange}
//             />
//             <FormControl>
//               <InputLabel id="category-label">Category</InputLabel>
//               <Select
//                 labelId="category-label"
//                 name="category"
//                 value={bookData.category}
//                 onChange={handleSelectChange}
//                 label="Category"
//               >
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
//         <DialogTitle>Book Details</DialogTitle>
//         <DialogContent>
//           {selectedBook && (
//             <Box sx={{ mt: 2 }}>
//               <Typography variant="subtitle1" sx={{ mb: 1 }}>
//                 <strong>book Name:</strong> {selectedBook.bookName || "N/A"}
//               </Typography>
//               <Typography variant="subtitle1" sx={{ mb: 1 }}>
//                 <strong>Title:</strong> {selectedBook.title || "N/A"}
//               </Typography>
//               <Typography variant="subtitle1" sx={{ mb: 1 }}>
//                 <strong>Image:</strong> {selectedBook.image || "N/A"}
//               </Typography>
//               <Typography variant="subtitle1" sx={{ mb: 1 }}>
//                 <strong>Author:</strong> {selectedBook.author || "N/A"}
//               </Typography>
//               <Typography variant="subtitle1" sx={{ mb: 1 }}>
//                 <strong>ISBN:</strong> {selectedBook.isbn || "N/A"}
//               </Typography>
//               <Typography variant="subtitle1" sx={{ mb: 1 }}>
//                 <strong>Category:</strong> {selectedBook.category || "N/A"}
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
  Select,
  FormControl,
  InputLabel,
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
  const [alert, setAlert] = useState({ show: false, message: "", type: "" });
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [openDialog, setOpenDialog] = useState(false);
  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
  const [selectedBook, setSelectedBook] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [book, setBook] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [categories, setCategories] = useState([]);
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
    totalCopies: "",
  });
  //upload image  1
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBookData({
        ...bookData,
        image: file,
      });
    }
  };
  // 1
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setBookData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setBookData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleOpenDialog = (isEditMode = false, data = null) => {
    console.log("-----enter in handle open dialog");

    setIsEdit(isEditMode);
    if (isEditMode && data) {
      console.log("📌 Editing Book Data:", data); // Debugging
      setBookData({ ...data, image: null, author: data.author,
        category: data.category });
    } else {
      setBookData({
        // bookName: "",
        title: "",
        image: null,
        author: "",
        isbn: "",
        category: "",
        price: "",
        publishYear: "",
        publisher: "",
        description: "",
        totalCopies: "",
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
    setSelectedBook(book);
    setOpenDetailsDialog(true);
  };

  const handleCloseDetails = () => {
    setOpenDetailsDialog(false);
    setSelectedBook(null);
  };

  //upload image and book
  const handleSubmit = async () => {
    // Handle form submission here
    console.log(bookData);
    try {
      setLoading(true);

      // Validate required fields
      if (!bookData.title || !bookData.author || !bookData.category) {
        setAlert({
          open: true,
          message: "Title, author, and category are required",
          severity: "error",
        });
        return;
      }
      //--------------------
      let imageId = null;
      if (!(bookData.image instanceof File)) {
        console.error("Invalid file format", bookData.image);

        return;
      }

      // If there's a new image to upload
      if (bookData.image) {
        const formData = new FormData();
        formData.append("file", bookData.image);
        console.log(bookData.image, "book dataaaa");
        // console.log(formData,"form data");

        for (let pair of formData.entries()) {
          console.log(`FormData Key: ${pair[0]}, Value: ${pair[1]}`);
        }

        // Upload image first
        const imageResponse = await axios.post(
          `${process.env.REACT_APP_BASE_URL}/admin/book/upload`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log(imageResponse, "image responseeee");

        imageId = imageResponse.data.data._id;
        console.log(imageId, "image iddddd");
      }
      //-------------------------------
      // Prepare book data
      const bookPayload = {
        title: bookData.title,
        author: bookData.author,
        isbn: bookData.isbn,
        category: bookData.category,
        price: bookData.price,
        publishYear: bookData.publishYear,
        publisher: bookData.publisher,
        description: bookData.description,
        totalCopies: bookData.totalCopies,
      };
      //-------------------image
      // Add image ID to payload if we have one
      if (imageId) {
        bookPayload.image = imageId;
      }
      //-------------------image
      let response1;
      if (isEdit) {
        // Update existing book
        response1 = await axios.patch(
          `${process.env.REACT_APP_BASE_URL}/admin/book/update/${bookData.id}`,
          bookPayload
        );
        setAlert({
          open: true,
          message: "Book updated successfully",
          severity: "success",
        });
      } else {
        // Create new book
        response1 = await axios.post(
          `${process.env.REACT_APP_BASE_URL}/admin/book/create`,
          bookPayload
        );
        setAlert({
          open: true,
          message: "Book added successfully",
          severity: "success",
        });
      }

      // Refresh the book list
      fetchBook();

      handleCloseDialog();
    } catch (err) {
      console.error("Error saving book:", error);
      setAlert({
        open: true,
        message: `Failed to ${isEdit ? "update" : "add"} book: ${
          error.response?.data?.message || error.message
        }`,
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };
  //delete ...
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      try {
        setLoading(true);
        await axios.delete(
          `${process.env.REACT_APP_BASE_URL}/admin/book/delete/${id}`
        );

        // Update the books list
        setBooks(books.filter((book) => book.id !== id));

        setAlert({
          open: true,
          message: "Book deleted successfully",
          severity: "success",
        });
        fetchBook();
      } catch (error) {
        console.error("Error deleting book:", error);
        setAlert({
          open: true,
          message: "Failed to delete book",
          severity: "error",
        });
      } finally {
        setLoading(false);
      }
    }
  };

  // for get data
  // const columns = [
  //   { field: "id", headerName: "ID" },
  //   // {
  //   //   field: "bookName",
  //   //   headerName: "Book Name",
  //   //   flex: 1,
  //   //   cellClassName: "name-column--cell",
  //   // },
  //   {
  //     field: "title",
  //     headerName: "Title",
  //     type: "text",
  //     headerAlign: "left",
  //     align: "left",
  //   },
  //   {
  //     field: "image",
  //     headerName: "Image",
  //     flex: 1,
  //     renderCell: (params) => (
  //       <img
  //         src={params.value}
  //         alt="Book Cover"
  //         style={{ width: 50, height: 50, objectFit: "cover", borderRadius: 5 }}
  //       />
  //     ),
  //   },
  //   {
  //     field: "author",
  //     headerName: "Author",
  //     flex: 1,
  //   },
  //   {
  //     field: "category",
  //     headerName: "Category",
  //     flex: 1,
  //   },
  //   {
  //     field: "actions",
  //     headerName: "Actions",
  //     flex: 1,
  //     renderCell: (params) => {
  //       return (
  //         <Box>
  //           <IconButton onClick={() => handleOpenDetails(params.row)}>
  //             <InfoIcon />
  //           </IconButton>
  //           <IconButton onClick={() => handleOpenDialog(true, params.row)}>
  //             <EditIcon />
  //           </IconButton>
  //           <IconButton onClick={() => handleDelete(params.row.id)}>
  //             <DeleteIcon />
  //           </IconButton>
  //         </Box>
  //       );
  //     },
  //   },
  // ];
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "title",
      headerName: "Title",
      type: "text",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "image",
      headerName: "Image",
      flex: 1,
      renderCell: (params) => (
        <img
          src={params.value}
          alt="Book Cover"
          style={{ width: 50, height: 50, objectFit: "cover", borderRadius: 5 }}
        />
      ),
    },
    {
      field: "authorName", // Changed from "author" to "authorName"
      headerName: "Author",
      flex: 1,
    },
    {
      field: "categoryName", // Changed from "category" to "categoryName"
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
  // const fetchBook = async () => {
  //   try {
  //     const response = await axios.get(
  //       `${process.env.REACT_APP_BASE_URL}/admin/book/get`
  //     );
  //     console.log("response", response?.data?.data);

  //     // Check if response.data is an array or wrapped inside another object
  //     const booksArray = Array.isArray(response.data)
  //       ? response.data
  //       : response.data?.data || [];
  //     console.log(booksArray, "shhrreeee");

  //     const formattedBooks = booksArray.map((book) => ({
  //       ...book,
  //       id: book._id,
  //       image: book.image ? book.image.url : "", // Check if image exists // Ensure DataGrid has an id
  //     }));
  //     console.log(formattedBooks, "hellllll");

  //     setBook(formattedBooks);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // Fetch authors
  // const fetchAuthors = async () => {
  //   try {
  //     const authToken = localStorage.getItem("authToken");
  //     const response = await axios.get(
  //       `${process.env.REACT_APP_BASE_URL}/admin/author/getAll`,
  //       {
  //         headers: {
  //           "Authorization": authToken,
  //         },
  //       }
  //     );

  //     const authorsArray = Array.isArray(response.data)
  //       ? response.data
  //       : response.data?.data || [];

  //     setAuthors(authorsArray);
  //   } catch (error) {
  //     console.error("Error fetching authors:", error);
  //   }
  // };
  // Inside the fetchAuthors function, modify it to transform the author data:
  
  // const fetchBook = async () => {
  //   try {
  //     const authToken = localStorage.getItem("authToken");

  //     const response = await axios.get(
  //       `${process.env.REACT_APP_BASE_URL}/admin/book/get`
  //     );
  //     console.log("response", response?.data?.data);
  
  //     // Check if response.data is an array or wrapped inside another object
  //     const booksArray = Array.isArray(response.data)
  //       ? response.data
  //       : response.data?.data || [];
      
  //     // Create promises for fetching author and category data
  //     const authorsPromise = axios.get(`${process.env.REACT_APP_BASE_URL}/admin/author/getAll`,{
  //       headers: {
  //         "Authorization": authToken, 
  //       },
  //     });
  //       const categoriesPromise = axios.get(`${process.env.REACT_APP_BASE_URL}/admin/book-category/getAll`,{
  //         headers: {
  //           "Authorization": authToken, 
  //         },
  //       });
      
  //     // Fetch both in parallel
  //     const [authorsResponse, categoriesResponse] = await Promise.all([authorsPromise, categoriesPromise]);
      
  //     // Extract authors and categories data
  //     const authorsData = authorsResponse.data?.data || [];
  //     const categoriesData = categoriesResponse.data?.data || [];
      
  //     // Create lookup maps for faster access
  //     const authorsMap = {};
  //     authorsData.forEach(author => {
  //       authorsMap[author._id] = `${author.firstName} ${author.lastName}`;
  //     });
      
  //     const categoriesMap = {};
  //     categoriesData.forEach(category => {
  //       categoriesMap[category._id] = category.name;
  //     });
  
  //     const formattedBooks = booksArray.map((book) => ({
  //       ...book,
  //       id: book._id,
  //       image: book.image ? book.image.url : "",
  //       // Replace IDs with names for display
  //       authorName: authorsMap[book.author] || book.author,
  //       categoryName: categoriesMap[book.category] || book.category
  //     }));
  
  //     setBook(formattedBooks);
  //   } catch (error) {
  //     console.error("Error fetching books:", error);
  //   }
  // };
  const fetchBook = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/admin/book/get`
      );
      console.log("response", response?.data?.data);
  
      // Check if response.data is an array or wrapped inside another object
      const booksArray = Array.isArray(response?.data)
        ? response.data
        : response.data?.data || [];
        console.log(booksArray,"booksArray");
        
      // const formattedBooks = booksArray.map((book) => {
      //   console.log("formatteddddddddd");
        
      //   // Extract author name from nested object
      //   const authorName = book.author && typeof book.author === 'object' 
      //     ? `${book.author.firstName} ${book.author.lastName}`
      //     : book.author; // Fallback to ID if not an object
      //   console.log(authorName,"authorname");
        
      //   // Extract category name from nested object
      //   const categoryName = book.category && typeof book.category === 'object'
      //     ? book.category.name
      //     : book.category; // Fallback to ID if not an object
      //   console.log(categoryName,"category");
        
      //   return {
      //     ...book,
      //     id: book._id || "N/A",
      //     image: book.image ? book.image.url : "",
      //     authorName: authorName,
      //     categoryName: categoryName,
      //     // Keep the original fields for editing purposes
      //     author: typeof book.author === 'object' ? book.author._id : book.author,
      //     category: typeof book.category === 'object' ? book.category._id : book.category
      //   };
      // });
  
      // const formattedBooks = booksArray.map((book) => ({
      //   ...book,
      //     id: book._id || "N/A",
      //     image: book.image ? book.image.url : "",
      //     // author: book.author.firstName || "none",
      //     // category: book.category.name || "none",
      //     // Keep the original fields for editing purposes
      //     // author: typeof book.author === 'object' ? book.author._id : book.author,
      //     // category: typeof book.category === 'object' ? book.category._id : book.category
      // }));
      const formattedBooks = booksArray.map((book) => {
        const authorName = book.author
          ? `${book.author.firstName || ''} ${book.author.lastName || ''}`.trim()
          : "Unknown Author";
      
        const categoryName = book.category
          ? book.category.name || "Unknown Category"
          : "Unknown Category";
      
        return {
          ...book,
          id: book._id || "N/A",
          image: book.image ? book.image.url : "",
          authorName: authorName,
          categoryName: categoryName,
          author: book.author ? book.author._id : null,
          category: book.category ? book.category._id : null,
        };
      });
      
      console.log("formatted book",formattedBooks);
  
      setBook(formattedBooks);
    } catch (error) {
      console.error("Error fetching books:", error);
      setError("Failed to fetch books. Please try again later.");
    }
  };
  const fetchAuthors = async () => {
    try {
      const authToken = localStorage.getItem("authToken");
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/admin/author/getAll`,
        {
          headers: {
            Authorization: authToken,
          },
        }
      );

      const authorsArray = Array.isArray(response.data)
        ? response.data
        : response.data?.data || [];

      // Transform the authors data to include a name property
      const formattedAuthors = authorsArray.map((author) => ({
        ...author,
        name: `${author.firstName || 'none'} ${author.lastName || 'none'}`, // Combine firstName and lastName
      }));

      setAuthors(formattedAuthors);
    } catch (error) {
      console.error("Error fetching authors:", error);
    }
  };
  // Fetch categories
  const fetchCategories = async () => {
    try {
      const authToken = localStorage.getItem("authToken");
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/admin/book-category/getAll`,
        {
          headers: {
            Authorization: authToken,
          },
        }
      );

      const categoriesArray = Array.isArray(response.data)
        ? response.data
        : response.data?.data || [];

      setCategories(categoriesArray);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchBook();
    fetchAuthors();
    fetchCategories();
    // console.log(book, "skjcskhc");
  }, []);

  return (
    <Box m="20px">
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
            {/* <TextField
              label="Book Name"
              value={bookData.bookName}
              onChange={(e) =>
                setBookData({ ...bookData, bookName: e.target.value })
              }
            /> */}
            <TextField
              label="Title"
              id="title"
              value={bookData.title}
              onChange={handleInputChange}
            />
            <TextField
              label="Image URL"
              id="image"
              type="file"
              title="Upload Image"
              // InputLabelProps={{ shrink: true }}
              // value={bookData.image}
              onChange={handleFileChange}
            />
            {/* <FormControl>
              <InputLabel id="author-label">Author</InputLabel>
              <Select
                labelId="author-label"
                name="author"
                value={bookData.author}
                onChange={handleSelectChange}
                label="Author"
              >
                {authors.map((author) => (
                  <MenuItem key={author._id} value={author._id}>
                    {author.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl> */}
            <FormControl>
              <InputLabel id="author-label">Author</InputLabel>
              <Select
                labelId="author-label"
                name="author"
                value={bookData.author}
                onChange={handleSelectChange}
                label="Author"
              >
                {authors.map((author) => (
                  <MenuItem key={author._id} value={author._id}>
                    {author.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              label="ISBN"
              id="isbn"
              value={bookData.isbn}
              onChange={handleInputChange}
            />
            <FormControl>
              <InputLabel id="category-label">Category</InputLabel>
              <Select
                labelId="category-label"
                name="category"
                value={bookData.category}
                onChange={handleSelectChange}
                label="Category"
              >
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
              id="totalCopies"
              type="number"
              value={bookData.totalCopies}
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
          {selectedBook && (
            <Box sx={{ mt: 2 }}>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                <strong>book Name:</strong> {selectedBook.bookName || "N/A"}
              </Typography>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                <strong>Title:</strong> {selectedBook.title || "N/A"}
              </Typography>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                <strong>Image:</strong> {selectedBook.image || "N/A"}
              </Typography>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                <strong>Author:</strong> {selectedBook.author || "N/A"}
              </Typography>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                <strong>ISBN:</strong> {selectedBook.isbn || "N/A"}
              </Typography>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                <strong>Category:</strong> {selectedBook.category || "N/A"}
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
                <strong>Total Copies:</strong> {selectedBook.totalCopies || "N/A"}
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
