"use server"
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const products = [
    { id: 1, name: 'T-Shirt', price: 19.99, image: 'https://fr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sac-a-dos-avenue--N40501_PM1_Worn%20view.png?wid=1090&hei=1090', description: 'This is a t-shirt' },
    { id: 2, name: 'Jeans', price: 49.99, image: 'https://fr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sac-fastline-messenger--M22482_PM1_Worn%20view.png?wid=1090&hei=1090', description: 'This is a jeans' },
    { id: 3, name: 'Jacket', price: 89.99, image: 'https://fr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sac-trio-messenger--M12490_PM1_Worn%20view.png?wid=1090&hei=1090' , description: 'This is a jacket' },
    { id: 4, name: 'Sneakers', price: 69.99, image: 'https://fr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-porte-documents-voyage-nm--N40445_PM1_Worn%20view.png?wid=1090&hei=1090', description: 'This is a sneakers' },
]

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === Number(params.id))

  if (!product) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardContent className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative aspect-square">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover rounded-md"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                <p className="text-2xl font-semibold mb-4">${product.price.toFixed(2)}</p>
                <p className="text-gray-600 mb-6">{product.description }</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <label htmlFor="size" className="font-medium">Size:</label>
                  <select id="size" className="border rounded-md p-2">
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                  </select>
                </div>
                <Button className="w-full">Add to Cart</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

