import React, { useEffect, useState } from "react";
import Signupimg from "../../images/LoginSignup.png";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";

import googlleicon from "../../images/google.png";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { signup } from "../Utils/itemslice";

import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

import styled from "styled-components";

export default function SignupValidation() {
  const navigate = useNavigate();

  const users = useSelector((state) => state.items.registerusers);

  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [name, setName] = useState("");
  const [emailerror, setEmailerror] = useState("");
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [snackmessage, setSnackMessage] = useState("");
  const [snackSeverity, setSnackSeverity] = useState("Success");

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const HandleSignup = () => {
    if (!name || !email || !password) {
      setSnackMessage("Please fill all fields");
      setSnackSeverity("error");
      setOpen(true);
      return;
    }

    if (!validateEmail(email)) {
      setEmailerror(
        " Please enter a valid email address (e.g., example@gmail.com)"
      );
      setSnackMessage("Invalid Email format");
      setSnackSeverity("error");
      setOpen(true);
      return;
    } else {
      setEmailerror(" ");
    }

    // check if user already registered
    const userExist = users.some((user) => user.email === email);
    const Passwordexist = users.some((user) => user.password === password);
    if (userExist) {
      setSnackMessage(
        " Email is already registered. Please use a different email ."
      );
      setSnackSeverity("error");
      setOpen(true);
      return;
    }

    if (Passwordexist) {
      setSnackMessage(
        "Password is already Registered. Please use a different Password"
      );
      setSnackSeverity("error");
      setOpen(true);
      return;
    }
    dispatch(signup({ name, email, password }));

    // Clear form and show success message
    SetEmail("");
    SetPassword("");
    setName("");
    setSnackMessage("Signup successful! Redirecting to login...");
    setSnackSeverity("success");
    setOpen(true);
    setTimeout(() => navigate("/login"), 2000); // redirect after 1 second

    console.log("Dispatched signup with:", { email, password });
  };

  const handleClose = () => {
    setOpen(false);
    if (snackSeverity === "success") {
      navigate("/login");
    }
  };

  // Then in your component, check the updated state:
  useEffect(() => {
    console.log("Current users:", users);
  }, [users]);

  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleClose}
          severity={snackSeverity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackmessage}
        </Alert>
      </Snackbar>
      <Grid container mt={4}>
        {/* Left side Image */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              width: "100%",
            }}
          >
            <img
              src={Signupimg}
              alt="Signup Image"
              style={{ width: "100%" }}
            ></img>
          </Box>
        </Grid>
        {/* Right Side  Sectionj */}
        <Grid
          item
          xs={12}
          md={6}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
        >
          <Box Width={"100%"}>
            <Box
              sx={{}}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
            >
              <Typography
                sx={{
                  fontSize: { xs: "var(--font-lg) ", md: "var(--font-xl) " },
                  fontWeight: 500,
                  fontFamily: "var(--family-tertiary)",
                }}
              >
                Create an Account{" "}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "var(--font-xs) ", md: "var(--font-sm) " },
                  fontWeight: 400,
                  fontFamily: "var(--family-tertiary)",
                }}
              >
                Enter your details below{" "}
              </Typography>

              <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                mx={"auto"}
                gap={2}
                width={"50%"}
              >
                <TextField
                  label="Name"
                  variant="standard"
                  onChange={(e) => setName(e.target.value)}
                  InputLabelProps={{
                    sx: {
                      fontSize: { xs: "12px", md: "16px" }, // Responsive label font size
                      whiteSpace: "nowrap", // Prevent text from wrapping
                      overflow: "visible",
                    },
                  }}
                />
                <TextField
                  label="Email or Phone Number"
                  onChange={(e) => SetEmail(e.target.value)}
                  variant="standard"
                  InputLabelProps={{
                    sx: {
                      fontSize: { xs: "12px", md: "16px" }, // Responsive label font size
                      whiteSpace: "nowrap", // Prevent text from wrapping
                      overflow: "visible",
                    },
                  }}
                />
                <TextField
                  label="Password"
                  variant="standard"
                  onChange={(e) => SetPassword(e.target.value)}
                  InputLabelProps={{
                    sx: {
                      fontSize: { xs: "12px", md: "16px" }, // Responsive label font size
                      whiteSpace: "nowrap", // Prevent text from wrapping
                      overflow: "visible",
                    },
                  }}
                />
              </Box>

              <Box mt={4} width={"50%"} mx={"auto"}>
                <Box>
                  <StyledWrapper>
                    <button
                      className="frutiger-button"
                      onClick={HandleSignup}
                      style={{ width: "100%" }}
                    >
                      <div className="inner">
                        <div className="top-white" />
                        <span className="text">Create Account</span>
                      </div>
                    </button>
                  </StyledWrapper>
                </Box>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  gap={2}
                  sx={{
                    border: "1px solid #00000066",
                    padding: {
                      xs: "10px 0px 10px 0px",
                      md: "10px 0px 10px 0px",
                    },
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
                    sx={{
                      fontSize: { xs: "var(--font-xs)", md: "var(--font-md)" },
                    }}
                  >
                    Sign up with Google
                  </Typography>
                </Box>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  width={"100%"}
                  gap={2}
                  mt={2}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "var(--font-xs)", md: "var(--font-sm)" },
                      opacity: "60%",
                    }}
                  >
                    Already have an account?{" "}
                    <Link
                      to="/login"
                      style={{ color: "black", fontWeight: 700, textAlign: {} }}
                    >
                      Log in
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
