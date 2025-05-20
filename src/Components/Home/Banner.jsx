import React, { useRef } from "react";
import Slider from "react-slick";
import {
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
  Grid,
} from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';


import Iphonerimg from "../../images/Bannerimg.png";
import Samsungimg from "../../images/samsungbanner.jpg";
import Oneplusimg from "../../images/oneplusbanner.jpg";
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
    <Box sx={{ background: "black", color: "white" }}>
      <Slider ref={ImageSlider} {...settings}>
        {Banners.map((banner, index) => (
          <Box key={index}>
            <Box key={index} maxWidth={"1000px"} mx={"auto"} >
              <Grid container spacing={2} mt={5}>
                <Grid
                  item
                  xs={12}
                  md={6}
                  key={index}
                  height={"340px"}
                  width={"auto"}
                  display={"flex"}
                  direction={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Box
                    display={"flex"}
                    flexDirection={"row"}
                    alignItems={"center"}
                  >
                    <IconButton sx={{ color: "white" }}>
                      {React.cloneElement(banner?.icon, {
                        sx: { fontSize: "var(--font-2xl)" },
                      })}
                    </IconButton>
                    <Typography sx={{ fontSize: "var(--font-sm)" }}>
                      {banner.name}
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      fontSize: "var(--font-xl)",
                      textAlign: "left",
                      textAlign: "left",
                    }}
                  >
                    Up to 10% <br /> off Voucher
                  </Typography>
                  <Box display={"flex"} alignItems={"center"} >
                    {" "}
                    {/* <Button
                      sx={{
                        color: "var(--success-bg)",
                        textTransform: "capitalize",
                      }}
                    >
                      Shop Now
                    </Button> */}
                        <StyledWrapper>
      <button className="cta">
        <span className="hover-underline-animation"> Shop now </span>
        <svg id="arrow-horizontal" xmlns="http://www.w3.org/2000/svg" width={30} height={10} viewBox="0 0 46 16">
          <path id="Path_10" data-name="Path 10" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" transform="translate(30)" />
        </svg>
      </button>
    </StyledWrapper>
               
                  </Box>
                </Grid>

                {/* Right Section - Image */}
                <Grid item xs={12} md={6}>
                  <Box
                    component="img"
                    src={banner.img}
                    alt={banner.name}
                    sx={{
                      width: {
                        xs: "100%",
                        md: "80%",
                        lg: "100%",
                      },
                      height: {
                        xs: "100%",
                        md: "80%",
                        lg: "100%",
                      },
                      objectFit: "cover",
                    }}
                  />
                </Grid>

                {/* Arrows  */}

                <Box mx={"auto"}>
                  <IconButton
                    onClick={() => ImageSlider.current.slickPrev()}
                    sx={{ color: "white" }}
                  >
                    <ArrowBackRoundedIcon sx={{ fontSize: "var(--font-sm)" }} />
                  </IconButton>
                  <IconButton
                    onClick={() => ImageSlider.current.slickNext()}
                    sx={{ color: "white" }}
                  >
                    <ArrowForwardRoundedIcon
                      sx={{ fontSize: "var(--font-sm)" }}
                    />
                  </IconButton>
                </Box>
              </Grid>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}



const StyledWrapper = styled.div`
  .cta {
    border: none;
    background: none;
    cursor: pointer;
  }

  .cta span {
    padding-bottom: 7px;
    letter-spacing: 4px;
    font-size: 14px;
    padding-right: 15px;
    text-transform: uppercase;
  }

  .cta svg {
    transform: translateX(-8px);
    transition: all 0.3s ease;
    fill: white; /* This sets the arrow color to white */
  }

  .cta:hover svg {
    transform: translateX(0);
  }

  .cta:active svg {
    transform: scale(0.9);
  }

  .hover-underline-animation {
    position: relative;
    color: white;
    padding-bottom: 20px;
  }

  .hover-underline-animation:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: white;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  .cta:hover .hover-underline-animation:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

