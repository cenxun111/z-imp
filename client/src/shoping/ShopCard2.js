import React from 'react'
import order from '../images/order.png'
import youhui from '../images/youhui.png'
import apple from '../images/apple.png'
const ShopCard2 = () => {
    return (
        <div className="h-full w-auto bg-gradient-to-t from-pink-300 to-blue-400 rounded-lg ">
            {/* <div className="col-span-2 pl-16 pt-4" >
            <h1 className="text-2xl"
            >Hello,cenxun</h1>
            </div> */}
            <div className=" mt-12 ">
            <img src={apple} className="h-5/6 w-11/12 mx-auto"
            />
            <h1 className="text-2xl text-center pt-10 mx-2">以教育优惠购买指定 Mac 或 iPad，AirPods 搭配其中*，还﻿可八折加购 AppleCare+ 服﻿务计划。</h1>
            </div>
      
            {/* <div>
            <img src={item} className="h-4/6 w-10/12"
            />
            <h1 className="text-2xl">我的订单</h1>
            </div> */}
            
        </div>
    )
}

export default ShopCard2
