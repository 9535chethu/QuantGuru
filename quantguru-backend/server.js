// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const morgan = require('morgan');
// const nodemailer = require('nodemailer');
// const passport = require('passport');
// const session = require('express-session');
// const GoogleStrategy = require('passport-google-oauth20').Strategy;
// require('dotenv').config();


// const authenticateJWT = require('./authMiddleware'); 


// const app = express();
// const port = process.env.PORT || 5000;

// app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
// app.use(express.json());
// app.use(morgan('dev'));
// app.use(passport.initialize());

// // Add express-session middleware
// app.use(session({
//   secret: process.env.SESSION_SECRET || 'your_session_secret',
//   resave: false,
//   saveUninitialized: false,
//   cookie: { secure: process.env.NODE_ENV === 'production' }
// }));

// app.use(passport.initialize());
// app.use(passport.session());

// // Serialize user for the session
// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });

// // Deserialize user from the session
// passport.deserializeUser(async (id, done) => {
//   try {
//     const user = await User.findById(id);
//     done(null, user);
//   } catch (error) {
//     done(error);
//   }
// });


// mongoose.connect(process.env.MONGODB_URI, {
//   // useNewUrlParser: true,
//   // useUnifiedTopology: true,
//   serverSelectionTimeoutMS: 30000, // Increase the timeout to 30 seconds
//   socketTimeoutMS: 45000, // Increase socket timeout to 45 seconds
// })
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.error('MongoDB connection error:', err));

// const TempUserSchema = new mongoose.Schema({
//   email: { type: String, required: true, unique: true },
//   otp: { type: String },
//   otpExpires: { type: Date }
// });

// const TempUser = mongoose.model('TempUser', TempUserSchema);

// const UserSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: function() { 
//     return !this.googleId && !this.facebookId && !this.linkedinId; 
//   }},
//   googleId: { type: String, unique: true, sparse: true },
//   facebookId: { type: String, unique: true, sparse: true },
//   linkedinId: { type: String, unique: true, sparse: true },
//   otp: { type: String },
//   otpExpires: { type: Date }
// });

// const User = mongoose.model('User', UserSchema);
// const generateToken = (user) => {
//   return jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
// };

// passport.use(new GoogleStrategy({
//   clientID: process.env.GOOGLE_CLIENT_ID,
//   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//   callbackURL: "http://localhost:5000/auth/google/callback"
// },
// async (accessToken, refreshToken, profile, done) => {
//   try {
//     // First, try to find a user with the Google ID
//     let user = await User.findOne({ googleId: profile.id });
    
//     if (!user) {
//       // If no user found with Google ID, check if a user exists with the email
//       user = await User.findOne({ email: profile.emails[0].value });
      
//       if (user) {
//         // If a user with this email exists, update their Google ID
//         user.googleId = profile.id;
//         await user.save();
//       } else {
//         // If no user exists with this email, create a new user
//         user = new User({
//           googleId: profile.id,
//           name: profile.displayName,
//           email: profile.emails[0].value
//         });
//         await user.save();
//       }
//     }
    
//     return done(null, user);
//   } catch (error) {
//     return done(error, null);
//   }
// }));

// app.post('/link-google-account', authenticateJWT, async (req, res) => {
//   try {
//     const { googleId } = req.body;
//     const userId = req.user.id;

//     const user = await User.findById(userId);
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     user.googleId = googleId;
//     await user.save();

//     res.json({ message: 'Google account linked successfully' });
//   } catch (error) {
//     console.error('Error linking Google account:', error);
//     res.status(500).json({ message: 'Error linking Google account', error: error.message });
//   }
// });

// app.get('/auth/google',
//   passport.authenticate('google', { scope: ['profile', 'email'] }));

// app.get('/auth/google/callback',
//   passport.authenticate('google', { failureRedirect: '/login' }),
//   (req, res) => {
//     const token = generateToken(req.user);
//     res.redirect(`http://localhost:5173/oauth2/redirect/google?token=${token}`);
//   });

// app.post('/signup', async (req, res) => {
//   try {
//     const { name, email, password } = req.body;
//     console.log('Signup attempt with data:', { name, email, password });  // Log the request data

//     if (!name || !email || !password) {
//       console.log('Missing fields:', { name, email, password });
//       return res.status(400).json({ message: 'Please fill out all fields' });
//     }

//     const tempUser = await TempUser.findOne({ email });
//     if (!tempUser) {
//       return res.status(400).json({ message: 'Please verify your email first' });
//     }

//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       console.log('Email already in use:', email);
//       return res.status(400).json({ message: 'Email already exists' });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = new User({ name, email, password: hashedPassword });

//     const savedUser = await newUser.save();
//     console.log('New user created:', savedUser.email);

//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: email,
//       subject: 'Congratulations on Joining Quant Guru!',
//       text: `Dear ${name},\n\nWe are thrilled to welcome you to Quant Guru, where we make "Quantitative Aptitude Made Easy" a reality. Your decision to join us marks the beginning of an exciting journey towards mastering quantitative skills that are crucial for interviews and competitive examinations.\n\nThank you for choosing Quant Guru. We look forward to helping you achieve your goals and excel in your quantitative journey.\n\nHere is your password for future reference: ${password}. Please do not share this password with anyone as it is confidential.\n\nBest regards,\nTeam Quant Guru`
//     };

//     await transporter.sendMail(mailOptions);

