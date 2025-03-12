import { Box, IconButton, Input, Link, Stack, Typography } from "@mui/material";
import React from "react";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export default function Navbar() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/" },
    { name: "About", path: "/" },
    { name: "Sign Up", path: "/" },
  ];

  return (
    <>
      <Box width={"100%"} height={"20px"} p={3}>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-around"}
        >
          <Stack>
            <Typography sx={{ fontWeight: 700 }} variant="h6">
              {" "}
              Exclusive
            </Typography>
          </Stack>
          <Stack display={"flex"} flexDirection={"row"} gap={"40px"}>
            {navLinks.map((link) => (
              <Link
                to={link.path}
                href="#"
                underline="hover"
                sx={{ fontSize: "small", color: "black" }}
              >
                {link.name}
              </Link>
            ))}
          </Stack>
          <Stack display={"flex"} flexDirection={"row"} alignItems={"center"}>
            <Stack
              width={"auto"}
              height={"35px"}
              sx={{ background: "#F5F5F5", borderRadius: "6px" }}
              display={"flex"}
              flexDirection={"row"}
              px={"8px"}
            >
              <Input
                placeholder='What are you lookign for?"'
                disableUnderline
                sx={{
                  fontSize: "small",
                  "& : placeholder": { fontSize: "xs" },
                }}
              />
              <IconButton>
                <SearchOutlinedIcon fontSize="small" />
              </IconButton>
            </Stack>
            <IconButton>
              <FavoriteBorderOutlinedIcon fontSize="small" />
            </IconButton>
            <IconButton>
              <ShoppingCartOutlinedIcon fontSize="small" />
            </IconButton>
          </Stack>
        </Box>
      </Box>
      <Stack
        sx={{ border: " 0.5px solid #000000", opacity: "10%", transform:"rotate(-180deg)" }}
      ></Stack>
    </>
  );
}
