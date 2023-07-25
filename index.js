// TODO: Include packages needed for this application


const inquirer = require('inquirer');
const fs = require('fs');
  
const generateREADME = ({title, description, url, installation, usage, contributing, license, tests, email, username, githubLink}) =>
  
  `# ${title}
  
  ##### Table of Contents  
  [Description](#description)  
  [URL](#url)  
  [Installation](#installation)
  [Usage](#usage)
  [Contributing](#contributing)
  [License](#license)
  [Tests](#tests)
  [Questions](#quesetions)
  
  ## Description
  ${description}

 
  ## URL
  <a name="url"/>
  ${url}
  
  
  ## Installation
  <a name="installation"/>
  ${installation}
  
  ## Usage
  <a name="usage"/>
  ${usage}

  ## Contributing
  <a name="contributing"/>
  ${contributing}
  
  
  
  ## License
  <a name="license"/>
 ${license}
 
 ## Tests
 <a name="tests"/>
 ${tests}
 
 ## Questions
 <a name="questions"/>
 Please email ${email} for any questions
 
 Github link: https://github.com/${username}`
  

// TODO: Create an array of questions for user input
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
    choices: [1,2,3]
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const readmeContent = generateREADME(data);
  fs.writeFile(fileName, readmeContent, (err) =>
  err ? console.log(err) : console.log("success")
  )};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
    writeToFile('REAMDMEtest.md', answers)
    });

}

// Function call to initialize app
init();
