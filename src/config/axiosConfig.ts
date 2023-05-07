import axios from 'axios';

const getToken = () => {
    const token = JSON.parse(localStorage.getItem('user') || '');
    return token?.token
}

const Axios = axios.create({
    baseURL: import.meta.env.VITE_BACKEND,
    // timeout: 5000,
    headers: {
        Authorization: getToken() 
    }
})

export default Axios;