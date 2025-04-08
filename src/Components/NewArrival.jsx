import { Box, Button, Link, Stack, Typography } from "@mui/material";
import React from "react";

import Playstaion from "../images/Playstation.png";
import WomenCollection from "../images/WomenCollection.png";
import Speakers from "../images/Speakers.png";
import GucciPerfume from "../images/GucciPerfume.png";

export default function NewArrival() {
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
          Our Products
        </Typography>
      </Stack>

      <Stack direction={"row"} gap={"80px"} ml={"50px"}>
        <Typography sx={{ fontSize: "var(--font-lg)", fontWeight: 600 }}>
          New Arrival
        </Typography>
      </Stack>

      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"center"}
        alignContent={"center"}
        gap={4}
        height={"500px"}
        width={"1154px"}
        mx={"auto"}
        mt={3}
      >
        {/* PlayStation */}
        <Stack
          sx={{
            background: "black",
            position: "relative",
            display:"flex",
            justifyContent:"end",
            alignItems:"center"
          }}
          height={"100%"}
          width={"50%"}
        >
          <Stack
              display={"flex"}
              alignItems={"flex-start"}
              gap={1}
              position={"absolute"}
              left={0}
              px={3}
              py={6}
            >
              {/* Text (Left Side) */}
              <Typography
                sx={{
                  color: "white",
                  fontSize: "var(--font-md)",
                  fontWeight: 600,
                }}
              >
                Play Station 5
              </Typography>
              <Typography
                sx={{
                  color: "var(--text-color)",
                  fontSize: "var(--font-xs)",
                }}
              >
          Black and White version of the PS5 <br />coming out on sale.       
       </Typography>
              <Link
                sx={{
                  color: "white",
                  textDecorationColor: "rgba(255, 255, 255, 0.5)",
                  cursor: "pointer",
                }}
              >
                Shop Now
              </Link>
            </Stack>


          <img src={Playstaion} alt="" width={"400px"} height={"450px"} />
        </Stack>
        {/* main stack of Women Collection , speakers and Perfume */}
        <Stack
          justifyContent={"space-between"}
          height={"100%"}
          width={"60%"}
          gap={3}
        >
          {/* Women Collections */}
          <Stack
            sx={{
              background: "black",
              display: "flex",
              flexDirection: "row", // ✅ Items in a row
              justifyContent: "space-between", // ✅ Space between text & image
            }}
            flex={1}
            height={"40%"}
          >
            <Stack
              display={"flex"}
              alignItems={"flex-start"}
              mx={1.5}
              mt={"20%"}
              gap={1}
            >
              {/* Text (Left Side) */}
              <Typography
                sx={{
                  color: "white",
                  fontSize: "var(--font-md)",
                  fontWeight: 600,
                }}
              >
                Women's Collections
              </Typography>
              <Typography
                sx={{
                  color: "var(--text-color)",
                  fontSize: "var(--font-xs)",
                }}
              >
                Featured woman collections that give you another vibe.
              </Typography>
              <Link
                sx={{
                  color: "white",
                  textDecorationColor: "rgba(255, 255, 255, 0.5)",
                  cursor: "pointer",
                }}
              >
                Shop Now
              </Link>
            </Stack>

            {/* Image (Right Side) */}
            <img src={WomenCollection} alt="" width={"280px"} height={"100%"} />
          </Stack>

          {/* main stack of Speakers and Perfume */}
          <Stack direction={"row"} flex={1} gap={4}>
            {/* Speakers */}
            <Stack
              sx={{
                background: "black",
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              width={"48%"}
              height={"100%"}
            >
              <Stack
                display={"flex"}
                alignItems={"flex-start"}
                mt={"50%"}
                gap={0.5}
                position={"absolute"}
                left={0}
                mx={2}
              >
                <Typography
                  sx={{
                    color: "var(--text-color)",
                    fontSize: "var(--font-md)",
                    fontWeight: 600,
                  }}
                >
                  Speakers
                </Typography>
                <Typography
                  sx={{
                    color: "var(--text-color)",
                    fontSize: "var(--font-xs)",
                  }}
                >
                  Amazon wireless speakers
                </Typography>
                <Link
                  sx={{
                    color: "white",
                    textDecorationColor: "rgba(255, 255, 255, 0.5)",
                    cursor: "pointer",
                  }}
                >
                  Shop Now
                </Link>
              </Stack>
              <img src={Speakers} alt="" width={"150px"} height={"190px"} />
            </Stack>
            {/* Perfume */}
            <Stack
              sx={{ background: "black", position: "relative" }}
              width={"48%"}
              height={"100%"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Stack
                display={"flex"}
                alignItems={"flex-start"}
                mt={"50%"}
                gap={0.5}
                position={"absolute"}
                left={0}
                mx={2}
              >
                <Typography
                  sx={{
                    color: "var(--text-color)",
                    fontSize: "var(--font-md)",
                    fontWeight: 600,
                  }}
                >
                  Perfume
                </Typography>
                <Typography
                  sx={{
                    color: "var(--text-color)",
                    fontSize: "var(--font-xs)",
                  }}
                >
                  GUCCI INTENSE OUD EDP
                </Typography>
                <Link
                  sx={{
                    color: "white",
                    textDecorationColor: "rgba(255, 255, 255, 0.5)",
                    cursor: "pointer",
                  }}
                >
                  Shop Now
                </Link>
              </Stack>
              <img src={GucciPerfume} alt="" width={"150px"} height={"190px"} />
            </Stack>
          </Stack>
        </Stack>
      </Box>
      <br />
      <br />
    </>
  );
}
