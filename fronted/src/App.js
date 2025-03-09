import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppRouter from "./component/router/AppRouter";
import ScrollToTop from "./component/ScrollToTop";
import Navbar from "./component/navbar/Navbar";
import Footer from './component/footer/Footer'
// import BokInfo from "./component/Shop/component/BookInfo";
import Demo from './pages/Demo'
import Registration from "./pages/Registration";
import './App.css'
import Login from "./pages/Login";
import Register from "./pages/Registration";
// import FaqAccordion from "./component/FAQ/FAQ";
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <AppRouter />
      {/* <Registration /> */}
      {/* <Demo/> */}
      <Footer/>
    </Router>
  );
}

export default App;
