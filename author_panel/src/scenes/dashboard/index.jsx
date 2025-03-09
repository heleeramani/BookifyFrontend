import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PersonIcon from '@mui/icons-material/Person';
import Header from "../../components/Header";
import StatBox from "../../components/StatBox";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="10"
            subtitle="User"
            progress="0.75"
            increase="+14%"
            icon={<MenuBookIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }}/>}
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="3"
            subtitle="Author"
            progress="0.50"
            increase="+21%"
            icon={<PersonIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }}/>}

          />
        </Box>
     </Box>
     </Box>   
 
  );
};

export default Dashboard;