//     await TempUser.deleteOne({ email });

//     const token = generateToken(savedUser);
//     res.status(201).json({ token, user: savedUser, message: 'User created successfully' });
//   } catch (error) {
//     console.error('Signup error:', error);
//     res.status(500).json({ message: 'Error creating user', error: error.message });
//   }
// });

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS
//   },
//   debug: true,
//   logger: true
// });

// transporter.verify(function(error, success) {
//   if (error) {
//     console.log('Transporter verification error:', error);
//   } else {
//     console.log('Server is ready to take our messages');
//   }
// });

// app.post('/send-otp', async (req, res) => {
//   try {
//     const { email } = req.body;
//     let tempUser = await TempUser.findOne({ email });
    
//     if (!tempUser) {
//       tempUser = new TempUser({ email });
//     }
    
//     const otp = Math.floor(100000 + Math.random() * 900000).toString();
//     const otpExpires = new Date(Date.now() + 5 * 60 * 1000);
    
//     tempUser.otp = otp;
//     tempUser.otpExpires = otpExpires;
//     await tempUser.save();
    
//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: email,
//       subject: 'Your OTP for Email Verification',
//       text: `Your OTP is: ${otp}. It will expire in 5 minutes.`
//     };
    
//     const info = await transporter.sendMail(mailOptions);
//     console.log('Email sent: ', info.response);
    
//     res.json({ message: 'OTP sent successfully. Please check your email.' });
//   } catch (error) {
//     console.error('Sending OTP error:', error);
//     res.status(500).json({ message: 'Error sending OTP', error: error.message });
//   }
// });

// app.post('/verify-otp', async (req, res) => {
//   try {
//     const { email, otp } = req.body;
//     const tempUser = await TempUser.findOne({ email });

//     if (!tempUser) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     if (tempUser.otp !== otp || tempUser.otpExpires < new Date()) {
//       return res.status(400).json({ message: 'Invalid OTP or OTP expired. Please request a new OTP.' });
//     }

//     tempUser.otp = undefined;
//     tempUser.otpExpires = undefined;
//     await tempUser.save();

//     res.json({ message: 'Email verified successfully. Proceed with signup.' });
//   } catch (error) {
//     console.error('OTP verification error:', error);
//     res.status(500).json({ message: 'Error verifying OTP', error: error.message });
//   }
// });

// app.post('/request-reset-password', async (req, res) => {
//   try {
//     const { email } = req.body;
//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     const otp = Math.floor(100000 + Math.random() * 900000).toString();
//     const otpExpires = new Date(Date.now() + 5 * 60 * 1000);

//     user.otp = otp;
//     user.otpExpires = otpExpires;
//     await user.save();

//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: email,
//       subject: 'Your OTP for Password Reset',
//       text: `Your OTP is: ${otp}. It will expire in 5 minutes.`
//     };

//     await transporter.sendMail(mailOptions);

//     res.json({ message: 'OTP sent successfully. Please check your email.' });
//   } catch (error) {
//     console.error('Request password reset error:', error);
//     res.status(500).json({ message: 'Error requesting password reset', error: error.message });
//   }
// });

// app.post('/reset-password', async (req, res) => {
//   try {
//     const { email, otp, name, newPassword } = req.body;
//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     if (user.otp !== otp || user.otpExpires < new Date()) {
//       return res.status(400).json({ message: 'Invalid OTP or OTP expired. Please request a new OTP.' });
//     }

//     user.name = name;
//     user.password = await bcrypt.hash(newPassword, 10);
//     user.otp = undefined;
//     user.otpExpires = undefined;
//     await user.save();

//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: email,
//       subject: 'Password and Name Updated Successfully',
//       text: `Hi ${name},\n\nYour password and name have been successfully updated. Please use the new password for future logins.\n\nBest regards,\nTeam Quant Guru`
//     };

//     await transporter.sendMail(mailOptions);

//     res.json({ message: 'Password reset successfully. You can now log in with your new credentials.' });
//   } catch (error) {
//     console.error('Reset password error:', error);
//     res.status(500).json({ message: 'Error resetting password', error: error.message });
//   }
// });

// app.post('/login', async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     console.log('Login attempt for:', email);

//     const user = await User.findOne({ email });
//     if (!user) {
//       console.log('Invalid email', email);
//       return res.status(400).json({ message: 'Invalid email or password' });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       console.log('Invalid password:', email);
//       return res.status(400).json({ message: 'Invalid email or password' });
//     }

//     const token = generateToken(user);
//     console.log('Login successful for:', email);
//     res.json({ token, user: { id: user._id, name: user.name, email: user.email }, message: 'Login successful' });
//   } catch (error) {
//     console.error('Login error:', error);
//     res.status(500).json({ message: 'Login failed', error: error.message });
//   }
// });

// app.get('/user', async (req, res) => {
//   try {
//     const token = req.headers.authorization.split(' ')[1];
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     const user = await User.findById(decoded.id).select('-password');
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     res.json(user);
//   } catch (error) {
//     console.error('User retrieval error:', error);
//     res.status(401).json({ message: 'Not authorized', error: error.message });
//   }
// });

// app.get('/test-db', async (req, res) => {
//   try {
//     await mongoose.connection.db.admin().ping();
//     res.json({ message: 'Database connection successful' });
//   } catch (error) {
//     console.error('Database test error:', error);
//     res.status(500).json({ message: 'Database connection failed', error: error.message });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });

