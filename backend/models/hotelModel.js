import mongoose from "mongoose";

const hotelSchema = mongoose.Schema({
    title: {
        type:String,
    },
    image:{
        type:String,
    },
    description: {
        type:String,
    },
    price: {
        type:Number,
    },
    capacity: {
        type:Number,
    },
    size: {
        type:Number,
    }
});

const hotelModel = mongoose.model('Hotel', hotelSchema);

export default hotelModel;