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
      console.log(err);
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
      console.log(err);
      dispatch({ type: "FETCH_ERROR" });
    }
  };
};
