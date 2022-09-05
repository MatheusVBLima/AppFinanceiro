import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://dtmoney-eight-eta.vercel.app/api',
   
});