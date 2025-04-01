// // import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
// // import { tokens } from "../../theme";
// // import MenuBookIcon from '@mui/icons-material/MenuBook';
// // import PersonIcon from '@mui/icons-material/Person';
// // import Header from "../../components/Header";
// // import StatBox from "../../components/StatBox";

// // const Dashboard = () => {
// //   const theme = useTheme();
// //   const colors = tokens(theme.palette.mode);

// //   return (
// //     <Box m="20px">
// //       {/* HEADER */}
// //       <Box display="flex" justifyContent="space-between" alignItems="center">
// //         <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
// //       </Box>

// //       {/* GRID & CHARTS */}
// //       <Box
// //         display="grid"
// //         gridTemplateColumns="repeat(12, 1fr)"
// //         gridAutoRows="140px"
// //         gap="20px"
// //       >
// //         {/* ROW 1 */}
// //         <Box
// //           gridColumn="span 3"
// //           backgroundColor={colors.primary[400]}
// //           display="flex"
// //           alignItems="center"
// //           justifyContent="center"
// //         >
// //           <StatBox
// //             title="10"
// //             subtitle="User"
// //             progress="0.75"
// //             increase="+14%"
// //             icon={<MenuBookIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }}/>}
// //           />
// //         </Box>
// //         <Box
// //           gridColumn="span 3"
// //           backgroundColor={colors.primary[400]}
// //           display="flex"
// //           alignItems="center"
// //           justifyContent="center"
// //         >
// //           <StatBox
// //             title="3"
// //             subtitle="Author"
// //             progress="0.50"
// //             increase="+21%"
// //             icon={<PersonIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }}/>}

// //           />
// //         </Box>
// //      </Box>
// //      </Box>   
 
// //   );
// // };

// // export default Dashboard;

// import { Box, Button, useTheme, useMediaQuery } from "@mui/material";
// import { tokens } from "../../theme";
// import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
// import EmailIcon from "@mui/icons-material/Email";
// import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
// import PersonAddIcon from "@mui/icons-material/PersonAdd";
// import TrafficIcon from "@mui/icons-material/Traffic";
// import Header from "../../components/Header";
// import StatBox from "../../components/StatBox";

// const Dashboard = () => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   const isMobile = useMediaQuery("(max-width:768px)");
  
//   return (
//     <Box p="20px">
//       {/* HEADER */}
//       <Box 
//         display="flex" 
//         flexDirection={isMobile ? "column" : "row"} 
//         justifyContent="space-between" 
//         alignItems={isMobile ? "flex-start" : "center"} 
//         gap={isMobile ? "10px" : "0"}
//       >
//         <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
//         <Button
//           sx={{
//             backgroundColor: colors.blueAccent[700],
//             color: colors.grey[100],
//             fontSize: "14px",
//             fontWeight: "bold",
//             padding: "10px 20px",
//           }}
//         >
//           <DownloadOutlinedIcon sx={{ mr: "10px" }} />
//           Download Reports
//         </Button>
//       </Box>
//       {/* GRID & CARDS */}
//       <Box
//         display="grid"
//         gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))"
//         gap="20px"
//         mt="20px"
//       >
//         {/* StatBox Components */}
//         <Box 
//           sx={{
//             backgroundColor: "#1F2A40",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             padding: "9px"
//           }}
//         >
//           <StatBox
//             title="12,361"
//             subtitle="Emails Sent"
//             progress="0.75"
//             increase="+14%"
//             icon={
//               <EmailIcon
//                 sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
//               />
//             }
//             sx={{ margin: "0 !important" }}
//           />
//         </Box>
//         <Box 
//           sx={{
//             backgroundColor: "#1F2A40",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             padding: "9px"
//           }}
//         >
//           <StatBox
//             title="431,225"
//             subtitle="Sales Obtained"
//             progress="0.50"
//             increase="+21%"
//             icon={
//               <PointOfSaleIcon
//                 sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
//               />
//             }
//             sx={{ margin: "0 !important" }}
//           />
//         </Box>
//         <Box 
//           sx={{
//             backgroundColor: "#1F2A40",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             padding: "9px"
//           }}
//         >
//           <StatBox
//             title="32,441"
//             subtitle="New Clients"
//             progress="0.30"
//             increase="+5%"
//             icon={
//               <PersonAddIcon
//                 sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
//               />
//             }
//             sx={{ margin: "0 !important" }}
//           />
//         </Box>
//         <Box 
//           sx={{
//             backgroundColor: "#1F2A40",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             padding: "9px"
//           }}
//         >
//           <StatBox
//             title="1,325,134"
//             subtitle="Traffic Received"
//             progress="0.80"
//             increase="+43%"
//             icon={
//               <TrafficIcon
//                 sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
//               />
//             }
//             sx={{ margin: "0 !important" }}
//           />
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Dashboard;


