import { useEffect } from "react"
import { Counter } from "../features/counter/Counter"
import "./App.css"
import { useAppDispatch, useAppSelector } from "./hooks"
import { appActions } from "./appSlice"
import { SuperButton } from "../common/components/SuperButton"

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
      {isLoading && <h1>Loader...</h1>}
      <Counter />
      <SuperButton name={"BIG"} color="secondary" width="347px"/>
      <SuperButton name={"SMALL"} color="primary" textColor="white" rounded  width="113px"/>
    </div>
  )
}

export default App
