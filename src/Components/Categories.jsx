import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import CategoryImg from "../images/Categories_img.png";
import styled from 'styled-components';


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

  const bgColors = {
    days: "var(--white-bg)", // Red
    hours: "var(--white-bg)", // Blue
    minutes: "var(--white-bg)", // Green
    seconds: "var(--white-bg)", // Yellow
  };

  return (
    <Stack direction={"row"} spacing={1} alignItems={"center"}>
      {["days", "hours", "minutes", "seconds"].map((unit, index) => (
        <Stack key={index} alignItems={"center"} direction={"row"} >
          <Stack alignItems={"center"} sx={{ background: bgColors[unit] , borderRadius:"50%", p:1}}>
            <Typography
              sx={{
                fontSize: "var(--font-sm)",
                fontWeight: 700,
                minWidth: "50px",
                textAlign: "center",
              }}
            >
              {timeLeft[unit]}
            </Typography>
            <Typography sx={{ fontSize: "var(--font-xs)", fontWeight: 600 }}>
              {unit}
            </Typography>
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
};
export default function Categories() {
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 10); // Adds 5 days

  return (
    <>
      <Box
        width={"90%"}
        height={"450px"}
        sx={{ background: "black" }}
        mx={"auto"}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
      >
        <Stack
          display={"flex"}
          direction={"column"}
          justifyContent={"space-evenly"}
          height={"100%"}  

        >
          <Typography
            sx={{
              color: "var(--color-green)",
              fontSize: "var(--font-sm)",
              fontWeight: 600,
            }}
          >
            Categories
          </Typography>
          <Typography
            sx={{
              color: "var(--text-color)",
              fontSize: "var(--font-xl)",
              fontWeight: 600,
            }}
          >
            Enhance Your <br /> Music Experience
          </Typography>
          <CountdownTimer endDate={endDate} />

          <StyledWrapper>
      <button>
        <span>Buy Now!</span>
      </button>
    </StyledWrapper>
        </Stack>
        <Stack
          width={"500px"}
          height={"300px"}
          alignItems={"center"}
          justifyContent={"center"}
          position={"relative"}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              position: "absolute",
              zIndex: 0, // Ensure it's behind the image
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              "&::after": {
                content: '""',
                position: "absolute",
                width: "100%",
                height: "400px",
                background: "rgba(181, 175, 175, 0.5)",
                borderRadius: "50%",
                filter: "blur(130px)",
              },
            }}
          ></Box>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              position: "relative",
              zIndex: 1,
            }}
          >
            <img
              src={CategoryImg}
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>
        </Stack>
      </Box>
      <br />
      <br />
    </>
  );
}

const StyledWrapper = styled.div`
  button {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background: var(--color-green);
    font-family: "Montserrat", sans-serif;
    box-shadow: 0px 6px 24px 0px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    cursor: pointer;
    border: none;
  }

  button:after {
    content: " ";
    width: 0%;
    height: 100%;
    background: var(--color-light);
    position: absolute;
    transition: all 0.4s ease-in-out;
    right: 0;
    color: var(--color-green)
  }

  button:hover::after {
    right: auto;
    left: 0;
    width: 100%;
  }

  button span {
    text-align: center;
    text-decoration: none;
    width: 100%;
    padding: 18px 25px;
    color: #fff;
    font-size: 1.125em;
    font-weight: 700;
    letter-spacing: 0.3em;
    z-index: 20;
    transition: all 0.3s ease-in-out;
  }

  button:hover span {
    color: var(--color-black);
    animation: scaleUp 0.3s ease-in-out;
  }

  @keyframes scaleUp {
    0% {
      transform: scale(1);
    }

    50% {
      transform: scale(0.95);
    }

    100% {
      transform: scale(1);
    }
  }`;

