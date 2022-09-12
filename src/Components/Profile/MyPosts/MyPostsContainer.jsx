
import { addPostActionCreater } from "../../../Redux/profile-reducer";
import {connect} from "react-redux"
import MyPosts from "./MyPosts";

/* const MyPostsContainer = () => {

  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState().profileReducer.postsData;

        let addPost = (text) => {
          store.dispatch(addPostActionCreater(text));
        };

        return <MyPosts addPost={addPost} posts={state} />;
      }}
    </StoreContext.Consumer>
  );
}; */

let mapStateToProps = (state) => {
  
  return {
    posts:state.profileReducer.postsData,
  }
} 

let mapDispatchToProps = (dispatch) =>{
  return {
    addPost:(text)=>{dispatch(addPostActionCreater(text))}
  }
}

/* let addPost = (text) => {dispatch(addPostActionCreater(text))}  */

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps) (MyPosts)

export default MyPostsContainer;


