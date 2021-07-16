import s from "./AboutCracker.module.scss";
import styles from "../../common/styles/styles.module.scss";
import soybean from './../../img/soybean.png'
import sesame from './../../img/sesame.png'
import wheat from './../../img/wheat.png'
import corn from './../../img/corn.png'
import pacage from './../../img/pacage.png'
import {useDispatch, useSelector} from "react-redux";
import Slider, {Range} from 'rc-slider';
import 'rc-slider/assets/index.css';
import {SetChosenPackAC, SetFirstRowValueAC, SetSecondRowValueAC, SetThirdRowValueAC} from "../../store/appReducer";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons/faAngleDown";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {ChoosePackMenu} from "../../common/choosePackMenu/ChoosePackMenu";
import {useState} from "react";
import {faPlus} from "@fortawesome/free-solid-svg-icons/faPlus";


export const AboutCracker = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    console.log(isMenuOpen)
    const dispatch = useDispatch()
    const {
        firstRowValue,
        secondRowValue,
        thirdRowValue,
        percentLeft,
        chosenPack
    } = useSelector(state => state.app)

    const onChangeFirstRowHandle = (value) => {
        console.log('onChangeFirstRowHandle')
        dispatch(SetFirstRowValueAC(value))
    }
    const onChangeSecondRowHandle = (value) => {
        console.log('onChangeFirstRowHandle')
        dispatch(SetSecondRowValueAC(value))
    }
    const onChangeThirdRowHandle = (value) => {
        console.log('onChangeFirstRowHandle')
        dispatch(SetThirdRowValueAC(value))
    }

    const onClickHandler = (value) => {
        dispatch(SetChosenPackAC(value))
    }

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
                            <span>143 €</span>
                            <span>current value:</span>
                        </p>
                        <ul className={s.tableWithScrollInputs}>
                            <li>
                                <img src={soybean} alt="soybean"/>
                                <div>
                                    <Slider color='red' onChange={onChangeFirstRowHandle} value={firstRowValue}/>
                                </div>
                                <span>{`${firstRowValue}%`}</span>
                            </li>
                            <li>
                                <img src={sesame} alt="sesame"/>
                                <div>
                                    <Slider color='#49743f' onChange={onChangeSecondRowHandle} value={secondRowValue}/>
                                </div>
                                <span>{`${secondRowValue}%`}</span>
                            </li>
                            <li>
                                <img src={wheat} alt="wheat"/>
                                <div>
                                    <Slider color='#aba000' onChange={onChangeThirdRowHandle} value={thirdRowValue}/>
                                </div>
                                <span>{`${thirdRowValue}%`}</span>
                            </li>
                            <li>
                                <img src={corn} alt="corn"/>
                                <div>
                                    <Slider disabled value={percentLeft}/>
                                </div>
                                <span>{`${percentLeft}%`}</span>
                            </li>
                            <li>
                                <img src={pacage} alt="pacage"/>
                                <div>
                                    <div className={s.btn} onClick={() => {
                                        setIsMenuOpen(() => !isMenuOpen)
                                    }}>
                                        <span>{chosenPack}</span>
                                        <FontAwesomeIcon icon={faAngleDown}/>
                                        {isMenuOpen && <ChoosePackMenu
                                            onClickHandler={onClickHandler}
                                            setIsMenuOpen={setIsMenuOpen}/>}
                                    </div>
                                </div>
                            </li>
                            <li>
                                {/*<img src={pacage} alt="empty"/>*/}
                                {/*<div>empty</div>*/}
                                <div><FontAwesomeIcon icon={faPlus}/></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}