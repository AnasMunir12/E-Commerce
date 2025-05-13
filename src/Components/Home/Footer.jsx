import {
  Box,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  Link as Muilink
} from "@mui/material";

import React, { useState } from "react";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { QRCode } from "react-qrcode-logo";
import { Link } from "react-router-dom";

import Facebookicon from "../../images/facebookIcon.png";
import InstaIcon from "../../images/instagramIcon.png";
import Linkdinicon from "../../images/linkedinIcon.png";
import Twitttericon from "../../images/twitterIcon.png";
import CloseIcon from "@mui/icons-material/Close";

export default function Footer() {
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogContent, setDialogContent] = useState("");
  const [dialogTitle, setDialogTitle] = useState("");

  const Account = [
    { name: "My Account", path: "/" },
    { name: "Login / Register", path: "/login" },
    { name: "Cart", path: "/cart" },
    { name: "Shop", path: "/" },
  ];

  const QuickLink = [
    { name: "Privacy Policy", path: "/" },
    { name: "Term Of Use", path: "/" },
    { name: "FAQ", path: "/" },
  ];

  const handleDialog = (type) => {
    let content = "";
    if (type === "Privacy Policy") {
      content = `We collect basic user information like email and login credentials to improve the service. 
We do not sell or share your personal data with third parties. Your data is securely stored and encrypted.`;
    } else if (type === "Term Of Use") {
      content = `By using our website, you agree not to misuse the platform. All content is subject to change without notice. 
You must be 13 or older to use this website. We may suspend accounts for violations.`;
    } else if (type === "FAQ") {
      content = `Q: Do I need an account to shop?\nA: Yes, login is required to use the cart and checkout.\n\n
Q: How can I search for items?\nA: Use the search bar to filter by category or name.`;
    }

    setDialogTitle(type);
    setDialogContent(content);
    setOpenDialog(true);
  };

  const googlePlayImg =
    "https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg";
  const appStoreImg =
    "https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg";

  const styles = {
    heading: {
      color: "var(--text-color)",
      fontSize: "var(--font-standard)",
      fontWeight: 700,
      cursor: "pointer",
      textDecoration: "none",
      "&:hover": {
        color: "var(--color-danger)",
      },
    },
    linkheading: {
      color: "var(--text-color)",
      fontSize: "var(--font-md)",
      fontWeight: 550,
      textDecoration: "none",
    },
    text: {
      color: "var(--text-color)",
      fontSize: "var(--font-sm)",
      fontWeight: 400,
    },
    link: {
      color: "var(--text-color)",
      fontSize: "var(--font-xs)",
      fontWeight: 400,
      cursor: "pointer",
      textDecoration: "none",
      transition: "color 0.3s ease",
      "&:hover": {
        color: "var(--color-danger)",
      },
    },
  };

  return (
    <>
      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontWeight: "bold",
          }}
        >
          {dialogTitle}
          <IconButton
            onClick={() => setOpenDialog(false)}
            sx={{ color: "black" }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Typography whiteSpace="pre-line">{dialogContent}</Typography>
        </DialogContent>
      </Dialog>

      <Box sx={{ background: "#000", mt: 2, px: 4 }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: { xs: "flex-start", sm: "space-evenly" },
            gap: { xs: "20px", sm: "10px", md: 4 },
            pt: 10,
          }}
        >
          {/* Subscribe Section */}
          <Box sx={{ width: { xs: "100%", sm: "48%", md: "19%" }, mb: 4 }}>
            <Stack gap="16px">
              <Link to={"/"}>
                <Typography sx={styles.heading}>Exclusive </Typography>
              </Link>
              <Link>
                <Typography sx={styles.linkheading}>Subscribe </Typography>
              </Link>
              <Typography sx={styles.text}>
                Get 10% off your first order
              </Typography>
              <TextField
                placeholder="Enter Your Email"
                sx={{
                  width: "100%",
                  border: "1px solid var(--text-color)",
                  "& .MuiInputBase-root": { height: "100%" },
                  "& .MuiInputBase-input": { color: "var(--text-color)" },
                  "& .MuiInputBase-input::placeholder": {
                    color: "var(--text-color)",
                  },
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        sx={{ color: "var(--text-color)", padding: 0 }}
                      >
                        <SendOutlinedIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Stack>
          </Box>

          {/* Support */}
          <Box sx={{ width: { xs: "100%", sm: "48%", md: "auto" }, mb: 4 }}>
            <Stack gap="16px">
              <Typography sx={styles.linkheading}>Support</Typography>
              <Muilink
                href="https://www.google.com/maps/place/555+DHA+Phase+6,+Lahore,+Pakistan"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                <Typography sx={styles.text}>
                555 DHA Phase 6, Lahore Pakistan
                </Typography>
              </Muilink>

              <Typography sx={styles.text}>anassheik890@gmail.com</Typography>
              <Typography sx={styles.text}>+923094105183</Typography>
            </Stack>
          </Box>

          {/* Account */}
          <Box sx={{ width: { xs: "100%", sm: "48%", md: "auto" }, mb: 4 }}>
            <Stack gap="16px">
              <Typography sx={styles.linkheading}>Account</Typography>
              {Account.map((acc) => (
                <Link key={acc.name} to={acc.path}>
                  <Typography sx={styles.link}>{acc.name}</Typography>{" "}
                </Link>
              ))}
            </Stack>
          </Box>

          {/* Quick Links */}
          <Box sx={{ width: { xs: "100%", sm: "48%", md: "auto" }, mb: 4 }}>
            <Stack gap="16px">
              <Typography sx={styles.linkheading}>Quick Link</Typography>
              {QuickLink.map((quick) => (
                <Typography
                  key={quick.name}
                  sx={styles.link}
                  onClick={() => handleDialog(quick.name)}
                >
                  {quick.name}
                </Typography>
              ))}
            </Stack>
          </Box>

          {/* Download App */}
          <Box sx={{ width: { xs: "100%", sm: "48%", md: "auto" }, mb: 4 }}>
            <Stack gap="16px">
              <Typography sx={styles.linkheading}>Download App</Typography>
              <Typography
                sx={{
                  color: "var(--text-color)",
                  fontSize: "var(--font-xs)",
                  opacity: "70%",
                }}
              >
                Save $3 with App New User Only
              </Typography>

              <Stack
                direction={{ xs: "column", sm: "column", md: "row" }}
                alignItems={{ sm: "start", md: "center" }}
                gap={2}
              >
                <Box sx={{ width: "60%", maxWidth: 200 }}>
                  <QRCode value="https://www.youtube.com/" size={70} />
                </Box>
                <Stack spacing={2}>
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
              <Stack direction="row" mt={1} gap="28px">
                <img
                  src={Facebookicon}
                  alt="Facebook"
                  width="18px"
                  height="18px"
                />
                <img src={Twitttericon} alt="Twitter" />
                <img src={InstaIcon} alt="Instagram" />
                <img src={Linkdinicon} alt="LinkedIn" />
              </Stack>
            </Stack>
          </Box>
        </Box>

        <Typography
          sx={{
            color: "var(--text-color)",
            fontSize: "var(--font-sm)",
            opacity: "60%",
            textAlign: "center",
            mt: 10,
            pb: 2,
          }}
        >
          © Copyright Anas 2025. All rights reserved.
        </Typography>
      </Box>
    </>
  );
}
