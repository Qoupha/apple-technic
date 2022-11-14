import React, {useState, useEffect} from "react";
import { useDispatch, useSelector} from "react-redux";

export default function Products(){
    const selector = useSelector(state => state)
    const dispatch = useDispatch();
    const [Hover, setHover] = useState(true)
    console.log(Hover)
    const products = selector.products;
    console.log(products);
    const cartProducts = selector.cartProducts;
    function addToCart (id){
        let isInCart = false;
        cartProducts.forEach(el =>{
            if(id === el.id) isInCart = true
        })

        if(!isInCart) {
            dispatch({type: "ADD_TO_CART", payload: products.find((product) => id === product.id)})
        }
        alert("Product added to Cart")
    }

    return(
        <div className="productsList">
            {products.map(item =>
                    <div className="product" key={item.id}>
                        <img src={item.image} alt="" />
                        <div className="priceBlock">
                        <h3>{item.name}</h3>
                        <span>Color: {item.color}</span>
                            <button className="productPrice" onClick={() =>addToCart(item.id)} onMouseEnter={() => setHover(false)}>{Hover ? 'buy' : `${item.price}$`}</button>
                        </div>
                    </div>
                )}
        </div>
    )
}
