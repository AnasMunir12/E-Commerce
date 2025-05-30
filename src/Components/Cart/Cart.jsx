import { Box, Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { Link, useFetcher } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useSelector , useDispatch } from "react-redux";
import { UpdateQuantity , RemovefromCart } from "../Utils/itemSlice";


import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import CartEmpty from '../../images/cart.png'

import styled from 'styled-components';
export default function Cart() {

  const flashSalesRef = useRef(null);

  const ScrollToFlashSales = () => {
    flashSalesRef.current?.ScrollToFlashSales({ behavior: 'smooth' });
  };

  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.items.cartItems || []);

  // calculate total
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const total = subtotal; // Add shipping if needed

  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
        <img src={CartEmpty}  alt="CartEmpty Image" />
        <Typography variant="h6">Your cart is empty</Typography>
      </Box>
    );
  }


  const HandleCheckout = () => {
    navigate('/checkout' , {state:{ cartItems }});
  };


  useEffect( () => {
    const userInfo = localStorage.getItem('UserInfo');
    if (!userInfo) {
      navigate('/login')
      return;
    }
  });

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
                  <img src={item.image} alt={item.name} width={"50px"} height={"40px"}></img>
                  <Typography > {item.name} </Typography>
                </Box>
                </React.Fragment>
               ))}
              </Box>
            </Grid>
            {/* Price */}
            <Grid item xs={12} sm={6}  md={2}>
              <Box display={"flex"} flexDirection={"column"}  gap={{ xs: 5, md: 12.5 }} textAlign={"center"} mb={{xs: 8 , md:0 }}>
                <Typography sx={{ fontSize:"var(--font-standard)", fontWeight:"600"}}>Price</Typography>
                {cartItems.map((item) => (
                <Typography key={`price-${item.id}`}> ${item.price} </Typography>
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
              <Box display={"flex"} flexDirection={"column"} gap={ { xs:5, md:12.5 }} textAlign={"center"} mb={{xs: 8 , md:0 }}>
                <Typography sx={{ fontSize:"var(--font-standard)", fontWeight:"600"}}>Subtotal</Typography>
                {cartItems.map((item) => (
                <Typography key={item.id}> ${item.price * item.quantity} </Typography>

              ))}
              </Box>
            </Grid>
                {/* Delete Icon */}
                <Grid item xs={12} sm={6}  md={2}>
              <Box display={"flex"} flexDirection={"column"} gap={{ xs:5, md : 10.7 }} >
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
          <TextField size="small" placeholder={"Coupon Code"} sx={{          
            mx: {xs:3 , md:0} }}>
            Coupon Code
          </TextField>
   
               <StyledCoupin>
              <button className="button">Apply Coupon</button>
            </StyledCoupin>
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
          <Typography>Cart Total</Typography>
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
          {/* <Button onClick={HandleCheckout} variant="contained"  sx={{ backgroundColor:"var(--color-danger)" , width:"250px", mx:"auto"}} >Process To Checkout</Button> */}
              <StyledWrapper>
      <button onClick={HandleCheckout}>Process to Checkout</button>
    </StyledWrapper>
        </Box>
      </Box>

      <br />
      <br />
      <br />
    </>
  );
}



const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    height: 2.5em;
    width: 12em;
    background: transparent;
    -webkit-animation: jello-horizontal 0.9s both;
    animation: jello-horizontal 0.9s both;
    border: 2px solid var(--color-danger);
    outline: none;
    color: var(--color-danger);
    cursor: pointer;
    font-size: 17px;
  }

  button:hover {
    background: var(--color-danger);
    color: #ffffff;
    animation: squeeze3124 0.9s both;
  }

  @keyframes squeeze3124 {
    0% {
      transform: scale3d(1, 1, 1);
    }
    30% {
      transform: scale3d(1.25, 0.75, 1);
    }
    40% {
      transform: scale3d(0.75, 1.25, 1);
    }
    50% {
      transform: scale3d(1.15, 0.85, 1);
    }
    65% {
      transform: scale3d(0.95, 1.05, 1);
    }
    75% {
      transform: scale3d(1.05, 0.95, 1);
    }
    100% {
      transform: scale3d(1, 1, 1);
    }
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
    background-image: radial-gradient(circle, var(--color-danger) 20%, transparent 20%),
      radial-gradient(circle, transparent 20%, var(--color-danger) 20%, transparent 30%),
      radial-gradient(circle, var(--color-danger) 20%, transparent 20%),
      radial-gradient(circle, var(--color-danger) 20%, transparent 20%),
      radial-gradient(circle, transparent 10%, var(--color-danger) 15%, transparent 20%),
      radial-gradient(circle, var(--color-danger) 20%, transparent 20%),
      radial-gradient(circle, var(--color-danger) 20%, transparent 20%),
      radial-gradient(circle, var(--color-danger) 20%, transparent 20%),
      radial-gradient(circle, var(--color-danger) 20%, transparent 20%);
    background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%, 15% 15%,
      10% 10%, 18% 18%;
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
    background-image: radial-gradient(circle, var(--color-danger) 20%, transparent 20%),
      radial-gradient(circle, var(--color-danger) 20%, transparent 20%),
      radial-gradient(circle, transparent 10%, var(--color-danger) 15%, transparent 20%),
      radial-gradient(circle, var(--color-danger) 20%, transparent 20%),
      radial-gradient(circle, var(--color-danger) 20%, transparent 20%),
      radial-gradient(circle,var(--color-danger) 20%, transparent 20%),
      radial-gradient(circle,var(--color-danger) 20%, transparent 20%);
    background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 20% 20%, 18% 18%;
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
  }`;

