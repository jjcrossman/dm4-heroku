const express = require( "express" );
const { json } = require( "body-parser" );
const mongoose = require( "mongoose" );
const session = require( "express-session" );
const app = express();
const sessionConfig = require( "./config/sessionConfig" );
const port = process.env.PORT ? process.env.PORT : 9000;
const mongoUri = process.env.MONGOURI ? process.env.MONGOURI : "mongodb://localhost:27017/mydb";

// Use mLabs for remote mongoDBs.

// heroku config:set MONGOURIO=mongodb://<dbUSER>:<dbPASSWORD>@ds043962.mlab.com:43962/nameOfDatabase

// / You might also use process.env.PRODUCTION

app.use( session( sessionConfig ) );
app.use( json() );
app.use( express.static( `${ __dirname }/dist` ) );

mongoose.connect( mongoUri );
mongoose.connection.once( "open", () => console.log( `Mongoose connected to mongoDB at ${ mongoUri }` ) );

app.listen( port, () => console.log( `Express listening on ${ port }` ) );

// ng-annotate-loader, can protect you from minificaiton errors coming from Angular brackets?

// Put $inject in your directives etc so minification caused from using webpack -p don't get you. See src/components/Hello/Hello.js

// Hello.$inject = [ "$scope", "$http" ];
//This is needed if using webpack -p


// Brian's notes:

// Notes for Heroku (let me know if you can't read them):
//
// [2:10]
// cmd: heroku create
// // Creates new git remote git remote --v
//
// // heroku config:set MONGOURI = mongodb..
//
// In server.js/index.js
// const mongoURI = process.env.MONGOURI || mongodb://asfasdfsd
// const port = process.env.PORT || default
//
// // You might also use process.env.PRODUCTION
//
// // In package.json, alter scripts
// "start": "node index.js"
// // In package.json, add engines
// "engines": {"node": "6.7.0"}
//
// // Git add and commit everything
//
// // git push heroku master
//
// // use same process to save other hidden variables
// heroku config:set SESSION_SECRET="keyboard cat"
//
// // logs
// heroku logs --spits out console
//
// // FOR DEPLOYMENT
// "
//
// Hello.$inject = ["$scope", "$http"];
//
// Or use ng-annotate-loader
// webpack -p (minifies)
