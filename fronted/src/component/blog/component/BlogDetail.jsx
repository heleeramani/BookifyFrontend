// // // // import React from "react";
// // // // import "./BlogDetail.css";

// // // // const BlogDetail = () => {
// // // //   return (
// // // //     <div>
// // // //       {/* Hero Section */}
// // // //       <div className="hero">
// // // //         <div className="hero-content">
// // // //           <span className="category">Modern</span>
// // // //           <h1>What's the main challenge for a young author?</h1>
// // // //           <p className="meta">By John Doe • April 5, 2023</p>
// // // //         </div>
// // // //       </div>

// // // //       {/* Blog Content */}
// // // //       <div className="blog-container">
// // // //         <div className="blog-content">
// // // //           <p>
// // // //             <span className="quote">Q</span> This is a placeholder text for the
// // // //             blog content. It talks about the challenges faced by young authors
// // // //             and how they overcome them.
// // // //           </p>
// // // //           <p>
// // // //             Being a young writer can be difficult, especially with the pressure
// // // //             of meeting industry standards and developing a unique writing style.
// // // //             However, with persistence and passion, success is achievable.
// // // //           </p>
// // // //           <h2>At vero eos et accusam</h2>
// // // //           <p>
// // // //             Writing takes practice, and sometimes young authors feel discouraged
// // // //             due to lack of recognition. However, staying consistent and seeking
// // // //             constructive feedback is key to improvement.
// // // //           </p>
// // // //         </div>
// // // //       </div>

// // // //       {/* Images */}
// // // //       <div className="image-container">
// // // //         <img src="../images/blog-img1.jpg" alt="Woman Reading Book" />
// // // //         <img src="../images/blog-img1.jpg" alt="Woman Reading in Red Dress" />
// // // //       </div>

// // // //       {/* Quote Section */}
// // // //       <div className="content">
// // // //         <p>
// // // //           <strong>Q</strong> Lorem ipsum dolor sit amet, consectetur adipiscing
// // // //           elit.
// // // //         </p>
// // // //         <p>Donec volutpat lorem a lacus tincidunt, non sagittis velit cursus.</p>
// // // //         <div className="quote-box">
// // // //           <p>
// // // //             "One of the main challenges is time management. Aspiring authors
// // // //             often find it hard to balance work, life, and creativity!"
// // // //           </p>
// // // //         </div>
// // // //         <p>Morbi fringilla pharetra nunc, eu malesuada purus tempus non.</p>
// // // //       </div>

// // // //       {/* Blog Image & Content */}
// // // //       <div className="blog-container">
// // // //         <img src="../images/blog-img1.jpg" alt="Woman Reading a Book" className="blog-image" />
// // // //         <div className="blog-content">
// // // //           <p>
// // // //             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut
// // // //             ligula sed lectus feugiat ornare.{" "}
// // // //             <span className="highlight">Reading books</span> is an immersive
// // // //             experience that takes us into different worlds.
// // // //           </p>
// // // //         </div>
// // // //       </div>

// // // //       {/* Comments Section */}
// // // //       <div className="comment-container">
// // // //         <h2>Comments</h2>
// // // //         <div className="comment">
// // // //           <img src="../images/blog-img1.jpg" alt="User" />
// // // //           <div className="comment-content">
// // // //             <h4>Anna Moore</h4>
// // // //             <p>Amazing post! I totally resonate with this. Thanks for sharing.</p>
// // // //           </div>
// // // //         </div>

// // // //         {/* Comment Form */}
// // // //         <div className="comment-form">
// // // //           <h3>Leave a Comment</h3>
// // // //           <form>
// // // //             <input type="text" name="name" placeholder="Your Name" required />
// // // //             <input type="email" name="email" placeholder="Your Email" required />
// // // //             <textarea name="message" placeholder="Write your comment..." required></textarea>
// // // //             <button type="submit" className="submit-btn">
// // // //               Leave a Comment
// // // //             </button>
// // // //           </form>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default BlogDetail;


// // // import React, { useState, useEffect } from "react";
// // // import { useParams } from "react-router-dom";
// // // import axios from "axios";
// // // import blogImg1 from "../images/blog-img1.jpg"; // Import default image
// // // import "./BlogDetail.css"; // You'll need to create this CSS file

