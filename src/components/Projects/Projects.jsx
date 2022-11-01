import { infoComponents } from "./Infobox/Info";
import { Title, Desc,InfoBox, See } from "./Projects.styled";


export const Project = () => {
    

    return (
        <section >
            <div style={{position:'relative', marginBottom:'66px'}}>
                <Title id='Project'>MY PROJECT</Title>
                <Desc>MY PROJECTS</Desc>
            </div>
            <InfoBox>
               {infoComponents.map((i, index)=> <li key={index}>{i}</li>)}
            </InfoBox>
              <See type="button">See More</See>
        </section>

    );

};