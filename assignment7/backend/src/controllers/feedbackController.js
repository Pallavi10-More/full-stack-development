const Feedback = require("../models/Feedback");

const submitFeedback = async (req, res, next) => {
  try {
    const { courseName, rating, comment } = req.body;

    const feedback = await Feedback.create({
      userId: req.user.id,
      courseName,
      rating,
      comment,
    });

    res.status(201).json({
      message: "Feedback submitted successfully",
      feedback,
    });
  } catch (error) {
    next(error);
  }
};

const getAllFeedback = async (req, res, next) => {
  try {
    const feedbackList = await Feedback.find()
      .populate("userId", "name email role")
      .sort({ createdAt: -1 });

    res.status(200).json(feedbackList);
  } catch (error) {
    next(error);
  }
};

const getFeedbackByCourse = async (req, res, next) => {
  try {
    const { course } = req.params;

    const feedbackList = await Feedback.find({
      courseName: { $regex: new RegExp(`^${course}$`, "i") },
    })
      .populate("userId", "name email role")
      .sort({ createdAt: -1 });

    res.status(200).json(feedbackList);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  submitFeedback,
  getAllFeedback,
  getFeedbackByCourse,
};
