import feedback from "../models/feedback.js";
import dotenv from "dotenv";

dotenv.config();

const postFeedback = async (req, res) => {
  const { username, discription } = req.body;

  if (!username) {
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
    username,
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
      status: false,
      message: error.message,
    });
  }
  res.json({
    status: true,
    message: "feedback send successfully",
  });
};

const getFeedback = async (req, res) => {
  try {
    const feedbackResponce = await feedback.find().sort({
      createdAt: -1,
    });

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
      message: error.message,
      data: null,
    });
  }
};

export { getFeedback, postFeedback };
