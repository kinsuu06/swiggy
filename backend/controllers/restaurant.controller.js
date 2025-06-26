import RestaurantModel from "../models/Restaurant.model.js";
export const createRestaurant = async (req, res) => {
    try{
        const newReastaurant = await RestaurantModel.create(req.body);
        return res.status(201).json(newReastaurant);
    }catch(error) {
        console.error("Error creating restaurant:", error);
        return res.status(500).send("Internal Server Error");
    }
}

export const getAllRestaurants = async (req, res) => {
    try {
        const restaurants = await RestaurantModel.find({});
        return res.status(200).json(restaurants);
    } catch (error) {
        console.error("Error fetching restaurants:", error);
        return res.status(500).send("Internal Server Error");
        
    }
  
}

export const updateRestaurant = async(req, res) => {
    try{
        const{id} = req.params;
        const updateRestaurant = await RestaurantModel.findByIdAndUpdate(id, req.body, {new: true});
        if(updateRestaurant){
            return res.status(404).send("Restaurant not found");
        }
        return res.status(200).json(updateRestaurant);
    }catch(err){
        console.log("Error updating restaurant :", err );
        return res.status(500).send("Internal Server Error");
    }
}

export const deleteRestaurant = async(req, res) => {
    try{
        const{id} = req.params;
        const deletedRestaurant = await RestaurantModel.findByIdAndDelete(id);
        if(!deletedRestaurant){
            return res.status(404).send("Restaurant not found");
        }
        return res.status(200).send("restaurant deleted successfully");
    }catch(err){
        console.log("Error deleting restaurant :", err );
        return res.status(500).send("Internal Server Error");
    }
}