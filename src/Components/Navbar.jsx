import React, { useState } from "react";
import {
  Box,
  IconButton,
  Input,
  Link,
  Stack,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export default function Navbar() {
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  const [drawerOpen, setDrawerOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/" },
    { name: "About", path: "/" },
    { name: "Sign Up", path: "/" },
  ];

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <Box p={2}>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography sx={{ fontWeight: 700 }} variant="h6">
            Exclusive
          </Typography>

          {!isSmall && (
            <Stack direction="row" spacing={4}>
              {navLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.path}
                  underline="hover"
                  sx={{ fontSize: "small", color: "black" }}
                >
                  {link.name}
                </Link>
              ))}
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
                  placeholder='What are you looking for?'
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

            {isMedium && (
              <IconButton>
                <SearchOutlinedIcon fontSize="small" />
              </IconButton>
            )}

            <IconButton>
              <FavoriteBorderOutlinedIcon fontSize="small" />
            </IconButton>

            <IconButton>
              <ShoppingCartOutlinedIcon fontSize="small" />
            </IconButton>

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
          <Typography variant="h6" gutterBottom>
            Menu
          </Typography>
          <List>
            {navLinks.map((link, index) => (
              <ListItem button key={index}>
                <ListItemText primary={link.name} />
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
