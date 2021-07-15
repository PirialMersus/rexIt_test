import s from "./Header.module.scss";
import styles from "../../common/styles/styles.module.scss";
import logo from './../../img/logo.png'


export const Header = () => {
    return (
        <div className={s.wrapper}>
            <div className={styles.commonContainer}>
                <div className={s.headerContent}>
                    <ul>
                        <li className={s.logoItem}><img src={logo} alt="logo"/></li>
                        <li><span>Home</span></li>
                        <li><span>About us</span></li>
                        <li><span>Contacts</span></li>
                        <li><span>Checkout</span></li>
                        <li><span>Account</span></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}