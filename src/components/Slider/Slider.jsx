import s from "./Slider.module.scss";
import styles from "../../common/styles/styles.module.scss";

export const Slider = () => {
    return (
        <div className={s.wrapper}>
            <div className={styles.commonContainer}>
                <h3>Mostly tastes with freshes</h3>
                <div className={s.greenSquare}>
                    <div className={s.lineClass}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad adipisci aspernatur
                            doloribus id non perferendis, tenetur ullam! Deleniti dolores earum eos hic id impedit
                            inventore itaque laborum natus sed!
                        </p>
                    </div>
                </div>
                <div className={s.buttonWrap}>
                    <button>taste it</button>
                </div>
            </div>
        </div>
    )
}