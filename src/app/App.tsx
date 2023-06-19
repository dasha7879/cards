import { useEffect } from "react"
import "./App.css"
import { appActions } from "./appSlice"
import { Header } from "../common/components/Header"
import { authThunks } from "../features/auth/auth.slice"
import LinearProgress from "@mui/material/LinearProgress"
import { useAppDispatch, useAppSelector } from "../common/hooks"
import { PackNavigator } from "../common/components/PackNavigator"
import { SearchInput } from "../common/components/SearchInput"
import { PacksTable } from "../common/components/PacksTable"
import { Packs } from "../features/packs/components/packs/Packs"
import { EmptyPacksPage } from "../features/packs/components/packs/EmptyPacksPage"
import { Outlet } from "react-router-dom"

function App() {
// debugger
  const isLoading = useAppSelector((state) => state.app.isLoading)

  const dispatch = useAppDispatch()

  useEffect(() => {
    // debugger
    dispatch(authThunks.me()) 
  }, [])


  return (
    <div>
      {isLoading && <LinearProgress />}
      <Header />
      <Outlet/>
    </div>
  )
}

export default App
