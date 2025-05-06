import { Box, Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useSelector , useDispatch } from "react-redux";
import { UpdateQuantity , RemovefromCart } from "../Utils/itemSlice";


import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

import Remote from "../../images/xremote.png";
import Keyboard from "../../images/keyboard.png";
import Lcd from "../../images/LCD.png";


export default function Cart() {

  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.items.cartItems);

  // calculate total
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const total = subtotal; // Add shipping if needed

  if (cartItems.length === 0) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
        <Typography variant="h6">Your cart is empty</Typography>
      </Box>
    );
  }
  const navigate = useNavigate();

  if (!cartItems) {
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
          Home
        </Typography>
        <Typography>/</Typography>
        <Typography
          component={Link}
          to="/cart"
          sx={{
            fontSize: "var(--font-sm)",
            textDecoration: "none",
            color: "black",
          }}
        >
          Cart
        </Typography>
      </Box>

      <Grid container mt={8} spacing={2} direction={"column"}  alignItems={"center"}>
          <Grid container item sx={{ fontWeight:600 , textAlign:"center" }}  justifyContent={"center"} >
            {/* Product */}
            <Grid item xs={12} sm={6} md={2}>
              <Box display="flex" flexDirection="column" gap= {{ xs:5, md: 10 }} alignItems={"center"} mb={{xs: 8 , md:0 }}>
                <Typography sx={{ fontSize:"var(--font-standard)", fontWeight:"600"}}>Product</Typography>
                {cartItems.map((item) => (
                  <React.Fragment key={item.id} >
                <Box
                  display={"flex"}
                  flexDirection={"row"}
                  alignItems={"center"}
                  gap={2}
                >
                  <img src={item.image} alt={cartItems.name} width={"50px"} height={"40px"}></img>
                  <Typography> {item.name} </Typography>
                </Box>
                </React.Fragment>
               ))}
              </Box>
            </Grid>
            {/* Price */}
            <Grid item xs={12} sm={6}  md={2}>
              <Box display={"flex"} flexDirection={"column"}  gap={{ xs: 5, md: 11.5 }} textAlign={"center"} mb={{xs: 8 , md:0 }}>
                <Typography sx={{ fontSize:"var(--font-standard)", fontWeight:"600"}}>Price</Typography>
                {cartItems.map((item) => (
                <Typography> ${item.price} </Typography>
                ))}
              </Box>
            </Grid>
            
            {/* Quantity */}
            <Grid item xs={12} sm={6}  md={2} >
              <Box display={"flex"} flexDirection={"column"} alignItems={"center"} gap={{ xs:5 , md: 11 }} mb={{xs: 8 , md:0 }}>
                <Typography sx={{ fontSize:"var(--font-standard)", fontWeight:"600"}}>Quantity</Typography>
                {cartItems.map((item) => (
                <TextField
                key={item.id}
                  type="number"
                  value={item.quantity}
                  onChange={(e) => 
                  dispatch(UpdateQuantity({ id: item.id , quantity: parseInt(e.target.value)}) ) 
                  }
                  inputProps={{
                    min: 1,
                    max: 100,
                  }}
                  sx={{
                    width: "65px",
                    "& .MuiInputBase-input": {
                      height: "5px",
                    },
                  }}
                ></TextField>
              ))}
              </Box>
            </Grid>
            {/* Subtotal */}
            <Grid item xs={12} sm={6}  md={2}>
              <Box display={"flex"} flexDirection={"column"} gap={ { xs:5, md:11.5 }} textAlign={"center"} mb={{xs: 8 , md:0 }}>
                <Typography sx={{ fontSize:"var(--font-standard)", fontWeight:"600"}}>Subtotal</Typography>
                {cartItems.map((item) => (
                <Typography>$  {item.price * item.quantity}  </Typography>
              ))}
              </Box>
            </Grid>
                {/* Delete Icon */}
                <Grid item xs={12} sm={6}  md={2}>
              <Box display={"flex"} flexDirection={"column"} gap={{ xs:5, md : 11.5 }} >
              <Typography sx={{  fontSize:"var(--font-standard)", fontWeight:"600"}}>Remove</Typography>
                {cartItems.map((item) => (
              <IconButton color="error" onClick={() => dispatch(RemovefromCart (item.id))}   >
                <DeleteForeverOutlinedIcon/>
              </IconButton>
              ))}
              </Box>
            </Grid>
      
          </Grid>
      </Grid>

      {/* Buttons */}
      <Box
        mt={15  }  
        display="flex"
        justifyContent="start"
        // mx={{ xs:0 ,sm:5 , md: 9 }}
        sx={{
          width: "100%",
          gap: { xs: 6, md: 50 },
        }}
      >
        <Button
        onClick={() => navigate(`/`)}
          variant="outlined"
          sx={{
            border: "1px solid black",
            color: "black",
            // width: { xs: "100%", md: "auto" },
            px: { md: 4 }, // Add horizontal padding on desktop
            mx: {xs:3, md: 15 },
            "&:hover":{
              backgroundColor:"var(--color-danger)",
              color:"white",
              transition:"all 0.5s ease",
            }
          }}
          
        >
          Return to Shop
        </Button>
 
      </Box>

      {/* Caoupan and cart btn */}
      {/* Buttons */}
      <Box
        mt={8}
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent="space-around"
        sx={{
          width: "100%",
          // gap: { xs: 6, md: 50 },
        }}
      >
      {/* Coupan  */}
        <Box display={"flex"} flexDirection={{ xs:"column" , md:"row"}} gap={4} >
          <TextField size="small" defaultValue={"Coupan Code"} sx={{          
            mx: {xs:3 , md:0} }}>
            Caupon Code
          </TextField>
          <Button
            variant="contained"
            sx={{ backgroundColor: "var(--color-danger)", height:"40px",         
            mx:{xs:3 , md:0} }}
          
          >
            Apply Coupon
          </Button>
        </Box>
        {/* Card Total */}
        <Box
          display={"flex"}
          flexDirection={"column"}
          sx={{ border: "1px solid black", gap:1.5 }}
          width={{ xs:"auto", md: "350px" }}
          mx={{ xs:"auto", md:0}}
          mt={{ xs:4, md:0}}
          p={2}
        >
          <Typography>Card Total</Typography>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography>Subtotal:</Typography>
            <Typography>${subtotal}</Typography>
          </Box>
          <Box sx={{ border: "1px solid rgb(0, 0, 0)", opacity:"30%" }}></Box>
          <Box display={"flex"}  justifyContent={"space-between"}>
            <Typography>Shipping:</Typography>
            <Typography>Free</Typography>
          </Box>
          <Box sx={{ border: "1px solid rgb(0, 0, 0)", opacity:"30%"}}></Box>
          <Box display={"flex"}  justifyContent={"space-between"}>
            <Typography>Total:</Typography>
            <Typography>${subtotal}</Typography>
          </Box>
          <Button variant="contained"  sx={{ backgroundColor:"var(--color-danger)" , width:"250px", mx:"auto"}} >Process To Checkout</Button>
        </Box>
      </Box>

      <br />
      <br />
      <br />
    </>
  );
}
