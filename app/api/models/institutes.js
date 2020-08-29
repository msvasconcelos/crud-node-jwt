const mongoose = require('mongoose');
//Define a schema
const Schema = mongoose.Schema;
const InstituteSchema = new Schema({
 name: {
  type: String,
  trim: true,  
  required: true,
 },
 location: {
  type: String,
  trim: true,
  required: true
 }
});