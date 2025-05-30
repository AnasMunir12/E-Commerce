import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Typography,
  Container,
  TextField,
  Button,
  Divider,
  Paper,
  Snackbar,
  Alert,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import styled from "styled-components";
import HashLoader from "react-spinners/HashLoader";
import { useDispatch } from "react-redux";
import { setUser } from "../Utils/itemSlice";
import Slide from "@mui/material/Slide";

export default function UserAccount() {
  // States for user data
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState({ isLoading: false, message: "" });
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Alert states
  const [open, setOpen] = useState(false);
  const [snackMsg, setSnackMsg] = useState("");
  const [snackSeverity, setSnackSeverity] = useState("info");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Load user data on component mount
  useEffect(() => {
    const userInfo = localStorage.getItem("UserInfo");

    if (!userInfo) {
      setLoading({ isLoading: true, message: "Checking authentication..." });
      const timer =setTimeout(() => {
        navigate("/login", {
          replace: true,
          state: {
            snackbar: {
              message: "Please login/Signup to access your account",
              severity: "error",
            },
          },
        });
      }, 1500);
    return () => clearTimeout(timer);
    }

    try {
      setLoading({ isLoading: true, message: "Loading user data..." });
    const timer = setTimeout(() => {
      const userData = JSON.parse(userInfo);
      const nameParts = userData.user.name.split(" ");
      if (nameParts.length > 1) {
        setFirstName(nameParts[0]);
        setLastName(nameParts.slice(1).join(" "));
      } else {
        setFirstName(userData.user.name);
        setLastName("");
      }

      setEmail(userData.user.email);
              setLoading({ isLoading: false, message: " " });
    }, 1500);
    return () => clearTimeout(timer);

    } catch (error) {
      console.error("Error parsing user data:", error);
    setLoading({ isLoading: true, message: "Error loading data..." });
    
    const timer = setTimeout(() => {
      navigate("/login", {
        replace: true,
        state: {
          snackbar: {
            message: "Error loading user data",
            severity: "error",
          },
        },
      });
      setLoading({ isLoading: false , message: " "});
    }, 1500);
    return () => clearTimeout(timer);

    }
  }, [navigate]);

  const fetchUserDetails = async (token, userId) => {
    try {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    } catch (error) {
      console.error("Error fetching user details:", error);
      setLoading(false);
      setSnackMsg("Error fetching user details");
      setSnackSeverity("error");
      setOpen(true);
    }
  };

  // Handle profile update
  const handleUpdateProfile = async () => {
    if (!firstName) {
      setSnackMsg("First name is required");
      setSnackSeverity("error");
      setOpen(true);
      return;
    }

    try {
       setLoading({ isLoading: true, message: "Updating profile..." });

      const timer = setTimeout(() => {
        const userInfo = JSON.parse(localStorage.getItem("UserInfo"));
        userInfo.user.name = `${firstName} ${lastName}`.trim();
        localStorage.setItem("UserInfo", JSON.stringify(userInfo));

        // Update Redux store
        dispatch(setUser(userInfo));

        setLoading({ isLoading: false, message: " " });
        setSnackMsg("Profile updated successfully");
        setSnackSeverity("success");
        setOpen(true);
      }, 1500);
         return () => clearTimeout(timer);
    } catch (error) {
      console.error("Error updating profile:", error);
      setLoading({ isLoading: false, message: " " });
      setSnackMsg("Error updating profile");
      setSnackSeverity("error");
      setOpen(true);
    }
  };

  // Handle password change
  const handleChangePassword = async () => {
    if (!currentPassword) {
      setSnackMsg("Current password is required");
      setSnackSeverity("error");
      setOpen(true);
      return;
    }

    if (newPassword.length < 6) {
      setSnackMsg("New password must be at least 6 characters");
      setSnackSeverity("error");
      setOpen(true);
      return;
    }

    if (newPassword !== confirmPassword) {
      setSnackMsg("New passwords do not match");
      setSnackSeverity("error");
      setOpen(true);
      return;
    }

    try {
      setLoading({ isLoading: true, message: "Updating Password... " });

      setTimeout(() => {
        setLoading({ isLoading: false, message: " " });
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
        setSnackMsg("Password changed successfully");
        setSnackSeverity("success");
        setOpen(true);
      }, 1500);
    } catch (error) {
      console.error("Error changing password:", error);
      setLoading({ isLoading: false, message: " " });
      setSnackMsg("Error changing password");
      setSnackSeverity("error");
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("UserInfo");
    dispatch(setUser(null));
    navigate("/login");
  };

  if (loading.isLoading) {
    return (
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          zIndex: 9999,
        }}
      >
        <HashLoader color="var(--color-danger)" size={80} />
        {loading.message && (
          <Typography mt={2} variant="h6">
            {loading.message}
          </Typography>
        )}
      </Box>
    );
  }

  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        TransitionComponent={(props) => <Slide {...props} direction="left" />}
      >
        <Alert
          severity={snackSeverity}
          onClose={handleClose}
          sx={{
            backgroundColor:
              snackSeverity === "error" ? "var(--color-danger)" : "#4caf50",
            color: "white",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
            borderRadius: "8px",
            alignItems: "center",
            "& .MuiAlert-icon": {
              color: "white",
              fontSize: "1.5rem",
              marginRight: "8px",
            },
            "& .MuiAlert-message": {
              padding: "4px 0",
              fontSize: "0.9rem",
            },
            "& .MuiAlert-action": {
              paddingLeft: "16px",
              alignItems: "center",
            },
          }}
        >
          <Typography variant="body1" sx={{ fontWeight: 500 }}>
            {snackMsg}
          </Typography>
        </Alert>
      </Snackbar>

      <Container maxWidth="lg" sx={{ mt: 4, mb: 8 }}>
        <Container maxWidth="lg" sx={{ mt: 4, mb: 8 }}>
          <Box display={"flex"}  flexDirection={{ xs:"column" , md:"row"}} alignContent={"center"} justifyContent={"space-between"}>
          <Box mb={2} display="flex"  alignItems="center">
            <Typography
              component={Link}
              to="/"
              sx={{ color: "text.secondary", textDecoration: "none" }}
            >
              Home
            </Typography>
            <Typography sx={{ mx: 1 }}>/</Typography>
            <Typography color="text.primary">My Account</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 4,
            }}
          >
    
            <Typography>
              Welcome!{" "}
              <span
                style={{ color: "var(--color-danger)", fontWeight: "bold" }}
              >
                {firstName} {lastName}
              </span>
            </Typography>
          </Box>
          </Box>

          <Grid container spacing={4}>
            {/* Left sidebar */}
            <Grid item xs={12} md={3}>
              <Paper
                elevation={0}
                sx={{ p: 3, border: "1px solid #e0e0e0", borderRadius: 2 }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: 2,
                    fontFamily: "var(--family-tertiary)",
                  }}
                >
                 Manage My Account
                </Typography>
                <Box display="flex" flexDirection="column" gap={1} mx={2}>
                  <Typography
                    component={Link}
                    to="/account"
                    sx={{
                      textDecoration: "none",
                      fontWeight: 500,
                      "&:hover":{
                        color:"var(--color-danger)",
                      transition: "color 0.3s ease",
                      },
                    }}
                  >
                    My Profile
                  </Typography>
                  <Typography
                    component={Link}
                    to="/account/address"
                    sx={{
                      color: "text.primary",
                      textDecoration: "none",
                          "&:hover":{
                        color:"var(--color-danger)",
                      transition: "color 0.3s ease",
                      },
                    }}
                  >
                    Address Book
                  </Typography>
                  <Typography
                    component={Link}
                    to="/account/payment"
                    sx={{
                      color: "text.primary",
                      textDecoration: "none",
                          "&:hover":{
                        color:"var(--color-danger)",
                      transition: "color 0.3s ease",
                      },
                    }}
                  >
                    My Payment Options
                  </Typography>
                </Box>

                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mt: 4,
                    mb: 2,
                    fontFamily: "var(--family-tertiary)",
                  }}
                >
                  My Orders
                </Typography>
                <Box display="flex" flexDirection="column" gap={1} mx={2}>
                  <Typography
                    component={Link}
                    to="/account/returns"
                    sx={{
                      color: "text.primary",
                      textDecoration: "none",
                          "&:hover":{
                        color:"var(--color-danger)",
                      transition: "color 0.3s ease",
                      },
                    }}
                  >
                    My Returns
                  </Typography>
                  <Typography
                    component={Link}
                    to="/account/cancellations"
                    sx={{
                      color: "text.primary",
                      textDecoration: "none",
                          "&:hover":{
                        color:"var(--color-danger)",
                      transition: "color 0.3s ease",
                      },
                    }}
                  >
                    My Cancellations
                  </Typography>
                </Box>

                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mt: 4,
                    mb: 2,
                    fontFamily: "var(--family-tertiary)",
                  }}
                >
                  My Wishlist
                </Typography>
           

                <Button
                  variant="outlined"
                  color="error"
                  sx={{ mt: 4, width: "100%" }}
                  onClick={handleLogout}
                >
                  Log Out
                </Button>
              </Paper>
            </Grid>

            {/* Right content area */}
            <Grid item xs={12} md={9}>
              <Paper
                elevation={0}
                sx={{ p: 4, border: "1px solid #e0e0e0", borderRadius: 2 }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 500,
                    mb: 4,
                    color: "var(--color-danger)",
                    fontFamily: "var(--family-tertiary)",
                  }}
                >
                  Edit Your Profile
                </Typography>

                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <Typography mb={1}>First Name</Typography>
                    <TextField
                      fullWidth
                      variant="outlined"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 1,
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography mb={1}>Last Name</Typography>
                    <TextField
                      fullWidth
                      variant="outlined"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 1,
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography mb={1}>Email</Typography>
                    <TextField
                      fullWidth
                      variant="outlined"
                      value={email}
                      disabled
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 1,
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography mb={1}>Address</Typography>
                    <TextField
                      fullWidth
                      variant="outlined"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 1,
                        },
                      }}
                    />
                  </Grid>
                </Grid>

                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 500,
                    mt: 5,
                    mb: 3,
                    fontFamily: "var(--family-tertiary)",
                  }}
                >
                  Password Changes
                </Typography>

                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Typography mb={1}>Current Password</Typography>
                    <TextField
                      fullWidth
                      variant="outlined"
                      type={showCurrentPassword ? "text" : "password"}
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={() =>
                                setShowCurrentPassword(!showCurrentPassword)
                              }
                              edge="end"
                            >
                              {showCurrentPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 1,
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography mb={1}>New Password</Typography>
                    <TextField
                      fullWidth
                      variant="outlined"
                      type={showNewPassword ? "text" : "password"}
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={() =>
                                setShowNewPassword(!showNewPassword)
                              }
                              edge="end"
                            >
                              {showNewPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 1,
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography mb={1}>Confirm New Password</Typography>
                    <TextField
                      fullWidth
                      variant="outlined"
                      type={showConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={() =>
                                setShowConfirmPassword(!showConfirmPassword)
                              }
                              edge="end"
                            >
                              {showConfirmPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 1,
                        },
                      }}
                    />
                  </Grid>
                </Grid>

                <Box display="flex" justifyContent="flex-end" gap={2} mt={4}>
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{
                      borderRadius: 1,
                      color: "text.primary",
                      borderColor: "text.secondary",
                    }}
                  >
                    Cancel
                  </Button>
                  <StyledWrapper>
                    <button
                      className="frutiger-button"
                      onClick={handleUpdateProfile}
                      disabled={loading}
                    >
                      <div className="inner">
                        <div className="top-white" />
                        <span className="text">Save Changes</span>
                      </div>
                    </button>
                  </StyledWrapper>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </>
  );
}

const StyledWrapper = styled.div`
  /* Your existing styled component */
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
    background: radial-gradient(
      circle at top left,
      var(--color-danger) 0%,
      #b92b27 100%
    );
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