// import React, { useState, useEffect } from "react";
// import { Box, Button, useTheme, useMediaQuery, CircularProgress } from "@mui/material";
// import { tokens } from "../../theme";
// import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
// import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
// import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
// import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// import Header from "../../components/Header";
// import StatBox from "../../components/StatBox";
// import axios from "axios";

// const Dashboard = () => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   const isMobile = useMediaQuery("(max-width:768px)");
  
//   const [dashboardData, setDashboardData] = useState({
//     users: { count: 0, increase: "12%" },
//     authors: { count: 0, increase: "1%" },
//     books: { count: 0, increase: "6%" },
//     sales: { count: 0, increase: "20%" },
//   });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchDashboardData = async () => {
//       try {
//         const authToken = localStorage.getItem("authToken");

//         setLoading(true);
        
//         // Fetch data from all endpoints in parallel
//         const [usersResponse, authorsResponse, booksResponse, salesResponse] = await Promise.all([
//           axios.get(`${process.env.REACT_APP_BASE_URL}/admin/dashboard/user`,
//             {
//               headers: {
//                 "Authorization": authToken, 
//               },
//             }),
//           axios.get(`${process.env.REACT_APP_BASE_URL}/admin/dashboard/author`,
//             {
//               headers: {
//                 "Authorization": authToken, 
//               },
//             }),
//           axios.get(`${process.env.REACT_APP_BASE_URL}/admin/dashboard/book`,
//             {
//               headers: {
//                 "Authorization": authToken, 
//               },
//             }),
//           axios.get(`${process.env.REACT_APP_BASE_URL}/admin/dashboard/sell`,
//             {
//               headers: {
//                 "Authorization": authToken, 
//               },
//             })
//         ]);

//         // Parse response data based on the actual API response structure
//         setDashboardData({
//           users: {
//             count: usersResponse.data.totalUSer || 0,
//             increase: "12%" // Static value since API doesn't provide increase percentage
//           },
//           authors: {
//             count: authorsResponse.data.totalAuthor || 0,
//             increase: "1%" // Static value since API doesn't provide increase percentage
//           },
//           books: {
//             count: booksResponse.data.totalBook || 0,
//             increase: "6%" // Static value since API doesn't provide increase percentage
//           },
//           sales: {
//             count: salesResponse.data.totalPurchase || 0,
//             increase: "20%" // Static value since API doesn't provide increase percentage
//           }
//         });
        
//         setError(null);
//       } catch (err) {
//         console.error("Error fetching dashboard data:", err);
//         setError("Failed to load dashboard data. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDashboardData();
//   }, []);

//   const handleDownloadReports = () => {
//     // Implement download report functionality here
//     console.log("Download reports clicked");
//   };

//   // Calculate progress values based on realistic expectations for each metric
//   const calculateUserProgress = () => {
//     // For users, assuming a target of 50 users
//     const target = 50;
//     return (dashboardData.users.count / target).toFixed(2);
//   };

//   const calculateAuthorProgress = () => {
//     // For authors, considering you have 1 author out of a potential 5
//     const target = 5;
//     return (dashboardData.authors.count / target).toFixed(2);
//   };

