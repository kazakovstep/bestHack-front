import React, {useEffect, useState} from 'react';
import styles from "../../styles/main.module.css"
import {Alert} from "../../components/Alert/Alert";

// @ts-ignore
const WebSocketClient = ({onMessage}) => {
    useEffect(() => {
        const ws = new WebSocket('ws://localhost:3000');

        ws.onopen = () => {
            console.log('Подключились к серверу');
        };

        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            onMessage(data);
        };

        ws.onclose = () => {
            console.log('Соединение закрыто');
        };

        return () => {
            ws.close();
        };
    }, [onMessage]);

    return null;
};

const Main = () => {
    const [messages, setMessages] = useState<string[]>([]);

    const handleNewMessage = (message: string) => {
        setMessages((prevMessages) => [...prevMessages, message]);
    };

    return (
        <div className={styles.page}>
            <WebSocketClient onMessage={handleNewMessage}/>
            {messages.map((message, index) => (
                <Alert key={index} content={message}/>
            ))}
        </div>
    );
};

export default Main;