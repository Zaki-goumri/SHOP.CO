import axios from 'axios';
import { serialize } from 'cookie';


const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Authorization':'',
    'Set-Cookie':''
  }
});


instance.interceptors.request.use(
  (config: any) => {
    const access = document.cookie
   
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response: any) => {
    const refreshToken = response.headers["Set-Cookie"]
    console.log(refreshToken)
    return response;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

export default instance;


