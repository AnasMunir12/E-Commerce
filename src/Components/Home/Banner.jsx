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

// import React from 'react'
// import { Box, Button, IconButton, Stack, Typography, Grid } from "@mui/material";

// export default function Banner() {
//   return (
//    <Box bgcolor={"black"}>
//      <Box maxWidth={"1000px"} mx={"auto"}>
//       <Grid container spacing={2}  sx={{ bgcolor:"red", height:"50vh"}} >

//         <Grid item  xs={12}  md={6}  >

//           Box 1
//         </Grid>
//         <Grid item xs={12}  md={6}  >

//           Box 2
//         </Grid>

//       </Grid>
//     </Box>
//    </Box>
//   )
// }
