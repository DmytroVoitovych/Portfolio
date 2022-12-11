import { png, webp,old, Churd, Oval, RotateSix } from "../helpers/path";
import { Ava, Box, oval, rotate } from "./Avatar.styled";
import { Logo } from "../logo/Logo";
import { useState, useRef } from "react";
import { useSize } from "helpers/customHook/useSize";


export const Avatar = ({media}) => {
  const [hover, setHover] = useState(false); 
  const {burger, all,isMobile } = media;
  
  const maxwid = useRef(null); 
  const size = useSize(maxwid)
 
    return (
       <div style={{position: 'relative'}} onMouseOverCapture={()=>setHover(true)} onMouseOutCapture={()=>setHover(false)}>
        <picture style={{position:'relative', zIndex:2}}  >
            <source srcSet={`${webp} 1x`} type="image/webp" />
            <source srcSet={`${old} 1x`} type="image/png" />
            <Ava ref={maxwid} src={png} alt="man" style={{maxWidth: (!burger && !all ) && '370px'}} />
           </picture>
            <Box><Churd /><Churd /><Churd /></Box>
        <Oval style={
          {
            top: (!isMobile && !all) && '-60px',
            maxWidth: isMobile && (size?.width ?? maxwid.current?.width),
            maxHeight: isMobile && (size?.height ?? maxwid.current?.height),
          }} css={oval} />
        <RotateSix css={rotate} />
        {!hover && <Logo />}
            </div>
    );

};