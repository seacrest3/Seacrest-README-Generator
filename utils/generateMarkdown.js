// function to generate markdown for README
function generateMarkdown(data) {
  const { title,
    description,
    instruction,
    usage,
    license,
    contribution,
    test,
    username,
    email } = data;

    let badge = ``;

  if (license == 'MIT')
    badge = `[![License: MIT](https://img.shields.io/badge/license-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  if (license == 'ISC')
    badge = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
  if (license == 'Boost 1.0')
    badge = `[![License: Boost 1.0](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
  if (license == 'GNU GPL v3')
    badge = `[![License: GNU GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  if (license == 'BSD 3')
    badge = `[![License: BSD 3](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
  return `# ${title}
  ${badge}
`;
}

module.exports = generateMarkdown;
