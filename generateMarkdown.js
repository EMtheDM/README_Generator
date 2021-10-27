// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (data.licenseSelection == 'MIT License') {
    return `[![License: MIT] (https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)`;
  } else if (data.licenseSelection == 'Apache 2.0') {
    return `[![License: Apache 2.0] (https://img.shields.io/badge/License-Apache%202.0-green.svg)] (https://opensource.org/licenses/Apache-2.0)`;
  } else if (data.licenseSelection == 'GNU GPL 3.0') {
    return `[![License: GNU GPL v3.0] (https://img.shields.io/badge/License-GPL%20v3.0-blue.svg)] (http://www.gnu.org/licenses/gpl-3.0)`;
  } else if (data.licenseSelection == 'Mozilla Public 2.0') {
    return `[![License: Mozilla Public 2.0] (https://img.shields.io/badge/License-MPL%20v3.0-orange.svg)] (https://opensource.org/licenses/MPL-2.0)`;
  } else {
    return '';
  };
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if (data.licenseSelection === 'MIT License') {
    return `[MIT License link] (https://www.mit.edu/~amini/LICENSE.md)`;
  } else if (data.licenseSelection === 'Apache 2.0') {
    return `[Apache License 2.0 link] (https://www.apache.org/licenses/LICENSE-2.0)`;
  } else if (data.licenseSelection === 'GNU GPL 3.0') {
    return `[GNU GPL 3.0 License link] (https://www.gnu.org/licenses/gpl-3.0.en.html)`;
  } else if (data.licenseSelection === 'Mozilla Public 2.0') {
    return `[Mozilla Public 2.0 License link] (https://www.mozilla.org/en-US/MPL/2.0/)`;
  } else {
    return '';
  };
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}
  ${renderLicenseBadge(data.licenseSelection)}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  ${renderLicenseLink(data.licenseSelection)}
  ## Contribution
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## Questions
  If you would like to connect with the developer about ${data.title}, please email them at ${data.email} or their gitHub at @${data.github}.
`;
}

module.exports = generateMarkdown;