//   const calculateBookProgress = () => {
//     // For books, assuming a target of 20 books in the catalog
//     const target = 20;
//     return (dashboardData.books.count / target).toFixed(2);
//   };

//   const calculateSalesProgress = () => {
//     // For sales, assuming a monthly target of 50 sales
//     const target = 50;
//     return (dashboardData.sales.count / target).toFixed(2);
//   };
  
//   return (
//     <Box p="20px">
//       {/* HEADER */}
//       <Box 
//         display="flex" 
//         flexDirection={isMobile ? "column" : "row"} 
//         justifyContent="space-between" 
//         alignItems={isMobile ? "flex-start" : "center"} 
//         gap={isMobile ? "10px" : "0"}
//       >
//         <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
//         {/* <Button
//           sx={{
//             backgroundColor: colors.blueAccent[700],
//             color: colors.grey[100],
//             fontSize: "14px",
//             fontWeight: "bold",
//             padding: "10px 20px",
//           }}
//           onClick={handleDownloadReports}
//         >
//           <DownloadOutlinedIcon sx={{ mr: "10px" }} />
//           Download Reports
//         </Button> */}
//       </Box>

//       {/* GRID & CARDS */}
//       {loading ? (
//         <Box display="flex" justifyContent="center" alignItems="center" height="200px">
//           <CircularProgress 
//             size={70} 
//             thickness={4}
//             sx={{
//               color: 'primary.main',
//               '& .MuiCircularProgress-circle': {
//                 strokeLinecap: 'round',
//               },
//               background: 'transparent',
//               // Create gradient effect similar to the image
//               '& .MuiCircularProgress-svg': {
//                 color: 'transparent',
//                 stroke: `url(#gradientProgress)`,
//               },
//             }}
//           />
//           <svg width="0" height="0">
//             <defs>
//               <linearGradient id="gradientProgress" x1="0%" y1="0%" x2="100%" y2="100%">
//                 <stop offset="0%" stopColor="#4EB5FF" />
//                 <stop offset="50%" stopColor="#9381FF" />
//                 <stop offset="100%" stopColor="#50E3C2" />
//               </linearGradient>
//             </defs>
//           </svg>
//         </Box>
//       ) : error ? (
//         <Box 
//           sx={{ 
//             color: colors.redAccent[500], 
//             textAlign: "center", 
//             mt: "20px", 
//             p: "20px", 
//             backgroundColor: colors.primary[400] 
//           }}
//         >
//           {error}
//         </Box>
//       ) : (
//         <Box
//           display="grid"
//           gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))"
//           gap="20px"
//           mt="20px"
//         >
//           {/* Users StatBox */}
//           <Box 
//             sx={{
//               backgroundColor: "#1F2A40",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               padding: "9px"
//             }}
//           >
//             <StatBox
//               title={dashboardData.users.count.toString()}
//               subtitle="Registered Users"
//               progress={calculateUserProgress()}
//               increase={dashboardData.users.increase}
//               icon={
//                 <PeopleAltOutlinedIcon
//                   sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
//                 />
//               }
//               sx={{ margin: "0 !important" }}
//             />
//           </Box>
          
//           {/* Authors StatBox */}
//           <Box 
//             sx={{
//               backgroundColor: "#1F2A40",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               padding: "9px"
//             }}
//           >
//             <StatBox
//               title={dashboardData.authors.count.toString()}
//               subtitle="Authors"
//               progress={calculateAuthorProgress()}
//               increase={dashboardData.authors.increase}
//               icon={
//                 <PersonOutlinedIcon
//                   sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
//                 />
//               }
//               sx={{ margin: "0 !important" }}
//             />
//           </Box>
          
//           {/* Books StatBox */}
//           <Box 
//             sx={{
//               backgroundColor: "#1F2A40",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               padding: "9px"
//             }}
//           >
//             <StatBox
//               title={dashboardData.books.count.toString()}
//               subtitle="Books Available"
//               progress={calculateBookProgress()}
//               increase={dashboardData.books.increase}
//               icon={
//                 <AutoStoriesOutlinedIcon
//                   sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
//                 />
//               }
//               sx={{ margin: "0 !important" }}
//             />
//           </Box>
          
