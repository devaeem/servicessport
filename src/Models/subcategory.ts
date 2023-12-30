import {  mongoose } from '@typegoose/typegoose';
import { Schema } from 'mongoose';

const  { ObjectId } = mongoose.Schema;

// Document interface
interface Test {
  id: string;
  title: string;
  active?: boolean;
  isDelete?: boolean;
}

const schema = new Schema<Test>({
  id: { type: String ,required: true},
  title: { type: String, required: true },
  active:{type: Boolean ,default:true},
  isDelete:{type: Boolean,default:true},
}
,{ timestamps: true });
const subCategoryModel = mongoose.model('subcategories', schema);
export {subCategoryModel}
