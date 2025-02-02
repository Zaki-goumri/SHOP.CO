"use client";"use strict";
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Image from 'next/image';
import axios from '@/api/axios/login';    
import { useMutation, useQuery, QueryClient } from '@tanstack/react-query';
import { Alert } from '@mui/material';
       
export interface Product {
    image: string;
    title: string;
    price: number;
    description: string;
    _id: string;
}

interface sentData {
    quantity: number;
    size: string;
    color: string;
}

const queryClient = new QueryClient();

const ProductCard = ({ product }: { product: Product }) => {

    const [productData, setProductData] = React.useState({quantity: 1, size: 'small', color: 'black'});
    const [result, setResult] = React.useState<{message: string, severity: 'error' | 'info' | 'success' | undefined }>({message:'',severity: undefined});


    const onChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        if(e.target.name == 'quantity'){
           const value = parseInt(e.target.value);
            setProductData({ ...productData, quantity: value });
            return
        }
        setProductData({ ...productData, [e.target.name]: e.target.value });
    }
    

    const addToCartMutation = useMutation({
      mutationFn: (productData:sentData) => 
        axios.post(`/cart/${product._id}`, productData).then(res => res.data),
      onSuccess: () => {
        setResult({ message: 'Product added to cart', severity: 'success' })

        queryClient.invalidateQueries({ queryKey: ['cart'] })
      },
      onError: () => {
        setResult({ message: 'An error occurred', severity: 'error' })
      }
    })
    


    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget
          addToCartMutation.mutate(productData)
      }

    return(
        <div>
           {result.message && <Alert className='mb-4' severity={result.severity}>{result.message}</Alert>}

          <Card>
            <CardContent className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative aspect-square">
              <Image
                src={product.image}
                alt={product.title || 'Product Image'}
                fill
                className="rounded-md"
              />
            </div>
            <div className="flex flex-col justify-between ">
              <div >
                <h1 className="text-4xl font-bold mb-2">{product.title}</h1>
                <p className="text-2xl font-semibold mb-4">${product.price.toFixed(2)}</p>
                <p className="text-gray-600 mb-6">{product.description }</p>
              </div>
              <form  onSubmit={onSubmit}  className="space-y-4">
                <div className="flex items-center space-x-4 justify-around">
                  <label htmlFor="size" className="font-medium">Size:</label>
                  <select name="size" defaultValue="small" className="border rounded-md p-2"  
                  onChange={onChange}
                  >
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                  </select>
               
                <label htmlFor="quantity" className="font-medium">Quantity:</label>
                <input
                 onChange={(e) => onChange(e as React.ChangeEvent<HTMLInputElement>)}
                 name='quantity'
                  type="number"
                  defaultValue="1"
                  min="1"
                  className="border rounded-md p-2 w-20"
                />
                <label htmlFor="color" className="font-medium">Color:</label>
                <select name="color" className="border rounded-md p-2" 
                onChange={onChange}
                defaultValue="black"
                >
                  <option value="black">Black</option>
                  <option value="white">White</option>
                  <option value="red">Red</option>
                </select>
                </div >
                <button type="submit" className=' w-full shadow bg-white-500 hover:bg-white-700 text-center font-semibold py-3 px-4 rounded' >Add to Cart</button>
              </form>
            </div>
          </div>
        </CardContent>
      </Card>
      </div>
        )}

        export default ProductCard;