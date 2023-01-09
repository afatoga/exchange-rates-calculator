# CZK Exchange Rates and Calculator

- Application downloads current exchange rates from [cnb.cz](https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing) as a text file.
- Backend application transforms data and serves the content via Express.js.
- Frontend application consumes the data from an API endpoint using TanStack Query (former React Query) and displays two components: Table and Converter.
- Both components are responsive, in the table on mobile devices is less information displayed.
- Frontend application is styled using CSS-in-JS library called Styled-components.

## Run locally

1. Run `npm i` and `npm run dev` in `./server` to run server
2. Run `npm i` and `npm run dev` in root directory to launch frontend application
