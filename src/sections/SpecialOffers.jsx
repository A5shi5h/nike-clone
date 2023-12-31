import Button from "../Components/Button"
import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"

const SpecialOffers = () => {
  return (
   
    <section className="flex justify-wrap items-center
    max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
         src={offer}
         width={773}
         height={687}
         className="object-contain w-full"
        />
      </div>

  <div className="flex flex-1 flex-col">
   
    <h2 className='font-palanquin text-4xl capitalize
    font-bold lg:max-w-lg'>
      <span
      className='text-coral-red '
      >Special </span> Offers
    </h2>
    <p
      className='mt-4 lg:max-w-lg info-text'
    >Navigate a realm of possibilitiesd designed to
    fulfill your unique desires , surpassing the loftiest 
    expectations . Your journey with us is nothing short 
    of exceptional.</p>
    
    <div className="mt-11 flex gap-4">
    <Button  label="Explore" iconUrl={arrowRight}/>
    <Button label="Learn More "
     backgroundColor="border-slate-gray"
     textColor="text-slate-gray"
    />
    </div>
   </div>
    </section>
  )
}

export default SpecialOffers
