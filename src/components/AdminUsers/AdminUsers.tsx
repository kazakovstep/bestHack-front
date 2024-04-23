import React from 'react';
import styles from './AdminUsers.module.css'
import AdminCard from "../AdminCard/AdminCard";
import deleteImg from '../../images/deleteUser.svg'
import cn from "classnames";
import {H} from "../Htag/Htag";

interface UserRow{
    username: string,
    role: string,
    email: string,
}

const DeleteButton = () => {
    return(
        <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke="black" stroke-width="2" stroke-miterlimit="10"/>
            <path d="M20 12L12 20" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M20 20L12 12" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )
}

const UserRow = ({username, role, email}: UserRow) => {
    return(
        <tr className={cn(styles.userRow)}>
            <td>1</td>
            <td>{username}</td>
            <td>{role}</td>
            <td>{email}</td>
            <td className={styles.deleteBtn}>
                <button className={styles.delete}>
                    <DeleteButton/>
                </button>
            </td>
        </tr>
    )
}

const AdminUsers = () => {
    return (
        <AdminCard title={"Просмотр пользователей"}>
            <table className={styles.table}>
                <tbody>
                    <tr className={cn(styles.userRow, styles.head)}>
                        <td>
                            <H type={"body"} size={"xxl"}>
                                ID
                            </H>
                        </td>
                        <td>
                            <H type={"body"} size={"xxl"}>
                                Имя пользователя
                            </H>
                        </td>
                        <td>
                            <H type={"body"} size={"xxl"}>
                                Роль
                            </H>
                        </td>
                        <td>
                            <H type={"body"} size={"xxl"}>
                                Электронная почта
                            </H>
                        </td>
                        <td></td>
                    </tr>
                    <UserRow
                        username={"Rudiko"}
                        role={"Admin"}
                        email={"chakryan_rudik@mail.ru"}
                    />
                    <UserRow
                        username={"Rudiko"}
                        role={"Admin"}
                        email={"chakryan_rudik@mail.ru"}
                    />
                    <UserRow
                        username={"Rudiko"}
                        role={"Admin"}
                        email={"chakryan_rudik@mail.ru"}
                    />
                </tbody>
            </table>
        </AdminCard>
    );
};

export default AdminUsers;