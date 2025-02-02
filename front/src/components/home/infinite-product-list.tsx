'use client'

import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { ProductCard } from '@/components/globalComponents/card'
import axios from '@/api/axios/axios'
import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link'


interface Product {
  _id: string
  title: string
  description: string
  price: number
  image: string
}

interface InfiniteProductListProps {
  initialProducts: Product[]
}

async function fetchMoreProducts(): Promise<Product[]> {
  const newProducts = axios.get(`/products`).then(res => res.data).catch(() => [])
  return newProducts
}


export function InfiniteProductList({ initialProducts }: InfiniteProductListProps) {
  const [products, setProducts] = useState<Product[]>(initialProducts)
  const [isLoading, setIsLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: '100px',
  })

  const loadMoreProducts = async () => {
    if (isLoading || !hasMore) return
    setIsLoading(true)
    try {
      const newProducts = await fetchMoreProducts()
      if (newProducts.length) {
        setProducts(prev => [...prev, ...newProducts])
      } else {
        setHasMore(false)
      }
    } catch (error) {
      console.error('Error loading more products:', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (inView) {
      loadMoreProducts()
    }
  }, [inView])

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link key={product._id+uuidv4()} href={`/home/${product._id}`}>
          <ProductCard  product={product} />
          </Link>
        ))}
      </div>
      {hasMore && <div ref={ref} className="h-10 mt-4"></div>}
      {!hasMore && <p className="text-center mt-8">No more products to load</p>}
    </div>
  )
}

