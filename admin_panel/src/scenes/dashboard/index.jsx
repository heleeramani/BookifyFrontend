// // // // import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
// // // // import { tokens } from "../../theme";
// // // // import { mockTransactions } from "../../data/mockData";
// // // // import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
// // // // import EmailIcon from "@mui/icons-material/Email";
// // // // import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
// // // // import PersonAddIcon from "@mui/icons-material/PersonAdd";
// // // // import TrafficIcon from "@mui/icons-material/Traffic";
// // // // import Header from "../../components/Header";
// // // // import LineChart from "../../components/LineChart";
// // // // import GeographyChart from "../../components/GeographyChart";
// // // // import BarChart from "../../components/BarChart";
// // // // import StatBox from "../../components/StatBox";
// // // // import ProgressCircle from "../../components/ProgressCircle";

// // // // const Dashboard = () => {
// // // //   const theme = useTheme();
// // // //   const colors = tokens(theme.palette.mode);

// // // //   return (
// // // //     <Box m="20px">
// // // //       {/* HEADER */}
// // // //       <Box display="flex" justifyContent="space-between" alignItems="center">
// // // //         <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

// // // //         <Box>
// // // //           <Button
// // // //             sx={{
// // // //               backgroundColor: colors.blueAccent[700],
// // // //               color: colors.grey[100],
// // // //               fontSize: "14px",
// // // //               fontWeight: "bold",
// // // //               padding: "10px 20px",
// // // //             }}
// // // //           >
// // // //             <DownloadOutlinedIcon sx={{ mr: "10px" }} />
// // // //             Download Reports
// // // //           </Button>
// // // //         </Box>
// // // //       </Box>

// // // //       {/* GRID & CHARTS */}
// // // //       <Box
// // // //         display="grid"
// // // //         gridTemplateColumns="repeat(12, 1fr)"
// // // //         gridAutoRows="140px"
// // // //         gap="20px"
// // // //       >
// // // //         {/* ROW 1 */}
// // // //         <Box
// // // //           gridColumn="span 3"
// // // //           backgroundColor={colors.primary[400]}
// // // //           display="flex"
// // // //           alignItems="center"
// // // //           justifyContent="center"
// // // //         >
// // // //           <StatBox
// // // //             title="12,361"
// // // //             subtitle="Emails Sent"
// // // //             progress="0.75"
// // // //             increase="+14%"
// // // //             icon={
// // // //               <EmailIcon
// // // //                 sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
// // // //               />
// // // //             }
// // // //           />
// // // //         </Box>
// // // //         <Box
// // // //           gridColumn="span 3"
// // // //           backgroundColor={colors.primary[400]}
// // // //           display="flex"
// // // //           alignItems="center"
// // // //           justifyContent="center"
// // // //         >
// // // //           <StatBox
// // // //             title="431,225"
// // // //             subtitle="Sales Obtained"
// // // //             progress="0.50"
// // // //             increase="+21%"
// // // //             icon={
// // // //               <PointOfSaleIcon
// // // //                 sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
// // // //               />
// // // //             }
// // // //           />
// // // //         </Box>
// // // //         <Box
// // // //           gridColumn="span 3"
// // // //           backgroundColor={colors.primary[400]}
// // // //           display="flex"
// // // //           alignItems="center"
// // // //           justifyContent="center"
// // // //         >
// // // //           <StatBox
// // // //             title="32,441"
// // // //             subtitle="New Clients"
// // // //             progress="0.30"
// // // //             increase="+5%"
// // // //             icon={
// // // //               <PersonAddIcon
// // // //                 sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
// // // //               />
// // // //             }
// // // //           />
// // // //         </Box>
// // // //         <Box
// // // //           gridColumn="span 3"
// // // //           backgroundColor={colors.primary[400]}
// // // //           display="flex"
// // // //           alignItems="center"
// // // //           justifyContent="center"
// // // //         >
// // // //           <StatBox
// // // //             title="1,325,134"
// // // //             subtitle="Traffic Received"
// // // //             progress="0.80"
// // // //             increase="+43%"
// // // //             icon={
// // // //               <TrafficIcon
// // // //                 sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
// // // //               />
// // // //             }
// // // //           />
// // // //         </Box>

