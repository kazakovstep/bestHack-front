import React from 'react';
import {withAdminLayout} from "../../layout/AdminLayout/AdminLayout";
import AdminUsers from "../../components/AdminUsers/AdminUsers";

const Users = () => {
    return (
        <>
            <AdminUsers/>
        </>
    );
};

export default withAdminLayout(Users)