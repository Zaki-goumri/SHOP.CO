"use server"
import { notFound } from 'next/navigation'
import axios from '@/api/axios/axios'
import ProductCard from '@/components/home/product-cart'


async function getProduct(id: string) {
  const res = await axios.get(`products/${id}`)
  const result = res.data
  if (!result) {
    throw new Error('Product not found')
  }
  return result
}



export default async function ProductPage({ params }: { params: { id: string } }) {
  
  const { id } = await params
  const product = await getProduct(id)
  if (!product) {
    notFound()
  }
  product.id = id
  return (
      <div className="container w-[80%] mx-auto px-4 py-8">
          <ProductCard product={product} />
      </div>
  )
}