// // // //         {/* ROW 2 */}
// // // //         {/* <Box
// // // //           gridColumn="span 8"
// // // //           gridRow="span 2"
// // // //           backgroundColor={colors.primary[400]}
// // // //         >
// // // //           <Box
// // // //             mt="25px"
// // // //             p="0 30px"
// // // //             display="flex "
// // // //             justifyContent="space-between"
// // // //             alignItems="center"
// // // //           >
// // // //             <Box>
// // // //               <Typography
// // // //                 variant="h5"
// // // //                 fontWeight="600"
// // // //                 color={colors.grey[100]}
// // // //               >
// // // //                 Revenue Generated
// // // //               </Typography>
// // // //               <Typography
// // // //                 variant="h3"
// // // //                 fontWeight="bold"
// // // //                 color={colors.greenAccent[500]}
// // // //               >
// // // //                 $59,342.32
// // // //               </Typography>
// // // //             </Box>
// // // //             <Box>
// // // //               <IconButton>
// // // //                 <DownloadOutlinedIcon
// // // //                   sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
// // // //                 />
// // // //               </IconButton>
// // // //             </Box>
// // // //           </Box>
// // // //           <Box height="250px" m="-20px 0 0 0">
// // // //             <LineChart isDashboard={true} />
// // // //           </Box>
// // // //         </Box> */}
// // // //         {/* <Box
// // // //           gridColumn="span 4"
// // // //           gridRow="span 2"
// // // //           backgroundColor={colors.primary[400]}
// // // //           overflow="auto"
// // // //         >
// // // //           <Box
// // // //             display="flex"
// // // //             justifyContent="space-between"
// // // //             alignItems="center"
// // // //             borderBottom={`4px solid ${colors.primary[500]}`}
// // // //             colors={colors.grey[100]}
// // // //             p="15px"
// // // //           >
// // // //             <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
// // // //               Recent Transactions
// // // //             </Typography>
// // // //           </Box>
// // // //           {mockTransactions.map((transaction, i) => (
// // // //             <Box
// // // //               key={`${transaction.txId}-${i}`}
// // // //               display="flex"
// // // //               justifyContent="space-between"
// // // //               alignItems="center"
// // // //               borderBottom={`4px solid ${colors.primary[500]}`}
// // // //               p="15px"
// // // //             >
// // // //               <Box>
// // // //                 <Typography
// // // //                   color={colors.greenAccent[500]}
// // // //                   variant="h5"
// // // //                   fontWeight="600"
// // // //                 >
// // // //                   {transaction.txId}
// // // //                 </Typography>
// // // //                 <Typography color={colors.grey[100]}>
// // // //                   {transaction.user}
// // // //                 </Typography>
// // // //               </Box>
// // // //               <Box color={colors.grey[100]}>{transaction.date}</Box>
// // // //               <Box
// // // //                 backgroundColor={colors.greenAccent[500]}
// // // //                 p="5px 10px"
// // // //                 borderRadius="4px"
// // // //               >
// // // //                 ${transaction.cost}
// // // //               </Box>
// // // //             </Box>
// // // //           ))}
// // // //         </Box> */}

// // // //         {/* ROW 3 */}
// // // //         {/* <Box
// // // //           gridColumn="span 4"
// // // //           gridRow="span 2"
// // // //           backgroundColor={colors.primary[400]}
// // // //           p="30px"
// // // //         >
// // // //           <Typography variant="h5" fontWeight="600">
// // // //             Campaign
// // // //           </Typography>
// // // //           <Box
// // // //             display="flex"
// // // //             flexDirection="column"
// // // //             alignItems="center"
// // // //             mt="25px"
// // // //           >
// // // //             <ProgressCircle size="125" />
// // // //             <Typography
// // // //               variant="h5"
// // // //               color={colors.greenAccent[500]}
// // // //               sx={{ mt: "15px" }}
// // // //             >
// // // //               $48,352 revenue generated
// // // //             </Typography>
// // // //             <Typography>Includes extra misc expenditures and costs</Typography>
// // // //           </Box>
// // // //         </Box>
// // // //         <Box
// // // //           gridColumn="span 4"
// // // //           gridRow="span 2"
// // // //           backgroundColor={colors.primary[400]}
// // // //         >
// // // //           <Typography
// // // //             variant="h5"
// // // //             fontWeight="600"
// // // //             sx={{ padding: "30px 30px 0 30px" }}
// // // //           >
// // // //             Sales Quantity
// // // //           </Typography>
// // // //           <Box height="250px" mt="-20px">
// // // //             <BarChart isDashboard={true} />
// // // //           </Box>
// // // //         </Box>
// // // //         <Box
// // // //           gridColumn="span 4"
// // // //           gridRow="span 2"
// // // //           backgroundColor={colors.primary[400]}
// // // //           padding="30px"
// // // //         >
// // // //           <Typography
// // // //             variant="h5"
// // // //             fontWeight="600"
// // // //             sx={{ marginBottom: "15px" }}
// // // //           >
// // // //             Geography Based Traffic
// // // //           </Typography>
// // // //           <Box height="200px">
// // // //             <GeographyChart isDashboard={true} />
// // // //           </Box>
// // // //         </Box> */}
// // // //       </Box>
// // // //     </Box>
// // // //   );
// // // // };

