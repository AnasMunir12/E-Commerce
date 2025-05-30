import { Box, Grid, IconButton, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

import Image from "../../images/SideImage.png";
import Anasimg from "../../images/Anas.png";

import Twitttericon from "../../images/Social_Icon/twitter.png";
import InstaIcon from "../../images/Social_Icon/instagram.png";
import Linkdinicon from "../../images/Social_Icon/linkedin.png";

import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import Slider from "react-slick";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AboutService from "./AboutService";



const profileData = [
  {
    name: "Anas Munir",
    tiitle: "Managing Director",
    img: Anasimg,
  },
  {
    name: "Anas Munir",
    tiitle: "Product Designer",
    img: Anasimg,
  },
  {
    name: "Anas Munir",
    tiitle: "CEO & Founder",
    img: Anasimg,
  },
];

// Custom arrows
const ArrowBtn = ({ className, onClick, direction }) => (
  <IconButton
    className={className}
    onClick={onClick}
    sx={{
      backgroundColor: "white",
      border: "1px solid #ccc",
      width: 40,
      height: 40,
      zIndex: 10,
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      ...(direction === "left" ? { left: "-50px" } : { right: "-50px" }),
      "&:hover": {
        backgroundColor: "var(--color-danger)",
        color: "white",
      },
    }}
  >
    {direction === "left" ? <ArrowBackIosNewIcon /> : <ArrowForwardIosIcon />}
  </IconButton>
);

export default function AboutMain() {

  const { ref: countRef, inView } = useInView({
  triggerOnce: true, // Count only once
  threshold: 0.5 , // Trigger when 30% visible
});


  const sliderRef = useRef();

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 700,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  appendDots: dots => (
    <Box component="ul" sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
      {dots}
    </Box>
  ),
  customPaging: () => (
    <Box
      sx={{
        width: 10,
        height: 10,
        borderRadius: "50%",
        backgroundColor: "#ccc",
      }}
    />
  ),
  responsive: [
    {
      breakpoint: 768, // < 768: mobile
      settings: { slidesToShow: 1 },
    },
    {
      breakpoint: 1024, // < 1024: tablet
      settings: { slidesToShow: 2 },
    },
  ],
};


  return (
    <>
      {/* Breadcrumb */}
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
          to="/about"
          sx={{
            fontSize: "var(--font-sm)",
            textDecoration: "none",
            color: "black",
          }}
        >
          About
        </Typography>
      </Box>

      {/* Main Content */}
      <Grid container spacing={4} mt={4} alignItems="center" px={6}>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h4" fontWeight="bold" mb={2}>
              Our Story
            </Typography>
            <Typography
              color="text.secondary"
              lineHeight={1.8}
              sx={{ textAlign: "justify" }}
            >
              Welcome to <strong>Exclusive</strong> – where elegance meets
              innovation. Our journey began with a clear vision: to create an
              online shopping destination that delivers premium quality,
              cutting-edge fashion, and lifestyle products to trend-conscious
              individuals. What started as a dream quickly evolved into a
              trusted brand known for curating exclusive collections that
              inspire confidence and style. At Exclusive, we believe shopping
              should be more than just a transaction—it should be an experience.
              Our mission is to bring you the best, the boldest, and the most
              refined products, all in one place. Join us as we continue to
              redefine modern shopping, one exclusive piece at a time.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box>
            <img
              src={Image}
              alt="Our Story"
              style={{ width: "100%", borderRadius: "12px" }}
            />
          </Box>
        </Grid>
      </Grid>

      <Grid container mt={2} spacing={2} px={10} >
        <Grid item xs={12} sm={6} md={3}>
          <Box
          ref={countRef}
            sx={{
              border: "1px solid #0000004D",
              borderRadius: "10px",
              // boxShadow: "30%",
              boxShadow: "0px 4px 1000px rgba(0, 0, 0, 0.1)",
              transition: "all 0.5s ease",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "var(--color-danger)",
                color: "white",
                "& svg": {
                  color: "white",
                },
              },
            }}
            width={"100%"}
            maxWidth={"220px"}
            height={"45%"}
            mx={"auto"}
            // height={"180px"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            py={4}
          >
            <IconButton>
              <StorefrontOutlinedIcon
                sx={{ fontSize: "var(--font-xl)", color: "black" }}
              />
            </IconButton>
            <Typography sx={{ fontSize: "var(--font-md)", fontWeight: 750 }}>
                   {inView ? (
                <CountUp  end={10}  duration={5}  decimal={1} suffix="K" />
              ) : (
              "0"
              )}
            </Typography>
            <Typography sx={{ fontSize: "var(--font-xs)" }}>
              {" "}
              Sellers active our site
            </Typography>
          </Box>
        </Grid>
        {/* ................................................ */}
        <Grid item xs={12} sm={6} md={3}>
          <Box
          ref={countRef}
            sx={{
              border: "1px solid #0000004D",
              borderRadius: "10px",
              boxShadow: "0px 4px 1000px rgba(0, 0, 0, 0.1)",
              transition: "all 0.5s ease",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "var(--color-danger)",
                color: "white",
                "& svg": {
                  color: "white",
                },
              },
            }}
            width={"100%"}
            maxWidth={"220px"}
            height={"45%"}
            mx={"auto"}
            // height={"180px"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            py={4}
          >
            <IconButton>
              <MonetizationOnOutlinedIcon
                sx={{ fontSize: "var(--font-xl)", color: "black" }}
              />
            </IconButton>
            <Typography sx={{ fontSize: "var(--font-md)", fontWeight: 750 }}>
                          {inView ? (
                <CountUp  end={33}  duration={5}  decimal={1} suffix="K" />
              ) : (
              "0"
              )}
              
            </Typography>
            <Typography sx={{ fontSize: "var(--font-xs)" }}>
              {" "}
              Monthly product Sale
            </Typography>
          </Box>
        </Grid>
        {/* ................................................ */}
        <Grid item xs={12} sm={6} md={3}>
          <Box
          ref={countRef}
            sx={{
              border: "1px solid #0000004D",
              borderRadius: "10px",
              boxShadow: "0px 4px 1000px rgba(0, 0, 0, 0.1)",              
              transition: "all 0.5s ease",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "var(--color-danger)",
                color: "white",
                "& svg": {
                  color: "white",
                },
              },
            }}
            width={"100%"}
            maxWidth={"220px"}
            height={"45%"}
            mx={"auto"}
            // height={"180px"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            py={4}
          >
            <IconButton>
              <CardGiftcardOutlinedIcon
                sx={{ fontSize: "var(--font-xl)", color: "black" }}
              />
            </IconButton>
            <Typography sx={{ fontSize: "var(--font-md)", fontWeight: 750 }}>
              {inView ? (
                <CountUp  end={45}  duration={5}  decimal={1} suffix="K" />
              ) : (
              "0"
              )}

            </Typography>
            <Typography sx={{ fontSize: "var(--font-xs)" }}>
              {" "}
              Customer active in our site
            </Typography>
          </Box>
        </Grid>

        {/* ................................................ */}
        <Grid item xs={12} sm={6} md={3}>
          <Box
          ref={countRef}
            sx={{
              border: "1px solid #0000004D",
              borderRadius: "10px",
              boxShadow: "0px 4px 1000px rgba(0, 0, 0, 0.1)",
              transition: "all 0.5s ease",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "var(--color-danger)",
                color: "white",
                "& svg": {
                  color: "white",
                },
              },
            }}
            width={"100%"}
            maxWidth={"220px"}
            height={"45%"}
            mx={"auto"}
            // height={"180px"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            py={4}
          >
            <IconButton>
              <LocalAtmOutlinedIcon
                sx={{ fontSize: "var(--font-xl)", color: "black" }}
              />
            </IconButton>
            <Typography sx={{ fontSize: "var(--font-md)", fontWeight: 750 }}>
                          {inView ? (
                <CountUp  end={25}  duration={5}  decimal={1} suffix="K" />
              ) : (
              "0"
              )}
            </Typography>
            <Typography sx={{ fontSize: "var(--font-xs)" }}>
              {" "}
              Annual gross sale in our site
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Profile's */}
{/* Team Section (Outside Dialog) */}
<Box mt={8} >
  <Typography variant="h4" fontWeight="bold" mb={4} textAlign="center">
    Our Team
  </Typography>

  <Grid container justifyContent="center">
  <Grid item xs={12}>
    <Box display="flex" justifyContent="center" width="100%">
      <Box position="relative" width="100%" maxWidth="1200px" mx="auto">
        <Slider {...sliderSettings}>
          {profileData.map((profile, index) => (
            <Box
              key={index}
              textAlign="center"
              sx={{
                borderRadius: 2,
                p: 2,
                // boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
                transition: "all 0.3s ease",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  cursor: "pointer",
                  // background:"var(--success-bg)",
                  "&:hover .hover-nav": {
                    opacity: 1,
                    visibility: "visible",
                  },
                }}
              >
                <img
                  src={profile.img}
                  alt={profile.name}
                  style={{
                    width: "100%",
                    maxWidth: "250px",
                    borderRadius: "12px",
                    marginBottom: "1rem",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                  backgroundColor:"var(--success-bg)",

                  }}
                />
              </Box>

              <Typography variant="h6" fontSize={"var(--font-lg)"} fontWeight={600}>
                {profile.name}
              </Typography>
              <Typography variant="body2" fontSize={"var(--font-sm)"} color="text.secondary">
                {profile.tiitle}
              </Typography>

              <Box display="flex" gap={2} mt={1} justifyContent="center">
                <img src={Twitttericon} alt="Twitter" style={{ cursor: "pointer" }} />
                <img src={InstaIcon} alt="Instagram" style={{ cursor: "pointer" }} />
                <img src={Linkdinicon} alt="LinkedIn" style={{ cursor: "pointer" }} />
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  </Grid>
</Grid>
</Box>

<AboutService/>
    </>
  );
}
