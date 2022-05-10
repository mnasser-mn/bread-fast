import axios from "axios";
import { PostType } from "../types";

const baseURL = "https://jsonplaceholder.typicode.com/posts";
export const getPosts = (keywords = "") => {
  return async (dispatch: any) => {
    try {
      let { data: payload } = await axios.get(baseURL);
      if ((keywords || keywords === "") && payload)
        payload = [
          ...payload.filter((post: PostType) =>
            post.title.toLowerCase().includes(keywords.toLowerCase())
          ),
        ];

      dispatch({
        type: "POST_LIST",
        payload,
      });
    } catch (err) {
      dispatch({ type: "FETCH_ERROR" });
    }
  };
};

export const getPostDetails = (id: number) => {
  return async (dispatch: any) => {
    try {
      const { data: payload } = await axios.get(`${baseURL}/${id}`);
      dispatch({
        type: "POST_DETAILS",
        payload,
      });
    } catch (err) {
      dispatch({ type: "FETCH_ERROR" });
    }
  };
};

export const patchPost = (post: PostType) => {
  return async (dispatch: any) => {
    const response = await axios.patch(`${baseURL}/${post.id}`, { ...post });
    if (response.status === 200) {
      dispatch({ type: "EDIT_POST", payload: "Post Updated successfully!" });
    } else dispatch({ type: "EDIT_POST", payload: "Error, please try again!" });
  };
};

export const deletePost = (id: number) => {
  return async (dispatch: any) => {
    const response = await axios.delete(`${baseURL}/${id}`);
    if (response.status === 200) {
      dispatch({
        type: "DELETE_POST",
        payload: { message: "Post deleted successfully!", postId: id },
      });
    } else
      dispatch({
        type: "DELETE_POST",
        payload: {
          message: "Error, please try again!",
        },
      });
  };
};
