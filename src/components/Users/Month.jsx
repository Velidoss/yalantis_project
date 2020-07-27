import React, {useEffect, useState} from "react";
import style from "./Users.module.scss";
import Users from "./Users";

const Month = (props)=>{

    const [users, setUsers] = useState([]);
    const [usersQuantity, setUsersQuantity] = useState(0);
    const [color, setColor] = useState("white");



    const setUsersList=()=>{
        props.getUsers().then(result=>{
            let usersList =  result.filter(user=>{
                let date = (new Date(user.dob)).getMonth();
                if(date === props.monthNumber){
                    return user;
                }
            });
            setUsers({usersList});
            setUsersQuantity({quantity:usersList.length});
            determineColor(usersList.length);
        })
    };

    const determineColor = (usersQuantity)=>{
        if (usersQuantity >= 0 && usersQuantity <= 2) {
            setColor("grey");
        } else if (usersQuantity <= 6 && usersQuantity >= 3) {
            setColor("blue");
        } else if (usersQuantity <= 10 && usersQuantity >= 7) {
            setColor( "green");
        } else if (usersQuantity >= 11) {
            setColor("red");
        } else{
            setColor("white");
        }
    };

    const eraseColor = ()=>{
        setTimeout(()=>setColor("white"), 200);
    };

    const openUsers = (monthNumber)=>{
        props.fetchUsers(monthNumber);
        setUsersList();
    };
    // if(props.monthNumber ===)

    return (
        <li style={{background:color}} className={style.month}
             onMouseOver={()=>{
                 openUsers(props.monthNumber);
             }}
             onMouseLeave={()=>eraseColor()}>{props.monthName}
        </li>
    )
};

export default Month;