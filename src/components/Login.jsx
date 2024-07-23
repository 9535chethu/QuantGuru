import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './Login.css';

const API_URL = 'http://localhost:5000';  // Backend port

axios.defaults.withCredentials = true;

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [isResetPassword, setIsResetPassword] = useState(false);

  useEffect(() => {
    // Load Facebook SDK
    window.fbAsyncInit = function() {
      window.FB.init({
        appId      : '964676608739941', // Your Facebook App ID
        cookie     : true,
        xfbml      : true,
        version    : 'v12.0'
      });
    };

    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    // Load LinkedIn SDK
    (function() {
      const li = document.createElement('script');
      li.type = 'text/javascript';
      li.src = 'https://platform.linkedin.com/in.js';
      li.innerHTML = 'api_key: YOUR_LINKEDIN_API_KEY\nauthorize: true';
      document.getElementsByTagName('head')[0].appendChild(li);
    })();

    // Handle Google OAuth redirect
    const handleOAuthRedirect = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get('token');
      if (token) {
        localStorage.setItem('token', token);
        navigate('/');
      }
    };
    handleOAuthRedirect();
  }, []);

  const handleSignInClick = () => {
    document.getElementById("container").classList.remove("right-panel-active");
    setIsResetPassword(false);
  };

  const handleSignUpClick = () => {
    document.getElementById("container").classList.add("right-panel-active");
    setIsResetPassword(false);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/login`, { email, password });
      localStorage.setItem('token', response.data.token);
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error.response?.data || error.message);
      alert(`Login failed: ${error.response?.data?.message || error.message}`);
    }
  };

  const handleSendOtp = async (event) => {
    event.preventDefault();
    if (!email) {
      alert('Please enter your email');
      return;
    }
    try {
      await axios.post(`${API_URL}/send-otp`, { email });
      setIsOtpSent(true);
      alert('OTP sent to your email. Please check and enter the OTP to complete signup.');
    } catch (error) {
      console.error('Sending OTP failed:', error.response?.data || error.message);
      alert(`Sending OTP failed: ${error.response?.data?.message || error.message}`);
    }
  };

  const handleVerifyOTP = async (event) => {
    event.preventDefault();
    try {
      await axios.post(`${API_URL}/verify-otp`, { email, otp });
      setIsOtpVerified(true);
      alert('OTP verified successfully. You can now complete your signup.');
    } catch (error) {
      console.error('OTP verification failed:', error.response?.data || error.message);
      alert(`OTP verification failed: ${error.response?.data?.message || error.message}`);
    }
  };

  const handleCompleteSignup = async (event) => {
    event.preventDefault();
    if (!name || !email || !password) {
      alert('Please fill out all fields');
      return;
    }
    try {
      console.log({ name, email, password });  // Log the request data
      const response = await axios.post(`${API_URL}/signup`, { name, email, password });
      alert('Signup successful. Please sign in.');
      navigate('/signin');  // Redirect to the sign-in page
    } catch (error) {
      console.error('Signup failed:', error.response?.data || error.message);
      alert(`Signup failed: ${error.response?.data?.message || error.message}`);
    }
  };

  const handleRequestResetPassword = async (event) => {
    event.preventDefault();
    if (!email) {
      alert('Please enter your email');
      return;
    }
    try {
      await axios.post(`${API_URL}/request-reset-password`, { email });
      setIsOtpSent(true);
      alert('OTP sent to your email. Please check and enter the OTP to reset your password.');
    } catch (error) {
      console.error('Request reset password failed:', error.response?.data || error.message);
      alert(`Request reset password failed: ${error.response?.data?.message || error.message}`);
    }
  };

  const handleVerifyOTPForReset = async (event) => {
    event.preventDefault();
    try {
      await axios.post(`${API_URL}/reset-password`, { email, otp, name, newPassword });
      alert('Password reset successfully. You can now log in with your new credentials.');
      setIsResetPassword(false);
      handleSignInClick();
    } catch (error) {
      console.error('OTP verification failed:', error.response?.data || error.message);
      alert(`OTP verification failed: ${error.response?.data?.message || error.message}`);
    }
  };

  const handleForgotPasswordClick = () => {
    setIsResetPassword(true);
  };

  const handleResendOTP = async () => {
    try {
      await axios.post(`${API_URL}/send-otp`, { email });
      alert('OTP resent. Please check your email.');
    } catch (error) {
      console.error('Resending OTP failed:', error.response?.data || error.message);
      alert(`Resending OTP failed: ${error.response?.data?.message || error.message}`);
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = `${API_URL}/auth/google`;
  };

  const handleFacebookLogin = () => {
    window.FB.login(async function(response) {
      if (response.authResponse) {
        try {
          const { data } = await axios.post(`${API_URL}/auth/facebook`, {
            accessToken: response.authResponse.accessToken,
            userID: response.authResponse.userID,
          });
          localStorage.setItem('token', data.token);
          navigate('/');
        } catch (error) {
          console.error('Facebook login failed:', error.response?.data || error);
          alert(`Facebook login failed: ${error.response?.data?.message || error.message}`);
        }
      } else {
        console.log('Facebook login cancelled');
      }
    }, {scope: 'public_profile,email'});
  };

  const handleLinkedInLogin = () => {
    window.IN.User.authorize(async function(){
      window.IN.API.Profile("me")
        .fields("id", "first-name", "last-name", "email-address", "picture-url")
        .result(async function(result) {
          try {
            const { data } = await axios.post(`${API_URL}/auth/linkedin`, {
              linkedinId: result.id,
              email: result.emailAddress,
              name: `${result.firstName} ${result.lastName}`,
            });
            localStorage.setItem('token', data.token);
            navigate('/');
          } catch (error) {
            console.error('LinkedIn login failed:', error.response?.data || error);
            alert(`LinkedIn login failed: ${error.response?.data?.message || error.message}`);
          }
        })
        .error(function(err) {
          console.log('LinkedIn login failed', err);
          alert('LinkedIn login failed. Please try again.');
        });
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-page">
      <div className="container" id="container">
        <div className={`form-container sign-up-container ${isOtpSent ? 'otp-sent' : ''}`}>
          <form onSubmit={isOtpVerified ? handleCompleteSignup : (isOtpSent ? handleVerifyOTP : handleSendOtp)}>
            <h1>{isOtpVerified ? 'Complete Signup' : (isOtpSent ? 'Verify OTP' : 'Create Account')}</h1>
            {!isOtpSent && (
              <>
                <div className="social-container">
                  {/* <button type="button" onClick={handleFacebookLogin} className="fsocial">
                    <i className="fab fa-facebook-f"></i>
                  </button> */}
                  <button type="button" onClick={handleGoogleLogin} className="gsocial">
                    <i className="fab fa-google"></i>
                  </button>
                  {/* <button type="button" onClick={handleLinkedInLogin} className="lsocial">
                    <i className="fab fa-linkedin-in"></i>
                  </button> */}
                </div>
                <span>or use your email for registration</span>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <button type="submit">Send OTP</button>
              </>
            )}
            {isOtpSent && !isOtpVerified && (
              <>
                <input
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
                <button type="submit">Verify OTP</button>
                <button type="button" onClick={handleResendOTP}>Resend OTP</button>
              </>
            )}
            {isOtpVerified && (
              <>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="checkbox-container">
                  <input type="checkbox" onChange={togglePasswordVisibility} id="showPassword" />
                  <label htmlFor="showPassword">Show Password</label>
                </div>
                <button type="submit">Complete Signup</button>
              </>
            )}
          </form>
        </div>
        <div className={`form-container sign-in-container ${isResetPassword ? 'reset-password' : ''}`}>
          <form onSubmit={isResetPassword ? (isOtpSent ? handleVerifyOTPForReset : handleRequestResetPassword) : handleLogin}>
            <h1>{isResetPassword ? (isOtpSent ? 'Verify OTP' : 'Reset Password') : 'Sign in'}</h1>
            {!isResetPassword && (
              <>
                <div className="social-container">
                  {/* <button type="button" onClick={handleFacebookLogin} className="fsocial">
                    <i className="fab fa-facebook-f"></i>
                  </button> */}
                  <button type="button" onClick={handleGoogleLogin} className="gsocial">
                    <i className="fab fa-google"></i>
                  </button>
                  {/* <button type="button" onClick={handleLinkedInLogin} className="lsocial">
                    <i className="fab fa-linkedin-in"></i>
                  </button> */}
                </div>
                <span>or use your account</span>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="checkbox-container">
                  <input type="checkbox" onChange={togglePasswordVisibility} id="showPasswordSignIn" />
                  <label htmlFor="showPasswordSignIn">Show Password</label>
                </div>
                <a href="#" onClick={handleForgotPasswordClick}>Forgot your password?</a>
                <button type="submit">Sign In</button>
              </>
            )}
            {isResetPassword && !isOtpSent && (
              <>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <button type="submit">Send OTP</button>
              </>
            )}
            {isResetPassword && isOtpSent && (
              <>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <div className="checkbox-container">
                  <input type="checkbox" onChange={togglePasswordVisibility} id="showPasswordReset" />
                  <label htmlFor="showPasswordReset">Show Password</label>
                </div>
                <button type="submit">Reset Password</button>
                <button type="button" onClick={handleResendOTP}>Resend OTP</button>
              </>
            )}
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button className="ghost" id="signIn" onClick={handleSignInClick}>Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" id="signUp" onClick={handleSignUpClick}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
