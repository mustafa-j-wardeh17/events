import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    clerkId:{required:true,type:String,unique:true},
    email:{required:true,type:String,unique:true},
    username:{required:true,type:String,unique:true},
    firstName:{required:true,type:String},
    lastName:{required:true,type:String},
    photo:{required:true,type:String},
})


const User = models.User || model('User',UserSchema)

export default User