import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/form.css';
import axios from 'axios';
import {toast} from 'react-toastify';
import {FaAt, FaPhoneFlip, FaRegAddressCard, FaUserPlus} from 'react-icons/fa6';

const AddContact = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });
  const navigate = useNavigate();

  const handleInput = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  }
    const handleSubmit = (e) => {
      e.preventDefault();
      axios.post('http://127.0.0.1:3000/contactmsyt/add-contact',values, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then(res => {
        if(res.data.success){
          toast.success("Contact added Successfully",{
            position: "top-right",
            autoClose: 5000,
          });
          navigate('/dashboard');
        }
      }).catch(err => {
          console.log(err);
        });
      }
  return (
    <div className='add-form-container'>
      <form className='add-form'onSubmit={handleSubmit}>
        <h2>Create Contact</h2>
        <div className='form-group'>
            <FaUserPlus/>
          <input 
            type='text' 
            name='name' 
            id='name' 
            placeholder='Enter your name' 
            className='form-control'
            onChange={handleInput}
          />
        </div>
        <div className='form-group'>
            <FaAt/>
          <input 
            type='text' 
            name='email' 
            id='email'
            placeholder='Enter your email' 
            className='form-control'
            autoComplete='off'
            onChange={handleInput}
          />
        </div>
        <div className='form-group'>
            <FaPhoneFlip/>
          <input 
            type='text' 
            name='phone' 
            id='phone' 
            placeholder='Enter your phone number' 
            className='form-control'
            onChange={handleInput}
          />
        </div>
        <div className='form-group'>
            <FaRegAddressCard/>
          <input 
            type='text' 
            name='address' 
            id='address' 
            placeholder='Enter your Address' 
            className='form-control'
            onChange={handleInput}
          />
        </div>
        <button className='form-btn'>
          Add
        </button>
      </form>
    </div>
  )
}

export default AddContact;
