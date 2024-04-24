import React, {useState} from 'react';
import AdminCard from "../AdminCard/AdminCard";
import {Input} from "../Input/Input";
import {Textarea} from "../Textarea/Textarea";
import styles from './AdminForm.module.css'
import {Button} from "../Button/Button";
import {token} from "../../redux/api/AdminAPI";

const AdminForm = () => {

    const [roleDestination, setRoleDestination] = useState("all");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handlePush = () => {
        try {
            fetch(`http://localhost:8080/push`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    role_destination: roleDestination,
                    title,
                    description
                })
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <AdminCard title={"Отправить Push-уведомление"}>
            <div className={styles.wrapper}>
                <select className={styles.select} value={roleDestination}
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setRoleDestination(e.target.options[e.target.selectedIndex].value)}>
                    <option value={"all"}>Всем</option>
                    <option value={"admin"}>Администраторам</option>
                    <option value={"employee"}>Сотрудникам</option>
                </select>
                <Input placeholder={"Заголовок"}
                       onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                       className={styles.title} value={title}/>
                <Textarea placeholder={"Тело уведомления"}
                          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
                          value={description}
                          state={"default"} className={styles.text}/>
                <Button type={"border"} className={styles.button} onClick={handlePush}>Отправить</Button>
            </div>
        </AdminCard>
    );
};

export default AdminForm;