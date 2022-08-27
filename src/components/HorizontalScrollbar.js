import React, {useContext} from "react"
import {Box, Typography} from '@mui/material'
import {ScrollMenu, VisibilityContext} from 'react-horizontal-scrolling-menu'
import BodyPart from "./BodyPart"


const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);
  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      Prev
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);
  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      Next
    </Typography>
  );
};

export default function HorizontalScrollbar({data, bodyParts, setBodyParts}) {
 return (
  <div>
  <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
   {data.map((item) => (
    <Box
      key={item.id || item}
      itemId={item.id || item}
      title={item.id || item}
      m="0 40px"
    >
      <BodyPart item={item} bodyParts={bodyParts} setBodyParts={setBodyParts}/>
    </Box>
   ))}
  </ScrollMenu>
  </div>
 )
}