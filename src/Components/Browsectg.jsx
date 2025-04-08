import React, {
  useRef,
  useEffect,
  createContext,
  useState,
  useContext,
} from "react";
import {
  Box,
  Button,
  IconButton,
  Rating,
  Stack,
  Typography,
} from "@mui/material";



import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import ComputerOutlinedIcon from "@mui/icons-material/ComputerOutlined";
import WatchOutlinedIcon from "@mui/icons-material/WatchOutlined";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import VideogameAssetOutlinedIcon from "@mui/icons-material/VideogameAssetOutlined";





export default function Browsectg() {
  const Browse = [
    { icon: PhoneAndroidOutlinedIcon, name: "Phones" },
    { icon: ComputerOutlinedIcon, name: "Computers" },
    { icon: WatchOutlinedIcon, name: "Smartwatch" },
    { icon: CameraAltOutlinedIcon, name: "Camera" },
    { icon: HeadphonesOutlinedIcon, name: "HeadPhones" },
    { icon: VideogameAssetOutlinedIcon, name: "Gaming" },
  ];

  return (
    <>
      <Stack
        mt={"100px"}
        direction={"row"}
        alignItems={"center"}
        gap={"16px"}
        ml={"50px"}
      >
        <Stack
          sx={{
            bgcolor: "var(--color-danger)",
            width: "15px",
            height: "30px",
            borderRadius: "4px",
          }}
        ></Stack>
        <Typography
          sx={{
            color: "var(--color-danger)",
            fontSize: "var(--font-sm)",
            fontWeight: 600,
          }}
        >
          Categories
        </Typography>
      </Stack>

      <Stack
        mx={"50px"}
        mt={2}
        direction={"row"}
        justifyContent={"space-between"}
      >
        <Stack direction={"row"} gap={"80px"}>
          <Typography sx={{ fontSize: "var(--font-lg)", fontWeight: 600 }}>
            Browse By Category
          </Typography>
        </Stack>

      </Stack>
      {/* Browse Category */}
      <Stack direction={"row"} justifyContent={"center"} gap={"50px"} mt={7}>
        {Browse.map((ctg, index) => (
          <Stack
            key={index}
            sx={{
              border: "1px solid #0000004D",
              borderRadius: "4px",
              p: "25px 45px 25px 45px",
              boxShadow: 2,
              cursor: "pointer",
              transition:"background-color 0.4s ease-in-out",
              "&:hover": {
                backgroundColor:"var(--color-danger)",
                color:"white",
                "& .icon" : {
                    color:"white !important",
                },
              },
            }}
            alignItems={"center"}
          >
            <IconButton disableRipple>
              {" "}
              <ctg.icon
              className="icon"
                sx={{ fontSize: "var(--font-xl)", color: "black"}}
              />{" "}
            </IconButton>
            <Typography sx={{ fontSize: "var(--font-xs)" }}>
              {" "}
              {ctg.name}{" "}
            </Typography>
          </Stack>
        ))}
      </Stack>
            <Stack sx={{border: "0.5px solid black", opacity:"20%", mt:8}} width={"80%"} mx={"auto"}></Stack>
        
      
    </>
  );
}
