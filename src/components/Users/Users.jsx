import React from "react";
import style from './Users.module.scss';

const Users =(props)=>{
    return (
        <table className={style.users_table}>
            <caption className={style.title}>Users list</caption>
            <thead className={style.heading}>
                <tr className={style.heading_elems}>
                    <th className={style.elem} scope={"col"}>First name</th>
                    <th className={style.elem} scope={"col"}>Last name</th>
                    <th className={style.elem} scope={"col"}>Id</th>
                    <th className={style.elem} scope={"col"}>Date of birth</th>
                </tr>
            </thead>
            <tbody >
                {props.users.map(user=>{
                    return (
                        <tr key={user.id} className={style.user_info}>
                            <td className={style.user_info_element} colSpan={1}>{user.firstName}</td>
                            <td className={style.user_info_element} colSpan={1}>{user.lastName}</td>
                            <td className={style.user_info_element} colSpan={1}>{user.id}</td>
                            <td className={style.user_info_element} colSpan={1}>{user.dob}</td>
                        </tr>
                    );
                })}
            </tbody>

        </table>

    )
};

export default Users;