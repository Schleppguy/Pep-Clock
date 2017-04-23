var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//create new instance of the mongoose.schema. the schema takes an 
//object that shows the shape of your database entries.
var pepListItemSchema = new Schema({
 author: String,
 comment: String,
 imgUrl: String,
 created: { type: Date, default: Date.now },
 pep: String
});
//export our module to use in server.js
module.exports = mongoose.model('PepListItem', pepListItemSchema);
