// import React, { useState, useEffect } from "react";
// import "../component/Blog.css";
// import blogImg1 from "../images/blog-img1.jpg";
// import blogImg2 from "../images/blog-img2.jpg";
// import PageTile from "../../pageTile/PageTile";
// import axios from "axios";

// const Blog = () => {
//   const [blog, setBlog] = useState([]);
//   // const blogs = [
//   //   {
//   //     id: 1,
//   //     category: "Mindset",
//   //     title: "Top psychology books for parents and children",
//   //     date: "April 21, 2020",
//   //     comments: 0,
//   //     description: "Proin faucibus nec mauris a sodales, sed elementum mi tincidunt...",
//   //     imgSrc: blogImg1,
//   //   },
//   //   {
//   //     id: 2,
//   //     category: "Mindset",
//   //     title: "Top psychology books for parents and children",
//   //     date: "April 21, 2020",
//   //     comments: 0,
//   //     description: "Proin faucibus nec mauris a sodales, sed elementum mi tincidunt...",
//   //     imgSrc: blogImg1,
//   //   },
//   //   {
//   //     id: 3,
//   //     category: "Mindset",
//   //     title: "Top psychology books for parents and children",
//   //     date: "April 21, 2020",
//   //     comments: 0,
//   //     description: "Proin faucibus nec mauris a sodales, sed elementum mi tincidunt...",
//   //     imgSrc: blogImg1,
//   //   },
//   // ];

//   const popularPosts = [
//     {
//       id: 1,
//       title: "5 Tips for a Healthy Lifestyle",
//       date: "April 15, 2020",
//       imgSrc: blogImg1,
//     },
//     {
//       id: 2,
//       title: "How to Stay Motivated",
//       date: "April 10, 2020",
//       imgSrc: blogImg1,
//     },
//     {
//       id: 3,
//       title: "Mastering the Art of Minimalism",
//       date: "April 5, 2020",
//       imgSrc: blogImg1,
//     },
//   ];

//   const fetchBlog = async () => {
//     try {
//       const response = await axios.get(
//         `${process.env.REACT_APP_BASE_URL}/user/blog/getAll`
//       );
//         const blogArray = Array.isArray(response.data?.data) ? response.data.data : [];
//       console.log("response", response?.data?.data);

//       // Check if response.data is an array or wrapped inside another object
//       // const blogArray = Array.isArray(response.data)
//       //   ? response.data
//       //   : response.data?.data || [];
//       // console.log(blogArray, "shhrreeee");

//       // const formattedBlogs = blogArray.map((book) => ({
//       //   ...book,
//       //   id: book._id,
//       //   image: book.image ? book.image.url : "" // Check if image exists // Ensure DataGrid has an id
//       // }));

//       const formattedBlogs = blogArray.map((blog) => ({
//         id: blog._id,
//         title: blog.title || "Untitled",
//         description: blog.description || "No description available.",
//         date: new Date(blog.date).toDateString(), // Format date
//         category: blog.category || "Uncategorized",
//         image: blog.image ? blog.image.url : blogImg1, // Use default image if missing
//       }));
//       console.log(formattedBlogs, "hellllll");

//       setBlog(formattedBlogs);
//       console.log(blog, "bloggggg");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchBlog();
//     // console.log(book, "skjcskhc");
//   }, []);

//   return (
//     <div className="container py-5">
//       <div className="row">
//         {/* Blog Cards */}
//         <div className="col-lg-8">
//           <div className="mb-4">
//             {blog.map((blog) => (
//               <div className="blog-card mb-4" key={blog.id}>
//                 <img src={blog.image || ""} alt="Blog" className="w-100" />
//                 <div className="blog-card-content">
//                   <span className="head-blog text-white bg-danger">
//                     {blog.blogDetail}
//                   </span>
//                   <h5>{blog.title}</h5>
//                   <p className="text-muted">{blog.date}</p>
//                   <p>{blog.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <nav>
//             <ul className="pagination justify-content-center">
//               <li className="page-item">
//                 <a className="page-link" href="#">
//                   &laquo;
//                 </a>
//               </li>
//               <li className="page-item active">
//                 <a className="page-link" href="#">
//                   1
//                 </a>
//               </li>
//               <li className="page-item">
//                 <a className="page-link" href="#">
//                   2
//                 </a>
//               </li>
//               <li className="page-item">
//                 <a className="page-link" href="#">
//                   &raquo;
//                 </a>
//               </li>
//             </ul>
//           </nav>
//         </div>

//         {/* Sidebar */}
//         <div className="col-lg-4">
//           <div className="mb-4">
//             <h5>Search</h5>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Search..."
//             />
//           </div>

