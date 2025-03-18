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
// import { useState } from "react";

// const Blog = () => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   const [openDialog, setOpenDialog] = useState(false);
//   const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
//   const [selectedBlog, setSelectedBlog] = useState(null);
//   const [isEdit, setIsEdit] = useState(false);
//   const [blogData, setBlogData] = useState({
//     title: "",
//     description: "",
//     createdBy: "",
//     blogDetails: "",
//   });

//   const handleOpenDialog = (isEditMode = false, data = null) => {
//     setIsEdit(isEditMode);
//     if (data) {
//       setBlogData(data);
//     } else {
//       setBlogData({
//         title: "",
//         description: "",
//         createdBy: "",
//         blogDetails: "",
//       });
//     }
//     setOpenDialog(true);
//   };

//   const handleCloseDialog = () => {
//     setOpenDialog(false);
//   };

//   const handleOpenDetails = (book) => {
//     setSelectedBlog(book);
//     setOpenDetailsDialog(true);
//   };

//   const handleCloseDetails = () => {
//     setOpenDetailsDialog(false);
//     setSelectedBlog(null);
//   };

//   const handleSubmit = () => {
//     // Handle form submission here
//     console.log(blogData);
//     handleCloseDialog();
//   };

//   const handleDelete = (id) => {
//     // Handle delete functionality here
//     console.log("Delete book with id:", id);
//   };

//   const columns = [
//     { field: "id", headerName: "ID" },
//     {
//       field: "title",
//       headerName: "Title",
//       type: "text",
//       headerAlign: "left",
//       align: "left",
//     },
//     {
//       field: "description",
//       headerName: "Description",
//       type: "text",
//       flex: 1,
//     },
//     {
//       field: "createdBy",
//       headerName: "Created By",
//       type: "text",
//       flex: 1,
//     },
//     {
//       field: "blogDetails",
//       headerName: "Blog Details",
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

//   return (
//     <Box m="20px">
//       <Box display="flex" justifyContent="space-between" alignItems="center">
//         <Header title="Blog" subtitle="Managing the Blog" />
//         <Button
//           variant="contained"
//           startIcon={<AddIcon />}
//           onClick={() => handleOpenDialog(false)}
//         >
//           Add Blog
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
//           "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
//             color: `${colors.grey[100]} !important`,
//           },
//         }}
//       >
//         <DataGrid checkboxSelection rows={mockDataTeam} columns={columns} components={{ Toolbar: GridToolbar }}/>
//       </Box>

//       {/* Add/Edit Dialog */}
//       <Dialog
//         open={openDialog}
//         onClose={handleCloseDialog}
//         maxWidth="md"
//         fullWidth
//       >
//         <DialogTitle>{isEdit ? "Edit Blog" : "Add New Blog"}</DialogTitle>
//         <DialogContent>
//           <Box
//             component="form"
//             sx={{
//               "& .MuiTextField-root": { m: 1, width: "47%" },
//               mt: 2,
//             }}
//           >
//             <TextField
//               label="Book Name"
//               value={blogData.title}
//               onChange={(e) =>
//                 setBlogData({ ...blogData, title: e.target.value })
//               }
//             />
//             <TextField
//               label="Title"
//               value={blogData.description}
//               onChange={(e) =>
//                 setBlogData({ ...blogData, description: e.target.value })
//               }
//             />
//             <TextField
//               label="Created By"
//               value={blogData.createdBy}
//               onChange={(e) =>
//                 setBlogData({ ...blogData, createdBy: e.target.value })
//               }
//             />
//             <TextField
//               label="blogDetails"
//               value={blogData.blogDetails}
//               onChange={(e) =>
//                 setBlogData({ ...blogData, blogDetails: e.target.value })
//               }
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
//         <DialogTitle>Blog Details</DialogTitle>
//         <DialogContent>
//           {selectedBlog && (
//             <Box sx={{ mt: 2 }}>
//               <Typography variant="subtitle1" sx={{ mb: 1 }}>
//                 <strong>Title:</strong> {selectedBlog.title || "N/A"}
//               </Typography>
//               <Typography variant="subtitle1" sx={{ mb: 1 }}>
//                 <strong>Description:</strong> {selectedBlog.description || "N/A"}
//               </Typography>
//               <Typography variant="subtitle1" sx={{ mb: 1 }}>
//                 <strong>Created By:</strong> {selectedBlog.createdBy || "N/A"}
//               </Typography>
//               <Typography variant="subtitle1" sx={{ mb: 1 }}>
//                 <strong>Blog Details:</strong> {selectedBlog.blogDetails || "N/A"}
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

