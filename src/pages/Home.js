import React, {useState} from "react"
import {Box} from '@mui/material';
import Banner from "../components/Banner";
import SearchExercise from "../components/SearchExercise";
import Exercise from "../components/Exercise";

export default function Home() {
 return (
  <Box>
   <Banner />
   <SearchExercise />
   <Exercise />
  </Box>
 )
}