import {AlertProps} from "./Alert.props";
import styles from './Alert.module.css';
import {H} from "../Htag/Htag";

export const Alert = ({className, ...props}: AlertProps): JSX.Element => {
    return (
        <div className={styles.alert}>
            <div className={styles.imgBlock}>
                <img src={"../../avatar.svg"} alt={"Avatar"} className={styles.img}/>
            </div>
            <div className={styles.info}>
                <div className={styles.userInfo}>
                    <H type={"body"} size={"large"} className={styles.user}>admin</H>
                    <H type={"body"} size={"small"}>22.22.2222</H>
                </div>
                <div className={styles.alertInfo}>
                    <H type={"body"} size={"medium"}>admin adminadmin adminadmin adminadmin adminadmin adminadmin
                        adminadmin adminadmin adminadmin adminadmin adminadmin adminadmin adminadmin adminadmin
                        adminadmin adminadmin adminadmin adminadmin adminadmin adminadmin adminadmin adminadmin
                        adminadmin adminadmin adminadmin adminadmin adminadmin adminadmin adminadmin adminadmin
                        adminadmin adminadmin admin</H>
                </div>
            </div>
        </div>
    )
}