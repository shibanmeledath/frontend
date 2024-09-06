import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate ,Link} from 'react-router-dom'
import api from '../api/Api'
const Register = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState(' ');
  const [issuccess, setIssuccess] = useState(false);
  useEffect(()=>{
    if(messages){
        const timer=setTimeout(()=>{
            setMessages(' ')
        },1000)
    return ()=>clearTimeout(timer)
    }
   }, [messages]);
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (data.password !== data.confirmPassword) {
      setMessages("Passwords do not match");
      setIssuccess(false);
      return;
    }
  
    try {
      const response = await api.post('/register', {
        username: data.username,
        email: data.email,
        password: data.password
      });
      if(response.data.status === "Success"){
        setMessages(response.data.message)
        setIssuccess(true);
        setTimeout(() => {
          navigate('/login');
        }, 1000);
       
      }
      else{
          setIssuccess(response.data.message);
          setIssuccess(false);
      }
     
    } catch (error) {
      setIssuccess(false);
      if (error.response && error.response.data && error.response.data.message) {
          setMessages(error.response.data.message);
      } else {
          setMessages("An error occurred during registeration.");
      }
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
   
      <section className='bg-gray-100 h-screen flex justify-center items-center text-black'>
  <section className='w-full max-w-md bg-white rounded-lg shadow-lg p-8'>
    <img 
      src={`${process.env.PUBLIC_URL}/logo192.png`}
      alt="Logo" 
      className='mx-auto mb-6 w-24 h-24'
    />
    <h2 className='text-center text-2xl font-semibold text-gray-700 mb-6'>Create your account</h2>
    <h3 className={`text-center ${issuccess ? 'text-green-600' : 'text-red-700'}`}>
  {messages}
</h3>
    <form onSubmit={handleSubmit}>
      <div className='mb-4'>
        <label className='block text-gray-600' htmlFor="username">Username</label>
        <input 
          className='w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500' 
          type="text"  
          id="username"
          name='username'
          autoComplete="current-username"
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
          autoComplete='current-email'
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
          autoComplete="new-password"
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
          autoComplete="new-password"
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
      Already have an account? <Link to="/login" className='text-blue-500 hover:underline'> Login</Link> 
    </p>
  </section>
</section>
  </>
  )
}

export default Register
