import React from 'react'
import ReactPaginate from 'react-paginate';
import { useContext,useState,useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Cross from "../assets/images/cross.svg";
import Cart from "../assets/images/cart.svg";
import { ShopContext } from '../context/shopContext';

function Products({ currentItems }) {

    const { addItemToShopifyCart, buttonloader } = useContext(ShopContext);
    function formatPrice(price) {

        let fixedPrice = Number(price).toFixed(2);
        let itemprice = fixedPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        
        return itemprice;
    }
    return (
      <>
        {
            currentItems.map((product,index)=>(
                
                <div className="col-12 col-md-4 col-lg-3 mb-5" key={index}>
                    <div className="product-item" >
                        <img src={product.images[0].src} className="img-fluid product-thumbnail"/>
                        <h3 className="product-title">{product.title}</h3>
                        <strong className="product-price">Rs {formatPrice(product.variants[0].price.amount)}</strong>

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
      </>
    );
}

function PaginatedProducts({ itemsPerPage,items }) {

    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    const endOffset = itemOffset + itemsPerPage;
    //console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        // console.log(
        // `User requested page number ${event.selected}, which is offset ${newOffset}`
        // );
        setItemOffset(newOffset);
    }

  return (
    <>
    <div className="row">
        <Products currentItems={currentItems} />
    </div>
    <div className='row'>
        <div className='col-12 text-right'>
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
                className="pagination justify-content-center"
                pageClassName="page-item"
                previousClassName="page-item"
                nextClassName="page-item"
                pageLinkClassName="page-link"
                previousLinkClassName="page-link"
                nextLinkClassName="page-link"		
            />
        </div>
      </div>
    </>  
  )
}

export default PaginatedProducts