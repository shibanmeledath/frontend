import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom'
const Login = () => {
  const navigate = useNavigate();
    const [data, setData] = useState({
        email: '',
        password: '',
    });

    const handleOnChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5156/login', {
                email: data.email,
                password: data.password,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log(response.data);
            navigate('/')
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
    };

    return (
        <section className="bg-gray-100 h-screen flex justify-center items-center">
            <section className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
                <img 
                    src={`${process.env.PUBLIC_URL}/logo192.png`} 
                    alt="Logo" 
                    className="mx-auto mb-6 w-24 h-24"
                />
                <h2 className="text-center text-2xl font-semibold text-gray-700 mb-6">Login to your account</h2>
                
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-600" htmlFor="email">Email</label>
                        <input 
                            className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" 
                            type="email"  
                            id="email"
                            required
                            name="email"
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
                    Don't have an account? <Link to="/registeration" className='text-blue-500 hover:underline'> Create One</Link> 
                </p>
            </section>
        </section>
    );
};

export default Login;
