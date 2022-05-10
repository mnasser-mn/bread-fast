import { AnyAction } from "redux";
import { PostType } from "../types";

export const postsReducer = (state: any, action: AnyAction) => {
  switch (action.type) {
    case "POST_LIST": {
      return { ...state, list: action.payload };
    }
    case "POST_DETAILS": {
      return { ...state, details: action.payload };
    }
    case "EDIT_POST": {
      return { ...state, message: action.payload };
    }
    case "DELETE_POST": {
      if (action.payload.postId) {
        let updatedList = state.list.filter(
          (post: PostType) => post.id !== action.payload.postId
        );
        return { ...state, message: action.payload.message, list: updatedList };
      }
      return { ...state, message: action.payload };
    }
    case "CLEAR_DETAILS": {
      return { ...state, message: "", details: {} };
    }
    case "FETCH_ERROR":{
        return {...state,message:"Please try again!"}
    }
    default: {
      return state || { list: [] };
    }
  }
};
