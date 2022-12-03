let rerenderTree = () => {
  console.log("State it's been changed");
};

//information for the ProfilePage, dialogsPage as well
let state = {
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
};
//export without default
export let addPost = () => {
  //create newObject for now hardcoding the id and likesCount
  //for the message we give as value what we will receive from the inputArea
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };
  //create a function that push the newPost to the state.profilePage.post
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = "";
  // add the rerender function
  rerenderTree(state);
};
//create a function for update post text value
export let updateNewPostText = (newText) => {
  //create a function that push the newPost to the state.profilePage.post
  state.profilePage.newPostText = newText;
  rerenderTree(state);
};

export const subscribe = (observer) => {
  rerenderTree = observer;
};

export default state;
