import Image from 'next/image'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const featuredProducts = [
  { id: 1, name: 'T-Shirt', price: 19.99, image: '/placeholder.svg?height=200&width=200' },
  { id: 2, name: 'Jeans', price: 49.99, image: '/placeholder.svg?height=200&width=200' },
  { id: 3, name: 'Jacket', price: 89.99, image: '/placeholder.svg?height=200&width=200' },
  { id: 4, name: 'Sneakers', price: 69.99, image: '/placeholder.svg?height=200&width=200' },
]

export default function FeaturedProducts() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Card key={product.id}>
              <CardContent className="p-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={200}
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

