import React, { useState } from 'react';
import './CSS/LoginSignup.css';

const LoginSignup = () => {
  const [isSignup, setIsSignup] = useState(true);

  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        {isSignup ? (
          <>
            <h1>Sign Up</h1>
            <div className="loginsignup-fields">
              <input type="text" name="name" id="uname" placeholder="Your Name" />
              <input type="email" name="mail" id="email" placeholder="Email Address" />
              <input type="password" name="pw" id="pword" placeholder="Password" />
            </div>
            <button>Continue</button>
            <p className="loginsignup-login">
              Already have an account?{' '}
              <span onClick={() => setIsSignup(false)} style={{ color: 'blue', cursor: 'pointer' }}>
                Login here
              </span>
            </p>
            <div className="loginsignup-agree">
              <input type="checkbox" name="" id="" />
              <p>By continuing, I agree to the terms of use & privacy policy.</p>
            </div>
          </>
        ) : (
          <>
            <h1>Login</h1>
            <div className="loginsignup-fields">
              <input type="text" name="username" id="username" placeholder="Username" />
              <input type="password" name="password" id="password" placeholder="Password" />
            </div>
            <button>Login</button>
            <p className="loginsignup-login">
              Don't have an account?{' '}
              <span onClick={() => setIsSignup(true)} style={{ color: 'blue', cursor: 'pointer' }}>
                Sign up here
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;
