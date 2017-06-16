var express = require( 'express' );
var router = express.Router();
var bodyParser = require( 'body-parser' );
var mongoose = require( 'mongoose' );

// uses
router.use( bodyParser.urlencoded( { extended: true } ) );
router.use( bodyParser.json() );

// connect to mongoose
mongoose.connect( 'localhost:/27017/sockDrawer' );

// sock schema
var sockSchema = new mongoose.Schema({
  color: String,
  material: String,
  height: String,
  holey: Number,
  complete: Boolean,
  howMuchIWantIt: Number
}); // end schema

// sock model
var sockModel = mongoose.model( 'sockModel', sockSchema );

router.get( '/', function( req, res ){
  console.log( 'socks get route hit' );
  // give me all the sockModels
  sockModel.find().then( function( response ){
    res.send( response );
  }); // end find
}); //end get route

router.post( '/', function( req, res ){
  console.log( 'sock post route hit:', req.body );
  // req.body property names must match up to Schema
  var newRecord = sockModel( req.body );
  newRecord.save();
  res.send( 'tube' );
}); //end post

module.exports = router;
