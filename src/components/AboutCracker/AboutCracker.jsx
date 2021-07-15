import s from "./AboutCracker.module.scss";
import styles from "../../common/styles/styles.module.scss";

export const AboutCracker = () => {
    return (
        <div className={s.wrapper}>
            <div className={styles.commonContainer}>
                <div className={s.aboutCrackerContent}>
                    <h3>About cracker</h3>
                    <div className={s.transparentSquare}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias aliquam aliquid assumenda
                            autem deleniti doloribus dolorum ea enim eos error expedita facere impedit ipsam itaque modi
                            neque nisi nostrum nulla optio pariatur quisquam quo ratione repellendus sequi sint sunt
                            tempore totam, unde vitae. Accusantium aliquid amet, aspernatur dolore dolores dolorum et
                            eum ex fuga fugit, officia pariatur soluta totam.</p>
                    </div>
                    <div className={s.crackerConstructor}>
                        <h3>Cracker constructor</h3>
                        <p>
                            <span>current value</span>
                            <span></span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}