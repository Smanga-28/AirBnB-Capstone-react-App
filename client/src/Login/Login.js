import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';  // Import axios for API requests

const Login = () => {
  // State to toggle between login and signup
  const [isSignUp, setIsSignUp] = useState(false);

  // State to store form inputs
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  // State for error messages
  const [error, setError] = useState('');

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to toggle between Sign-Up and Login forms
  const handleToggle = () => {
    setIsSignUp((prev) => !prev);
    setError('');  // Clear error on toggle
  };

  // Function to handle Sign-Up submission
  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    try {
      // API call to sign up the user
      const response = await axios.post('http://localhost:5000/api/signup', {
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
      });
      alert('Sign up successful! Redirecting to login.');
      setIsSignUp(false);  // Switch to login view after successful sign-up
    } catch (error) {
      setError('Sign up failed. Please try again.');
    }
  };

  // Function to handle Login submission
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      // API call to log in the user
      const response = await axios.post('http://localhost:5000/api/login', {
        email: formData.email,
        password: formData.password,
      });
      alert('Login successful!');
      // Redirect the user or store the authentication token as needed
    } catch (error) {
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <LoginContainer>
      <LoginBox>
        <LogoContainer>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg"
            alt="Airbnb Logo"
          />
        </LogoContainer>
        {isSignUp ? (
          <>
            <h2>Sign Up</h2>
            {error && <ErrorText>{error}</ErrorText>}
            <form onSubmit={handleSignUpSubmit}>
              <InputWrapper>
                <label>Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                />
              </InputWrapper>
              <InputWrapper>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </InputWrapper>
              <InputWrapper>
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </InputWrapper>
              <SubmitButton type="submit">Sign Up</SubmitButton>
            </form>
            <ToggleLink onClick={handleToggle}>
              Already have an account? <span>Log In</span>
            </ToggleLink>
          </>
        ) : (
          <>
            <h2>Login</h2>
            {error && <ErrorText>{error}</ErrorText>}
            <form onSubmit={handleLoginSubmit}>
              <InputWrapper>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </InputWrapper>
              <InputWrapper>
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </InputWrapper>
              <ForgotPasswordLink href="#">Forgot Password?</ForgotPasswordLink>
              <SubmitButton type="submit">Login</SubmitButton>
            </form>
            <ToggleLink onClick={handleToggle}>
              Don't have an account? <span>Sign Up</span>
            </ToggleLink>
          </>
        )}
      </LoginBox>
    </LoginContainer>
  );
};

export default Login;

// Styled components for styling the login/signup form
const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f7f7f7;
`;

const LoginBox = styled.div`
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 400px;
  text-align: center;

  h2 {
    margin-bottom: 20px;
    font-size: 24px;
  }
`;

const LogoContainer = styled.div`
  margin-bottom: 20px;

  img {
    height: 50px;
  }
`;

const InputWrapper = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 5px;
    font-size: 14px;
    text-align: left;
  }

  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
`;

const ForgotPasswordLink = styled.a`
  display: block;
  text-align: right;
  margin-bottom: 20px;
  font-size: 12px;
  color: #ff385c;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #ff385c;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
  &:hover {
    background-color: #e31b5f;
  }
`;

const ToggleLink = styled.p`
  margin-top: 20px;
  font-size: 14px;
  color: #555;
  cursor: pointer;

  span {
    color: #ff385c;
    text-decoration: underline;
  }

  &:hover {
    text-decoration: underline;
  }
`;

const ErrorText = styled.p`
  color: red;
  margin-bottom: 10px;
`;
