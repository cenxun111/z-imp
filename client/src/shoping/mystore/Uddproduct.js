import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { postDataAPI } from "../../redux-toolkit/fetchData";

import { createNewProduct } from "../../redux-toolkit/productAction";
import { Link,useHistory } from "react-router-dom";

const Uddproduct = () => {
  const { login } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [user, setUser] = useState([]);
  const [auth, setAuth] = useState([]);
  const [product_id, setProduct_id] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState("");
  const username = user.username;
  // const token = auth.token
  const history = useHistory()
  useEffect(() => {
    setUser(login.userInfo);
  });
  useEffect(() => {
    setAuth(login.userData);
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProduct = {
      username,
      title,
      description,
      price,
      product_id,
      category,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      console.log(filename);
      data.append("name", filename);
      data.append("file", file);
      newProduct.image = filename;
      try {
        await postDataAPI("/upload", data);
      } catch (err) {}

      createNewProduct(newProduct, auth, dispatch);
      return history.push('/shop')
    }
  };

  return (
    <form className="" onSubmit={handleSubmit}>
      <div className="flex-col w-10/12 mx-auto">
        <div className="flex justify-center mt-4">
          <input
            className=" py-2 px-3 rounded-lg border-2 border-purple-300 bg-gray-200 mt-1  focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            placeholder="Product_id"
            onChange={(e) => setProduct_id(e.target.value)}
          />
        </div>
        <div className="flex justify-center">
          <input
            className=" py-2 px-3 w-2/12 rounded-lg border-2 border-purple-300 bg-gray-200 mt-1  focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            type="text"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex justify-center">
          <input
            className=" py-2 px-3 rounded-lg border-2 border-purple-300 bg-gray-200 mt-1  focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            type="text"
            placeholder="price"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="flex justify-center">
          <textarea
            className=" py-2 px-3 w-6/12 h-28 rounded-lg border-2 border-purple-300 bg-gray-200 mt-1  focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            type="text"
            placeholder="desc"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="flex justify-center">
          <input
            className=" py-2 px-3 rounded-lg border-2 border-purple-300 bg-gray-200 mt-1  focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            type="text"
            placeholder="cat"
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className="flex justify-center">
          {/* <button  className="bg-blue-400 hover:bg-blue-200 text-white font-bold py-2 px-4  items-center">
          </button> */}
          <div className="input_field flex flex-col w-max mx-auto text-center">
            <label>
              <input
                className="text-sm cursor-pointer w-36 hidden"
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
              />
              <div className="text bg-indigo-600 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 mt-4 hover:bg-indigo-500">
                Select Image
              </div>
            </label>
            {/*             
            <div className="title text-indigo-500 uppercase">or drop files here</div>     */}
          </div>
          {/* <input
           className="text-sm cursor-pointer w-36 hidden"
            type="file"
            placeholder=""
            onChange={(e) => setFile(e.target.files[0])}
          /> */}
        </div>
      </div>
      <div>
        <button
          className="p-2 mt-8 bg-green-600 rounded-md w-28    disabled:opacity-50"
          type="submit"
        >
          ADD
        </button>
      </div>
    </form>
  );
};

export default Uddproduct;
