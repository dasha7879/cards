import { useEffect } from "react"
import { Counter } from "../features/counter/Counter"
import "./App.css"
import { useAppDispatch, useAppSelector } from "./hooks"
import { appActions } from "./appSlice"
import { Header } from "../common/components/Header"
import { SuperButton } from "../common/components/SuperButton"

function App() {
  const isLoading = useAppSelector((state) => state.app.isLoading)

  const dispatch = useAppDispatch()

  useEffect(() => {
    setTimeout(() => {
      dispatch(appActions.setIsLoading({ isLoading: false }))
    }, 3000)
  }, [])

  const onc = () => console.log("onc")
  return (
    <div>
      <Header />
      {/* <SuperButton width={"200"} text={"hi"} onClick={onc} />
       */}
      {isLoading && <h1>Loader...</h1>}
      {/* <Counter /> */}
      {/* <Form/> */}
    </div>
  )
}

export default App
