import { useState } from "react";
const BASE_URL = import.meta.env.VITE_BASE_URL

export const useFetchUser = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [data, setData] = useState({})

    const fetchFunc = async () => {
        try {
            setIsLoading(true)
            const response = await fetch(`${BASE_URL}/api/v1/user/get`, { credentials: "include" });
            if (!response) {
                setIsLoading(false)
                throw new Error('Failed to fetch user');
            }
            setIsSuccess(true)
            const res = await response.json();
            setData(res)
        } catch (error) {
            console.log('Error fetching User:', error);
            setIsSuccess(false)
            setIsLoading(false)
        }
        finally {
            setIsLoading(false)
        }
    }
    return { data, isLoading, isSuccess, fetchFunc }
};

export const useLoginUser = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [data, setData] = useState({})

    const postFunc = async () => {
        try {
            setIsLoading(true)
            const response = await fetch(`${BASE_URL}/api/v1/login`, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user),
                credentials: "include"
            });
            if (!response) {
                throw new Error('Failed to log in');
            }
            setIsLoading(false)
            setIsSuccess(true)
            const res = await response.json();
            setData(res)
        } catch (error) {
            console.error('Error Logining in:', error);
            setIsSuccess(false)
            setIsLoading(false)
        }
        finally {
            setIsLoading(false)
        }
    }
    return { data, isLoading, isSuccess, postFunc }
};

export const useSignUpUser = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [data, setData] = useState({})

    const postFunc = async (user) => {
        try {
            setIsLoading(true)
            const response = await fetch(`${BASE_URL}/api/v1/signup`, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user),
                credentials: "include"
            });
            if (!response) {
                throw new Error('Failed to fetch wishlist');
            }
            setIsLoading(false)
            setIsSuccess(true)
            const res = await response.json();
            setData(res)
        } catch (error) {
            console.error('Error fetching wishlist:', error);
            setIsSuccess(false)
            setIsLoading(false)
        }
        finally {
            setIsLoading(false)
        }
    }
    return { data, isLoading, isSuccess, postFunc }
};