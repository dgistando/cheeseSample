const mongoose = require('mongoose')
//local db connection. I could put the a remote db here as well
mongoose.connect('mongodb://127.0.0.1:27017/CheeseSample');

var db = mongoose.connection;
db.on('error', () => {console.log("Failed to connect to mongoose")})
db.once('open', () => {console.log("Connected to mongoose!")})

var Schema = mongoose.Schema

/**
 *  This is an opportunity to do some restriction of the 
 *  data with middleware. Some of the entries actually
 *  have more fields than this.
 */
var infoSchema = new Schema({
    Name : String,
    Link : String,
    Img : String,
    Made : String,
    Country_of_origin : String,
    Family : String,
    Type : String,
    Fat_content : String,
    Calcium_content : String,
    Texture : String,
    Rind : String,
    Colour : String,
    Flavour : String,
    Aroma : String,
    Vegetarian : String,
    Producers : String,
    Synonyms : String,
    Alternative_spelling : String,
    Fat_dry : String,
    Price : Number
},{collection : "info"})

var cartSchema = new Schema({
    myId : String, 
    items : [Schema.Types.Mixed]
},{collection : "cart"})

var Info = mongoose.model('Info', infoSchema)
var Cart = mongoose.model('Cart', cartSchema)

module.exports = {Info, Cart}