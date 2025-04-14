import {
  Box,
  colors,
  IconButton,
  Input,
  InputAdornment,
  Link,
  Stack,
  TextField,
  Typography,
  Grid
} from "@mui/material";
import React from "react";

import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import { QRCode } from "react-qrcode-logo";

import Facebookicon from "../images/facebookIcon.png";
import InstaIcon from "../images/instagramIcon.png";
import Linkdinicon from "../images/linkedinIcon.png";
import Twitttericon from "../images/twitterIcon.png";

export default function Footer() {
  const Account = [
    { name: "My Account", path: "/" },
    { name: "Login / Register", path: "/" },
    { name: "Cart", path: "/" },
    { name: "Wishlist", path: "/" },
    { name: "Shop", path: "/" },
  ];

  const QuickLink = [
    { name: "Privacy Policy", path: "/" },
    { name: "Term Of Use", path: "/" },
    { name: "FAQ", path: "/" },
    { name: "Contract", path: "/" },
  ];

  const googlePlayImg =
    "https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg";
  const appStoreImg =
    "https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg";

  const styles = {
    heading: {
      color: "var(--text-color)",
      fontSize: " var(--font-standard)",
      fontWeight: 700,
      cursor: "pointer",
      textDecoration: "none",
    },
    linkheading: {
      color: "var(--text-color)",
      fontSize: " var(--font-md)",
      fontWeight: 550,
      textDecoration: "none",
    },
    text: {
      color: "var(--text-color)",
      fontSize: " var(--font-sm)",
      fontWeight: 400,
    },
    link: {
      color: "var(--text-color)",
      fontSize: " var(--font-xs)",
      fontWeight: 400,
      cursor: "pointer",
      textDecoration: "none",
    },
  };

  return (
    <>
      <Box sx={{ background: "#000000" , mt:2, px:4 // or remove `width` entirely if not needed
   // optional: to keep it from growing too wide on large screens
    }} >
        <Box  
         sx={{
          display: "flex",
          flexWrap: "wrap",
       justifyContent: { xs: "flex-start", sm: "space-evenly" },
        gap: { xs: "20px", sm: "10px", md: 4 },
          pt: 5,
        }}>
        <Box  
         sx={{
          width: {
            xs: "100%",      // full width on mobile
            sm: "48%",       // 2 items per row on small screens
            md: "19%",       // 5 items per row on medium+
          },
          mb: 4,
        }}
          >
          {/* Exclusive */}
          <Stack gap={"16px"} >
            <Link sx={styles.heading}> Exclusive</Link>
            <Link sx={styles.linkheading}> Subscribe</Link>
            <Typography sx={styles.text}>
              Get 10% off uour first order
            </Typography>
            <TextField
              placeholder="Enter Your Email"
              sx={{
                width: "100%",
                height: "20%",
                border: "1px solid var(--text-color)",
                "& .MuiInputBase-root": {
                  height: "100%",
                },
                "& .MuiInputBase-input": {
                  color: "var(--text-color)",
                },
                "& .MuiInputBase-input::placeholder": {
                  color: "var(--text-color)",
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton sx={{ color: "var(--text-color)", padding: 0 }}>
                      <SendOutlinedIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

          </Stack>
          </Box>

          {/* Support */}
        <Box          sx={{
          width: {
            xs: "100%",      // full width on mobile
            sm: "48%",       // 2 items per row on small screens
            md: "auto",       // 5 items per row on medium+
          },
          mb: 4,
        }} >
          <Stack gap={"16px" } >
            <Typography sx={styles.linkheading}>Support</Typography>
            <Typography sx={styles.text}>
              555 DHA Phase 6, Lahore Pakistan
            </Typography>
            <Typography sx={styles.text}>anassheik890@gmail.com</Typography>
            <Typography sx={styles.text}>+923094105183</Typography>
          </Stack>
          </Box>

          {/* Account */}
        <Box          sx={{
          width: {
            xs: "100%",      // full width on mobile
            sm: "48%",       // 2 items per row on small screens
            md: "auto",       // 5 items per row on medium+
          },
          mb: 4,
        }}>
          <Stack gap={"16px"}  >
            <Typography sx={styles.linkheading}>Account</Typography>
            {Account.map((acc) => (
              <Typography sx={styles.link}> {acc.name} </Typography>
            ))}
          </Stack>
          </Box>
          {/* Quick Links */}
        <Box          sx={{
          width: {
            xs: "100%",      // full width on mobile
            sm: "48%",       // 2 items per row on small screens
            md: "auto",       // 5 items per row on medium+
          },
          mb: 4,
        }} >
          <Stack gap={"16px"} >
            <Typography sx={styles.linkheading}>
              Quick Link{" "}
            </Typography>
            {QuickLink.map((quick) => (
              <Typography sx={styles.link}> {quick.name} </Typography>
            ))}
          </Stack>
          </Box>
          {/* Download App */}
        <Box          sx={{
          width: {
            xs: "100%",      // full width on mobile
            sm: "48%",       // 2 items per row on small screens
            md: "auto",       // 5 items per row on medium+
          },
          mb: 4,
        }}>
          <Stack gap={"16px"}  >
            <Typography sx={styles.linkheading}>Download App</Typography>
            <Typography
              sx={{
                color: "var(--text-color)",
                fontSize: " var(--font-xs)",
                opacity: "70%",
              }}
            >
              Save $3 with App New User Only
            </Typography>
            <Stack direction={"row"}    flexDirection={ { xs:"column", sm:"column", md:"row" } } alignItems={ {  sm:"start", md: "center"  }} gap={2}>
              {/* QR Code */}
              <Box
                sx={{
                  width: "60%",
                  maxWidth: 200,
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                <QRCode
                  value="https://www.youtube.com/"
                  size={70}
                  bgColor="#ffffff"
                  fgColor="#000000"
                />
              </Box>

              {/* App Store & Play Store Buttons */}
              <Stack spacing={2} >
                <Box
                  component="img"
                  src={googlePlayImg}
                  alt="Google Play"
                  sx={{ width: 100, cursor: "pointer" }}
                />
                <Box
                  component="img"
                  src={appStoreImg}
                  alt="App Store"
                  sx={{ width: 100, cursor: "pointer" }}
                />
              </Stack>
            </Stack>
            {/* Icons */}
            <Stack direction={"row"} mt={1} gap={"28px"}>
              <img src={Facebookicon} alt="Facebook" width={"18px"} height={"18px"}/>
              <img src={Twitttericon} alt="Twitter"  />
              <img src={InstaIcon} alt="Instagram"/>
              <img src={Linkdinicon} alt="Linkdin" />
            </Stack>
          </Stack>
        </Box>
        </Box>

        <Typography
          sx={{
            color: "var(--text-color)",
            fontSize: "var(--font-sm)",
            opacity: "20%",
            textAlign: "center",
            mt: 10,
            pb: 2,
          }}
        >
          @ Copyright Anas 2025 All right reserved
        </Typography>
      </Box>

    </>
  );
}
