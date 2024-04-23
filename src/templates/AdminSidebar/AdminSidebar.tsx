import React from 'react';
import styles from '../../styles/AdminSidebar.module.css'
import {AdminSidebarProps} from "./AdminSidebar.props";
import cn from "classnames";
import {H} from "../../components/Htag/Htag";
import {Link} from "react-router-dom";


const AdminSidebar = ({className, ...props}: AdminSidebarProps) => {
    return (
        <aside className={cn(styles.sidebar, className)} {...props}>
            <H type={"body"} size={"xl"} className={styles.title}>
                AlertifyAdminPage
            </H>
            <ul className={styles.sidebarList}>
                <li className={styles.sidebarItem}>
                    <Link to={"/admin/push"}>
                        <H type={"body"} size={"xl"} className={styles.hItem}>
                            push-уведомление
                        </H>
                    </Link>
                </li>
                <li className={styles.sidebarItem}>
                    <Link to={"/admin/actions"}>
                        <H type={"body"} size={"xl"} className={styles.hItem}>
                            История событий
                        </H>
                    </Link>
                </li>
                <li className={styles.sidebarItem}>
                    <Link to={"/admin/roles"}>
                        <H type={"body"} size={"xl"} className={styles.hItem}>
                            Роли пользователей
                        </H>
                    </Link>
                </li>
            </ul>
        </aside>
    );
};

export default AdminSidebar;