import React, {useState} from "react"
import {Box} from '@mui/material';
import Banner from "../components/Banner";
import SearchExercise from "../components/SearchExercise";
import Exercise from "../components/Exercise";

export default function Home() {
 const [bodyParts, setBodyParts] = useState(['all'])
 const [exercises, setExercises] = useState([]);
 return (
  <Box>
   <Banner />
   <SearchExercise 
     setExercises={setExercises} 
     bodyParts={bodyParts} 
     setBodyParts={setBodyParts}/>
   <Exercise 
     setExercises={setExercises} 
     bodyParts={bodyParts} 
     exercises={exercises}
   />
  </Box>
 )
}