// // // const BlogDetail = () => {
// // //   const { id } = useParams(); // Get the blog ID from URL params
// // //   const [blogDetail, setBlogDetail] = useState(null);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState(null);

// // //   useEffect(() => {
// // //     const fetchBlogDetail = async () => {
// // //       try {
// // //         setLoading(true);
// // //         const response = await axios.get(
// // //           `${process.env.REACT_APP_BASE_URL}/user/blog/${id}`
// // //         );
        
// // //         // Format the blog data
// // //         const blog = response.data.data;
// // //         const formattedBlog = {
// // //           id: blog._id,
// // //           title: blog.title || "Untitled",
// // //           description: blog.description || "No description available.",
// // //           blogDetail: blog.blogDetail || "",
// // //           date: new Date(blog.date).toLocaleDateString('en-US', {
// // //             year: 'numeric',
// // //             month: 'long', 
// // //             day: 'numeric'
// // //           }),
// // //           category: blog.category || "Uncategorized",
// // //           image: blog.image ? blog.image.url : blogImg1,
// // //         };
        
// // //         setBlogDetail(formattedBlog);
// // //         setLoading(false);
// // //       } catch (error) {
// // //         console.error("Error fetching blog detail:", error);
// // //         setError("Failed to load blog details");
// // //         setLoading(false);
// // //       }
// // //     };

// // //     if (id) {
// // //       fetchBlogDetail();
// // //     }
// // //   }, [id]);

// // //   if (loading) {
// // //     return (
// // //       <div className="container py-5 text-center">
// // //         <div className="spinner-border" role="status">
// // //           <span className="visually-hidden">Loading...</span>
// // //         </div>
// // //       </div>
// // //     );
// // //   }

// // //   if (error) {
// // //     return (
// // //       <div className="container py-5">
// // //         <div className="alert alert-danger">{error}</div>
// // //       </div>
// // //     );
// // //   }

// // //   if (!blogDetail) {
// // //     return (
// // //       <div className="container py-5">
// // //         <div className="alert alert-warning">Blog post not found</div>
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div className="container py-5">
// // //       <div className="blog-detail-container">
// // //         <div className="blog-header">
// // //           <h1 className="blog-title">{blogDetail.title}</h1>
// // //           <div className="blog-meta">
// // //             <span className="blog-date">{blogDetail.date}</span>
// // //             <span className="blog-category badge bg-danger">{blogDetail.category}</span>
// // //           </div>
// // //         </div>

// // //         <div className="blog-image-container">
// // //           <img 
// // //             src={blogDetail.image} 
// // //             alt={blogDetail.title} 
// // //             className="blog-detail-image"
// // //           />
// // //         </div>

// // //         <div className="blog-content">
// // //           <p className="blog-description">{blogDetail.description}</p>
          
// // //           <div className="blog-full-content">
// // //             {/* Render the full blog content */}
// // //             <p>{blogDetail.blogDetail}</p>
// // //           </div>
// // //         </div>

// // //         <div className="blog-footer mt-5">
// // //           <div className="blog-share">
// // //             <h5>Share this post</h5>
// // //             <div className="social-icons">
// // //               {/* You can add social media share buttons here */}
// // //               <button className="btn btn-sm btn-outline-primary me-2">Facebook</button>
// // //               <button className="btn btn-sm btn-outline-info me-2">Twitter</button>
// // //               <button className="btn btn-sm btn-outline-danger">Pinterest</button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default BlogDetail;

// // // import React, { useState, useEffect } from "react";
// // // import { useParams } from "react-router-dom";
// // // import axios from "axios";
// // // import blogImg1 from "../images/blog-img1.jpg"; // Import default image
// // // import "./BlogDetail.css"; 

// // // const BlogDetail = () => {
// // //   const { id } = useParams(); // Get the blog ID from URL params
// // //   const [blogDetail, setBlogDetail] = useState(null);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState(null);

// // //   useEffect(() => {
// // //     const fetchBlogDetail = async () => {
// // //       try {
// // //         setLoading(true);
// // //         console.log(`${process.env.REACT_APP_BASE_URL}/user/blog/getAll/${id}`, "wjedkfn");
        
