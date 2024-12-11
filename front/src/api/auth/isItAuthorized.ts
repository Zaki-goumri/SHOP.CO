"use server"
import axios from '@/api/axios/login'

export const isItAuthorized = async () => {
  const token = document.cookie
  .split('; ')
  .find((row) => row.startsWith('authToken='))
  ?.split('=')[1];
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
}