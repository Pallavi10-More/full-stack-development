import { useEffect, useState } from "react";
import api from "../services/api";

const AdminDashboard = () => {
  const [feedbackList, setFeedbackList] = useState([]);
  const [courseFilter, setCourseFilter] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchFeedback = async (course = "") => {
    try {
      setLoading(true);
      setError("");
      const endpoint = course ? `/feedback/${encodeURIComponent(course)}` : "/feedback";
      const { data } = await api.get(endpoint);
      setFeedbackList(data);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to load feedback.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeedback();
  }, []);

  const handleFilterSubmit = (event) => {
    event.preventDefault();
    fetchFeedback(courseFilter.trim());
  };

  const handleClearFilter = () => {
    setCourseFilter("");
    fetchFeedback();
  };

  return (
    <section className="card">
      <h2>Admin Dashboard</h2>
      <p className="helper-text">View and filter student feedback.</p>

      <form className="inline-form" onSubmit={handleFilterSubmit}>
        <input
          type="text"
          placeholder="Filter by course"
          value={courseFilter}
          onChange={(event) => setCourseFilter(event.target.value)}
        />
        <button className="primary-btn" type="submit" disabled={loading}>
          Filter
        </button>
        <button className="secondary-btn" type="button" onClick={handleClearFilter} disabled={loading}>
          Clear
        </button>
      </form>

      {error && <p className="message error">{error}</p>}
      {loading && <p className="helper-text">Loading feedback...</p>}

      {!loading && feedbackList.length === 0 ? (
        <p className="helper-text">No feedback found.</p>
      ) : (
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Student</th>
                <th>Email</th>
                <th>Course</th>
                <th>Rating</th>
                <th>Comment</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {feedbackList.map((feedback) => (
                <tr key={feedback._id}>
                  <td>{feedback.userId?.name || "Unknown"}</td>
                  <td>{feedback.userId?.email || "-"}</td>
                  <td>{feedback.courseName}</td>
                  <td>{feedback.rating}</td>
                  <td>{feedback.comment}</td>
                  <td>{new Date(feedback.createdAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};

export default AdminDashboard;
