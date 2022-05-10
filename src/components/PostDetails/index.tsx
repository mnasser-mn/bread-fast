import { Snackbar } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getPostDetails, patchPost } from "../../redux-setup/actions";
import { PostType, StateType } from "../../redux-setup/types";
import "./index.scss";
export const PostDetails = ({ postId }: any) => {
  const { id } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const postDetails = useSelector((state: StateType) => state?.post?.details);
  const message = useSelector((state: StateType) => state?.post?.message);
  const [editable, setEditable] = useState(false);
  const handleChange = (e: any) => {
    dispatch({
      type: "POST_DETAILS",
      payload: { ...postDetails, [e.target.name]: e.target.value },
    });
  };
  const postHasEmptyFields = () => {
    return Object.keys(postDetails as object).every(
      (key: string) => postDetails![key as keyof PostType]
    );
  };
  const handleClick = () => {
    if (!editable) {
      setEditable(true);
    } else if (postHasEmptyFields()) {
      patchPost(postDetails!)(dispatch);
      setEditable(false);
    }
  };
  useEffect(() => {
    if (!(id && Number(id))) {
      if (postId) getPostDetails(Number(id || postId))(dispatch);
      else navigate("/posts");
    } else {
      getPostDetails(Number(id || postId))(dispatch);
    }

    return () => {
      dispatch({ type: "CLEAR_DETAILS" });
    };
  }, [dispatch, id, postId, navigate]);

  return (
    <div className="details-container">
      <h2>
        {!postId ? (
          <span
            onClick={() => {
              navigate("/posts");
            }}
          >
            Home
          </span>
        ) : null}
        <span>#{id || postId} POST DETAILS</span>
      </h2>
      {postDetails?.title || postDetails?.title === "" ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="form-group">
            <label>User ID</label>
            <input
              type="text"
              name="userId"
              disabled={!editable}
              value={postDetails?.userId}
              onChange={handleChange}
              className={!postDetails.userId ? "invalid" : ""}
            />
          </div>
          <div className="form-group">
            <label>Title</label>
            <input
              disabled={!editable}
              type="text"
              name="title"
              onChange={handleChange}
              value={postDetails?.title}
              className={postDetails.title === "" ? "invalid" : ""}
            />
          </div>
          <div className="form-group">
            <label>Body</label>
            <textarea
              name="body"
              disabled={!editable}
              value={postDetails?.body}
              onChange={handleChange}
              className={postDetails.body === "" ? "invalid" : ""}
            />
          </div>
          {!editable ? (
            <div className="form-group">Click edit to enable fields...</div>
          ) : null}
          <div className="form-group">
            <button className={editable ? "save" : ""} onClick={handleClick}>
              {editable ? "Save" : "Edit"}
            </button>
          </div>
          {message ? (
            <Snackbar
              anchorOrigin={{ vertical: "top", horizontal: "center" }}
              open={message !== ""}
              onClose={() => dispatch({ type: "EDIT_POST", payload: "" })}
              message={message}
            />
          ) : null}
        </form>
      ) : (
        <p>'Loading'</p>
      )}
    </div>
  );
};
