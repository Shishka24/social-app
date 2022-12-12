const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

//create initialState
let initialState = {
  posts: [
    {
      id: 1,
      message: "Hey World ",
      likesCount: 12,
    },
    {
      id: 2,
      message: "Hey Jimmy ",
      likesCount: 18,
    },
    {
      id: 3,
      message: "Welcome to My World ",
      likesCount: 120,
    },
  ],
  newPostText: "",
};
//if state is unden
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };
      state.posts.push(newPost);
      state.newPostText = "";
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};
export default profileReducer;
export const addActionCreatorPost = () => ({ type: ADD_POST });
export const updateNewPostActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