//           {/* Sales StatBox */}
//           <Box 
//             sx={{
//               backgroundColor: "#1F2A40",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               padding: "9px"
//             }}
//           >
//             <StatBox
//               title={dashboardData.sales.count.toString()}
//               subtitle="Total Sales"
//               progress={calculateSalesProgress()}
//               increase={dashboardData.sales.increase}
//               icon={
//                 <ShoppingCartOutlinedIcon
//                   sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
//                 />
//               }
//               sx={{ margin: "0 !important" }}
//             />
//           </Box>
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default Dashboard;

import React, { useState, useEffect } from "react";
import { Box, useTheme, useMediaQuery, CircularProgress } from "@mui/material";
import { tokens } from "../../theme";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import Header from "../../components/Header";
import StatBox from "../../components/StatBox";
import axios from "axios";

const BookDashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isMobile = useMediaQuery("(max-width:768px)");
  
  const [bookData, setBookData] = useState({
    count: 0,
    increase: "6%"
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookData = async () => {
      try {
        const authToken = localStorage.getItem("authToken");

        setLoading(true);
        
        // Fetch book data from endpoint
        const bookResponse = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/author/dashboard/book`,
          {
            headers: {
              "Authorization": authToken, 
            },
          }
        );

        // Parse response data
        setBookData({
          count: bookResponse.data.totalBook || 0,
          increase: "6%" // Static value since API doesn't provide increase percentage
        });
        
        setError(null);
      } catch (err) {
        console.error("Error fetching book data:", err);
        setError("Failed to load book data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBookData();
  }, []);

  // Calculate progress value for books
  const calculateBookProgress = () => {
    // For books, assuming a target of 20 books in the catalog
    const target = 20;
    return (bookData.count / target).toFixed(2);
  };
  
  return (
    <Box p="20px">
      {/* HEADER */}
      <Box 
        display="flex" 
        flexDirection={isMobile ? "column" : "row"} 
        justifyContent="space-between" 
        alignItems={isMobile ? "flex-start" : "center"} 
        gap={isMobile ? "10px" : "0"}
      >
        <Header title="BOOKS DASHBOARD" subtitle="Welcome to your books dashboard" />
      </Box>

      {/* BOOK STAT BOX */}
      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" height="200px">
          <CircularProgress 
            size={70} 
            thickness={4}
            sx={{
              color: 'primary.main',
              '& .MuiCircularProgress-circle': {
                strokeLinecap: 'round',
              },
              background: 'transparent',
              '& .MuiCircularProgress-svg': {
                color: 'transparent',
                stroke: `url(#gradientProgress)`,
              },
            }}
          />
          <svg width="0" height="0">
            <defs>
              <linearGradient id="gradientProgress" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4EB5FF" />
                <stop offset="50%" stopColor="#9381FF" />
                <stop offset="100%" stopColor="#50E3C2" />
              </linearGradient>
            </defs>
          </svg>
        </Box>
      ) : error ? (
        <Box 
          sx={{ 
            color: colors.redAccent[500], 
            textAlign: "center", 
            mt: "20px", 
            p: "20px", 
            backgroundColor: colors.primary[400] 
          }}
        >
          {error}
        </Box>
      ) : (
        <Box
          display="grid"
          gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))"
          gap="20px"
          mt="20px"
        >
          {/* Books StatBox */}
          <Box 
            sx={{
              backgroundColor: "#1F2A40",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "9px"
            }}
          >
            <StatBox
              title={bookData.count.toString()}
              subtitle="Books Available"
              progress={calculateBookProgress()}
              increase={bookData.increase}
              icon={
                <AutoStoriesOutlinedIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
              sx={{ margin: "0 !important" }}
            />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default BookDashboard;