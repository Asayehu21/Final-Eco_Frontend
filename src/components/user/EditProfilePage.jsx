import { useState, useEffect } from "react";
import api from "../../api"; // Adjust the import based on your API setup
import './EditProfile.css'; // Optional CSS for additional styling

const EditProfilePage = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password:"",
    confirm_password:"",
    phone: "",
    city: "",
    state: "",
    address: "",
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  // Fetch user information when the component mounts
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await api.get("/user/profile"); // Adjust endpoint accordingly
        setFormData(response.data);
      } catch (err) {
        setError("Failed to fetch user information.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await api.put("/user/profile/update/", formData); // Adjust endpoint accordingly
      setMessage("Profile updated successfully!");
      setFormData(response.data); // Update form data with the latest from the server
    } catch (err) {
      setError("Failed to update profile.");
    } finally {
      setLoading(false);
    }
  };

  // Render loading state
  if (loading) return <p>Loading...</p>;
  
  // Render error message if any
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div className="edit-profile-container">
      <h2>Edit Profile</h2>
      {message && <p className="text-success">{message}</p>}
      <form onSubmit={handleSubmit}>
        {Object.keys(formData).map((key) => (
          <div className="mb-3" key={key}>
            <label htmlFor={key} className="form-label">
              {key.replace("_", " ").toUpperCase()}
            </label>
            <input
              type={key === "email" ? "email" : "text"}
              name={key}
              value={formData[key]}
              onChange={handleChange}
              className="form-control"
              placeholder={`Enter your ${key.replace("_", " ")}`}
              required={key !== "phone" && key !== "city" && key !== "state" && key !== "address"}
            />
          </div>
        ))}
        <button
          type="submit"
          className="btn btn-primary"
          disabled={loading}
        >
          {loading ? "Updating..." : "Update Profile"}
        </button>
      </form>
    </div>
  );
};

export default EditProfilePage;