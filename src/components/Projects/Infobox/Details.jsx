import { AiFillGithub } from "react-icons/ai";
import { inf, Block, olList } from "../Projects.styled";
import { LinkContact } from "components/header/Header.styled";
import { colorsFontsDark } from "helpers/styleTemplate";
const { accent_dark__yellow } = colorsFontsDark;

export const Details = ({styleInfo, info, live, rep}) => {
   
  return  <div style={{ display: `${styleInfo}` }}>
        <div css={inf}>{info}
            <ul css={olList}>
                <ol >
                    <span>Live Page:</span> <LinkContact
                        href={live}
                        target={'_blank'}
                        rel="noopener noreferrer">
                        <Block style={{ backgroundColor: accent_dark__yellow, borderRadius: 'inherit', display: "flex" }}>
                            <AiFillGithub />
                        </Block></LinkContact>
                </ol>
                <ol>
                    <span>Repository:</span> <LinkContact
                        href={rep}
                        target={'_blank'}
                        rel="noopener noreferrer">
                        <Block style={{ backgroundColor: accent_dark__yellow, borderRadius: 'inherit', display: "flex" }}>
                            <AiFillGithub />
                        </Block></LinkContact>
                </ol>
            </ul>
        </div>

    </div>


};