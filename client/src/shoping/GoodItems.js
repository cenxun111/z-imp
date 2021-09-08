import React from "react";
import youhui from "../images/youhui.png";
import "./gooditem.css"


const GoodItems = () => {
  return (
    <div className="bgimage" >
        <div className="h-screen pl-8 mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
    <div>
      <h1 className="text-3xl px-4 pt-3">good stuff</h1>
      <div className=" h-3/6 w-full bg-white mr-4 mt-3 pt-3 rounded-2xl ">
        <img src={youhui} className="h-4/6 w-10/12 mx-auto pt-2 rounded-md" />
        <h1 className="text-center pt-3">
          0 I need to hide the scrollbars for a div component while still
          retaining scrolling functionality. I used webkit for this as follows :
        </h1>
      </div>
      </div>
      <div>
      <h1 className="text-3xl px-4 pt-3">good stuff</h1>
      <div className=" h-3/6 w-full bg-white mr-4 mt-3 pt-3 rounded-2xl ">
        <img src={youhui} className="h-4/6 w-10/12 mx-auto pt-2 rounded-md" />
        <h1 className="text-center pt-3">
          0 I need to hide the scrollbars for a div component while still
          retaining scrolling functionality. I used webkit for this as follows :
        </h1>
      </div>
      </div>
      <div>
      <h1 className="text-3xl px-4 pt-3">good stuff</h1>
      <div className=" h-3/6 w-full bg-white mr-4 mt-3 pt-3 rounded-2xl ">
        <img src={youhui} className="h-4/6 w-10/12 mx-auto pt-2 rounded-md" />
        <h1 className="text-center pt-3">
          0 I need to hide the scrollbars for a div component while still
          retaining scrolling functionality. I used webkit for this as follows :
        </h1>
      </div>
      </div>
      </div>
    </div>
  );
};

export default GoodItems;
