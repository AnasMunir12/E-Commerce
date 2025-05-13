import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


import Remote from "../../images/xremote.png";
import Keyboard from "../../images/keyboard.png";
import Lcd from "../../images/LCD.png";

import PayPal from '../../images/paypal.png'
import MasterCard from '../../images/MasterCard.png'
import Visa from '../../images/visa.png'
import { placeOrder } from "../Utils/itemSlice";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
export default function Check() {
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'error', // can be 'success', 'info', 'warning'
  });

  const showSnackbar = (message, severity = 'error') => {
    setSnackbar({ open: true, message, severity });
  };
  
  const dispatch = useDispatch();
 const navigate = useNavigate();

  const cartItems = useSelector((state) => state.items.cartItems );
  const currentUser = useSelector((state) => state.items.currentUser);

  const [selectedValue, setSelectedValue] = React.useState("a");
  const [formData , setFormData] = useState({
    fullName: '',
  companyName: '',
  streetAddress: '',
  apartment: '',
  townCity: '',
  phoneNumber: '',
  emailAddress: currentUser?.email || '',
  saveInfo: false,
  paymentMethod: 'bank',
  });

  // Phone number formatting function
const formatPhoneNumber = (phoneNumber) => {
  if (!phoneNumber) return phoneNumber;
  
  const phoneNumberValue = phoneNumber.replace(/[^\d]/g, '');
  const phoneNumberLength = phoneNumberValue.length;
  
  if (phoneNumberLength < 3) return phoneNumberValue;
  
  if (phoneNumberLength < 6) {
    return `(${phoneNumberValue.slice(0, 3)}) ${phoneNumberValue.slice(3)}`;
  }
  
  return `(${phoneNumberValue.slice(0, 3)}) ${phoneNumberValue.slice(3, 6)}-${phoneNumberValue.slice(6, 10)}`;
};


  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };


  const HandleInputChange = (e) => {
    const { name, value, type, checked} = e.target;
setFormData({
  ...formData,
  [name] : type === "checkbox" ? checked : value
});
  };

  const HandleSubmit = (e) => {
    e.preventDefault();


      // Phone number validation (at least 10 digits)
  if (formData.phoneNumber.replace(/\D/g, '').length < 10) {
    showSnackbar('Please enter a valid phone number');
    return;
  }

    // Validation
    if(!formData.fullName || !formData.streetAddress || !formData.townCity || !formData.phoneNumber || !formData.emailAddress) {
      showSnackbar('Please fill in all required fields');
      return;
    }

    if (cartItems.length === 0) {
      showSnackbar('Your cart is empty');
      return;
    }

    dispatch(placeOrder({
      ...formData,
      userID: currentUser?.email || 'guest',
      paymentMethod: selectedValue === 'a' ? 'bank' : "cash",
      items: cartItems,
      total: cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
    }));

    // Navigate
    navigate('/OrderConfirmation')
  }

  if (cartItems.length === 0) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
        <Typography variant="h6">Your cart is empty</Typography>
      </Box>
    );
  }

  return (
    <>
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
          to="/"
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
      <Box display={"flex"} flexDirection={{ xs:"column" , md:"row"}} justifyContent={"space-around"}  mt={4} >
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
                const cleaned = e.target.value.replace(/\D/g, ' ');

                HandleInputChange({
                  target: {
                    name: 'phoneNumber',
                    value: cleaned
                  }
                });
              }}
              inputProps={{
                maxLength: 14,
                inputMode: 'numeric'
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
        <Box  display={"flex"} flexDirection={"column"} gap={3}>
          {cartItems.map((prd, index) => (
            // {/* product 1 */}
            <Box key={index} display={"flex"} alignItems={"center"} justifyContent={"space-between"} gap={20}>
              <Box display={"flex"} alignItems={"center"} gap={3}>
                <img src={prd.image} width={"50px"} height={"40px"} alt={prd.name}></img>
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
              {cartItems.reduce(
                (total, item) => total + (item.price * item.quantity),
                0
              ).toFixed(2)}
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
              {cartItems.reduce(
                (total, item) => total + (item.price * item.quantity),
                0
              ).toFixed(2)}{" "}
            </Typography>
          </Box>
          {/* Cash Payment Method */}
          <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
          <Box display={"flex"} alignItems={"center"} gap={2}>
            <Radio
              checked={selectedValue === "a"}
              onChange={handleChange}
              value="a"
              name="paymentMethod"
              inputProps={{ "aria-label": "Bank payment" }}
              sx={{
                color: "black", 
                '&.Mui-checked': {
                  color: "black", 
                },
                p:0,
                m:0
              }}
            />
            <Typography>Bank</Typography>
          </Box>
          {/* ....................... */}
          <Box display={"flex"} alignItems={"center"} gap={1}>
            <img src={Visa} width={"40px"}></img>
            <img src={PayPal} width={"40px"}></img>
            <img src={MasterCard } width={"40px"}></img>
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
                '&.Mui-checked': {
                  color: "black", 
                },
                p:0,
                m:0
              }}
            />
            <Typography>Cash on Delivery</Typography>
          </Box>
          {/* Coupen  */}
          
          <Box display={"flex"} flexDirection={{ xs:"column" , md:"row"}} gap={4} >
          <TextField size="small" defaultValue={"Coupan Code"} sx={{          
            mx: {xs:3 , md:0} }}>
          </TextField>
          <Button
            variant="contained"
            sx={{ backgroundColor: "var(--color-danger)", height:"40px",         
           }}
          
          >
            Apply Coupon
          </Button>
          </Box>
          <Box>
          <Button
            variant="contained"
            sx={{ backgroundColor: "var(--color-danger)", height:"40px",         
           }}
           onClick={HandleSubmit}
          
          >
            Place Order
          </Button>
          </Box>
          
          </Box>
      </Box>
      <br /><br /><br /><br />
    </>
  );
}
