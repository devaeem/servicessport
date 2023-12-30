import {  mongoose } from '@typegoose/typegoose';
import { Schema } from 'mongoose';

const  { ObjectId } = mongoose.Schema;

// Document interface
interface Test {
  id: string;
  title: string;
  imagesicon?: Array<any>;
  subcategory?: Array<any>;
  active?: boolean;
  isDelete?: boolean;
}

const schema = new Schema<Test>({
  id: { type: String ,required: true},
  title: { type: String, required: true },
  imagesicon:{ type: Array },
  subcategory:  [ { type: Schema.Types.ObjectId, ref: 'subcategories' }],
  active:{type: Boolean ,default:true},
  isDelete:{type: Boolean,default:true},
}
,{ timestamps: true });
const CategoryModel = mongoose.model('categories', schema);
export {CategoryModel}
