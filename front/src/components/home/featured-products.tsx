
import axios from '@/api/axios/axios'
import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import Loading from '../globalComponents/loading'
import Link from 'next/link'
import ProductCard from './product-cart'
import { Product } from "@/components/home/product-cart";


// const featuredProducts = [
//   { id: 1, name: 'T-Shirt', price: 19.99, image: 'https://fr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sac-a-dos-avenue--N40501_PM1_Worn%20view.png?wid=1090&hei=1090' },
//   { id: 2, name: 'Jeans', price: 49.99, image: 'https://fr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sac-fastline-messenger--M22482_PM1_Worn%20view.png?wid=1090&hei=1090' },
//   { id: 3, name: 'Jacket', price: 89.99, image: 'https://fr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sac-trio-messenger--M12490_PM1_Worn%20view.png?wid=1090&hei=1090' },
//   { id: 4, name: 'Sneakers', price: 69.99, image: 'https://fr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-porte-documents-voyage-nm--N40445_PM1_Worn%20view.png?wid=1090&hei=1090' },
// ]

const getProducts = async () => {
  const response = await axios.get('/products')
  if (!response.data) {
    throw new Error('an error occurred');
  }
  return response.data
}
 

export default function FeaturedProducts() {

  const [ featuredProducts, setFeaturedProducts ] = useState<Product[]>([])

useEffect(() => {
  getProducts()
    .then((fetchProducts) => {
      setFeaturedProducts(fetchProducts)
    })
    .catch((error) => {
      console.error(error)
    })
}, [])
const { isLoading } = useQuery({ queryKey: ['user'], queryFn: getProducts });
  if (isLoading) return <Loading />;
  

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
           
           <Link key={product._id} href={`/home/${product._id}`}>

              <ProductCard key={product._id} product={product} />
              </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

