// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import AppRouter from "./component/router/AppRouter";
// import ScrollToTop from "./component/ScrollToTop";
// import Navbar from "./component/navbar/Navbar";
// import Footer from './component/footer/Footer'
// // import BokInfo from "./component/Shop/component/BookInfo";
// import Demo from './pages/Demo'
// import Registration from "./pages/Registration";
// import './App.css'
// import Login from "./pages/Login";
// import Register from "./pages/Registration";
// import Subscription from "./component/subscription/Subscription";
// import ForgotPassword from "./pages/ForgotPassword";
// import ResetPassword from "./pages/ResetPassword";
// // import ResetPassword from "./pages/resetPassword";
// // import FaqAccordion from "./component/FAQ/FAQ";
// function App() {
//   return (
//     <Router>
//       <ScrollToTop />
//       <Navbar />
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/forgot-password" element={<ForgotPassword />} /> 
//         <Route path="/reset-password" element={<ResetPassword />} /> 

//       </Routes>
//       <AppRouter />
//       {/* <Registration /> */}
//       {/* <Demo/> */}
//       <Subscription />
//       <ResetPassword />
//       <Footer/>
//     </Router>
//   );
// }

// export default App;


import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppRouter from "./component/router/AppRouter";
import ScrollToTop from "./component/ScrollToTop";
import Navbar from "./component/navbar/Navbar";
import Footer from './component/footer/Footer';
import Login from "./pages/Login";
import Register from "./pages/Registration";
import Subscription from "./component/subscription/Subscription";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Standalone route for password reset - no navbar or footer */}
        <Route path="/reset-password" element={<ResetPassword />} />
        
        {/* All other routes with navbar and footer */}
        <Route path="*" element={
          <>
            <Navbar />
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
            </Routes>
            <AppRouter />
            <Subscription />
            <Footer />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;