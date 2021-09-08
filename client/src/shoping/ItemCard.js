import React, { useRef, useState, useEffect } from "react";
// import youhui from '../images/youhui.png'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Products } from "../redux-toolkit/productAction";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import Dropdown from "react-bootstrap/Dropdown";

import ProductEdit from '../shoping/ProductEdit'

const ItemCard = () => {
  const PF = "http://localhost:6400/images/";
  const { login } = useSelector((state) => state);
  const { products } = useSelector((state) => state);

  const dispatch = useDispatch();
  // const [auth,setAuth] = useState([])
  // useEffect(() =>{
  //     setAuth(login.userData)
  //   })
  // console.log(login.userData.token);

  useEffect(() => {
    if (login.userData.token) dispatch(Products(login.userData.token));
  }, [dispatch, login.userData.token]);
  // const ref = useRef(null);
  // const scroll = (scrollOffset) => {
  //   ref.current.scrollLeft += scrollOffset;
  // };
  console.log(products.allProducts)
  
  return (
    <div>
      {products.allProducts.map(product => (
            <ProductEdit key={product._id} productInfo={product}/>))}
    {/* <ProductEdit /> */}
    </div>
    // <div>
    //   <button
    //     className="bg-green-400 text-xl p-2 ml-8 mr-4 rounded-md "
    //     onClick={() => scroll(-1500)}
    //   >
    //     LEFT
    //   </button>
    //   <button
    //     className="bg-green-400 text-xl p-2 rounded-md"
    //     onClick={() => scroll(1000)}
    //   >
    //     RIGHT
    //   </button>

    //   <div
    //     className=" overflow-x-scroll scrollbar-w-2 scrollbar-track-gray-lighter scrollbar-thumb-rounded scrollbar-thumb-gray scrolling-touch w-full"
    //     ref={ref}
    //   >
    //     <div className="inline-flex pl-8">
    //       {/* {products.allProducts.image &&  <img src={PF + products.allProducts.image} alt="" />} */}
    //       {products.allProducts.map((product) => (
    //         <div className=" h-80 w-80 bg-gray-300 mr-4 rounded-2xl relative ">
    //             <div className="absolute top-0 right-1">
    //           <Dropdown className="mx-2">
    //             <Dropdown.Toggle id="dropdown-autoclose-true">
    //               <div className=" text-3xl  hover:text-green-700 hover:bg-gray-50 rounded-full">
    //                 <ExpandMoreRoundedIcon fontSize="large" />
    //               </div>
    //             </Dropdown.Toggle>

    //             <Dropdown.Menu className=' text-md  text-left text-green-500  bg-gray-50 rounded-2xl p-2'>
    //                 <div>
                   
    //               <Dropdown.Item >more</Dropdown.Item>
    //               </div>
    //               <div>
                   
    //                <Dropdown.Item>update</Dropdown.Item>
    //                </div>
    //                <div>
                   
    //                <Dropdown.Item onClick={handleDeleteProduct}>delete</Dropdown.Item>
    //                </div>
             
    //             </Dropdown.Menu>
    //           </Dropdown>
    //           </div>
    //           <div>
    //           <h1 className="pt-6 mx-10 text-center ">
    //             <Link to={`/product_info/${product._id}`}>
    //               {product.description}
    //             </Link>
    //           </h1>

    //           {/* <h1 className="text-center pt-2">{product.description}</h1> */}
    //           <h1 className="text-center text-3xl text-blue-300 pt-3">
    //             {product.price}
    //           </h1>
    //           <img
    //             src={PF + product.image}
    //             className="h-3/6 w-10/12 mx-auto pt-3 rounded-lg"
    //           />
    //           <ProductEdit key={product._id} productInfo={product}/>
    //         </div>
    //         </div>
    //       ))}



  //       </div>
  //     </div>
  //   </div>
  )
}

export default ItemCard;
