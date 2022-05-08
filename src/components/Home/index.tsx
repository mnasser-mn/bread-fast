import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getPosts } from "../../redux-setup/actions";
import { StateType, PostType } from "../../redux-setup/types";
import { PostCard } from "./PostCard";
import { SearchFilter } from "./SearchFilter";
import "./index.scss";
export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getPosts()(dispatch);
  }, [dispatch]);
  const list = useSelector((state: StateType) => {
    console.log(state)
    return state?.post.list});
  console.log(list)
  const filterPosts = (keywords: string) => {
    if (keywords || keywords === "") getPosts(keywords)(dispatch);
  };
  const isListEmpty = (list: any) => {
    if (list) return !(list.length > 0);
  };
  return (
    <div className="home-container">
      <h2>POSTS APP</h2>

      <div className="sticky">
      <SearchFilter onKeywordsChange={filterPosts} />
      </div>
      {!isListEmpty(list) ? (
        list?.map((post: PostType) => (
          <PostCard post={post} key={post.id} />
        ))
      ) : (
        <p className="no-items">No Items ...</p>
      )}
    </div>
  );
};
