import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api";
import './SignupPage.css'; // Optional CSS for additional custom styling
import Error from "../ui/Error";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    confirm_password: "",
    city: "",
    state: "",
    address: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateTextField = (field) => {
    const regex = /^[A-Za-z\s]+$/;
    return regex.test(field);
  };

  const validateEmail = (email) => {
    const regex = /^[A-Za-z0-9@.]+$/; // Only letters, digits, and '@' allowed
    return regex.test(email);
  };

  const validatePassword = (password) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChars = /[!@#$%^&*]/.test(password);
    
    return (
      password.length >= minLength &&
      hasUpperCase &&
      hasLowerCase &&
      hasNumbers &&
      hasSpecialChars
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Validate text fields
    if (!validateTextField(formData.first_name)) {
      setError("First name should contain only alphabets and spaces.");
      setLoading(false);
      return;
    }
    if (!validateTextField(formData.last_name)) {
      setError("Last name should contain only alphabets and spaces.");
      setLoading(false);
      return;
    }
    if (!validateTextField(formData.username)) {
      setError("Username should contain only alphabets and spaces.");
      setLoading(false);
      return;
    }

    // Validate email
    if (!validateEmail(formData.email)) {
      setError("Email should contain only letters, digits, and '@'.");
      setLoading(false);
      return;
    }

    // Password validation
    if (!validatePassword(formData.password)) {
      setError("Password must be at least 8 characters long, contain upper and lower case letters, numbers, and special characters.");
      setLoading(false);
      return;
    }

    // Check if passwords match
    if (formData.password !== formData.confirm_password) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    try {
      const response = await api.post("register/", formData);
      setMessage(response.data.message);
      
      // Reset form fields and error message
      setFormData({
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        password: "",
        confirm_password: "",
        city: "",
        state: "",
        address: "",
        phone: "",
      });
      setError(""); // Clear error message

      // Redirect to login page upon successful registration
      navigate("/login");
    } catch (error) {
      setError(error.response?.data?.detail || "An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card shadow">
       
        {message && <p className="text-success">{message}</p>}
        <h2 className="signup-title">Create Your Account</h2>
        <p className="signup-subtitle">Fill in the form below to register</p>

        <form onSubmit={handleSubmit}>
        <div className="row">
        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="first_name" className="form-label">First Name</label>
            <input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              className="form-control"
              id="first_name"
              placeholder="Enter your first name"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="last_name" className="form-label">Last Name</label>
            <input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              className="form-control"
              id="last_name"
              placeholder="Enter your last name"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="form-control"
              id="username"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="form-control"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>
          </div>
          <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="confirm_password" className="form-label">Confirm Password</label>
            <input
              type="password"
              name="confirm_password"
              value={formData.confirm_password}
              onChange={handleChange}
              className="form-control"
              id="confirm_password"
              placeholder="Confirm your password"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="city" className="form-label">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="form-control"
              id="city"
              placeholder="Enter your city"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="state" className="form-label">State</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="form-control"
              id="state"
              placeholder="Enter your state"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">Address</label>
            <input
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="form-control"
              id="address"
              placeholder="Enter your address"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="form-control"
              id="phone"
              placeholder="Enter your phone number"
            />
          </div>
          </div>
          </div>
         
          
          {error && <Error error={error} />}

          <button
            type="submit"
            className="btn btn-primary w-30"
            disabled={loading}
          > <strong>
            {loading ? "Registering..." : "Signup"}
            </strong>
          </button>

        </form>
        <div className="signup-footer">
          <p>Already have an account? <a href="/login"> <strong> Login</strong> </a></p>
          
        </div>
        
      </div>
    </div>
  );
};

export default SignupPage;