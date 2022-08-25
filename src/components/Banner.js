import React from "react";
import {Box, Stack, Typography, Button} from '@mui/material'
import GymBaner from '../assets/gymbanner.png'

export default function Banner() {
 return (
  <Box sx={{
   mt: {lg: '100px', xs: '70px'},
   ml: {sm: '50px'}
   }}
   position="relative" p="20px"
   >
   <Typography color="#FF2625" fontWeight="600" fontSize={26}>
     Fitness CLUB
   </Typography>
   <Typography fontWeight={700} sx={{fontSize: {lg: '40px', xs: '35px',}}} mb="20px" mt="30px">
    Sweat, Smile <br /> and Repeat
   </Typography>
   <Typography fontSize={25} lineHeight="35px" mb={4}>
    Check out the most effective exercise
   </Typography>
   <Button variant="contained" href="#exercises" sx={{padding: '10px 20px'}}>Explore more program</Button>
   <Typography
     fontWeight={600}
     color="#ff2526"
     sx={{
      opacity: 0.1,
      display: {lg: 'block', xs: 'none'}
     }}
     fontSize="180px"
   >
     Fitness
   </Typography>
   <img src={GymBaner} alt="banner" className="hero-banner-img"/>
  </Box>
 )
}