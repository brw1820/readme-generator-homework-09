// function to generate markdown for README
function generateMarkdown(answers) {
let license;
switch(answers.license) {
  case "MIT": 
  license = "This is reserved for MIT license.";
  break;
  case "Apache":
    license = "";
    break;
    case "BSA":
      license = "This is reserved for MIT license"
      break;
    default: 
    license = "This is reserved for MIT license"
    break;
}
// switch (answers.contributors) {
//   if case != "none": {
//     license = "This project was a solo effort."
//   } else  {

//   }

// if contributor is empty 
// set reference variable as contributor set as semicolong
// when asking for contriutors switch answers.contributors
// if statement if contributors isn't empty, put info in, else default

  return `
  # ${answers.title}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Badges](#badges)
  * [Test](#test)
  * [Questions](#questions)
  * [License](#license)
  * [Credits](#credits)
  ## Description
  ${answers.desc}
  ## Installation
  ${answers.installation}
  ## Usage
  ${answers.usage}
  ## Contributing
  ${answers.contributors}
  ## Questions
  You may contact me with any questions on GitHub at https://github.com/${answers.username}.
  ##License
  ${license}
  ## Test
  ${answers.testing}
`;
}

module.exports = generateMarkdown;
