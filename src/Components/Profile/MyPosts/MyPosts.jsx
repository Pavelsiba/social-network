import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let Posts = props.posts.map((p) => (
    <Post id={p.id} key={p.id} message={p.message} likeCount={p.likeCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPostAC(text);
    newPostElement.current.value = "";
  };

  return (
    <div>
      <div className={s.postBlock}>
        <h3>My Posts</h3>
      </div>
      <div>
        <textarea ref={newPostElement}></textarea>{" "}
      </div>
      <div>
        <button onClick={addPost}>add post</button>{" "}
      </div>
      <div>New posts</div>
      <div className={s.content}>{Posts}</div>
    </div>
  );
};

export default MyPosts;
