import React from "react";
import Users from "./Users";
import * as axios from "axios";
import style from './Users.module.scss';
import Month from "./Month";
import Preloader from "../Preloader/Preloader";


class UsersContainer extends React.Component{

    constructor(props){
        super(props);
        this.state={
            isFetching: false,
            monthNumber: 0,
            quantity: 0,
            users:null,
            monthUsers:null,
            monthNumbers : [
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

    getUsers=()=>{
        return axios.get("https://yalantis-react-school-api.yalantis.com/api/task0/users").then(response=>{
            return response.data;
        })
    };

    fetchUsers=(monthNumber)=>{
            let usersList =  this.state.users.filter(user=>{
                let date = (new Date(user.dob)).getMonth();
                if(date === monthNumber){
                    return user;
                }
            });
        this.setState({monthUsers:usersList}) ;
    };

    componentDidMount() {
        // устанавливаем список юзеров при монтировании компонента
        this.setState({isFetching:true});
        this.getUsers().then(result=>{
            this.setState({users:result});
        });
        this.setState({isFetching:false});
    }
    componentDidUpdate() {
        console.log("componentdidUPDATE")
    }

    render() {
           if(this.state.isFetching){
                return <Preloader/>;
           }
           console.log("render");
        return(

            <div className={style.page_container}>
                <header className={style.months}>
                    <ul className={style.months_list}>
                        {this.state.monthNumbers.map((month, index)=>{
                            return <Month  key={index} fetchUsers={this.fetchUsers} getUsers={this.getUsers} monthName={month} monthNumber={index} />
                        })}
                    </ul>
                </header>
                <div className={style.users}>
                    {
                        this.state.monthUsers && <Users users={this.state.monthUsers}/>
                    }
                </div>
            </div>
        )
    }
}

export default UsersContainer;