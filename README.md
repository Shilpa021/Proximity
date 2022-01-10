# Air Quality Index Monitor

This project shows the AQI of various cities, updating live through the use of webSockets. This project is created on ReactJs. We can click on any city row and see a time vs AQI chart. Also, on selecting more than one row 
the Compare AQI button gets activated and we can see a chart with different cities, time vs AQI.
Also have done unit testing using jest and enzyme.

# Techs used in the making of this project
REACT - This project is created using React.
MATERIAL-UI - The Material UI is used to get customized modals and table.
DATE-FNS - The date-fns is used to format date and time that is received from server.
JEST - The jest is used to create test cases.
ENZYME - The enzyme is used to create test cases with jest.
RECHARTS - The recharts is used to create linecharts.
SASS - The Sass is used to make css more well-organized.

# Components created from this project
App - The base container consisting Header and main component i.e. Home. WebSocket is connected here. We receive the data and pass it on to the Home component which creates the table and the charts.
Home - This component is consists of Compare AQI button, CitiesTable, CityAQIModal and ComparisonModal components. It has the functionality to open and close these modals, the data is formated here to show in the table and the functionality of the compare AQI button is also handled here.
CitiesTable - This component creates the table to show the cities, their respective AQIs and the information of their last update.
ChartAQIModal - This component creates the time vs AQI chart of the clicked city.
ComparisonModal - This component creates the time vs AQI chart of the varoius selected cities.

# Utilities created from this project
We have two utilities created for this project
CityStatus - This returns getCityStatus function to the various status of the cities' AQI like Good, Satisfactory etc.
ModalUtils - This returns getModalStyle and useStyles functions that provide styling for the two modals.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Deployment

We are using GitHub Actions for auto deployment and Amazon Simple Storage Service (Amazon S3) for hosting the app. 
We have created the air-quality-monitor.yaml file to git repo. This will trigger a new build pipeline, which can be viewed under Github and then under Actions. The Continuous integration and deployment pipeline (CI-CD) will build and then deploy react app to AWS S3 bucket. 
Amazon Simple Storage Service (Amazon S3) is an object storage service that offers scalability, data availability, security, and performance.