// // //         const response = await axios.get(
// // //           `${process.env.REACT_APP_BASE_URL}/user/blog/get/${id}`
// // //         );
        
// // //         // Format the blog data
// // //         const blog = response.data.data;
// // //         const formattedBlog = {
// // //           id: blog._id,
// // //           title: blog.title || "Untitled",
// // //           description: blog.description || "No description available.",
// // //           blogDetail: blog.blogDetail || "",
// // //           date: new Date(blog.date).toLocaleDateString('en-US', {
// // //             year: 'numeric',
// // //             month: 'long', 
// // //             day: 'numeric'
// // //           }),
// // //           category: blog.category || "Uncategorized",
// // //           image: blog.image ? blog.image.url : blogImg1,
// // //         };
        
// // //         setBlogDetail(formattedBlog);
// // //         setLoading(false);
// // //       } catch (error) {
// // //         console.error("Error fetching blog detail:", error);
// // //         setError("Failed to load blog details");
// // //         setLoading(false);
// // //       }
// // //     };

// // //     if (id) {
// // //       fetchBlogDetail();
// // //     }
// // //   }, [id]);

// // //   if (loading) {
// // //     return (
// // //       <div className="container py-5 text-center">
// // //         <div className="spinner-border" role="status">
// // //           <span className="visually-hidden">Loading...</span>
// // //         </div>
// // //       </div>
// // //     );
// // //   }

// // //   if (error) {
// // //     return (
// // //       <div className="container py-5">
// // //         <div className="alert alert-danger">{error}</div>
// // //       </div>
// // //     );
// // //   }

// // //   if (!blogDetail) {
// // //     return (
// // //       <div className="container py-5">
// // //         <div className="alert alert-warning">Blog post not found</div>
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div className="container py-5">
// // //       <div className="blog-detail-container">
// // //         <div className="blog-header">
// // //           <h1 className="blog-title">{blogDetail.title}</h1>
// // //           <div className="blog-meta">
// // //             <span className="blog-date">{blogDetail.date}</span>
// // //             <span className="blog-category badge bg-danger">{blogDetail.category}</span>
// // //           </div>
// // //         </div>

// // //         <div className="blog-image-container">
// // //           <img 
// // //             src={blogDetail.image} 
// // //             alt={blogDetail.title} 
// // //             className="blog-detail-image"
// // //           />
// // //         </div>

// // //         <div className="blog-content">
// // //           <p className="blog-description">{blogDetail.description}</p>
          
// // //           <div className="blog-full-content">
// // //             {/* Render the full blog content */}
// // //             <p>{blogDetail.blogDetail}</p>
// // //           </div>
// // //         </div>

// // //         <div className="blog-footer mt-5">
// // //           <div className="blog-share">
// // //             <h5>Share this post</h5>
// // //             <div className="social-icons">
// // //               {/* You can add social media share buttons here */}
// // //               <button className="btn btn-sm btn-outline-primary me-2">Facebook</button>
// // //               <button className="btn btn-sm btn-outline-info me-2">Twitter</button>
// // //               <button className="btn btn-sm btn-outline-danger">Pinterest</button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default BlogDetail;


// // import React, { useState, useEffect } from "react";
// // import { useParams } from "react-router-dom";
// // import axios from "axios";
// // import blogImg1 from "../images/blog-img1.jpg"; // Import default image
// // import "./BlogDetail.css"; 

// // const BlogDetail = () => {
// //   const { id } = useParams(); // Get the blog ID from URL params
// //   const [blogDetail, setBlogDetail] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     const fetchBlogDetail = async () => {
// //       try {
// //         setLoading(true);
// //         const response = await axios.get(
// //           `${process.env.REACT_APP_BASE_URL}/user/blog/get/${id}`
// //         );
        
// //         // Format the blog data based on the new response structure
// //         const blog = response.data.data[0]; // Access first item in data array
// //         const formattedBlog = {
// //           id: blog._id,
// //           title: blog.title || "Untitled",
// //           description: blog.description || "No description available.",
// //           // Handle blogDetail as an array
// //           blogDetail: Array.isArray(blog.blogDetail) 
// //             ? blog.blogDetail.join('\n\n') 
// //             : blog.blogDetail || "",
// //           date: new Date(blog.date).toLocaleDateString('en-US', {
// //             year: 'numeric',
// //             month: 'long', 
// //             day: 'numeric'
// //           }),
// //           category: blog.category || "Book Reviews", // Added a default category
// //           image: blogImg1, // Use default image since no image in response
// //         };
        
