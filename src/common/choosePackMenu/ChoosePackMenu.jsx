import s from "./ChoosePackMenu.module.scss";

export const ChoosePackMenu = (props) => {

    const onFirstLiClickHandler = () => {
        props.onClickHandler('choose your pack')
        props.setIsMenuOpen(false)
    }
    const onSecondLiClickHandler = () => {
        props.onClickHandler('small pack')
        props.setIsMenuOpen(false)
    }
    const onThirdLiClickHandler = () => {
        props.onClickHandler('medium pack')
        props.setIsMenuOpen(false)
    }
    const onFoursLiClickHandler = () => {
        props.onClickHandler('large pack')
        props.setIsMenuOpen(false)
    }

    return (
        <div className={s.wrappper}>
            <ul>
                <li><span onClick={onFirstLiClickHandler}>choose your pack</span></li>
                <li><span onClick={onSecondLiClickHandler}>small pack</span></li>
                <li><span onClick={onThirdLiClickHandler}>medium pack</span></li>
                <li><span onClick={onFoursLiClickHandler}>large pack</span></li>
            </ul>
        </div>
    )
}