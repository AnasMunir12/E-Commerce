import {
  IconButton,
  Stack,
  Typography,
  Rating,
  Box,
  Grid,
} from "@mui/material";
import React, { useState } from "react";

import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";


import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {  addToProduct } from "../Utils/itemSlice";


import Dogfood from "../../images/Explore/Dogfood.png";
import Dslr from "../../images/Explore/camera.png";
import Laptop from "../../images/Explore/Laptop.png";
import Curulogy from "../../images/Explore/curology.png";
import Car from "../../images/Explore/minicar.png";
import Soccershoes from "../../images/Explore/shoes.png";
import Xremote from "../../images/Explore/X_remote.png";
import Jacket from "../../images/Explore/jacket.png";

import styled from "styled-components";

const ProductCard = styled(Stack)`
  background: var(--success-bg);
  border-radius: 4px;
  width: 250px;
  height: 230px;
  align-items: center;
  transition: transform 0.3s ease-in-out, opacity 0.4s ease;
  opacity: 0;
  animation: fadeIn 0.4s forwards;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
`;


const IconButtonStyled = styled(IconButton)`
  background: white;
  border-radius: 15px;
  padding: 3px;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: var(--color-danger);
    color: white;
  }
`;

// Styled rating component with animation
const AnimatedRating = styled(Rating)`
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  & .MuiRating-iconFilled {
    transition: transform 0.2s ease-in-out;
  }

  & .MuiRating-iconFilled:hover {
    transform: scale(1.2);
  }
     overflow: hidden;
  transition: max-height 0.6s ease, opacity 0.6s ease;
  max-height: ${({ show }) => (show ? "2000px" : "600px")};
  opacity: ${({ show }) => (show ? 1 : 1)};
`;

export default function ExploreProducts() {

    const dispatch = useDispatch(); // when I have to store  item
    const cartItems = useSelector((state) => state.items.cartItems); // when I get the item
    console.log("Items Data", cartItems);

      const navigate = useNavigate();

      
  
  const [ showall , setShowall ]=useState(false);

  const ExploreProductData = [
    { id: "explore_1", img: Dogfood, name: "Breed Dry Dog Food", price: 100 },
    { id: "explore_2",img: Dslr, name: "CANON EOS DSLR Camera", price: 360 },
    { id: "explore_3",img: Laptop, name: "ASUS FHD Gaming Laptop", price: 700 },
    { id: "explore_4",img: Curulogy, name: "Curology Product Set ", price: 500 },
    { id: "explore_5",img: Car, name: "Kids Electric Car", price: 960 },
    { id: "explore_6",img: Soccershoes, name: "Jr. Zoom Soccer Cleats", price: 1160 },
    { id: "explore_7",img: Xremote, name: "GP11 Shooter USB Gamepad", price: 860 },
    { id: "explore_8",img: Jacket, name: "Quilted Satin Jacket", price: 200 },
  ];

  const [rating, setRating] = useState(
    Array(ExploreProductData.length).fill(3)
  );
  const ratingLabels = ["Poor", "Fair", "Good", "Very Good", "Excellent"];

  return (
    <>
      <Stack
        mt={"100px"}
        direction={"row"}
        alignItems={"center"}
        gap={"16px"}
        ml={"50px"}
      >
        <Stack
          sx={{
            bgcolor: "var(--color-danger)",
            width: "15px",
            height: "30px",
            borderRadius: "4px",
          }}
        ></Stack>
        <Typography
          sx={{
            color: "var(--color-danger)",
            fontSize: "var(--font-sm)",
            fontWeight: 600,
          }}
        >
          Our Products
        </Typography>
      </Stack>

      <Stack
        mx={"50px"}
        mt={2}
        direction={"row"}
        justifyContent={"space-between"}
      >
        <Stack direction={"row"} gap={"80px"}>
          <Typography sx={{  fontSize: { xs:"var(--font-sm)" , sm: "var(--font-md)" , md: "var(--font-lg)" }, fontWeight: 600 }}>
            Explore Our Products
          </Typography>
        </Stack>
 
      </Stack>

      <Box display={"flex"} alignItems="center" justifyContent="center" width="100%"  mx={"auto"}>
        <AnimatedGridWrapper show={showall}>
        <Grid 
          container
          justifyContent={"center"}
          spacing={4}
          mt={3}
          maxWidth="lg"
        >
          {( showall? ExploreProductData:  ExploreProductData.slice(0,4)).map((Explore, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3}  key={index} display={"flex"} justifyContent={"center"}>
              <Box>
              {/* Product Card */}
              <ProductCard  onClick={() => navigate(`/explore_product/${Explore.id}`)}  sx={{ cursor: "pointer" }}>
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  width={"100%"}
                >
                  <Stack display={"flex"} direction={"column"} mx={25}>
                    <IconButtonStyled>
                      <FavoriteBorderOutlinedIcon />
                    </IconButtonStyled>
                    <IconButtonStyled>
                      <VisibilityOutlinedIcon />
                    </IconButtonStyled>
                  </Stack>
                </Stack>
                <Stack
                  width={"160px"}
                  height={"140px"}
                  alignItems={"center"}
                  justifyContent={"center"}
                mt={{ xs: 0, sm: -3, md: -5 }}
                  sx={{ cursor: "pointer" }}
                >
                  <img
                    src={Explore.img}
                    alt={Explore.name}
                    style={{ maxWidth: "100%", maxHeight: "100%" , objectFit:"contain"}}
                  />
                </Stack>
              </ProductCard>
                            {/* Add to card Button */}
                                <Box
                                  component={"button"}
                                  onClick={() => {
                                    console.log("Dispatching:", {
                                      // Debug log
                                      name: Explore.name,
                                      price: Explore.price,
                                      image: Explore.img,
                                      id: Explore.id,
                                    });
                                    dispatch(
                                      addToProduct({
                                        id: Explore?.id,
                                        name: Explore?.name,
                                        price: Explore?.price,
                                        image: Explore?.img,
                                      })
                                    );
                                    navigate("/cart");
                                  }}
                                  display={"flex"}
                                  alignItems={"center"}
                                  justifyContent={"center"}
                                  sx={{
                                    backgroundColor: "black", // Fixed black background
                                    borderRadius: "0 0 4px 4px",
                                    color: "white", // White text
                                    padding: "6px 12px",
                                    spacing: 2,
                                    gap: 1,
                                    width: "245px",
                                    margin: "0 auto",
                                    cursor: "pointer",
                                  }}
                                >
                                  <IconButton sx={{ color: "white" }}>
                                    <ShoppingCartOutlinedIcon />
                                  </IconButton>
                                  <Typography>Add to Cart</Typography>
                                </Box>

              {/* Product Info */}
              <Typography sx={{ fontWeight: 500, mt: 2 }}>
                {Explore.name}
              </Typography>
              <Stack direction={"row"}>
                <Typography sx={{ color: "var(--color-danger)" }}>
                  ${Explore.price}
                </Typography>
                <Box display={"flex"} gap={2} alignItems={"center"}>
                  <AnimatedRating
                    name={`rating-${index}`}
                    value={rating[index]}
                    onChange={(e, newValue) => {
                      const newRating = [...rating];
                      newRating[index] = newValue;
                      setRating(newRating);
                    }}
                  />
                  {rating[index] > 0 && (
                    <Typography>({ratingLabels[rating[index] - 1]})</Typography>
                  )}
                </Box>
                
              </Stack>
              </Box>
            </Grid>
          ))}
        </Grid>
        </AnimatedGridWrapper>
      </Box>

      <Stack width="100%" mt={"40px"} alignItems="center">
        <StyledWrapper>
          <button onClick={() => setShowall(!showall)}>
            <span>{ showall ? "View Less" : "View All Products" }</span>
          </button>
        </StyledWrapper>
      </Stack>
    </>
  );
}


