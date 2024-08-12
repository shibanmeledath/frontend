import image1 from '../../images/hero3.png'
const Home = () => {
  return (
    <>
        <div id='home' className="min-h-screen border-y border-b-0 border-green-300 flex flex-col text-white justify-between items-center lg:flex-row max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4 mb-4">
      <div className='  max-w-7xl h-96 mx-auto flex flex-col text-center justify-center my-auto '>
      <h1 className='font-extrabold text-4xl shadow-lg '> Welcome to <span className='text-green-400 ' >Corfoc</span>  technologies!!</h1>
      <div className='pt-4 mt-5'>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, voluptas!</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, obcaecati!</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, ullam.</p>
      </div>

      </div>
      <div className= ' bg-blue-800 bg-transparent max-w-7xl h-96 my-auto mx-auto flex flex-col text-center justify-center '>
      <img className=' h-auto w-auto' src={image1} alt="Example" />
      
    </div>      
       
 </div>
    </>
  )
}

export default Home
