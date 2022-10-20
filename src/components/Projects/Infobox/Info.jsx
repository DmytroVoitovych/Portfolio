import { jpgStudio, webpStudio, jpgTeam, webpTteam, jpgFilm, webpFilm, jpgPhonebook, webpPhonebook} from "./path";


export const Info = () => {
    
    return (

        <>
            <picture>
                <source srcSet={`${webpStudio} 1x`} type="image/webp" />
            <source srcSet={`${jpgStudio} 1x`} type="image/jpg" />
                <img src={jpgStudio} alt="office and humans" />
        </picture>
            <div>
                <p><span>Web</span>Studio Page Layout</p>
                <button>View Details</button>
        </div>
        </>

    );

};

export const Info2 = () => {
    
    return (

        <>
           <picture>
                <source srcSet={`${webpTteam} 1x`} type="image/webp" />
                <source srcSet={`${jpgTeam} 1x`} type="image/jpg" />
                <img src={jpgTeam} alt="office and humans" />
        </picture>
            <div>
                <p><span>Team</span>Work Page Layout</p>
                <button>View Details</button>
        </div>
        </>

    );

};

export const Info3 = () => {
    
    return (

        <>
            <picture>
                <source srcSet={`${webpFilm} 1x`} type="image/webp" />
            <source srcSet={`${jpgFilm} 1x`} type="image/jpg" />
                <img src={jpgFilm} alt="office and humans" />
        </picture>
            <div>
                <p><span>Filmo</span>Teka JS Project</p>
                <button>View Details</button>
        </div>
        </>

    );

};

export const Info4 = () => {
    
    return (

        <>
            <picture>
                <source srcSet={`${webpPhonebook} 1x`} type="image/webp" />
            <source srcSet={`${jpgPhonebook} 1x`} type="image/jpg" />
                <img src={jpgPhonebook} alt="office and humans" />
        </picture>
            <div>
                <p><span>Phone</span>Book React Auth</p>
                <button>View Details</button>
        </div>
        </>

    );

};


export const infoComponents = [<Info/>,<Info2/>,<Info3/>,<Info4/>];