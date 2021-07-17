import s from "./Header.module.scss";
import styles from "../../common/styles/styles.module.scss";
import logo from './../../img/logo.png'


export const Header = () => {
    return (
        <div className={s.wrapper}>
            <div className={styles.commonContainer}>
                <div className={s.headerContent}>
                    <ul>
                        {/*<li className={s.logoItem}><img src={logo} alt="logo"/></li>*/}
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Contacts</a></li>
                        <li><a href="#">Checkout</a></li>
                        <li><a href="#">Account</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}