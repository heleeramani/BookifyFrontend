// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import "../style/BookInfo.css";
// import Button from "../../buttons/Button";
// import blogImg1 from "../../home/images/discover-book1.jpg";
// import Review from "../../review/Review";

// const BookInfo = () => {
//   const { id } = useParams();
//   const [book, setBook] = useState(null);
//   const [quantity, setQuantity] = useState(1);
//   const [loading, setLoading] = useState(true);
//   const [alerts, setAlerts] = useState({ open: false, message: "", severity: "" });
//   const [availableCopies, setAvailableCopies] = useState(null);

//   const fetchBook = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get(
//         `${process.env.REACT_APP_BASE_URL}/user/book/get/${id}`
//       );
      
//       const bookData = response.data?.data;
//       console.log("Fetched book:", bookData);

//       if (bookData) {
//         // Parse copies available as a number without default value
//         if (bookData.copiesAvailable !== undefined && bookData.copiesAvailable !== null) {
//           const copiesAvailable = parseInt(bookData.copiesAvailable, 10);
//           setAvailableCopies(copiesAvailable);
//         } else {
//           console.error("copiesAvailable is undefined or null in API response");
//           setAvailableCopies(0);
//         }
        
//         // Extract author name safely
//         let authorName = "Unknown";
//         if (bookData.author && typeof bookData.author === 'object') {
//           const firstName = bookData.author.firstName || '';
//           const lastName = bookData.author.lastName || '';
//           authorName = `${firstName} ${lastName}`.trim() || "Unknown";
//         }
        
//         setBook({
//           id: bookData._id,
//           title: bookData.title || "Untitled",
//           author: authorName, // Use the safely extracted author name
//           description: bookData.description || "No description available.",
//           isbn: bookData.isbn || "No ISBN available",
//           category: bookData.category?.name || "Uncategorized",
//           price: bookData.price ? `${bookData.price}` : "Price not available",
//           publishedYear: bookData.publishedYear || "Not available",
//           image: bookData.image?.url || blogImg1,
//           rating: bookData.rating || 0,
//         });
//       }
//     } catch (error) {
//       console.error("Error fetching book:", error);
//       setAlerts({
//         open: true,
//         message: "Failed to load book details",
//         severity: "error"
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Rest of your component remains the same...
  
//   const handlePurchase = async () => {
//     // Ensure we have the latest available copies
//     if (availableCopies === null || availableCopies === undefined) {
//       alert("Unable to determine book availability");
//       return;
//     }
    
//     // Check available copies
//     if (availableCopies <= 0) {
//       alert("This book is currently out of stock");
//       return;
//     }
    
//     // Validate quantity
//     if (quantity > availableCopies) {
//       alert(`Only ${availableCopies} copies available. Please reduce quantity.`);
//       return;
//     }
    
//     setLoading(true);
//     try {
//       const authToken = localStorage.getItem("authToken");
        
//       if (!authToken) {
//         setAlerts({
//           open: true,
//           message: "Please log in to purchase books",
//           severity: "warning"
//         });
//         setLoading(false);
//         return;
//       }

//       const response = await axios.post(
//         `${process.env.REACT_APP_BASE_URL}/user/purchase/initiate`,
//         {
//           bookId: book.id,
//           quantity: quantity,
//         },{
//           headers:{
//             Authorization: authToken,
//             'Content-Type': 'application/json',
//           }
//         }
//       );

//       const { data } = response;

//       if (data?.data?.order && data.data.order.amount>0) {
//         const options = {
//           key: process.env.REACT_APP_RAZORPAY_KEY,
//           amount: data.data.order.amount * 100,
//           currency: "INR",
//           name: "My Bookstore",
//           description: `Payment for ${book.title}`,
//           order_id: data.data.order.razorpayOrderId,
//           handler: async function (response) {
//             try {
//               // Verify Payment
//               const verifyResponse = await axios.post(
//                 `${process.env.REACT_APP_BASE_URL}/user/payment/verify`,
//                 {
//                   orderId: data?.data.order._id,
//                   razorayPaymentId: response.razorpay_payment_id,
//                 },{
//                   headers:{
//                     Authorization: authToken,
//                     'Content-Type': 'application/json',
//                   }
//                 }
//               );

