import React, {useState} from 'react';
import styles from './AdminUsers.module.css'
import AdminCard from "../AdminCard/AdminCard";
import cn from "classnames";
import {H} from "../Htag/Htag";
import {token, useGetAllUsersQuery, User} from "../../redux/api/AdminAPI";

interface UserRow {
    id: number,
    username: string,
    role: string,
    email: string,
}

const DeleteButton = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
                stroke="black" stroke-width="2" stroke-miterlimit="10"/>
            <path d="M20 12L12 20" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M20 20L12 12" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )
}

const UserRow = ({id, username, role, email}: UserRow) => {

    const handleDelete = (id: number) => {
        try {
            fetch(`http://localhost:8080/admin/users/${id}`, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }).catch(e => console.log(e))
        } catch (error) {
            console.log(error)
        }
    }

    const handleUpdateRole = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        try {
            await fetch(`http://localhost:8080/admin/users`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    id,
                    role: [{
                        id: e.target.options[e.target.selectedIndex].value === "ROLE_USER" ? 1 : 2,
                        name: e.target.options[e.target.selectedIndex].value
                    }]
                })
            });
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <tr className={cn(styles.userRow)}>
            <td>{id}</td>
            <td>{username}</td>
            <td>
                <select className={styles.select} defaultValue={role}
                        onChange={handleUpdateRole}>
                    <option value={"ROLE_ADMIN"}>ROLE_ADMIN</option>
                    <option value={"ROLE_USER"}>ROLE_USER</option>
                </select>
            </td>
            <td>{email}</td>
            <td className={styles.deleteBtn}>
                <button className={styles.delete}
                        onClick={() => handleDelete(id)}>
                    <DeleteButton/>
                </button>
            </td>
        </tr>
    )
}

const AdminUsers = () => {

    const {data: users} = useGetAllUsersQuery();

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
                {users?.map((user: User) => (
                    <UserRow
                        id={user?.id}
                        username={user?.username}
                        role={user?.roles[0].name}
                        email={user?.email}
                    />
                ))}
                </tbody>
            </table>
        </AdminCard>
    );
};

export default AdminUsers;