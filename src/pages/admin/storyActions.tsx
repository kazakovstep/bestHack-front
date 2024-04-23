import React from 'react';
import {withAdminLayout} from "../../layout/AdminLayout/AdminLayout";
import AdminCard from "../../components/AdminCard/AdminCard";

const StoryActions = () => {
    return (
        <>
            <AdminCard title={"История событий"}>
                Action Story
            </AdminCard>
        </>
    );
};

export default withAdminLayout(StoryActions)