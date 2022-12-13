import { useState, memo, useEffect} from "react";
import { Details } from "./Details";
import { flexProj, funcHover, funcGetInfo } from "./renderProj";
import { tabletka, tabletMore, pmob, lanccape} from "./info.styled";
import { usePrevious } from "react-delta";


export const Info = memo(({length, media}) => {
    
    const [hover, setHover] = useState(false);
    const { all, burger, tablet, isMobile, desctop } = media;
    const [ind, setInd] = useState(null);
    const prev = usePrevious(ind);

    useEffect(() => {
        
        if (ind || ind === 0) {
            if (ind !== prev ) {
                funcHover(true, ind);
                setHover(true);
               }
            funcHover(false, ind);
        }
        return () => { setHover(false); setInd(null)};
    },[ind, prev]);
   
    const arrVisible = flexProj.filter((_, index) => index <= length);    
    
    return arrVisible.map(({ typejpg, typewebp, accent, desc, video, styleImg, styleVid, styleInfo, info, linklive, linkrep }, index) =>
        <li key={index} css={(desctop || tablet || isMobile) && tabletka} >
            <div style={{maxHeight: (isMobile || tablet) && '100%', height: (isMobile || tablet) && 'auto' }}  >
                <Details live={linklive} rep={linkrep} styleInfo={styleInfo} info={info} media={{ burger, isMobile, tablet, desctop}} />
                <picture onMouseEnter={() => {(desctop || all) && setHover(true); (desctop || all) && funcHover(hover, index); }}
                    onTouchStart={() => { setInd(index); }}
                >
                    <source srcSet={`${typewebp} 1x`} type="image/webp" />
                    <source srcSet={`${typejpg} 1x`} type="image/jpg" />
                    <img
                        style={{ display: `${styleImg}`,minHeight: isMobile && 'auto'}}
                        src={typejpg}
                        alt="office and humans"
                    />
                </picture>
               <div>
                   <video
                        style={{ display: `${styleVid}` }}
                        onMouseLeave={() => {(desctop || all) && setHover(false); (desctop || all) && funcHover(hover, index); }}
                        onTouchStart={() => {setHover(!hover); funcHover(true, index);}}
                        id={index}
                        autoPlay muted loop
                        src={video}
                        itemType='video/mp4'
                        css={(!all) && lanccape}
                    />
                </div>
          </div>
         <div css={(desctop || tablet) && tabletMore} style={{flexDirection: tablet && 'column', textAlign: isMobile && 'center'}}>
                <p style={{margin: (desctop || tablet) && 0, fontSize: isMobile && '20px'}} css={pmob}><span>{accent}</span>{desc}</p>
                <button
                    style={{ fontSize: isMobile && '16px', padding: '12px 32px', }}
                    onClick={funcGetInfo}
                    type="button">
                    View Details
                </button>
            </div>
        </li>
    );
});

