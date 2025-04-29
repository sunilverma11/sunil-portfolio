const header = {
    // all the properties are optional - can be left empty or deleted
    homepage: 'https://rajshekhar26.github.io/cleanfolio',
    title: 'JD.'
  }
  
  const about = {
    // all the properties are optional - can be left empty or deleted
    title: 'ABOUT',
    name: 'Sunil Kumar Verma',
    role: 'Software Engineer | Web Developer',
    description:
    `With a strong foundation in law and a passion for technology, I excel as a MERN stack developer. I specialize in designing and implementing engaging, high-performance websites for both large organizations and sole proprietorships. My unique skill set ensures each project is meticulously managed and executed to perfection. Let's enhance your digital presence with a website that's as functional as it is eye-catching.`,
      // 'Attorney turned Software Engineer and Web Developer. I create attractive, fully, functional websites for small businesses and sole proprieterships.  ',
    resume: '../utils/Sunil-Verma-Resume.pdf',
    social: {
      linkedin: 'www.linkedin.com/in/sunilrajverma',
      github: 'https://github.com/sunilverma11'
    }
  }

  const experience = [
    // all the properties are optional - can be left empty or deleted
    {
        company:'Globallogic',
        joining:'18-04-2022',
        left:'10-07-2024',
        description:`Job responsibilities:
                    Designed and implemented reusable and maintainable React
                    components to ensure efficient development and scalability.
                    Utilized Context API for efficient state management,
                    improving data flow consistency across different
                    components.
                    Integrated RESTful APIs for seamless communication
                    between the front-end and back-end, ensuring robust data
                    manipulation capabilities.`,


    }
  ]
  const projects = [
    {
      name: 'Project 1',
      description: '...',
      stack: ['React', 'Node.js'],
      sourceCode: '...',
      livePreview: '...',
      image: '', // Add this
    },
    // ... other projects
    {
      name: 'Project 2',
      description: '...',
      stack: ['React', 'Node.js'],
      sourceCode: '...',
      livePreview: '...',
      image: '', // Add this
    },
    {
      name: 'Project 3',
      description: '...',
      stack: ['React', 'Node.js'],
      sourceCode: '...',
      livePreview: '...',
      image: '', // Add this
    },
    {
      name: 'Project 4',
      description: '...',
      stack: ['React', 'Node.js'],
      sourceCode: '...',
      livePreview: '...',
      image: '', // Add this
    },
  ];
  const projects1 = [
    // projects can be added an removed
    // if there are no projects, Projects section won't show up
    {
      name: 'Manage - App',
      description:
        'An application for manging tasks and update status',
      stack: ['Javascript', 'React','Node', 'MongoDB'],
      sourceCode:
        'https://github.com/sunilverma11/manage-app',
      livePreview: 'https://managemydata.netlify.app'
    },
    {
      name: 'Project 2',
      description:
        'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
      stack: ['SASS', 'TypeScript', 'React'],
      sourceCode: 'https://github.com',
      livePreview: 'https://github.com'
    },
    {
        name: 'Project 2',
        description:
          'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
        stack: ['SASS', 'TypeScript', 'React'],
        sourceCode: 'https://github.com',
        livePreview: 'https://github.com'
      }
  ]
  
  const skills = [
    // skills can be added or removed
    // if there are no skills, Skills section won't show up
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Redux',
    'SASS',
    'Material UI',
    'Git',
    'CI/CD'
  ]
  
  const contact = {
    // email is optional - if left empty Contact section won't show up
    email: 'srksaroya@hotmail.com',
    linkedin:'https://www.linkedin.com/in/sunilrajverma',
    github:'https://github.com/sunilverma11'
  }
  
  export { header, about, experience, projects, skills, contact }
  