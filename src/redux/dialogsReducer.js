const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY: {
      let copyState = { ...state };
      copyState.dialogs = [...state.dialogs];
      copyState.newMessageBody = action.body;
      return copyState;
    }
    case SEND_MESSAGE: {
      let copyState = { ...state };
      copyState.messages = [...state.messages];
      let body = copyState.newMessageBody;
      copyState.newMessageBody = "";
      copyState.messages.push({ id: 6, message: body });
      return copyState;
    }
    default:
      return state;
  }
};
export default dialogsReducer;
export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});
