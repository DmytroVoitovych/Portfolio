import { jpgStudio, webpStudio, jpgTeam, webpTteam, jpgFilm, webpFilm, jpgPhonebook, webpPhonebook, jpgCurrency, webpCurrency, prof, team, film, phone, currency} from "./path";
import {ice, filmoteka, phonebook, web, usd} from './text';

export const proj = [
    {
        typejpg: jpgStudio,
        typewebp: webpStudio,
        video: prof,
        accent: 'Web',
        desc: 'Studio Page Layout',
        styleImg: 'block',
        styleVid: 'none',
        styleInfo: 'none',
        info: web,
        linklive:'https://dmytrovoitovych.github.io/goit-markup-hw-08/',
        linkrep:'https://github.com/DmytroVoitovych/goit-markup-hw-08'
    },
    
    {
        typejpg: jpgTeam,
        typewebp: webpTteam,
        video: team,
        accent: 'Team',
        desc: 'Work Page Layout',
        styleImg: 'block',
        styleVid: 'none',
        styleInfo: 'none',
        info: ice,
        linklive:'https://dmytrovoitovych.github.io/team-storm/',
        linkrep:'https://github.com/DmytroVoitovych/team-storm'   
    },

    {
        typejpg: jpgFilm,
        typewebp: webpFilm,
        video: film,
        accent: 'Filmo',
        desc: 'Teka JS Project',
        styleImg: 'block',
        styleVid: 'none',
        styleInfo: 'none',
        info: filmoteka,
        linklive:'https://dmytrovoitovych.github.io/pr/',
        linkrep:'https://github.com/DmytroVoitovych/pr'   
    },

     {
        typejpg: jpgPhonebook,
        typewebp: webpPhonebook,
        video: phone,
        accent: 'Phone',
        desc: 'Book React Auth',
        styleImg: 'block',
        styleVid: 'none',
        styleInfo: 'none',
        info: phonebook,
        linklive:'https://dmytrovoitovych.github.io/goit-react-hw-08-phonebook/',
        linkrep:'https://github.com/DmytroVoitovych/goit-react-hw-08-phonebook'   
    },
     
     {
        typejpg: jpgCurrency,
        typewebp: webpCurrency,
        video: currency,
        accent: 'Currency',
        desc: 'To Exchange',
        styleImg: 'block',
        styleVid: 'none',
        styleInfo: 'none',
        info: usd,
        linklive:'https://back-currency.onrender.com/',
        linkrep:'https://github.com/DmytroVoitovych/currencyTest'   
    }
];


