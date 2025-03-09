import React, { useState, useEffect } from "react";
import "../component/Blog.css";
import blogImg1 from "../images/blog-img1.jpg";
import blogImg2 from "../images/blog-img2.jpg";
import PageTile from "../../pageTile/PageTile";
import axios from "axios";

const Blog = () => {
  const [blog, setBlog] = useState([]);
  // const blogs = [
  //   {
  //     id: 1,
  //     category: "Mindset",
  //     title: "Top psychology books for parents and children",
  //     date: "April 21, 2020",
  //     comments: 0,
  //     description: "Proin faucibus nec mauris a sodales, sed elementum mi tincidunt...",
  //     imgSrc: blogImg1,
  //   },
  //   {
  //     id: 2,
  //     category: "Mindset",
  //     title: "Top psychology books for parents and children",
  //     date: "April 21, 2020",
  //     comments: 0,
  //     description: "Proin faucibus nec mauris a sodales, sed elementum mi tincidunt...",
  //     imgSrc: blogImg1,
  //   },
  //   {
  //     id: 3,
  //     category: "Mindset",
  //     title: "Top psychology books for parents and children",
  //     date: "April 21, 2020",
  //     comments: 0,
  //     description: "Proin faucibus nec mauris a sodales, sed elementum mi tincidunt...",
  //     imgSrc: blogImg1,
  //   },
  // ];

  const popularPosts = [
    {
      id: 1,
      title: "5 Tips for a Healthy Lifestyle",
      date: "April 15, 2020",
      imgSrc: blogImg1,
    },
    {
      id: 2,
      title: "How to Stay Motivated",
      date: "April 10, 2020",
      imgSrc: blogImg1,
    },
    {
      id: 3,
      title: "Mastering the Art of Minimalism",
      date: "April 5, 2020",
      imgSrc: blogImg1,
    },
  ];

  const fetchBlog = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/user/blog/getAll`
      );
        const blogArray = Array.isArray(response.data?.data) ? response.data.data : [];
      console.log("response", response?.data?.data);

      // Check if response.data is an array or wrapped inside another object
      // const blogArray = Array.isArray(response.data)
      //   ? response.data
      //   : response.data?.data || [];
      // console.log(blogArray, "shhrreeee");

      // const formattedBlogs = blogArray.map((book) => ({
      //   ...book,
      //   id: book._id,
      //   image: book.image ? book.image.url : "" // Check if image exists // Ensure DataGrid has an id
      // }));

      const formattedBlogs = blogArray.map((blog) => ({
        id: blog._id,
        title: blog.title || "Untitled",
        description: blog.description || "No description available.",
        date: new Date(blog.date).toDateString(), // Format date
        category: blog.category || "Uncategorized",
        image: blog.image ? blog.image.url : blogImg1, // Use default image if missing
      }));
      console.log(formattedBlogs, "hellllll");

      setBlog(formattedBlogs);
      console.log(blog, "bloggggg");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlog();
    // console.log(book, "skjcskhc");
  }, []);

  return (
    <div className="container py-5">
      <div className="row">
        {/* Blog Cards */}
        <div className="col-lg-8">
          <div className="mb-4">
            {blog.map((blog) => (
              <div className="blog-card mb-4" key={blog.id}>
                <img src={blog.image || ""} alt="Blog" className="w-100" />
                <div className="blog-card-content">
                  <span className="head-blog text-white bg-danger">
                    {blog.blogDetail}
                  </span>
                  <h5>{blog.title}</h5>
                  <p className="text-muted">{blog.date}</p>
                  <p>{blog.description}</p>
                </div>
              </div>
            ))}
          </div>
          <nav>
            <ul className="pagination justify-content-center">
              <li className="page-item">
                <a className="page-link" href="#">
                  &laquo;
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  &raquo;
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Sidebar */}
        <div className="col-lg-4">
          <div className="mb-4">
            <h5>Search</h5>
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
            />
          </div>

          <div className="calendar mb-4">
            <div className="calendar-header">December 2024</div>
            <table className="calendar-table">
              <thead>
                <tr>
                  <th>Mon</th>
                  <th>Tue</th>
                  <th>Wed</th>
                  <th>Thu</th>
                  <th>Fri</th>
                  <th>Sat</th>
                  <th>Sun</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>7</td>
                  <td className="current-day">8</td>
                  <td>9</td>
                  <td>10</td>
                  <td>11</td>
                  <td>12</td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>14</td>
                  <td>15</td>
                  <td>16</td>
                  <td>17</td>
                  <td>18</td>
                  <td>19</td>
                </tr>
                <tr>
                  <td>20</td>
                  <td>21</td>
                  <td>22</td>
                  <td>23</td>
                  <td>24</td>
                  <td>25</td>
                  <td>26</td>
                </tr>
                <tr>
                  <td>27</td>
                  <td>28</td>
                  <td>29</td>
                  <td>30</td>
                  <td>31</td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4">
            <h5 className="border-bottom pb-2">POPULAR</h5>
            {popularPosts.map((post) => (
              <div className="popular-item" key={post.id}>
                <img src={post.imgSrc} alt="Popular" />
                <div>
                  <h6>{post.title}</h6>
                  <small>{post.date}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
