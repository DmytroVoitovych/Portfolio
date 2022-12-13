import { proj } from "./fakeback";

export const flexProj = [...proj];

export const funcHover = (hover, index, i) => {
 
    if (!hover) {
       
        flexProj[index].styleImg = 'none';
        flexProj[index].styleVid = 'block';
        
    }
   

    else {
        
            proj[index].styleImg = 'block';
            proj[index].styleVid = 'none';
                      
    }



};



export const funcGetInfo = (e) => {
    
    e.target.textContent = e.target.textContent === 'Hide Details' ? 'View Details' : 'Hide Details';
    e.nativeEvent.path[2].children[0].firstChild.style.display = e.target.textContent === 'Hide Details' ? 'block' : 'none';
    e.nativeEvent.path[2].children[0].children[1].style.display = e.target.textContent === 'Hide Details' ? 'none' : 'block';

};

