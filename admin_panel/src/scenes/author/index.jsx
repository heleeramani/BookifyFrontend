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
import { useState } from "react";

const Author = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [openDialog, setOpenDialog] = useState(false);
  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
  const [selectedAuthor, setSelectedAuthor] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [authorData, setAuthorData] = useState({
    authorName: "",
    image: "",
    bio: "",
  });

  const handleOpenDialog = (isEditMode = false, data = null) => {
    setIsEdit(isEditMode);
    if (data) {
      setAuthorData(data);
    } else {
      setAuthorData({
        authorName: "",
        image: "",
        bio: "",
      });
    }
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleOpenDetails = (book) => {
    setSelectedAuthor(book);
    setOpenDetailsDialog(true);
  };

  const handleCloseDetails = () => {
    setOpenDetailsDialog(false);
    setSelectedAuthor(null);
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log(authorData);
    handleCloseDialog();
  };

  const handleDelete = (id) => {
    // Handle delete functionality here
    console.log("Delete book with id:", id);
  };

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "authorName",
      headerName: "Book Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "image",
      headerName: "Image",
      flex: 1,
    },
    {
      field: "bio",
      headerName: "Bio",
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
        <DataGrid checkboxSelection rows={mockDataTeam} columns={columns} components={{ Toolbar: GridToolbar }}/>
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
            <TextField
              label="autorName"
              value={authorData.title}
              onChange={(e) =>
                setAuthorData({ ...authorData, title: e.target.value })
              }
            />
            <TextField
              label="Image URL"
              value={authorData.image}
              onChange={(e) =>
                setAuthorData({ ...authorData, image: e.target.value })
              }
            />
            <TextField
              label="Bio"
              multiline
              rows={4}
              fullWidth
              sx={{ width: "96.5% !important" }}
              value={authorData.description}
              onChange={(e) =>
                setAuthorData({ ...authorData, description: e.target.value })
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
        <DialogTitle>Book Details</DialogTitle>
        <DialogContent>
          {selectedAuthor && (
            <Box sx={{ mt: 2 }}>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                <strong>Author Name:</strong>{" "}
                {selectedAuthor.authorName || "N/A"}
              </Typography>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                <strong>Bio:</strong> {selectedAuthor.bio || "N/A"}
              </Typography>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                <strong>Image:</strong> {selectedAuthor.image || "N/A"}
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
