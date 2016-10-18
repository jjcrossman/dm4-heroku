const express = require( "express" );
const { json } = require( "body-parser" );
const mongoose = require( "mongoose" );
const session = require( "express-session" );
const app = express();
const sessionConfig = require( "./config/sessionConfig" );
const port = 9000;
const mongoUri = "mongodb://localhost:27017/mydb";

app.use( session( sessionConfig ) );
app.use( json() );
app.use( express.static( `${ __dirname }/dist` ) );

mongoose.connect( mongoUri );
mongoose.connection.once( "open", () => console.log( `Mongoose connected to mongoDB at ${ mongoUri }` ) );

app.listen( port, () => console.log( `Express listening on ${ port }` ) );
