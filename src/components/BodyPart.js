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
    // sx={bodyParts === item ? 
    //  { borderTop: '4px solid #FF2625', background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' } : 
    //  { background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' }}

    sx={{
     borderTop: bodyParts === item ? '4px solid #FF2625' : '',
     backgroundColor: '#fff',
     borderBottomLeftRadius: '20px',
     width: '270px', 
     height: '282px',
     cursor: 'pointer', 
     gap: '47px'
    }}
    // onClick={() => {
    //   setBodyParts(item);
    //   window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    // }}
    onClick={() => {
     setBodyParts(item);
     window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
   }}
  >
    <img src={Dumbell} alt="Cadio" style={{width: '40px', height: '40px'}}/>
    <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize"> {item}</Typography>
  </Stack>
 )
}