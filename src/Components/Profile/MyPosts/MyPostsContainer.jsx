import React from "react";
import { connect } from "react-redux";
import {
  addActionCreatorPost,
  updateNewPostActionCreator,
} from "../../../redux/profileReducer";
// import { StoreContext } from "../../../redux/StoreContext";
import MyPosts from "./MyPosts";

// const MyPostsContainer = (props) => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let addPost = () => {
//           store.dispatch(addActionCreatorPost());
//         };
//         let onPostChange = (text) => {
//           let action = updateNewPostActionCreator(text);
//           store.dispatch(action);
//         };
//         return (
//           <MyPosts
//             post={store.getState().profilePage.posts}
//             addPost={addPost}
//             updateNewPostText={onPostChange}
//             newText={store.newPostText}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };
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
