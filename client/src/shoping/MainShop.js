import React from 'react'
import headshop from '../images/headshop.jpg'
import GoodItems from './GoodItems'
import ItemCard from './ItemCard'
import ShopCenter from './ShopCenter'
const MainShop = () => {
    return (
        <div>
        <div className="relative h-full">
            <img src={headshop} className="h-auto rounded-md  z-0 absolute "/>
            {/* <div className="absolute z-10 pt-72 "><h1>hello wrold</h1></div> */}
            <ShopCenter/>
           
        </div>
        <div className="bg-gray-50 h-screen"></div>
        <div className="w-full bg-gray-50">
            <ItemCard/>
        </div>
        <div className="w-full h-full">
            <GoodItems/>
        </div>
        </div>
    )
}

export default MainShop
