import React, {
  useRef,
  useEffect,
  createContext,
  useState,
  useContext,
} from "react";
import { Box, Button, IconButton, Rating, Stack, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styled from "styled-components";  



import { Navigation } from "swiper/modules";

import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

import Remote from "../images/xremote.png";
import Keyboard from "../images/keyboard.png";
import Lcd from "../images/LCD.png";

// ✅ Correctly create Swiper context
export const SwiperContext = createContext(null);

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

// 🔥 Flash Sales Component
export default function FlashSales() {
  const swiperRef = useRef(null);
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 5); // Adds 5 days

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

  const [rating, setRating] = useState(Array(FlashSalesData.length).fill(2));
  const [hover, setHover] = useState(Array(FlashSalesData.length).fill(-1));
  const ratingLabels = ["Poor", "Fair", "Good", "Very Good", "Excellent"];

  return (
    <SwiperContext.Provider value={swiperRef}>
      {/* 🔹 Section Header */}
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
        {/* 🔹 Swiper Navigation Buttons */}
        <Stack direction={"row"}>
          <IconButton
            onClick={() => swiperRef.current?.slidePrev()}
            disableRipple
            disableTouchRipple
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
            onClick={() => swiperRef.current?.slideNext()}
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

      {/* 🔹 Swiper Section */}
      <Swiper
        modules={[Navigation]}
        slidesPerView={4}
        loop={false}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {FlashSalesData.map((Sale, index) => (
          <SwiperSlide key={index}>
            <Stack mx={6}>
              {/* 🔹 Product Card */}
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
              <Typography sx={{ fontWeight: 500, mt: 2 }}>
                {Sale.name}
              </Typography>
              <Typography sx={{ color: "var(--color-danger)" }}>
                ${Sale.price}
              </Typography>
              <Box display={"flex"} gap={2} alignItems={"center"}>
                <Rating
                  name={`rating-${index}`}
                  value={rating[index]}
                  onChange={(e, newValue) => {
                    const newRating = [...rating];
                    newRating[index] = newValue;
                    setRating(newRating);
                  }}
                />
                <Typography>({ratingLabels[rating[index] - 1]})</Typography>
              </Box>
            </Stack>
          </SwiperSlide>
        ))}
      </Swiper>
      <Stack direction={"row"} justifyContent={"center"} mt={"20px"}> 
            {/* <Button sx={{background:"var(--color-danger)", borderRadius:"4px", padding:"12px 42px 12px 42px", color:"var(--text-color)",fontWeight:500, fontSize:"var(--font-sm)" ,textTransform:"capitalize" }} >
      View All Products
      </Button> */}
      <StyledWrapper>
      <button>
        <span>View All Products</span>
      </button>
    </StyledWrapper>
      </Stack>
      <Stack sx={{border: "0.5px solid black", opacity:"30%", mt:5}} width={"80%"} mx={"auto"}></Stack>
      <br />
 
    </SwiperContext.Provider>


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



