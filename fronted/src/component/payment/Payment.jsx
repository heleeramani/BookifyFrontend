// // LibraryInvoice.jsx
// import React, { useState, useEffect } from 'react';
// import { jsPDF } from 'jspdf';
// import 'jspdf-autotable';  // This import adds the autotable plugin to jsPDF
// import './Payment.css';

// const Payment = () => {
//   const [invoiceNumber, setInvoiceNumber] = useState('');
  
//   // Sample data - replace with your actual data in a real app
//   const paymentData = {
//     id: 'PAY-123456',
//     date: new Date(),
//     method: 'Credit Card',
//     status: 'PAID',
//     amount: 75.00
//   };
  
//   const libraryInfo = {
//     name: 'City Public Library',
//     address: '123 Book Street, Reading, CA 90210',
//     phone: '(555) 123-4567',
//     email: 'info@citylibrary.com'
//   };
  
//   const userInfo = {
//     id: 'USR-789',
//     name: 'John Smith',
//     email: 'john.smith@example.com',
//     phone: '(555) 987-6543'
//   };
  
//   const transactionItems = [
//     {
//       id: 'BOOK-001',
//       title: 'Annual Membership Fee',
//       description: 'Library membership for 1 year',
//       quantity: 1,
//       price: 50.00
//     },
//     {
//       id: 'FEE-001',
//       title: 'Late Return Fee',
//       description: 'Late return of "The Great Gatsby"',
//       quantity: 1,
//       price: 5.00
//     },
//     {
//       id: 'PRINT-001',
//       title: 'Printing Services',
//       description: 'Black and white prints',
//       quantity: 20,
//       price: 0.10
//     }
//   ];

//   useEffect(() => {
//     // Generate a simple invoice number
//     const timestamp = new Date().getTime();
//     setInvoiceNumber(`INV-${timestamp.toString().slice(-6)}`);
//   }, []);

//   // Format date to DD/MM/YYYY
//   const formatDate = (date) => {
//     const d = new Date(date);
//     return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
//   };

//   // Calculate totals
//   const calculateSubtotal = () => {
//     return transactionItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
//   };
  
//   const calculateTax = () => {
//     return calculateSubtotal() * 0.1;
//   };
  
//   const calculateTotal = () => {
//     return calculateSubtotal() + calculateTax();
//   };

//   // Function to generate and download PDF without using autoTable
//   const downloadInvoice = () => {
//     // Create a new PDF document
//     const doc = new jsPDF();
    
//     // Add header
//     doc.setFontSize(20);
//     doc.text(libraryInfo.name, 105, 20, { align: 'center' });
    
//     // Library & invoice details
//     doc.setFontSize(12);
//     doc.text(`Invoice #: ${invoiceNumber}`, 15, 40);
//     doc.text(`Date: ${formatDate(paymentData.date)}`, 15, 45);
//     doc.text(`Payment Method: ${paymentData.method}`, 15, 50);
    
//     // Customer details
//     doc.text('Billed To:', 130, 40);
//     doc.text(`${userInfo.name}`, 130, 45);
//     doc.text(`${userInfo.email}`, 130, 50);
    
//     // Manual table creation instead of autoTable
//     let y = 70;
    
//     // Table header
//     doc.setFillColor(240, 240, 240);
//     doc.rect(15, y, 180, 10, 'F');
//     doc.setFont('helvetica', 'bold');
//     doc.text('Item', 20, y + 7);
//     doc.text('Description', 60, y + 7);
//     doc.text('Qty', 110, y + 7);
//     doc.text('Price', 130, y + 7);
//     doc.text('Total', 160, y + 7);
//     doc.setFont('helvetica', 'normal');
    
//     // Table rows
//     y += 10;
//     transactionItems.forEach((item, index) => {
//       if (y > 250) {
//         doc.addPage();
//         y = 20;
//       }
      
//       doc.text(item.title, 20, y + 7);
//       doc.text(item.description, 60, y + 7);
//       doc.text(item.quantity.toString(), 110, y + 7);
//       doc.text(`$${item.price.toFixed(2)}`, 130, y + 7);
//       doc.text(`$${(item.price * item.quantity).toFixed(2)}`, 160, y + 7);
      
