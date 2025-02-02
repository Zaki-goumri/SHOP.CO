'use client';"use strict";

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Trash2 } from 'lucide-react'
import { useToast } from "@/hooks/use-toast"
import axios from '@/api/axios/login'
import Loading from '../globalComponents/loading';
import { useSetAtom } from 'jotai';
import { cartAtom, isAuthorizedAtom } from '@/jotai/atom';
import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';

interface CartItem {
_id: string
  product: string
  unitPrice: number
  quantity: number,
  productTitle: string
}
interface ICartItems {
  items: CartItem[],
  status:string,
  totalAmount:number,
  _id:string

}

export function CartItems() {
  const [cartItems, setCartItems] = useState<ICartItems>()
  const setIsError = useSetAtom(cartAtom)
  const setIsAuth = useSetAtom(isAuthorizedAtom)

  const { push } = useRouter()

  const fetchCartItems = async () => {
      const response = await axios.get('/cart')

      if (!response) {
        throw new Error('Failed to fetch cart items')
      }

      const data = response?.data
      setCartItems(data)
      setIsError(null)
      return data
  }
  
  
  const { data,isLoading,isError } = useQuery({ queryKey: ['fetch cart'], queryFn: fetchCartItems })

  if (isLoading) {
    return <Loading/>
  }
  if (isError) {
    console.log(data)
      setIsAuth(data?.message || 'An error occurred')
      push('/signin')
  }

  const updateQuantity = async (id: string, newQuantity: number) => {
    try {
      const response = await axios.patch('/cart', {
      id, quantity: newQuantity 
      })
      if (!response) {
        throw new Error('Failed to update cart')
      }
      const data = await response.data
      setCartItems(data)
      setIsError(null)

    } catch (error) {
      setIsError((error as any)?.response?.data || 'An error occurred')
    }
  }

  const removeItem = async (id: string) => {
    try {
      const response = await axios.delete(`/cart/${id}`
      )
      if (!response) {
        throw new Error('Failed to remove item from cart')
      }
      const data = await response.data
      setCartItems(data)
      setIsError(null)
    } catch (error) {
      setIsError((error as any)?.response?.message || 'An error occurred')
      
    }
  }


  if (cartItems?.items.length === 0) {
    return <div>Your cart is empty.</div>
  }

  return (
    <Card className='w-[calc(100%-20%)] max-w-5xl'>
      <CardContent className="p-6 ">
        {cartItems?.items.map((item) => (
          <li key={item._id} className="flex justify-between items-center mb-4 pb-4 border-b">
            <div className="flex-grow">
              <h3 className="font-semibold">{item.productTitle}</h3>
              <p className="text-sm text-gray-600">${item.unitPrice.toFixed(2)}</p>
            </div>
            <div className="flex items-center space-x-4">
              <Input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => updateQuantity(item._id, parseInt(e.target.value))}
                className="w-20"
              />
              <p className="font-semibold">${}</p>
              <Button variant="ghost" size="icon" onClick={() => removeItem(item._id)}>
                <Trash2 className="h-5 w-5" />
              </Button>
            </div>
          </li>
        ))}
        <div className="mt-6 pt-6 border-t">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Subtotal</h3>
            <p className="text-lg font-semibold">${cartItems?.totalAmount.toFixed(2)}</p>
          </div>
          <div className="flex justify-between items-center mb-4 text-sm text-gray-600">
            <p>Shipping</p>
            <p>Calculated at checkout</p>
          </div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold">Total</h3>
            <p className="text-xl font-bold">${cartItems?.totalAmount.toFixed(2)}</p>
          </div>
        </div>
        <Button className="w-full mt-6">Proceed to Checkout</Button>

      </CardContent>
    </Card>
  )
}

