import React, { useContext, useEffect, useState } from 'react'
import { ProductCard } from './ProductCard'
import { ProductContext } from '../context/ProductContext'
import { CartContext } from '../context/CartContext'

export const Catalog = () => {

    const { productList } = useContext(ProductContext)

    const productListDisplay = productList.map(product => (
        <ProductCard
            product={product}
            key={product.id} />
    ))
    return (
        <>
            <h1>Products</h1>

            <hr />

            {productList.length > 1
                ? <div>{productListDisplay}</div>
                : <>Loading</>
            }

        </>
    )
}
