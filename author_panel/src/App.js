// import { useState } from "react";
// import { Routes, Route } from "react-router-dom";
// import Topbar from "./scenes/global/Topbar";
// import Sidebar from "./scenes/global/Sidebar";
// import Dashboard from "./scenes/dashboard";
// import Book from "./scenes/book";
// import Author from "./scenes/author";
// import Contacts from "./scenes/contacts";
// import Bar from "./scenes/bar";
// import Form from "./scenes/form";
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
// import User from "./scenes/user";
// import Geography from "./scenes/geography";
// import { CssBaseline, ThemeProvider } from "@mui/material";
// import { ColorModeContext, useMode } from "./theme";
// import Calendar from "./scenes/calendar/calendar";
// import ProfilePage from "./scenes/global/Profile";

// function App() {
//   const [theme, colorMode] = useMode();
//   const [isSidebar, setIsSidebar] = useState(true);

//   return (
//     <ColorModeContext.Provider value={colorMode}>
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         <div className="app">
          
//           <Sidebar isSidebar={isSidebar} />
//           <main className="content">
//             <Topbar setIsSidebar={setIsSidebar} />
//             <Routes>
//               <Route path="/" element={<Dashboard />} />
//               <Route path="/book" element={<Book />} />
//               <Route path="/author" element={<Author />} />
//               <Route path="/contacts" element={<Contacts />} />
//               <Route path="/form" element={<Form />} />
//               <Route path="/bar" element={<Bar />} />
//               <Route path="/pie" element={<Pie />} />
//               <Route path="/user" element={<User />} />
//               <Route path="/line" element={<Line />} />
//               <Route path="/calendar" element={<Calendar />} />
//               <Route path="/geography" element={<Geography />} />
//               <Route path="/profile" element={<ProfilePage/>} />
//             </Routes>
//           </main>
//         </div>
//       </ThemeProvider>
//     </ColorModeContext.Provider>
//   );
// }

// export default App;


import { useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Book from "./scenes/book";
import Author from "./scenes/author";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import ProfilePage from "./scenes/global/Profile";
import Login from "./scenes/global/Login";
import Review from "./scenes/Review";
import Payment from "./scenes/payment";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const location = useLocation();
  
  // Check if current path is the login page
  const isLoginPage = location.pathname === "/";

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {!isLoginPage && <Sidebar isSidebar={isSidebar} />}
          <main className={isLoginPage ? "content-full" : "content"}>
            {!isLoginPage && <Topbar setIsSidebar={setIsSidebar} />}
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/book" element={<Book />} />
              <Route path="/author" element={<Author />} />
              <Route path="/review" element={<Review />} />

              {/* <Route path="/blog" element={<Blog />} />
              <Route path="/bookCategory" element={<BookCategory />} />
              <Route path="/user" element={<User />} />
              <Route path="/newsLetter" element={<NewsLetter />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} /> */}
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/" element={<Login />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/payment" element={<Payment />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;