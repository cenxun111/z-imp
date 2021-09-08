import React from "react";
import ShopCard from "./ShopCard";
import ShopCard1 from "./ShopCard1";
import ShopCard2 from "./ShopCard2";
import ShopCard3 from "./ShopCard3";
const ShopCenter = () => {
  return (
    <div className="grid grid-cols-2  gap-4 z-10 absolute pt-80 mx-6 h-full lg:grid-cols-4">
      <ShopCard />
      <ShopCard1 />
      <ShopCard2 />
      <ShopCard3 />
      {/* <div className="">
      <h1 className="text-3xl px-4 pt-3">推荐 商品</h1>
      <div className="flex pt-3" >
      <h1 className="text-3xl px-4">用品</h1>
      <h1 className="text-3xl px-4 ">用品</h1>
      <h1 className="text-3xl px-4">用品</h1>
      <h1 className="text-3xl px-4">用品</h1>
      </div> */}
      {/* </div> */}
    </div>
  );
};

export default ShopCenter;
