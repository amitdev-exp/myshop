import React from 'react';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const Cart = () => {
    const carts = useSelector((state) => state.allCarts.carts)
    const renderList = carts.map((cart) => {
        const { id, image, title, price, category } = cart
        return (
            <div className='six grid' key={id}>
                <Link to={`/cart/${id}`}>
                    <div className='ui link cards'>
                        <div className='card'>
                            <div className='ui Small circular image'>
                                <img src={image} size="100%" alt={title} />
                            </div>
                            <div className='content'>
                                {/* <div className='header'>{title} </div> */}
                                <div className='meta'>{category} </div>
                                <div className='meta price'>$ {price} </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        )
    })
    return (
        <>{renderList}</>
    )

}

export default Cart;