import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      'Authorization':'',
      'Set-Cookie':''
    }
  });


  instance.interceptors.request.use(
    (config: any) => {
        
     
      return config;
    },
    (error: any) => {
      return Promise.reject(error);
    }
  );

    instance.interceptors.response.use(
        (response: any) => {
           
        
        return response;
        },
        (error: any) => {
        return Promise.reject(error);
        }
    );