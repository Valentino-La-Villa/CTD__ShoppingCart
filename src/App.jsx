import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Catalog } from './components/Catalog'
import { Cart } from './components/Cart'
import { ProductProvider } from './context/ProductProvider'
import { CartProvider } from './context/CartProvider'

export const App = () => {
    return (
        <ProductProvider>
            <CartProvider>
                <Navbar />

                <div className='container'>
                    <Routes>
                        <Route path='/' element={<Catalog />} />
                        <Route path='/cart' element={<Cart />} />
                        <Route path='/*' element={<Navigate to='/' />} />
                    </Routes>
                </div>
            </CartProvider>
        </ProductProvider>
    )
}
