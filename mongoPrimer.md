```
var mongoose = require( 'mongoose' );
// 27017 is default mongo port
mongoose.connect( 'localhost:/27017/meanie' );
var peepsSchema = new  mongoose.Schema({
  name: String,
  location: String
});
var peepsModel = mongoose.model( 'peepsModel', peepsSchema );
```

```
peepsModel.find().then( function( data ){
  res.send( data );
```

```
var recordToAdd={
name:req.body.name,
location:req.body.location
}
// create new record
var newRecord=peepsModel( recordToAdd );
newRecord.save();
```
