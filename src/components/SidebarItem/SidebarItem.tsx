import React, {JSX, useCallback, useEffect, useState} from 'react';
import styles from "../../styles/AdminSidebar.module.css";
import {Link, To, useLocation} from "react-router-dom";
import {H} from "../Htag/Htag";
import cn from "classnames";

interface SidebarItemProps{
    content: "Push-уведомление" | "Список пользователей" | "Настройка ролей" | "История событий",
}

const SidebarItem = ({content, ...props}: SidebarItemProps): JSX.Element => {
    const[active, setActive] = useState(false)
    const[href, setHref] = useState<To | null>(null)
    const path = useLocation()

    const switchHref = useCallback((href: any) => {
        setHref(href)
    }, [])

    useEffect(() => {
        switch (content) {
            case "Push-уведомление":
                switchHref("/admin/push")
                break
            case "Список пользователей":
                switchHref("/admin/users")
                break
            case "Настройка ролей":
                switchHref("/admin/roles")
                break
            case "История событий":
                switchHref("/admin/story")
                break
            default:
                break
        }
    }, [])

    useEffect(() => {
        if (path.pathname === href){
            setActive(true)
        }
    }, [href]);

    return (
        <li className={cn(styles.sidebarItem, {
            [styles.active]: active
        })} {...props}>
            <Link to={href ? href : "/"}>
                <H type={"body"} size={"xl"} className={styles.hItem}>
                    {content}
                </H>
            </Link>
        </li>
    );
};

export default SidebarItem;