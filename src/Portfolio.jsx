const header = {
    // all the properties are optional - can be left empty or deleted
    homepage: 'https://rajshekhar26.github.io/cleanfolio',
    title: 'JD.'
  }
  
  const about = {
    // all the properties are optional - can be left empty or deleted
    name: 'James Daniel',
    role: 'Software Engineer | Web Developer',
    description:
      'Attorney turned Software Engineer and Web Developer. I create attractive, fully, functional websites for small businesses and sole proprieterships.  ',
    resume: 'https://tinyurl.com/yxfdye3c',
    social: {
      linkedin: 'www.linkedin.com/in/jamdan',
      github: 'https://github.com/jdbain67'
    }
  }

  const experience = [
    // all the properties are optional - can be left empty or deleted
    {
        company:'Globallogic',
        joining:'18-04-2022',
        left:'10-07-2024',
        description:'Worked as a full stack developer'
    }
  ]
  
  const projects = [
    // projects can be added an removed
    // if there are no projects, Projects section won't show up
    {
      name: 'Manage - App',
      description:
        'An application for manging tasks and update status',
      stack: ['Javascript', 'React','Node', 'MongoDB'],
      sourceCode:
        'https://gist.github.com/Jdbain67/142f0ec1c9f1707a78ab7acbcd532b3c',
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
    email: 'james.daniel.bain@gmail.com'
  }
  
  export { header, about, experience, projects, skills, contact }
  