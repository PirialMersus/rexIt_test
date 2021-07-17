import s from './RecycleBin.module.scss';
import {Tohumlar} from "../helperComponents/Tohumlar/Tohumlar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons/faAngleDown";
import styles from './../../common/styles/styles.module.scss'
import logo from './../../img/logo.png'

export const RecycleBin = () => {
    return (
        <div className={s.wrapper}>
            <div className={styles.commonContainer}>
                <div className={s.recycleContent}>
                    <img src={logo} alt="logo"/>
                    <ul className={s.recycleBinContent}>
                        <li><Tohumlar counter={3}/></li>
                        <li><span>total:</span><span>143 €</span></li>
                        <li>
                            <span>details</span>
                            <FontAwesomeIcon icon={faAngleDown}/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}