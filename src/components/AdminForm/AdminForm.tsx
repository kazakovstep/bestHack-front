import React from 'react';
import AdminCard from "../AdminCard/AdminCard";
import {Input} from "../Input/Input";
import {Textarea} from "../Textarea/Textarea";
import {inspect} from "util";
import styles from './AdminForm.module.css'

const AdminForm = () => {
    return (
        <AdminCard title={"Отправить Push-уведомление"}>
            <div className={styles.wrapper}>
                <Input className={styles.user}/>
                <Input placeholder={"Заголовок"} className={styles.title}/>
                <Textarea placeholder={"Тело уведомления"} state={"default"} className={styles.text}/>
            </div>
        </AdminCard>
    );
};

export default AdminForm;