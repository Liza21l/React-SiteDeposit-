import { Link } from "react-router-dom"
import s from "./header.module.scss"

const Header = () => { 
    return ( 
        <header className={s.header}> 
        <h1 className={s.header_logo}>Logo</h1>
            <div>
                <Link className={s.header_link} to="/createDeposit">Create Deposit</Link>
                <Link className={s.header_link} to="/">List Deposit</Link>
            </div>
        </header>
    )
}

export default Header