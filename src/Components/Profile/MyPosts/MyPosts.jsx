import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import MyPostReduxForm from "./MyPostForm";

const MyPosts = (props) => {
  let Posts = props.posts.map((p) => (
    <Post id={p.id} message={p.message} likeCount={p.likeCount} />
  ));

  let addPost = (values) => {
    props.addPost(values.mypost);
  };

  return (
    <div>
      <div className={s.postBlock}>
        <h3>My Posts</h3>
      </div>
      <div>
        <MyPostReduxForm onSubmit={addPost}/>
      </div>
      <div>New posts</div>
      <div className={s.content}>{Posts}</div>
    </div>
  );
};

export default MyPosts;
