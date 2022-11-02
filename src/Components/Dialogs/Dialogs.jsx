import s from "./Dialogs.module.css"
import { NavLink } from "react-router-dom";

const DialogItem=(props)=>{
    let path="/dialogs/"+props.id;
    return(
        <div className={s.dialog +' '+ s.active }>
        <NavLink to ={path}>{props.name}</NavLink>
    </div>
    )
}
const Message=(props)=>{
return(
<div className={s.dialog}>{props.message} </div>
 )
}
let dialogsData=[{
    id:1,
    name: 'Vlad' 
},{
    id:2,
    name: 'Anya' 
},{
    id:3,
    name: 'Yan' 
},{
    id:4,
    name: 'Mario' 
},{
    id:5,
    name: 'Andrey' 
},]

const Dialogs=(props)=>{
return(
<div className={s.dialogs}>   
        <div className={s.dialogsUsers}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
        <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
        </div>      
    <div className={s.messages}>
    <Message message="Hi"/>
    <Message message="What's Up?"/>
    <Message message="Where is my IceCream?"/>
    </div>
</div>
 )
}


export default Dialogs;