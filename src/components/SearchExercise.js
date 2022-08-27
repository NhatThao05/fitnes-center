import React, {useState, useEffect} from "react"
import {Box, Button, Stack, TextField, Typography} from '@mui/material'
import { fetchData, exerciseOptions } from "../utils/fetchData"
import HorizontalScrollbar from "./HorizontalScrollbar"

export default function SearchExercise({setExercises, bodyParts, setBodyParts, isBodyParts}) {
 const [search, setSearch] = useState('')

useEffect(() => {
  const fetchExercisesData = async () => {
    const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
    setBodyParts(['all', ...bodyPartsData]);
  };

  fetchExercisesData();
},[]);

 const handleSearch = async () => {
  if(search) {
    const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
    const searchExercises = exercisesData.filter(
      (exercise) => exercise.name.toLowerCase().includes(search)
      || exercise.target.toLowerCase().includes(search)
      || exercise.equipment.toLowerCase().includes(search)
      || exercise.bodyPart.toLowerCase().includes(search)
      )

      setSearch('');
      setExercises(searchExercises);
  }
 }

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
       value={search}
       onChange={(e) => setSearch(e.target.value.toLowerCase())}
       placeholder="Search exercise curriculum"
       type="text"
     />
     <Button variant="contained" 
       sx={{height: "55px",  fontWeight: "bold", 
        width: {lg: '150px', xs: '80px'}, 
        fontSize: {lg: '15px', xs: '10px'}, 
        position: 'absolute', right: 0}} 
       onClick={handleSearch} 
       className="search-btn">Search</Button>
    </Box>
    <Box sx={{position: 'relative', width: '100%', p: '20px'}}>
       <HorizontalScrollbar data={bodyParts} bodyParts={bodyParts} setBodyParts={setBodyParts} isBodyParts/>
    </Box>
  </Stack>
 )
}