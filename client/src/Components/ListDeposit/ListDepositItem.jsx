import depositSlice from "../../redux/slices/depositSlice"
import s from "./listDeposit.module.scss"

const ListDepositItem = (props) => {
    return (
        <ul className={s.depositCard}>
            <p className={s.depositCard_sum}>Sum: {props.sum}$</p>
            <p>Months: {props.months}</p>
            <p>Interest: {props.interest}%</p>
            <p>AllSum: {props.allSum}$</p>
        </ul>
    )
}

export default ListDepositItem