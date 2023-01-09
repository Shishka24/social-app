const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

//create initialState
let initialState = {
  users: [],
  // users: [
  // {
  //   id: 1,
  //   photoURL:
  //     "https://cdn.pixabay.com/photo/2017/01/31/21/22/avatar-2027363__340.png",
  //   fullName: "Vlad",
  //   status: "Hello There",
  //   location: {
  //     city: "Montreal",
  //     country: "Canada",
  //     followed: false,
  //   },
  // },
  // {
  //   id: 2,
  //   photoURL:
  //     "https://cdn.pixabay.com/photo/2017/01/31/21/22/avatar-2027363__340.png",
  //   fullName: "Andrey",
  //   status: "Salam",
  //   location: {
  //     city: "Montreal",
  //     country: "Canada",
  //     followed: true,
  //   },
  // },
  // {
  //   id: 3,
  //   photoURL:
  //     "https://cdn.pixabay.com/photo/2017/01/31/21/22/avatar-2027363__340.png",
  //   fullName: "Anya",
  //   status: "Hi",
  //   location: {
  //     city: "Montreal",
  //     country: "Canada",
  //     followed: false,
  //   },
  // },
  // {
  //   id: 74,
  //   photoURL:
  //     "https://cdn.pixabay.com/photo/2017/01/31/21/22/avatar-2027363__340.png",
  //   fullName: "Alex",
  //   status: "Shalom",
  //   location: {
  //     city: "Montreal",
  //     country: "Canada",
  //     followed: false,
  //   },
  // },
  // ],
};
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((el) => {
          if (el.id === action.userId) {
            return { ...el, followed: true };
          }
          return el;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((el) => {
          if (el.id === action.userId) {
            return { ...el, followed: false };
          }
          return el;
        }),
      };
    case SET_USERS: {
      return {
        ...state,
        users: [...state.users, ...action.users],
      };
    }
    default:
      return state;
  }
};
export default usersReducer;
export const followAC = (userId) => ({ type: FOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const unFollowAC = (userId) => ({ type: UNFOLLOW, userId });
