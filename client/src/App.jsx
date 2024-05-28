import { BrowserRouter, Routes, Route } from "react-router-dom"
import CreateDeposit from "./Components/pages/CreateDeposit"
import Header from "./Components/Header/Header"
import ListDeposit from "./Components/ListDeposit/ListDeposit"
import depositeSlice from "./redux/slices/depositSlice"

const App = () => {
  return (
    <>
    <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/createDeposit" element={<CreateDeposit/>}/>
                <Route path="/" element={<ListDeposit/>}/>
            </Routes>
      </BrowserRouter>
    
  </>
  )
}

export default App
