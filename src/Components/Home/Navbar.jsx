import React, { useEffect, useState } from "react";
import {
  Box,
  IconButton,
  Input,
  Stack,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Snackbar,
  Alert
} from "@mui/material";

import { Link, useLocation } from "react-router-dom"; // ✅ Correct

import MenuIcon from "@mui/icons-material/Menu";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

import HashLoader from "react-spinners/HashLoader";
import { RotateLoader } from "react-spinners";


import logo from "../../images/E_logo.png";

import UserMenu from "./UserMenu";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Utils/itemSlice";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("error");


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.items.currentUser);

  const HandleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  const [UserMenuAnchor, setUserMenuAnchor] = useState(null);

  const handleUserMenuOpen = (event) => {
    setUserMenuAnchor(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setUserMenuAnchor(null);
  };

  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
    ...(user ? [] : [{ name: "Login", path: "/login" }]),
  ];

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const [liked, setLiked] = useState(false);

  const Handleclicked = () => {
    setLiked(!liked);
  };

  const location = useLocation();
  const isAccountpage = location.pathname === "/account";
  const isCartpage = location.pathname === "/cart";

  const [loading, setLoading] = useState(false);

  const HandleCart = (e) => {
    e.preventDefault();

        if (!user) {
      setSnackbarMessage("Please login to access your cart");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
      navigate("/login", {
        state: {
          snackbar: {
            message: "Please login/Signup to access your cart",
            severity: "error",
          },
        },
      });
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/cart");
    }, 1000);
  };


  // Rotate Loader
  const [loadinRoute , setLoadingRoute] = useState(false);
  const [targetpath , setTagetpath ] = useState("");

  useEffect(() => {
  if (loadinRoute && targetpath) {
    const timer = setTimeout(() => {
      navigate(targetpath);
      setLoadingRoute(false);
      setTagetpath("");
    }, 500);
    return () => clearTimeout(timer);
  }
}, [loadinRoute, targetpath, navigate]);

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

   if (loading) {
    return (
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#ffffff",
          zIndex: 1300,
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
         zIndex: 2000,
        }}
      >
        <HashLoader color="var(--color-danger)" size={60} />
      </Box>
    );
  }

  
  if (loadinRoute) {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        zIndex: 2000,
      }}
    >
      <RotateLoader color="var(--color-danger)" size={20} />
    </Box>
  );
}


  return (
    <>



     <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          severity={snackbarSeverity}
          onClose={handleCloseSnackbar}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>

      
      <Box p={2}>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
        >
          <Box display={"flex"} alignItems={"center"} gap={1}>
            <Box
              component="img"
              src={logo}
              alt="Logo"
              sx={{
                width: "40px",
                height: "40px",
              }}
            />
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <Typography
                variant="h6"
                sx={{
                  display: { xs: "none", md: "flow" },
                  fontWeight: 700,
                  color: "black",
                  "&:hover": {
                    color: "var(--color-danger)",
                  },
                }}
              >
                Exclusive
              </Typography>
            </Link>
          </Box>
          {!isSmall && (
           <Stack direction="row" spacing={4}>
  {navLinks.map((link, index) => {
    const isDelayedRoute = ["Home" ,"Contact", "About"].includes(link.name);

    return isDelayedRoute ? (
      <Typography
        key={index}
        sx={{
          cursor: "pointer",
          color: "black",
          fontSize: "small",
          transition: "color 0.3s ease",
          "&:hover": {
            color: "var(--color-danger)",
          },
        }}
        onClick={() => {
          setTagetpath(link.path);
          setLoadingRoute(true);
        }}
      >
        {link.name}
      </Typography>
    ) : (
      <Link
        key={index}
        to={link.path}
        style={{ textDecoration: "none" }}
      >
        <Typography
          sx={{
            color: "black",
            fontSize: "small",
            transition: "color 0.3s ease",
            "&:hover": {
              color: "var(--color-danger)",
            },
          }}
        >
          {link.name}
        </Typography>
      </Link>
    );
  })}
</Stack>

          )}

          <Stack direction="row" alignItems="center" spacing={1}>
            {!isMedium && (
              <Box
                sx={{
                  background: "#F5F5F5",
                  borderRadius: "6px",
                  display: "flex",
                  alignItems: "center",
                  px: 1,
                }}
              >
                <Input
                  placeholder="What are you looking for?"
                  disableUnderline
                  sx={{
                    fontSize: "small",
                    "&::placeholder": { fontSize: "xs" },
                  }}
                />
                <IconButton>
                  <SearchOutlinedIcon fontSize="small" />
                </IconButton>
              </Box>
            )}

            {/* {isMedium && (
              <>         
         <IconButton onClick={() => setShowSearch(!showSearch)}>
           <SearchOutlinedIcon fontSize="small" />
         </IconButton>
         {showSearch && (
           <Box
             sx={{
               background: "#F5F5F5",
               borderRadius: "6px",
               display: "flex",
               alignItems: "center",
               px: 1,
               ml: 1,
               width: isSmall ? "100%" : "200px",
          position: isSmall ? "absolute" : "static",
          top: isSmall ? "70px" : "auto",
          left: isSmall ? 0 : "auto",
          right: isSmall ? 0 : "auto",
          zIndex: 999,
             }}
           >
             <Input
             autoFocus
             fullWidth
               placeholder="Search..."
               disableUnderline
               sx={{
                 fontSize: "small",
                 "&::placeholder": { fontSize: "xs" },
               }}
             />
           </Box>
         )}
         </>
        )} */}

            <IconButton onClick={Handleclicked}>
              {liked ? (
                <FavoriteOutlinedIcon
                  fontSize="small"
                  style={{ color: "var(--color-danger)" }}
                />
              ) : (
                <FavoriteBorderOutlinedIcon fontSize="small" />
              )}
            </IconButton>

            <IconButton
              component={Link}
              to="/cart"
              onClick={HandleCart}
            >
                <ShoppingCartOutlinedIcon
                  sx={{
                    fontSize: "var(--font-md)",
                    color: isCartpage ? "var(--color-danger)" : "inherit",
                  }}
                />
            </IconButton>

            <IconButton component={Link} to="/account">
              <AccountCircleOutlinedIcon
                sx={{
                  fontSize: "var(--font-md)",
                  color: isAccountpage ? "var(--color-danger)" : "inherit",
                }}
              />
            </IconButton>
            <UserMenu
              anchorEl={UserMenuAnchor}
              open={Boolean(UserMenuAnchor)}
              onClose={handleUserMenuClose}
              HandleLogout={HandleLogout}
              user={user}
            />

            {isSmall && (
              <IconButton onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
            )}
          </Stack>
        </Box>
      </Box>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box width={250} p={2}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontWeight: 700, color: "black" }}
          >
            Exclusive
          </Typography>

          {/* Search Input inside Drawer for small screens */}
          {isSmall && (
            <Box
              sx={{
                background: "#F5F5F5",
                borderRadius: "6px",
                display: "flex",
                alignItems: "center",
                px: 1,
                mb: 2,
              }}
            >
              <Input
                autoFocus
                fullWidth
                placeholder="Search..."
                disableUnderline
                sx={{
                  fontSize: "small",
                  "&::placeholder": { fontSize: "xs" },
                }}
              />
              <IconButton>
                <SearchOutlinedIcon fontSize="small" />
              </IconButton>
            </Box>
          )}

          {/* Nav Links */}
          <List>
            {navLinks.map((link, index) => (
              <ListItem button key={index} onClick={toggleDrawer(false)}>
                <Link to={link.path}>
                  <Box
                    sx={{
                      color: "black",
                      width: "100%",
                      display: "block",
                    }}
                  >
                    <ListItemText primary={link.name} />
                  </Box>
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Divider line */}
      <Box
        sx={{
          borderBottom: "1px solid #000",
          opacity: 0.1,
          mt: 1,
        }}
      />
    </>
  );
}
