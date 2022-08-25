import React, {useState, useEffect} from "react"
import {Box, Button, Stack, TextField, Typography} from '@mui/material'

export default function SearchExercise() {
 return (
  <Stack alignItems="center" mt="40px" justifyContent="center" p="20px">  
    <Typography fontWeight={600} sx={{fontSize: {lg: '45px', xs: '35px'}}} mb="50px" textAlign="center">
     Awesome Exercise You <br /> Should Participate
    </Typography>
    <Box position="relative" mb="70px">
     <TextField 
       sx={{
        input: {fontWeight: '500', borderRadius: '4px'},
        width: {lg: '800px', xs: '400px'}
       }}
       height="70px"
       value=""
       onChange={(e) => {}}
       placeholder="Search exercise curriculum"
       type="text"
     />
     <Button variant="contained" sx={{height: "55px",  fontWeight: "bold", width: {lg: '150px', xs: '80px'}, fontSize: {lg: '15px', xs: '10px'}, position: 'absolute', right: 0}} className="search-btn">Search</Button>
    </Box>
  </Stack>
 )
}