//for now create the state with all the information
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

export default state;
