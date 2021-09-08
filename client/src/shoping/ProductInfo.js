import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useSelector,useDispatch } from 'react-redux'
import { userProduct } from "../redux-toolkit/productAction";
import { Link,useHistory } from "react-router-dom";
import { deProduct } from "../redux-toolkit/productAction";

const ProductInfo = () => {
    const [product,setProduct] = useState([])
    const [auth, setAuth] = useState([]);
    const dispatch = useDispatch();
    const {login}= useSelector(state=>state)
    const {id} = useParams()
    const { products } = useSelector((state) => state);
    
    useEffect(() => {
        setAuth(login.userData);
      });
    useEffect(()=>{
        setProduct(products.singlePro)
    })

    useEffect(()=>{
    dispatch(userProduct({id},login.userData.token))
    },[dispatch,login.userData.token]);
    console.log(product)
    console.log(auth)

    // const handleAddCart = async (e) =>{
    //     e.preventDefault();
    // // useEffect(()=>{
    //     const cart = product.username
    //     console.log(cart)
    //     addToCart(cart,auth,dispatch);
    const history = useHistory()
  const handleDeleteProduct = () => {
    dispatch(deProduct({id}, login.userData.token))
    return history.push('/shop')

  };

    return (
        <div>
            <div>
            <h1>{product.title} </h1>
            <h1>{product.description} </h1>
            <h1>{product.price} </h1>
            <h1>{product.image} </h1>
            <h1>{product.category} </h1>
            <h1>{product.createdAt} </h1>
            </div>
            <div>
                <button className="text-blue-500 bg-blue-100 text-2xl p-2 mr-4 rounded-md">
                        BUY
                </button>
                <button className="text-blue-500 bg-blue-100 text-2xl p-2 rounded-md" onClick={handleDeleteProduct}>
                        delete
                </button>
                {/* <button className="text-blue-500 bg-blue-100 text-2xl p-2 ml-8 rounded-md" onClick={handleAddCart}>
                        ADD CART
                </button> */}
            </div>
        </div>
    )
}

export default ProductInfo
