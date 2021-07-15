import s from './Tohumlar.module.scss'
import tohumlarImg from './../../../img/semen.png'

export const Tohumlar = (props) => {
    return (
        <div className={s.tohumlar}>
            <img src={tohumlarImg} alt="tohumlar"/>
            <div>
                <span>{props.counter}</span>
            </div>
        </div>
    )
}