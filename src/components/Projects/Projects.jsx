import { useState, useRef, useEffect } from "react";
import { Info } from "./Infobox/Info";
import { Title, Desc,InfoBox, See } from "./Projects.styled";
import { flexProj} from "./Infobox/renderProj";

export const Project = ({proj}) => {

    const [actual, setActual] = useState(3);    
    const fact = flexProj.length;
    
    const locate = useRef(null);
   
    useEffect(()=>proj(locate.current.offsetParent.offsetTop));

    return (
        <section >
            <div style={{position:'relative', marginBottom:'66px'}}>
                <Title
                    id='Project'
                    ref={locate}
                >MY PROJECT
                </Title>
                <Desc>MY PROJECTS</Desc>
            </div>
            <InfoBox>
                    <Info  length={actual} />
            </InfoBox>
            <See
                type="button"
                onClick={() => fact === actual + 1 ? setActual(prev => prev - 1) : setActual(prev => prev + 1)}>{fact === actual + 1 ? 'Hide Item' : 'See More'}
            </See>
        </section>

    );

};