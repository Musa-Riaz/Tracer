import mongoose from 'mongoose';
import validator from "validator";
import bcrypt from 'bcryptjs';
import { Document, Schema, model } from 'mongoose';

interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    matchPasswords(candidatePassword: string): Promise<boolean>;
  }

const userSchema = new Schema<IUser>({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String, // Use String (capitalized) to indicate the schema data type
        required: true,
        validate: {
            validator: (value: string) => validator.isEmail(value),
            message: 'Please provide a valid email',
        },
    },
    password:{
        type: String,
        required: true,
        select: false
    }
});


userSchema.pre('save', function(next){
    if(!this.isModified('password')){
        return next();
    }
    bcrypt.genSalt(10, (err, salt)=>{
        if(err){
            return next(err);
        }
        bcrypt.hash(this.password, salt, (err, hash)=>{
            if(err){
                return next(err);
            }
            this.password = hash;
            next();
        })
    })
})

userSchema.methods.matchPasswords = async function(enteredPassword: string): Promise<boolean>{
    return await bcrypt.compare(enteredPassword, this.password);
}

export const userModel = model<IUser>('User', userSchema);