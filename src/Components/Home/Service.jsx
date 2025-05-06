import React from "react";
import { IconButton, Stack, Typography } from "@mui/material";

import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import BeenhereOutlinedIcon from "@mui/icons-material/BeenhereOutlined";
export default function Service() {
  return (
    <>
      <Stack direction={ { xs:"column" ,  md:"row" }} justifyContent={"center"} gap={15} mt={ 10 }>
        <Stack  alignItems={"center"} gap={1}>
          <Stack sx={{ background:"rgba(128, 128, 128, 0.3)", borderRadius:"50%"}}>
          <IconButton>
            <LocalShippingOutlinedIcon
              sx={{
                position: "relative",
                background: " black",
                color: "white",
                borderRadius: "50%",
                fontSize: "var(--font-lg)",
                p: "10px",
              }}
            />
          </IconButton>
          </Stack>
          <Typography sx={{ fontSize:'var(--font-md),', fontWeight:600, textTransform:'capitalize'  }}>FREE AND FAST DELIVERY</Typography>
          <Typography sx={{ fontSize:'var(--font-xs)'  }} >Free delivery for all orders over $140</Typography>
        </Stack>
        <Stack alignItems={"center"} gap={1}>
          <Stack  sx={{ background:"rgba(128, 128, 128, 0.3)", borderRadius:"50%"}}>
          <IconButton>
            <SupportAgentOutlinedIcon 
            sx={{      position: "relative",
              background: " black",
              color: "white",
              borderRadius: "50%",
              fontSize: "var(--font-lg)",
              p: "10px",}} />
          </IconButton>
          </Stack>
          <Typography sx={{ fontSize:'var(--font-md),', fontWeight:600, textTransform:'capitalize'  }}>24/7 CUSTOMER SERVICE</Typography>
          <Typography sx={{ fontSize:'var(--font-xs)'  }}>Friendly 24/7 customer support</Typography>
        </Stack>
        <Stack alignItems={"center"} gap={1}>
          <Stack sx={{ background:"rgba(128, 128, 128, 0.3)", borderRadius:"50%"}} >
          <IconButton>
            <BeenhereOutlinedIcon 
            sx={{      position: "relative",
              background: " black",
              color: "white",
              borderRadius: "50%",
              fontSize: "var(--font-lg)",
              p: "10px",}}/>
          </IconButton>
          </Stack>
          <Typography sx={{ fontSize:'var(--font-md),', fontWeight:600, textTransform:'capitalize'  }}>MONEY BACK GUARANTEE</Typography>
          <Typography sx={{ fontSize:'var(--font-xs)'  }}>We return money within 30 days</Typography>
        </Stack>
      </Stack>
    </>
  );
}
