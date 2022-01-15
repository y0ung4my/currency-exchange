# Currency Exchange Calculator

#### By _Amy Young_

#### _This site converts USD to other currencies_

## Technologies Used

* _HTML_
* _JavaScript_
* _jQuery_
* _Bootstrap_
* _Node Package Manager_
* _Jest_
* _ESLint_
* _API_

## Description

_This application uses ExchangeRage-API to calculate user-inputted USD to the user-inputted currency. API call errors are handled with promises._

## Setup/Installation Requirements

_Use as a template for further development_
1) open terminal
2) enter the following into the terminal: `# git clone https://github.com/y0ung4my/exchange-rate-calculator`
3) to run in a development environment, make sure Node is installed on your computer, more info here: `https://nodejs.org/en/download/`
4) in the terminal, enter: `npm install`

_API Key Set-up_
* you will need your own API key for the API call to work: https://www.exchangerate-api.com/ --> click Get Free Key
* in your project folder, create a .env file
* in the .env file, add the following, replacing `[YOUR-KEY-HERE]` with your API key:
  `API_KEY=[YOUR-KEY-HERE]`

* in the terminal, enter:
  `npm install dotenv-webpack@2.0.0 --save-dev`

_To develop further_
* in the terminal, enter: `npm run start` to see changes in your web browser as changes are made

## Known Bugs

* _no known bugs._

## License

MIT License

Copyright (c) 2021 Amy Young

Questions or comments: youngamy1223@gmail.com