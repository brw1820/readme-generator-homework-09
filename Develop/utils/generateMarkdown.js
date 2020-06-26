// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}
  # ${answers.title}
  ## ${answers.desc}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Test](#test)
  * [Questions](#questions)
  * [License](#license)
  * [Badges](#badges)
  ## Installation
  ${answers.installation}
  ## Usage
  ${answers.usage}
  ## Contributing
  ${answers.contributors}
  ## Test
  ${answers.testing}
  ## Questions
  If you have any questions, contact ${answers.username} on GitHub.
`;
}

module.exports = generateMarkdown;
