import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Blog from "../blog/component/Blog";
import ContactUs from "../../pages/MainContactUs";
import MainBlog from "../../pages/MainBlog";
import BookInfo from "../Shop/component/BookInfo";
import BookCategory from "../home/component/BookCategory";
// import Login from "../../pages/Login";
// import Registration from "../../pages/Registration";
// import Demo from "../../pages/Demo";
import ShopList from "../Shop/component/ShopList";
import Author from "../about/component/Author";
import Profile from "../navbar/Profile";
import DiscoverBook from "../home/component/DiscoverBook";
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<MainBlog />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/store" element={<DiscoverBook />} />
      <Route path="/author" element={<Author />} />
      {/* <Route path="/book-info/:bookId" element={<BookInfo />} /> */}
      <Route path="/profile" element={<Profile />} />

      <Route path="/" element={<DiscoverBook />} />
        <Route path="/book-info/:id" element={<BookInfo />} />
      {/* <Route path="/login" element={<Login />} /> */}
      {/* <Route path="/register" element={<Registration />} /> */}
    </Routes>
  );
};

export default AppRouter;
