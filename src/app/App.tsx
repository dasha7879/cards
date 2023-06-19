import { useEffect } from "react"
import "./App.css"
import { Header } from "../common/components/Header"
import { authThunks } from "../features/auth/auth.slice"
import LinearProgress from "@mui/material/LinearProgress"
import { useAppDispatch, useAppSelector } from "../common/hooks"
import { Outlet } from "react-router-dom"

function App() {
  const isLoading = useAppSelector((state) => state.app.isLoading)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(authThunks.me())
  }, [])

  return (
    <div>
      {isLoading && <LinearProgress />}
      <Header />
      <Outlet />
    </div>
  )
}

export default App
