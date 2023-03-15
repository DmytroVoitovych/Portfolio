const aboutMe = `I'm passionate about learning and exploring new things in frontend
development. My interest has only grown stronger since I started in January
2022. I've enjoyed working on various projects, gaining experience and
knowledge of popular libraries and frameworks such as React.js, Vue.js, Node.js,
Axios, Notiflix, and Lodash.`;

const index = aboutMe.indexOf(`I've enjoyed`);
const subOne = aboutMe.slice(0, index);
const subTwo = aboutMe.slice(index);
const linkResume =
  'https://drive.google.com/file/d/12ab8Te2ZJcloTA1vgLMktVDGlZpTLArb/view?usp=share_link';

const nodeDesc =
  'Apart from the fact that I am applying for a job as a frontend developer, I am ready to consider working as a backend developer, because I have experience with Node.js and Mongo DB. ';

export { subOne, subTwo, linkResume, nodeDesc };
