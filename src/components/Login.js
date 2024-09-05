import React, { useState, useEffect } from 'react';
import api from '../api/Api';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState('');
  const [issuccess, setIssuccess] = useState(false);
  const [data, setData] = useState({
    email: '',
    password: ''
  });

  useEffect(() => {
    if (messages) {
      const timer = setTimeout(() => {
        setMessages('');
      }, 3000); 
      return () => clearTimeout(timer);
    }
  }, [messages]);

  const handleOnChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const response = await api.post('/login', {
        email: data.email,
        password: data.password,
      });

      if (response.data.status === "Success") {
        setIssuccess(true);
        const user = response.data.data;  
        setMessages(response.data.message);
        sessionStorage.setItem('user', JSON.stringify(user));
        setTimeout(() => {
          navigate('/logined', { state: { user } });
        }, 1000);
      } else {
        setIssuccess(false);
        setMessages(response.data.message);
      }

    } catch (error) {
      setIssuccess(false);
      if (error.response && error.response.data && error.response.data.message) {
        setMessages(error.response.data.message);
      } else {
        setMessages("An error occurred during login.");
      }
    }
  };

  return (
    <section className="bg-gray-100 h-screen flex justify-center items-center text-black">
      <section className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <img 
          src={`${process.env.PUBLIC_URL}/logo192.png`} 
          alt="Logo" 
          className="mx-auto mb-6 w-24 h-24"
        />
        <h2 className="text-center text-2xl font-semibold text-gray-700 mb-6">Login to your account</h2>
        <h3 className={`text-center ${issuccess ? 'text-green-600' : 'text-red-700'}`}>
          {messages}
        </h3>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-600" htmlFor="email">Email</label>
            <input 
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" 
              type="email"  
              id="email"
              required
              name="email"
              autoComplete="current-email"
              value={data.email}
              onChange={handleOnChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600" htmlFor="password">Password</label>
            <input 
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" 
              type="password"  
              id="password"
              required
              name="password"
              autoComplete="current-password"
              value={data.password}
              onChange={handleOnChange}
            />
          </div>
          <button 
            type="submit" 
            className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Login
          </button>
        </form>
        
        <p className="text-center text-gray-600 mt-6">
          Don't have an account? <Link to="/registration" className='text-blue-500 hover:underline'>Create One</Link> 
        </p>
      </section>
    </section>
  );
};

export default Login;
