import { animateScroll as scroll } from 'react-scroll';



export const controlScroll = (prev, location) => {
    if (prev) {
    return scroll.scrollTo(location ?? 0, {
            duration: 0,
            delay: 0,
            smooth: false,
        });
    }

    return;
};