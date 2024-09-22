import image1 from '../../images/hero3.png'
const Home = () => {
  return (
    <>
     <div
  id="home"
  className="min-h-screen flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-6 lg:px-8 py-12 space-y-12 lg:space-y-0 lg:space-x-8"
>

  <div className="flex-1 flex flex-col justify-center text-center lg:text-left">
  <div className='pt-6 sm:pt-8 md:pt-10 lg:pt-12'>
  <h1 className="font-extrabold text-4xl shadow-lg mt-4 sm:mt-8 md:mt-12 lg:mt-16 text-white">
  Welcome to <span className="text-green-400">Company</span> technologies!!
</h1>

</div>

    <div className="text-white space-y-4 mt-4">
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam,
        voluptas!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores,
        obcaecati!
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis,
        ullam.
      </p>
    </div>
  </div>

  <div className="flex-1 flex justify-center items-center">
    <img
      className="max-w-full h-auto object-contain"
      src={image1}
      alt="Example"
    />
  </div>
</div>

    </>
  )
}

export default Home
