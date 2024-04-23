import React, {FunctionComponent, JSX} from 'react';
import {AdminLayoutProps} from "./AdminLayout.props";
import styles from './AdminLayout.module.css'
import AdminSidebar from "../../templates/AdminSidebar/AdminSidebar";
import AdminNavigation from "../../templates/AdminNavigation/AdminNavigation";
import AdminActions from "../../templates/AdminActions/AdminActions";
import AdminFooter from "../../templates/AdminFooter/AdminFooter";

const AdminLayout = ({children}: AdminLayoutProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <AdminSidebar className={styles.sidebar}/>
            <div className={styles.wrapperMain}>
                <AdminNavigation className={styles.nav}/>
                <main className={styles.main}>
                    {children}
                </main>
                <AdminFooter className={styles.footer}/>
            </div>
        </div>
    );
};

export const withAdminLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withAdminLayoutComponent(props: T): JSX.Element{
        return (
            <AdminLayout>
                <Component {...props}/>
            </AdminLayout>
        )
    }
}