// // Skills Icons
import htmlIcon from './assets/html.svg'
import cssIcon from './assets/css.svg'
import reactIcon from './assets/react.svg'
import reactIcon2 from './assets/react-native.svg'
import gitIcon from './assets/git.svg'
import tsIcon from './assets/typescript-16.svg'
import GoIcon from './assets/golang.svg'
import atlassianIcon from './assets/atlassian.svg'

const data = {

  //Contact Email
  contactEmail: "ijuliie06@gmail.com",

  // Work Section
  projects: [
    {
      title: "Tether RE Portal",
      description: "Developed and maintained realtor web portal using React, React Admin Framework, and Material UI",
      image: "https://res.cloudinary.com/ijuliie/image/upload/v1728605518/Screenshot_2024-10-10_at_6.11.52_PM_ybemjr.png",
      url: "https://portal.tetherre.com/",
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
    'I am a front end developer who focuses on creating beautiful, functional, and user friendly websites.',
  image:
    'https://res.cloudinary.com/ijuliie/image/upload/v1636850717/IMG_0389_tz1phh.jpg',


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
      img: tsIcon,
      language: 'TypeScript',
    },
    {
      img: reactIcon,
      language: 'React',
    },
    {
      img: reactIcon2,
      language: 'React Native',
    },
    {
      img: GoIcon,
      language: 'Golang',
    },
    {
      img: atlassianIcon,
      language: 'Atlassian',
    },
    {
      img: gitIcon,
      language: 'Git',
    },
  ],

  //   Contact Section
  contactHeading: `Let's create beautiful apps together ❤️`,
  social: [
    {
      label: 'LinkedIn',
      social: 'linkedin',
      url: 'https://www.linkedin.com/in/trinh-julie/'
    },
  ],
}


export default data