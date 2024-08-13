import mongoose, { Document, Schema } from "mongoose";

export interface IProduct extends Document {
    name: string;
    description: string;
    price: number;
    countInStock: number;
}

const ProductSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        require: true,
        default: 0,
    },
    countInStock: {
        type: Number,
        required: true,
        default: 0,
    }
},
    {
        timestamps: true,
    })

const Product = mongoose.model<IProduct>('Product', ProductSchema);

export default Product;