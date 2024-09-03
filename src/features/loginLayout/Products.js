import React from 'react'

const Products = () => {
  return (
    <>
    <section className='text-black grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 m-1 max-w-7xl mx-auto'>
  {Array.from({ length: 30 }).map((_, index) => (
    <div key={index} className="border p-2  bg-amber-100">
      <p>Name {index + 1}</p>
      <p>Description</p>
      <p>Image {index + 1}</p>
    </div>
  ))}
</section>

    </>
  )
}

export default Products
