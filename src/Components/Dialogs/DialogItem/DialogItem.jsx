import s from "./../Dialogs.module.css"
import { NavLink } from "react-router-dom";

const DialogItem=(props)=>{
    // let dialogs=[{
    //     id:1,
    //     name: 'Vlad' 
    // },{
    //     id:2,
    //     name: 'Anya' 
    // },{
    //     id:3,
    //     name: 'Yan' 
    // },{
    //     id:4,
    //     name: 'Mario' 
    // },{
    //     id:5,
    //     name: 'Andrey' 
    // },]
    
    // let dialogsElements=dialogs
    // .map(d => <DialogItem name={d.name} id={d.id}/>)

    let path="/dialogs/"+props.id;
    return(
        <div className={s.dialog +' '+ s.active }>
        <NavLink to ={path}>{props.name}</NavLink>
    </div>
    )
}









export default DialogItem;