// // // // export default Dashboard;


// // // // import { Box, Button, useTheme, useMediaQuery } from "@mui/material";
// // // // import { tokens } from "../../theme";
// // // // import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
// // // // import EmailIcon from "@mui/icons-material/Email";
// // // // import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
// // // // import PersonAddIcon from "@mui/icons-material/PersonAdd";
// // // // import TrafficIcon from "@mui/icons-material/Traffic";
// // // // import Header from "../../components/Header";
// // // // import StatBox from "../../components/StatBox";

// // // // const Dashboard = () => {
// // // //   const theme = useTheme();
// // // //   const colors = tokens(theme.palette.mode);
// // // //   const isMobile = useMediaQuery("(max-width:768px)");
  
// // // //   return (
// // // //     <Box p="20px">
// // // //       {/* HEADER */}
// // // //       <Box 
// // // //         display="flex" 
// // // //         flexDirection={isMobile ? "column" : "row"} 
// // // //         justifyContent="space-between" 
// // // //         alignItems={isMobile ? "flex-start" : "center"} 
// // // //         gap={isMobile ? "10px" : "0"}
// // // //       >
// // // //         <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
// // // //         <Button
// // // //           sx={{
// // // //             backgroundColor: colors.blueAccent[700],
// // // //             color: colors.grey[100],
// // // //             fontSize: "14px",
// // // //             fontWeight: "bold",
// // // //             padding: "10px 20px",
// // // //           }}
// // // //         >
// // // //           <DownloadOutlinedIcon sx={{ mr: "10px" }} />
// // // //           Download Reports
// // // //         </Button>
// // // //       </Box>
// // // //       {/* GRID & CARDS */}
// // // //       <Box
// // // //         display="grid"
// // // //         gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))"
// // // //         gap="20px"
// // // //         mt="20px"
// // // //       >
// // // //         {/* StatBox Components */}
// // // //         <Box 
// // // //           sx={{
// // // //             backgroundColor: "#1F2A40",
// // // //             display: "flex",
// // // //             alignItems: "center",
// // // //             justifyContent: "center",
// // // //             padding: "9px"
// // // //           }}
// // // //         >
// // // //           <StatBox
// // // //             title="12,361"
// // // //             subtitle="Emails Sent"
// // // //             progress="0.75"
// // // //             increase="+14%"
// // // //             icon={
// // // //               <EmailIcon
// // // //                 sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
// // // //               />
// // // //             }
// // // //             sx={{ margin: "0 !important" }}
// // // //           />
// // // //         </Box>
// // // //         <Box 
// // // //           sx={{
// // // //             backgroundColor: "#1F2A40",
// // // //             display: "flex",
// // // //             alignItems: "center",
// // // //             justifyContent: "center",
// // // //             padding: "9px"
// // // //           }}
// // // //         >
// // // //           <StatBox
// // // //             title="431,225"
// // // //             subtitle="Sales Obtained"
// // // //             progress="0.50"
// // // //             increase="+21%"
// // // //             icon={
// // // //               <PointOfSaleIcon
// // // //                 sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
// // // //               />
// // // //             }
// // // //             sx={{ margin: "0 !important" }}
// // // //           />
// // // //         </Box>
// // // //         <Box 
// // // //           sx={{
// // // //             backgroundColor: "#1F2A40",
// // // //             display: "flex",
// // // //             alignItems: "center",
// // // //             justifyContent: "center",
// // // //             padding: "9px"
// // // //           }}
// // // //         >
// // // //           <StatBox
// // // //             title="32,441"
// // // //             subtitle="New Clients"
// // // //             progress="0.30"
// // // //             increase="+5%"
// // // //             icon={
// // // //               <PersonAddIcon
// // // //                 sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
// // // //               />
// // // //             }
// // // //             sx={{ margin: "0 !important" }}
// // // //           />
// // // //         </Box>
// // // //         <Box 
// // // //           sx={{
// // // //             backgroundColor: "#1F2A40",
// // // //             display: "flex",
// // // //             alignItems: "center",
// // // //             justifyContent: "center",
// // // //             padding: "9px"
// // // //           }}
// // // //         >
// // // //           <StatBox
// // // //             title="1,325,134"
// // // //             subtitle="Traffic Received"
// // // //             progress="0.80"
// // // //             increase="+43%"
// // // //             icon={
// // // //               <TrafficIcon
// // // //                 sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
// // // //               />
// // // //             }
// // // //             sx={{ margin: "0 !important" }}
// // // //           />
// // // //         </Box>
// // // //       </Box>
// // // //     </Box>
// // // //   );
// // // // };

