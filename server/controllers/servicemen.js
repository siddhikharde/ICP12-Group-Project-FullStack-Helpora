import Servicemen from "../models/servicemen.js";
import dotenv from 'dotenv';
import User from "../models/user.js";

dotenv.config();

const getServicemenProfile = async (req, res) => {
    try {
        const user = req.user.id;
        const provider = await Servicemen.findOne({ userId: user }).populate("userId", "fullName email phoneNo profileImage");
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
            fullName,
            email,
            phoneNo,
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
            {
                field,
                experience,
                serviceAreas,
                price,
                skills,
                availability,
                professionalSummary,
            }, { new: true }
        );
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            {
                fullName,
                email,
                phoneNo
            },
            { new: true }
        );
        return res.json({
            success: true,
            message: "Profile updated successfully",
            data: { provider: updatedProvider, user: updatedUser },
        });
    } catch (e) {
        return res.json({
            success: false,
            message: "Error updating profile",
            error: e.message,
        });
    }
}

const patchAvailability = async (req, res) => {
  const { id, availability } = req.body;
  try {
    const updated = await Servicemen.findByIdAndUpdate(
      id,
      { availability },
      { new: true }
    );
    res.json({ success: true, 
        data: updated });
  } catch (e) {
    res.json({
         success: false, 
         message: "Server error" ,
         error:e.message

        });
  }
};
export { getServicemenProfile, getAllServicemens, getServicemenById, putServicemenProfile, patchAvailability };