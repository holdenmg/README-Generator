//Include packages needed for this application


const inquirer = require('inquirer');
const fs = require('fs');
  
//Template for generated readme
const generateREADME = ({title, description, url, installation, usage, contributing, license, tests, email, username, githubLink}) =>
  
  `# ${title}
  
  ![${license}](https://img.shields.io/badge/license-${license}-blue)



  ##### Table of Contents  
  [Description](#description)  

  [URL](#url)  

  [Installation](#installation)

  [Usage](#usage)

  [Contributing](#contributing)

  [License](#license)

  [Tests](#tests)

  [Questions](#questions)
  
  ## Description
  ${description}

 
  ## URL
 
  ${url}
  
  
  ## Installation
 
  ${installation}
  
  ## Usage
 
  ${usage}

  ## Contributing
 
  ${contributing}
  
  
  
  ## License
  
 ${license}

 https://opensource.org/licenses/${license}
 
 ## Tests

 ${tests}
 
 ## Questions

 Please email <${email}> for any questions
 
 Github link: https://github.com/${username}`;
  

// Array of questions for user input
const questions = [ {
    type: 'input',
    message: 'What is your project title?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Enter project description:',
    name: 'description',
  },
  {
    type: 'input',
    message: 'Enter URL for deployed project:',
    name: 'url',
  },
  {
    type: 'input',
    message: 'Enter installation information:',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'Enter usage information:',
    name: 'usage',
  },
  {
    type: 'input',
    message: 'Enter contributing information:',
    name: 'contributing',
  },
  {
    type: 'input',
    message: 'Enter project description:',
    name: 'description',
  },
  {
    type: 'list',
    message: 'Choose license:',
    name: 'license',
    choices: ['MIT','ISC','MirOS', 'Motosoto', 'Multics', 'NOKIA']
  },
  {
    type: 'input',
    message: 'Enter test information:',
    name: 'tests',
  },
  {
    type: 'input',
    message: 'Enter your email:',
    name: 'email',
  },
  {
    type: 'input',
    message: 'Enter your github username:',
    name: 'username',
  },

];

//Function to write readme content
function writeToFile(fileName, data) {
  const readmeContent = generateREADME(data);
  fs.writeFile(fileName, readmeContent, (err) =>
  err ? console.log(err) : console.log("success")
  )};

//function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
    writeToFile('README2.md', answers)
    });

}

// Function call to initialize app
init();
