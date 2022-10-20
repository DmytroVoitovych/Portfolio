import { png, webp,old, Churd, Oval, RotateSix } from "../helpers/path";
import { Ava, Box, oval, rotate } from "./Avatar.styled";



export const Avatar =  () => {
  
    return (
       <>
        <picture style={{position:'relative', zIndex:2}}>
            <source srcSet={`${webp} 1x`} type="image/webp" />
            <source srcSet={`${old} 1x`} type="image/png" />
            <Ava src={png} alt="man" />
           </picture>
            <Box><Churd /><Churd /><Churd /></Box>
            <Oval css={oval} />
            <RotateSix css={rotate} />
            </>
    );

};