import React, { useContext } from 'react'; // Import React and useContext hook
import { useState } from 'react'; // Import useState hook
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate for routing
import '../assets/css/form.css'; // Import CSS for the form
import Validation from '../Components/Validation'; // Import validation function
import axios from 'axios'; // Import axios for HTTP requests
import {toast} from 'react-toastify'; // Import toast for notifications
import { UserContext } from '../App'; // Import UserContext for user state

const Login = () => {
  const [values, setValues] = useState({ // State to hold input values
    email: '',
    password: ''
  });
  const {user, setUser} = useContext(UserContext); // Get user state from context
  const [errors,setErrors] = useState({}); // State for form validation errors
  const [serverErrors,setServerErrors] = useState([]); // State for server errors
  const navigate = useNavigate(); // Hook for navigation

  const handleInput = (event) => { // Function to handle input changes
    setValues({...values, [event.target.name]: event.target.value}); // Update state
  }

  const handleSubmit = (e) => {                                                   // Function to handle form submission
    e.preventDefault();                                                          // Prevent default form submission
    const errs= Validation(values);                                             // Validate input values
    setErrors(errs);                                                           // Update errors state
    if(errs.email === '' && errs.password === ''){                            // Check if there are no validation errors
      axios.post('http://127.0.0.1:3000/contactmsyt/login', values)           // Send POST request to login
      .then(res => {                                                           // On success
        if(res.data.success){                                                   // Check if login was successful
          toast.success("Login Successfully", {                                // Show success message
            position: "top-right",
            autoClose: 5000,
          });
          localStorage.setItem("token", res.data.token);                       // Store token in local storage
          setUser(res.data.user);                                              // Set user state
          navigate('/dashboard');                                                       // Navigate to home
        }
      }).catch(err => {                                                        // On error
        console.log(err);
        if(err.response.data.errors){ // Check if there are server errors
          setServerErrors(err.response.data.errors); // Update server errors state
        }else{
          console.log(err); // Log any other errors
        }
      });
    }
  }

  return (
    <div className='form-container'> {/* Container for the form */}
      <form className='form' onSubmit={handleSubmit}> {/* Form element */}
        <h2>Login</h2> {/* Form title */}
        <div className='form-group'> {/* Group for email input */}
          <label htmlFor='email' className='form-label'>Email:</label> {/* Email label */}
          <input 
            type='text' 
            name='email' 
            id='email'
            placeholder='Enter your email' 
            className='form-control'
            autoComplete='off'
            onChange={handleInput} // Handle input changes
          />
          {
            errors.email && <span className='error'>{errors.email}</span> // Display email error if exists
          }
        </div>
        <div className='form-group'> {/* Group for password input */}
          <label htmlFor='password' className='form-label'>Password:</label> {/* Password label */}
          <input 
            type='password' 
            name='password' 
            id='password' 
            placeholder='********' 
            className='form-control'
            onChange={handleInput} // Handle input changes
          />
          {
            errors.password && <span className='error'>{errors.password}</span> // Display password error if exists
          }
        </div>
        {
          serverErrors.length > 0 && ( // Check if there are server errors
              serverErrors.map((error,index) => ( // Map through server errors
                <p className='error' key={index}>{error.msg}</p> // Display each error message
              ))
            )  
        }
        <button className='form-btn'>Login</button> {/* Login button */}
        <p>Don't have an Account? <Link to="/register">Register</Link></p> {/* Link to register page */}
      </form>
    </div>
  );
};

export default Login; // Export Login component
