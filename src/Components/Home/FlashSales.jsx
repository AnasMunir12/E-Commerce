import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import { IconButton, Stack, Typography, Box, Rating } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";


import styled from "styled-components";

import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Remote from "../../images/xremote.png";
import Keyboard from "../../images/keyboard.png";
import Lcd from "../../images/LCD.png";
import { useDispatch, useSelector } from "react-redux";
import {  addToProduct } from "../Utils/itemSlice";

// ⏳ Countdown Timer Component
const CountdownTimer = ({ endDate }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(endDate) - new Date();
    return difference > 0
      ? {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        }
      : { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [endDate]);

  return (
    <Stack direction={"row"} spacing={{xs: 1, md:3 }} alignItems={"center"}>
      {["days", "hours", "minutes", "seconds"].map((unit, index) => (
        <Stack key={index} alignItems={"center"} direction={"row"}>
          <Stack alignItems={"center"}>
            <Typography sx={{ fontSize: "var(--font-xs)", fontWeight: 600 }}>
              {unit}
            </Typography>
            <Typography
              sx={{
                fontSize: "var(--font-lg)",
                fontWeight: 700,
                minWidth: { xs: "20px", md: " 50px" },
                textAlign: "center",
              }}
            >
              {timeLeft[unit]}
            </Typography>
          </Stack>
          {index < 3 && (
            <Typography
              sx={{
                fontSize: "var(--font-lg)",
                fontWeight: 700,
                textAlign: "center",
                color: "red",
                mx: 0.5,
                mt: 1.5,
              }}
            >
              :
            </Typography>
          )}
        </Stack>
      ))}
    </Stack>
  );
};

