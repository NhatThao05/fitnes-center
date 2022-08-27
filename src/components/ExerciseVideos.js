import React from "react"
import {Box, Stack, Typography} from '@mui/material'

export default function ExerciseVideos({exerciseVideos, name}) {
 console.log(exerciseVideos)
 if (!exerciseVideos) return "Loading...";
 return (
  <Box sx={{marginTop: {lg: '200px', xs: '20px'}}} p="20px">
   <Typography variant="h4" mb="30px">
    Watch <span style={{color: '#2196f3', textTransform: 'capitalize'}}>{name}</span> exercise video
   </Typography>
   <Stack justifyContent="flex-start" flexWrap="wrap" alignItems="center"
     sx={{
      flexDirection: {lg: 'row'},
      gap: {lg: '100px', xs: '10px'}
     }}
   >
     {exerciseVideos?.slice(0, 6).map((item, index) => (
      <a
        key={index}
        className="exercise-video"
        href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
        target="_blank"
        rel="noreferrer"
      >
        <img src={item.video.thumbnails[0].url} alt={item.video.title}/>
        <Box>
         <Typography variant="h6" color="#2196f3" fontWeight="bold">
           {item.video.title}
         </Typography>
         <Typography variant="h6" color="#2196f3">
           {item.video.channelName}
         </Typography>
        </Box>
      </a>
     ))}
   </Stack>
  </Box>
 )
}