
import Client from 'shopify-buy';
import { useState, createContext, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const client = Client.buildClient({
    domain: process.env.REACT_APP_SHOPIFY_DOMAIN,
    storefrontAccessToken: process.env.REACT_APP_SHOPIFY_API
});

const ShopContext = createContext();

function ShopProvider(props) {
    
    const [products, setProducts] = useState([]);
    const [checkout, setCheckout] = useState({});
    const [buttonloader, setButtonLoader] = useState('');
    const[quantityvalue, setQuantityValue] = useState(0); 
    const[quantityoverlay, setQuantityOverlay] = useState(false);
    const [selectedqtyoverlay, setSelectedQtyOverlay] = useState(null);

    useEffect(()=>{
        if(localStorage.checkout_id){
            fetchCheckout(localStorage.checkout_id);
        }else{
            createCheckout();
        }

        // const pollCheckout = async () => {
        //     try {
        //         // Fetch the current checkout
        //         const updatedCheckout = await client.checkout.fetch(checkout.id);
        //         // Create an array of line items with updated quantity
        //         const lineItemsToUpdate = updatedCheckout.lineItems.map(item => {
        //             return { id: item.id, quantity: 0 };
        //         });
        //         // Update the line items in the checkout
        //         await client.checkout.updateLineItems(checkout.id, lineItemsToUpdate);
        //     } catch (error) {
        //         console.log(error);
        //         localStorage.removeItem('checkout_id');
        //         setCheckout({});
        //     }
        // }
        //   const intervalId = setInterval(pollCheckout, 3000);
        //   return () => clearInterval(intervalId);
    },[]);
    
    const createCheckout = async () =>{
        const checkout = await client.checkout.create();
        localStorage.setItem('checkout_id',checkout.id);
        setCheckout(checkout);
    }

    const fetchCheckout = async (checkoutId) =>{
        client.checkout.fetch(checkoutId).then((checkout) => {
            setCheckout(checkout);
        });
    }

    const fetchAllProducts = async () =>{
        const products = await client.product.fetchAll();
        console.log("products", products);
        setProducts(products);
    }

    const addItemToCart = async (variantId,quantity) => {
        
        
        setButtonLoader('active');
        const lineItemsToAdd = [
            {
                variantId: variantId,
                quantity: 1
            }
        ];

        const cart = await client.checkout.addLineItems(checkout.id, lineItemsToAdd);
        console.log(cart)
        setCheckout(cart);
        setButtonLoader('');
        toast.success("Product Added To Cart!");
    }

    const removeCartItem = async(productID) =>{
        const removeItem = await client.checkout.removeLineItems(checkout.id, productID);
        setCheckout(removeItem);
    }

    const incrementQuantity = async(itemId,qValue) =>{
      
        if (qValue > 0) {
            setSelectedQtyOverlay(itemId);
            setQuantityOverlay(true);
            setQuantityValue(qValue);
            const lineItemsToUpdate = [ {id: itemId, quantity: qValue + 1} ];
            console.log(lineItemsToUpdate)
            const updateCartItem = await client.checkout.updateLineItems(checkout.id, lineItemsToUpdate);
            setCheckout(updateCartItem);
            
        }else{
            console.log("qValue " + qValue);
        }
        setQuantityOverlay(false);
      
    }

    const decrementQuantity = async(itemId) =>{
      
        setSelectedQtyOverlay(itemId);
        setQuantityOverlay(true);
        let updatedQuantity = 0;
        checkout.lineItems.map((curElem)=>{
            if(curElem.id === itemId){
                updatedQuantity = curElem.quantity - 1 ;
            }
        })
        
        const lineItemsToUpdate = [
            {id: itemId, quantity: updatedQuantity}
        ];

        const updateCartItem = await client.checkout.updateLineItems(checkout.id, lineItemsToUpdate);
        setCheckout(updateCartItem);
        setQuantityOverlay(false);
    }

    const addDiscount = async(discountCode) =>{

        const addDiscountCode = await client.checkout.addDiscount(checkout.id, discountCode);
        setCheckout(addDiscountCode);
        
    }
    const removeDiscount = async(checkout) =>{

        const removeDiscountCode = await client.checkout.removeDiscount(checkout.id);
        setCheckout(removeDiscountCode);
        
    }

  return (
    <ShopContext.Provider value={{
        products,
        checkout,
        buttonloader,
        quantityvalue,
        quantityoverlay,
        selectedqtyoverlay,
        fetchAllShopifyProducts:fetchAllProducts,
        addItemToShopifyCart:addItemToCart,
        removeShopifyCartItem:removeCartItem,
        increment:incrementQuantity,
        decrement:decrementQuantity,
        addShopifyDiscount:addDiscount,
        removeShopifyDiscount:removeDiscount,
        setQuantityValue:setQuantityValue
    }}>
        {props.children}
    </ShopContext.Provider>
  )
}


const ShopConsumer = ShopContext.Consumer

export {ShopConsumer,ShopContext}

export default ShopProvider








  