// // // // export default Dashboard;

// // // import React, { useState, useEffect } from "react";
// // // import { Box, Button, useTheme, useMediaQuery, CircularProgress } from "@mui/material";
// // // import { tokens } from "../../theme";
// // // import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
// // // import EmailIcon from "@mui/icons-material/Email";
// // // import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
// // // import PersonAddIcon from "@mui/icons-material/PersonAdd";
// // // import TrafficIcon from "@mui/icons-material/Traffic";
// // // import Header from "../../components/Header";
// // // import StatBox from "../../components/StatBox";
// // // import axios from "axios";

// // // const Dashboard = () => {
// // //   const theme = useTheme();
// // //   const colors = tokens(theme.palette.mode);
// // //   const isMobile = useMediaQuery("(max-width:768px)");
  
// // //   const [dashboardData, setDashboardData] = useState({
// // //     users: { count: 0, increase: "0%" },
// // //     authors: { count: 0, increase: "0%" },
// // //     books: { count: 0, increase: "0%" },
// // //     sales: { count: 0, increase: "0%" },
// // //   });
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState(null);

// // //   useEffect(() => {
// // //     const fetchDashboardData = async () => {
// // //       try {
// // //       const authToken = localStorage.getItem("authToken");
// // //         setLoading(true);
        
// // //         // Fetch data from all endpoints in parallel
// // //         const [usersResponse, authorsResponse, booksResponse, salesResponse] = await Promise.all([
// // //           axios.get(`${process.env.REACT_APP_BASE_URL}/admin/dashboard/user`,
// // //             {
// // //               headers: {
// // //                 "Authorization": authToken, 
// // //               },
// // //             }),
// // //           axios.get(`${process.env.REACT_APP_BASE_URL}/admin/dashboard/author`,
// // //             {
// // //               headers: {
// // //                 "Authorization": authToken, 
// // //               },
// // //             }),
// // //           axios.get(`${process.env.REACT_APP_BASE_URL}/admin/dashboard/book`,
// // //             {
// // //               headers: {
// // //                 "Authorization": authToken, 
// // //               },
// // //             }),
// // //           axios.get(`${process.env.REACT_APP_BASE_URL}/admin/dashboard/sell`,
// // //             {
// // //               headers: {
// // //                 "Authorization": authToken, 
// // //               },
// // //             })
// // //         ]);

// // //         setDashboardData({
// // //           users: {
// // //             count: usersResponse.data.count || 0,
// // //             increase: usersResponse.data.percentIncrease || "0%"
// // //           },
// // //           authors: {
// // //             count: authorsResponse.data.count || 0,
// // //             increase: authorsResponse.data.percentIncrease || "0%"
// // //           },
// // //           books: {
// // //             count: booksResponse.data.count || 0,
// // //             increase: booksResponse.data.percentIncrease || "0%"
// // //           },
// // //           sales: {
// // //             count: salesResponse.data.count || 0,
// // //             increase: salesResponse.data.percentIncrease || "0%"
// // //           }
// // //         });
        
// // //         setError(null);
// // //       } catch (err) {
// // //         console.error("Error fetching dashboard data:", err);
// // //         setError("Failed to load dashboard data. Please try again later.");
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };

// // //     fetchDashboardData();
// // //   }, []);

// // //   const handleDownloadReports = () => {
// // //     // Implement download report functionality here
// // //     console.log("Download reports clicked");
// // //   };

// // //   // Calculate progress values (assuming max value is total count / some factor)
// // //   const calculateProgress = (count, max = 100000) => {
// // //     return Math.min(count / max, 1).toFixed(2);
// // //   };
  
