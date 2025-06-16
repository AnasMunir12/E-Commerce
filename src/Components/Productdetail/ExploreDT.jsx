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

import Dogfood from "../../images/Explore/Dogfood.png";
import Dslr from "../../images/Explore/camera.png";
import Laptop from "../../images/Explore/Laptop.png";
import Curulogy from "../../images/Explore/curology.png";
import Car from "../../images/Explore/minicar.png";
import Soccershoes from "../../images/Explore/shoes.png";
import Xremote from "../../images/Explore/X_remote.png";
import Jacket from "../../images/Explore/jacket.png";

import { DotLoader } from "react-spinners";
import { addToProduct } from "../Utils/itemSlice";
import { useDispatch } from "react-redux";


export default function SellingProductDT() {
  const navigate = useNavigate();

    const { id} = useParams();
    const [ product , setProduct] = useState(null);
    const [loading, setLoading ] = useState(true);
    const [ error, setError] = useState(null);
    const [ rating, setRating] = useState(3);

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

    const exploreProduct = [
       {
    id: "explore_1",
    img: Dogfood,
    name: "Breed Dry Dog Food",
    price: 100,
    description: "High-protein, balanced dog food designed for all breeds. Supports immune system and healthy digestion.",
    features: [
      "Rich in essential vitamins and minerals",
      "No artificial flavors or preservatives",
      "Suitable for all dog sizes",
      "Veterinarian recommended"
    ],
    stock: 25,
    rating: 4.2
  },
  {
id: "explore_2",
    img: Dslr,
    name: "CANON EOS DSLR Camera",
    price: 360,
    description: "Professional DSLR camera with HD recording and interchangeable lenses. Perfect for photography enthusiasts.",
    features: [
      "24.1MP CMOS Sensor",
      "Full HD video recording",
      "Wi-Fi and NFC connectivity",
      "Interchangeable lens support"
    ],
    stock: 7,
    rating: 4.7
  },
  {
id: "explore_3",
    img: Laptop,
    name: "ASUS FHD Gaming Laptop",
    price: 700,
    description: "Powerful gaming laptop with Full HD display, fast graphics, and efficient cooling for intense gaming.",
    features: [
      "Intel Core i7 Processor",
      "NVIDIA GTX 1650 GPU",
      "144Hz Full HD Display",
      "RGB Backlit Keyboard"
    ],
    stock: 10,
    rating: 4.6
  },
  {
id: "explore_4",
    img: Curulogy,
    name: "Curology Product Set",
    price: 500,
    description: "Personalized skincare set to help clear acne and hydrate skin. Dermatologist-formulated.",
    features: [
      "Customized skincare formula",
      "Includes cleanser and moisturizer",
      "Fragrance-free",
      "Dermatologist tested"
    ],
    stock: 18,
    rating: 4.4
  },
  {
id: "explore_5",
    img: Car,
    name: "Kids Electric Car",
    price: 960,
    description: "Electric ride-on car with realistic design, remote control option, and fun features for kids.",
    features: [
      "Battery-powered with remote control",
      "LED headlights and horn",
      "MP3 player support",
      "Safety seat belt"
    ],
    stock: 6,
    rating: 4.8
  },
  {
id: "explore_6",
    img: Soccershoes,
    name: "Jr. Zoom Soccer Cleats",
    price: 1160,
    description: "Lightweight junior soccer cleats designed for speed and agility on firm ground surfaces.",
    features: [
      "Synthetic leather upper",
      "Multi-ground traction",
      "Cushioned insole",
      "Ankle collar support"
    ],
    stock: 14,
    rating: 4.5
  },
  {
id: "explore_7",
    img: Xremote,
    name: "GP11 Shooter USB Gamepad",
    price: 860,
    description: "Ergonomic USB gamepad with vibration feedback and wide compatibility. Ideal for PC and console gamers.",
    features: [
      "Dual motor vibration",
      "Plug-and-play USB interface",
      "Responsive trigger buttons",
      "Supports Windows and Android"
    ],
    stock: 20,
    rating: 4.3
  },
  {
id: "explore_8",
    img: Jacket,
    name: "Quilted Satin Jacket",
    price: 200,
    description: "Stylish quilted satin jacket with a modern fit. Perfect for casual and semi-formal wear.",
    features: [
      "Silky satin exterior",
      "Zippered front closure",
      "Inner lining for warmth",
      "Two side pockets"
    ],
    stock: 22,
    rating: 4.1
  }
    ]

    useEffect(() => {
        const timer = setTimeout(() => {
            try{
                const foundProduct = exploreProduct.find((p) => p.id === id)
                if(!foundProduct){
                throw new Error("Product not Found")
                }
                setProduct(foundProduct);
                setRating(foundProduct.rating);
                setError(null);
            }
            catch (err) {
                setError(err.message)
            } finally {
                setLoading(false);
            }
        }, 500);
        return () => clearTimeout(timer);
    }, [id]);

    if(loading) {
        return(
            <Box   sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
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

      const HandleBuyExplore = () => {
        dispatch(
          addToProduct({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.img,
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

            <Box display={"flex"} flexDirection= {{  xs:"column" , md: "row"}} gap={2} sx={{ mt: 2 }}>
              <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
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
              </Box>
              <Box display={"flex"} flexDirection={"row"} gap={2} >
               <Button
                variant="contained"
                color="error"
                sx={{ px: 4, py: 1.5 }}
                size="large"
                onClick={HandleBuyExplore}
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

