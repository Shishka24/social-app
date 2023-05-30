const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
  dialogs: [
    { id: 1, name: "Vlad" },
    { id: 2, name: "Anya" },
    { id: 3, name: "Yan" },
    { id: 4, name: "Mario" },
    { id: 5, name: "Andrey" },
  ],
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "What's Up?" },
    { id: 3, message: "Where is my IceCream?" },
  ],
  newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {
  //declarition of copyState, using the spread operator
  //so thee state will have his initialState till the time wi will rewrite new proprieties
  // not the best practice
  //  let stateCopy;
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      // since we change the proprieties of the NewMessBody
      // we adding after the spread operator the newMessBody case
      return {
        ...state,
        newMessageBody: action.body,
      };
    //this one we not using no more, since we reassign it
    // stateCopy.newMessageBody = action.body;
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      //also we can use the return
      return {
        ...state,
        newMessageBody: "",
        //create a new array , copy all the el from the original array, then adding (push) new el
        messages: [...state.messages, { id: 6, message: body }],
        // those one I used before
        //stateCopy.newMessageBody = "";
        // stateCopy.messages.push({ id: 6, message: body });
      };
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