//               if (verifyResponse.data.success) {
//                 alert("Payment Successful and Verified!");
//                 // Update available copies optimistically
//                 setAvailableCopies(prev => prev - quantity);
//                 // Then refresh actual data
//                 fetchBook(); 
//               } else {
//                 alert("Payment Verification Failed!");
//               }
//             } catch (error) {
//               console.error("Verification Error:", error);
//               alert("Payment verification failed!");
//             } finally {
//               setLoading(false);
//             }
//           },
//           prefill: {
//             name: "John Doe",
//             email: "john.doe@example.com",
//             contact: "9876543210",
//           },
//           theme: {
//             color: "#3399cc",
//           },
//         };

//         const razorpay = new window.Razorpay(options);
//         razorpay.open();
//       }else if(data?.data?.order && data.data.order.amount==0){
//         alert("You got free book because you have Subscription");
//       } else {
//         alert("Purchase completed successfully without payment.");
//         // Update available copies optimistically
//         setAvailableCopies(prev => prev - quantity);
//         // Then refresh actual data
//         fetchBook(); 
//       }
//     } catch (error) {
//       console.error("Error initiating purchase:", error);
//       alert("Failed to initiate purchase. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleBorrow = async () => {
//     // Ensure we have the latest available copies
//     if (availableCopies === null || availableCopies === undefined) {
//       alert("Unable to determine book availability");
//       return;
//     }
    
//     // Check available copies
//     if (availableCopies <= 0) {
//       alert("This book is currently unavailable for borrowing");
//       return;
//     }
    
//     setLoading(true);
//     try {
//       const authToken = localStorage.getItem("authToken");
        
//       if (!authToken) {
//         setAlerts({
//           open: true,
//           message: "Please log in to borrow books",
//           severity: "warning"
//         });
//         setLoading(false);
//         return;
//       }

//       const response = await axios.post(
//         `${process.env.REACT_APP_BASE_URL}/user/borrow/initiate`,
//         {
//           bookId: book.id,
//         },{
//           headers:{
//             Authorization: authToken,
//             'Content-Type': 'application/json',
//           }
//         }
//       );

//       const { data } = response;
//       console.log(data.data,"datataaaa");

//       if (data?.data?.order) {
//         console.log("dsgud");
        
//         const options = {
//           key: process.env.REACT_APP_RAZORPAY_KEY,
//           amount: data.data.order.amount * 100, // Amount in paisa
//           currency: "INR",
//           name: "Library Management",
//           description: `Borrowing Fee for ${book.title}`,
//           order_id: data.data.order.razorpayOrderId,
//           handler: async function (response) {
//             try {
//               console.log("------verification process start-----");
              
//               const verifyResponse = await axios.post(
//                 `${process.env.REACT_APP_BASE_URL}/user/payment/verify`,
//                 {
//                   orderId: data?.data.order._id,
//                   razorayPaymentId: response.razorpay_payment_id,
//                 },{
//                   headers:{
//                     Authorization: authToken,
//                     'Content-Type': 'application/json',
//                   }
//                 }
//               );

//               if (verifyResponse.data.success) {
//                 alert("Payment Successful! Book borrowed successfully.");
//                 // Update available copies optimistically
//                 setAvailableCopies(prev => prev - 1);
//                 // Then refresh actual data
//                 fetchBook();
//               } else {
//                 alert("Payment Verification Failed! Please try again.");
//               }
//             } catch (error) {
//               console.error("Payment Verification Error:", error);
//               alert("Payment verification failed. Please try again.");
//             } finally {
//               setLoading(false);
//             }
//           },
//           prefill: {
//             name: "John Doe",
//             email: "john.doe@example.com",
//             contact: "9876543210",
//           },
//           theme: {
//             color: "#3399cc",
//           },
//         };

//         const razorpay = new window.Razorpay(options);
//         razorpay.open();
//       } else {
//         alert("Failed to initiate borrowing process. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error initiating borrow process:", error);
//       alert("Failed to borrow the book. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchBook();
//   }, [id]);

//   if (loading && !book) {
//     return <h2>Loading book details...</h2>;
//   }

//   return (
//     <div className="bookinfo-main-section1">
//       <div className="bookinfo-container">
//         <div className="bookinfo-image-section">
//           <img src={book.image} alt={book.title} />
//         </div>

//         <div className="bookinfo-details-section">
//           <h1>{book.title}</h1>
//           <div className="bookinfo-author">
//             Author: <span>{book.author}</span>
//           </div>
//           <div className="bookinfo-price">{book.price}</div>
//           <p>{book.description}</p>
          
