import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import Swal from 'sweetalert2'

export const Cart = () => {

    const { shoppingList, removeProduct, incrementQuantity, decreaseQuantity } = useContext(CartContext)

    const calculateTotal = () => {
        if (shoppingList.length > 0) {
            return shoppingList.reduce((total, product) => total + product.price * product.quantity, 0)
        } else return 0
    }

    const handlePurchase = () => {
        const productsPurchasedDisplay = shoppingList.map(product => `${product.title} - ${product.quantity}`).join('\n')
        Swal.fire({
            icon: 'success',
            title: 'Your purchase was completed successfully',
            html: `<p>Items bought: </p> <pre>${productsPurchasedDisplay}</pre>`
        })
    }

    const productDisplay = shoppingList.map(product => (
        <tr key={product.id}>
            <th scope="row">{product.title}</th>
            <td>{product.price}</td>
            <td>
                <button
                    className="btn btn-outline-primary"
                    onClick={() => incrementQuantity(product.id)}
                >+</button>

                <button
                    className="btn btn-primary"
                >{product.quantity}</button>

                <button
                    className="btn btn-outline-primary"
                    onClick={() => decreaseQuantity(product.id)}
                >-</button>
            </td>
            <td><button
                className="btn btn-danger"
                onClick={() => removeProduct(product.id)}
            >Remove</button></td>
        </tr>
    ))

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Price</th>
                        <th scope="col">Amount on cart</th>
                        <th scope="col">Remove from cart</th>
                    </tr>
                </thead>
                <tbody>
                    {productDisplay}

                    {shoppingList.length > 0 && <tr>
                        <th><b>TOTAL PRICE:</b></th>
                        <td></td>
                        <td></td>
                        <td>${calculateTotal()}</td>
                    </tr>}
                </tbody>
            </table>

            <div className="d-grid gap-2">
                <button className="btn btn-success" onClick={handlePurchase}>Purchase</button>
            </div>
        </>
    )
}
