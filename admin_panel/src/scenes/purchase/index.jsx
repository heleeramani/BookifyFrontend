// import {
//   Box,
//   Typography,
//   useTheme,
//   IconButton,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Button,
// } from "@mui/material";
// import { DataGrid, GridToolbar } from "@mui/x-data-grid";
// import { tokens } from "../../theme";
// import InfoIcon from "@mui/icons-material/Info";
// import Header from "../../components/Header";
// import { useEffect, useState } from "react";
// import axios from "axios";

// const Payment = () => {
//   const [loading, setLoading] = useState(false);
//   const [alert, setAlert] = useState({ show: false, message: "", type: "" });
//   const [author, setAuthor] = useState([]);
//   const [error, setError] = useState(null);
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
//   const [selectedAuthor, setSelectedAuthor] = useState(null);

//   // Handle opening details dialog
//   const handleOpenDetails = (book) => {
//     setSelectedAuthor(book);
//     setOpenDetailsDialog(true);
//   };

//   // Handle closing details dialog
//   const handleCloseDetails = () => {
//     setOpenDetailsDialog(false);
//     setSelectedAuthor(null);
//   };

//   // DataGrid columns configuration - only view functionality
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
//           </Box>
//         );
//       },
//     },
//   ];

//   // Fetch author data from the API
//   const fetchAuthor = async () => {
//     try {
//       setLoading(true);
//       const token = localStorage.getItem("authToken");
//       const response = await axios.get(
//         `${process.env.REACT_APP_BASE_URL}/admin/purchase/get`,
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

//       const formattedAuthors = authorArray.map((book) => ({
//         ...book,
//         id: book._id, // Keep the _id as well for consistent identification
//         profile: book.profile ? book.profile.url : "", // Check if image exists
//       }));

//       setAuthor(formattedAuthors);
//     } catch (error) {
//       console.log(error);
//       setError("Failed to fetch authors data");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchAuthor();
//   }, []);

//   return (
//     <Box m="20px">
//       <Box display="flex" justifyContent="space-between" alignItems="center">
//         <Header title="USERS" subtitle="View Users Information" />
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
//           loading={loading}
//         />
//       </Box>

//       {/* Details Dialog - View Only */}
//       <Dialog
//         open={openDetailsDialog}
//         onClose={handleCloseDetails}
//         maxWidth="sm"
//         fullWidth
//       >
//         <DialogTitle>User Details</DialogTitle>
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
//               {selectedAuthor.bio && (
//                 <Typography variant="subtitle1" sx={{ mb: 1 }}>
//                   <strong>Bio:</strong> {selectedAuthor.bio}
//                 </Typography>
//               )}
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

// export default Payment;

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
  import { format } from "date-fns";
  
  const Payment = () => {
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState({ show: false, message: "", type: "" });
    const [payments, setPayments] = useState([]);
    const [error, setError] = useState(null);
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
    const [selectedPayment, setSelectedPayment] = useState(null);
  
    // Handle opening details dialog
    const handleOpenDetails = (payment) => {
      setSelectedPayment(payment);
      setOpenDetailsDialog(true);
    };
  
    // Handle closing details dialog
    const handleCloseDetails = () => {
      setOpenDetailsDialog(false);
      setSelectedPayment(null);
    };
  
    // DataGrid columns configuration - only view functionality
    const columns = [
      { field: "id", headerName: "Order ID", width: 220 },
      {
        field: "customerName",
        headerName: "Customer Name",
        flex: 1,
        headerAlign: "left",
        align: "left",
      },
      {
        field: "bookTitle",
        headerName: "Item Purchased",
        flex: 1.5,
      },
      {
        field: "authorName",
        headerName: "Author",
        flex: 1,
      },
      {
        field: "purchaseDate",
        headerName: "Purchase Date",
        flex: 1,
      },
      {
        field: "quantity",
        headerName: "Quantity",
        flex: 0.5,
        align: "center",
      },
      {
        field: "actions",
        headerName: "Actions",
        flex: 0.5,
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
  
    // Fetch payment data from the API
    const fetchPayments = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("authToken");
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/admin/purchase/get`,
          {
            headers: {
              Authorization: token,
              "Content-Type": "application/json",
            },
          }
        );
        console.log("response", response?.data?.data);
  
        // Check if response.data is an array or wrapped inside another object
        const paymentsArray = Array.isArray(response.data)
          ? response.data
          : response.data?.data || [];
  
        const formattedPayments = paymentsArray.map((payment) => {
          // Format the date
          const purchaseDate = payment.purchaseDate 
            ? format(new Date(payment.purchaseDate), "MMM dd, yyyy")
            : "N/A";
          
          // Extract customer name
          const customerName = payment.user 
            ? `${payment.user.firstName} ${payment.user.lastName}`
            : "N/A";
  
          // Extract book title
          const bookTitle = payment.book?.title || "N/A";
  
          // Extract author name
          const authorName = payment.book?.author 
            ? `${payment.book.author.firstName} ${payment.book.author.lastName}`
            : "N/A";
  
          return {
            id: payment._id,
            _id: payment._id,
            customerName,
            customerEmail: payment.user?.email || "N/A",
            bookTitle,
            authorName,
            purchaseDate,
            quantity: payment.quantity || 0,
            // Store full original data for detailed view
            originalData: payment
          };
        });
  
        setPayments(formattedPayments);
      } catch (error) {
        console.log(error);
        setError("Failed to fetch payment data");
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      fetchPayments();
    }, []);
  
    return (
      <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Header title="PAYMENTS" subtitle="Manage Payment Information" />
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
            rows={payments}
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
          <DialogTitle>Payment Details</DialogTitle>
          <DialogContent>
            {selectedPayment && (
              <Box sx={{ mt: 2 }}>
                <Typography variant="subtitle1" sx={{ mb: 1 }}>
                  <strong>Order ID:</strong> {selectedPayment.id}
                </Typography>
                <Typography variant="subtitle1" sx={{ mb: 1 }}>
                  <strong>Customer:</strong> {selectedPayment.customerName}
                </Typography>
                <Typography variant="subtitle1" sx={{ mb: 1 }}>
                  <strong>Email:</strong> {selectedPayment.customerEmail}
                </Typography>
                <Typography variant="subtitle1" sx={{ mb: 1 }}>
                  <strong>Item Purchased:</strong> {selectedPayment.bookTitle}
                </Typography>
                <Typography variant="subtitle1" sx={{ mb: 1 }}>
                  <strong>Author:</strong> {selectedPayment.authorName}
                </Typography>
                <Typography variant="subtitle1" sx={{ mb: 1 }}>
                  <strong>Purchase Date:</strong> {selectedPayment.purchaseDate}
                </Typography>
                <Typography variant="subtitle1" sx={{ mb: 1 }}>
                  <strong>Quantity:</strong> {selectedPayment.quantity}
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
  
  export default Payment;