import { Box, Button, IconButton, Rating, Stack, Typography, Grid } from "@mui/material";
import React, { useState } from "react";

import Coat from "../../images/coat.png";
import Bag from "../../images/duffle_bag.png";
import Cpu from "../../images/rgbcpu.png";
import Shelf from "../../images/bookshelf.png";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

import styled from "styled-components";  


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

export default function Sellingproduct() {
  const SellingProductData = [
    { img: Coat, name: "The north coat", price: 260 },
    { img: Bag, name: "Gucci duffle bag", price: 960 },
    { img: Cpu, name: "RGB liquid CPU Cooler", price: 160 },
    { img: Shelf, name: "Small BookShelf", price: 360 },
  ];

  const [rating, setRating] = useState(Array(SellingProductData.length).fill(3));
  const ratingLabels = ["Poor", "Fair", "Good", "Very Good", "Excellent"];
  
  return (
    <>
      <Stack mt={"100px"} direction={"row"} alignItems={"center"} gap={"16px"} ml={"50px"}>
        <Stack
          sx={{
            bgcolor: "var(--color-danger)",
            width: "15px",
            height: "30px",
            borderRadius: "4px",
          }}
        ></Stack>
        <Typography sx={{ color: "var(--color-danger)", fontSize: "var(--font-sm)", fontWeight: 600 }}>
          This Month
        </Typography>
      </Stack>

      <Stack mx={"50px"} mt={2} direction={{   xs:"column", sm:"column", md: "row" }} justifyContent={  "space-between" } >
        <Stack direction={"row"}>
          <Typography sx={{  fontSize: { xs:"var(--font-sm)" , sm: "var(--font-md)" , md: "var(--font-lg)" }  , fontWeight: 600 }}>
            Best Selling Products
          </Typography>
        </Stack>
        <StyledWrapper   >
      <div className="btn-conteiner">
        <a className="btn-content" href="#">
          <span className="btn-title">View All</span>
          <span className="icon-arrow">
            <svg width="66px" height="43px" viewBox="0 0 66 43" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <g id="arrow" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                <path id="arrow-icon-one" d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z" fill="#FFFFFF" />
                <path id="arrow-icon-two" d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z" fill="#FFFFFF" />
                <path id="arrow-icon-three" d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z" fill="#FFFFFF" />
              </g>
            </svg>
          </span> 
        </a>
      </div>
    </StyledWrapper>

      </Stack>

        <Grid container display={"flex"} direction={"row"} justifyContent={"center"} maxWidth={"lg"}  mt={3} mx={"auto"} gap={10}>
        {SellingProductData.map((Sell, index) => (
          <Grid key={index} item  xs={12} sm={4} md={3} lg={2}  display={"flex"} justifyContent={"center"}  >
            <Box >
            {/* Product Card */}
            <ProductCard >
              <Stack direction={"row"} justifyContent={"space-between"} width={"100%"}>
                <Stack display={"flex"} direction={"column"} justifyContent={"start"}>
                  <IconButtonStyled>
                    <FavoriteBorderOutlinedIcon />
                  </IconButtonStyled>
                  <IconButtonStyled>
                    <VisibilityOutlinedIcon />
                  </IconButtonStyled>
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
                <img src={Sell.img} alt={Sell.name} style={{ maxWidth: "100%", maxHeight: "100%" }} />
              </Stack>
            </ProductCard>
            
            {/* Product Info */}
            <Typography sx={{ fontWeight: 500, mt: 2 }}>{Sell.name}</Typography>
            <Typography sx={{ color: "var(--color-danger)" }}>${Sell.price}</Typography>
            <Box display={"flex"} flexDirection={{ xs:"column", md:"row"}} gap={2} alignItems={"center"} >
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
            </Box>
          </Grid>
        ))}
        </Grid>

      <StyledWrapperMobile   >
      <div className="btn-conteiner">
        <a className="btn-content" href="#">
          <span className="btn-title">View All</span>
          <span className="icon-arrow">
            <svg width="66px" height="43px" viewBox="0 0 66 43" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <g id="arrow" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                <path id="arrow-icon-one" d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z" fill="#FFFFFF" />
                <path id="arrow-icon-two" d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z" fill="#FFFFFF" />
                <path id="arrow-icon-three" d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z" fill="#FFFFFF" />
              </g>
            </svg>
          </span> 
        </a>
      </div>
    </StyledWrapperMobile>



      
      <br />
      <br />
      <br />
      <br />
    </>
  );
}




