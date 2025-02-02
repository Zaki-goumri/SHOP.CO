import { Product } from "@/components/home/product-cart";

import Image from 'next/image'
import { Card , CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'



export const ProductCard = ({product}:{product:Product}) => {
    return (
       <Card>
       <CardContent className="p-4">
          <Image
            loader={() => product.image }
            src={product.image}
            alt={product.title || 'Product Image'}
            width={100}
            height={0}
            style={{height:'auto', width:'100%'}}
            className="w-full h-48 object-cover rounded-md"
          />
          <h3 className="mt-2 text-lg font-semibold text-gray-900">{product.title}</h3>
          <p className="text-gray-600">${product.price.toFixed(2)}</p>
        </CardContent>
        <CardFooter>
          <Button className="w-full">See details</Button>
        </CardFooter>
        </Card>
    )
}