//           <div className="bookinfo-quantity-buy">
//             <input
//               type="number"
//               min="1"
//               max={availableCopies > 0 ? availableCopies : 1}
//               className="bookinfo-input-change"
//               value={quantity}
//               onChange={(e) => {
//                 const newValue = parseInt(e.target.value, 10);
//                 // Ensure quantity doesn't exceed available copies
//                 if (newValue <= availableCopies) {
//                   setQuantity(newValue);
//                 } else {
//                   setQuantity(availableCopies);
//                   alert(`Maximum available copies: ${availableCopies}`);
//                 }
//               }}
//               disabled={loading || availableCopies <= 0}
//             />
//             <Button 
//               title={loading ? "Processing..." : "Buy Now"} 
//               onClick={handlePurchase} 
//               disabled={loading || availableCopies <= 0}
//             />
//             <Button 
//               title={loading ? "Processing..." : "Borrow Now"} 
//               onClick={handleBorrow}
//               disabled={loading || availableCopies <= 0}
//             />
//           </div>
          
//           {/* Display out of stock message if needed */}
//           {!loading && availableCopies <= 0 && (
//             <div className="out-of-stock-message" style={{ 
//               color: 'red', 
//               fontWeight: 'bold', 
//               marginTop: '10px',
//               padding: '10px',
//               border: '1px solid red',
//               borderRadius: '4px',
//               backgroundColor: '#ffeeee'
//             }}>
//               <p>This book is currently out of stock.</p>
//             </div>
//           )}
          
//           {/* Display alerts if any */}
//           {alerts.open && (
//             <div className="alert-message" style={{
//               marginTop: '10px',
//               padding: '10px',
//               border: `1px solid ${alerts.severity === 'error' ? 'red' : 'orange'}`,
//               borderRadius: '4px',
//               backgroundColor: alerts.severity === 'error' ? '#ffeeee' : '#fff8ee',
//               color: alerts.severity === 'error' ? 'red' : 'orange'
//             }}>
//               <p>{alerts.message}</p>
//             </div>
//           )}
//         </div>
//       </div>
//       <Review bId={book.id} />
//     </div>
//   );
// };

// export default BookInfo;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../style/BookInfo.css";
import Button from "../../buttons/Button";
import blogImg1 from "../../home/images/discover-book1.jpg";
import Review from "../../review/Review";
import Payment from "../../payment/Payment"; 

