import { useEffect } from "react"
import { Counter } from "../features/counter/Counter"
import "./App.css"
import { useAppDispatch, useAppSelector } from "./hooks"
import { appActions } from "./appSlice"
import { SuperButton } from "../common/components/SuperButton"
import DeleteIcon from '@mui/icons-material/Delete';
import { Header } from "../common/components/Header"

function App() {
  const isLoading = useAppSelector((state) => state.app.isLoading)

  const dispatch = useAppDispatch()

  useEffect(() => {
    setTimeout(() => {
      dispatch(appActions.setIsLoading({ isLoading: false }))
    }, 3000)
  }, [])

  
  return (
    <div className="App">
       <Header/>
      {isLoading && <h1>Loader...</h1>}
      {/* <Counter /> */}

     
    </div>
  )
}

export default App
