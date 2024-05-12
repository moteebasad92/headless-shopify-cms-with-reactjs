import React from 'react'
import User from "../assets/images/user.svg";
import Cart from "../assets/images/cart.svg";
import { NavLink, useNavigate } from 'react-router-dom';
import { useContext, useEffect,useState } from 'react';
import { ShopContext } from '../context/shopContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Header() {

    const { checkout } = useContext(ShopContext);
    const [cartTotalQuantity, setCartTotalQuantity] = useState(0);
    let cartTotalNumber = 0;

    useEffect(()=>{
        calculateQuantity(checkout);
    },[checkout]);
    
    function calculateQuantity(checkout){
        if(checkout){
            for(let i=0 ;i < checkout.lineItems?.length;i++){
                cartTotalNumber = cartTotalNumber + checkout.lineItems[i].quantity;
            }
            setCartTotalQuantity(cartTotalNumber);
        }else{
            cartTotalNumber = 0;
        }
    }

  return (
    <>
        <nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">

            <div className="container">
                <NavLink className='navbar-brand' to="/">Shopify Headless CMS With ReactJS<span>.</span></NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsFurni">
                    <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
                        <li><NavLink className='nav-link' to="/">Shop</NavLink></li>
                        <li><NavLink className='nav-link' to="/details">Details</NavLink></li>
                        <li><NavLink className='nav-link' to="/cart">Cart</NavLink></li>
                    </ul>

                    <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
                        <li>
                            <NavLink className='nav-link cart-icon-wrap' to="">
                                <img src={Cart}/>
                                <span className='cart-counter'>
                                {cartTotalQuantity}
                                </span> 
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            
        </nav>
        <ToastContainer
            position="top-right"
            autoClose={800}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
    </>
  )
}
