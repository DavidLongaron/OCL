# OCL

OCL is a Web App for cultural creators to store, categorize and share the original characters that they have created.
![OCL Home page](https://i.gyazo.com/6be7407efb193af930aec642a65f157e.png "Home page")

# Back end (`/server` directory)

To successfully run the server in development mode:


* You will need to have a PostgreSQL server installed and active for the app to work.


* Open a terminal
* Navigate to the main project folder ( it should be named **OCL* and contain 2 directories named **client**, **server** along with this file, named **README.md** )

* Ensure you are synchronized and have the latest merged changes by executing following commands :

```
git checkout master
git pull
```

* Open the **server** folder and install all required application modules and dependencies:

```
cd server
npm install
```

*   Once complete, run the server  with

```
npx nodemon index.js
```


# Front end (`/client` directory)

To run the front end:

* Open a new terminal,

* Open the **client** folder and install all required application modules and dependencies (this may take some time):

```
cd client
npm install
```
* Once complete, run the React development server with

```
npm start
```

# Tech Stack

React, Craco, Express, Sequelize, PostgreSQL
