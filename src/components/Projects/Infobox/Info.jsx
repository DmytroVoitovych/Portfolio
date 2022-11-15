import { useState, memo } from "react";
import { Details } from "./Details";
import { flexProj, funcHover, funcGetInfo } from "./renderProj";



export const Info = memo(({length}) => {
    const [hover, setHover] = useState(false);
   
     const arrVisible = flexProj.filter((_, index) => index <= length);    


    return arrVisible.map(({ typejpg, typewebp, accent, desc, video, styleImg, styleVid, styleInfo, info, linklive, linkrep }, index) =>
        <li key={index}>
            <div   >
                <Details live={linklive} rep={linkrep} styleInfo={styleInfo} info={info} />
               
                <picture onMouseEnter={() => { setHover(true); funcHover(hover, index); }} >
                    <source srcSet={`${typewebp} 1x`} type="image/webp" />
                    <source srcSet={`${typejpg} 1x`} type="image/jpg" />
                    <img
                        style={{ display: `${styleImg}` }}
                        src={typejpg}
                        alt="office and humans"
                    />
                </picture>
                 
                <div>
                     
                    <video
                
                        style={{ display: `${styleVid}` }}
                        onMouseLeave={() => { setHover(false); funcHover(hover, index); }}
                        id={index}
                        autoPlay muted loop
                        src={video}
                        itemType='video/mp4'
                    />
                </div>
                
                
            </div>
            
            <div>
                <p><span>{accent}</span>{desc}</p>
                <button
                    onClick={funcGetInfo}
                    type="button">
                    View Details
                </button>
            </div>
        </li>
    
    );

});

