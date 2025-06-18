import React, { useState } from "react";
import Signupimg from "../../images/LoginSignup.png";
import googlleicon from "../../images/google.png";
import {
  Box,
  Grid,
  TextField,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import HashLoader from "react-spinners/HashLoader";

import { InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import Lottie from "lottie-react";
import SignupAnimation from './Signup.json'


export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [shouldNavigate, setShouldNavigate] = useState(false);


  const [showPassword, setShowPassword] = useState(false);

const handleClickShowPassword = () => setShowPassword(!showPassword);


  const [open, setOpen] = useState(false);
  const [snackMsg, setSnackMsg] = useState("");
  const [snackSeverity, setSnackSeverity] = useState("success");
  const [loading, setLoading] = useState(false);



  const navigate = useNavigate();

const validateEmail = (email) => /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email);

  const handleSignup = async () => {
    // Frontend validations
    if (!name || !email || !password) {
      setSnackMsg("All fields are required");
      setSnackSeverity("error");
      setOpen(true);
      return;
    }

    if (name.trim().length < 3) {
      setSnackMsg("Name must be at least 3 characters long");
      setSnackSeverity("error");
      setOpen(true);
      return;
    }

    if (!validateEmail(email)) {
      setSnackMsg("Please enter a valid email address (e.g., example@gmail.com)");
      setSnackSeverity("error");
      setOpen(true);
      return;
    }

    if (password.length < 6) {
      setSnackMsg("Password must be at least 6 characters long");
      setSnackSeverity("error");
      setOpen(true);
      return;
    }

try {
  const response = await axios.post("http://localhost:5000/api/user/signup", {
    name,
    email,
    password,
  });

if (response.status === 200 || response.status === 201) {
  setSnackMsg("Signup successful! Check your email to verify.");
  setSnackSeverity("success");
  setOpen(true);

  setName("");
  setEmail("");
  setPassword("");

  // Wait for snackbar to show clearly before loading screen
  setTimeout(() => {
    setLoading(true);
    // Then wait 1 more second, then navigate
    setTimeout(() => {
      setLoading(false);
      navigate("/login");
    }, 1000);
  }, 1500); // enough time for user to see Snackbar
}
} catch (error) {
  console.error("Signup Error:", error.response?.data);
  setSnackMsg(error.response?.data?.message || "Signup failed");
  setSnackSeverity("error");
setOpen(true);
} 

  };

const handleClose = () => {
  setOpen(false);
  setSnackMsg("");
};


  return (
    <>
      {loading && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            zIndex: 9999,
          }}
        >
          <HashLoader color="var(--color-danger)" size={80} />
        </Box>
      )}

      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert severity={snackSeverity} variant="filled" sx={{ width: "100%" }}>
          {snackMsg}
        </Alert>
      </Snackbar>

      <Grid container mt={4}>

        <Grid
          item
          xs={12}
          md={6}
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Box width="100%">
            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography
                sx={{
                  fontSize: { xs: "var(--font-lg)", md: "var(--font-xl)" },
                  fontWeight: 500,
                  fontFamily: "var(--family-tertiary)",
                }}
              >
                Create an Account
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "var(--font-xs)", md: "var(--font-sm)" },
                  fontWeight: 400,
                  fontFamily: "var(--family-tertiary)",
                }}
              >
                Enter your details below
              </Typography>

              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                mx="auto"
                gap={2}
                width="50%"
              >
                <TextField
                  label="Name"
                  variant="standard"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  InputLabelProps={{ sx: { fontSize: { xs: "12px", md: "16px" } } }}
                />
                <TextField
                  label="Email"
                  variant="standard"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  InputLabelProps={{ sx: { fontSize: { xs: "12px", md: "16px" } } }}
                />
               <TextField
  label="Password"
  type={showPassword ? "text" : "password"}
  variant="standard"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  InputLabelProps={{ sx: { fontSize: { xs: "12px", md: "16px" } } }}
  InputProps={{
    endAdornment: (
      <InputAdornment position="end">
        <IconButton
          onClick={handleClickShowPassword}
          edge="end"
        >
          {showPassword ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      </InputAdornment>
    ),
  }}
/>

              </Box>

              <Box mt={4} width="50%" mx="auto">
                <StyledWrapper>
                  <button
                    className="frutiger-button"
                    onClick={handleSignup}
                    style={{ width: "100%" }}
                    disabled={loading}
                  >
                    <div className="inner">
                      <div className="top-white" />
                      <span className="text">Create Account</span>
                    </div>
                  </button>
                </StyledWrapper>

                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  gap={2}
                  sx={{
                    border: "1px solid #00000066",
                    padding: "10px 0",
                    borderRadius: "4px",
                    width: "100%",
                    cursor: "pointer",
                  }}
                  mt={2}
                >
                  <Box
                    component="img"
                    src={googlleicon}
                    alt="Google Icon"
                    sx={{
                      width: { xs: 16, sm: 20, md: 24 },
                      height: { xs: 16, sm: 20, md: 24 },
                    }}
                  />
                  <Typography
                    sx={{ fontSize: { xs: "var(--font-xs)", md: "var(--font-md)" } }}
                  >
                    Sign up with Google
                  </Typography>
                </Box>

                <Box display="flex" justifyContent="center" width="100%" gap={2} mt={2}>
                  <Typography
                    sx={{
                      fontSize: { xs: "var(--font-xs)", md: "var(--font-sm)" },
                      opacity: "60%",
                    }}
                  >
                    Already have an account?{" "}
                    <Link to="/login" style={{ color: "black", fontWeight: 700 }}>
                      Log in
                    </Link>
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>

          <Grid item xs={12} md={6}>
  {/* <StyledImageWrapper>
    <img src={Signupimg} alt="Signup" />
  </StyledImageWrapper> */}
  <Box
              sx={{
                mx:"auto",
                height: { xs: "350px", sm: "450px", md: "450px" },
                width: { xs: "350px", sm: "450px", md: "550px" },
              }}
            >
   <Lottie
                    loop
                    animationData={SignupAnimation}
                    play
                    style={{
                      height: "100%",
                      width: "100%",
                    }}
                  />
                  </Box>
</Grid>


      </Grid>
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

const StyledImageWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 20px; /* Space around image for border visibility */

  img {
    width: 90%;
    border: 3px solid var(--text-color); /* or any color likergb(129, 127, 127) */
    border-radius: 12px;
    transition: transform 0.4s ease, box-shadow 0.4s ease;
    animation: float 6s ease-in-out infinite;
  }

  img:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }

  @keyframes float {
    0% {
      transform: translate(0px, 0px);
    }
    25% {
      transform: translate(10px, -10px);
    }
    50% {
      transform: translate(0px, -20px);
    }
    75% {
      transform: translate(-10px, -10px);
    }
    100% {
      transform: translate(0px, 0px);
    }
  }
