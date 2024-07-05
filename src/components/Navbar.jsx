import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Badge } from '@mui/material'
import { ShoppingCart } from '@mui/icons-material'
import { CartContext } from '../context/CartContext'
import '../styles/navbar.css'

export const Navbar = () => {

    const { shoppingList } = useContext(CartContext)

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <span className="navbar-brand text-secondary">TurboCompras</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className='nav-link active' to='/'>Catalog</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className='nav-link active' to='/cart'>Cart</NavLink>
                        </li>
                    </ul>
                </div>

                <NavLink className='cart-icon' to='/cart'>
                    <Badge badgeContent={shoppingList.length} color='primary'>
                        <ShoppingCart />
                    </Badge>
                </NavLink>
            </div>
        </nav>
    )
}
