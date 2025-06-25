import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
    name:{
        type: String,
        
    }
    // city:{
    //     type: String,
    //     required: true 
    // },
    // deliveryTime:{
    //     type: Number,
    //     required: true
    // },
    // imageURL:{
    //     type: String,
    //     required: true
    // },
    // cuisines:{
    //     type: [String],
    //     required: true
    // },
    // rating:{
    //     type: String,
    //     required: true
    // }
});

const RestaurantModel = mongoose.model("Restaurant", restaurantSchema);
export default RestaurantModel;