import { MdCopyright } from 'react-icons/md';
import { FooterBox } from './Footer.styled';


const year = new Date().getFullYear();
export const Footer = () =>
    <footer style={{paddingBottom:'48px'}}>
        <FooterBox><MdCopyright /><p> Dmytro Voitovych<span> {year}</span></p></FooterBox>
    </footer>;