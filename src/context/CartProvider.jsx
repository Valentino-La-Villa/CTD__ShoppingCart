import React, { useReducer } from 'react'
import { CartContext } from './CartContext'

export const CartProvider = ({ children }) => {

    const initState = []

    const addProduct = (product) => {
        product.quantity = 1
        const action = {
            type: '[CART] Add product',
            payload: product
        }
        dispatch(action)
    }
    const removeProduct = (id) => {
        const action = {
            type: '[CART] Remove product',
            payload: id
        }
        dispatch(action)
    }
    const incrementQuantity = (id) => {
        const action = {
            type: '[CART] Increment quantity',
            payload: id
        }
        dispatch(action)
    }
    const decreaseQuantity = (id) => {
        const action = {
            type: '[CART] Decrease quantity',
            payload: id
        }
        dispatch(action)
    }

    const shoppingReducer = (state = initState, action = {}) => {
        switch (action.type) {
            case '[CART] Add product':
                return [...state, action.payload]

            case '[CART] Remove product':
                return state.filter(product => product.id !== action.payload)

            case '[CART] Increment quantity':
                return state.map(product => {
                    const newQuantity = product.quantity + 1

                    if (product.id == action.payload) return { ...product, quantity: newQuantity }
                    else return product
                })

            case '[CART] Decrease quantity':
                return state.map(product => {
                    const newQuantity = product.quantity - 1

                    if (product.id == action.payload && product.quantity > 1) return { ...product, quantity: newQuantity }
                    else return product
                })
                break;
            default: return state;
        }
    }

    const [shoppingList, dispatch] = useReducer(shoppingReducer, initState)

    return (
        <CartContext.Provider value={{ shoppingList, addProduct, removeProduct, incrementQuantity, decreaseQuantity }}>
            {children}
        </CartContext.Provider>
    )
}
