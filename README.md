# Seacrest-README-Generator

This is a command-line application to dynamically generate a README file.

## Description

When creating an open source project on GitHub, it’s important to have a high-quality README for the app. This should include what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions—this last part increases the likelihood that other developers will contribute to the success of the project.

It is tasked to create a command-line application that dynamically generates a professional README.md file from a user's input. This allows the project creator to devote more time to working on the project.

### User Story

AS A developer, I WANT a README generator so that I can quickly create a professional README for a new project.

## Usage

The application will be invoked by using the following command:

```bash
node index.js
```
The sample README generated using the application is in the 'output' directory of the project repository

### Acceptance Criteria

* Create a command-line application that accepts user input

* When a user is prompted for information about the application repository then a high-quality, professional README.md is generated with:

    * The title of project

    * Sections entitled:
      * Description 
      * Table of Contents 
      * Installation 
      * Usage 
      * License 
      * Contributing 
      * Tests 
      * Questions

    * When a user enters the project title then it is displayed as the title of the README

    * When a user enters a description, installation instructions, usage information, contribution guidelines, and test instructions then this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

    * When a user chooses a license for their application from a list of options then a badge for that license is added near the top of the README and a notice is added to the section of the README entitled **License** that explains which license the application is covered under

    * When a user enters their GitHub username then this is added to the section of the README entitled Questions, with a link to their GitHub profile

    * When a user enters their email address then this is added to the section of the README entitled Questions, with instructions on how to reach them with additional questions

    * When a user clicks on the links in the **Table of Contents** then they are taken to the corresponding section of the README

### Walkthrough Video

The following video demonstrates the command-line application's appearance and functionality:

[Walkthrough Video](https://watch.screencastify.com/v/Lypme462Gah8CVVR2xsQ)

When a user run node index.js at the terminal,

1. The user is prompted to provide information on the title, a description, installation instructions, usage information, contribution guidelines, test instructions, GitHub usrename and email then this information is added to the sections of the README entitled Description, Installation, Usage, License, Contributing, Tests and Questions

2. The user can click on the links in the **Table of Contents** to access the corresponding section of the README

3. The user can choose a license for their application from a list of options then a badge for that license is added near the top of the README and a notice is added to the License section of the README file.

### Review

TA, a Web Developer, reviews the code, providing feedback on errors and making sure that all of the acceptance criteria have been met.

* [A walkthrough video demonstrating the functionality of the application.](https://watch.screencastify.com/v/Lypme462Gah8CVVR2xsQ)

* [The URL of the GitHub repository.](https://github.com/seacrest3/Seacrest-README-Generator.git)

### Helpful Resources

- [Professional README Guide](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)

- [Inquirer.js](https://www.npmjs.com/package/inquirer)

- [Markdown License badges](https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba)

- [Video Submission Guide](https://coding-boot-camp.github.io/full-stack/computer-literacy/video-submission-guide)

- [MDN Javascript Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/)

- [W3Schools React ES6 Destructuring](https://www.w3schools.com/react/react_es6_destructuring.asp)

- [JavaScript Tutorial](https://www.javascripttutorial.net/)

- [freeCodeCamp.org](https://www.freecodecamp.org/)

- [Github Pages Guide](https://pages.github.com/)