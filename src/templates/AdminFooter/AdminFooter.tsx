import React, {DetailedHTMLProps, HTMLAttributes} from 'react';
import styles from '../../styles/AdminFooter.module.css'
import cn from 'classnames'
import {H} from "../../components/Htag/Htag";

interface AdminFooterProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{}

const AdminFooter = ({className, ...props}: AdminFooterProps) => {
    return (
        <footer className={cn(styles.footer, className)} {...props}>
            <H type={"body"} size={"xl"}>
                Alertify
            </H>
            <div className={styles.footerActions}>
                <a className={styles.footerAction} href={"#"}>
                    Support
                </a>
                <a className={styles.footerAction} href={"#"}>
                    Help Center
                </a>
                <a className={styles.footerAction} href={"#"}>
                    Privacy
                </a>
            </div>
        </footer>
    );
};

export default AdminFooter;