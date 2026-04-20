import { useState } from "react";
import api from "../services/api";

const StudentDashboard = () => {
  const [formData, setFormData] = useState({
    courseName: "",
    rating: "",
    comment: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    if (!formData.courseName || !formData.rating || !formData.comment) {
      setError("Please fill in all fields.");
      return;
    }

    const numericRating = Number(formData.rating);
    if (numericRating < 1 || numericRating > 5) {
      setError("Rating must be between 1 and 5.");
      return;
    }

    try {
      setLoading(true);
      await api.post("/feedback", {
        ...formData,
        rating: numericRating,
      });

      setSuccess("Feedback submitted successfully.");
      setFormData({
        courseName: "",
        rating: "",
        comment: "",
      });
    } catch (err) {
      setError(err.response?.data?.message || "Failed to submit feedback.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="card">
      <h2>Student Dashboard</h2>
      <p className="helper-text">Submit your feedback for your course.</p>
      {error && <p className="message error">{error}</p>}
      {success && <p className="message success">{success}</p>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="courseName">Course Name</label>
          <input
            id="courseName"
            name="courseName"
            type="text"
            value={formData.courseName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="rating">Rating (1-5)</label>
          <input id="rating" name="rating" type="number" min="1" max="5" value={formData.rating} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="comment">Comment</label>
          <textarea id="comment" name="comment" rows="4" value={formData.comment} onChange={handleChange} />
        </div>

        <button className="primary-btn" type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit Feedback"}
        </button>
      </form>
    </section>
  );
};

export default StudentDashboard;
