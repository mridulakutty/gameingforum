
let mongoose = require('mongoose');
mongoose.set('strictQuery', false);

mongoose.connect('mongodb://0.0.0.0:27017/gameingform');

let schema = mongoose.Schema(
    {
            gamename: {
            type: String,
            required: true
        },
        review: {
          type: String,
          required: true
      }
    } 
)
module.exports=mongoose.model('user',schema);
