"use client"
import React from 'react';
import { useState } from "react"
import axios from "@/api/axios/login"
import { serialize } from 'cookie';
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Alert from '@mui/material/Alert';
import Link from 'next/link';

const formSchema = z.object({
  firstName:z.string().min(1, "First name is required").max(50),
  lastName:z.string().min(1, "Last name is required").max(50),
  email: z.string().min(1, "Email is required").email("Invalid email address").max(50),
  password: z.string()
    .min(1, "Password is required")
    .min(8, "Password must be at least 8 characters long")
    .max(50),
    
})


export default function Page() {


const [confirmPassword, setConfirmPassword] = useState("");
const [registerationHandling, setRegisterationHandling]= useState("");
const { push } = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName:"",
      lastName:"",
      email: "",
      password: "",
    },  
  })

  const checkPassword = (password: string,confirmPassword:string) => {
    return (password == confirmPassword) 
  }

  function onSubmit(values: z.infer<typeof formSchema>) {
   if (!checkPassword(values.password,confirmPassword)){
    setRegisterationHandling("Passwords do not match");
    return;
   }
   const controller = new AbortController();
  axios.post(`/auth/register`, values
  )
  .then(response => {
    const { accessToken, refreshToken } = response.data;
      document.cookie = serialize('accessToken', accessToken, {
        httpOnly:false,
        expires: new Date(Date.now() +  24 * 60 * 60 * 1000) 
      });
      document.cookie = serialize('refreshToken', refreshToken, {
        httpOnly:false,
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
      });
    push(`/home`)
    })
    .catch(error => {
      setRegisterationHandling(error.response.data.message);
    })
  }
  
  return (
    <div className="flex justify-center items-center min-h-screen w-[calc(100%-30px)]  ">
      <div  className="bg-white p-12 rounded-lg shadow-lg w-full max-w-lg ">
        <h2 className="text-3xl font-bold mb-8 text-center">Sign Up </h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}  className="space-y-6">
          <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="First Name"
                      {...field}
                      className="border border-gray-300 rounded-md p-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                      />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Last Name"
                      {...field}
                      className="border border-gray-300 rounded-md p-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                      />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          
          
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Email"
                      {...field}
                      className="border border-gray-300 rounded-md p-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                      />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                  <div className="relative">
                    <Input
                    type="password"
                    placeholder="Password"
                    {...field}
                    className="border border-gray-300 rounded-md p-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full pr-12"
                    />

                  </div>
                  </FormControl>  
                  <FormMessage />
                </FormItem>
                )}
              />
              
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm Password"
                    className="border border-gray-300 rounded-md p-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full pr-12"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </FormControl>  
                  <FormMessage />
                </FormItem>
                              
            <Button type="submit" className="w-full bg-black text-white py-4 rounded-md hover:opacity-85">
              Sign Up
            </Button>
        {registerationHandling && <Alert severity="error" className='duration-100'> {registerationHandling}</Alert>}

            <FormLabel className="text-center block mt-4">
              Already have an account? <Link href="/signin" className="text-blue-500 hover:underline">Sign In</Link>
            </FormLabel>

          </form>
        </Form>
      </div>
    </div>
  )
}