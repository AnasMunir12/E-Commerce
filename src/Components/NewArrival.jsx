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
        <Typography
          sx={{
            fontSize: {
              xs: "var(--font-sm)",
              sm: "var(--font-md)",
              md: "var(--font-lg)",
            },
            fontWeight: 600,
          }}
        >
          New Arrival
        </Typography>
      </Stack>

      <Box
        display={"flex"}
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent={"center"}
        alignContent={"center"}
        gap={4}
        height={{ xs: "auto", md: "500px" }} // ✅ Let it grow naturally in xs
        width={{ xs: "80%", md: "90%", lg: "1154px" }} // Adjusted for better laptop scaling
        maxWidth="1200px" // Added to prevent over-stretching
        mx={"auto"}
        mt={{ xs: 20, md: 3 }}
      >
        {/* PlayStation */}
        <Stack
          sx={{
            background: "black",
            position: "relative",
            display: "flex",
            justifyContent: { xs: "center", md: "end" },
            alignItems: "center",
          }}
          height={"100%"}
          // width={{ xs: "20%", md: "50%" }}
          width={{ xs: "100%", md: "50%" }}
        >
          <Stack
            display={"flex"}
            alignItems={"flex-start"}
            gap={1}
            position={"absolute"}
            left={0}
            sx={{
              px: 3,
              py: 6,
            }}
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
              Black and White version of the PS5 <br />
              coming out on sale.
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

          <Box
            component="img"
            src={Playstaion}
            alt="PlayStation"
            sx={{
              width: { xs: "200px", md: "400px" },
              height: { xs: "250px", md: "450px" },
            }}
          />
        </Stack>
        {/* main stack of Women Collection , speakers and Perfume */}
        <Stack
          justifyContent={"space-between"}
          height={"100%"}
          width={{ xs: "100%", md: "60%" }}
          gap={3}
        >
          {/* Women Collections */}
          <Stack
            sx={{
              background: "black",
              display: "flex",
              flexDirection: { xs: "column", md: "row" }, // ✅ Items in a row
              justifyContent: "space-between", // ✅ Space between text & image
              alignItems: { xs: "center", md: "stretch" },
            }}
            flex={1}
            height={{ xs: "auto", md: "40%" }}
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
          <Stack direction={"row"} flex={1} gap={{ xs: 1, md: 4 }}  >
            {/* Speakers */}
            <Stack
              sx={{
                background: "black",
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
              }}
              width={"48%"}
              height={"100%"}
              p={{ xs: 3, md: 0 }}
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
                    fontSize: {
                      xs: "var(--font-sm)",
                      md: "var(--font-md)",
                    },
                    fontWeight: 600,
                  }}
                >
                  Speakers
                </Typography>
                <Typography
                  sx={{
                    color: "var(--text-color)",
                    fontSize: {
                      xs: "10px",
                      md: "var(--font-xs)",
                    },
                  }}
                >
                  Amazon wireless speakers
                </Typography>
                <Link
                  sx={{
                    color: "white",
                    textDecorationColor: "rgba(255, 255, 255, 0.5)",
                    cursor: "pointer",
                    fontSize: {
                      xs: "var(--font-xs)",
                      md: "var(--font-sm)",
                    },
                  }}
                >
                  Shop Now
                </Link>
              </Stack>

              <Box
                component="img"
                src={Speakers}
                alt="Speakers"
                sx={{
                  width: { xs: "80px", md: "150px" },
                  height: { xs: "100px", md: "190px" },
                }}
              />
            </Stack>
            {/* Perfume */}
            <Stack
              sx={{ background: "black", position: "relative" }}
              width={"48%"}
              height={"100%"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              p={{ xs: 3, md: 0 }}
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
                    fontSize: {
                      xs: "var(--font-sm)",
                      md: "var(--font-md)",
                    },
                    fontWeight: 600,
                  }}
                >
                  Perfume
                </Typography>
                <Typography
                  sx={{
                    color: "var(--text-color)",
                    fontSize: {
                      xs: "10px",
                      md: "var(--font-xs)",
                    },
                  }}
                >
                  GUCCI INTENSE OUD EDP
                </Typography>
                <Link
                  sx={{
                    color: "white",
                    textDecorationColor: "rgba(255, 255, 255, 0.5)",
                    cursor: "pointer",
                    fontSize: {
                      xs: "var(--font-xs)",
                      md: "var(--font-sm)",
                    },
                  }}
                >
                  Shop Now
                </Link>
              </Stack>
              <Box
                component="img"
                src={GucciPerfume}
                alt="Speakers"
                sx={{
                  width: { xs: "70px", md: "150px" },
                  height: { xs: "100px", md: "190px" },
                }}
              />
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </>
  );
}
