import { Dialog, DialogTitle, Snackbar } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deletePost } from "../../../redux-setup/actions";
import { PostType, StateType } from "../../../redux-setup/types";
import { ConfirmDialog } from "../../ConfirmDialog";
import "./index.scss";
type PostCardPropsType = {
  post: PostType;
};
export const PostCard = ({ post }: PostCardPropsType) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleEdit = () => {
    navigate(`${post.id}`);
  };

  return (
      <>
    <div className="card">
      <h3 className="card-title">{post.title}</h3>
      <p className="card-body">{post.body}</p>
      <nav className="card-actions">
        <button onClick={handleEdit}>Edit</button>
        <ConfirmDialog
          title="Delete Post"
          message="Are you sure you want to delete this post ?"
          openInitial={false}
          triggerButton={<button onClick={() => {}}>Delete</button>}
          onConfirm={() => {
            deletePost(post.id)(dispatch);
          }}
          onCancel={() => {}}
        />
      </nav>
     
    </div>
    
   </>
  );
};
