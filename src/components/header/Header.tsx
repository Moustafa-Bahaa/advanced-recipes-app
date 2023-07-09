import { memo, useState } from 'react'
import "../styles/shared.css"
import { Badge } from 'primereact/badge';
import CartDialog from '../dialog/CartDialog';
import { useSelector } from 'react-redux';

const Header = () => {
    const [visible, setVisible] = useState(false);
    const getSpecificData = (state) => state.cart;
    const products = useSelector(getSpecificData)


    return (
        <div className='header'>
            <div className='container'>
                <div className='rest-img'>
                    <img src='https://cdn-icons-png.flaticon.com/128/481/481486.png' alt='image' />
                    <span>Linguini</span>
                </div>
                <div className='main'>
                    <a href='#'>Food</a>
                    <a href='#'>Contact</a>
                </div>
                <div className='cart-icon'>
                    <img src='https://cdn-icons-png.flaticon.com/128/6421/6421855.png' alt='image' onClick={() => setVisible(true)} />
                    <span>
                        <Badge value={products.totalQuantity} severity="danger"></Badge>
                    </span>
                    <CartDialog visible={visible} setVisible={setVisible}/>
                </div>

            </div>
        </div>
    )
}

export default memo(Header) 
