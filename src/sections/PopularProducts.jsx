import PopularProductCard from "../Components/PopularProductCard"
import { products } from "../Constants"

const PopularProducts = () => {
  return (
    <section id="products" className="
     max-container max-sm:mt-1
    ">
      <div className="flex flex-col justify-start gap-5">
       <h2 className="text-4xl font-palanquin
        font-bold
       "><span className="text-coral-red">Popular 
       </span> Products</h2>
       <p className="font-montserrat text-slate-gray
       mt-2 lg:max-w-xl"
       >The New Nikes are the epitome of 
        performance and style, designed to elevate your
        running experience to new heights. Crafted with
        precision and innovation, these shoes are a 
        favorite among athletes and fitness enthusiasts 
        alike.</p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3
      sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">  
        {products.map((product) => (
          <PopularProductCard key = {product.name} {...product}/>
        ))}
      </div>
    </section>
  )
}

export default PopularProducts
