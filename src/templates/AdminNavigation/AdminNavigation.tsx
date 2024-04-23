import React, {DetailedHTMLProps, HTMLAttributes, useState} from 'react';
import styles from '../../styles/AdminHeader.module.css'
import {Link} from "react-router-dom";
import {H} from "../../components/Htag/Htag";
import cn from 'classnames'

interface AdminNavigationProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{}

const AdminNavigation = ({className, ...props}: AdminNavigationProps) => {
    const[adminFullName, setAdminFullName] = useState<string>("John")

    return (
        <nav className={cn(styles.navigation, className)} {...props}>
            <H type={"body"} size={"xl"}>
                <Link to={"/"} className={styles.goToMain}>
                    Go to Main Page
                </Link>
            </H>
            <H type={"body"} size={"xl"}>
                {adminFullName}
            </H>
        </nav>
    );
};

export default AdminNavigation;