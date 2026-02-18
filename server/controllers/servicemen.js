import User from '../models/user.js';


const getServicemenProfile = async (req, res) => {
  try {
    const { id } = req.params; 
    const user = await User.findById(id);
    if (!user) {
      return res.json({
        success: false,
        message: "Servicemen not found",
        data: null,
      });
    }
    user.password = undefined; 
    return res.json({
      success: true,
      message: "Servicemen profile retrieved successfully",
      data: user,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "Error retrieving servicemen profile",
      data: error.message,
    });
  }
};



export { getServicemenProfile};