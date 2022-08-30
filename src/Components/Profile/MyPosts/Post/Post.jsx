import g from "./Post.module.css";

const Post = (props) => (
    <div className={g.item}>
      <img src="https://i.pinimg.com/736x/ad/87/32/ad8732ba48b5268517da6f186999ce4f.jpg" alt="Аватарка"/>
      {props.message}
      <div>
      Like {props.likeCount}
      </div>
    </div>
);

export default Post;
