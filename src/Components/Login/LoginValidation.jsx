import React, { useEffect, useState } from "react";
import Signupimg from "../../images/LoginSignup.png";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Utils/itemSlice";

import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

import styled from "styled-components";


export default function LoginValidation() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");
  const [snackSeverity, setSnackSeverity] = useState("success");

  const { isAuthenticated, loginerror  } = useSelector((state) => state.items);

  const handleLogin = () => {
    if (!email || !password) {
      setSnackMessage("Please fill all fields");
      setSnackSeverity("error");
      setOpen(true);
      return;
    }

    dispatch(login({ email, password }));
  };

  useEffect(() => {
    if (isAuthenticated) {
      setSnackMessage("Login successful!");
      setSnackSeverity("success");
      setOpen(true);
      
      const timer = setTimeout(() => {
        navigate("/");
      }, 2000);

      return () => clearTimeout(timer);
    }
    else if (loginerror){
      setSnackMessage(loginerror);
      setSnackSeverity("error");
      setOpen(true);
    }
  }, [isAuthenticated, loginerror, navigate]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleClose}
          severity={snackSeverity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackMessage}
        </Alert>
      </Snackbar>

      <Grid container mt={4}>
        {/* Left Image */}
        <Grid item xs={12} md={6}>
          <Box sx={{ width: "100%" }}>
            <img
              src={Signupimg}
              alt="Signup"
              style={{ width: "100%" }}
            />
          </Box>
        </Grid>

        {/* Right Form */}
        <Grid
          item
          xs={12}
          md={6}
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Box width="100%">
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Typography
                sx={{
                  fontSize: { xs: "var(--font-lg)", md: "var(--font-xl)" },
                  fontWeight: 500,
                  fontFamily: "var(--family-tertiary)",
                }}
              >
                Log in to Exclusive
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
                mt={2}
              >
                <TextField
                  label="Email or Phone Number"
                  variant="standard"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  InputLabelProps={{
                    sx: {
                      fontSize: { xs: "12px", md: "16px" },
                      whiteSpace: "nowrap",
                    },
                  }}
                />
                <TextField
                  label="Password"
                  type="password"
                  variant="standard"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  InputLabelProps={{
                    sx: {
                      fontSize: { xs: "12px", md: "16px" },
                      whiteSpace: "nowrap",
                    },
                  }}
                />
              </Box>

              <Box mt={4} width="50%" mx="auto">
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  gap={{ xs: 4, md: 0 }}
                >
                 <StyledWrapper>
                    <button
                      className="frutiger-button"
                      onClick={handleLogin}
                      style={{ width: "100%" }}
                    >
                      <div className="inner">
                        <div className="top-white" />
                        <span className="text">Login</span>
                      </div>
                    </button>
                  </StyledWrapper>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "var(--font-xs)",
                        md: "var(--font-sm)",
                      },
                      opacity: "60%",
                    }}
                  >
                    <Link
                      to="/login"
                      style={{
                        color: "var(--color-danger)",
                        fontWeight: 400,
                        textDecoration: "none",
                      }}
                    >
                      Forgot Password?
                    </Link>
                  </Typography>
                </Box>

                <Box
                  display="flex"
                  justifyContent="center"
                  width="100%"
                  gap={2}
                  mt={2}
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "var(--font-xs)",
                        md: "var(--font-sm)",
                      },
                      opacity: "60%",
                    }}
                  >
                    Don't have an account?{" "}
                    <Link
                      to="/signup"
                      style={{ color: "black", fontWeight: 700 }}
                    >
                      Sign Up
                    </Link>
                  </Typography>
                </Box>
              </Box>
            </Box>
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


const StyledWrapper = styled.div`
  .frutiger-button {
    cursor: pointer;
    position: relative;
    padding: 2px;
    border-radius: 6px;
    border: 0;
    background: linear-gradient(#db4444, #db4444);
    box-shadow: 0px 4px 6px 0px #00000044;
    transition: 0.3s all;
  }

  .frutiger-button:hover {
    box-shadow: 0px 6px 12px 0px #00000066;
  }

  .frutiger-button:active {
    box-shadow: 0px 0px 0px 0px transparent;
  }

  .inner {
    position: relative;
    inset: 0px;
    padding: 0.75em;
    border-radius: 4px;
    background: radial-gradient(circle at 50% 100%, #db4444 10%, #db4444 55%),
      linear-gradient(#a03333, #db4444);
    overflow: hidden;
    transition: inherit;
  }

  .inner::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(-65deg, transparent 40%, #ffffff44 50%, transparent 70%);
    background-size: 200% 100%;
    background-repeat: no-repeat;
    animation: thing 3s ease infinite;
  }

  @keyframes thing {
    0% {
      background-position: 130%;
      opacity: 1;
    }
    100% {
      background-position: -166%;
      opacity: 0;
    }
  }

  .top-white {
    position: absolute;
    border-radius: inherit;
    inset: 0 -8em;
    background: radial-gradient(
      circle at 50% -270%,
      #ffffff 30%,
      #ffffff44 60%,
      transparent 60%
    );
    transition: inherit;
  }

  .inner::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    transition: inherit;
    box-shadow: inset 0px 2px 8px -2px transparent;
  }

  .frutiger-button:active .inner::after {
    box-shadow: inset 0px 2px 8px -2px #00000033;
  }

  .text {
    position: relative;
    z-index: 1;
    color: white; /* Softer and more readable */
    font-weight: 600;
    font-size: 16px; /* Normal font size */
    font-family: sans-serif;
    transition: inherit;
  }
`;
