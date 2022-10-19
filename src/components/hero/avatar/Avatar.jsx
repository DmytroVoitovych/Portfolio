import { png, webp,old, Churd, Oval } from "../helpers/path";
import { Ava, Box } from "./Avatar.styled";
import { css, jsx } from "@emotion/react";

const a = css({
    position: 'absolute'
});



export const Avatar =  () => {
  
    return (
       <>
        <picture style={{position:'relative'}}>
            <source srcSet={`${webp} 1x`} type="image/webp" />
            <source srcSet={`${old} 1x`} type="image/png" />
            <Ava src={png} alt="man" />
           </picture>
            <Box><Churd /><Churd /><Churd /></Box>
            <Oval css={a}  />
            </>
    );

};