//       // Add a light background for even rows
//       if (index % 2 === 0) {
//         doc.setFillColor(249, 249, 249);
//         doc.rect(15, y, 180, 10, 'F');
//       }
      
//       y += 10;
//     });
    
//     // Draw horizontal line under the table
//     doc.line(15, y, 195, y);
//     y += 10;
    
//     // Add totals
//     doc.text(`Subtotal:`, 140, y + 5);
//     doc.text(`$${calculateSubtotal().toFixed(2)}`, 170, y + 5);
    
//     y += 7;
//     doc.text(`Tax (10%):`, 140, y + 5);
//     doc.text(`$${calculateTax().toFixed(2)}`, 170, y + 5);
    
//     y += 7;
//     doc.setFont('helvetica', 'bold');
//     doc.text(`Total:`, 140, y + 5);
//     doc.text(`$${calculateTotal().toFixed(2)}`, 170, y + 5);
//     doc.setFont('helvetica', 'normal');
    
//     // Add payment status
//     doc.setTextColor(0, 128, 0);
//     doc.text(`Payment Status: ${paymentData.status}`, 15, y + 5);
//     doc.setTextColor(0, 0, 0);
    
//     // Add footer
//     y += 20;
//     doc.setFontSize(10);
//     doc.text('Thank you for your business!', 105, y, { align: 'center' });
    
//     // Save the PDF
//     doc.save(`Invoice-${invoiceNumber}.pdf`);
//   };

//   return (
//     <div className="invoice-container">
//       <div className="invoice-header">
//         <h1>Library Invoice</h1>
//         <button onClick={downloadInvoice} className="download-button">
//           Download Invoice
//         </button>
//       </div>
      
//       <div className="invoice-card">
//         <div className="invoice-top">
//           <div className="library-info">
//             <h2>{libraryInfo.name}</h2>
//             <p>{libraryInfo.address}</p>
//           </div>
//           <div className="invoice-details">
//             <h3>Invoice #{invoiceNumber}</h3>
//             <p>Date: {formatDate(paymentData.date)}</p>
//             <p>Payment Method: {paymentData.method}</p>
//           </div>
//         </div>
        
//         <div className="customer-section">
//           <h3>Billed To:</h3>
//           <p>{userInfo.name}</p>
//           <p>{userInfo.email}</p>
//           <p>{userInfo.phone}</p>
//         </div>
        
//         <table className="invoice-table">
//           <thead>
//             <tr>
//               <th>Item</th>
//               <th>Description</th>
//               <th>Qty</th>
//               <th>Price</th>
//               <th>Total</th>
//             </tr>
//           </thead>
//           <tbody>
//             {transactionItems.map((item, index) => (
//               <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
//                 <td>{item.title}</td>
//                 <td>{item.description}</td>
//                 <td>{item.quantity}</td>
//                 <td>${item.price.toFixed(2)}</td>
//                 <td>${(item.price * item.quantity).toFixed(2)}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
        
//         <div className="totals-section">
//           <div className="total-row">
//             <span>Subtotal:</span>
//             <span>${calculateSubtotal().toFixed(2)}</span>
//           </div>
//           <div className="total-row">
//             <span>Tax (10%):</span>
//             <span>${calculateTax().toFixed(2)}</span>
//           </div>
//           <div className="total-row total-bold">
//             <span>Total:</span>
//             <span>${calculateTotal().toFixed(2)}</span>
//           </div>
          
//           <div className="payment-status">
//             Payment Status: <span className="paid-status">{paymentData.status}</span>
//           </div>
//         </div>
        
//         <div className="invoice-footer">
//           <p>Thank you for your business!</p>
//           <p>For questions or concerns, please contact {libraryInfo.email}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Payment;

import React, { useState, useEffect } from 'react';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';  // This import adds the autotable plugin to jsPDF
import axios from 'axios';  // Make sure to import axios
import './Payment.css';

