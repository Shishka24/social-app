import s from "./Dialogs.module.css"
// import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { updateNewMessageCreator,sendMessageCreator } from "../../redux/dialogsReducer";
  

const Dialogs=(props)=>{
    //getting the data from the store using the props
    //by using the func getState because the _state is a private usage
    //getting the data from obj DialogsPage
    let state=props.store.getState().dialogsPage;
    let dialogsElements=state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements=state.messages.map(m => <Message message={m.message}/>)
    //getting the newMessageBody as we know its empty
    let newMessageBody=state.newMessageBody;
    // create the func for OnChange by using the dispatch from the store
    //where we created the func sendMessageCreator, 
    //func sendMessageCreator getting the type as SEND_MESSAGE,
    //SEND_MESSAGE get's to the action when the newMessageBody is empty 
    //when it will push the new message with the new id and the message(body)  
    let onSendMessageClick=()=>{
        props.store.dispatch(sendMessageCreator());
    }
    //creating the func onChange with event listener 
    //the body is event listener target the value of the input 
    //when by using the func updateNewMessageCreator we sending the value of the e.target.value
    //
    let onMessageChange=(e)=>{
        let body= e.target.value
        props.store.dispatch(updateNewMessageCreator(body))
    }
    return(
        <div className={s.dialogs}>   
        <div className={s.dialogsUsers}>
        {dialogsElements}
        </div>      
        <div className={s.messages}>
        <div>
        {messagesElements}
        </div>
    <div>
        <div>
            <textarea 
            value={newMessageBody}
            onChange={onMessageChange} 
            placeholder="Write a Message to Your Body"></textarea>
        </div>
        <div>
            <button onClick={onSendMessageClick}>SEND</button>
        </div>
    </div>
    </div>
</div>
 )
}


export default Dialogs;