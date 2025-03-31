import axios from "axios";
import React, { useEffect, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import "./Subscription.css";
import PageTile from "../pageTile/PageTile";

const Subscription = () => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentSubscription, setCurrentSubscription] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState(null);
  const [alerts, setAlerts] = useState({
    open: false,
    message: "",
    severity: "",
  });

  const fetchPlan = async () => {
    try {
      setLoading(true);
      const authToken = localStorage.getItem("authToken");
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/user/subscription/plans`,
        {
          headers: {
            Authorization: authToken,
            "Content-Type": "application/json",
          },
        }
      );

      // Extract plans from the response
      const planData = response.data?.data || [];
      console.log("Fetched plans:", planData);
      setPlans(planData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching plans:", error);
      setError("Failed to load subscription plans");
      setLoading(false);
    }
  };

  // Fetch user's current subscription if any
  const fetchCurrentSubscription = async () => {
    try {
      const authToken = localStorage.getItem("authToken");
      const userId = localStorage.getItem("userId"); // You might need to store userId in localStorage on login

      if (!userId) {
        setAlerts({
          open: true,
          message: "User ID not found. Please log in again.",
          severity: "warning",
        });
        return;
      }

      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/user/subscription/get/${userId}`,
        {
          headers: {
            Authorization: authToken,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response, "response");

      if (response.data?.data) {
        setCurrentSubscription(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching current subscription:", error);
      // Not setting global error here, as this is secondary information
    }
  };

  useEffect(() => {
    fetchPlan();
  }, []);
  useEffect(() => {
    fetchCurrentSubscription();
  }, []);

  const handleSubscription = async (plan) => {
    try {
      setIsProcessing(true);
      const authToken = localStorage.getItem("authToken");

      if (!authToken) {
        setAlerts({
          open: true,
          message: "Please log in to view your wishlist",
          severity: "warning",
        });
        setLoading(false);
        return;
      }

      // Step 1: Initiate subscription
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/user/subscription/initiate`,
        { planId: plan._id },
        {
          headers: {
            Authorization: authToken,
            "Content-Type": "application/json",
          },
        }
      );

      const { razorpaySubscription } = response.data.data;

      // Step 2: Open Razorpay payment dialog
      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY, // You need to add this environment variable
        subscription_id: razorpaySubscription.id,
        name: "Bookify",
        description: `Subscription to ${plan.name} Plan`,
        image: "", // Replace with your logo URL
        prefill: {
          name: localStorage.getItem("userName") || "",
          email: localStorage.getItem("userEmail") || "",
        },
        theme: {
          color: "#2e2e4d",
        },
        handler: function (response) {
          // Step 3: Verify payment after successful transaction
          verifyPayment(
            razorpaySubscription.id,
            response.razorpay_payment_id,
            plan
          );
        },
        modal: {
          ondismiss: function () {
            setIsProcessing(false);
            console.log("Payment dialog dismissed");
          },
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
      setPaymentDetails({ subscriptionId: razorpaySubscription.id, plan });
    } catch (error) {
      console.error("Error initiating subscription:", error);
      setAlerts({
        open: true,
        message: `Failed to initiate subscription: ${
          error.response?.data?.message || error.message
        }`,
        severity: "error",
      });
      setIsProcessing(false);
    }
  };

  const verifyPayment = async (subscriptionId, razorpayPaymentId, plan) => {
    try {
      const authToken = localStorage.getItem("authToken");

      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/user/subscription/verify`,
        {
          subscriptionId,
          razorpayPaymentId,
        },
        {
          headers: {
            Authorization: authToken,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Payment verified:", response.data);

      // Update the current subscription state with the new subscription
      setCurrentSubscription(response.data.data);
      setPaymentDetails(null);
      console.log(plans, "plans");

      // Show success message
      alert(`Successfully subscribed to ${plan?.name} plan!`);

      setIsProcessing(false);
    } catch (error) {
      console.error("Error verifying payment:", error);
      setError(
        `Failed to verify payment: ${
          error.response?.data?.error || error.message
        }`
      );
      setIsProcessing(false);
    }
  };

  //cancel subscription
  const cancelSubscription = async (subscriptionId) => {
    if (!window.confirm("Are you sure you want to cancel your subscription?")) {
      return;
    }

    try {
      setIsProcessing(true);
      const authToken = localStorage.getItem("authToken");

      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/user/subscription/cancle/${subscriptionId}`,
        {},
        {
          headers: {
            Authorization: authToken,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Subscription cancelled:", response.data);
      setCurrentSubscription(null);
      alert("Your subscription has been cancelled successfully.");
      setIsProcessing(false);
    } catch (error) {
      console.error("Error cancelling subscription:", error);
      setError(
        `Failed to cancel subscription: ${
          error.response?.data?.error || error.message
        }`
      );
      setIsProcessing(false);
    }
  };

  // Define CSS styles inline
  const styles = {
    pricingPage: {
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f9fbff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
    },
    pricingContainer: {
      display: "flex",
      gap: "20px",
      flexWrap: "wrap",
      justifyContent: "center",
    },
    card: {
      background: "#ffffff",
      borderRadius: "10px",
      boxShadow: "0 5px 20px rgba(0, 0, 0, 0.05)",
      padding: "30px",
      width: "300px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    cardHeaderBase: {
      width: "100%",
      padding: "10px 0",
      textAlign: "center",
      fontWeight: "bold",
      textTransform: "uppercase",
      borderRadius: "5px 5px 0 0",
    },
    cardHeaderFree: {
      background: "#f8f9fb",
      color: "#333",
      width: "100%",
      padding: "10px 0",
      textAlign: "center",
      fontWeight: "bold",
      textTransform: "uppercase",
      borderRadius: "5px 5px 0 0",
    },
    cardHeaderLite: {
      background: "linear-gradient(90deg, #b383ff, #ff82d7)",
      color: "#fff",
      width: "100%",
      padding: "10px 0",
      textAlign: "center",
      fontWeight: "bold",
      textTransform: "uppercase",
      borderRadius: "5px 5px 0 0",
    },
    cardHeaderPro: {
      background: "linear-gradient(90deg, #ff9a7c, #ffd17c)",
      color: "#fff",
      width: "100%",
      padding: "10px 0",
      textAlign: "center",
      fontWeight: "bold",
      textTransform: "uppercase",
      borderRadius: "5px 5px 0 0",
    },
    price: {
      fontSize: "2.5rem",
      margin: "20px 0 10px",
      color: "#2e2e4d",
    },
    desc: {
      color: "#555",
      fontWeight: "bold",
      marginBottom: "10px",
      textAlign: "center",
    },
    subtext: {
      color: "#777",
      fontSize: "14px",
      textAlign: "center",
      marginBottom: "20px",
    },
    button: {
      display: "inline-block",
      padding: "10px 20px",
      marginBottom: "20px",
      borderRadius: "5px",
      textDecoration: "none",
      textAlign: "center",
      fontWeight: "bold",
      border: "1px solid #2e2e4d",
      color: "#2e2e4d",
      transition: "all 0.3s ease",
      cursor: "pointer",
    },
    buttonLite: {
      display: "inline-block",
      padding: "10px 20px",
      marginBottom: "20px",
      borderRadius: "5px",
      textDecoration: "none",
      textAlign: "center",
      fontWeight: "bold",
      background: "#2e2e4d",
      color: "#fff",
      border: "none",
      cursor: "pointer",
    },
    pricingList: {
      listStyle: "none",
      width: "100%",
      padding: 0,
    },
    pricingListItem: {
      display: "flex",
      alignItems: "center",
      marginBottom: "10px",
      fontSize: "14px",
    },
    check: {
      color: "green",
      marginRight: "10px",
    },
    cross: {
      color: "red",
      marginRight: "10px",
    },
    loadingMessage: {
      textAlign: "center",
      padding: "50px",
      fontSize: "18px",
      color: "#555",
    },
    errorMessage: {
      textAlign: "center",
      padding: "50px",
      fontSize: "18px",
      color: "red",
    },
  };

  // Format date function for displaying subscription dates
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Check if user has active subscription to this plan
  const isPlanActive = (planId) => {
    return (
      currentSubscription &&
      currentSubscription.planId === planId &&
      currentSubscription.status === "active"
    );
  };

  if (loading) {
    return (
      <div style={styles.loadingMessage}>Loading subscription plans...</div>
    );
  }

  if (error) {
    return <div style={styles.errorMessage}>{error}</div>;
  }

  // Helper function to get style based on plan name
  const getPlanStyles = (planName) => {
    const name = planName?.toLowerCase();

    if (name === "silver") {
      return {
        header: styles.cardHeaderFree,
        card: styles.card,
        button: styles.button,
        desc: "GREAT FOR READERS",
        subtext: "Discover and manage your personal reading collection.",
      };
    } else if (name === "gold") {
      return {
        header: styles.cardHeaderLite,
        card: styles.card,
        button: styles.buttonLite,
        desc: "FOR AVID READERS",
        subtext: "Track reading habits and discover new favorites.",
      };
    } else if (name === "platinum") {
      return {
        header: styles.cardHeaderPro,
        card: styles.card,
        button: styles.button,
        desc: "FOR LIBRARIES & SCHOOLS",
        subtext: "Complete library management with advanced features.",
      };
    }

    // Default style
    return {
      header: styles.cardHeaderBase,
      card: styles.card,
      button: styles.button,
      desc: "SUBSCRIPTION PLAN",
      subtext: "Access our premium features with this plan.",
    };
  };

  if (loading) {
    return (
      <div style={styles.loadingMessage}>Loading subscription plans...</div>
    );
  }

  if (error) {
    return <div style={styles.errorMessage}>{error}</div>;
  }

  
  return (
    <>
     <PageTile
        title="Subscription"
        breadcrumbs={[
          { label: "Home", link: "/", active: false },
          { label: "Subscription", active: true },
        ]}
      />
      
        {currentSubscription ? (
          <div className="subscriptioncard">
            <div className="card">
              <div className="profile">
                <img
                  src={currentSubscription?.userId?.profile?.url}
                  alt="Profile"
                />
                <span className="update-icon" title="Update">
                  <i className="fa fa-camera"></i>
                </span>
              </div>
              <div className="info">
                <div className="header">
                  <div>
                    <h2>
                      {currentSubscription?.userId.firstName}{" "}
                      {currentSubscription?.userId.lastName}
                    </h2>
                  </div>
                </div>
                <div className="details">
                  <p>
                    <strong>Email:</strong> {currentSubscription?.userId?.email}
                  </p>
                  <p>
                    <strong>plan:</strong> {currentSubscription?.planId?.name}
                  </p>
                  <p>
                    <strong>duration Months:</strong>{" "}
                    {currentSubscription?.planId?.durationMonth}
                  </p>
                  <p>
                    <strong>Start Date:</strong>{" "}
                    {formatDate(currentSubscription.startDate)}
                  </p>
                  <p>
                    <strong>End Date:</strong>{" "}
                    {formatDate(currentSubscription.endDate)}
                  </p>
                  {/* <button
                    style={styles.cancelButton}
                    onClick={() =>
                      cancelSubscription(
                        currentSubscription.razorpaySubscriptionId
                      )
                    }
                    disabled={isProcessing}
                  >
                    {isProcessing ? "Processing..." : "Cancel Subscription"}
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        ):  (
        <div style={styles.pricingPage}>
        <Snackbar
          open={alerts.open}
          autoHideDuration={3000}
          onClose={() => setAlerts({ ...alerts, open: false })}
        >
          <Alert
            onClose={() => setAlerts({ ...alerts, open: false })}
            severity={alerts.severity}
          >
            {alerts.message}
          </Alert>
        </Snackbar>

        {/* <div style={{ width: '100%', maxWidth: '1200px' }}>
        {/* Display current subscription if any */}

        <div style={styles.pricingContainer}>
          {plans.map((plan, index) => {
            const planBenefit = plan.benefit || {};
            const planStyle = getPlanStyles(plan.name);

            return (
              <div key={plan._id || index} style={planStyle.card}>
                <div style={planStyle.header}>{plan.name?.toUpperCase()}</div>
                <div style={styles.price}>{plan.price}</div>
                <div style={styles.desc}>{planStyle.desc}</div>
                <div style={styles.subtext}>
                  {plan.description || planStyle.subtext}
                </div>
                <a
                  href="#"
                  style={planStyle.button}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSubscription(plan);
                  }}
                >
                  GET STARTED
                </a>
                <ul style={styles.pricingList}>
                  <li style={styles.pricingListItem}>
                    <span style={styles.check}>✔</span>
                    {planBenefit.freeBook || 0} free{" "}
                    {planBenefit.freeBook === 1 ? "book" : "books"}
                  </li>
                  <li style={styles.pricingListItem}>
                    <span style={styles.check}>✔</span>
                    {planBenefit.discountPercent || 0}% discount on purchases
                  </li>
                  {planBenefit.maxBorrowBooks && (
                    <li style={styles.pricingListItem}>
                      <span style={styles.check}>✔</span>
                      Borrow up to {planBenefit.maxBorrowBooks} books
                    </li>
                  )}
                  <li style={styles.pricingListItem}>
                    <span style={styles.check}>✔</span>
                    {plan.durationMonth || 12}-month subscription
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      )}
    </>
  );
};

export default Subscription;
