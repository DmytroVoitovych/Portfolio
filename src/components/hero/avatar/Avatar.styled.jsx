import styled from "@emotion/styled";
import { css } from '@emotion/react';

export const Ava = styled.img`
max-width: 506px;
width:100%;
`;

export const Box = styled.div`
    position: absolute;
    top: -17px;
    right: 41px;

    display: flex;
    max-width: 50px;
    gap: 2px;
    flex-wrap: wrap;
    justify-content: center;
    transform: rotate(90deg);

`;

export const oval = css`
position:absolute;
top:16px;
max-width:100%;
z-index:3;
`;

export const rotate = css`
position:absolute;
top:355px;
max-width:100%;
z-index:1;
left: -32px;
`;