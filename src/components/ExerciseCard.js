import React from "react";
import {Link} from 'react-router-dom';
import { Button, Stack, Typography } from "@mui/material";

export default function ExerciseCard({exercise}) {
 return (
  <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
   <img src={exercise.gifUrl} alt={exercise.name} loading="lazy"/>
   <Stack direction='row'>
    <Button sx={{ml: '20px', color: '#fff', background: '#2196f3', fontSize: '14px', borderRadius: '10px', textTransform: 'capitalize'}}>
      {exercise.bodyPart}
    </Button>
    <Button sx={{ml: '20px', color: '#fff', background: '#4caf50', fontSize: '14px', borderRadius: '10px', textTransform: 'capitalize'}}>
      {exercise.target}
    </Button>
   </Stack>
   <Typography ml="10px" color="#000" fontWeight="bold" mt="10px" pd="10px" textTransform="capitalize" fontSize={20}>
    {exercise.name}
   </Typography>
  </Link>
 )
}