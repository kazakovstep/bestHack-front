import React from 'react';
import AdminActions from "../../templates/AdminActions/AdminActions";
import {withAdminLayout} from "../../layout/AdminLayout/AdminLayout";
import AdminUsers from "../../components/AdminUsers/AdminUsers";
import AdminForm from "../../components/AdminForm/AdminForm";

const AdminPush = () => {
    return (
        <>
            <AdminForm/>
        </>
    );
};

export default withAdminLayout(AdminPush)