`;


const StyledWrapper = styled.div`
  .frutiger-button {
    cursor: pointer;
    position: relative;
    padding: 2px;
    border-radius: 8px;
    border: none;
    background: linear-gradient(var(--color-danger), var(--color-danger));
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
    transition: all 0.3s ease-in-out;
  }

  .frutiger-button:hover {
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.35);
    transform: translateY(-1px);
  }

  .frutiger-button:active {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
    transform: scale(0.98);
  }

  .inner {
    position: relative;
    padding: 0.75em 1.25em;
    border-radius: 6px;
    background: radial-gradient(circle at top left, var(--color-danger) 0%, #b92b27 100%);
    overflow: hidden;
    transition: all 0.3s ease-in-out;
  }

  .inner::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      120deg,
      transparent 0%,
      rgba(255, 255, 255, 0.25) 50%,
      transparent 100%
    );
    background-size: 200% 100%;
    animation: shimmer 2s infinite;
    z-index: 0;
  }

  @keyframes shimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }

  .inner::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    box-shadow: inset 0 2px 4px rgba(255, 255, 255, 0.1);
    z-index: 0;
  }

  .text {
    position: relative;
    z-index: 1;
    color: #fff;
    font-weight: 600;
    font-size: 16px;
    font-family: "Segoe UI", sans-serif;
    letter-spacing: 0.5px;
  }
`;