//           <div className="calendar mb-4">
//             <div className="calendar-header">December 2024</div>
//             <table className="calendar-table">
//               <thead>
//                 <tr>
//                   <th>Mon</th>
//                   <th>Tue</th>
//                   <th>Wed</th>
//                   <th>Thu</th>
//                   <th>Fri</th>
//                   <th>Sat</th>
//                   <th>Sun</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td></td>
//                   <td></td>
//                   <td>1</td>
//                   <td>2</td>
//                   <td>3</td>
//                   <td>4</td>
//                   <td>5</td>
//                 </tr>
//                 <tr>
//                   <td>6</td>
//                   <td>7</td>
//                   <td className="current-day">8</td>
//                   <td>9</td>
//                   <td>10</td>
//                   <td>11</td>
//                   <td>12</td>
//                 </tr>
//                 <tr>
//                   <td>13</td>
//                   <td>14</td>
//                   <td>15</td>
//                   <td>16</td>
//                   <td>17</td>
//                   <td>18</td>
//                   <td>19</td>
//                 </tr>
//                 <tr>
//                   <td>20</td>
//                   <td>21</td>
//                   <td>22</td>
//                   <td>23</td>
//                   <td>24</td>
//                   <td>25</td>
//                   <td>26</td>
//                 </tr>
//                 <tr>
//                   <td>27</td>
//                   <td>28</td>
//                   <td>29</td>
//                   <td>30</td>
//                   <td>31</td>
//                   <td></td>
//                   <td></td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>

//           <div className="mt-4">
//             <h5 className="border-bottom pb-2">POPULAR</h5>
//             {popularPosts.map((post) => (
//               <div className="popular-item" key={post.id}>
//                 <img src={post.imgSrc} alt="Popular" />
//                 <div>
//                   <h6>{post.title}</h6>
//                   <small>{post.date}</small>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Blog;


// import React, { useState, useEffect } from "react";
// import "../component/Blog.css";
// import blogImg1 from "../images/blog-img1.jpg";
// import PageTile from "../../pageTile/PageTile";
// import axios from "axios";
// import { useNavigate } from "react-router-dom"; // Import useNavigate

// const Blog = () => {
//   const [blog, setBlog] = useState([]);
//   const navigate = useNavigate(); // Initialize the navigate hook

//   const popularPosts = [
//     {
//       id: 1,
//       title: "5 Tips for a Healthy Lifestyle",
//       date: "April 15, 2020",
//       imgSrc: blogImg1,
//     },
//     {
//       id: 2,
//       title: "How to Stay Motivated",
//       date: "April 10, 2020",
//       imgSrc: blogImg1,
//     },
//     {
//       id: 3,
//       title: "Mastering the Art of Minimalism",
//       date: "April 5, 2020",
//       imgSrc: blogImg1,
//     },
//   ];

//   const fetchBlog = async () => {
//     try {
//       const response = await axios.get(
//         `${process.env.REACT_APP_BASE_URL}/user/blog/getAll`
//       );
//       const blogArray = Array.isArray(response.data?.data) ? response.data.data : [];
//       console.log("response", response?.data?.data);

//       const formattedBlogs = blogArray.map((blog) => ({
//         id: blog._id,
//         title: blog.title || "Untitled",
//         description: blog.description || "No description available.",
//         blogDetail: blog.blogDetail || "",
//         date: new Date(blog.date).toDateString(), // Format date
//         category: blog.category || "Uncategorized",
//         image: blog.image ? blog.image.url : blogImg1, // Use default image if missing
//       }));
//       console.log(formattedBlogs, "formatted blogs");

//       setBlog(formattedBlogs);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // Function to handle redirecting to blog detail page
//   const handleBlogClick = (blogId) => {
//     navigate(`/blogdetail/${blogId}`); // Changed to /blogdetail/:id
//   };

//   useEffect(() => {
//     fetchBlog();
//   }, []);

