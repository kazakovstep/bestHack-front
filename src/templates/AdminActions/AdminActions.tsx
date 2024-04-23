import React from 'react';
import styles from '../../styles/AdminActions.module.css'
import {H} from "../../components/Htag/Htag";
import AdminCard from "../../components/AdminCard/AdminCard";
import AdminUsers from "../../components/AdminUsers/AdminUsers";

const AdminActions = () => {
    return (
        <div>
            <H type={"h2"} size={"xxl"} className={styles.title}>
                Admin actions
            </H>
            <div className={styles.listActions}>
                <AdminUsers/>
                <AdminCard title={"Отправить push-уведомление"}>
                    dfsfsdf
                </AdminCard>
                <AdminCard title={"История всех событий"}>
                    dfsfsdf
                </AdminCard>
                <AdminCard title={"Просмотр пользователей"}>
                    dfsfsdf
                </AdminCard>
                <AdminCard title={"Просмотр пользователей"}>
                    dfsfsdf
                </AdminCard>
            </div>
        </div>
    );
};

export default AdminActions;