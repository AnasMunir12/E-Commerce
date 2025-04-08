import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import { IconButton, Stack, Typography, Box, Rating } from "@mui/material";
  import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
  import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import styled from "styled-components";  


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Remote from "../images/xremote.png";
import Keyboard from "../images/keyboard.png";
import Lcd from "../images/LCD.png";

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
    <Stack direction={"row"} spacing={1} alignItems={"center"}>
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
                minWidth: "50px",
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
  const sliderRef = useRef(null);
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 5); // Adds 5 days


  
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows:false,
  };


  const ProductCard = styled(Stack)`
  background: var(--success-bg);
  border-radius: 4px;
  width: 250px;
  height: 230px;
  align-items: center;
  transition: transform 0.3s ease-in-out;
  
  &:hover {
    transform: scale(1.05);
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
    { img: Remote, name: "HAVIT HV-G92 Gamepad", price: 120, discount: "-40%" },
    {
      img: Keyboard,
      name: "AK-900 Wired Keyboard",
      price: 960,
      discount: "-20%",
    },
    { img: Lcd, name: "IPS LCD Gaming Monitor", price: 370, discount: "-10%" },
    {
      img: Keyboard,
      name: "AK-900 Wired Keyboard",
      price: 960,
      discount: "-20%",
    },
    { img: Remote, name: "HAVIT HV-G92 Gamepad", price: 120, discount: "-40%" },
    { img: Lcd, name: "IPS LCD Gaming Monitor", price: 370, discount: "-10%" },
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
        direction={"row"}
        justifyContent={"space-between"}
      >
        <Stack direction={"row"} gap={"80px"}>
          <Typography sx={{ fontSize: "var(--font-lg)", fontWeight: 600 }}>
            Flash Sales
          </Typography>
          <CountdownTimer endDate={endDate} />

        </Stack>

        {/* Navigation Buttons */}
        <Stack direction={"row"}>
          <IconButton onClick={() => sliderRef.current.slickPrev()} disableRipple>
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
          <IconButton onClick={() => sliderRef.current.slickNext()} disableRipple>
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

<Stack display={"flex"} justifyContent={"center"}  width={"96%"} mx={6} >
      {/* Flash Sales Slider */}
      <Slider ref={sliderRef} {...settings}  > 
        {FlashSalesData.map((Sale, index) => (
            <Stack key={index} >
              <ProductCard>
              {/* Product Card */}
              <Stack
                sx={{ background: "var(--success-bg)", borderRadius: "4px" }}
                width={"250px"}
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
                          background: "white",
                          borderRadius: "15px",
                          p: "3px",
                        }}
                      />
                    </IconButton>
                    <IconButton>
                      <VisibilityOutlinedIcon
                        sx={{
                          background: "white",
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
              {/* Name and Price */}
              <Typography sx={{ fontWeight: 500, mt: 2 }}>
                {Sale.name}
              </Typography>
              <Typography sx={{ color: "var(--color-danger)" }}>
                ${Sale.price}
              </Typography>
              <Box display={"flex"} gap={2} alignItems={"center"} >
                 <AnimatedRating
                   name={`rating-${index}`}
                   value={rating[index]}
                   onChange={(e, newValue) => {
                     const newRating = [...rating];
                     newRating[index] = newValue;
                     setRating(newRating);
                   }}
                 />
                {rating[index] > 0 &&  <Typography>({ratingLabels[rating[index] - 1]})</Typography> }
               </Box>
              
            </Stack>
        ))}
      </Slider>
      </Stack>

      <Stack direction={"row"} justifyContent={"center"} mt={"20px"}> 
      <StyledWrapper>
      <button>
        <span>View All Products</span>
      </button>
    </StyledWrapper>
    </Stack>

      <Stack sx={{border: "0.5px solid black", opacity:"20%", mt:6}} width={"80%"} mx={"auto"}></Stack>

    </>
  );
}



const StyledWrapper = styled.div`
  button {
    position: relative;
    margin: 0;
    padding: 12px 42px;
    outline: none;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
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
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #fff;
    opacity: 0;
    transition: transform 0.15s cubic-bezier(0.02, 0.01, 0.47, 1), opacity 0.15s cubic-bezier(0.02, 0.01, 0.47, 1);
    z-index: -1;
    transform: translate(100%, -25%) translate3d(0, 0, 0);
  }

  button:hover::before,
  button:hover::after {
    opacity: 0.15;
    transition: transform 0.2s cubic-bezier(0.02, 0.01, 0.47, 1), opacity 0.2s cubic-bezier(0.02, 0.01, 0.47, 1);
  }

  button:hover::before {
    transform: translate3d(50%, 0, 0) scale(0.9);
  }

  button:hover::after {
    transform: translate(50%, 0) scale(1.1);
  }
`;

