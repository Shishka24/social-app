// import { useContext } from "react";
import { connect } from "react-redux";
import {
  updateNewMessageCreator,
  sendMessageCreator,
} from "../../redux/dialogsReducer";
// import { StoreContext } from "../../redux/StoreContext";
import Dialogs from "./Dialogs";

// const DialogsContainer=()=>{
//     return <StoreContext.Consumer>
//             {
//             (store)=>
//             {
//                 let state=store.getState().dialogsPage;
//                 let onSendMessageClick=()=>{
//                 store.dispatch(sendMessageCreator());
//                 }
//                 let onMessageChange=(body)=>{
//                     store.dispatch(updateNewMessageCreator(body))
//                 }
//             return <Dialogs
//             state={state}
//             sendMessage={onSendMessageClick}
//             updateNewMessageBody={onMessageChange}/>

//             }
//         }
//         </StoreContext.Consumer>
// }
let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageCreator(body));
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
