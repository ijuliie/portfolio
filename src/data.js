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
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "julie",
  headerTagline: [
    //Line 1 For Header
    "I'm a Full Stack Developer",
    //Line 2 For Header
    //Line 3 For Header
  ],
  //   Header Paragraph
  headerParagraph:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",

  //Contact Email
  contactEmail: "ijuliie06@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "Control Tower", //Project Title - Add Your Project Title Here
      para:
        "Maintained data manager website using React and Golang", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://res.cloudinary.com/ijuliie/image/upload/v1636233544/Screenshot_2021-11-06_at_2.13.50_PM_z12exh.png",
      //Project URL - Add Your Project Url Here
      url: "https://controltower.quickscip.com/",
    },
    {
      title: "QuickSCIP", //Project Title - Add Your Project Title Here
      para:
        'Maintained data collector mobile app using React Native', // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        'https://res.cloudinary.com/ijuliie/image/upload/v1636240005/Screenshot_20211106-160340_QuickSCIP_npip7a.jpg',
      //Project URL - Add Your Project Url Here
      url: "",
    },
    {
      title: 'The Deli Station', //Project Title - Add Your Project Title Here
      para:
        'Designed restaurant menu website using React', // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        'https://res.cloudinary.com/ijuliie/image/upload/v1636234379/Screenshot_2021-11-06_at_2.32.46_PM_nxfva7.png',
      //Project URL - Add Your Project Url Here
      url: "http://thedelistation.com/",
    },
    {
      title: 'Recipeze', //Project Title - Add Your Project Title Here
      para:
        "Designed a Recipe website using React and Edamam API", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        'https://res.cloudinary.com/ijuliie/image/upload/v1636248018/Screenshot_2021-11-06_at_6.19.32_PM_y9c5du.png',
      //Project URL - Add Your Project Url Here
      url: 'https://recipeze.netlify.app/',
    },
    /*
    If You Want To Add More Project just Copy and Paste This At The End
    ,{
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  paragraph1:
    'I am a full stack web developer from Buena Park, California. I focus on creating beautiful, functional, and user friendly websites.',
  paragraph2:
    'I enjoy a good cup of coffee, eating delicious meals, binge watching a great tv show, and playing video games. 😁',
  aboutParaThree:
    "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  aboutImage:
    "https://images.unsplash.com/photo-1519713958759-6254243c4a53?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

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

  //   Contact Section --------------

  contactSubHeading: "Let's create your next experience together",
  social: [
    // Add Or Remove The Link Accordingly
    // { img: githubIcon, url: "https://github.com/chetanverma16" },
    // {
    //   img: codepenIcon,
    //   url: "https://www.codepen.com/",
    // },
    // {
    //   img: dribbbleIcon,
    //   url: "https://dribbble.com/chetanverma",
    // },
    // {
    //   img: instagramIcon,
    //   url: "https://www.instagram.com/",
    // },
  ],
}


export default data