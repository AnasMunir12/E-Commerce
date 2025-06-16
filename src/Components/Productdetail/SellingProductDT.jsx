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
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

import Coat from "../../images/coat.png";
import Bag from "../../images/duffle_bag.png";
import Cpu from "../../images/rgbcpu.png";
import Shelf from "../../images/bookshelf.png";

import { DotLoader } from "react-spinners";
import { addToProduct } from "../Utils/itemSlice";
import { useDispatch } from "react-redux";

export default function SellingProductDT() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [rating, setRating] = useState(3);

  const [counter, setCounter] = useState(1);

  const HandleIncrease = () => {
    setCounter((prev) => prev + 1);
  };
  const HandleDecrease = () => {
    if (counter > 1) {
      setCounter((prev) => prev - 1);
    }
  };

  const sellingProduct = [
    {
id:"sell-1",
      img: Coat,
      name: "The North Coat",
      price: 260,
      description:
        "Premium winter coat made from high-quality wool and insulated lining for maximum warmth and style.",
      features: [
        "Water-resistant fabric",
        "Adjustable hood",
        "Zipper and button closure",
        "Two front pockets",
      ],
      stock: 12,
      rating: 4.5,
    },
    {
      id: "sell-2",
      img: Bag,
      name: "Gucci Duffle Bag",
      price: 960,
      description:
        "Luxury designer duffle bag perfect for travel or weekend getaways. Made with genuine leather.",
      features: [
        "100% genuine leather",
        "Detachable shoulder strap",
        "Zipper closure",
        "Logo embossed hardware",
      ],
      stock: 5,
      rating: 4.8,
    },
    {
      id: "sell-3",
      img: Cpu,
      name: "RGB Liquid CPU Cooler",
      price: 160,
      description:
        "Efficient all-in-one liquid cooling system with customizable RGB lighting for high-performance CPUs.",
      features: [
        "Supports Intel & AMD sockets",
        "RGB LED pump and fans",
        "High-efficiency cooling plate",
        "Ultra-quiet operation",
      ],
      stock: 20,
      rating: 4.3,
    },
    {
      id: "sell-4",
      img: Shelf,
      name: "Small BookShelf",
      price: 360,
      description:
        "Modern small bookshelf made from engineered wood, ideal for home or office organization.",
      features: [
        "3-tier open shelf",
        "Scratch-resistant surface",
        "Compact and durable design",
        "Easy to assemble",
      ],
      stock: 15,
      rating: 4.1,
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        const foundProduct = sellingProduct.find((p) => p.id === id);
        if (!foundProduct) {
          throw new Error("Product not Found");
        }
        setProduct(foundProduct);
        setRating(foundProduct.rating);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }, 500);
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

  const HandleBuySell = () => {
    dispatch(
      addToProduct({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.img
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
              height: "80%",
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
              {/* <Typography
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
              </Typography> */}
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

            <Box
              display={"flex"}
              flexDirection={{ xs: "column", md: "row" }}
              gap={2}
              sx={{ mt: 2 }}
            >
              <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
                <Box sx={{ border: "1px solid #00000080" }}>
                  <IconButton onClick={HandleDecrease} sx={{ color: "black" }}>
                    <RemoveIcon />
                  </IconButton>
                </Box>
                <Box sx={{ border: "1px solid #00000080", height: 40 }}>
                  <Typography sx={{ fontSize: "var(--font-standard)", px: 4 }}>
                    {" "}
                    {counter}{" "}
                  </Typography>
                </Box>
                <Box sx={{ border: "1px solid #00000080" }}>
                  <IconButton onClick={HandleIncrease} sx={{ color: "black" }}>
                    <AddIcon />
                  </IconButton>
                </Box>
              </Box>
              <Box display={"flex"} flexDirection={"row"} gap={2}>
                <Button
                  variant="contained"
                  color="error"
                  sx={{ px: 4, py: 1.5 }}
                  size="large"
                  onClick={HandleBuySell}
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
}
