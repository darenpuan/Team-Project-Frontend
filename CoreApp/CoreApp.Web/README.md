# CoreApp.Web Cloudplus Web Template

This is based on [Devias Kit - Admin Dashboard](https://github.com/devias-io/react-material-dashboard)

## Project Structure
[PDF Version](./Web%20UI%20Design%20v1.1.pdf)  
[Wiki Version](https://github.com/UGS-CS/SLS-M00-Core/wiki/Web-UI-Design)

## Requirements
1. [dotnet 3.1 LTS SDK](https://dotnet.microsoft.com/download)  
    `dotnet --list-sdks`  
    It is fine to have other SDK versions.

1. [NodeJS 12.x.x LTS or 14.x.x LTS](https://nodejs.org/en/)  
    `node --version`  
    NodeJS will bundle npm  
    `npm --version`
    

## How to Run
Good thing about modern frontend development is that it has hot reloading. Changes to the `.js` files in the `ClientApp/src/` directories will trigger hot reload upon file saving which is that it requires no restart of the server and even refreshing of browser.
More readings at: https://webpack.js.org/concepts/hot-module-replacement/   

Changes to C# backend code will still require to restart the sever.  

However it is observed that using Visual Studio 2019 IDE is very slow even with hot reloading (around 8 seconds to reload), but you could develop both backend and frontend together.  
Frontend only development with code editors like Visual Studio Code will yield more productive experience (up to 3 seconds to reload).

### Visual Studio 2019 (Powerful but Slow)
This instruction covers the development of dotnet backend and react frontend simultaneously 

1. Open `CoreApp.sln` 
1. Select `CoreApp.Web` project  

    ![](https://i.imgur.com/GxvigMT.png)

1. Optional (one time step but recommended): In command line,  
`cd ClientApp`   
`npm install`
this step is to make the next step shorter and prevent some rare errors when dotnet trying to run the installation of react dependencies.  
    
    We did our best to reduce deprecation warnings but these issues are common in NodeJS.
1. Optional: Choose the the web browser  
    ![](https://i.imgur.com/X1zuUZD.png)


1. Press ▶ IIS Express  
    ![](https://i.imgur.com/5GQSPP9.png)  
    This may take a long time (5 ~ 10 minutes for the first run) to build.  

1. Trust the self signed HTTPS SSL/TLS Certificate.

### Visual Studio Code (Lightweight and Fast)
This instruction covers the development of react frontend only.  

1. Open `ClientApp` folder  
1. Terminal -> New Terminal  
1. `npm install` Download tools and dependencies (one time step)  
    This may take a long time 
1. `npm start`  
    This may take some time to build.