export default function FlashSales() {

  const dispatch = useDispatch(); // when I have to store  item
  const cartItems = useSelector((state) => state.items.cartItems); // when I get the item
  console.log("Items Data", cartItems);

  const sliderRef = useRef(null);
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 5); // Adds 5 days
  const navigate = useNavigate();

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1100, // md screen
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 800, // sm screen
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // xs screen
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const ProductCard = styled(Link)`
    background: var(--success-bg);
    border-radius: 4px;
    width: 250px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.3s ease-in-out;
    margin: 0 auto;

    &:hover {
      transform: scale(1.01);
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
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
  `;

  const FlashSalesData = [
    {
      id: "flash-1",
      img: Remote,
      name: "HAVIT HV-G92 Gamepad",
      price: 120,
      discount: "-40%",
    },
    {
      id: "flash-2",
      img: Keyboard,
      name: "AK-900 Wired Keyboard",
      price: 960,
      discount: "-20%",
    },
    {
      id: "flash-3",
      img: Lcd,
      name: "IPS LCD Gaming Monitor",
      price: 370,
      discount: "-10%",
    },
    {
      id: "flash-4",
      img: Keyboard,
      name: "AK-900 Wired Keyboard",
      price: 960,
      discount: "-20%",
    },
    {
      id: "flash-5",
      img: Remote,
      name: "HAVIT HV-G92 Gamepad",
      price: 120,
      discount: "-40%",
    },
    {
      id: "flash-6",
      img: Lcd,
      name: "IPS LCD Gaming Monitor",
      price: 370,
      discount: "-10%",
    },
  ];

  const [rating, setRating] = useState(Array(FlashSalesData.length).fill(3));
  const ratingLabels = ["Poor", "Fair", "Good", "Very Good", "Excellent"];

  return (
    <>
      {/* Section Header */}
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
          Today's
        </Typography>
      </Stack>

      <Stack
        mx={"50px"}
        mt={2}
        direction={{ xs: "column", sm: "column", md: "row" }}
        justifyContent={"space-between"}
      
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          gap={{ xs: "20px", md: "80px" }}
        >
          <Typography sx={{ fontSize: "var(--font-lg)", fontWeight: 600 }}>
            Flash Sales
          </Typography>
          <CountdownTimer endDate={endDate} />
        </Stack>

        {/* Navigation Buttons */}
        <Stack direction={"row"} >
          <IconButton
            onClick={() => sliderRef.current.slickPrev()}
            disableRipple
          >
            <ArrowBackRoundedIcon
              sx={{
                fontSize: "var(--font-md)",
                border: "2px solid var(--success-bg)",
                borderRadius: "50%",
                color: "black",
                p: "4px",
              }}
            />
          </IconButton>
          <IconButton
            onClick={() => sliderRef.current.slickNext()}
            disableRipple
          >
            <ArrowForwardRoundedIcon
              sx={{
                fontSize: "var(--font-md)",
                border: "2px solid var(--success-bg)",
                borderRadius: "50%",
                color: "black",
                p: "4px",
              }}
            />
          </IconButton>
        </Stack>
      </Stack>

      <Stack display={"flex"} justifyContent={"center"} width="96%" mx="auto" mt={3}>
        <Box sx={{ width: "100%" }}>
          {/* Flash Sales Slider */}
          <Slider ref={sliderRef} {...settings}>
            {FlashSalesData.map((Sale, index) => (
              <Box key={index}>
                <Stack>
                  <ProductCard to={`/product/${Sale.id}`} sx={{ mx: "auto" }}>
                    {/* Product Card */}
                    <Stack
                      sx={{
                        background: "var(--success-bg)",
                        borderRadius: "4px",
                      }}
                      width={"100%"}
                      height={"230px"}
                      alignItems={"center"}
                    >
                      <Stack
                        direction={"row"}
                        justifyContent={"space-between"}
                        width={"100%"}
                      >
                        <Stack
                          sx={{
                            background: "var(--color-danger)",
                            borderRadius: "4px",
                            color: "var(--text-color)",
                            fontSize: "var(--font-xs)",
                            fontWeight: 400,
                            textAlign: "center",
                          }}
                          mt={1.5}
                          mx={1}
                          width={"45px"}
                          height={"20px"}
                          alignItems="center"
                          justifyContent="center"
                        >
                          {Sale.discount}
                        </Stack>
                        <Stack>
                          <IconButton>
                            <FavoriteBorderOutlinedIcon
                              sx={{
                                // background: "white",
                                borderRadius: "15px",
                                p: "3px",
                              }}
                            />
                          </IconButton>
                          <IconButton>
                            <VisibilityOutlinedIcon
                              sx={{
                                // background: "white",
                                borderRadius: "15px",
                                p: "3px",
                              }}
                            />
                          </IconButton>
                        </Stack>
                      </Stack>
                      <Stack
                        width={"160px"}
                        height={"140px"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        mt={-5}
                        sx={{ cursor: "pointer" }}
                      >
                        <img
                          src={Sale.img}
                          alt={Sale.name}
                          style={{ maxWidth: "100%", maxHeight: "100%" }}
                        />
                      </Stack>
                    </Stack>
                  </ProductCard>
                  {/* Add to card Button */}
                  <Box
                    component={"button"}
                    onClick={() => {
                      console.log("Dispatching:", {
                        // Debug log
                        name: Sale.name,
                        price: Sale.price,
                        image: Sale.img,
                        id: Sale.id,
                      });
                      dispatch(
                        addToProduct({
                          id: Sale?.id,
                          name: Sale?.name,
                          price: Sale?.price,
                          image: Sale?.img,
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
                  {/* {cartItems?.map((item) => (
                    <Typography key={item.id}>
                      {item.name} - ${item.price} (Qty: {item.quantity})
                    </Typography>
                  ))} */}

                  {/* Name and Price */}
                  <Stack mt={2} sx={{ mx: "auto" }}>
                    <Typography sx={{ fontWeight: 500 }}>
                      {Sale.name}
                    </Typography>
                    <Typography sx={{ color: "var(--color-danger)" }}>
                      ${Sale.price}
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
                        <Typography>
                          ({ratingLabels[rating[index] - 1]})
                        </Typography>
                      )}
                    </Box>
                  </Stack>
                </Stack>
              </Box>
            ))}
          </Slider>
        </Box>
      </Stack>

      {/* <Stack direction={"row"} justifyContent={"center"} mt={"20px"}>
        <StyledWrapper>
          <button>
            <span>View All Products</span>
          </button>
        </StyledWrapper>
      </Stack> */}

      <Stack
        sx={{ border: "0.5px solid black", opacity: "20%", mt: 12 }}
        width={"80%"}
        mx={"auto"}
      ></Stack>
    </>
  );
}

// const StyledWrapper = styled.div`
//   button {
//     position: relative;
//     margin: 0;
//     padding: 12px 42px;
//     outline: none;
//     text-decoration: none;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     cursor: pointer;
//     border: none;
//     text-transform: capitalize;
//     background-color: var(--color-danger);
//     border-radius: 4px;
//     color: var(--text-color);
//     font-weight: 500;
//     font-size: var(--font-sm);
//     font-family: inherit;
//     z-index: 0;
//     overflow: hidden;
//     transition: all 0.3s cubic-bezier(0.02, 0.01, 0.47, 1);
//   }

//   button:hover {
//     animation: sh0 0.5s ease-in-out both;
//   }

//   @keyframes sh0 {
//     0% {
//       transform: rotate(0deg) translate3d(0, 0, 0);
//     }

//     25% {
//       transform: rotate(7deg) translate3d(0, 0, 0);
//     }

//     50% {
//       transform: rotate(-7deg) translate3d(0, 0, 0);
//     }

//     75% {
//       transform: rotate(1deg) translate3d(0, 0, 0);
//     }

//     100% {
//       transform: rotate(0deg) translate3d(0, 0, 0);
//     }
//   }

//   button:hover span {
//     animation: storm 0.7s ease-in-out both;
//     animation-delay: 0.06s;
//   }

//   button::before,
//   button::after {
//     content: "";
//     position: absolute;
//     right: 0;
//     bottom: 0;
//     width: 100px;
//     height: 100px;
//     border-radius: 50%;
//     background: #fff;
//     opacity: 0;
//     transition: transform 0.15s cubic-bezier(0.02, 0.01, 0.47, 1),
//       opacity 0.15s cubic-bezier(0.02, 0.01, 0.47, 1);
//     z-index: -1;
//     transform: translate(100%, -25%) translate3d(0, 0, 0);
//   }

//   button:hover::before,
//   button:hover::after {
//     opacity: 0.15;
//     transition: transform 0.2s cubic-bezier(0.02, 0.01, 0.47, 1),
//       opacity 0.2s cubic-bezier(0.02, 0.01, 0.47, 1);
//   }

//   button:hover::before {
//     transform: translate3d(50%, 0, 0) scale(0.9);
//   }

//   button:hover::after {
//     transform: translate(50%, 0) scale(1.1);
//   }
// `;
