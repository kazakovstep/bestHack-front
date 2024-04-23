import React from 'react';
import styles from '../../styles/Admin.module.css'
import AdminNavigation from "../../templates/AdminNavigation/AdminNavigation";
import AdminFooter from "../../templates/AdminFooter/AdminFooter";
import AdminActions from "../../templates/AdminActions/AdminActions";
import {withAdminLayout} from "../../layout/AdminLayout/AdminLayout";

const Admin = () => {
    return (
        <>
            <AdminActions/>
        </>
    );
};

export default withAdminLayout(Admin);