const Payment = ({ paymentDetails, onClose }) => {
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [purchaseData, setPurchaseData] = useState(null);
  
  // Convert paymentDetails to library and user info
  const libraryInfo = {
    name: 'My Bookstore',
    address: '123 Book Street, Reading, CA 90210',
    phone: '(555) 123-4567',
    email: 'info@mybookstore.com'
  };
  
  const userInfo = {
    id: 'USR-789',
    name: localStorage.getItem('userName') || 'User',
    email: localStorage.getItem('userEmail') || 'user@example.com',
    phone: '(555) 987-6543'
  };

  useEffect(() => {
    // Generate a simple invoice number
    const timestamp = new Date().getTime();
    setInvoiceNumber(`INV-${timestamp.toString().slice(-6)}`);
    
    // If we have purchase/order ID, fetch the details
    if (paymentDetails && paymentDetails.orderId) {
      fetchPurchaseDetails(paymentDetails.orderId);
    }
  }, [paymentDetails]);

  // Fetch purchase details from API
  const fetchPurchaseDetails = async (purchaseId) => {
    setLoading(true);
    try {
      const authToken = localStorage.getItem("authToken");
      
      if (!authToken) {
        console.error("No auth token available");
        return;
      }
      
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/user/purchase/get/${purchaseId}`,
        {
          headers: {
            Authorization: authToken,
            'Content-Type': 'application/json',
          }
        }
      );
      
      if (response.data && response.data.data) {
        console.log("Purchase data fetched:", response.data.data);
        setPurchaseData(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching purchase details:", error);
    } finally {
      setLoading(false);
    }
  };

  // Format date to DD/MM/YYYY
  const formatDate = (date) => {
    const d = new Date(date);
    return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
  };

  // Create transaction items based on paymentDetails or API data
  const getTransactionItems = () => {
    if (purchaseData && purchaseData.book) {
      // Use API data if available
      return [{
        id: purchaseData.book._id || 'BOOK-ID',
        title: purchaseData.book.title || 'Book',
        description: purchaseData.book.author ? 
          `Author: ${typeof purchaseData.book.author === 'object' ? 
            `${purchaseData.book.author.firstName || ''} ${purchaseData.book.author.lastName || ''}`.trim() : 
            purchaseData.book.author}` : 
          'Author information not available',
        quantity: purchaseData.quantity || 1,
        price: purchaseData.amountPaid || 0
      }];
    } else if (paymentDetails) {
      // Fallback to passed payment details
      return [{
        id: 'BOOK-001',
        title: paymentDetails.bookTitle || 'Book Purchase',
        description: `Author: ${paymentDetails.bookAuthor || 'Unknown'}`,
        quantity: paymentDetails.quantity || 1,
        price: paymentDetails.amount / paymentDetails.quantity || 0
      }];
    }
    
    // Default empty array if no data
    return [];
  };

  // Calculate totals
  const calculateSubtotal = () => {
    const items = getTransactionItems();
    return items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };
  
  const calculateTax = () => {
    return 0; // Assuming no tax for books
  };
  
  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax();
  };

  // Function to generate and download PDF
  const downloadInvoice = () => {
    // Create a new PDF document
    const doc = new jsPDF();
    
    // Add header
    doc.setFontSize(20);
    doc.text(libraryInfo.name, 105, 20, { align: 'center' });
    
    // Library & invoice details
    doc.setFontSize(12);
    doc.text(`Invoice #: ${invoiceNumber}`, 15, 40);
    doc.text(`Date: ${formatDate(paymentDetails?.date || new Date())}`, 15, 45);
    doc.text(`Payment Method: ${paymentDetails?.razorpayPaymentId ? 'Online Payment' : 'Free (Subscription)'}`, 15, 50);
    
    // Customer details
    doc.text('Billed To:', 130, 40);
    doc.text(`${userInfo.name}`, 130, 45);
    doc.text(`${userInfo.email}`, 130, 50);
    
    // Table content using autoTable
    const tableColumn = ["Item", "Description", "Qty", "Price", "Total"];
    const tableRows = getTransactionItems().map(item => [
      item.title,
      item.description,
      item.quantity,
      `₹${item.price.toFixed(2)}`,
      `₹${(item.price * item.quantity).toFixed(2)}`
    ]);
    
    // Add table to document
    doc.autoTable({
      startY: 70,
      head: [tableColumn],
      body: tableRows,
      theme: 'striped',
      headStyles: { fillColor: [80, 80, 80] }
    });
    
    // Get the final y position after the table
    const finalY = doc.previousAutoTable.finalY + 10;
    
    // Add totals
    doc.text(`Subtotal:`, 140, finalY + 10);
    doc.text(`₹${calculateSubtotal().toFixed(2)}`, 170, finalY + 10);
    
    doc.text(`Tax:`, 140, finalY + 20);
    doc.text(`₹${calculateTax().toFixed(2)}`, 170, finalY + 20);
    
    doc.setFont('helvetica', 'bold');
    doc.text(`Total:`, 140, finalY + 30);
    doc.text(`₹${calculateTotal().toFixed(2)}`, 170, finalY + 30);
    doc.setFont('helvetica', 'normal');
    
    // Add payment status
    doc.setTextColor(0, 128, 0);
    doc.text(`Payment Status: PAID`, 15, finalY + 20);
    doc.setTextColor(0, 0, 0);
    
    // If it's a borrowed book, add return date
    if (paymentDetails?.type === 'borrow' && paymentDetails?.dueDate) {
      doc.text(`Return Due Date: ${formatDate(paymentDetails.dueDate)}`, 15, finalY + 30);
    }
    
    // Add footer
    doc.setFontSize(10);
    doc.text('Thank you for your purchase!', 105, finalY + 50, { align: 'center' });
    
    // Save the PDF
    doc.save(`Invoice-${invoiceNumber}.pdf`);
  };

  if (loading) {
    return <div className="loading-message">Loading payment details...</div>;
  }

  return (
    <div className="invoice-container">
      <div className="invoice-header">
        <h1>{paymentDetails?.type === 'borrow' ? 'Borrowing Receipt' : 'Purchase Invoice'}</h1>
        <div className="header-buttons">
          <button onClick={downloadInvoice} className="download-button">
            Download Invoice
          </button>
          {onClose && (
            <button onClick={onClose} className="close-button">
              Close
            </button>
          )}
        </div>
      </div>
      
      <div className="invoice-card">
        <div className="invoice-top">
          <div className="library-info">
            <h2>{libraryInfo.name}</h2>
            <p>{libraryInfo.address}</p>
          </div>
          <div className="invoice-details">
            <h3>Invoice #{invoiceNumber}</h3>
            <p>Date: {formatDate(paymentDetails?.date || new Date())}</p>
            <p>Payment Method: {paymentDetails?.razorpayPaymentId ? 'Online Payment' : 'Free (Subscription)'}</p>
            {paymentDetails?.razorpayOrderId && (
              <p>Order ID: {paymentDetails.razorpayOrderId}</p>
            )}
          </div>
        </div>
        
        <div className="customer-section">
          <h3>Billed To:</h3>
          <p>{userInfo.name}</p>
          <p>{userInfo.email}</p>
        </div>
        
        <table className="invoice-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Description</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {getTransactionItems().map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>{item.quantity}</td>
                <td>₹{item.price.toFixed(2)}</td>
                <td>₹{(item.price * item.quantity).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        
        <div className="totals-section">
          <div className="total-row">
            <span>Subtotal:</span>
            <span>₹{calculateSubtotal().toFixed(2)}</span>
          </div>
          <div className="total-row">
            <span>Tax:</span>
            <span>₹{calculateTax().toFixed(2)}</span>
          </div>
          <div className="total-row total-bold">
            <span>Total:</span>
            <span>₹{calculateTotal().toFixed(2)}</span>
          </div>
          
          <div className="payment-status">
            Payment Status: <span className="paid-status">PAID</span>
          </div>
          
          {paymentDetails?.type === 'borrow' && paymentDetails?.dueDate && (
            <div className="due-date">
              Return Due Date: <span>{formatDate(paymentDetails.dueDate)}</span>
            </div>
          )}
        </div>
        
        <div className="invoice-footer">
          <p>Thank you for your {paymentDetails?.type === 'borrow' ? 'borrowing' : 'purchase'}!</p>
          <p>For questions or concerns, please contact {libraryInfo.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Payment;