//   return (
//     <div className="container py-5">
//       <div className="row">
//         {/* Blog Cards */}
//         <div className="col-lg-8">
//           <div className="mb-4">
//             {blog.map((blogItem) => (
//               <div 
//                 className="blog-card mb-4" 
//                 key={blogItem.id}
//                 onClick={() => handleBlogClick(blogItem.id)}
//                 style={{ cursor: 'pointer' }} // Add cursor pointer for better UX
//               >
//                 <img src={blogItem.image || ""} alt="Blog" className="w-100" />
//                 <div className="blog-card-content">
//                   <span className="head-blog text-white bg-danger">
//                     {blogItem.category}
//                   </span>
//                   <h5>{blogItem.title}</h5>
//                   <p className="text-muted">{blogItem.date}</p>
//                   <p>{blogItem.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <nav>
//             <ul className="pagination justify-content-center">
//               <li className="page-item">
//                 <a className="page-link" href="#">
//                   &laquo;
//                 </a>
//               </li>
//               <li className="page-item active">
//                 <a className="page-link" href="#">
//                   1
//                 </a>
//               </li>
//               <li className="page-item">
//                 <a className="page-link" href="#">
//                   2
//                 </a>
//               </li>
//               <li className="page-item">
//                 <a className="page-link" href="#">
//                   &raquo;
//                 </a>
//               </li>
//             </ul>
//           </nav>
//         </div>

//         {/* Sidebar */}
//         <div className="col-lg-4">
//           <div className="mb-4">
//             <h5>Search</h5>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Search..."
//             />
//           </div>

//           <div className="calendar mb-4">
//             <div className="calendar-header">December 2024</div>
//             <table className="calendar-table">
//               {/* Calendar content unchanged */}
//               <thead>
//                 <tr>
//                   <th>Mon</th>
//                   <th>Tue</th>
//                   <th>Wed</th>
//                   <th>Thu</th>
//                   <th>Fri</th>
//                   <th>Sat</th>
//                   <th>Sun</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {/* Calendar rows unchanged */}
//                 <tr>
//                   <td></td>
//                   <td></td>
//                   <td>1</td>
//                   <td>2</td>
//                   <td>3</td>
//                   <td>4</td>
//                   <td>5</td>
//                 </tr>
//                 {/* Other calendar rows */}
//               </tbody>
//             </table>
//           </div>

//           <div className="mt-4">
//             <h5 className="border-bottom pb-2">POPULAR</h5>
//             {popularPosts.map((post) => (
//               <div className="popular-item" key={post.id}>
//                 <img src={post.imgSrc} alt="Popular" />
//                 <div>
//                   <h6>{post.title}</h6>
//                   <small>{post.date}</small>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Blog;

