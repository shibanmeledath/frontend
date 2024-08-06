import image1 from '../../images/hero3.png'
const Home = () => {
  return (
    <>
      <main className=''>
      <div className="h-screen border-y border-green-300 flex   flex-col text-white   justify-between itms-center lg:flex-row  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className='  max-w-7xl h-96 mx-auto flex flex-col text-center justify-center my-auto '>
      <h1 className='font-extrabold text-4xl '> Welcome to <span className='text-green-400' >Corfoc</span>  technologies!!</h1>
      <div className='pt-4 mt-5'>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, voluptas!</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, obcaecati!</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, ullam.</p>
      </div>

      </div>
      <div className= ' bg-blue-800 bg-transparent max-w-7xl h-96 my-auto mx-auto flex flex-col text-center justify-center '>
      <img className='py-auto e ' src={image1} alt="Example" />
      
      </div>
    
          
         {/*  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius repellendus, soluta ullam voluptatum deleniti ipsa quos, aut omnis error veniam doloribus commodi at cum ut mollitia quod fugit totam architecto.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium vel, consequatur hic laudantium eveniet aut excepturi cumque voluptas adipisci, modi architecto aperiam sed incidunt quidem delectus quae error atque placeat?</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, optio architecto. Quos qui officia dolorem, quam sequi magni, consequuntur, eius libero ratione illum eaque perferendis cupiditate possimus aspernatur at? Esse.</p> */}
        </div>
        <div className=" text-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-h-fit py-4">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, laudantium saepe. At a sunt quos corporis ea, temporibus ullam labore vel delectus eos, est excepturi cupiditate sit deleniti odio harum?</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis quia commodi perferendis deserunt exercitationem corrupti debitis, modi consequatur harum deleniti doloribus, possimus pariatur vero est ex laudantium similique eius unde!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius repellendus, soluta ullam voluptatum deleniti ipsa quos, aut omnis error veniam doloribus commodi at cum ut mollitia quod fugit totam architecto.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium vel, consequatur hic laudantium eveniet aut excepturi cumque voluptas adipisci, modi architecto aperiam sed incidunt quidem delectus quae error atque placeat?</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, optio architecto. Quos qui officia dolorem, quam sequi magni, consequuntur, eius libero ratione illum eaque perferendis cupiditate possimus aspernatur at? Esse.</p>
        </div>
      </main>
    </>
  )
}

export default Home
