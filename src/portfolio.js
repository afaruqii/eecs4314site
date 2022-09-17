const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rajshekhar26.github.io/cleanfolio',
  title: '',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'John Smith',
  role: 'Front End Engineer',
  description:
    'Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Assignment 1',
    description: "Available dd/mm",
    stack: [''],
    sourceCode: 'https',
    livePreview: '',
  },
  {
    name: 'Assignment 2',
    description: "Available dd/mm",
    stack: [''],
    sourceCode: 'https',
    livePreview: '',
  },
  {
    name: 'Assignment 3',
    description: "Available dd/mm",
    stack: [''],
    sourceCode: 'https',
    livePreview: '',
  },
  {
    name: 'Assignment 4',
    description: "Available dd/mm",
    stack: [''],
    sourceCode: 'https',
    livePreview: '',
  }
]

const members = [
  
  'Ahmad Faruqi',
  'Jorra Singh',
  'Chidalu Agbakwa',
  'Indermohan Gill',
  'Group Member 5',
  'Group Member 6',
  'Group Member 7',
  'Group Member 8',
  'Group Member 9',
  'Group Member 10'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'afaruqii@my.yorku.ca',
}

export { header, about, projects, members as skills, contact }