const BookInfo = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [alerts, setAlerts] = useState({ open: false, message: "", severity: "" });
  const [availableCopies, setAvailableCopies] = useState(null);
  // Add new state for invoice/payment
  const [showInvoice, setShowInvoice] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState(null);

  const fetchBook = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/user/book/get/${id}`
      );
      
      const bookData = response.data?.data;
      console.log("Fetched book:", bookData);

      if (bookData) {
        // Parse copies available as a number without default value
        if (bookData.copiesAvailable !== undefined && bookData.copiesAvailable !== null) {
          const copiesAvailable = parseInt(bookData.copiesAvailable, 10);
          setAvailableCopies(copiesAvailable);
        } else {
          console.error("copiesAvailable is undefined or null in API response");
          setAvailableCopies(0);
        }
        
        // Extract author name safely
        let authorName = "Unknown";
        if (bookData.author && typeof bookData.author === 'object') {
          const firstName = bookData.author.firstName || '';
          const lastName = bookData.author.lastName || '';
          authorName = `${firstName} ${lastName}`.trim() || "Unknown";
        }
        
        setBook({
          id: bookData._id,
          title: bookData.title || "Untitled",
          author: authorName, // Use the safely extracted author name
          description: bookData.description || "No description available.",
          isbn: bookData.isbn || "No ISBN available",
          category: bookData.category?.name || "Uncategorized",
          price: bookData.price ? `${bookData.price}` : "Price not available",
          publishedYear: bookData.publishedYear || "Not available",
          image: bookData.image?.url || blogImg1,
          rating: bookData.rating || 0,
        });
      }
    } catch (error) {
      console.error("Error fetching book:", error);
      setAlerts({
        open: true,
        message: "Failed to load book details",
        severity: "error"
      });
    } finally {
      setLoading(false);
    }
  };
  
  const handlePurchase = async () => {
    // Ensure we have the latest available copies
    if (availableCopies === null || availableCopies === undefined) {
      alert("Unable to determine book availability");
      return;
    }
    
    // Check available copies
    if (availableCopies <= 0) {
      alert("This book is currently out of stock");
      return;
    }
    
    // Validate quantity
    if (quantity > availableCopies) {
      alert(`Only ${availableCopies} copies available. Please reduce quantity.`);
      return;
    }
    
    setLoading(true);
    try {
      const authToken = localStorage.getItem("authToken");
        
      if (!authToken) {
        setAlerts({
          open: true,
          message: "Please log in to purchase books",
          severity: "warning"
        });
        setLoading(false);
        return;
      }

      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/user/purchase/initiate`,
        {
          bookId: book.id,
          quantity: quantity,
        },{
          headers:{
            Authorization: authToken,
            'Content-Type': 'application/json',
          }
        }
      );

      const { data } = response;

      if (data?.data?.order && data.data.order.amount > 0) {
        const options = {
          key: process.env.REACT_APP_RAZORPAY_KEY,
          amount: data.data.order.amount * 100,
          currency: "INR",
          name: "My Bookstore",
          description: `Payment for ${book.title}`,
          order_id: data.data.order.razorpayOrderId,
          handler: async function (response) {
            try {
              // Verify Payment
              const verifyResponse = await axios.post(
                `${process.env.REACT_APP_BASE_URL}/user/payment/verify`,
                {
                  orderId: data?.data.order._id,
                  razorayPaymentId: response.razorpay_payment_id,
                },{
                  headers:{
                    Authorization: authToken,
                    'Content-Type': 'application/json',
                  }
                }
              );

              if (verifyResponse.data.success) {
                // Set payment details for invoice
                setPaymentDetails({
                  orderId: data.data.order._id,
                  razorpayOrderId: data.data.order.razorpayOrderId,
                  razorpayPaymentId: response.razorpay_payment_id,
                  amount: data.data.order.amount,
                  bookTitle: book.title,
                  bookAuthor: book.author,
                  quantity: quantity,
                  date: new Date().toISOString(),
                  type: 'purchase'
                });
                // Show invoice
                setShowInvoice(true);
                
                // Update available copies optimistically
                setAvailableCopies(prev => prev - quantity);
                // Then refresh actual data
                fetchBook(); 
              } else {
                alert("Payment Verification Failed!");
              }
            } catch (error) {
              console.error("Verification Error:", error);
              alert("Payment verification failed!");
            } finally {
              setLoading(false);
            }
          },
          prefill: {
            name: "John Doe",
            email: "john.doe@example.com",
            contact: "9876543210",
          },
          theme: {
            color: "#3399cc",
          },
        };

        const razorpay = new window.Razorpay(options);
        razorpay.open();
      } else if(data?.data?.order && data.data.order.amount == 0) {
        // Set payment details for free book (subscription case)
        setPaymentDetails({
          orderId: data.data.order._id,
          amount: 0,
          bookTitle: book.title,
          bookAuthor: book.author,
          quantity: quantity,
          date: new Date().toISOString(),
          type: 'purchase',
          freeReason: 'Subscription'
        });
        // Show invoice for free book
        setShowInvoice(true);
        alert("You got free book because you have Subscription");
        
        // Update available copies optimistically
        setAvailableCopies(prev => prev - quantity);
        // Then refresh actual data
        fetchBook();
      } else {
        alert("Purchase completed successfully without payment.");
        // Update available copies optimistically
        setAvailableCopies(prev => prev - quantity);
        // Then refresh actual data
        fetchBook(); 
      }
    } catch (error) {
      console.error("Error initiating purchase:", error);
      alert("Failed to initiate purchase. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleBorrow = async () => {
    // Ensure we have the latest available copies
    if (availableCopies === null || availableCopies === undefined) {
      alert("Unable to determine book availability");
      return;
    }
    
    // Check available copies
    if (availableCopies <= 0) {
      alert("This book is currently unavailable for borrowing");
      return;
    }
    
    setLoading(true);
    try {
      const authToken = localStorage.getItem("authToken");
        
      if (!authToken) {
        setAlerts({
          open: true,
          message: "Please log in to borrow books",
          severity: "warning"
        });
        setLoading(false);
        return;
      }

      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/user/borrow/initiate`,
        {
          bookId: book.id,
        },{
          headers:{
            Authorization: authToken,
            'Content-Type': 'application/json',
          }
        }
      );

      const { data } = response;
      console.log(data.data,"datataaaa");

      if (data?.data?.order) {
        console.log("dsgud");
        
        const options = {
          key: process.env.REACT_APP_RAZORPAY_KEY,
          amount: data.data.order.amount * 100, // Amount in paisa
          currency: "INR",
          name: "Library Management",
          description: `Borrowing Fee for ${book.title}`,
          order_id: data.data.order.razorpayOrderId,
          handler: async function (response) {
            try {
              console.log("------verification process start-----");
              
              const verifyResponse = await axios.post(
                `${process.env.REACT_APP_BASE_URL}/user/payment/verify`,
                {
                  orderId: data?.data.order._id,
                  razorayPaymentId: response.razorpay_payment_id,
                },{
                  headers:{
                    Authorization: authToken,
                    'Content-Type': 'application/json',
                  }
                }
              );

              if (verifyResponse.data.success) {
                // Set payment details for invoice
                setPaymentDetails({
                  orderId: data.data.order._id,
                  razorpayOrderId: data.data.order.razorpayOrderId,
                  razorpayPaymentId: response.razorpay_payment_id,
                  amount: data.data.order.amount,
                  bookTitle: book.title,
                  bookAuthor: book.author,
                  quantity: 1, // Always 1 for borrowing
                  date: new Date().toISOString(),
                  type: 'borrow',
                  dueDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString() // 14 days from now
                });
                // Show invoice
                setShowInvoice(true);
                
                alert("Payment Successful! Book borrowed successfully.");
                // Update available copies optimistically
                setAvailableCopies(prev => prev - 1);
                // Then refresh actual data
                fetchBook();
              } else {
                alert("Payment Verification Failed! Please try again.");
              }
            } catch (error) {
              console.error("Payment Verification Error:", error);
              alert("Payment verification failed. Please try again.");
            } finally {
              setLoading(false);
            }
          },
          prefill: {
            name: "John Doe",
            email: "john.doe@example.com",
            contact: "9876543210",
          },
          theme: {
            color: "#3399cc",
          },
        };

        const razorpay = new window.Razorpay(options);
        razorpay.open();
      } else {
        alert("Failed to initiate borrowing process. Please try again.");
      }
    } catch (error) {
      console.error("Error initiating borrow process:", error);
      alert("Failed to borrow the book. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Handle closing the invoice display
  const handleCloseInvoice = () => {
    setShowInvoice(false);
    setPaymentDetails(null);
  };

  useEffect(() => {
    fetchBook();
  }, [id]);

  if (loading && !book) {
    return <h2>Loading book details...</h2>;
  }

  // Show Payment component with invoice if payment is done
  if (showInvoice && paymentDetails) {
    return <Payment paymentDetails={paymentDetails} onClose={handleCloseInvoice} />;
  }

  return (
    <div className="bookinfo-main-section1">
      <div className="bookinfo-container">
        <div className="bookinfo-image-section">
          <img src={book.image} alt={book.title} />
        </div>

        <div className="bookinfo-details-section">
          <h1>{book.title}</h1>
          <div className="bookinfo-author">
            Author: <span>{book.author}</span>
          </div>
          <div className="bookinfo-price">{book.price}</div>
          <p>{book.description}</p>
          
          <div className="bookinfo-quantity-buy">
            <input
              type="number"
              min="1"
              max={availableCopies > 0 ? availableCopies : 1}
              className="bookinfo-input-change"
              value={quantity}
              onChange={(e) => {
                const newValue = parseInt(e.target.value, 10);
                // Ensure quantity doesn't exceed available copies
                if (newValue <= availableCopies) {
                  setQuantity(newValue);
                } else {
                  setQuantity(availableCopies);
                  alert(`Maximum available copies: ${availableCopies}`);
                }
              }}
              disabled={loading || availableCopies <= 0}
            />
            <Button 
              title={loading ? "Processing..." : "Buy Now"} 
              onClick={handlePurchase} 
              disabled={loading || availableCopies <= 0}
            />
            <Button 
              title={loading ? "Processing..." : "Borrow Now"} 
              onClick={handleBorrow}
              disabled={loading || availableCopies <= 0}
            />
          </div>
          
          {/* Display out of stock message if needed */}
          {!loading && availableCopies <= 0 && (
            <div className="out-of-stock-message" style={{ 
              color: 'red', 
              fontWeight: 'bold', 
              marginTop: '10px',
              padding: '10px',
              border: '1px solid red',
              borderRadius: '4px',
              backgroundColor: '#ffeeee'
            }}>
              <p>This book is currently out of stock.</p>
            </div>
          )}
          
          {/* Display alerts if any */}
          {alerts.open && (
            <div className="alert-message" style={{
              marginTop: '10px',
              padding: '10px',
              border: `1px solid ${alerts.severity === 'error' ? 'red' : 'orange'}`,
              borderRadius: '4px',
              backgroundColor: alerts.severity === 'error' ? '#ffeeee' : '#fff8ee',
              color: alerts.severity === 'error' ? 'red' : 'orange'
            }}>
              <p>{alerts.message}</p>
            </div>
          )}
        </div>
      </div>
      <Review bId={book.id} />
    </div>
  );
};

export default BookInfo;