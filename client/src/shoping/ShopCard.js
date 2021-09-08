import React from 'react'
import order from '../images/order.png'
import youhui from '../images/youhui.png'
const ShopCard = () => {
    return (
        <div className="h-full w-auto bg-white grid grid-cols-2  gap-2 rounded-lg ">
            <div className="col-span-2 pl-16 pt-4" >
            <h1 className="text-2xl"
            >Hello,cenxun</h1>
            </div>
            <div className="ml-8">
            <img src={order} className="h-4/6 w-10/12"
            />
            <h1 className="text-2xl text-center pt-4">我的订单</h1>
            </div>
            <div>
            <img src={order} className="h-4/6 w-10/12"
            />
            <h1 className="text-2xl text-center pt-4">购物车</h1>
            </div>
            <div className="col-span-2 pt-4">
            <img src={youhui} className="h-5/6 w-10/12 mx-auto"
            />
            <h1 className="text-2xl text-center pt-4">会员优惠</h1>
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