// // //   return (
// // //     <Box p="20px">
// // //       {/* HEADER */}
// // //       <Box 
// // //         display="flex" 
// // //         flexDirection={isMobile ? "column" : "row"} 
// // //         justifyContent="space-between" 
// // //         alignItems={isMobile ? "flex-start" : "center"} 
// // //         gap={isMobile ? "10px" : "0"}
// // //       >
// // //         <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
// // //         <Button
// // //           sx={{
// // //             backgroundColor: colors.blueAccent[700],
// // //             color: colors.grey[100],
// // //             fontSize: "14px",
// // //             fontWeight: "bold",
// // //             padding: "10px 20px",
// // //           }}
// // //           onClick={handleDownloadReports}
// // //         >
// // //           <DownloadOutlinedIcon sx={{ mr: "10px" }} />
// // //           Download Reports
// // //         </Button>
// // //       </Box>

// // //       {/* GRID & CARDS */}
// // //       {loading ? (
// // //         <Box display="flex" justifyContent="center" alignItems="center" height="200px">
// // //           <CircularProgress />
// // //         </Box>
// // //       ) : error ? (
// // //         <Box 
// // //           sx={{ 
// // //             color: colors.redAccent[500], 
// // //             textAlign: "center", 
// // //             mt: "20px", 
// // //             p: "20px", 
// // //             backgroundColor: colors.primary[400] 
// // //           }}
// // //         >
// // //           {error}
// // //         </Box>
// // //       ) : (
// // //         <Box
// // //           display="grid"
// // //           gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))"
// // //           gap="20px"
// // //           mt="20px"
// // //         >
// // //           {/* Users StatBox */}
// // //           <Box 
// // //             sx={{
// // //               backgroundColor: colors.primary[400],
// // //               display: "flex",
// // //               alignItems: "center",
// // //               justifyContent: "center",
// // //               padding: "9px"
// // //             }}
// // //           >
// // //             <StatBox
// // //               title={dashboardData.users.count.toLocaleString()}
// // //               subtitle="Registered Users"
// // //               progress={calculateProgress(dashboardData.users.count)}
// // //               increase={`+${dashboardData.users.increase}`}
// // //               icon={
// // //                 <PersonAddIcon
// // //                   sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
// // //                 />
// // //               }
// // //               sx={{ margin: "0 !important" }}
// // //             />
// // //           </Box>
          
// // //           {/* Authors StatBox */}
// // //           <Box 
// // //             sx={{
// // //               backgroundColor: colors.primary[400],
// // //               display: "flex",
// // //               alignItems: "center",
// // //               justifyContent: "center",
// // //               padding: "9px"
// // //             }}
// // //           >
// // //             <StatBox
// // //               title={dashboardData.authors.count.toLocaleString()}
// // //               subtitle="Authors"
// // //               progress={calculateProgress(dashboardData.authors.count, 10000)}
// // //               increase={`+${dashboardData.authors.increase}`}
// // //               icon={
// // //                 <EmailIcon
// // //                   sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
// // //                 />
// // //               }
// // //               sx={{ margin: "0 !important" }}
// // //             />
// // //           </Box>
          
// // //           {/* Books StatBox */}
// // //           <Box 
// // //             sx={{
// // //               backgroundColor: colors.primary[400],
// // //               display: "flex",
// // //               alignItems: "center",
// // //               justifyContent: "center",
// // //               padding: "9px"
// // //             }}
// // //           >
// // //             <StatBox
// // //               title={dashboardData.books.count.toLocaleString()}
// // //               subtitle="Books Available"
// // //               progress={calculateProgress(dashboardData.books.count, 50000)}
// // //               increase={`+${dashboardData.books.increase}`}
// // //               icon={
// // //                 <TrafficIcon
// // //                   sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
// // //                 />
// // //               }
// // //               sx={{ margin: "0 !important" }}
// // //             />
// // //           </Box>
          
// // //           {/* Sales StatBox */}
// // //           <Box 
// // //             sx={{
// // //               backgroundColor: colors.primary[400],
// // //               display: "flex",
// // //               alignItems: "center",
// // //               justifyContent: "center",
// // //               padding: "9px"
// // //             }}
// // //           >
// // //             <StatBox
// // //               title={dashboardData.sales.count.toLocaleString()}
// // //               subtitle="Total Sales"
// // //               progress={calculateProgress(dashboardData.sales.count, 500000)}
// // //               increase={`+${dashboardData.sales.increase}`}
// // //               icon={
// // //                 <PointOfSaleIcon
// // //                   sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
// // //                 />
// // //               }
// // //               sx={{ margin: "0 !important" }}
// // //             />
// // //           </Box>
// // //         </Box>
// // //       )}
// // //     </Box>
// // //   );
// // // };

// // // export default Dashboard; 

