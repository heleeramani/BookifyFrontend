// // import { Box, IconButton, useTheme } from "@mui/material";
// // import { useContext } from "react";
// // import { ColorModeContext, tokens } from "../../theme";
// // import InputBase from "@mui/material/InputBase";
// // import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
// // import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
// // import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
// // import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
// // import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
// // import SearchIcon from "@mui/icons-material/Search";

// // const Topbar = () => {
// //   const theme = useTheme();
// //   const colors = tokens(theme.palette.mode);
// //   const colorMode = useContext(ColorModeContext);

// //   return (
// //     <Box display="flex" justifyContent="space-between" p={2}>
// //       {/* SEARCH BAR */}
// //       <Box
// //         display="flex"
// //         backgroundColor={colors.primary[400]}
// //         borderRadius="3px"
// //       >
// //         <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
// //         <IconButton type="button" sx={{ p: 1 }}>
// //           <SearchIcon />
// //         </IconButton>
// //       </Box>

// //       {/* ICONS */}
// //       <Box display="flex">
// //         <IconButton onClick={colorMode.toggleColorMode}>
// //           {theme.palette.mode === "dark" ? (
// //             <DarkModeOutlinedIcon />
// //           ) : (
// //             <LightModeOutlinedIcon />
// //           )}
// //         </IconButton>
// //         <IconButton>
// //           <NotificationsOutlinedIcon />
// //         </IconButton>
// //         <IconButton>
// //           <SettingsOutlinedIcon />
// //         </IconButton>
// //         <IconButton>
// //           <PersonOutlinedIcon />
// //         </IconButton>
// //       </Box>
// //     </Box>
// //   );
// // };

// // export default Topbar;


// import { Box, IconButton, useTheme } from "@mui/material";
// import { useContext } from "react";
// import { ColorModeContext, tokens } from "../../theme";
// import { useNavigate } from "react-router-dom"; // Import useNavigate
// import InputBase from "@mui/material/InputBase";
// import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
// import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
// import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
// import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
// import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
// import SearchIcon from "@mui/icons-material/Search";

// const Topbar = () => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   const colorMode = useContext(ColorModeContext);
//   const navigate = useNavigate(); // Initialize navigation

//   const handleProfileClick = () => {
//     navigate("/profile"); // Navigate to profile page when icon is clicked
//   };

//   return (
//     <Box display="flex" justifyContent="space-between" p={2}>
//       {/* SEARCH BAR */}
//       <Box
//         display="flex"
//         backgroundColor={colors.primary[400]}
//         borderRadius="3px"
//       >
//         <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
//         <IconButton type="button" sx={{ p: 1 }}>
//           <SearchIcon />
//         </IconButton>
//       </Box>

//       {/* ICONS */}
//       <Box display="flex">
//         <IconButton onClick={colorMode.toggleColorMode}>
//           {theme.palette.mode === "dark" ? (
//             <DarkModeOutlinedIcon />
//           ) : (
//             <LightModeOutlinedIcon />
//           )}
//         </IconButton>
//         {/* <IconButton>
//           <NotificationsOutlinedIcon />
//         </IconButton>
//         <IconButton>
//           <SettingsOutlinedIcon />
//         </IconButton> */}
//         <IconButton onClick={handleProfileClick}>
//           <PersonOutlinedIcon />
//         </IconButton>
//       </Box>
//     </Box>
//   );
// };

// export default Topbar;


import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import { useNavigate } from "react-router-dom";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import axios from "axios";
import { useState } from "react";
const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleProfileClick = () => {
    navigate("/profile");
  };

  const handleLogoutLogin = () => {
    console.log("Logout clicked");
    navigate("/login"); // Navigate to login page after logout
  };

  const handleLogout = async () => {
    try {
      const authToken = localStorage.getItem("authToken");
      
      if (!authToken) {
        console.error("No auth token found");
        return;
      }
      

      // Use axios for the API call and pass the token directly
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/logout`, {}, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": authToken
        }
      });
      const token =
        response.headers["authorization"] ||
        response.headers["Authorization"] ||
        response.headers["x-auth-token"];
      // Example: Save token to localStorage
      localStorage.setItem("authToken", token);
      console.log(authToken, "authToken");
      // If successful, clear token and redirect
      // localStorage.removeItem("authToken");
      setIsLoggedIn(false);
      navigate("/"); // Redirect to home page
      
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box display="flex" backgroundColor={colors.primary[400]} borderRadius="3px">
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
        </IconButton>
        <IconButton onClick={handleProfileClick}>
          <PersonOutlinedIcon />
        </IconButton>
        <IconButton onClick={handleLogout}>
          <LogoutOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
