import { useDispatch } from "react-redux";
import { useState } from "react";
import { createNewDeposite } from "../../redux/slices/depositSlice";

const SignIn = () => {
    const dispatch = useDispatch()
    const [form, setForm] = useState({
        depositSum: "",
        depositMonths: "",
        depositInterest: "",
    });
    const handleUpdateForm = (formName, formData ) => {
        setForm(
            {
                ...form,
                [formName]: formData
            }
        )
    }
    const handleSubmitForm = () => {
        dispatch(createNewDeposite ({
            sum: form.depositSum,
            months: form.depositMonths,
            interest: form.depositInterest
        }))
    }
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
        }}>
            <h2>Form create deposit</h2>
            <input onChange={(e) => {handleUpdateForm("depositSum", e.target.value)}} placeholder="Write sum"/>
            <input onChange={(e) => {handleUpdateForm("depositMonths", e.target.value)}} placeholder="Write months"/>
            <input onChange={(e) => {handleUpdateForm("depositInterest", e.target.value)}}placeholder="Write interest"/>
            <button onClick={handleSubmitForm}>Create deposit</button>
        </form>
        )
}

export default SignIn