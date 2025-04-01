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
  const [selectedBlog, setSelectedBlog] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [blog, setBlog] = useState([]);
  const [blogData, setBlogData] = useState({
    title: "",
    image: "",
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
        image: "",
        description: "",
        blogDetail: "Hello! i am Blog",
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
    setSelectedBlog(book);
    setOpenDetailsDialog(true);
  };

  const handleCloseDetails = () => {
    setOpenDetailsDialog(false);
    setSelectedBlog(null);
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
          message: "required",
          severity: "error",
        });
        return;
      }
      //--------------------
      let imageId = null;
      if (!(blogData.image instanceof File)) {
        console.error("Invalid file format", blogData.image);

        return;
      }

      // If there's a new image to upload
      if (blogData.image) {
        const formData = new FormData();
        formData.append("file", blogData.image);
        console.log(blogData.image, "book dataaaa");
        // console.log(formData,"form data");

        for (let pair of formData.entries()) {
          console.log(`FormData Key: ${pair[0]}, Value: ${pair[1]}`);
        }

        // Upload image first
        const imageResponse = await axios.post(
          `${process.env.REACT_APP_BASE_URL}/admin/blog/upload`,
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
      const blogPayload = {
        // title: bookData.title,
        // author: bookData.author,
        // isbn: bookData.isbn,
        // category: bookData.category,
        // price: bookData.price,
        // publishYear: bookData.publishYear,
        // publisher: bookData.publisher,
        // description: bookData.description,
        // totalCopy: bookData.totalCopy

        title: blogData.title,
        description: blogData.description,
        blogDetail: blogData.blogDetail,
      };
      //-------------------image
      // Add image ID to payload if we have one
      if (imageId) {
        blogPayload.image = imageId;
      }
      //-------------------image
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
          message: "Book deleted successfully",
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
      field: "description",
      headerName: "Description",
      flex: 1,
    },
    {
      field: "blogDetail",
      headerName: "blogDetail",
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
      const blogsArray = Array.isArray(response.data)
        ? response.data
        : response.data?.data || [];
      console.log(blogsArray, "shhrreeee");

      const formattedBlogs = blogsArray.map((book) => ({
        ...book,
        id: book._id,
        image: book.image ? book.image.url : "", // Check if image exists // Ensure DataGrid has an id
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
              label="Title"
              id="title"
              value={blogData.title}
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
            <TextField
              label="Description"
              id="description"
              value={blogData.description}
              onChange={handleInputChange}
            />
            <TextField
              label="blogDetail"
              id="blogDetail"
              value={blogData.blogDetail}
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
        <DialogContent>
          {selectedBlog && (
            <Box sx={{ mt: 2 }}>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                <strong>book Name:</strong> {selectedBlog.title || "N/A"}
              </Typography>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                <strong>Title:</strong> {selectedBlog.description || "N/A"}
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

export default Blog;
