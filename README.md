# French Political Network: Shape Your Future

This web application is designed to empower French citizens to actively participate in politics. The app provides tools and information to help users stay informed, discover their political alignment, vote, and attend political events.

## Features

- **Real-Time Political Updates**: Stay informed with the latest news and developments in French politics, ensuring you're always up-to-date on critical events.
- **Personalized Political Alignment**: Discover the political party that best aligns with your values through interactive and insightful quizzes.
- **Secure Voting Platform**: Participate in polls and express your opinions on various political issues directly through the app.
- **Event Notifications**: Receive timely updates on political events happening near you, keeping you engaged and active in the political process.
- **Interactive User Interface**: Enjoy a user-friendly interface that makes it easy to navigate through different features and access information quickly.
- **Data-Driven Insights**: Access analytics and insights based on user engagement, helping you understand broader political trends.
- **Multi-Device Support**: Access the app from various devices, ensuring a seamless experience whether you're on desktop, tablet, or mobile.
  
## Technology Stack

- **Frontend**: Angular
- **Backend**: Node.js
- **Database**: PostgreSQL

## Backend API

The backend API for this project is available [here](https://github.com/sheldon124/political-network-API).

Below are the necessary commands. 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.0.

## Installing Dependedncies

Run `npm i --force` before beginning any work.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Deploying to Netlify
When deploying to Netflify;

1. Open project, in Terminal type: "npm i --force" once completed type "ng build".

2. Navigate to "dist" folder then create a new file "netlify.toml" inside the "browser" folder. Enter the below code snippet in the "netlify.toml" file and save the file.

[[redirects]]
from="/*"
to="/index.html"
status=200

3. Navigate to "app.routes.ts" 
Where the route is "{path:'', redirectTo:'home', pathMatch:'full'}"
Simply add "/". So it will appear as; 
"{path:'/', redirectTo:'home', pathMatch:'full'}"
Save the file.

5. Visit "https://www.netlify.com/"

6. Login and connect to github.

7. Navigate to "Sites"

8. Click the dropdown "Add new site" 

9. Select "Deploy Manually"

10. Drag and drop the "browsers" folder which exists in the Ase Project directory, into the netlify's drop area.

11. Visit the generate deployed link.
