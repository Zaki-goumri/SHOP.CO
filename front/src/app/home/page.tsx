"use client";'use strict'

import axios from "@/api/axios/axios";
import { isAuthorizedAtom, userAtom } from "@/jotai/atom";
import { useAtom, useAtomValue,useSetAtom } from "jotai";
import { useEffect} from "react";
import { useRouter } from "next/navigation";
import Loading from "@/components/globalComponents/loading";
import { useQuery } from "@tanstack/react-query";

export default function Page() {
 
  const [user,setUser] = useAtom(userAtom);
  const setIsAuthrized = useSetAtom(isAuthorizedAtom);
  const { push } = useRouter();

  async function fetchUser() {
      const response = await axios.get('/auth/user');
      if (!response.data) {
        throw new Error('');
      }   
      setUser(response.data);
      return response.data;
    }

  useEffect(() => {
    fetchUser().catch((error) => {
      push('/signin');
      setIsAuthrized(error.response?.data?.message || 'An error occurred try again');
    });
  }, []);

  const { isLoading, isError } = useQuery({ queryKey: ['user'], queryFn: fetchUser });
  if (isLoading) return <Loading />;
  // if (isError) return setIsAuthrized('You are not authorized');

  return (
    <main>
      <div>
        <h1>Hi {user.data.firstName}</h1>
        <h2>Welcome to your dashboard </h2>
      </div>
    </main>
  );
}