import React from "react";
import Users from "./Users";
import * as axios from "axios";
import style from './Users.module.scss';
import Month from "./Month";


class UsersContainer extends React.Component{

    constructor(props){
        super(props);
        this.state={
            users:null,
            selectedMonthUsers:null,
            monthListWithColors:null,
            monthList : [
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
            ]
        }
    }

    componentDidMount() {
        this.setUsers();
    }

    setUsers = ()=>{
        this.getUsers().then(users=> {
            this.setState({users:users});
            let monthListWithColors = this.createMonthListWithColors();
            this.setState({monthListWithColors: monthListWithColors});
        });
    };

    getUsers=()=>{
        return axios.get("https://yalantis-react-school-api.yalantis.com/api/task0/users").then(response=>{
            return response.data;
        })
    };

    createMonthListWithColors =()=>{
        return this.state.monthList.map((month, index)=>{
            let monthUsers = this.getMonthUsers(index);
            let color = this.getMonthColor(monthUsers.length);
            return {month, color};
        });
    };

    getMonthColor = (usersQuantity)=>{
        if(usersQuantity <=2){
            return "grey";
        }else if(usersQuantity<=6 && usersQuantity >=3){
            return "blue";
        }else if(usersQuantity<=10 && usersQuantity >=7){
            return "green";
        }else if(usersQuantity>=11){
            return "red";
        }
    };

    getMonthUsers=(monthNumber)=>{
        return  this.state.users.filter(user=>{
            let month = (new Date(user.dob)).getMonth();
            if(month === monthNumber){
                return user;
            }
        });
    };

    setMonthUsers=(monthNumber)=>{
        let monthUsers = this.getMonthUsers(monthNumber);
        this.setState({selectedMonthUsers:monthUsers});
    };

    render() {
        return(
            <div className={style.page_container}>
                <header className={style.months}>
                    <ul className={style.months_list}>
                        {this.state.monthListWithColors && this.state.monthListWithColors.map((month, index)=>{
                            return <Month key={index} setMonthUsers={this.setMonthUsers} color={month.color} monthName={month.month} monthNumber={index} />
                        })}
                    </ul>
                </header>
                <div className={style.users}>
                    {
                        this.state.selectedMonthUsers && <Users users={this.state.selectedMonthUsers}/>
                    }
                </div>
            </div>
        )
    }
}

export default UsersContainer;