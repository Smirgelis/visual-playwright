# Visual Testing Solution using Playwright Test

This is a visual testing solution that uses Playwright Test framework to capture full-page screenshots of multiple websites and compare them against reference screenshots to detect any visual differences.

## Prerequisites

- Node.js installed on your system
- Playwright Test framework installed globally
- A list of websites to test, specified in a JSON file

## Installation

To install Playwright Test framework, run the following command:

npm install -g @playwright/test `

Usage
-----

### Running Tests

To run the visual tests, run the following command:

`npm run test:run`

This will execute the script that captures full-page screenshots of each website specified in the `website.json` file and compares them against reference screenshots.

### Updating Reference Screenshots

If the website design changes, the reference screenshots must be updated. To do so, run the following command:

`npm run test:update`

This will update the reference screenshots for each website in the `screenshots` directory.

Script Explanation
------------------

The script uses Playwright Test framework to automate the capturing of screenshots of each website specified in the `website.json` file. The screenshots are saved in the `screenshots` directory with the website name and a `-fullpage.png` suffix.

The script then uses Jest's `toMatchSnapshot` function to compare the captured screenshot with the reference screenshot of the website. The `toMatchOptions` parameter specifies the similarity threshold for the comparison.

Configuration
-------------

The `website.json` file contains a list of websites to test. Each website is specified as a string in the array.

The `scripts` section in the `package.json` file contains two scripts: `test:update` and `test:run`. The `test:update` script updates the reference screenshots for each website, and the `test:run` script runs the visual tests.

Conclusion
----------

The visual testing solution using Playwright Test framework is an effective way to detect any visual differences in websites. By comparing captured screenshots with reference screenshots, this solution helps ensure that the website design remains consistent.
