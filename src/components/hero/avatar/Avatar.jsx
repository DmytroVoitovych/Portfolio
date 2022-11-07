import { png, webp,old, Churd, Oval, RotateSix } from "../helpers/path";
import { Ava, Box, oval, rotate } from "./Avatar.styled";
import { Logo } from "../logo/Logo";
import { useState } from "react";


export const Avatar = () => {
  const [hover, setHover] = useState(false);  

 
    return (
       <div style={{position: 'relative'}} onMouseOverCapture={()=>setHover(true)} onMouseOutCapture={()=>setHover(false)}>
        <picture style={{position:'relative', zIndex:2}}  >
            <source srcSet={`${webp} 1x`} type="image/webp" />
            <source srcSet={`${old} 1x`} type="image/png" />
            <Ava src={png} alt="man" />
           </picture>
            <Box><Churd /><Churd /><Churd /></Box>
            <Oval css={oval} />
        <RotateSix css={rotate} />
        {!hover && <Logo />}
            </div>
    );

};