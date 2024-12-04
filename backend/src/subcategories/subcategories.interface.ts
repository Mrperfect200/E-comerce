import { Document } from "mongoose";
import { Categories } from "../categories/categories.interface";

export interface subcategories extends Document{
   readonly name:string;
   readonly category:Categories
   image:string;

}

