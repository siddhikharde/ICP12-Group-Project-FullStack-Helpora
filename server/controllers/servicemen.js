import Servicemen from "../models/servicemen.js";
import User from "../models/user.js";
import jwt from "../middleware/jwt.js";
import dotenv from 'dotenv';

dotenv.config();

const getServicemenProfile = async (req, res) => {
    try {
        const user = req.user.id;
        const provider = await Servicemen.findOne({ userId: user }).populate("userId", "-password");
        if (!provider) {
            return res.json({
                success: false,
                message: "Provider profile not found",
                data: null
            })
        }
        return res.json({
            success: true,
            message: "Profile fetched successfully",
            data: provider
        });
    }
    catch (e) {
        return res.json({
            success: false,
            message: "Error fetching profile",
            error: e.message
        });
    }
}

const getAllServicemens = async (req, res) => {
    try {
        const providers = await Servicemen.find().populate("userId", "-password");
        return res.json({
            success: true,
            message: "Servicemens fetched successfully",
            data: providers,
        });
    } catch (e) {
        return res.json({
            success: false,
            message: "Error fetching providers",
            error: e.message,
        })
    }
}
export { getServicemenProfile, getAllServicemens };