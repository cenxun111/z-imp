import React, { useEffect } from "react";
import { userPosts } from "../redux-toolkit/postAction";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import rightpic from "../images/rightpic.jpeg";
const SelfPosts = () => {
  const { posts } = useSelector((state) => state);
  const { username } = useParams();
  const dispatch = useDispatch();
  console.log({ username });
  useEffect(() => {
    dispatch(userPosts({ username }));
  }, []);
  return (
    <div>
      {posts.userPosts.map((post) => (
        <div key={post._id}>
          <div className="flex items-center flex-col mt-10 text-2xl  text-blue-500">
            <h1 className="flex flex-col justify-center  text-4xl mb-2 text-green-500">
              YOUALLPOSTS
            </h1>

            <h1 className="flex flex-col mt-6 justify-center  text-3xl ">
              {post.title}
            </h1>
            <h1 className="flex flex-col mb-3 justify-center  text-3xl ">
              {post.content}
            </h1>
            <img src={rightpic} className="w-11/12 h-auto rounded-md" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SelfPosts;
