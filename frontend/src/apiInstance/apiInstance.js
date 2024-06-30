import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://ineassignment-1.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
})


// request interceptor 

apiClient.interceptors.request.use(
    (config) => {
        const token= localStorage.getItem('token');
        if(token){
            config.headers.Authorization= `Bearer ${token}`
        }
        return config;
    },
    (error)=>{
        return Promise.reject(error);
    },

);

export default apiClient;