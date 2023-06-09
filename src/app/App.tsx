import { useEffect } from "react"
import "./App.css"
import { useAppDispatch, useAppSelector } from "./hooks"
import { appActions } from "./appSlice"
import { Header } from "../common/components/Header"
import { authThunks } from "../features/auth/auth.slice"

function App() {
  debugger

  const isLoading = useAppSelector((state) => state.app.isLoading)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(authThunks.me())
    setTimeout(() => {
      dispatch(appActions.setIsLoading({ isLoading: false }))
    }, 3000)
  }, [])

  const onc = () => console.log("onc")
  return (
    <div>
      <Header />
      {isLoading && <h1>Loader...</h1>}
    </div>
  )
}

export default App
