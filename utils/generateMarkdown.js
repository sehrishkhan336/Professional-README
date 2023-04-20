// TODO: Create a function that returns a license badge based on which license is passed in
choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
  function renderLicenseBadge(license) {
    if (license === 'MIT') {
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
    } else if (license === 'APACHE 2.0') {
      return '![License: APACHE 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
    } else if (license === 'GPL 3.0') {
      return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
    } else if (license === 'BSD 3') {
      return '![License: BSD 3](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)';
    } else {
      return '';
    }
  }


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
  if (license === 'MIT') {
  return 'https://opensource.org/licenses/MIT';
} else if (license === 'Apache 2.0') {
  return 'https://opensource.org/licenses/Apache-2.0';
} else if (license === 'GPLv3') {
  return 'https://www.gnu.org/licenses/gpl-3.0';
} else if (license === 'BSD 3-Clause') {
  return 'https://opensource.org/licenses/BSD-3-Clause';
} else {
  return '';
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseBadge = renderLicenseBadge(license);
  const licenseLink = renderLicenseLink(license);
  if (licenseBadge === '') {
    return '';
  } else {
    return `
## License

${licenseBadge}

This project is licensed under the terms of the [${license}](${licenseLink}) license.
`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseSection = renderLicenseSection(data.license);
  // Return the markdown content for the README file
  return `# ${data.title}
  ${licenseSection}
  ## Description
  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - []()
  - [SCREENSHOT OF THE WEBSITE]
  - [DEPENDENCIES]
  - [LICENSE]
  - [CONTACT INFORMATION]
  - [REFERENCES AND LINKS]
  
  
  `;
}

module.exports = generateMarkdown;
