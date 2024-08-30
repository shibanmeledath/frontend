import React from 'react'
import { useLocation } from 'react-router-dom';
import PageNotFound from './PageNotFound';
const Logined = () => {
    const location = useLocation();
    const { user} = location.state || {};
    const username=user?.username;
  return (
    <>
    {
        username ?
        (
            <div
  id="home"
  className="min-h-screen flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-6 lg:px-8 py-12 space-y-12 lg:space-y-0 lg:space-x-8"
>
                <h1>Welcome <span className='text-green-500'>{username} </span>!!!!</h1>
        </div>
    
    
    )
        
        : (<div> <PageNotFound/> </div>)
    }
      
     
    </>
  )
}

export default Logined
