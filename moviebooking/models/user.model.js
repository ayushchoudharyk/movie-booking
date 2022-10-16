const mongoose = require('mongoose'); 
const mongoose = require('mongoose');
const { isEmail} = require('validator');

const UserSchema = mongoose.Schema({
userid:{
    type:String,
    require:true,
    unique:true
},
email:{
    type:String,
    required:true,
    validator:value => isEmail(value)
},
first_name:{
    type:String,
    require:true
},
last_name:{
    type:String,
    require:true
},
username:String,
contact:{
    type:String,
    require:true
},
password:{
    type:String,
    require:true
},
role:{
    type:String,
    enum:["user","admin"],
    default:'user'
},
isLoggedIn:Boolean,
uuid:String,
accesstoken :String,
coupens:[],
bookingRequests:[]
});
UserSchema.pre("save",(next)=>{
    this.username = this.first_name+ this.last_name;
    next();
});
module.exports = mongoose.model("User",UserSchema);