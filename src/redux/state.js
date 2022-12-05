//create store (OPP) object
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
    },
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("State it's been changed");
  },
  addPost() {
    //create newObject for now hardcoding the id and likesCount
    //for the message we give as value what we will receive from the inputArea
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };
    //create a function that push the newPost to the state.profilePage.post
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    // add the rerender function
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    //create a function that push the newPost to the state.profilePage.post
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },
};
window.store = store;
export default store;
//store contain all the information about our state
// _store has an under line because we dont want anyone change the owners data
// all the functions contain this. to precise that we calling exact this element
