import React from "react"
import {Box, Stack, Typography} from '@mui/material'
import Logo from '../assets/Logo.png'

export default function Footer() {
 return (
  <Box mt="40px" bgcolor="#2196f3" >
   <Stack gap="40px" alignItems="center" px="40px" pt="20px">
    <img src={Logo} alt="logo" width="200px" height="150px"/>
     <Typography fontWeight={600} sx={{fontSize: {lg: '45px', xs: '35px'}}} mb="50px" textAlign="center" color="#fff">
     Awesome Exercise You Should Participate
    </Typography>
   </Stack>
  </Box>
 )
}