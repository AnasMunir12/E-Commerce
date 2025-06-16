import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Stack,
  Typography,
  Rating,
  Button,
  IconButton,
  Divider,
  Grid,
  CircularProgress,
} from "@mui/material";
import { DotLoader } from "react-spinners";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Remote from "../../images/xremote.png";
import Keyboard from "../../images/keyboard.png";
import Lcd from "../../images/LCD.png";

import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { addToProduct } from "../Utils/itemSlice";
import { useDispatch } from "react-redux";

const ProductDt = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [rating, setRating] = useState(3);


  const [counter, setCounter] = useState(1);

  const HandleIncrease = ( ) => {
    setCounter(prev => prev + 1);
  };
  const HandleDecrease = ( ) => {
    if (counter > 1) {
    setCounter(prev => prev - 1);
  };
};

const dispatch = useDispatch();

  // Mock data - in a real app you'd fetch this from an API
  const products = [
    {
      id: "flash-1",
      img: Remote,
      name: "HAVIT HV-G92 Gamepad",
      price: 120,
      discount: "-40%",
      description:
        "High-quality gaming gamepad with ergonomic design and responsive buttons.",
      features: [
        "Wireless connectivity",
        "Dual vibration feedback",
        "10-hour battery life",
        "Compatible with PC/PS4/Xbox",
      ],
      stock: 15,
      rating: 4, // Added rating to product data
    },
    {
      id: "flash-2",
      img: Keyboard,
      name: "AK-900 Wired Keyboard",
      price: 960,
      discount: "-20%",
      description:
        "Mechanical wired keyboard with RGB backlighting and anti-ghosting.",
      features: [
        "Cherry MX switches",
        "RGB backlighting",
        "N-key rollover",
        "Aluminum frame",
      ],
      stock: 8,
      rating: 5,
    },
    {
      id: "flash-3",
      img: Lcd,
      name: "IPS LCD Gaming Monitor",
      price: 370,
      discount: "-10%",
      description:
        "27-inch IPS gaming monitor with 144Hz refresh rate and 1ms response time.",
      features: [
        "2560x1440 resolution",
        "HDR support",
        "AMD FreeSync",
        "Adjustable stand",
      ],
      stock: 5,
      rating: 4,
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        const foundProduct = products.find((p) => p.id === id);
        if (!foundProduct) {
          throw new Error("Product not found");
        }
        setProduct(foundProduct);
        setRating(foundProduct.rating); // Set initial rating from product data
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }, 500); // Simulate network delay

    return () => clearTimeout(timer);
  }, [id]);

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
    <DotLoader color="var(--color-danger)" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ p: 4, textAlign: "center" }}>
        <Typography color="error" variant="h6">
          {error}
        </Typography>
        <Button onClick={() => navigate("/")} sx={{ mt: 2 }}>
          Back to Home
        </Button>
      </Box>
    );
  }

    
const HandleBuy = () => {
  dispatch(
    addToProduct({
     id: product.id,
        name: product.name,
        price: product.price,
        image: product.img,
        quantity: counter // Include the current quantity
    })
  )
    navigate('/cart')

}





  return (
    <Box sx={{ p: 4 }}>
      <IconButton onClick={() => navigate(-1)} sx={{ mb: 2 }}>
        <ArrowBackIcon />
      </IconButton>

      <Grid container spacing={10} px={{ xs: 0, md: 10 }}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              bgcolor: "var(--success-bg)",
              borderRadius: 2,
              Width: "100%",
              height:"80%"
              
            }}
          >
            <Box
            component="img"
              src={product.img}
              alt={product.name}
              sx={{
                width: { xs: "180px", sm: "300px", md: "300px" },
                height: { xs: "210px", sm: "350px", md: "400px" },
                objectFit: "contain",
                maxWidth: "100%",
                maxHeight: "100%",
              }}
            />
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Stack spacing={3}>
            <Typography
              sx={{ fontSize: "var(--font-standard)", fontWeight: 600 }}
            >
              {product.name}
            </Typography>

            <Stack direction="row" spacing={2} alignItems="center">
              <Rating
                value={rating}
                onChange={(e, newValue) => setRating(newValue)}
                precision={0.5}
              />
              <Typography>({product.stock} in stock)</Typography>
            </Stack>

            <Stack direction="row" spacing={2} alignItems="center">
              <Typography variant="h5" color="error">
                ${product.price}
              </Typography>
              <Typography
                sx={{
                  textDecoration: "line-through",
                  color: "text.secondary",
                }}
              >
                $
                {Math.round(
                  product.price / (1 - parseInt(product.discount) / 100)
                )}
              </Typography>
              <Typography
                sx={{
                  bgcolor: "error.main",
                  color: "white",
                  px: 1,
                  borderRadius: 1,
                }}
              >
                {product.discount}
              </Typography>
            </Stack>

            <Typography variant="body1" paragraph>
              {product.description}
            </Typography>

            <Divider />

            <Typography variant="h6">Features:</Typography>
            <Box component="ul" sx={{ pl: 2, listStyleType: "none" }}>
              {product.features.map((feature, index) => (
                <Box
                  component="li"
                  key={index}
                  sx={{ display: "flex", alignItems: "center", mb: 1 }}
                >
                  <Box
                    sx={{
                      width: 6,
                      height: 6,
                      bgcolor: "error.main",
                      borderRadius: "50%",
                      mr: 1,
                    }}
                  />
                  <Typography>{feature}</Typography>
                </Box>
              ))}
            </Box>

            <Box display={"flex"} flexDirection= {{  xs:"column" , md: "row"}} gap={2} sx={{ mt: 2 }}>
              {/* <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
                <Box sx={{ border: "1px solid #00000080" }}>
                  <IconButton  onClick={HandleDecrease} sx={{ color:"black"}}>
                    <RemoveIcon />
                  </IconButton>
                </Box >
                <Box sx={{ border: "1px solid #00000080", height:40 }}>
                  <Typography sx={{ fontSize:"var(--font-standard)" , px:4}} > {counter} </Typography>
                </Box>
                <Box sx={{ border: "1px solid #00000080" }}>
                  <IconButton onClick={HandleIncrease} sx={{ color:"black"}}>
                    <AddIcon />
                  </IconButton>
                </Box>
              </Box> */}
              <Box display={"flex"} flexDirection={"row"} gap={2} >
               <Button
                variant="contained"
                color="error"
                sx={{ px: 4, py: 1.5 }}
                size="large"
                onClick={HandleBuy}
              >
                Buy Now
              </Button>
              <IconButton
                sx={{
                  border: "1px solid",
                  borderColor: "divider",
                  "&:hover": {
                    color: "error.main",
                    borderColor: "error.main",
                  },
                }}
                size="large"
              >
                <FavoriteBorderOutlinedIcon />
              </IconButton>
              </Box>

            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductDt;
