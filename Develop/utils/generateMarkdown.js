// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}
  ## ${answers.desc}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Test](#test)
  * [Questions](#questions)
  * [License](#license)
  * [Badges](#badges)
  ## Installation Instructions
  ${answers.install}
  ## Usage
  ${answers.usage}
  ## Contributors
  ${answers.contribution}
  ## Test
  ${answers.test}
  ## Questions
  If you have any questions, please feel free to contact ${answers.username} on GitHub.
  
`;
}

module.exports = generateMarkdown;
