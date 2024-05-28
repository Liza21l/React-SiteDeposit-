import { useSelector } from "react-redux"
import ListDepositItem from "./ListDepositItem"
import s from "./listDeposit.module.scss"

const ListDeposit = () => {
    const storeList = useSelector(state => state.deposit.list)
    const totalAmount = useSelector(state => state.deposit.totalAmount)
    const DepositCollection = storeList.map(item => {
        return (
            <ListDepositItem key={item.id} sum={item.sum} months={item.months} interest={item.interest} allSum={item.allSum}/>
        )
    })
    return (
        <>
            <h2 className={s.title}>Your Deposits</h2>
            <ul> 
                {DepositCollection}
            </ul>
            <h5>Total Amount deposits: {totalAmount}$</h5>
        </>
    )
}
export default ListDeposit