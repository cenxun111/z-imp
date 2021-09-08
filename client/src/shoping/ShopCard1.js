import React from 'react'
import order from '../images/order.png'
import youhui from '../images/youhui.png'
const ShopCard = () => {
    return (
        <div className="h-full w-auto bg-white overflow-auto scrollbar-w-2 scrollbar-track-gray-lighter scrollbar-thumb-rounded scrollbar-thumb-gray scrolling-touch rounded-lg lg:max-h-sm ">
            {/* <div className="col-span-2 pl-16 pt-8" >
            <h1 className="text-2xl"
            >Hello,cenxun</h1>
            </div>
            <div className="ml-8">
            <img src={order} className="h-4/6 w-10/12"
            />
            <h1 className="text-2xl text-center pt-2">我的订单</h1>
            </div>
            <div>
            <img src={order} className="h-4/6 w-10/12"
            />
            <h1 className="text-2xl text-center pt-2">购物车</h1>
            </div> */}
            <div className="pt-4">
            <h1 className="text-2xl text-center pt-2">浏览记录</h1>
            <img src={youhui} className="h-1/6 w-10/12 mx-auto pt-2"
            />
            <img src={youhui} className="h-1/6 w-10/12 mx-auto pt-2"
            />
            <img src={youhui} className="h-1/6 w-10/12 mx-auto pt-2"
            />
             {/* <img src={youhui} className="h-1/6 w-10/12 mx-auto pt-2"
            /> */}
            
            </div>
            {/* <div>
            <img src={item} className="h-4/6 w-10/12"
            />
            <h1 className="text-2xl">我的订单</h1>
            </div> */}
            
        </div>
    )
}

export default ShopCard
