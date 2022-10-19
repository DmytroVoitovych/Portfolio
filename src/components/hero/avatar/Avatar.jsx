import { png, webp,old, Churd, Oval } from "../helpers/path";
import { Ava, Box, oval } from "./Avatar.styled";






export const Avatar =  () => {
  
    return (
       <>
        <picture style={{position:'relative'}}>
            <source srcSet={`${webp} 1x`} type="image/webp" />
            <source srcSet={`${old} 1x`} type="image/png" />
            <Ava src={png} alt="man" />
           </picture>
            <Box><Churd /><Churd /><Churd /></Box>
            <Oval css={oval}  />
            </>
    );

};