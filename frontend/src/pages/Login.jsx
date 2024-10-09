import React, { useState } from 'react';
import styled from 'styled-components';

const Login = () => {
 
  return (
    <LoginContainer>
      <LoginBox>
        <LogoContainer>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg"
            alt="Airbnb Logo"
          />
        </LogoContainer>
        
          <>
            <h2>Sign Up</h2>
            <form >
              <InputWrapper>
                <label>Full Name</label>
                <input type="text" placeholder="Enter your full name" />
              </InputWrapper>
              <InputWrapper>
                <label>Email</label>
                <input type="email" placeholder="Enter your email" />
              </InputWrapper>
              <InputWrapper>
                <label>Password</label>
                <input type="password" placeholder="Enter your password" />
              </InputWrapper>
              <SubmitButton type="submit">Sign Up</SubmitButton>
            </form>
            <ToggleLink >
              Already have an account? <span>Log In</span>
            </ToggleLink>
          </>
      


      
          <>
            <h2>Login</h2>
            <form>
              <InputWrapper>
                <label>Email</label>
                <input type="email" placeholder="Enter your email" />
              </InputWrapper>
              <InputWrapper>
                <label>Password</label>
                <input type="password" placeholder="Enter your password" />
              </InputWrapper>
              <ForgotPasswordLink href="#">Forgot Password?</ForgotPasswordLink>
              <SubmitButton type="submit">Login</SubmitButton>
            </form>
            <ToggleLink >
              Don't have an account? <span>Sign Up</span>
            </ToggleLink>
          </>
        
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
