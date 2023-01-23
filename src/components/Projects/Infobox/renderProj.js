import { proj } from './fakeback';

export const flexProj = [...proj];

export const funcHover = (hover, index, i) => {
  if (!hover) {
    flexProj[index].styleImg = 'none';
    flexProj[index].styleVid = 'block';
  } else {
    proj[index].styleImg = 'block';
    proj[index].styleVid = 'none';
  }
};

export const funcGetInfo = e => {
  const target = e.target.textContent;
  e.target.textContent =
    target === 'Hide Details' ? 'View Details' : 'Hide Details';
  const id = +e.target.attributes.data.value;

  if (e.target.textContent === 'Hide Details') {
    flexProj[id].styleImg = 'none';
    flexProj[id].styleVid = 'none';
    return (flexProj[id].styleInfo = 'block');
  } else {
    flexProj[id].styleImg = 'block';
    flexProj[id].styleVid = 'none';
    return (flexProj[id].styleInfo = 'none');
  }
};
