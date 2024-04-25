import styles from "./Header.module.css"
import {H} from "../../components/Htag/Htag";
import {useGerCurrentUserQuery} from "../../redux/api/UserAPI";
import {Link} from "react-router-dom";

const Header = () => {

    const {data: user} = useGerCurrentUserQuery();

    return <header className={styles.header}>
        <div className={styles.logo}>
            <img src={"../favicon.ico"} alt={"icon"}/>
            <H type={"body"} size={"large"}>Alertify</H>
        </div>
        <H type={"body"} size={"large"}>Ваша роль: <Link
            to={user?.roles[0].name === "ROLE_ADMIN" ? "/admin/users" : ""}>{user?.roles[0].name}</Link></H>
    </header>
}

export default Header;