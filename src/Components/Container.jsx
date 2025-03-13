import { Stack, Typography } from '@mui/material'
import React from 'react'

export default function Container() {
  return (
    <>
      <Stack mt={"100px"} direction={"row"} alignItems={"center"} gap={"16px"}  ml={"50px"}>
        <Stack sx={{ bgcolor:"var(--color-danger)", width:"15px", height:"30px", borderRadius:"4px"}}></Stack>
        <Typography sx={{color:"var(--color-danger)", fontSize:"var(--font-sm)", fontWeight:600}}>Today's</Typography>
      </Stack>

      <Stack ml={"50px"} mt={2}>
        <Typography sx={{fontSize:"var(--font-lg)", fontWeight:600}}>Flash Sales</Typography>
      </Stack>
    </>
  )
}
