import React from "react"
import {Link} from 'react-router-dom';
import { Stack, Box } from "@mui/material";
import Logo from '../assets/Logo.png'


export default function Navbar() {
 return (
  <Stack direction="row" justifyContent="space-around" sx={{gap: {sm: '120px', xs: '40px'}, mt: {sm: '30px', xs: '20px'}, justifyContent: 'none'}} px="20px">
    <Link to="/">
     <img src={Logo} alt="logo" style={{width: '120px', height: '120px', margin: '0 20px'}}/>
    </Link>
    <Stack 
      direction="row"
      gap="40px"
      fontSize="24px"
      alignItems="flex-end"
    >
     <Link to="/" style={{textDecoration: 'none', color: '#3A1212', borderBottom: '2px solid #1e88e5'}}>Home</Link>
     <a href="#exercise" style={{textDecoration: 'none', color: '#3A1212'}}>Exercise Program</a>
    </Stack>
  </Stack>
 )
}