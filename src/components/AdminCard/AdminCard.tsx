import React, {JSX, ReactNode} from 'react';
import styles from './AdminCard.module.css'
import {H} from "../Htag/Htag";

interface AdminCardProps{
    children: ReactNode
    title: string
}

const AdminCard = ({children, title}: AdminCardProps ): JSX.Element=> {
    return (
        <div className={styles.card}>
            <H type={"body"} size={"xxl"}>
                {title}
            </H>
            <div className={styles.cardContent}>
                {children}
            </div>
        </div>
    );
};

export default AdminCard;