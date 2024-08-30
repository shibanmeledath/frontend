import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Register = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (data.password !== data.confirmPassword) {
      console.error("Passwords do not match");
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:5156/register', {
        username: data.username,
        email: data.email,
        password: data.password
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(response.data);
      navigate('/login');
    } catch (error) {
      // Log detailed error information
      if (error.response) {
        console.error('Error response data:', error.response.data);
        console.error('Error response status:', error.response.status);
        console.error('Error response headers:', error.response.headers);
      } else if (error.request) {
        console.error('Error request data:', error.request);
      } else {
        console.error('Error message:', error.message);
      }
      console.error('Error config:', error.config);
    }
  }
  
  const handleOnchange = async (e) => {
    setdata({
      ...data,
      [e.target.name]: e.target.value
    })
  }
  const[data, setdata]=useState({
    username: '',
    email: '',
    password:'',
    confirmPassword: ''

  })
  return (
    <>
   
      <section className='bg-gray-100 h-screen flex justify-center items-center'>
  <section className='w-full max-w-md bg-white rounded-lg shadow-lg p-8'>
    <img 
      src={`${process.env.PUBLIC_URL}/logo192.png`}
      alt="Logo" 
      className='mx-auto mb-6 w-24 h-24'
    />
    <h2 className='text-center text-2xl font-semibold text-gray-700 mb-6'>Create your account</h2>
    
    <form onSubmit={handleSubmit}>
      <div className='mb-4'>
        <label className='block text-gray-600' htmlFor="username">Username</label>
        <input 
          className='w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500' 
          type="text"  
          id="username"
          name='username'
          required
          value={data.username}
          onChange={handleOnchange}
        />
      </div>
      <div className='mb-4'>
        <label className='block text-gray-600' htmlFor="email">Email</label>
        <input 
          className='w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500' 
          type="email"  
          id="email"
          required
          name='email'
          value={data.email}
          onChange={handleOnchange}
        />
      </div>
      <div className='mb-4'>
        <label className='block text-gray-600' htmlFor="password">Password</label>
        <input 
          className='w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500' 
          type="password"  
          id="password"
          required
          name='password'
          value={data.password}
          onChange={handleOnchange}
        />
      </div>
      <div className='mb-6'>
        <label className='block text-gray-600' htmlFor="confirmPassword">Confirm Password</label>
        <input 
          className='w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500' 
          type="password"  
          id="confirmPassword"
          required
          name='confirmPassword'
          value={data.confirmPassword}
          onChange={handleOnchange}
        />
      </div>
      <button 
        type="submit" 
        className='w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
      >
        Create Account
      </button>
    </form>
    
    <p className='text-center text-gray-600 mt-6'>
      Already have an account? <a href="/frontend/login" className='text-blue-500 hover:underline'>Login</a>
    </p>
  </section>
</section>

    </>
  )
}

export default Register
