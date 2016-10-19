const express = require( "express" );
const { json } = require( "body-parser" );
const mongoose = require( "mongoose" );
const session = require( "express-session" );
const app = express();
const sessionConfig = require( "./config/sessionConfig" );
const port = process.env.PORT ? process.env.PORT : 9000;
const mongoUri = process.env.MONGOURI ? process.env.MONGOURI : "mongodb://localhost:27017/mydb";

// / You might also use process.env.PRODUCTION

app.use( session( sessionConfig ) );
app.use( json() );
app.use( express.static( `${ __dirname }/dist` ) );

mongoose.connect( mongoUri );
mongoose.connection.once( "open", () => console.log( `Mongoose connected to mongoDB at ${ mongoUri }` ) );

app.listen( port, () => console.log( `Express listening on ${ port }` ) );

// ng-annotate-loader, can protect you from minificaiton errors coming from Angular brackets?
