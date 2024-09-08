import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../api/Api'
import Inputs from './Inputs'
import Forms from './Forms'
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
  <Forms 
  title={"Create Your account"} 
  issuccess={issuccess} 
  messages={messages} 
  onSubmit={handleSubmit} 
  buttonName={"Register"}>
{

  <>
        <Inputs 
        label={"Username"}
        name={"username"}
        type={"text"}
        value={data.username}
        onchange={handleOnchange}
        />
        <Inputs 
        label={"Email"}
        name={"email"}
        type={"email"}
        value={data.email}
        onchange={handleOnchange}
        />
      <Inputs 
        label={"Password"}
        name={"password"}
        type={"password"}
        value={data.password}
        onchange={handleOnchange}
        />
        <Inputs 
        label={"Confirm Password"}
        name={"confirmPassword"}
        type={"password"}
        value={data.confirmPassword}
        onchange={handleOnchange}
        />
  </>
}
  </Forms>
   
  </>
  )
}

export default Register
