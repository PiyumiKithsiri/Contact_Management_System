import React, { useContext } from 'react'; // Import React and useContext hook
import '../assets/css/Navbar.css'; // Import CSS for Navbar
import { Link } from 'react-router-dom'; // Import Link for navigation
import { UserContext } from '../App'; // Import UserContext for user state

const Navbar = () => {
  const {user} = useContext(UserContext); // Get user state from context
  return (
    <div className='navbar'> {/* Navbar container */}
      <div className='navbar-left'>
        <Link to="/" className='navbar-brand'> {/* Logo link to home */}
            CANTACT MS
        </Link>
      </div>
        <div className='navbar-right'> {/* Right side links */}
            <Link to="/about" className='navbar-link'>About</Link> {/* About link */}
            {
              user ? <> {/* If user is logged in */}
                <Link to="/dashboard" className='navbar-link'>Contact</Link> {/* Contact link */}
                <Link to="/register" className='navbar-link'>{user.name}</Link> {/* Display user name */}
                <Link to="/logout" className='navbar-link'>Logout</Link> {/* Logout link */}
              </>
              : <> {/* If user is not logged in */}
              <Link to="/login" className='navbar-link'>Login</Link> {/* Login link */}
              <Link to="/register" className='navbar-link'>Register</Link> {/* Register link */}
              </>
            }
        </div>
    </div>
  )
}

export default Navbar; // Export Navbar component
