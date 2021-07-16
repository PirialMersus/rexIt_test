import s from "./Footer.module.scss";
import styles from "../../common/styles/styles.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {faPhoneAlt} from "@fortawesome/free-solid-svg-icons/faPhoneAlt";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons/faMapMarkerAlt";
import {faShareAlt} from "@fortawesome/free-solid-svg-icons/faShareAlt";
import {faPinterestP} from "@fortawesome/free-brands-svg-icons/faPinterestP";
import {faFacebookF} from "@fortawesome/free-brands-svg-icons/faFacebookF";
import google from './../../img/fa-google-plus.svg'


export const Footer = () => {
    return (
        <div className={s.wrapper}>
            <div className={styles.commonContainer}>
                <ul className={s.footerColumns}>
                    <li className={s.phoneColumn}>
                        <span><FontAwesomeIcon icon={faPhoneAlt}/></span>
                        <div className={s.info}>
                            <h5>phone</h5>
                            <span>+43 ( 987 ) 345 - 6782</span>
                        </div>
                    </li>
                    <li className={s.addressColumn}>
                        <span><FontAwesomeIcon icon={faMapMarkerAlt}/></span>
                        <div className={s.info}>
                            <h5>address</h5>
                            <span>Cracker Inc.<br/>10 Cloverfield Lane <br/>Berlin, IL 10928 <br/>Germany
                            </span>
                        </div>
                    </li>
                    <li className={s.shareColumn}>
                        <span><FontAwesomeIcon icon={faShareAlt}/></span>
                        <div className={s.info}>
                            <h5>share us</h5>
                            <ul>
                                <li>
                                    <div className={s.pinterest}><FontAwesomeIcon icon={faPinterestP}/></div>
                                    <span>https://www.pinterest.com/</span>
                                </li>
                                <li>
                                    <div className={s.faceBook}><FontAwesomeIcon icon={faFacebookF}/></div>
                                    <span>https://www.facebook.com/</span>
                                </li>
                                <li>
                                    <div className={s.google}><img src={google} alt="google"/></div>
                                    <span>https://www.google.com/</span>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}