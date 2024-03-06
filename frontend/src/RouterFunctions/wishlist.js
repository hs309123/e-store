import { useState } from "react";

const BASE_URL = import.meta.env.VITE_BASE_URL

export const useFetchWishList = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [data, setData] = useState([])

    const fetchFunc = async () => {
        try {
            setIsLoading(true)
            const response = await fetch(`${BASE_URL}/api/v1/wishlist/allWishlist`, { credentials: "include" });
            setIsLoading(false)
            if (!response.ok) {
                throw new Error('Failed to fetch wishlist');
            }
            setIsSuccess(true)
            const res = await response.json();
            setData(res)
        } catch (error) {
            console.error('Error fetching wishlist:', error);
            setIsSuccess(false)
        }
        finally {
            setIsLoading(false)
        }
    }
    return { data, isLoading, isSuccess, fetchFunc }
};

export const useFetchOneWishList = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [data, setData] = useState([])

    const fetchFunc = async (itemId) => {
        try {
            setIsLoading(true)
            const response = await fetch(`${BASE_URL}/api/v1/wishlist/${itemId}`, { credentials: "include" });
            setIsLoading(false)
            if (!response.ok) {
                throw new Error('Failed to fetch wishlist');
            }
            setIsSuccess(true)
            const res = await response.json();
            setData(res)
        } catch (error) {
            console.error('Error fetching wishlist:', error);
            setIsSuccess(false)
        }
        finally {
            setIsLoading(false)
        }
    }
    return { data, isLoading, isSuccess, fetchFunc }
};

export const useAddWishList = (item) => {

    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [data, setData] = useState([])

    const addFunc = async () => {
        try {
            setIsLoading(true)

            const response = await fetch(`${BASE_URL}/api/v1/wishlist/add`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(item),
                credentials: "include"
            })

            setIsLoading(false)
            if (!response.ok) {
                throw new Error('Failed to fetch wishlist');
            }
            setIsSuccess(true)
            const res = await response.json();
            setData(res)
        } catch (error) {
            console.error('Error fetching wishlist:', error);
            setIsSuccess(false)
        }
        finally {
            setIsLoading(false)
        }
    }

    return { data, isLoading, isSuccess, addFunc }

};

export const useDeleteWishList = (itemId) => {

    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [data, setData] = useState([])

    const deleteFunc = async () => {
        try {
            setIsLoading(true)
            const response = await fetch(`${BASE_URL}/api/v1/wishlist/delete/${itemId}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                credentials: "include"
            })
            setIsLoading(false)
            if (!response.ok) {
                throw new Error('Failed to fetch wishlist');
            }
            setIsSuccess(true)
            const res = await response.json();
            setData(res)
        } catch (error) {
            console.error('Error fetching wishlist:', error);
            setIsSuccess(false)
        }
        finally {
            setIsLoading(false)
        }
    }

    return { isSuccess, isLoading, data, deleteFunc }
};