import React, {useEffect, useState} from 'react';
import styles from "../../styles/main.module.css"
import {Alert} from "../../components/Alert/Alert";
import {useGetAllPushesQuery} from "../../redux/api/HistoryAPI";


const Main = () => {

    const es = new EventSource("http://localhost:8080/push/get/all");

    useEffect(() => {
        es.onopen = () => console.log(">>> Connection opened!");

        es.onmessage = (e) => {
            console.log(">>>", JSON.parse(e.data));
            setMessage(JSON.parse(e.data).description)
            setTitle(JSON.parse(e.data).title)
        }

        es.onerror = (e) => console.log("ERROR!", e);
        return () => es.close();
    }, []);

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
        <div className={styles.page}>
            {alerts?.map((alert) => (
                <Alert push={alert}/>
            ))}
        </div>
    );
};

export default Main;