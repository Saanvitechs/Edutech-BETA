// // import React from 'react';
// // import Slider from 'react-slick';
// // import './Home.css'; // Add your styling here

// // const ReviewCarousel = () => {
// //   const reviews = [
// //     {
// //       name: "Shrey Agrawal",
// //       review: "My first experience with TREx was from their first seminar and since then, I have nothing but good things to say. From their guidance relating to industrial standards, on technical aspects, everything important was explained and helped in becoming better programmers.",
// //     },
// //     {
// //       name: "Pranav Manbhekar",
// //       // position: "Software Engineering at Pivotal",
// //       review: "Fantastic and various knowledge sessions helped me in my competitive coding and interview preparation. TREx was quite helpful as it helped to improve java development skills in a fun way and it also improved my coding culture.",
      
// //     },
// //     {
// //       name: "Sudhanshi Bhogal",
// //       // position: "SDE-1 at Amazon",
// //       review: "I took part in Courses developed and organized by TREx. Before taking these plans I was not able to solve even very simple coding problems. After receiving proper guidance, I improved a lot in few months.",
      
// //     },
// //     {
// //       name: "Ananya Mishra",
// //       review: "TREx has completely changed my perspective on learning. The structured approach and practical insights offered by their sessions have significantly improved my understanding of industry practices. The mentors are truly invested in your success.",
// //     },
// //     {
// //       name: "Rahul Verma",
// //       review: "Joining TREx was one of the best decisions I made during my career transition. The guidance and support provided throughout the training were exceptional. The real-world examples used in teaching were particularly helpful in bridging the gap between theory and practice.",
// //     },
// //     {
// //       name: "Priya Kapoor",
// //       review: "TREx offers an incredible learning experience. The sessions are well-organized, and the trainers are industry experts who share valuable knowledge. The hands-on approach really helped me apply what I learned and gain confidence in my skills.",
// //     },
// //     {
// //       name: "Saurabh Singh",
// //       review: "The TREx team is amazing! They are passionate about teaching and provide all the resources needed to succeed. The combination of theory and practical work made learning enjoyable and effective. I highly recommend TREx to anyone looking to advance their career.",
// //     },
// //     {
// //       name: "Kavya Sharma",
// //       review: "What I love about TREx is their commitment to providing top-notch education. The instructors are knowledgeable and approachable, making the learning process smooth and enjoyable. The focus on real-world applications has made a huge difference in my professional growth.",
// //     },
// //   ];

// //   const settings = {
// //     dots: true,
// //     infinite: true,
// //     speed: 300,
// //     slidesToShow: 3,
// //     slidesToScroll: 1,
// //     centerMode: false,
// //     centerPadding: '0',
// //     autoplay: true,
// //     autoplaySpeed: 3000,
// //     responsive: [
// //       {
// //         breakpoint: 1024,
// //         settings: {
// //           slidesToShow: 2,
// //         }
// //       },
// //       {
// //         breakpoint: 768,
// //         settings: {
// //           slidesToShow: 1,
// //           centerMode: false,
// //         }
// //       }
// //     ]
// //   };

// //   return (
// //     <div className="review-carousel">
// //       <h2>Stories to Inspire</h2>
// //       <Slider {...settings}>
// //         {reviews.map((review, index) => (
// //           <div key={index} className="review-card">
// //             <div className="review-content">
// //               <p>"{review.review}"</p>
// //               <div className="review-author">
// //                 <h3>{review.name}</h3>
// //                 <p>{review.position}</p>
// //               </div>
// //             </div>
// //           </div>
// //         ))}
// //       </Slider>
// //     </div>
// //   );
// // };

// // export default ReviewCarousel;


// import React from 'react';
// import Slider from 'react-slick';
// import './Home.css'; // Add your styling here

// const ReviewCarousel = () => {
//   const reviews = [
//     {
//       name: "Shrey Agrawal",
//       review: "My first experience with TREx was from their first seminar and since then, I have nothing but good things to say. From their guidance relating to industrial standards, on technical aspects, everything important was explained and helped in becoming better programmers.",
//     },
//     {
//       name: "Pranav Manbhekar",
//       review: "Fantastic and various knowledge sessions helped me in my competitive coding and interview preparation. TREx was quite helpful as it helped to improve java development skills in a fun way and it also improved my coding culture.",
//     },
//     {
//       name: "Sudhanshi Bhogal",
//       review: "I took part in Courses developed and organized by TREx. Before taking these plans I was not able to solve even very simple coding problems. After receiving proper guidance, I improved a lot in few months.",
//     },
//     {
//       name: "Ananya Mishra",
//       review: "TREx has completely changed my perspective on learning. The structured approach and practical insights offered by their sessions have significantly improved my understanding of industry practices. The mentors are truly invested in your success.",
//     },
//     {
//       name: "Rahul Verma",
//       review: "Joining TREx was one of the best decisions I made during my career transition. The guidance and support provided throughout the training were exceptional. The real-world examples used in teaching were particularly helpful in bridging the gap between theory and practice.",
//     },
//     {
//       name: "Priya Kapoor",
//       review: "TREx offers an incredible learning experience. The sessions are well-organized, and the trainers are industry experts who share valuable knowledge. The hands-on approach really helped me apply what I learned and gain confidence in my skills.",
//     },
//     {
//       name: "Saurabh Singh",
//       review: "The TREx team is amazing! They are passionate about teaching and provide all the resources needed to succeed. The combination of theory and practical work made learning enjoyable and effective. I highly recommend TREx to anyone looking to advance their career.",
//     },
//     {
//       name: "Kavya Sharma",
//       review: "What I love about TREx is their commitment to providing top-notch education. The instructors are knowledgeable and approachable, making the learning process smooth and enjoyable. The focus on real-world applications has made a huge difference in my professional growth.",
//     },
//   ];

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 100,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     centerMode: false,
//     centerPadding: '0',
//     autoplay: true,
//     autoplaySpeed: 1500,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//         }
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           centerMode: false,
//         }
//       },
//       {
//         breakpoint: 480, // For very small screens
//         settings: {
//           slidesToShow: 1,
//           centerMode: false,
//           dots: false, // Hide dots on very small screens
//           arrows: false, // Hide arrows on very small screens
//         }
//       }
//     ]
//   };

