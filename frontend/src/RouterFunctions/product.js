import { useState } from "react";

const BASE_URL = import.meta.env.VITE_BASE_URL

export const useFetchProducts = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [data, setData] = useState([])

    const fetchFunc = async (pageNumber) => {
        try {
            setIsLoading(true)
            setIsSuccess(false)
            const response = await fetch(`${BASE_URL}/api/v1/product/${pageNumber}`, { credentials: "include" });
            setIsLoading(false)
            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }
            setIsSuccess(true)
            const res = await response.json();
            setData(res)
        } catch (error) {
            console.log('Error fetching products:', error);
            setIsSuccess(false)
        }
        finally {
            setIsLoading(false)
        }
    }

    return { fetchFunc, isLoading, isSuccess, data }

};