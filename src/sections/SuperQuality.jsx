import Button from "../Components/Button"
import { arrowRight } from "../assets/icons"
import { shoe8 } from "../assets/images"

const SuperQuality = () => {
  return (
   <section id='about-us'
   className="flex justify-between items-center max-lg:flex-col
   gap-10 w-full max-container"
   >

   <div className="flex flex-1 flex-col">
   
    <h2 className='font-palanquin text-4xl capitalize
    font-bold lg:max-w-lg'>
      We Provide You <span
      className='bg-gradient-to-r from-indigo-500
       via-purple-500 to-pink-500 text-transparent 
       bg-clip-text'
      >Super </span>
      <span
      className='bg-gradient-to-r from-indigo-500
      via-purple-500 to-pink-500 text-transparent 
      bg-clip-text'
      >Quality </span>Shoes
    </h2>
    <p
      className='mt-4 lg:max-w-lg info-text'
    >Ensuring premium comfort and style , our meticulously
    crafted footwear is designed to elevate your experience , 
    providing you with unmatched quality , innovation , and 
    a touch of elegance</p>
    
    <div className="mt-11">
    <button className="bg-gradient-to-r from-indigo-500
       via-purple-500 to-pink-500 px-7 py-5 rounded-full 
       text-xl font-montserrat">Shop Now</button>
    </div>
   </div>

   <div className="flex-1 flex justify-center 
   items-center">
    <img
     src={shoe8}
     alt="shoe8"
     width={570}
     height={522}
     className="object-contain hover:scale-105 hover:transition hover:shadow-sm"
    />
   </div> 

   </section>
  )
}

export default SuperQuality
