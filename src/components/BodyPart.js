import React from "react"
import {Stack, Typography} from '@mui/material';
import Dumbell from '../assets/dumbel.png';

export default function BodyPart({item, setBodyParts, bodyParts}) {
 return (
  
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"

    sx={{
     borderTop: bodyParts === item ? '1px solid #red' : '',
     backgroundColor: '#1e88e5',
     borderRadius: '20px',
     width: '250px', 
     height: '260px',
     cursor: 'pointer', 
     gap: '30px'
    }}
    onClick={() => {
     setBodyParts(item);
     window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
   }}
  >
    <img src={Dumbell} alt="Cadio" style={{width: '100px', height: '100px'}}/>
    <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#fff" textTransform="capitalize"> {item}</Typography>
  </Stack>
 )
}