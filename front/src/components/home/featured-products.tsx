import Image from 'next/image'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import axios from '@/api/axios/axios'
import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import Loading from '../globalComponents/loading'

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
 interface Product {
  id: number
  name: string
  price: number
  image: string
  _id: string
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
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Card key={product._id}>
              <CardContent className="p-4">
                <Image
                  loader={() => product.image }
                  src={product.image}
                  alt={product.name || 'Product Image'}
                  width={0}
                  height={0}
                  style={{height:'auto', width: 'auto'}}
                  className="w-full h-48 object-cover rounded-md"
                />
                <h3 className="mt-2 text-lg font-semibold text-gray-900">{product.name}</h3>
                <p className="text-gray-600">${product.price.toFixed(2)}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Add to Cart</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

