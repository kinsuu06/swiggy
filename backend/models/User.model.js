import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }

});
userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        try{
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        }catch (error) {
            console.error("Error hashing password:", error);
            return next(error);
        }
    }
    next();
});

userSchema.methods.comparePassword = async function (candidatePassword) {
    try {
        
        return await bcrypt.compare(candidatePassword, this.password);
    } catch (error) {
        console.error("Error comparing password:", error);
        throw error;
    }
};
const UserModel = mongoose.model("User", userSchema);
export default UserModel;