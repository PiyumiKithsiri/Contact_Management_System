import React from 'react'; // Import React
import Navbar from '../Components/Navbar'; // Import Navbar component
import '../assets/css/Home.css'; // Import CSS for Home page

const Home = () => {
  return (
    <>
    <Navbar/> {/* Render Navbar */}
        <div className='home'> {/* Home container */}
            <h1 className='home-title'>CONTACT MANAGEMENT SYSTEM</h1> {/* Main title */}
            <p className='home-description'> {/* Description paragraph */}
                Start Collecting your contacts in a very smarter way.
                We provide very efficient and smarter way to handle contacts.
            </p>
        </div>
    </>
  )
}

export default Home; // Export Home component