import React, { useState, useEffect } from "react";
import "../component/Blog.css";
import blogImg1 from "../images/blog-img1.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const [blog, setBlog] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const navigate = useNavigate();

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

      const formattedBlogs = blogArray.map((blog) => ({
        id: blog._id,
        title: blog.title || "Untitled",
        description: blog.description || "No description available.",
        blogDetail: blog.blogDetail || "",
        date: new Date(blog.date), // Keep as Date object for filtering
        formattedDate: new Date(blog.date).toDateString(), // For display
        category: blog.category || "Uncategorized",
        image: blog.image ? blog.image.url : blogImg1,
      }));

      setBlog(formattedBlogs);
      setFilteredBlogs(formattedBlogs);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  // Calendar functions
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const handleDateClick = (day) => {
    if (day) {
      const newSelectedDate = new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth(),
        day
      );
      
      // Toggle date selection
      if (selectedDate && 
          selectedDate.getDate() === day && 
          selectedDate.getMonth() === currentMonth.getMonth() &&
          selectedDate.getFullYear() === currentMonth.getFullYear()) {
        setSelectedDate(null);
        setFilteredBlogs(searchTerm ? filterBlogsBySearch(blog, searchTerm) : blog);
      } else {
        setSelectedDate(newSelectedDate);
        filterBlogs(newSelectedDate, searchTerm);
      }
    }
  };

  // Search function
  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    if (selectedDate) {
      filterBlogs(selectedDate, term);
    } else {
      setFilteredBlogs(filterBlogsBySearch(blog, term));
    }
  };

  const filterBlogsBySearch = (blogs, term) => {
    if (!term) return blogs;
    return blogs.filter(
      blog => 
        blog.title.toLowerCase().includes(term.toLowerCase()) ||
        blog.description.toLowerCase().includes(term.toLowerCase()) ||
        blog.category.toLowerCase().includes(term.toLowerCase())
    );
  };

  const filterBlogs = (date, term) => {
    let filtered = blog;
    
    // Filter by date
    if (date) {
      filtered = filtered.filter(blog => 
        blog.date.getDate() === date.getDate() &&
        blog.date.getMonth() === date.getMonth() &&
        blog.date.getFullYear() === date.getFullYear()
      );
    }
    
    // Filter by search term
    if (term) {
      filtered = filterBlogsBySearch(filtered, term);
    }
    
    setFilteredBlogs(filtered);
  };

  const handleBlogClick = (blogId) => {
    navigate(`/blogdetail/${blogId}`);
  };

  // Generate calendar for current month
  const renderCalendar = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    const monthName = currentMonth.toLocaleString('default', { month: 'long' });
    
    // Adjust for Monday as first day (0 = Sunday, 1 = Monday, etc.)
    const adjustedFirstDay = firstDay === 0 ? 6 : firstDay - 1;
    
    const days = [];
    let dayCounter = 1;
    
    // Create weeks (up to 6 rows for a month)
    for (let i = 0; i < 6; i++) {
      const week = [];
      
      // Create days in a week
      for (let j = 0; j < 7; j++) {
        if ((i === 0 && j < adjustedFirstDay) || dayCounter > daysInMonth) {
          // Empty cell
          week.push(null);
        } else {
          // Check if any blog posts exist for this date
          const currentDate = new Date(year, month, dayCounter);
          const hasBlogs = blog.some(
            post => 
              post.date.getDate() === dayCounter &&
              post.date.getMonth() === month &&
              post.date.getFullYear() === year
          );
          
          // Check if this is the selected date
          const isSelected = selectedDate && 
            selectedDate.getDate() === dayCounter &&
            selectedDate.getMonth() === month &&
            selectedDate.getFullYear() === year;
            
          week.push({
            day: dayCounter,
            hasBlogs,
            isSelected
          });
          
          dayCounter++;
        }
      }
      
      days.push(week);
      
      // If we've added all days, break
      if (dayCounter > daysInMonth) break;
    }
    
    return (
      <div className="calendar mb-4">
        <div className="calendar-header d-flex justify-content-between align-items-center">
          <button 
            className="btn btn-sm btn-outline-secondary" 
            onClick={handlePrevMonth}
          >
            &laquo;
          </button>
          <div>{monthName} {year}</div>
          <button 
            className="btn btn-sm btn-outline-secondary" 
            onClick={handleNextMonth}
          >
            &raquo;
          </button>
        </div>
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
            {days.map((week, i) => (
              <tr key={i}>
                {week.map((dayData, j) => (
                  <td 
                    key={j} 
                    className={`
                      ${dayData ? 'calendar-day' : ''}
                      ${dayData?.hasBlogs ? 'has-blogs' : ''}
                      ${dayData?.isSelected ? 'selected' : ''}
                    `}
                    onClick={() => dayData && handleDateClick(dayData.day)}
                    style={{
                      cursor: dayData ? 'pointer' : 'default',
                    }}
                  >
                    {dayData?.day}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        {selectedDate && (
          <div className="mt-2 text-center">
            <small>
              Showing posts for: {selectedDate.toDateString()}
              <button 
                className="btn btn-sm btn-link" 
                onClick={() => {
                  setSelectedDate(null);
                  setFilteredBlogs(searchTerm ? filterBlogsBySearch(blog, searchTerm) : blog);
                }}
              >
                Clear
              </button>
            </small>
          </div>
        )}
      </div>
    );
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  return (
    <div className="container py-5">
      <div className="row">
        {/* Blog Cards */}
        <div className="col-lg-8">
          {filteredBlogs.length > 0 ? (
            <div className="mb-4">
              {filteredBlogs.map((blogItem) => (
                <div 
                  className="blog-card mb-4" 
                  key={blogItem.id}
                  onClick={() => handleBlogClick(blogItem.id)}
                  style={{ cursor: 'pointer' }}
                >
                  <img src={blogItem.image || ""} alt="Blog" className="w-100" />
                  <div className="blog-card-content">
                    <span className="head-blog text-white bg-danger">
                      {blogItem.category}
                    </span>
                    <h5>{blogItem.title}</h5>
                    <p className="text-muted">{blogItem.formattedDate}</p>
                    <p>{blogItem.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="alert alert-info">
              No blogs found for your current filters. Try a different date or search term.
            </div>
          )}
          
          {filteredBlogs.length > 0 && (
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
          )}
        </div>

        {/* Sidebar */}
        <div className="col-lg-4">
          <div className="mb-4">
            <h5>Search</h5>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search blogs..."
                value={searchTerm}
                onChange={handleSearch}
              />
              {searchTerm && (
                <div className="input-group-append">
                  <button 
                    className="btn btn-outline-secondary" 
                    type="button"
                    onClick={() => {
                      setSearchTerm("");
                      if (selectedDate) {
                        filterBlogs(selectedDate, "");
                      } else {
                        setFilteredBlogs(blog);
                      }
                    }}
                  >
                    Clear
                  </button>
                </div>
              )}
            </div>
            {searchTerm && (
              <small className="text-muted">
                Found {filteredBlogs.length} results for "{searchTerm}"
              </small>
            )}
          </div>

          {renderCalendar()}

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