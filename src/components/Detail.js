import React from "react"
import { Typography, Stack, Button } from "@mui/material"
import BodyPartImage from '../assets/Boody.png'
import TargetImage from '../assets/Target.png'
import EquipmentImage from '../assets/Equip.png'


export default function Detail({exerciseDetail}) {
 const {bodyPart, gifUrl, name, target, equipment} = exerciseDetail;
 const extraDetail = [
  {
   icon: BodyPartImage,
   name: bodyPart,
  },
  {
   icon: TargetImage,
   name: target,
  },
  {
   icon: EquipmentImage,
   name: equipment,
  }
 ]
 return (
  <Stack gap="60px" sx={{flexDirection: {lg: 'row'}, p: '20px', alignItems: 'center'}}>
   <img src={gifUrl} alt={name} loading="lazy" className="detail-image"/>
   <Stack sx={{gap: {lg: '35px', xs: '20px'}}}>
     <Typography variant="h3">
      {name}
     </Typography>
     <Typography variant="h6">
      Exercises keep you strong. {name} {` `} is one of the best exercises to target your {target}. It will help you improve our mood and gain energy
     </Typography>
     {extraDetail.map((item) => (
      <Stack key={item.name} direction="row" gap="20px" alignItems="center">
        <Button sx={{background: '#2196f3', borderRadius: '20%', width:"80px", height:"80px"}}>
         <img src={item.icon} width="50px" height="40px"/>
        </Button>
        <Typography variant="h5" textTransform="capitalize">
         {item.name}
        </Typography>
      </Stack>
     ))}
   </Stack>

  </Stack>
 )
}