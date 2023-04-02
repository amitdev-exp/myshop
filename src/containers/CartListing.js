import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import Cart from './Cart';
import axios from 'axios'
import {setCarts} from '../redux/actions/cartActions'
const CartListing = () => {
    const dispatch = useDispatch();

    const fetchAllCarts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products').catch((err) => {
            console.log("Err", err);
        })
        console.log('response', response.data)
        dispatch(setCarts(response.data));             
    }
    useEffect(() => {
        fetchAllCarts();
    }, [])
    return (
        <div className='ui grid container'>
            <Cart />
        </div>
    )
}

export default CartListing;