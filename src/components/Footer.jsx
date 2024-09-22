import React from 'react'

const Footer = () => {
  const year=new Date().getFullYear();
  return (
    <>
      <p className='  flex justify-center align-middle py-3 '>Company@off {year} </p>
    </>
  )
}

export default Footer
