"use client"

import { CartItems } from "@/components/cart/cart-items";
import { cartAtom } from "@/jotai/atom";
import { Alert } from "@mui/material";
import { useAtomValue } from "jotai";

const  Cart = () => {
    const isError= useAtomValue(cartAtom)
    return (
        <div className="flex flex-col justify-center items-center h-screen">
         {isError && <Alert className="mb-10 rounded-3xl w-1/3" severity="error">{isError}</Alert>} 
        <h1 className="text-3xl font-bold mb-10">Carts</h1>
            <CartItems />
        </div>
    )}
    
    export default Cart;