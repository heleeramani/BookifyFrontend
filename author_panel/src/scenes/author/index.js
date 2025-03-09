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
  Chip,
  Avatar,
} from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import InfoIcon from "@mui/icons-material/Info";
import Header from "../../components/Header";
import { useState } from "react";

const Author = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [openDialog, setOpenDialog] = useState(false);
  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
  const [openReviewsDialog, setOpenReviewsDialog] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [bookData, setBookData] = useState({
    title: "",
    description: "",
    category: "",
    publicationDate: "",
    isbn: "",
    coverImage: "",
  });

  // Mock data for book reviews
  const [bookReviews] = useState([
    {
      id: 1,
      userName: "John Doe",
      comment: "Great book, couldn't put it down!",
      date: "2025-02-15",
    },
    {
      id: 2,
      userName: "Jane Smith",
      comment: "Absolutely loved the character development and plot twists.",
      date: "2025-02-10",
    },
    {
      id: 3,
      userName: "Mike Johnson",
      comment: "Good book but I found some parts slow-paced.",
      date: "2025-02-05",
    },
  ]);

  // Mock data for author's books
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "The Silent Echo",
      description: "A thriller novel set in the mountains of Colorado",
      category: "Thriller",
      publicationDate: "2024-10-15",
      isbn: "978-1234567890",
      coverImage: "silent_echo.jpg",
      reviewCount: 24,
    },
    {
      id: 2,
      title: "Beyond the Horizon",
      description: "A science fiction adventure into deep space",
      category: "Science Fiction",
      publicationDate: "2023-05-22",
      isbn: "978-0987654321",
      coverImage: "beyond_horizon.jpg",
      reviewCount: 18,
    },
    {
      id: 3,
      title: "Whispers in the Dark",
      description: "A collection of short horror stories",
      category: "Horror",
      publicationDate: "2024-01-10",
      isbn: "978-5678901234",
      coverImage: "whispers_dark.jpg",
      reviewCount: 31,
    },
  ]);

  const handleOpenDialog = (isEditMode = false, data = null) => {
    setIsEdit(isEditMode);
    if (data) {
      setBookData(data);
    } else {
      setBookData({
        title: "",
        description: "",
        category: "",
        publicationDate: "",
        isbn: "",
        coverImage: "",
      });
    }
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleOpenDetails = (book) => {
    setSelectedBook(book);
    setOpenDetailsDialog(true);
  };

  const handleCloseDetails = () => {
    setOpenDetailsDialog(false);
    setSelectedBook(null);
  };

  const handleOpenReviews = (book) => {
    setSelectedBook(book);
    setOpenReviewsDialog(true);
  };

  const handleCloseReviews = () => {
    setOpenReviewsDialog(false);
  };

  const handleSubmit = () => {
    if (isEdit) {
      // Update existing book
      const updatedBooks = books.map((book) =>
        book.id === bookData.id ? bookData : book
      );
      setBooks(updatedBooks);
    } else {
      // Add new book
      const newBook = {
        ...bookData,
        id: books.length + 1,
        reviewCount: 0,
      };
      setBooks([...books, newBook]);
    }
    handleCloseDialog();
  };

  const handleDelete = (id) => {
    // Filter out the book with the matching id
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "title",
      headerName: "Book Title",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "category",
      headerName: "Category",
      width: 150,
    },
    {
      field: "publicationDate",
      headerName: "Publication Date",
      width: 150,
    },
    {
      field: "reviewCount",
      headerName: "Reviews",
      width: 100,
      renderCell: (params) => (
        <Chip
          label={params.value}
          size="small"
          color="primary"
          variant="outlined"
        />
      ),
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
        <Header title="AUTHOR PANEL" subtitle="Manage Your Books" />
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => handleOpenDialog(false)}
        >
          Add New Book
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
            color: colors.greenAccent[200] + " !important",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: colors.grey[100] + " !important",
          },
        }}
      >
        <DataGrid
          checkboxSelection
          rows={books}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>

      {/* Add/Edit Book Dialog */}
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
            <TextField
              label="Book Title"
              value={bookData.title}
              onChange={(e) =>
                setBookData({ ...bookData, title: e.target.value })
              }
              required
            />
            <TextField
              label="Category"
              value={bookData.category}
              onChange={(e) =>
                setBookData({ ...bookData, category: e.target.value })
              }
            />
            <TextField
              label="ISBN"
              value={bookData.isbn}
              onChange={(e) =>
                setBookData({ ...bookData, isbn: e.target.value })
              }
            />
            <TextField
              label="Publication Date"
              type="date"
              value={bookData.publicationDate}
              onChange={(e) =>
                setBookData({ ...bookData, publicationDate: e.target.value })
              }
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              label="Cover Image URL"
              value={bookData.coverImage}
              onChange={(e) =>
                setBookData({ ...bookData, coverImage: e.target.value })
              }
              fullWidth
            />
            <TextField
              label="Description"
              value={bookData.description}
              onChange={(e) =>
                setBookData({ ...bookData, description: e.target.value })
              }
              multiline
              rows={4}
              fullWidth
              sx={{ width: "96% !important" }}
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

      {/* Book Details Dialog */}
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
              <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
                {selectedBook.title}
              </Typography>

              <Box sx={{ display: "flex", mb: 2 }}>
                <Box
                  sx={{
                    width: 120,
                    height: 160,
                    bgcolor: "grey.300",
                    mr: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography variant="body2" color="text.secondary">
                    Cover Image
                  </Typography>
                </Box>

                <Box>
                  <Typography variant="subtitle1" sx={{ mb: 1 }}>
                    <strong>Category:</strong> {selectedBook.category}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ mb: 1 }}>
                    <strong>ISBN:</strong> {selectedBook.isbn}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ mb: 1 }}>
                    <strong>Published:</strong> {selectedBook.publicationDate}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ mb: 1 }}>
                    <strong>Reviews:</strong> {selectedBook.reviewCount}
                  </Typography>
                </Box>
              </Box>

              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                <strong>Description:</strong>
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                {selectedBook.description}
              </Typography>

              <Box sx={{ mt: 2 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Book Reviews
                </Typography>
                {bookReviews.length > 0 ? (
                  bookReviews.map((review) => (
                    <Box
                      key={review.id}
                      sx={{
                        mb: 3,
                        pb: 2,
                        borderBottom: 1,
                        borderColor: "divider",
                      }}
                    >
                      <Box display="flex" alignItems="center" sx={{ mb: 1 }}>
                        <Avatar
                          sx={{
                            bgcolor: colors.greenAccent[500],
                            width: 32,
                            height: 32,
                            mr: 1,
                          }}
                        >
                          {review.userName.charAt(0)}
                        </Avatar>
                        <Typography variant="subtitle1">
                          {review.userName}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ ml: 2 }}
                        >
                          {review.date}
                        </Typography>
                      </Box>
                      <Typography variant="body1">{review.comment}</Typography>
                    </Box>
                  ))
                ) : (
                  <Typography variant="body1">
                    No reviews yet for this book.
                  </Typography>
                )}
              </Box>
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
