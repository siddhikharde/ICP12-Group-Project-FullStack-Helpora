import feedback from "../models/feedback.js";
import dotenv from "dotenv"

dotenv.config();

const postFeedback = async (req, res) => {
  const { name, discription } = req.body;

  if (!name) {
    res.json({
      status: false,
      message: "name is requied",
    });
  }
  if (!discription) {
    res.json({
      status: false,
      message: "discription is requied",
    });
  }

  const newfeedback = new feedback({
    name,
    discription,
  });

  try {
    const saveFeedback = await newfeedback.save();
    res.json({
      status: true,
      message: "feedback send successfully",
      data: saveFeedback,
    });
  } catch (error) {
    res.json({
      status: true,
      message: "feedback not send",
    });
  }
  res.json({
    status: true,
    message: "feedback send successfully",
  });
}


const getFeedback = async (req, res) => {
  const { id } = req.params;
  try {
    const feedbackResponce = await feedback.findById(id);

    if (!feedbackResponce) {
      res.json({
        status: false,
        message: "failed responce",
        data: null,
      });
    }
    res.json({
      status: true,
      message: "responce fetched successfully",
      data: feedbackResponce,
    });
  } catch (error) {
    res.json({
      status: false,
      message: "data not fetched",
      data: null,
    });
  }
}

export {getFeedback, postFeedback};