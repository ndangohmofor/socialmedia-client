import { useEffect } from "react";
import { UseDispatch, useDispatch, useSelector } from "react-redux";
import { setPost } from "../../state";
import PostWidget from "./PostWidget";

const PostsWidget = ({ useId, isProfile = false }) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const token = useSelector((state) => state.token);

  const getPosts = async () => {
    const response = await fetch("http://localhost:3001/posts", {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    dispatch(setPosts({ posts: data }));
  };
};

export default PostsWidget;
