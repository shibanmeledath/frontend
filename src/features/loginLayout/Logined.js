import React from 'react'
const Logined = () => {
  const user = JSON.parse(sessionStorage.getItem('user'));
  const username=user?.username;
  return (
   
    <>
    
        
  <div
  id="loginedhome"
  className="bg-white  flex flex-row  pt-20 justify-center  text-black font-bold text-2xl"
>
                <h1>Welcome <span className='text-green-500'> {username} </span>!!!!</h1>
        </div>
    
    

     
    </>
  )
}

export default Logined
