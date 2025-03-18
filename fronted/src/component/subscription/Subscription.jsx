// import React from 'react';
// import './Subscription.css';

// const Subscription = () => {
//   return (
//     <div className="pricing-page">
//       <div className="pricing-container">
//         {/* Free Plan */}
//         <div className="card">
//           <div className="card-header free">Silver</div>
//           <div className="price">1000</div>
//           <div className="desc">GREAT FOR STARTERS</div>
//           <div className="subtext">Discover how to create your first projects.</div>
//           <a href="#" className="btn">GET STARTED</a>
//           <ul className="pricing-list">
//             <li className="pricing-list-item"><span className="check">✔</span>3 new projects / month</li>
//             <li className="pricing-list-item"><span className="cross">✘</span>Basic interaction</li>
//             <li className="pricing-list-item"><span className="cross">✘</span>Assets library</li>
//           </ul>
//         </div>

//         {/* Lite Plan */}
//         <div className="card lite">
//           <div className="card-header lite">Gold</div>
//           <div className="price">2000<span style={{ fontSize: '14px' }}> /mo</span></div>
//           <div className="desc">FOR PLANNED PROJECTS</div>
//           <div className="subtext">Bring your designs to the next level and export them.</div>
//           <a href="#" className="btn">GET STARTED</a>
//           <ul className="pricing-list">
//             <li className="pricing-list-item"><span className="check">✔</span>3 new projects / month</li>
//             <li className="pricing-list-item"><span className="check">✔</span>Basic interaction</li>
//             <li className="pricing-list-item"><span className="check">✔</span>Assets library</li>
//           </ul>
//         </div>

//         {/* Pro Plan */}
//         <div className="card">
//           <div className="card-header pro">Platinum</div>
//           <div className="price">5000<span style={{ fontSize: '14px' }}> /mo</span></div>
//           <div className="desc">FOR PROFESSIONAL USE</div>
//           <div className="subtext">Enjoy limitless use with interactive export options.</div>
//           <a href="#" className="btn">GET STARTED</a>
//           <ul className="pricing-list">
//             <li className="pricing-list-item"><span className="check">✔</span>3 new projects / month</li>
//             <li className="pricing-list-item"><span className="check">✔</span>Basic interaction</li>
//             <li className="pricing-list-item"><span className="check">✔</span>Assets library</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Subscription;


import React from 'react';

const Subscription = () => {
  // Define CSS styles inline
  const styles = {
    pricingPage: {
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f9fbff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
    },
    pricingContainer: {
      display: 'flex',
      gap: '20px',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    card: {
      background: '#ffffff',
      borderRadius: '10px',
      boxShadow: '0 5px 20px rgba(0, 0, 0, 0.05)',
      padding: '30px',
      width: '300px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    cardHeaderBase: {
      width: '100%',
      padding: '10px 0',
      textAlign: 'center',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      borderRadius: '5px 5px 0 0',
    },
    cardHeaderFree: {
      background: '#f8f9fb',
      color: '#333',
      width: '100%',
      padding: '10px 0',
      textAlign: 'center',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      borderRadius: '5px 5px 0 0',
    },
    cardHeaderLite: {
      background: 'linear-gradient(90deg, #b383ff, #ff82d7)',
      color: '#fff',
      width: '100%',
      padding: '10px 0',
      textAlign: 'center',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      borderRadius: '5px 5px 0 0',
    },
    cardHeaderPro: {
      background: 'linear-gradient(90deg, #ff9a7c, #ffd17c)',
      color: '#fff',
      width: '100%',
      padding: '10px 0',
      textAlign: 'center',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      borderRadius: '5px 5px 0 0',
    },
    price: {
      fontSize: '2.5rem',
      margin: '20px 0 10px',
      color: '#2e2e4d',
    },
    desc: {
      color: '#555',
      fontWeight: 'bold',
      marginBottom: '10px',
      textAlign: 'center',
    },
    subtext: {
      color: '#777',
      fontSize: '14px',
      textAlign: 'center',
      marginBottom: '20px',
    },
    button: {
      display: 'inline-block',
      padding: '10px 20px',
      marginBottom: '20px',
      borderRadius: '5px',
      textDecoration: 'none',
      textAlign: 'center',
      fontWeight: 'bold',
      border: '1px solid #2e2e4d',
      color: '#2e2e4d',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
    },
    cardLite: {
      background: '#ffffff',
      borderRadius: '10px',
      boxShadow: '0 5px 20px rgba(0, 0, 0, 0.05)',
      padding: '30px',
      width: '300px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    buttonLite: {
      display: 'inline-block',
      padding: '10px 20px',
      marginBottom: '20px',
      borderRadius: '5px',
      textDecoration: 'none',
      textAlign: 'center',
      fontWeight: 'bold',
      background: '#2e2e4d',
      color: '#fff',
      border: 'none',
      cursor: 'pointer',
    },
    pricingList: {
      listStyle: 'none',
      width: '100%',
    },
    pricingListItem: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '10px',
      fontSize: '14px',
    },
    check: {
      color: 'green',
      marginRight: '10px',
    },
    cross: {
      color: 'red',
      marginRight: '10px',
    },
  };

  return (
    <div style={styles.pricingPage}>
      <div style={styles.pricingContainer}>
        {/* Silver Plan */}
        <div style={styles.card}>
          <div style={styles.cardHeaderFree}>SILVER</div>
          <div style={styles.price}>1000</div>
          <div style={styles.desc}>GREAT FOR READERS</div>
          <div style={styles.subtext}>Discover and manage your personal reading collection.</div>
          <a href="#" style={styles.button}>GET STARTED</a>
          <ul style={styles.pricingList}>
            <li style={styles.pricingListItem}><span style={styles.check}>✔</span>50 books in catalog</li>
            <li style={styles.pricingListItem}><span style={styles.cross}>✘</span>Reading analytics</li>
            <li style={styles.pricingListItem}><span style={styles.cross}>✘</span>Book recommendations</li>
          </ul>
        </div>

        {/* Gold Plan */}
        <div style={styles.cardLite}>
          <div style={styles.cardHeaderLite}>GOLD</div>
          <div style={styles.price}>2000<span style={{ fontSize: '14px' }}> /mo</span></div>
          <div style={styles.desc}>FOR AVID READERS</div>
          <div style={styles.subtext}>Track reading habits and discover new favorites.</div>
          <a href="#" style={styles.buttonLite}>GET STARTED</a>
          <ul style={styles.pricingList}>
            <li style={styles.pricingListItem}><span style={styles.check}>✔</span>200 books in catalog</li>
            <li style={styles.pricingListItem}><span style={styles.check}>✔</span>Reading analytics</li>
            <li style={styles.pricingListItem}><span style={styles.check}>✔</span>Book recommendations</li>
          </ul>
        </div>

        {/* Platinum Plan */}
        <div style={styles.card}>
          <div style={styles.cardHeaderPro}>PLATINUM</div>
          <div style={styles.price}>5000<span style={{ fontSize: '14px' }}> /mo</span></div>
          <div style={styles.desc}>FOR LIBRARIES & SCHOOLS</div>
          <div style={styles.subtext}>Complete library management with advanced features.</div>
          <a href="#" style={styles.button}>GET STARTED</a>
          <ul style={styles.pricingList}>
            <li style={styles.pricingListItem}><span style={styles.check}>✔</span>Unlimited books</li>
            <li style={styles.pricingListItem}><span style={styles.check}>✔</span>Advanced analytics</li>
            <li style={styles.pricingListItem}><span style={styles.check}>✔</span>Multi-user access</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Subscription;