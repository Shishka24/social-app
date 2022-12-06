import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

let store = {
  _state: {
    profilePage: {
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
    },
    dialogsPage: {
      dialogs: [
        {
          id: 1,
          name: "Vlad",
        },
        {
          id: 2,
          name: "Anya",
        },
        {
          id: 3,
          name: "Yan",
        },
        {
          id: 4,
          name: "Mario",
        },
        {
          id: 5,
          name: "Andrey",
        },
      ],
      messages: [
        {
          id: 1,
          message: "Hi",
        },
        {
          id: 2,
          message: "What's Up?",
        },
        {
          id: 3,
          message: "Where is my IceCream?",
        },
      ],
      newMessageBody: "",
    },
  },
  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },
  _callSubscriber() {
    console.log("State it's been changed");
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._callSubscriber(this._state);
  },
};
window.store = store;
export default store;
