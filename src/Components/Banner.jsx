import React from "react";
import Slider from "react-slick";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Iphonerimg from "../images/Bannerimg.png";
import Samsungimg from "../images/samsungbanner.jpg";
import Oneplusimg from "../images/oneplusbanner.jpg";
import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

export default function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };

  const Banners = [
    { icon: <AppleIcon />, name: "iPhone 14 Series", img: Iphonerimg },
    { icon: <AndroidIcon />, name: "Samsung Galaxy S23", img: Samsungimg },
    { icon: <SmartphoneIcon />, name: "OnePlus 11", img: Oneplusimg },
  ];

  return (
    <Box width={"80%"} margin={"auto"} mt={3}>
    <Slider {...settings}>
      {Banners.map((banner, index) => (
        <>
        <Stack
          key={index}
          height={"340px"}
          width={"100%"}
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ background: "black", color: "white", p: 4 }}
        >
          {/* Left Section */}
          <Stack width={"30%"} spacing={2} alignItems="flex-start">
            <Stack direction={"row"} alignItems={"center"} spacing={1} width="100%">
              <IconButton sx={{ color: "white" }}>
                {React.cloneElement(banner.icon, {
                  sx: { fontSize: "var(--font-2xl)" },
                })}
              </IconButton>
              <Typography sx={{ fontSize: "var(--font-sm)" }}>{banner.name}</Typography>
            </Stack>
            <Typography sx={{ fontSize: "var(--font-xl)" , textAlign: "left",  textAlign: "left"}}>Up to 10% <br /> off Voucher</Typography>
            <Stack direction={"row"}  spacing={1} >
              <Button sx={{ color: "var(--success-bg)", textTransform: "capitalize" }}>
                Shop Now
              </Button>
              <IconButton>
                <ArrowForwardRoundedIcon sx={{ color: "white", fontSize: "var(--font-sm)" }} />
              </IconButton>
            </Stack>
        
          </Stack>

          {/* Right Section - Image */}
          <Stack width={"400px"} height={"300px"}>
            <img src={banner.img} alt={banner.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </Stack>
        </Stack>
        </>
      ))}
    </Slider>
    </Box>
  );
}