//   return (
//     <div className="review-carousel">
//       <h2>Stories to Inspire</h2>
//       <Slider {...settings}>
//         {reviews.map((review, index) => (
//           <div key={index} className="review-card">
//             <div className="review-content">
//               <p>"{review.review}"</p>
//               <div className="review-author">
//                 <h3>{review.name}</h3>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default ReviewCarousel;
import React, { useState } from 'react';
import { TextField, Button, Card, Typography, Grid, Box, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import './Register.module.css';
import authService from '../services/authService';
import Notification from './Notification';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [aadharPan, setAadharPan] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [backendError, setBackendError] = useState('');
  const [file, setFile] = useState(null);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [notificationOpen, setNotificationOpen] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!firstName) newErrors.firstName = "First Name is required";
    if (!lastName) newErrors.lastName = "Last Name is required";
    if (!username) newErrors.username = "Username is required";
    if (!email) newErrors.email = "Email is required";
    if (!phoneNumber) newErrors.phoneNumber = "Phone Number is required";
    if (!aadharPan) newErrors.aadharPan = "Aadhar/Pan Card is required";
    if (!password) newErrors.password = "Password is required";
    if (!confirmPassword) newErrors.confirmPassword = "Confirm Password is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (password !== confirmPassword) {
      setErrors({ confirmPassword: "Passwords do not match" });
      return;
    }

    try {
      const formData = new FormData();
      const userData = {
        firstName,
        lastName,
        username,
        email,
        phoneNumber,
        aadharPan,
        password
      };
      formData.append("userData", JSON.stringify(userData));
      if (file) {
        formData.append("file", file);
      }
      await authService.register(formData);
      
      setBackendError('');
      setNotificationMessage('User registered successfully!');
      setNotificationOpen(true);

      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setBackendError(error.response.data.message);
      } else {
        setBackendError("Registration failed. Please try again.");
      }
      setNotificationMessage('Registration failed. Please try again.');
      setNotificationOpen(true);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleCloseNotification = () => {
    setNotificationOpen(false);
  };

  return (
    <Grid 
      container 
      justifyContent="center" 
      alignItems="center" 
      className="register-container"
    >
      <Grid item xs={12} sm={8} md={4}>
        <Card raised className="register-form">
          <Typography variant="h4" className="title">
            Create New Account
          </Typography>
          {backendError && (
            <Typography variant="body2" color="error" style={{ marginBottom: '15px' }}>
              {backendError}
            </Typography>
          )}
          <form onSubmit={handleSubmit}>
            <Box mb={3}>
              <TextField
                fullWidth
                variant="outlined"
                label="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                error={!!errors.firstName}
                helperText={errors.firstName}
                className="input-group"
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                error={!!errors.lastName}
                helperText={errors.lastName}
                className="input-group"
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                error={!!errors.username}
                helperText={errors.username}
                className="input-group"
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!errors.email}
                helperText={errors.email}
                className="input-group"
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Phone"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                error={!!errors.phoneNumber}
                helperText={errors.phoneNumber}
                className="input-group"
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Aadhar/Pan Card"
                value={aadharPan}
                onChange={(e) => setAadharPan(e.target.value)}
                error={!!errors.aadharPan}
                helperText={errors.aadharPan}
                className="input-group"
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={!!errors.password}
                helperText={errors.password}
                className="input-group"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={togglePasswordVisibility}>
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Confirm Password"
                type={showPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword}
                className="input-group"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={togglePasswordVisibility}>
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <input
                accept="image/*"
                style={{ display: 'none' }}
                id="file-upload"
                type="file"
                onChange={handleFileChange}
              />
              <label htmlFor="file-upload">
                <Button 
                  variant="contained" 
                  component="span" 
                  style={{ 
                    marginTop: '10px', 
                    marginBottom: '15px', 
                    borderRadius: '8px', 
                    padding: '10px',
                    backgroundColor: '#1565C0',
                    color: '#fff' 
                  }}
                >
                  Upload Aadhar/Pan Image
                </Button>
              </label>
            </Box>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className="btn"
            >
              Sign Up
            </Button>
          </form>
          <Typography variant="body2" style={{ marginTop: '11px', color: '#212429' }}>
            Already Registered? <a href="/login" style={{ textDecoration: 'none', color: '#1565C0' }}>Login</a>
          </Typography>
        </Card>
      </Grid>
      
      {notificationOpen && (
        <Notification message={notificationMessage} onClose={handleCloseNotification} />
      )}
    </Grid>
  );
};

export default Register;
