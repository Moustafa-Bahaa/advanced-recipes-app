import { Dialog } from 'primereact/dialog';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../card/CartItem';
import { Button } from 'primereact/button';
import { handleIncrement, handleDecrement, removeFromCart } from "../../components/redux/productSlice";
import { memo, useCallback } from 'react';


const CartDialog = (props) => {
    const dispatch = useDispatch()

    const getSpecificData = (state) => state.cart;
    const products = useSelector(getSpecificData)

    let total = 0;
    products.cartItems.forEach((item) => {
        total += item.totalPrice
    })

    const handleDec = useCallback((id) => {
        dispatch(handleDecrement(id))
    }, [products.quantity])

    const handleInc = useCallback((id) => {
        dispatch(handleIncrement(id))
    }, [products.quantity])

    const handleRemove = useCallback((id) => {
        dispatch(removeFromCart(id))
    }, [products.totalQuantity])

    return (
        <Dialog header="Cart Items" visible={props.visible} style={{ width: '50vw' }} onHide={() => props.setVisible(false)}>
            <div className="recipes-content">
                <div className="recipes-container">
                    {products.cartItems.map((product) => (
                        <div className="recipes" key={product.id}>
                            <div className="recipe" >
                                <CartItem key={product.id} image={product.image} title={product.title}
                                    price={product.price} handleDecrement={() => handleDec(product.id)} handleIncrement={() => handleInc(product.id)}
                                    quantity={product.quantity} handleRemove={() => handleRemove(product.id)} />
                            </div>
                        </div>
                    ))}
                </div>
                <Button label="Total Price :  " severity="secondary" className='total-price'>{total} $</Button>
            </div>

        </Dialog>
    )
}

export default memo(CartDialog) 