

const aboutMe = `I have a mad interest in learning something new about programming
                    and learning new things. I started to learn frontend in January of
                    this year and since then my interest has not dropped one bit. 
                    It's a great fun for me to work on different projects and tasks,
                    get new experience and gain knowledge about libraries and frameworks like React.js, Axios, Notiflix, and of course Lodash.`;

const index = aboutMe.indexOf(`It's a great`);
const subOne = aboutMe.slice(0, index);
const subTwo = aboutMe.slice(index);
const linkResume = 'https://drive.google.com/file/d/1EHzLZAhZ12UxDCn4sMabCXPj3fH2iAUL/view?usp=sharing' ;

const nodeDesc = 'Apart from the fact that I am applying for a job as a frontend developer, I am ready to consider working as a backend developer, because I have experience with Node.js and Mongo DB. ';



export {subOne, subTwo, linkResume, nodeDesc };