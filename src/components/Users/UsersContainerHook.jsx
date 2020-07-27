import React, {useState} from "react";
import style from "./Users.module.scss";
import Month from "./Month";
import Users from "./Users";

const UsersContainerH = (props)=>{

    const [fetching, toggleIsFetching] = useState(false);
    const [users, changeusers] = useState(null);


    const monthNumbers = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    return (
        <div className={style.page_container}>
            <header className={style.months}>
                <ul className={style.months_list}>
                    {this.state.monthNumbers.map((month, index)=>{
                        return <Month key={index} setMonth={this.setMonth} usersQuantity={this.state.usersQuantity} monthName={month} monthNumber={index} />
                    })}
                </ul>
            </header>
            <div className={style.users}>
                {
                    this.state.users && <Users users={this.state.users}/>
                }
            </div>
        </div>
    )
};

export default UsersContainerH;