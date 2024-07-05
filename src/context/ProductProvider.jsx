import React, { useEffect, useState } from 'react'
import { ProductContext } from './ProductContext'
import Swal from 'sweetalert2'

export const ProductProvider = ({ children }) => {
    const baseURL = 'https://fakestoreapi.com/products'

    const [productList, setProductList] = useState([])

    const fetchProducts = async () => {
        try {
            const res = await fetch(baseURL)
            const data = await res.json()
            setProductList(data)
        }
        catch (err) {
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: `There was an error while loading the catalog: ${err.message}`
            })
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <ProductContext.Provider value={{ productList }}>
            {children}
        </ProductContext.Provider>
    )
}