// //         setBlogDetail(formattedBlog);
// //         setLoading(false);
// //       } catch (error) {
// //         console.error("Error fetching blog detail:", error);
// //         setError("Failed to load blog details");
// //         setLoading(false);
// //       }
// //     };

// //     if (id) {
// //       fetchBlogDetail();
// //     }
// //   }, [id]);

// //   if (loading) {
// //     return (
// //       <div className="container py-5 text-center">
// //         <div className="spinner-border" role="status">
// //           <span className="visually-hidden">Loading...</span>
// //         </div>
// //       </div>
// //     );
// //   }

// //   if (error) {
// //     return (
// //       <div className="container py-5">
// //         <div className="alert alert-danger">{error}</div>
// //       </div>
// //     );
// //   }

// //   if (!blogDetail) {
// //     return (
// //       <div className="container py-5">
// //         <div className="alert alert-warning">Blog post not found</div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="container py-5">
// //       <div className="blog-detail-container">
// //         <div className="blog-header">
// //           <h1 className="blog-title">{blogDetail.title}</h1>
// //           <div className="blog-meta">
// //             <span className="blog-date">{blogDetail.date}</span>
// //             <span className="blog-category badge bg-danger">{blogDetail.category}</span>
// //           </div>
// //         </div>

// //         <div className="blog-image-container">
// //           <img 
// //             src={blogDetail.image} 
// //             alt={blogDetail.title} 
// //             className="blog-detail-image"
// //           />
// //         </div>

// //         <div className="blog-content">
// //           <p className="blog-description">{blogDetail.description}</p>
          
// //           <div className="blog-full-content">
// //             {/* Render the full blog content */}
// //             <p>{blogDetail.blogDetail}</p>
// //           </div>
// //         </div>

// //         <div className="blog-footer mt-5">
// //           <div className="blog-share">
// //             <h5>Share this post</h5>
// //             <div className="social-icons">
// //               <button className="btn btn-sm btn-outline-primary me-2">Facebook</button>
// //               <button className="btn btn-sm btn-outline-info me-2">Twitter</button>
// //               <button className="btn btn-sm btn-outline-danger">Pinterest</button>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default BlogDetail;


// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import blogImg1 from "../images/blog-img1.jpg"; // Import default image
// import "./BlogDetail.css"; 

// const BlogDetail = () => {
//   const { id } = useParams();
//   const [blogDetail, setBlogDetail] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchBlogDetail = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(
//           `${process.env.REACT_APP_BASE_URL}/user/blog/get/${id}`
//         );
        
//         // Get the first blog from the data array
//         const blog = response.data.data[0];
        
//         const formattedBlog = {
//           // Base fields from the response
//           id: blog._id,
//           title: blog.title || "Untitled",
//           description: blog.description || "No description available.",
          
//           // Handle blogDetail as paragraphs
//           blogDetail: Array.isArray(blog.blogDetail) 
//             ? blog.blogDetail.map((paragraph, index) => (
//               <p key={index}>{paragraph}</p>
//             ))
//             : blog.blogDetail || "",
          
//           // Date formatting
//           date: new Date(blog.date).toLocaleDateString('en-US', {
//             year: 'numeric',
//             month: 'long', 
//             day: 'numeric'
//           }),
          
//           // Additional metadata
//           createdAt: new Date(blog.createdAt).toLocaleString('en-US', {
//             year: 'numeric',
//             month: 'long', 
//             day: 'numeric',
//             hour: '2-digit',
//             minute: '2-digit'
//           }),
//           updatedAt: new Date(blog.updatedAt).toLocaleString('en-US', {
//             year: 'numeric',
//             month: 'long', 
//             day: 'numeric',
//             hour: '2-digit',
//             minute: '2-digit'
//           }),
          
//           // Version field
//           version: blog.__v || 0,
          
//           // Default image
//           image: blogImg1
//         };
        
//         setBlogDetail(formattedBlog);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching blog detail:", error);
//         setError("Failed to load blog details");
//         setLoading(false);
//       }
//     };

