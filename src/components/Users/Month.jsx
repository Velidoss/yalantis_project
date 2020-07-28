import React from "react";
import style from "./Users.module.scss";


const Month = (props)=>{

    const showUsers=()=>{
        props.setMonthUsers(props.monthNumber)
    };

    return (
        <div>
            <li style={{background:props.color }} className={style.month} onMouseOver={()=>showUsers()}>
                <p className={style.month_name}>{props.monthName}</p>
            </li>
        </div>

    )
};

export default Month;