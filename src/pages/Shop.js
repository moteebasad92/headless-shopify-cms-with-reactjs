import React, { useContext, useEffect, useState } from 'react'
import Cross from "../assets/images/cross.svg";
import Cart from "../assets/images/cart.svg";
import { ShopContext } from '../context/shopContext';
import { NavLink } from 'react-router-dom';
import PaginatedItems from '../components/Pagination';
import PaginatedProducts from '../components/PaginatedProducts';

export default function Shop() {

    const { fetchAllShopifyProducts, addItemToShopifyCart ,products,buttonloader } = useContext(ShopContext);

    useEffect(()=>{
        fetchAllShopifyProducts();
    },[]);

   return (
    <>
		
		<div className="untree_co-section product-section before-footer-section">
		    <div className="container">
		      	{/* <div className="row">

                    {
                        products.map((product,index)=>(
                            
                            <div className="col-12 col-md-4 col-lg-3 mb-5" key={index}>
                                <div className="product-item" >
                                    <img src={product.images[0].src} className="img-fluid product-thumbnail"/>
                                    <h3 className="product-title">{product.title}</h3>
                                    <strong className="product-price">Rs {product.variants[0].price}</strong>

                                    <div className='pi-icons-wrap'>
                                        <span className={`icon-cross ${buttonloader}`} onClick={() => addItemToShopifyCart(product.variants[0].id,1)}>
                                            <img src={Cross} className="img-fluid"/>
                                        </span>
                                        <NavLink className="icon-cart" to="/cart">
                                            <img src={Cart} className="img-fluid"/>
                                        </NavLink>
                                    </div>
                                </div>
                            </div> 
                        ))
                    }
					
				
		      	</div> */}
                
                    <PaginatedProducts 
                        itemsPerPage={8} 
                        items={products} 
                    />
                
		    </div>
		</div>

    </>
  )
}
