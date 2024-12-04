import mongoose from "mongoose";
import { subcategories } from "./subcategories.interface";

const subcategoriesSchema = new mongoose.Schema<subcategories>({
    name:{type:String , required:true , trim:true },
    category:{type:mongoose.Schema.Types.ObjectId,ref:"categories"},
    image:String
},{timestamps:true})

subcategoriesSchema.pre<subcategories>(/^find/, function (next) {
    this.populate({path: 'category', select: 'name image'});
    next();
})
export default mongoose.model<subcategories>("subcategories", subcategoriesSchema)