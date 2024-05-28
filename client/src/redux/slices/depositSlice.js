import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    list: [
        {
            id: 1,
            sum: 1000,
            interest: 0.05,
            months: 3,
            allSum: 150
        }

    ],
    totalAmount: 0
}

const depositSlice = createSlice({
    name: "deposits",
    initialState,
    reducers: {
        createNewDeposite: (state, action) => {
            const allSum = parseFloat(action.payload.sum) + parseFloat(action.payload.sum * (action.payload.interest/100 * action.payload.months))
            state.list = [
                ...state.list,
                {
                    id: nanoid(),
                    sum: action.payload.sum,
                    months: action.payload.months,
                    interest: action.payload.interest/100,
                    allSum
                }
            ]
            state.totalAmount += allSum
        }

    }
})

export const {createNewDeposite} = depositSlice.actions

export default depositSlice.reducer