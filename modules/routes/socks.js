var express = require( 'express' );
var router = express.Router();
var bodyParser = require( 'body-parser' );

router.get( '/', function( req, res ){
  console.log( 'socks get route hit' );
  res.send( 'argyle' );
}); //end get route

module.exports = router;
