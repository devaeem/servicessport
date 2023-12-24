import {  mongoose } from '@typegoose/typegoose';
import { Schema } from 'mongoose';
import  slugify  from "slugify";

// Document interface
interface Test {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  active?: boolean;
  isDelete?: boolean;
  title?: string;
 

}

// Schema
const schema = new Schema<Test>({
  id: { type: String },
  name: { type: String, required: true },
  email: { type: String, required: true },
  avatar: String,
  active:{type: Boolean},
  isDelete:{type: Boolean},
  title:String,
  

}


,{ timestamps: true });


const TestmodeModel = mongoose.model('Test', schema);
export {TestmodeModel}
