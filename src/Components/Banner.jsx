import React from "react";
import Slider from "react-slick";
import { Box, IconButton, Typography } from "@mui/material"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 

import Iphonerimg from '../images/Bannerimg.png'
import Samsungimg from '../images/samsungbanner.jpg'
import Oneplusimg from '../images/oneplusbanner.jpg'
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
export default function Banner() {
    const settings = {
        dots: true,         
        infinite: true,    
        speed: 500,         
        slidesToShow: 1,    
        slidesToScroll: 1,  
        autoplay: true,     
        autoplaySpeed: 2000, 
        arrows: true    
      };

      const Banners = [
        {icon : <AppleIcon />,
        name:"iPhone 14 Series",
        img: Iphonerimg,
        },
        {icon : <AndroidIcon />,
            name:"Samsung Galaxy S23",
            img:  Samsungimg,

            },
        {icon : <SmartphoneIcon />,
                name:"OnePlus 11",
                img: Oneplusimg,
                },

      ]

  return (
    <>
<Box sx={{ width: "80%",height:"350px", margin: "auto", mt: 4, background:"white" }} >
<Slider {...settings}>
{Banners.map((banner , index) => (
    <Box display={"flex"}  sx={{background:"black"}}>
        <Box 
        key={index}
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        sx={{color:'white'}}
        > 
            <IconButton>{banner.icon}</IconButton>
            <Typography>{banner.name}</Typography>
        </Box>
        <Box 
        component="img"
        src={banner.img}
        alt={banner.name}
        sx={{
            width:"400px",
            height:"300px"
            
        }}
        >
      
        </Box>
    </Box>
))}

</Slider>
    </Box>
    </>
  )
}