const StyledWrapper = styled.div`
  .btn-conteiner {
    display: grid;
    place-items: center;
    --color-text: #ffffff;
    --color-background: var(--color-danger);
    --color-outline: #ff145b80;
    --color-shadow: #00000080;
    padding: 10px;
  }

  .btn-content {
    display: flex;
    align-items: center;
    padding: 2px 20px;
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: var(--font-md);
    color: var(--color-text);
    background: var(--color-background);
    transition: 1s;
    border-radius: 100px;
    box-shadow: 0 0 0.2em 0 var(--color-background);
  }

  .btn-content:hover,
  .btn-content:focus {
    transition: 0.5s;
    -webkit-animation: btn-content 1s;
    animation: btn-content 1s;
    outline: 0.1em solid transparent;
    outline-offset: 0.2em;
    box-shadow: 0 0 0.4em 0 var(--color-background);
  }

  .btn-content .icon-arrow {
    transition: 0.5s;
    margin-right: 0px;
    transform: scale(0.6);
  }

  .btn-content:hover .icon-arrow {
    transition: 0.5s;
    margin-right: 25px;
  }

  .icon-arrow {
    width: 20px;
    margin-left: 15px;
    position: relative;
    top: 6%;
  }

  /* SVG */
  #arrow-icon-one {
    transition: 0.4s;
    transform: translateX(-60%);
  }

  #arrow-icon-two {
    transition: 0.5s;
    transform: translateX(-30%);
  }

  .btn-content:hover #arrow-icon-three {
    animation: color_anim 1s infinite 0.2s;
  }

  .btn-content:hover #arrow-icon-one {
    transform: translateX(0%);
    animation: color_anim 1s infinite 0.6s;
  }

  .btn-content:hover #arrow-icon-two {
    transform: translateX(0%);
    animation: color_anim 1s infinite 0.4s;
  }

  /* SVG animations */
  @keyframes color_anim {
    0% {
      fill: white;
    }

    50% {
      fill: var(--color-background);
    }

    100% {
      fill: white;
    }
  }

  /* Button animations */
  @-webkit-keyframes btn-content {
    0% {
      outline: 0.2em solid var(--color-background);
      outline-offset: 0;
    }
  }

  @keyframes btn-content {
    0% {
      outline: 0.2em solid var(--color-background);
      outline-offset: 0;
    }
  }

  /* ✅ Just reduce size on small screens */
  @media (max-width: 600px) {
    .btn-content {
      padding: 5px 20px;
      font-size: 14px;
    }
        .btn-conteiner {
    display: none !important;
  }

    .icon-arrow {
      transform: scale(0.5);
      margin-left: 10px;
    }
  }
`;


const StyledWrapperMobile = styled.div`
  display: none;

  @media (max-width: 600px) {
    display: grid;
    place-items: center;
    padding: 20px;

    .btn-content {
      display: flex;
      align-items: center;
      padding: 5px 20px;
      text-decoration: none;
      font-family: 'Poppins', sans-serif;
      font-weight: 600;
      font-size: 14px;
      color: #fff;
      background: var(--color-danger);
      border-radius: 100px;
      box-shadow: 0 0 0.2em 0 var(--color-danger);
      transition: 0.5s;
    }

    .btn-content:hover {
      margin-right: 10px;
    }

    .icon-arrow {
      transform: scale(0.5);
      margin-left: 10px;
    }
  }
`;







{/* <Button
variant="contained"
size="small"
sx={{
  background: "var(--color-danger)",
  p: "10px 42px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textTransform: "none",
}}
>
View All
</Button> */}