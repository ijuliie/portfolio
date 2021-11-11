// // Skills Icons
import htmlIcon from "./assets/html.svg"
import cssIcon from "./assets/css.svg"
import reactIcon from './assets/react.svg'
import jsIcon from "./assets/javascript.svg"
import gitIcon from "./assets/git.svg"
import sqlIcon from "./assets/sql-database.svg"
import GoIcon from "./assets/golang.svg"

// // Social Icon
// import githubIcon from "./images/github.svg"
// import codepenIcon from "./images/codepen.svg"
// import dribbbleIcon from "./images/dribbble.svg"
// import instagramIcon from "./images/instagram.svg"

const data = {

  // Header Details
  name: "julie",
  headerTagline: [
    //Line 1 For Header
    "I'm a Full Stack Developer",
    //Line 2 For Header
    //Line 3 For Header
  ],
  // Header Paragraph
  headerParagraph:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",

  //Contact Email
  contactEmail: "ijuliie06@gmail.com",

  // Work Section
  projects: [
    {
      title: "Control Tower",
      description: "Maintained data manager website using React and Golang",
      image: "https://res.cloudinary.com/ijuliie/image/upload/v1636233544/Screenshot_2021-11-06_at_2.13.50_PM_z12exh.png",
      url: "https://controltower.quickscip.com/",
    },
    {
      title: "QuickSCIP",
      description: 'Maintained data collector mobile app using React Native',
      image: 'https://res.cloudinary.com/ijuliie/image/upload/v1636240005/Screenshot_20211106-160340_QuickSCIP_npip7a.jpg',
      url: "",
    },
    {
      title: 'The Deli Station',
      description: 'Designed restaurant menu website using React',
      image: 'https://res.cloudinary.com/ijuliie/image/upload/v1636234379/Screenshot_2021-11-06_at_2.32.46_PM_nxfva7.png',
      url: "http://thedelistation.com/",
    },
    {
      title: 'Recipeze',
      description: "Designed a Recipe website using React and Edamam API",
      image: 'https://res.cloudinary.com/ijuliie/image/upload/v1636248018/Screenshot_2021-11-06_at_6.19.32_PM_y9c5du.png',
      url: 'https://recipeze.netlify.app/',
    },
  ],

  // About Secton

  paragraph1:
    'I am a full stack web developer from Buena Park, California. I focus on creating beautiful, functional, and user friendly websites.',
  paragraph2:
    'I enjoy a good cup of coffee, eating delicious meals, binge watching a great tv show, and playing video games. 😁',
  aboutParaThree:
    "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  aboutImage:
    "https://images.unsplash.com/photo-1519713958759-6254243c4a53?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",


  // Skills Section

  skills: [
    {
      img: htmlIcon,
      language: 'HTML 5',
    },
    {
      img: cssIcon,
      language: 'CSS',
    },
    {
      img: jsIcon,
      language: 'JavaScript',
    },
    {
      img: reactIcon,
      language: 'ReactJS',
    },
    {
      img: GoIcon,
      language: 'Golang',
    },
    {
      img: sqlIcon,
      language: 'SQL',
    },
    {
      img: gitIcon,
      language: 'Git',
    },
  ],

  //   Contact Section

  contactSubHeading: '',
  social: [
    {
      label: 'LinkedIn',
      social: 'linkedin',
      url: 'https://www.linkedin.com/in/trinh-julie/'
    },
    {
      label: 'Facebook',
      social: 'facebook',
      url: 'https://www.facebook.com/ijoolie/'
    },
    {
      label: 'Twitter',
      social: 'twitter',
      twitter: 'https://twitter.com/ijuliiee'
    }
  ],
}


export default data