// // import React, { useState, useEffect } from "react";
// // import { Box, Button, useTheme, useMediaQuery, CircularProgress } from "@mui/material";
// // import { tokens } from "../../theme";
// // import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
// // import EmailIcon from "@mui/icons-material/Email";
// // import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
// // import PersonAddIcon from "@mui/icons-material/PersonAdd";
// // import TrafficIcon from "@mui/icons-material/Traffic";
// // import Header from "../../components/Header";
// // import StatBox from "../../components/StatBox";
// // import axios from "axios";

// // const Dashboard = () => {
// //   const theme = useTheme();
// //   const colors = tokens(theme.palette.mode);
// //   const isMobile = useMediaQuery("(max-width:768px)");
  
// //   const [dashboardData, setDashboardData] = useState({
// //     users: { count: 0, increase: "5%" },
// //     authors: { count: 0, increase: "10%" },
// //     books: { count: 0, increase: "15%" },
// //     sales: { count: 0, increase: "20%" },
// //   });
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     const fetchDashboardData = async () => {
// //       try {
// //         const authToken = localStorage.getItem("authToken");

// //         setLoading(true);
        
// //         // Fetch data from all endpoints in parallel
// //         const [usersResponse, authorsResponse, booksResponse, salesResponse] = await Promise.all([
// //           axios.get(`${process.env.REACT_APP_BASE_URL}/admin/dashboard/user`,
// //             {
// //               headers: {
// //                 "Authorization": authToken, 
// //               },
// //             }),
// //           axios.get(`${process.env.REACT_APP_BASE_URL}/admin/dashboard/author`,
// //             {
// //               headers: {
// //                 "Authorization": authToken, 
// //               },
// //             }),
// //           axios.get(`${process.env.REACT_APP_BASE_URL}/admin/dashboard/book`,
// //             {
// //               headers: {
// //                 "Authorization": authToken, 
// //               },
// //             }),
// //           axios.get(`${process.env.REACT_APP_BASE_URL}/admin/dashboard/sell`,
// //             {
// //               headers: {
// //                 "Authorization": authToken, 
// //               },
// //             })
// //         ]);

// //         // Parse response data based on the actual API response structure
// //         setDashboardData({
// //           users: {
// //             count: usersResponse.data.totalUSer || 0,
// //             increase: "5%" // Static value since API doesn't provide increase percentage
// //           },
// //           authors: {
// //             count: authorsResponse.data.totalAuthor || 0,
// //             increase: "10%" // Static value since API doesn't provide increase percentage
// //           },
// //           books: {
// //             count: booksResponse.data.totalBook || 0,
// //             increase: "15%" // Static value since API doesn't provide increase percentage
// //           },
// //           sales: {
// //             count: salesResponse.data.totalPurchase || 0,
// //             increase: "20%" // Static value since API doesn't provide increase percentage
// //           }
// //         });
        
// //         setError(null);
// //       } catch (err) {
// //         console.error("Error fetching dashboard data:", err);
// //         setError("Failed to load dashboard data. Please try again later.");
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchDashboardData();
// //   }, []);

// //   const handleDownloadReports = () => {
// //     // Implement download report functionality here
// //     console.log("Download reports clicked");
// //   };

// //   // Calculate progress values based on counts
// //   const calculateProgress = (count, max) => {
// //     return Math.min(count / max, 1).toFixed(2);
// //   };
  
// //   return (
// //     <Box p="20px">
// //       {/* HEADER */}
// //       <Box 
// //         display="flex" 
// //         flexDirection={isMobile ? "column" : "row"} 
// //         justifyContent="space-between" 
// //         alignItems={isMobile ? "flex-start" : "center"} 
// //         gap={isMobile ? "10px" : "0"}
// //       >
// //         <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
// //         <Button
// //           sx={{
// //             backgroundColor: colors.blueAccent[700],
// //             color: colors.grey[100],
// //             fontSize: "14px",
// //             fontWeight: "bold",
// //             padding: "10px 20px",
// //           }}
// //           onClick={handleDownloadReports}
// //         >
// //           <DownloadOutlinedIcon sx={{ mr: "10px" }} />
// //           Download Reports
// //         </Button>
// //       </Box>

// //       {/* GRID & CARDS */}
// //       {loading ? (
// //         <Box display="flex" justifyContent="center" alignItems="center" height="200px">
// //           <CircularProgress />
// //         </Box>
// //       ) : error ? (
// //         <Box 
// //           sx={{ 
// //             color: colors.redAccent[500], 
// //             textAlign: "center", 
// //             mt: "20px", 
// //             p: "20px", 
// //             backgroundColor: colors.primary[400] 
// //           }}
// //         >
// //           {error}
// //         </Box>
// //       ) : (
// //         <Box
// //           display="grid"
// //           gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))"
// //           gap="20px"
// //           mt="20px"
// //         >
// //           {/* Users StatBox */}
// //           <Box 
// //             sx={{
// //               backgroundColor: "#1F2A40",
// //               display: "flex",
// //               alignItems: "center",
// //               justifyContent: "center",
// //               padding: "9px"
// //             }}
// //           >
// //             <StatBox
// //               title={dashboardData.users.count.toString()}
// //               subtitle="Registered Users"
// //               progress={calculateProgress(dashboardData.users.count, 50)}
// //               increase={dashboardData.users.increase}
// //               icon={
// //                 <PersonAddIcon
// //                   sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
// //                 />
// //               }
// //               sx={{ margin: "0 !important" }}
// //             />
// //           </Box>
          
// //           {/* Authors StatBox */}
// //           <Box 
// //             sx={{
// //               backgroundColor: "#1F2A40",
// //               display: "flex",
// //               alignItems: "center",
// //               justifyContent: "center",
// //               padding: "9px"
// //             }}
// //           >
// //             <StatBox
// //               title={dashboardData.authors.count.toString()}
// //               subtitle="Authors"
// //               progress={calculateProgress(dashboardData.authors.count, 10)}
// //               increase={dashboardData.authors.increase}
// //               icon={
// //                 <EmailIcon
// //                   sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
// //                 />
// //               }
// //               sx={{ margin: "0 !important" }}
// //             />
// //           </Box>
          
// //           {/* Books StatBox */}
// //           <Box 
// //             sx={{
// //               backgroundColor: "#1F2A40",
// //               display: "flex",
// //               alignItems: "center",
// //               justifyContent: "center",
// //               padding: "9px"
// //             }}
// //           >
// //             <StatBox
// //               title={dashboardData.books.count.toString()}
// //               subtitle="Books Available"
// //               progress={calculateProgress(dashboardData.books.count, 20)}
// //               increase={dashboardData.books.increase}
// //               icon={
// //                 <TrafficIcon
// //                   sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
// //                 />
// //               }
// //               sx={{ margin: "0 !important" }}
// //             />
// //           </Box>
          
// //           {/* Sales StatBox */}
// //           <Box 
// //             sx={{
// //               backgroundColor: "#1F2A40",
// //               display: "flex",
// //               alignItems: "center",
// //               justifyContent: "center",
// //               padding: "9px"
// //             }}
// //           >
// //             <StatBox
// //               title={dashboardData.sales.count.toString()}
// //               subtitle="Total Sales"
// //               progress={calculateProgress(dashboardData.sales.count, 50)}
// //               increase={dashboardData.sales.increase}
// //               icon={
// //                 <PointOfSaleIcon
// //                   sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
// //                 />
// //               }
// //               sx={{ margin: "0 !important" }}
// //             />
// //           </Box>
// //         </Box>
// //       )}
// //     </Box>
// //   );
// // };

// // export default Dashboard;

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
//     users: { count: 0, increase: "5%" },
//     authors: { count: 0, increase: "10%" },
//     books: { count: 0, increase: "15%" },
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
//             increase: "5%" // Static value since API doesn't provide increase percentage
//           },
//           authors: {
//             count: authorsResponse.data.totalAuthor || 0,
//             increase: "10%" // Static value since API doesn't provide increase percentage
//           },
//           books: {
//             count: booksResponse.data.totalBook || 0,
//             increase: "15%" // Static value since API doesn't provide increase percentage
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

//   // Calculate progress values based on counts
//   const calculateProgress = (count, max) => {
//     return Math.min(count / max, 1).toFixed(2);
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
//         <Button
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
//         </Button>
//       </Box>

//       {/* GRID & CARDS */}
//       {loading ? (
//         <Box display="flex" justifyContent="center" alignItems="center" height="200px">
//           <CircularProgress />
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
//               progress={calculateProgress(dashboardData.users.count, 50)}
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
//               progress={calculateProgress(dashboardData.authors.count, 10)}
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
//               progress={calculateProgress(dashboardData.books.count, 20)}
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
//               progress={calculateProgress(dashboardData.sales.count, 50)}
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
import { Box, Button, useTheme, useMediaQuery, CircularProgress } from "@mui/material";
import { tokens } from "../../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Header from "../../components/Header";
import StatBox from "../../components/StatBox";
import axios from "axios";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isMobile = useMediaQuery("(max-width:768px)");
  
  const [dashboardData, setDashboardData] = useState({
    users: { count: 0, increase: "12%" },
    authors: { count: 0, increase: "1%" },
    books: { count: 0, increase: "6%" },
    sales: { count: 0, increase: "20%" },
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const authToken = localStorage.getItem("authToken");

        setLoading(true);
        
        // Fetch data from all endpoints in parallel
        const [usersResponse, authorsResponse, booksResponse, salesResponse] = await Promise.all([
          axios.get(`${process.env.REACT_APP_BASE_URL}/admin/dashboard/user`,
            {
              headers: {
                "Authorization": authToken, 
              },
            }),
          axios.get(`${process.env.REACT_APP_BASE_URL}/admin/dashboard/author`,
            {
              headers: {
                "Authorization": authToken, 
              },
            }),
          axios.get(`${process.env.REACT_APP_BASE_URL}/admin/dashboard/book`,
            {
              headers: {
                "Authorization": authToken, 
              },
            }),
          axios.get(`${process.env.REACT_APP_BASE_URL}/admin/dashboard/sell`,
            {
              headers: {
                "Authorization": authToken, 
              },
            })
        ]);

        // Parse response data based on the actual API response structure
        setDashboardData({
          users: {
            count: usersResponse.data.totalUSer || 0,
            increase: "12%" // Static value since API doesn't provide increase percentage
          },
          authors: {
            count: authorsResponse.data.totalAuthor || 0,
            increase: "1%" // Static value since API doesn't provide increase percentage
          },
          books: {
            count: booksResponse.data.totalBook || 0,
            increase: "6%" // Static value since API doesn't provide increase percentage
          },
          sales: {
            count: salesResponse.data.totalPurchase || 0,
            increase: "20%" // Static value since API doesn't provide increase percentage
          }
        });
        
        setError(null);
      } catch (err) {
        console.error("Error fetching dashboard data:", err);
        setError("Failed to load dashboard data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  const handleDownloadReports = () => {
    // Implement download report functionality here
    console.log("Download reports clicked");
  };

  // Calculate progress values based on realistic expectations for each metric
  const calculateUserProgress = () => {
    // For users, assuming a target of 50 users
    const target = 50;
    return (dashboardData.users.count / target).toFixed(2);
  };

  const calculateAuthorProgress = () => {
    // For authors, considering you have 1 author out of a potential 5
    const target = 5;
    return (dashboardData.authors.count / target).toFixed(2);
  };

  const calculateBookProgress = () => {
    // For books, assuming a target of 20 books in the catalog
    const target = 20;
    return (dashboardData.books.count / target).toFixed(2);
  };

  const calculateSalesProgress = () => {
    // For sales, assuming a monthly target of 50 sales
    const target = 50;
    return (dashboardData.sales.count / target).toFixed(2);
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
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
        {/* <Button
          sx={{
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
          }}
          onClick={handleDownloadReports}
        >
          <DownloadOutlinedIcon sx={{ mr: "10px" }} />
          Download Reports
        </Button> */}
      </Box>

      {/* GRID & CARDS */}
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
              // Create gradient effect similar to the image
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
          gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))"
          gap="20px"
          mt="20px"
        >
          {/* Users StatBox */}
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
              title={dashboardData.users.count.toString()}
              subtitle="Registered Users"
              progress={calculateUserProgress()}
              increase={dashboardData.users.increase}
              icon={
                <PeopleAltOutlinedIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
              sx={{ margin: "0 !important" }}
            />
          </Box>
          
          {/* Authors StatBox */}
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
              title={dashboardData.authors.count.toString()}
              subtitle="Authors"
              progress={calculateAuthorProgress()}
              increase={dashboardData.authors.increase}
              icon={
                <PersonOutlinedIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
              sx={{ margin: "0 !important" }}
            />
          </Box>
          
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
              title={dashboardData.books.count.toString()}
              subtitle="Books Available"
              progress={calculateBookProgress()}
              increase={dashboardData.books.increase}
              icon={
                <AutoStoriesOutlinedIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
              sx={{ margin: "0 !important" }}
            />
          </Box>
          
          {/* Sales StatBox */}
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
              title={dashboardData.sales.count.toString()}
              subtitle="Total Sales"
              progress={calculateSalesProgress()}
              increase={dashboardData.sales.increase}
              icon={
                <ShoppingCartOutlinedIcon
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

export default Dashboard;