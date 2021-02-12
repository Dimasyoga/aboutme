/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from 'react-easy-emoji';

const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  username: 'Dimas Yoga',
  title: "Still in development",
  subTitle: emoji(
    ''
  ),
  resumeLink:
    '',
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: 'https://github.com/dimasyoga',
  linkedin: 'https://www.linkedin.com/in/dimasyogapra/',
  gmail: 'dimasyogapra@gmail.com',
  gitlab: '',
  facebook: '',
  // medium: 'https://medium.com/@dimasyogapra',
  stackoverflow: '',
  // Instagram and Twitter are also supported in the links!
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skills = {
  display: true,
  data: [
    {
      title: "Robotics",
      illustration: require("./assets/lottie/robotic"),
      illustrationDark: require("./assets/lottie/robotic-dark"),
      skills: [
        "✔️ Developing robots with advanced technology",
        "✔️ Experienced working with various type of robots",
        "✔️ Experienced working in teams for various national and international robotics competitions",
      ],
      softwareSkills: [
        {
          skillName: "ROS",
          fontIcon: require('./assets/icons/Ros_logo.svg'),
          url: 'https://www.ros.org/',
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Gazebo",
          fontIcon: require('./assets/icons/gazebo_logo.svg'),
          url: 'http://gazebosim.org/',
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "ArduPilot",
          fontIcon: require('./assets/icons/ardupilot_logo.png'),
          url: 'https://ardupilot.org/',
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Robotis",
          fontIcon: require('./assets/icons/robotis-product-logo.svg'),
          url: 'https://www.robotis.us/',
          style: {
            backgroundColor: "white",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Machine Learning",
      illustration: require("./assets/lottie/charts"),
      illustrationDark: require("./assets/lottie/charts"),
      skills: [
        "✔️ Developing machine learning models to solve a problem",
        "✔️ Experienced with supervised, unsupervised, and reinforcement learning",
        "✔️ Great interest in learning the latest technology",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontIcon: require('./assets/icons/tensorflow-icon.svg'),
          url: 'https://www.tensorflow.org/',
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "Keras",
          fontIcon: require('./assets/icons/Keras_logo.svg'),
          url: 'https://keras.io/',
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Scikit-Learn",
          fontIcon: require('./assets/icons/Scikit_learn_logo_small.svg'),
          url: 'https://scikit-learn.org/stable/',
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "OpenCV",
          fontIcon: require('./assets/icons/OpenCV_Logo_with_text_svg_version.svg'),
          url: 'https://opencv.org/',
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "Python",
          fontIcon: require('./assets/icons/Python-logo-notext.svg'),
          url: 'https://www.python.org/',
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Web Development",
      illustration: require("./assets/lottie/webDev"),
      illustrationDark: require("./assets/lottie/webDev"),
      skills: [
        "✔️ Building webpage using React and Bootstrap.",
        "✔️ Developing mobile applications using Expo and React Native ",
        "✔️ Creating application backend in Node with various database",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontIcon: require('./assets/icons/HTML5_logo_and_wordmark.svg'),
          url: 'https://html5.org/',
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontIcon: require('./assets/icons/CSS3_logo_and_wordmark.svg'),
          url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontIcon: require('./assets/icons/Unofficial_JavaScript_logo_2.svg'),
          url: 'https://www.javascript.com/',
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontIcon: require('./assets/icons/React-icon.svg'),
          url: 'https://reactjs.org/',
          style: {
            backgroundColor: "white",
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontIcon: require('./assets/icons/Node.js_logo.svg'),
          url: 'https://nodejs.org/en/',
          style: {
            backgroundColor: "white",
            color: "#339933",
          },
        },
        {
          skillName: "GCP",
          fontIcon: require('./assets/icons/google-cloud-platform.svg'),
          url: 'https://cloud.google.com/',
          style: {
            backgroundColor: "white",
            color: "#4285F4",
          },
        },
        {
          skillName: "Firebase",
          fontIcon: require('./assets/icons/google_firebase.svg'),
          url: 'https://firebase.google.com/',
          style: {
            backgroundColor: "white",
            color: "#FFCA28",
          },
        },
        {
          skillName: "MongoDB",
          fontIcon: require('./assets/icons/mongodb.svg'),
          url: 'https://www.mongodb.com/',
          style: {
            backgroundColor: "white",
            color: "#47A248",
          },
        },
        {
          skillName: "PostgreSQL",
          fontIcon: require('./assets/icons/Postgresql_elephant.svg'),
          url: 'https://www.postgresql.org/',
          style: {
            backgroundColor: "white",
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontIcon: require('./assets/icons/docker.png'),
          url: 'https://www.docker.com/',
          style: {
            backgroundColor: "white",
            color: "#1488C6",
          },
        },
      ],
    },
    {
      title: "CAD & Electronics",
      illustration: require("./assets/lottie/circuit"),
      illustrationDark: require("./assets/lottie/circuit"),
      skills: [
        "✔️ Designing PCB schematic and layout",
        "✔️ Modeling mechanical elements and doing manufacturing with a 3d print or laser cut",
        "✔️ Creating electronic projects using various microcontrollers and sensors",
      ],
      softwareSkills: [
        {
          skillName: "KiCad",
          fontIcon: require('./assets/icons/KiCad-Logo.svg'),
          url: 'https://kicad.org/',
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Altium",
          fontIcon: require('./assets/icons/altium-logo.png'),
          url: 'https://www.altium.com/',
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Eagle",
          fontIcon: require('./assets/icons/eagle-logo.png'),
          url: 'https://www.autodesk.com/products/eagle/overview',
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "LTspice",
          fontIcon: require('./assets/icons/Logo_Linear_Technology.svg'),
          url: 'https://www.analog.com/en/design-center/design-tools-and-calculators/ltspice-simulator.html',
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Solidworks",
          fontIcon: require('./assets/icons/solidworks-logo.png'),
          url: 'https://www.solidworks.com/',
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "MATLAB",
          fontIcon: require('./assets/icons/Matlab_Logo.png'),
          url: 'https://www.mathworks.com/products/matlab.html',
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Arduino",
          fontIcon: require('./assets/icons/Arduino_Logo.svg'),
          url: 'https://www.arduino.cc/',
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
      ],
    },
  ],
};


// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: 'Institut Teknologi Bandung',
      logo: require('./assets/images/Institut_Teknologi_Bandung_logo.svg'),
      subHeader: 'Bachelor of Electrical Engineering',
      duration: 'August 2016 - April 2021',
      desc: '',
      descBullets: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      ],
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: 'Frontend/Design', //Insert stack or technology you have experience in
      progressPercentage: '90%', //Insert relative proficiency in percentage
    },
    {
      Stack: 'Backend',
      progressPercentage: '70%',
    },
    {
      Stack: 'Programming',
      progressPercentage: '60%',
    },
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: 'Robotics Software Engineer',
      company: 'STEI ITB',
      company_url: "https://stei.itb.ac.id/en",
      companylogo: require('./assets/images/Institut_Teknologi_Bandung_logo.svg'),
      date: 'Sep 2020 – Nov 2020',
      desc:
        'Working as a programmer of Single Platform Multi-Function Mobile Robot for Service Robot in Hospital project',
      descBullets: [],
    },
    {
      role: 'Electronics and System UAV',
      company: 'HALE UAV Research Team ITB',
      company_url: 'https://hale2019rispro.wixsite.com/home',
      companylogo: require('./assets/images/Halelogo_1.png'),
      date: 'Sep 2019 – Aug 2020',
      desc:
        'Working as an Electrical and System Engineer for High Altitude Long Endurance Unmanned Aerial Vehicle (HALE UAV) Project at Center for Unmanned System Studies (CentrUMS) ITB',
      descBullets: [],
    },
    {
      role: 'Backend Engineer Intern',
      company: 'PT. Xirka Silicon Technology',
      company_url: 'http://www.xirkachipset.com/',
      companylogo: require('./assets/images/xirka-logo.jpg'),
      date: 'May 2019 – Aug 2019',
      desc:
        'Working as a backend engineer to develop a Smartlog System to record employee attendance',
      descBullets: [],
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: 'dimasyoga', // Change to your github username to view your profile in Contact Section.
  showGithubProfile: 'true', // Set true or false to show Contact profile using Github, defaults to true
  display: false, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: 'Big Projects',
  subtitle: 'SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH',
  projects: [
    {
      image: '',
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: 'Visit Website',
          url:
            'http://saayahealth.com/',
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image: '',
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: 'Visit Website',
          url:
            'http://nextu.se/',
        },
      ],
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji('Achievements And Certifications 🏆 '),
  subtitle:
    'Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !',

  achievementsCards: [
    {
      title: 'Google Code-In Finalist',
      subtitle:
        'First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.',
      image: '',
      footerLink: [
        {
          name: 'Certification',
          url:
            'https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing',
        },
        {
          name: 'Award Letter',
          url:
            'https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing',
        },
        {
          name: 'Google Code-in Blog',
          url:
            'https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html',
        },
      ],
    },
    {
      title: 'Google Assistant Action',
      subtitle:
        'Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.',
      image: '',
      footerLink: [
        {
          name: 'View Google Assistant Action',
          url:
            'https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en',
        },
      ],
    },

    {
      title: 'PWA Web App Developer',
      subtitle: 'Completed Certifcation from SMIT for PWA Web App Development',
      image: '',
      footerLink: [
        { name: 'Certification', url: '' },
        {
          name: 'Final Project',
          url: 'https://pakistan-olx-1.firebaseapp.com/',
        },
      ],
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: 'Blogs',
  subtitle:
    'With Love for Developing cool stuff, I love to write and teach others what I have learnt.',

  blogs: [
    {
      url:
        'https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae',
      title: 'Win a Google Assistant Tshirt and $200 in Google Cloud Credits',
      description:
        'Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?',
    },
    {
      url: 'https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e',
      title: 'Why REACT is The Best?',
      description:
        'React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.',
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: 'TALKS',
  subtitle: emoji(
    'I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅'
  ),

  talks: [
    {
      title: 'Build Actions For Google Assistant',
      subtitle: 'Codelab at GDG DevFest Karachi 2019',
      slides_url: 'https://bit.ly/saadpasta-slides',
      event_url: 'https://www.facebook.com/events/2339906106275053/',
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji('Podcast 🎙️'),
  subtitle: 'I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY',

  // Please Provide with Your Podcast embeded Link
  podcast: [
    'https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo',
  ],
  display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji('Contact Me'),
  subtitle:
    '',
  number: '+62-895364823046',
  emailAddress: 'dimasyogapra@gmail.com',
};

// Twitter Section

const twitterDetails = {
  userName: 'twitter', //Replace "twitter" with your twitter username without @
  display: false, // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skills,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
