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
} from "@mui/material";
import React from "react";

import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import { QRCode } from "react-qrcode-logo";

import Facebookicon from "../images/FacebookIcon.png";
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
      fontWeight: 500,
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
      <Box sx={{ background: "#000000" }}>
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"center"}
          mt={6}
          pt={"50px"}
          gap={10}
          px={5}
        >
          {/* Exclusive */}
          <Stack gap={"16px"}>
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
          {/* Support */}
          <Stack gap={"16px"}>
            <Typography sx={styles.linkheading}>Support</Typography>
            <Typography sx={styles.text}>
              555 DHA Phase 6, Lahore Pakistan
            </Typography>
            <Typography sx={styles.text}>anassheik890@gmail.com</Typography>
            <Typography sx={styles.text}>+923094105183</Typography>
          </Stack>
          {/* Account */}
          <Stack gap={"16px"}>
            <Typography sx={styles.linkheading}>Account</Typography>
            {Account.map((acc) => (
              <Typography sx={styles.link}> {acc.name} </Typography>
            ))}
          </Stack>
          {/* Quick Links */}
          <Stack gap={"16px"}>
            <Typography sx={styles.linkheading} width={"100px"}>
              Quick Link{" "}
            </Typography>
            {QuickLink.map((quick) => (
              <Typography sx={styles.link}> {quick.name} </Typography>
            ))}
          </Stack>
          {/* Download App */}
          <Stack gap={"16px"}>
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
            <Stack direction={"row"} alignItems={"center"}>
              {/* QR Code */}
              <Box
                sx={{
                  width: "80%",
                  maxWidth: 200,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <QRCode
                  value="https://www.youtube.com/"
                  size={90}
                  bgColor="#ffffff"
                  fgColor="#000000"
                />
              </Box>

              {/* App Store & Play Store Buttons */}
              <Stack spacing={2} sx={{ ml: 2 }}>
                <Box
                  component="img"
                  src={googlePlayImg}
                  alt="Google Play"
                  sx={{ width: 120, cursor: "pointer" }}
                />
                <Box
                  component="img"
                  src={appStoreImg}
                  alt="App Store"
                  sx={{ width: 120, cursor: "pointer" }}
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
