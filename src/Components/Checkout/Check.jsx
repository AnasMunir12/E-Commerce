import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";

import Remote from "../../images/xremote.png";
import Keyboard from "../../images/keyboard.png";
import Lcd from "../../images/LCD.png";

import PayPal from '../../images/paypal.png'
import MasterCard from '../../images/MasterCard.png'
import Visa from '../../images/visa.png'

const label = { inputProps: { "aria-label": "Checkbox demo" } };
export default function Check() {
  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const Product = [
    { productimg: Remote, Name: "LCD Minitor", price: 650 },
    { productimg: Lcd, Name: "HI Gamepad", price: 1150 },
  ];

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
          to="/AddtoCart"
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
              sx={{ width: { xs: "80%", sm: "300px", md: "400px" } }}
            />
          </Box>
          {/* Check  Box */}
          <Box display={"flex"} alignItems={"center"}>
            <Checkbox
              {...label}
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
          {Product.map((prd, index) => (
            // {/* product 1 */}
            <Box key={index} display={"flex"} alignItems={"center"} justifyContent={"space-between"} gap={20}>
              <Box display={"flex"} alignItems={"center"} gap={3}>
                <img src={prd.productimg} width={"50px"} height={"40px"}></img>
                <Typography>{prd.Name}</Typography>
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
              {Product.reduce(
                (total, prd) => total + Number(prd.price),
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
              {Product.reduce(
                (total, prd) => total + Number(prd.price),
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
              checked={selectedValue === "a"}
              onChange={handleChange}
              value="a"
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
