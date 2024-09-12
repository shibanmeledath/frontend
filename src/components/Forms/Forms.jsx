import React from 'react'
import { Link } from 'react-router-dom'
const Forms = ({issuccess,messages,title,children,onSubmit,buttonName}) => {
  return (
    <>
  <section className='bg-gray-100 h-screen flex justify-center items-center text-black'>
  <section className='w-full max-w-md bg-white rounded-lg shadow-lg p-8'>

    <img 
      src={`${process.env.PUBLIC_URL}/logo192.png`}
      alt="Logo" 
      className='mx-auto mb-6 w-24 h-24'
    />

    <h2 className='text-center text-2xl font-semibold text-gray-700 mb-6'>{title}</h2>
    <h3 className={`text-center ${issuccess ? 'text-green-600' : 'text-red-700'}`}>{messages}</h3>

<form onSubmit={onSubmit}>

{children}

<button 
  type="submit" 
  className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
  disabled={issuccess}
>
  {buttonName}
</button>
  {
    buttonName==="Login"? <p className="text-center text-gray-600 mt-6">
    Don't have an account? <Link to="/registration" className='text-blue-500 hover:underline'>Create One</Link> 
  </p>:<p className='text-center text-gray-600 mt-6'>
    Already have an account? <Link to="/login" className='text-blue-500 hover:underline'> Login</Link> 
  </p>
  }
  
</form>
</section>
</section>

      
    </>
  )
}

export default Forms
