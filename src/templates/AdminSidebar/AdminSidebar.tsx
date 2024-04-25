import React, {useState} from 'react';
import styles from '../../styles/AdminSidebar.module.css'
import {AdminSidebarProps} from "./AdminSidebar.props";
import cn from "classnames";
import {H} from "../../components/Htag/Htag";
import {Link} from "react-router-dom";
import SidebarItem from "../../components/SidebarItem/SidebarItem";


const AdminSidebar = ({className, ...props}: AdminSidebarProps) => {
    return (
        <aside className={cn(styles.sidebar, className)} {...props}>
            <H type={"body"} size={"xl"} className={styles.title}>
                AlertifyAdminPage
            </H>
            <ul className={styles.sidebarList}>
                <SidebarItem content={"Push-уведомление"}/>
                <SidebarItem content={"Список пользователей"}/>
                <SidebarItem content={"Список уведомлений"}/>
            </ul>
        </aside>
    );
};

export default AdminSidebar;