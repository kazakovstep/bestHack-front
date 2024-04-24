import React, {useEffect, useState} from 'react';
import styles from "../../styles/main.module.css"
import {Alert} from "../../components/Alert/Alert";


const Main = () => {

    return (
        <div className={styles.page}>
            <Alert/>
        </div>
    );
};

export default Main;