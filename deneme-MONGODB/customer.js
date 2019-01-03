var mongoose = require('mongoose')
var Schema = mongoose.Schema

var customerSchema = new Schema({
    name:String,
    city:String,
    time:Date 
})

customerSchema.pre('save',function(next){
    var currentDate = new Date()
    this.time = currentDate
    next()
})

var Customer = mongoose.model('Customer',customerSchema)
module.exports=Customer