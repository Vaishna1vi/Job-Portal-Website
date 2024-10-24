import mongoose from 'mongoose'
import validator from 'validator'

//schema
const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true, 'Name Is Required'],
    },
    lastName: {
        type: String,
        
    },
    email: {
        type:String,
        required:[true, 'Email is Required'],
        unique:true,
        validate: validator.isEmail,
    },
    password:{
        type:String,
        required:[true, 'Password is Required'],
    },
    location:{
        type:String,
        default: 'India',
    },
},
{timestamps: true}
);

export default mongoose.model('User', userSchema)