const AnimatedGridWrapper = styled.div`
  transition: opacity 0.6s ease-in-out, transform 0.4s ease;
  opacity: ${({ show }) => (show ? 1 : 0.7)};
  transform: ${({ show }) => (show ? "scale(1)" : "scale(0.98)")};
`;



const StyledWrapper = styled.div`
 width: 100%;
  display: flex;
  justify-content: center;


  button {
    position: relative;
    margin: 0;
    padding: 12px 42px;
    outline: none;
    text-decoration: none;
    cursor: pointer;
    border: none;
    text-transform: capitalize;
    background-color: var(--color-danger);
    border-radius: 4px;
    color: var(--text-color);
    font-weight: 500;
    font-size: var(--font-sm);
    font-family: inherit;
    z-index: 0;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.02, 0.01, 0.47, 1);
  }


  button:hover {
    animation: sh0 0.5s ease-in-out both;
  }

  @keyframes sh0 {
    0% {
      transform: rotate(0deg) translate3d(0, 0, 0);
    }

    25% {
      transform: rotate(7deg) translate3d(0, 0, 0);
    }

    50% {
      transform: rotate(-7deg) translate3d(0, 0, 0);
    }

    75% {
      transform: rotate(1deg) translate3d(0, 0, 0);
    }

    100% {
      transform: rotate(0deg) translate3d(0, 0, 0);
    }
  }

  button:hover span {
    animation: storm 0.7s ease-in-out both;
    animation-delay: 0.06s;
  }

  button::before,
  button::after {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #fff;
    opacity: 0;
    transition: transform 0.15s cubic-bezier(0.02, 0.01, 0.47, 1),
      opacity 0.15s cubic-bezier(0.02, 0.01, 0.47, 1);
    z-index: -1;
    transform: translate(100%, -25%) translate3d(0, 0, 0);
  }

  button:hover::before,
  button:hover::after {
    opacity: 0.15;
    transition: transform 0.2s cubic-bezier(0.02, 0.01, 0.47, 1),
      opacity 0.2s cubic-bezier(0.02, 0.01, 0.47, 1);
  }

  button:hover::before {
    transform: translate3d(50%, 0, 0) scale(0.9);
  }

  button:hover::after {
    transform: translate(50%, 0) scale(1.1);
  }
`;
