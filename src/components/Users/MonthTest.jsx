import React, {useEffect, useState} from "react";
import style from "./Users.module.scss";
class Month extends React.Component{


    constructor(props){
        super(props);
        this.state={
            users:null,
            usersQuantity:null,
            color:"white"
        }
    }

    setUsersList=()=>{
        this.props.getUsers().then(result=>{
            let usersList =  result.filter(user=>{
                let date = (new Date(user.dob)).getMonth();
                if(date === this.props.monthNumber){
                    return user;
                }
            });
            this.setState({users:usersList});
            this.setState({usersQuantity:usersList.length});
        })
    };

    determineColor = (usersQuantity)=>{
        if (usersQuantity >= 0 && usersQuantity <= 2) {
            this.setState({color:"grey"});
        } else if (usersQuantity <= 6 && usersQuantity >= 3) {
            this.setState({color:"blue"});
        } else if (usersQuantity <= 10 && usersQuantity >= 7) {
            this.setState( {color:"green"});
        } else if (usersQuantity >= 11) {
            this.setState({color:"red"});
        } else{
            this.setState({color:"white"});
        }
    };

    eraseColor = ()=>{
        setTimeout(()=>this.setState("white"), 200);
    };

    openUsers = (monthNumber)=>{
        this.props.fetchUsers(monthNumber);
        this.setUsersList();
    };
    render(){
        return (
            <li style={{background:this.color}} className={style.month}
                onMouseOver={()=>{
                    this.openUsers(this.props.monthNumber);
                }}
                onMouseLeave={()=>this.eraseColor()}>{this.props.monthName}
            </li>
        )
    }

};

export default Month;
