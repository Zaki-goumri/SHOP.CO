"use client"
import Categories from "@/components/home/categories";
import { InfiniteProductList } from "@/components/home/infinite-product-list";
import axios from "@/api/axios/axios";
import {  useEffect, useState } from "react";
import { Product } from "@/components/home/product-cart";
import { set } from "zod";

const ProductsPage = () => {

        const [initialProducts, setInitialProducts] = useState<Product[]>([])

    useEffect(() => {
      fetchMoreProducts().then(products => setInitialProducts(products))
    }, []);


    const fetchMoreProducts = async () => {
     try {
         const response = await axios.get('/products');
         return response.data;
     } catch (error) {
         console.error(error);
         return [];
     }

}
    return (
        <div>
            <Categories/>
            <h1 className="text-4xl font-semibold text-gray-900 mt-8  ml-5 mb-4">Products</h1>
        <InfiniteProductList initialProducts={initialProducts} />
        </div>
    );
    }
    export default ProductsPage;