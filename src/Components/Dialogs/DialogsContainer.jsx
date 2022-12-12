import { updateNewMessageCreator,sendMessageCreator } from "../../redux/dialogsReducer";
  import Dialogs from "./Dialogs";

const DialogsContainer=(props)=>{
    let state=props.store.getState().dialogsPage;
    let onSendMessageClick=()=>{
        props.store.dispatch(sendMessageCreator());
    }
    let onMessageChange=(body)=>{
        props.store.dispatch(updateNewMessageCreator(body))
    }
    return(
       <Dialogs
       dialogsPage={state}
       sendMessage={onSendMessageClick}
       updateNewMessageBody={onMessageChange}
       />
 )
}


export default DialogsContainer;