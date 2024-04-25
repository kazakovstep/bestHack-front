import React, {useEffect, useState} from 'react';
import styles from "../../styles/main.module.css"
import {Alert} from "../../components/Alert/Alert";
import {useGetAllPushesQuery} from "../../redux/api/HistoryAPI";
import Header from "../../templates/Header/Header";
import {useGerCurrentUserQuery} from "../../redux/api/UserAPI";
import {token} from "../../redux/api/AdminAPI";


const Main = () => {

    useEffect(() => {
        if (!token) {
            window.location.href = "/login"
        }
    }, []);

    const {data: user} = useGerCurrentUserQuery();


    useEffect(() => {
        const es = new EventSource('http://158.160.159.255:8080/push/get/all');

        es.onopen = () => console.log(">>> Connection opened for all!");
        es.onmessage = (e) => {
            const data = JSON.parse(e.data);
            console.log('>>>', data);
            // Предполагаем, что setMessage и setTitle -- это функции состояния в вашем компоненте
            setMessage(data.description);
            setTitle(data.title);
        };
        es.onerror = (e) => {
            console.log("ERROR!", e);
        };

        let roleUrl = 'http://158.160.159.255:8080/push/get/';
        //@ts-ignore
        if (user?.roles.length > 0) {
            const roleName = user?.roles[0].name;
            if (roleName === "ROLE_ADMIN") {
                roleUrl += "admin";
            } else if (roleName === "ROLE_USER") {
                roleUrl += "user";
            } else {
                roleUrl += "employee";
            }
        }

        const esRole = new EventSource(roleUrl);

        esRole.onopen = () => console.log(`>>> Connection opened for role: ${user?.roles[0].name}`);
        esRole.onmessage = (e) => {
            const data = JSON.parse(e.data);
            console.log('Role specific >>>', data);
            setMessage(data.description);
            setTitle(data.title);
        };
        esRole.onerror = (e) => {
            console.log("Role specific ERROR!", e);
        };

        return () => {
            es.close();
            esRole.close();
        };
    }, [user]);

    const [message, setMessage] = useState("");
    const [title, setTitle] = useState("");

    useEffect(() => {
        if (!("Notification" in window)) {
            console.log("This browser does not support system notifications");
        } else if (Notification.permission === "granted") {
            new Notification(title, {
                body: message,
                icon: "http://patrempro.ru/files/news_imgs/1643438507.jpg"
            });
        } else if (Notification.permission !== 'denied') {
            Notification.requestPermission(function (permission) {
                if (permission === "granted") {
                    new Notification("Hello from your app!");
                }
            });
        }
    }, [message, title]);

    const {data: alerts} = useGetAllPushesQuery();


    return (
        <>
            <Header/>
            <div className={styles.page}>
                {alerts?.map((alert) => (
                    <Alert push={alert}/>
                ))}
            </div>
        </>
    );
};

export default Main;