//     if (id) {
//       fetchBlogDetail();
//     }
//   }, [id]);

//   if (loading) {
//     return (
//       <div className="container py-5 text-center">
//         <div className="spinner-border" role="status">
//           <span className="visually-hidden">Loading...</span>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="container py-5">
//         <div className="alert alert-danger">{error}</div>
//       </div>
//     );
//   }

//   if (!blogDetail) {
//     return (
//       <div className="container py-5">
//         <div className="alert alert-warning">Blog post not found</div>
//       </div>
//     );
//   }

//   return (
//     <div className="container py-5">
//       <div className="blog-detail-container">
//         <div className="blog-header">
//           <h1 className="blog-title">{blogDetail.title}</h1>
//           <div className="blog-meta">
//             <span className="blog-date">Published: {blogDetail.date}</span>
//             <span className="blog-version ms-3">Version: {blogDetail.version}</span>
//           </div>
//         </div>

//         <div className="blog-image-container">
//           <img 
//             src={blogDetail.image} 
//             alt={blogDetail.title} 
//             className="blog-detail-image"
//           />
//         </div>

//         <div className="blog-content">
//           <p className="blog-description">{blogDetail.description}</p>
          
//           <div className="blog-full-content">
//             {blogDetail.blogDetail}
//           </div>
//         </div>

//         <div className="blog-footer mt-5">
//           <div className="additional-metadata">
//             <p>Created At: {blogDetail.createdAt}</p>
//             <p>Last Updated: {blogDetail.updatedAt}</p>
//           </div>

//           <div className="blog-share">
//             <h5>Share this post</h5>
//             <div className="social-icons">
//               <button className="btn btn-sm btn-outline-primary me-2">Facebook</button>
//               <button className="btn btn-sm btn-outline-info me-2">Twitter</button>
//               <button className="btn btn-sm btn-outline-danger">Pinterest</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogDetail;

// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import "./BlogDetail.css"; 

// const BlogDetail = () => {
//   const { id } = useParams();
//   const [blogDetail, setBlogDetail] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchBlogDetail = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(
//           `${process.env.REACT_APP_BASE_URL}/user/blog/get/${id}`
//         );
        
//         // Get the first blog from the data array
//         const blog = response.data.data[0];
        
//         const formattedBlog = {
//           // Base fields from the response
//           id: blog._id,
//           title: blog.title || "Untitled",
//           description: blog.description || "No description available.",
          
//           // Handle blogDetail as paragraphs
//           blogDetail: Array.isArray(blog.blogDetail) 
//             ? blog.blogDetail.map((paragraph, index) => (
//               <p key={index}>{paragraph}</p>
//             ))
//             : blog.blogDetail || "",
          
//           // Date formatting
//           date: new Date(blog.date).toLocaleDateString('en-US', {
//             year: 'numeric',
//             month: 'long', 
//             day: 'numeric'
//           }),
          
//           // Additional metadata
//           createdAt: new Date(blog.createdAt).toLocaleString('en-US', {
//             year: 'numeric',
//             month: 'long', 
//             day: 'numeric',
//             hour: '2-digit',
//             minute: '2-digit'
//           }),
//           updatedAt: new Date(blog.updatedAt).toLocaleString('en-US', {
//             year: 'numeric',
//             month: 'long', 
//             day: 'numeric',
//             hour: '2-digit',
//             minute: '2-digit'
//           }),
          
//           // Version field
//           version: blog.__v || 0,
          
//           // Image handling
//           image: blog.image?.url || null
//         };
        
//         setBlogDetail(formattedBlog);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching blog detail:", error);
//         setError("Failed to load blog details");
//         setLoading(false);
//       }
//     };

//     if (id) {
//       fetchBlogDetail();
//     }
//   }, [id]);

//   if (loading) {
//     return (
//       <div className="container py-5 text-center">
//         <div className="spinner-border" role="status">
//           <span className="visually-hidden">Loading...</span>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="container py-5">
//         <div className="alert alert-danger">{error}</div>
//       </div>
//     );
//   }

//   if (!blogDetail) {
//     return (
//       <div className="container py-5">
//         <div className="alert alert-warning">Blog post not found</div>
//       </div>
//     );
//   }

