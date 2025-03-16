// import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
// import { tokens } from "../../theme";
// import MenuBookIcon from '@mui/icons-material/MenuBook';
// import PersonIcon from '@mui/icons-material/Person';
// import Header from "../../components/Header";
// import StatBox from "../../components/StatBox";

// const Dashboard = () => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);

//   return (
//     <Box m="20px">
//       {/* HEADER */}
//       <Box display="flex" justifyContent="space-between" alignItems="center">
//         <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
//       </Box>

//       {/* GRID & CHARTS */}
//       <Box
//         display="grid"
//         gridTemplateColumns="repeat(12, 1fr)"
//         gridAutoRows="140px"
//         gap="20px"
//       >
//         {/* ROW 1 */}
//         <Box
//           gridColumn="span 3"
//           backgroundColor={colors.primary[400]}
//           display="flex"
//           alignItems="center"
//           justifyContent="center"
//         >
//           <StatBox
//             title="10"
//             subtitle="User"
//             progress="0.75"
//             increase="+14%"
//             icon={<MenuBookIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }}/>}
//           />
//         </Box>
//         <Box
//           gridColumn="span 3"
//           backgroundColor={colors.primary[400]}
//           display="flex"
//           alignItems="center"
//           justifyContent="center"
//         >
//           <StatBox
//             title="3"
//             subtitle="Author"
//             progress="0.50"
//             increase="+21%"
//             icon={<PersonIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }}/>}

//           />
//         </Box>
//      </Box>
//      </Box>   
 
//   );
// };

// export default Dashboard;

import { Box, Button, useTheme, useMediaQuery } from "@mui/material";
import { tokens } from "../../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import StatBox from "../../components/StatBox";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isMobile = useMediaQuery("(max-width:768px)");
  
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
        <Button
          sx={{
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
          }}
        >
          <DownloadOutlinedIcon sx={{ mr: "10px" }} />
          Download Reports
        </Button>
      </Box>
      {/* GRID & CARDS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))"
        gap="20px"
        mt="20px"
      >
        {/* StatBox Components */}
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
            title="12,361"
            subtitle="Emails Sent"
            progress="0.75"
            increase="+14%"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
            sx={{ margin: "0 !important" }}
          />
        </Box>
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
            title="431,225"
            subtitle="Sales Obtained"
            progress="0.50"
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
            sx={{ margin: "0 !important" }}
          />
        </Box>
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
            title="32,441"
            subtitle="New Clients"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
            sx={{ margin: "0 !important" }}
          />
        </Box>
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
            title="1,325,134"
            subtitle="Traffic Received"
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
            sx={{ margin: "0 !important" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;