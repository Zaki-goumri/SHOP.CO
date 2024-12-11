"use client";'use strict'

import axios from "@/api/axios/login";
import { isAuthorizedAtom, userAtom } from "@/jotai/atom";
import { useAtom,useSetAtom } from "jotai";
import { useEffect} from "react";
import { useRouter } from "next/navigation";
import Loading from "@/components/globalComponents/loading";
import { useQuery } from "@tanstack/react-query";
import  Categories  from "@/components/home/categories";
import FeaturedProducts from "@/components/home/featured-products";


export default function Page() {
 
  const [user,setUser] = useAtom(userAtom);
  const setIsAuthrized = useSetAtom(isAuthorizedAtom);
  const { push } = useRouter();

  async function fetchUser() {
      const response = await axios.get('/auth/user');
      if (!response.data) {
        throw new Error('Unauthorized');
      }
      setUser(response.data); 
      return response.data;
    }

  useEffect(() => {
    fetchUser().catch((error) => {
      push('/signin');
      setIsAuthrized(error.response?.data?.message || 'An error occurred');
    });
  }, []);

  const { isLoading, isError } = useQuery({ queryKey: ['user'], queryFn: fetchUser });
  if (isLoading) return <Loading />;

  return (
    <main>
      <div>
        <Categories />
        <FeaturedProducts />
      </div>
    </main>
  );
}