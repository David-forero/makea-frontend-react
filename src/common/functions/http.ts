import Axios from "../../config/axiosConfig";
import {ERROR_UNKNOWN} from '../constants/messages';

const get = async (url: string) => { 
    try {
        return await Axios.get(url);

    } catch (error: any) {
        console.error( '❌ Error ->',error);
        if (error.response.data.status) {
            return {data: {
                status: error.response.data.status, message: error.response.data.message, data: false
            }}
        }
        return {data: {status: 500, message: ERROR_UNKNOWN, data: false}}
    }
}

const post = async (url: string, data: any) =>{
    try {
        return await Axios.post(url, data);

    } catch (error: any) {
        console.error( '❌ Error ->',error);
        if (error.response.data.status) {
            return {data: {
                status: error.response.data.status, message: error.response.data.message, data: false
            }}
        }
        return {data: {status: 500, message: ERROR_UNKNOWN, data: false}}
    }
}

const put = async (url: string, data: any) =>{
    try {
        return await Axios.get(url, data);

    } catch (error: any) {
        console.error( '❌ Error ->',error);
        if (error.response.data.status) {
            return {data: {
                status: error.response.data.status, message: error.response.data.message, data: false
            }}
        }
        return {data: {status: 500, message: ERROR_UNKNOWN, data: false}}
    }
}

const patch = async (url: string, data: any) =>{
    try {
        return await Axios.patch(url, data);

    } catch (error: any) {
        console.error( '❌ Error ->',error);
        if (error.response.data.status) {
            return {data: {
                status: error.response.data.status, message: error.response.data.message, data: false
            }}
        }
        return {data: {status: 500, message: ERROR_UNKNOWN, data: false}}
    }
}

const delet = async (url: string, data: any) =>{
    try {
        return await Axios.delete(url, data);

    } catch (error: any) {
        console.error( '❌ Error ->',error);
        if (error.response.data.status) {
            return {data: {
                status: error.response.data.status, message: error.response.data.message, data: false
            }}
        }
        return {data: {status: 500, message: ERROR_UNKNOWN, data: false}}
    }
}


export {
    get,
    post,
    put,
    patch,
    delet
}