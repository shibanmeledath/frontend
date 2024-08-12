import React from 'react'
import { HashLink } from 'react-router-hash-link'
const BackToTop = () => {
  return (
    <>
      <section className='w-10 h-10 bg-slate-800 fixed right-0 bottom-0'>
        <HashLink smooth to={'#home'}> 
            h
         </HashLink>
      </section>
    </>
  )
}

export default BackToTop
