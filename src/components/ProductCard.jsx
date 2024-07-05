import { useContext, useState } from 'react'
import '../styles/productCard.css'
import { CartContext } from '../context/CartContext'

export const ProductCard = ({ product }) => {

    const { addProduct, removeProduct } = useContext(CartContext)
    const { shoppingList } = useContext(CartContext)


    const add = () => {
        addProduct(product)
    }

    const remove = () => {
        removeProduct(product.id)
    }

    const isProductOnCart = !!shoppingList.find(productOnCart => productOnCart.id == product.id)

    return (
        <div className="card">

            <img src={product.image} alt={product.title} className="card-img" />

            <div className="card-content">
                <h3 className="card-title">{product.title}</h3>
                <p className="card-description">{product.description}</p>
                <p className="card-price">${product.price}</p>

                {isProductOnCart
                    ?
                    <button
                        className="remove-button"
                        onClick={remove}>
                        Remove from cart
                    </button>

                    :
                    <button
                        className="add-button"
                        onClick={add}>
                        Add to cart
                    </button>
                }
            </div>

        </div>
    )
}
