import { Box, Button, Snackbar, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";

import MuiAlert from "@mui/material/Alert";

import styled from "styled-components";



import PayPal from "../../images/paypal.png";
import MasterCard from "../../images/MasterCard.png";
import Visa from "../../images/visa.png";
import { placeOrder } from "../Utils/itemSlice";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
export default function Check() {
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "error", // can be 'success', 'info', 'warning'
  });

  const showSnackbar = (message, severity = "error") => {
    setSnackbar({ open: true, message, severity });
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.items.cartItems);
  const currentUser = useSelector((state) => state.items.currentUser);

  const [selectedValue, setSelectedValue] = React.useState("a");
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    streetAddress: "",
    apartment: "",
    townCity: "",
    phoneNumber: "",
    emailAddress: currentUser?.email || "",
    saveInfo: false,
    paymentMethod: "bank",
  });

  // Phone number formatting function
  const formatPhoneNumber = (phoneNumber) => {
    if (!phoneNumber) return phoneNumber;

    const phoneNumberValue = phoneNumber.replace(/[^\d]/g, "");
    const phoneNumberLength = phoneNumberValue.length;

    if (phoneNumberLength < 3) return phoneNumberValue;

    if (phoneNumberLength < 6) {
      return `(${phoneNumberValue.slice(0, 3)}) ${phoneNumberValue.slice(3)}`;
    }

    return `(${phoneNumberValue.slice(0, 3)}) ${phoneNumberValue.slice(
      3,
      6
    )}-${phoneNumberValue.slice(6, 10)}`;
  };

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const HandleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();

    // Phone number validation (at least 10 digits)
    if (formData.phoneNumber.replace(/\D/g, "").length < 10) {
      showSnackbar("Please enter a valid phone number");
      return;
    }

    // Validation
    if (
      !formData.fullName ||
      !formData.streetAddress ||
      !formData.townCity ||
      !formData.phoneNumber ||
      !formData.emailAddress
    ) {
      showSnackbar("Please fill in all required fields");
      return;
    }

    if (cartItems.length === 0) {
      showSnackbar("Your cart is empty");
      return;
    }

    const orderID = `ORD-${Date.now()}`;

  try {
    // Send order confirmation email via backend
    const emailResponse = await fetch('http://localhost:5000/api/user/send-order-confirmation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userEmail: formData.emailAddress,
        userName: formData.fullName,
        orderId: orderID,
        orderItems: cartItems.map(item => ({
          name: item.name,
          quantity: item.quantity,
          price: item.price
        })),
        orderTotal: cartItems.reduce(
          (total, item) => total + item.price * item.quantity, 
          0
        ).toFixed(2),
        sellerEmail: "anassheik890@gmail.com"
      })
    });

   if (!emailResponse.ok) {
  const errorData = await emailResponse.json();
  throw new Error(errorData.error || 'Email sending failed');
}


    dispatch(
      placeOrder({
        ...formData,
        userID: currentUser?.email || "guest",
        paymentMethod: selectedValue === "a" ? "bank" : "cash",
        items: cartItems,
        total: cartItems.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        ),
      })
    );

 showSnackbar(`Order placed! Confirmation sent to ${formData.emailAddress}`, "success");
    setTimeout(() => navigate("/OrderConfirmation"), 2000);
 } catch (error) {
    console.error("Order processing error:", error);
    showSnackbar("Order placed but email confirmation failed", "warning");
    
    // Still proceed with order
    dispatch(placeOrder({
      ...formData,
      userID: currentUser?.email || "guest",
      paymentMethod: selectedValue === "a" ? "bank" : "cash",
      items: cartItems,
      orderID,
      total: cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      ),
    }));
    
    setTimeout(() => navigate("/OrderConfirmation"), 2000);
  }
};
  if (cartItems.length === 0) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="80vh"
      >
        <Typography variant="h6">Your cart is empty</Typography>
      </Box>
    );
  }

  return (
    <>
    <Snackbar
    open={snackbar.open}
    autoHideDuration={6000}
    onClose={() => setSnackbar({...snackbar, open: false})}
    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
  >
    <Alert 
      onClose={() => setSnackbar({...snackbar, open: false})} 
      severity={snackbar.severity}
      sx={{ width: '100%' }}
    >
      {snackbar.message}
    </Alert>
  </Snackbar>
      {/* Links  */}
      <Box display="flex" alignItems="center" gap={1.5} mt={8} px={6}>
        <Typography
          component={Link}
          to="/"
          sx={{
            fontSize: "var(--font-sm)",
            opacity: 0.5,
            textDecoration: "none",
            color: "black",
          }}
        >
          Acount
        </Typography>
        <Typography>/</Typography>
        <Typography
          component={Link}
          to="/account"
          sx={{
            fontSize: "var(--font-sm)",
            opacity: 0.5,
            textDecoration: "none",
            color: "black",
          }}
        >
          My Account
        </Typography>
        <Typography>/</Typography>
        <Typography
          component={Link}
          to="/"
          sx={{
            fontSize: "var(--font-sm)",
            opacity: 0.5,
            textDecoration: "none",
            color: "black",
          }}
        >
          Product
        </Typography>
        <Typography>/</Typography>
        <Typography
          component={Link}
          to="/cart"
          sx={{
            fontSize: "var(--font-sm)",
            opacity: 0.5,
            textDecoration: "none",
            color: "black",
          }}
        >
          View Cart
        </Typography>
        <Typography>/</Typography>
        <Typography
          component={Link}
          to="/checkout"
          sx={{
            fontSize: "var(--font-sm)",
            textDecoration: "none",
            color: "black",
          }}
        >
          Checkout
        </Typography>
      </Box>

      <Typography
        sx={{ fontSize: "var(--font-lg)", fontWeight: 500, px: 6, mt: 6 }}
      >
        Billing Details
      </Typography>

      {/* Main Box */}
      <Box
        display={"flex"}
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent={"space-around"}
        mt={4}
      >
        {/* TextFields */}
        <Box display={"flex"} flexDirection={"column"} gap={"24px"}>
          {/* "Name" */}
          <Box>
            <Typography sx={{ opacity: "50%" }}>
              Full Name <span style={{ color: "red", opacity: "70%" }}>*</span>
            </Typography>
            <TextField
              required
              hiddenLabel
              id="filled-hidden-label-small"
              variant="filled"
              size="small"
              name="fullName"
              value={formData.fullName}
              onChange={HandleInputChange}
              sx={{ width: { xs: "80%", sm: "300px", md: "400px" } }}
            />
          </Box>
          {/* "Company Name" */}
          <Box>
            <Typography sx={{ opacity: "50%" }}>Company Name</Typography>
            <TextField
              required
              hiddenLabel
              id="filled-hidden-label-small"
              variant="filled"
              size="small"
              name="companyName"
              value={formData.companyName}
              onChange={HandleInputChange}
              sx={{ width: { xs: "80%", sm: "300px", md: "400px" } }}
            />
          </Box>
          {/* "Street Address" */}
          <Box>
            <Typography sx={{ opacity: "50%" }}>
              Street Address{" "}
              <span style={{ color: "red", opacity: "70%" }}>*</span>
            </Typography>
            <TextField
              required
              hiddenLabel
              id="filled-hidden-label-small"
              variant="filled"
              size="small"
              name="streetAddress"
              value={formData.streetAddress}
              onChange={HandleInputChange}
              sx={{ width: { xs: "80%", sm: "300px", md: "400px" } }}
            />
          </Box>
          {/* " Appartment, floor ,etc" */}
          <Box>
            <Typography sx={{ opacity: "50%" }}>
              Appartment, floor ,etc (optional)
            </Typography>
            <TextField
              required
              hiddenLabel
              id="filled-hidden-label-small"
              variant="filled"
              size="small"
              name="apartment"
              value={formData.apartment}
              onChange={HandleInputChange}
              sx={{ width: { xs: "80%", sm: "300px", md: "400px" } }}
            />
          </Box>
          {/* "Town/City" */}
          <Box>
            <Typography sx={{ opacity: "50%" }}>
              Town/City <span style={{ color: "red", opacity: "70%" }}>*</span>
            </Typography>
            <TextField
              required
              hiddenLabel
              id="filled-hidden-label-small"
              variant="filled"
              size="small"
              name="townCity"
              value={formData.townCity}
              onChange={HandleInputChange}
              sx={{ width: { xs: "80%", sm: "300px", md: "400px" } }}
            />
          </Box>
          {/* "Phone Number" */}
          <Box>
            <Typography sx={{ opacity: "50%" }}>
              Phone Number{" "}
              <span style={{ color: "red", opacity: "70%" }}>*</span>
            </Typography>
            <TextField
              required
              hiddenLabel
              id="filled-hidden-label-small"
              variant="filled"
              size="small"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={(e) => {
                const cleaned = e.target.value.replace(/\D/g, " ");

                HandleInputChange({
                  target: {
                    name: "phoneNumber",
                    value: cleaned,
                  },
                });
              }}
              inputProps={{
                maxLength: 14,
                inputMode: "numeric",
              }}
              sx={{ width: { xs: "80%", sm: "300px", md: "400px" } }}
            />
          </Box>
          {/* "Email Address" */}
          <Box>
            <Typography sx={{ opacity: "50%" }}>
              Email Address{" "}
              <span style={{ color: "red", opacity: "70%" }}>*</span>
            </Typography>
            <TextField
              required
              hiddenLabel
              id="filled-hidden-label-small"
              variant="filled"
              size="small"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={HandleInputChange}
              sx={{ width: { xs: "80%", sm: "300px", md: "400px" } }}
            />
          </Box>
          {/* Check  Box */}
          <Box display={"flex"} alignItems={"center"}>
            <Checkbox
              {...label}
              name="saveInfo"
              checked={formData.saveInfo}
              onChange={HandleInputChange}
              sx={{
                color: "var(--color-danger)", // color when unchecked
                "&.Mui-checked": {
                  color: "var(--color-danger)", // color when checked
                },
                p: 0,
                pr: 1,
              }}
            />
            <Typography>
              Save this information for faster check-out next time
            </Typography>
          </Box>
        </Box>

        {/* ......................................... */}

        {/* Product Details */}
        <Box display={"flex"} flexDirection={"column"} gap={3}>
          {cartItems.map((prd, index) => (
            // {/* product 1 */}
            <Box
              key={prd.id}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
              gap={20}
            >
              <Box display={"flex"} alignItems={"center"} gap={3}>
                <img
                  src={prd.image}
                  width={"50px"}
                  height={"40px"}
                  alt={prd.name}
                ></img>
                <Typography>{prd.name}</Typography>
              </Box>
              <Box>
                <Typography>{"$" + prd.price}</Typography>
              </Box>
            </Box>
          ))}
          {/* // Total */}
          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography>Subtotal:</Typography>
            <Typography>
              $
              {cartItems
                .reduce((total, item) => total + item.price * item.quantity, 0)
                .toFixed(2)}
            </Typography>
          </Box>
          {/* Line */}
          <Box sx={{ border: "1px solid #000000", opacity: "30%" }}></Box>
          {/* Shipping */}
          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography>Shipping:</Typography>
            <Typography> Free </Typography>
          </Box>
          {/* Line */}
          <Box sx={{ border: "1px solid #000000", opacity: "30%" }}></Box>
          {/* Total */}
          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography>Total:</Typography>
            <Typography>
              {" "}
              $
              {cartItems
                .reduce((total, item) => total + item.price * item.quantity, 0)
                .toFixed(2)}{" "}
            </Typography>
          </Box>
          {/* Cash Payment Method */}
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Box display={"flex"} alignItems={"center"} gap={2}>
              <Radio
                checked={selectedValue === "a"}
                onChange={handleChange}
                value="a"
                name="paymentMethod"
                inputProps={{ "aria-label": "Bank payment" }}
                sx={{
                  color: "black",
                  "&.Mui-checked": {
                    color: "black",
                  },
                  p: 0,
                  m: 0,
                }}
              />
              <Typography>Bank</Typography>
            </Box>
            {/* ....................... */}
            <Box display={"flex"} alignItems={"center"} gap={1}>
              <img src={Visa} width={"40px"}></img>
              <img src={PayPal} width={"40px"}></img>
              <img src={MasterCard} width={"40px"}></img>
            </Box>
          </Box>
          {/* Cash Method */}
          <Box display={"flex"} alignItems={"center"} gap={2}>
            <Radio
              checked={selectedValue === "b"}
              onChange={handleChange}
              value="b"
              name="radio-buttons"
              inputProps={{ "aria-label": "A" }}
              sx={{
                color: "black",
                "&.Mui-checked": {
                  color: "black",
                },
                p: 0,
                m: 0,
              }}
            />
            <Typography>Cash on Delivery</Typography>
          </Box>
          {/* Coupen  */}

          <Box
            display={"flex"}
            flexDirection={{ xs: "column", md: "row" }}
            gap={4}
          >
            <TextField
              size="small"
              defaultValue={"Coupan Code"}
              sx={{
                mx: { xs: 3, md: 0 },
              }}
            ></TextField>
            {/* <Button
            variant="contained"
            sx={{ backgroundColor: "var(--color-danger)", height:"40px",         
           }}
          
          >
            Apply Coupon
          </Button> */}
            <StyledCoupin>
              <button className="button">Apply Coupon</button>
            </StyledCoupin>
          </Box>
          <Box>
            <StyledWrapper>
              <button className="button" onClick={HandleSubmit}>
                <p>Place Order</p>
              </button>
            </StyledWrapper>
          </Box>
        </Box>
      </Box>
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

const StyledWrapper = styled.div`
  .button {
    all: unset;
    display: flex;
    align-items: center;
    justify-content: center; /* optional, for centering text horizontally */
    position: relative;
    padding: 0.3em 1.1em; /* reduced vertical and horizontal padding */
    border: var(--color-danger) solid 0.1em; /* slightly thinner border */
    border-radius: 0.25em;
    color: var(--color-danger);
    font-size: 1em; /* reduced font size */
    font-weight: 500; /* slightly lighter if needed */
    line-height: 1; /* controls text height */
    cursor: pointer;
    overflow: hidden;
    transition: border 300ms, color 300ms;
    user-select: none;
  }
  .button p {
    z-index: 1;
  }

  .button:hover {
    color: white;
  }

  .button:active {
    border-color: var(--color-danger);
  }

  .button::after,
  .button::before {
    content: "";
    position: absolute;
    width: 9em;
    aspect-ratio: 1;
    background: var(--color-danger);
    opacity: 80%;
    border-radius: 50%;
    transition: transform 500ms, background 300ms;
  }

  .button::before {
    left: 0;
    transform: translateX(-8em);
  }

  .button::after {
    right: 0;
    transform: translateX(8em);
  }

  .button:hover:before {
    transform: translateX(-1em);
  }

  .button:hover:after {
    transform: translateX(1em);
  }

  .button:active:before,
  .button:active:after {
    background: var(--color-danger);
  }
`;

const StyledCoupin = styled.div`
  .button {
    position: relative;
    padding: 12px 22px;
    border-radius: 6px;
    border: none;
    color: #fff;
    cursor: pointer;
    background-color: var(--color-danger);
    transition: all 0.2s ease;
  }

  .button:active {
    transform: scale(0.96);
  }

  .button:before,
  .button:after {
    position: absolute;
    content: "";
    width: 150%;
    left: 50%;
    height: 100%;
    transform: translateX(-50%);
    z-index: -1000;
    background-repeat: no-repeat;
  }

  .button:hover:before {
    top: -70%;
    background-image: radial-gradient(
        circle,
        var(--color-danger) 20%,
        transparent 20%
      ),
      radial-gradient(
        circle,
        transparent 20%,
        var(--color-danger) 20%,
        transparent 30%
      ),
      radial-gradient(circle, var(--color-danger) 20%, transparent 20%),
      radial-gradient(circle, var(--color-danger) 20%, transparent 20%),
      radial-gradient(
        circle,
        transparent 10%,
        var(--color-danger) 15%,
        transparent 20%
      ),
      radial-gradient(circle, var(--color-danger) 20%, transparent 20%),
      radial-gradient(circle, var(--color-danger) 20%, transparent 20%),
      radial-gradient(circle, var(--color-danger) 20%, transparent 20%),
      radial-gradient(circle, var(--color-danger) 20%, transparent 20%);
    background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%,
      15% 15%, 10% 10%, 18% 18%;
    background-position: 50% 120%;
    animation: greentopBubbles 0.6s ease;
  }

  @keyframes greentopBubbles {
    0% {
      background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%,
        40% 90%, 55% 90%, 70% 90%;
    }

    50% {
      background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%,
        50% 50%, 65% 20%, 90% 30%;
    }

    100% {
      background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%,
        50% 40%, 65% 10%, 90% 20%;
      background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
    }
  }

  .button:hover::after {
    bottom: -70%;
    background-image: radial-gradient(
        circle,
        var(--color-danger) 20%,
        transparent 20%
      ),
      radial-gradient(circle, var(--color-danger) 20%, transparent 20%),
      radial-gradient(
        circle,
        transparent 10%,
        var(--color-danger) 15%,
        transparent 20%
      ),
      radial-gradient(circle, var(--color-danger) 20%, transparent 20%),
      radial-gradient(circle, var(--color-danger) 20%, transparent 20%),
      radial-gradient(circle, var(--color-danger) 20%, transparent 20%),
      radial-gradient(circle, var(--color-danger) 20%, transparent 20%);
    background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 20% 20%,
      18% 18%;
    background-position: 50% 0%;
    animation: greenbottomBubbles 0.6s ease;
  }

  @keyframes greenbottomBubbles {
    0% {
      background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%,
        70% -10%, 70% 0%;
    }

    50% {
      background-position: 0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 95% 60%,
        105% 0%;
    }

    100% {
      background-position: 0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%, 95% 70%,
        110% 10%;
      background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
    }
  }
`;
