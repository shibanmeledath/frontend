import React from 'react'

const Inputs = ({name,type,label,value,onchange}) => {
  return (<>
  <div className='mb-4'>
  <label className='block text-gray-600' htmlFor={name}>{label}</label>
  <input 
    className='w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
    type={type} 
    id={name}
    name={name}
    required
    value={value}
    onChange={onchange}
  />
  </div>
 
  </>
  
  )
}

export default Inputs
