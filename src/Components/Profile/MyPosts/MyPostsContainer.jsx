import { connect } from "react-redux";
import {
  addActionCreatorPost,
  updateNewPostActionCreator,
} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
  return {
    post: state.profilePage.posts,
    newText: state.profilePage.newPostText,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addActionCreatorPost());
    },
    updateNewPostText: (text) => {
      dispatch(updateNewPostActionCreator(text));
    },
  };
};
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
