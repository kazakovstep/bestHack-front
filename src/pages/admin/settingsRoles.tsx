import React from 'react';
import {withAdminLayout} from "../../layout/AdminLayout/AdminLayout";
import AdminCard from "../../components/AdminCard/AdminCard";

const SettingsRoles = () => {
    return (
        <>
            <AdminCard title={"Настройка ролей"}>
                Roles
            </AdminCard>
        </>
    );
};

export default withAdminLayout(SettingsRoles)