// export default Blog;

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
const Blog = () => {
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ show: false, message: "", type: "" });
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [openDialog, setOpenDialog] = useState(false);
  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
  const [selectedBook, setSelectedBook] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [blog, setBlog] = useState([]);
  const [blogData, setBlogData] = useState({
    title: "",
    description: "",
    blogDetail: "Hello! i am Blog",
  });
  //upload image  1
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBlogData({
        ...blogData,
        image: file,
      });
    }
  };
  // 1
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setBlogData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };
  const handleOpenDialog = (isEditMode = false, data = null) => {
    console.log("-----enter in handle open dialog");

    setIsEdit(isEditMode);
    if (isEditMode && data) {
      console.log("📌 Editing Book Data:", data); // Debugging
      setBlogData({ ...data, image: null });
    } else {
      setBlogData({
        title: "",
        description: "",
        blogDetail: "",
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
    console.log(blogData);
    try {
      setLoading(true);

      // Validate required fields
      if (!blogData.title) {
        setAlert({
          open: true,
          message: "Title required",
          severity: "error",
        });
        return;
      }

      const blogPayload = {
        title: blogData.title,
        description: blogData.description,
        blogDetail: blogData.blogDetail,
      };

      let response1;
      if (isEdit) {
        // Update existing book
        response1 = await axios.patch(
          `${process.env.REACT_APP_BASE_URL}/admin/blog/update/${blogData.id}`,
          blogPayload
        );
        setAlert({
          open: true,
          message: "Blog updated successfully",
          severity: "success",
        });
      } else {
        // Create new book
        response1 = await axios.post(
          `${process.env.REACT_APP_BASE_URL}/admin/blog/create`,
          blogPayload
        );
        setAlert({
          open: true,
          message: "Blog added successfully",
          severity: "success",
        });
      }

      // Refresh the book list
      fetchBlog();

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
          `${process.env.REACT_APP_BASE_URL}/admin/blog/delete/${id}`
        );

        // Update the books list
        setBlogs(blogs.filter((book) => book.id !== id));

        setAlert({
          open: true,
          message: "Blog deleted successfully",
          severity: "success",
        });
        fetchBlog();
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
  const columns = [
    { field: "id", headerName: "ID" },
    // {
    //   field: "bookName",
    //   headerName: "Book Name",
    //   flex: 1,
    //   cellClassName: "name-column--cell",
    // },
    {
      field: "title",
      headerName: "Title",
      type: "text",
      headerAlign: "left",
      align: "left",
    },
    // {
    //   field: "image",
    //   headerName: "Image",
    //   flex: 1,
    //   renderCell: (params) => (
    //     <img
    //       src={params.value}
    //       alt="Book Cover"
    //       style={{ width: 50, height: 50, objectFit: "cover", borderRadius: 5 }}
    //     />
    //   ),
    // },
    {
      field: "description",
      headerName: "Description",
      flex: 1,
    },
    {
      field: "blogDetail",
      headerName: "Blog Detail",
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

  const fetchBlog = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/admin/blog/getAll`
      );
      console.log("response", response?.data?.data);

      // Check if response.data is an array or wrapped inside another object
      const blogArray = Array.isArray(response.data)
        ? response.data
        : response.data?.data || [];
      console.log(blogArray, "shhrreeee");

      const formattedBlogs = blogArray.map((book) => ({
        ...book,
        id: book._id,
        // image: book.image ? book.image.url : "" // Check if image exists // Ensure DataGrid has an id
      }));
      console.log(formattedBlogs, "hellllll");

      setBlog(formattedBlogs);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlog();
    // console.log(book, "skjcskhc");
  }, []);

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="BLOG" subtitle="Managing the Blogs" />
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => handleOpenDialog(false)}
        >
          Add Blog
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
          rows={blog}
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
        <DialogTitle>{isEdit ? "Edit Blog" : "Add New Blog"}</DialogTitle>
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
              label="Title"
              id="title"
              value={blogData.title}
              onChange={handleInputChange}
            />
            {/* <TextField
              label="Image URL"
              id="image"
              type="file"
              title="Upload Image"
              // InputLabelProps={{ shrink: true }}
              // value={bookData.image}
              onChange={handleFileChange}
            /> */}
            <TextField
              label="blogDetail"
              id="blogDetail"
              value={blogData.blogDetail}
              onChange={handleInputChange}
            />
            <TextField
              label="description"
              id="description"
              value={blogData.description}
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
        <DialogTitle>Blog Details</DialogTitle>
        {/* <DialogContent>
          {selectedBook && (
            <Box sx={{ mt: 2 }}>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                <strong>book Name:</strong> { .bookName || "N/A"}
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
        </DialogContent> */}
        <DialogActions>
          <Button onClick={handleCloseDetails}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Blog;
