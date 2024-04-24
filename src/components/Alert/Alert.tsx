import {AlertProps} from "./Alert.props";
import styles from './Alert.module.css';
import {H} from "../Htag/Htag";
import {Button} from "../Button/Button";

export const Alert = ({content, className, ...props}: AlertProps): JSX.Element => {

    const handleCopy = () => {
        const text = document.getElementById("text") as HTMLHeadingElement
        navigator.clipboard.writeText(text.innerText);
    }

    return (
        <div style={{display: "flex", alignItems: "flex-start"}}>
            <div className={styles.alert}>
                <div className={styles.imgBlock}>
                    <img src={"../../avatar.svg"} alt={"Avatar"} className={styles.img}/>
                </div>
                <div className={styles.info}>
                    <div className={styles.userInfo}>
                        <H type={"body"} size={"large"} className={styles.user}>admin</H>
                    </div>
                    <div className={styles.alertInfo}>
                        <H type={"body"} size={"medium"} id={"text"}>{content}</H>
                    </div>
                </div>
            </div>
            <div className={styles.buttons}>
                <Button type={"text"} className={styles.copyButton}>
                    <svg id="like" viewBox="0 0 32 32" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M16 27C16 27 3.5 20 3.5 11.5C3.5 9.99737 4.02062 8.54114 4.97328 7.37908C5.92593 6.21703 7.25178 5.42093 8.72525 5.12624C10.1987 4.83154 11.7288 5.05646 13.0551 5.76272C14.3814 6.46898 15.4221 7.61296 16 9.00001V9.00001C16.5779 7.61296 17.6186 6.46898 18.9449 5.76272C20.2712 5.05646 21.8013 4.83154 23.2748 5.12624C24.7482 5.42093 26.0741 6.21703 27.0267 7.37908C27.9794 8.54114 28.5 9.99737 28.5 11.5C28.5 20 16 27 16 27Z"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </Button>
                <Button type={"text"} className={styles.copyButton} onClick={() => handleCopy()}>
                    <svg id="copy" viewBox="0 0 32 32" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M27 23V5H9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M23 9H5V27H23V9Z" stroke-width="2" stroke-linecap="round"
                              stroke-linejoin="round"/>
                    </svg>
                </Button>
                <H type={"body"} size={"small"}>22.22.2222</H>
            </div>
        </div>
    )
}