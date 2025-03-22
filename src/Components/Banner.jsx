import React, { useRef } from "react";
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
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

export default function Banner() {
  const ImageSlider = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  const Banners = [
    { icon: <AppleIcon />, name: "iPhone 14 Series", img: Iphonerimg },
    { icon: <AndroidIcon />, name: "Samsung Galaxy S23", img: Samsungimg },
    { icon: <SmartphoneIcon />, name: "OnePlus 11", img: Oneplusimg },
  ];

  return (
    <Box margin={"auto"}>
      <Slider ref={ImageSlider} {...settings}>
        {Banners.map((banner, index) => (
          <>
            <Stack
              key={index}
              height={"340px"}
              width={"100%"}
              direction={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              sx={{ background: "black", color: "white", p: 4 }}
            >
              {/* Content Section */}
              <Stack
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}
                width={"100%"}
              >
                {/* Left Section */}
                <Stack width={"30%"} spacing={2} alignItems="flex-start">
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    spacing={1}
                    width="100%"
                  >
                    <IconButton sx={{ color: "white" }}>
                      {React.cloneElement(banner.icon, {
                        sx: { fontSize: "var(--font-2xl)" },
                      })}
                    </IconButton>
                    <Typography sx={{ fontSize: "var(--font-sm)" }}>
                      {banner.name}
                    </Typography>
                  </Stack>
                  <Typography
                    sx={{
                      fontSize: "var(--font-xl)",
                      textAlign: "left",
                      textAlign: "left",
                    }}
                  >
                    Up to 10% <br /> off Voucher
                  </Typography>
                  <Stack direction={"row"} spacing={1}>
                    <Button
                      sx={{
                        color: "var(--success-bg)",
                        textTransform: "capitalize",
                      }}
                    >
                      Shop Now
                    </Button>
                    <IconButton>
                      <ArrowForwardRoundedIcon
                        sx={{ color: "white", fontSize: "var(--font-sm)" }}
                      />
                    </IconButton>
                  </Stack>
                </Stack>

                {/* Right Section - Image */}
                <Stack width={"400px"} height={"300px"}>
                  <img
                    src={banner.img}
                    alt={banner.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Stack>
              </Stack>

              {/* Arrows  */}
              <Stack direction={"row"} spacing={2} sx={{ mt: 2 } }>
                <IconButton
                  onClick={() => ImageSlider.current.slickPrev()}
                  sx={{ color: "white" }}
                >
                  <ArrowBackRoundedIcon sx={{ fontSize:"var(--font-sm)"}} />
                </IconButton>
                <IconButton
                  onClick={() => ImageSlider.current.slickNext()}
                  sx={{ color: "white" }}
                >
                  <ArrowForwardRoundedIcon sx={{ fontSize:"var(--font-sm)"}} />
                </IconButton>
              </Stack>
            </Stack>
          </>
        ))}
      </Slider>
    </Box>
  );
}
