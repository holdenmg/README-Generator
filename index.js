// TODO: Include packages needed for this application


const inquirer = require('inquirer');
  const fs = require('fs');
  
  const generateREADME = ({title, description, url, screenshotUrl, installation, usage, contributing, license, tests, email}) =>
  
  `# ${title}
  
  
  ## Description
  ${description}

  ##### Table of Contents  
  [Headers](#headers)  
  [Emphasis](#emphasis)  
   
  <a name="headers"/>
  ## Headers


  ## URL
  <a name="URL"/>
  ${url}
  
  ## Screenshot
  <a name="Screenshot"/>
  <img src=${screenshotUrl}> 
  
  
  ## Installation
  <a name="headers"/>
  ${installation}
  
  ## Usage
  <a name="headers"/>
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
 Please email ${email} for any questions`
  

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