//   return (
//     <div className="container py-5">
//       <div className="blog-detail-container">
//         <div className="blog-header">
//           <h1 className="blog-title">{blogDetail.title}</h1>
//           <div className="blog-meta">
//             <span className="blog-date">Published: {blogDetail.date}</span>
//             <span className="blog-version ms-3">Version: {blogDetail.version}</span>
//           </div>
//         </div>

//         {blogDetail.image && (
//           <div className="blog-image-container">
//             <img 
//               src={blogDetail.image} 
//               alt={blogDetail.title} 
//               className="blog-detail-image img-fluid"
//             />
//           </div>
//         )}

//         <div className="blog-content">
//           <p className="blog-description">{blogDetail.description}</p>
          
//           <div className="blog-full-content">
//             {blogDetail.blogDetail}
//           </div>
//         </div>

//         <div className="blog-footer mt-5">
//           <div className="additional-metadata">
//             <p>Created At: {blogDetail.createdAt}</p>
//             <p>Last Updated: {blogDetail.updatedAt}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogDetail;  


import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./BlogDetail.css"; 

const BlogDetail = () => {
  const { id } = useParams();
  const [blogDetail, setBlogDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogDetail = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/user/blog/get/${id}`
        );
        
        const blog = response.data.data[0];
        
        const formattedBlog = {
          id: blog._id,
          title: blog.title || "Untitled",
          description: blog.description || "No description available.",
          
          blogDetail: Array.isArray(blog.blogDetail) 
            ? blog.blogDetail.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))
            : blog.blogDetail || "",
          
          date: new Date(blog.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long', 
            day: 'numeric'
          }),
          
          createdAt: new Date(blog.createdAt).toLocaleString('en-US', {
            year: 'numeric',
            month: 'long', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          }),
          
          updatedAt: new Date(blog.updatedAt).toLocaleString('en-US', {
            year: 'numeric',
            month: 'long', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          }),
          
          version: blog.__v || 0,
          image: blog.image?.url || null
        };
        
        setBlogDetail(formattedBlog);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog detail:", error);
        setError("Failed to load blog details");
        setLoading(false);
      }
    };

    if (id) {
      fetchBlogDetail();
    }
  }, [id]);

  const renderLoadingState = () => (
    <div className="container py-5 text-center">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );

  const renderErrorState = () => (
    <div className="container py-5">
      <div className="alert alert-danger">
        {error}
        <div className="mt-3">
          <Link to="/blogs" className="btn btn-primary">
            Back to Blogs
          </Link>
        </div>
      </div>
    </div>
  );

  const renderNotFoundState = () => (
    <div className="container py-5">
      <div className="alert alert-warning">
        Blog post not found
        <div className="mt-3">
          <Link to="/blogs" className="btn btn-secondary">
            Return to Blog List
          </Link>
        </div>
      </div>
    </div>
  );

  if (loading) return renderLoadingState();
  if (error) return renderErrorState();
  if (!blogDetail) return renderNotFoundState();

  return (
    <div className="containerrr py-5">
      <div className="blog-detail-container">
        <div className="blog-header">
          <h1 className="blog-title">{blogDetail.title}</h1>
          <div className="blog-meta">
            <span className="blog-date">Published: {blogDetail.date}</span>
            <span className="blog-version ms-3">Version: {blogDetail.version}</span>
          </div>
        </div>

        {blogDetail.image && (
          <div className="blog-image-container">
            <img 
              src={blogDetail.image} 
              alt={blogDetail.title} 
              className="blog-detail-image img-fluid"
            />
          </div>
        )}

        <div className="blog-content">
          <p className="blog-description">{blogDetail.description}</p>
          
          <div className="blog-full-content">
            {blogDetail.blogDetail}
          </div>
        </div>

        <div className="blog-footer mt-5">
          <div className="additional-metadata">
            <p>Created At: {blogDetail.createdAt}</p>
            <p>Last Updated: {blogDetail.updatedAt}</p>
          </div>
          <div className="navigation-links mt-3">
            <Link to="/blog" className="btn btn-outline-secondary me-2">
              Back to Blogs
            </Link>
            <button 
              onClick={() => window.print()} 
              className="btn btn-outline-primary"
            >
              Print Blog
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;