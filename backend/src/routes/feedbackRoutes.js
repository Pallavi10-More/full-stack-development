const express = require("express");
const { body, param } = require("express-validator");
const {
  submitFeedback,
  getAllFeedback,
  getFeedbackByCourse,
} = require("../controllers/feedbackController");
const { protect, authorizeRoles } = require("../middleware/authMiddleware");
const validateRequest = require("../middleware/validationMiddleware");

const router = express.Router();

router.post(
  "/",
  protect,
  authorizeRoles("student"),
  [
    body("courseName")
      .trim()
      .isLength({ min: 2 })
      .withMessage("Course name must be at least 2 characters"),
    body("rating")
      .isInt({ min: 1, max: 5 })
      .withMessage("Rating must be an integer between 1 and 5"),
    body("comment")
      .trim()
      .isLength({ min: 5, max: 1000 })
      .withMessage("Comment must be between 5 and 1000 characters"),
  ],
  validateRequest,
  submitFeedback
);

router.get("/", protect, authorizeRoles("admin"), getAllFeedback);

router.get(
  "/:course",
  protect,
  authorizeRoles("admin"),
  [param("course").trim().notEmpty().withMessage("Course is required")],
  validateRequest,
  getFeedbackByCourse
);

module.exports = router;
