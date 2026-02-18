import Servicemen from "../models/servicemen.js";
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

const getServicemenById = async (req, res) => {
    try {
        const { id } = req.params;

        const provider = await Servicemen.findById(id).populate("userId", "-password");

        if (!provider) {
            return res.json({
                success: false,
                message: "Servicemen not found",
                data: null,
            });
        }

        return res.json({
            success: true,
            message: "Servicemen fetched successfully",
            data: provider,
        });

    } catch (e) {
        return res.json({
            success: false,
            message: "Error fetching servicemen",
            error: e.message,
        });
    }
};

const putServicemenProfile = async (req, res) => {
    try {
        const userId = req.user.id;
        const {
            field,
            experience,
            serviceAreas,
            price,
            skills,
            availability,
            professionalSummary,
        } = req.body;

        const updatedProvider = await Servicemen.findOneAndUpdate(
           { userId: userId }, 
           { field,
            experience,
            serviceAreas,
            price,
            skills,
            availability,
            professionalSummary,} ,{ new: true }
        );
        return res.json({
            success: true,
            message: "Profile updated successfully",
            data: updatedProvider,
        });
    }catch (e) {
    return res.json({
      success: false,
      message: "Error updating profile",
      error: e.message,
    });
  }


}
export { getServicemenProfile, getAllServicemens, getServicemenById, putServicemenProfile };