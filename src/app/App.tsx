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

function App() {

  const isLoading = useAppSelector((state) => state.app.isLoading)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(authThunks.me()) 
    setTimeout(() => {
      dispatch(appActions.setIsLoading({ isLoading: false }))
    }, 3000)
  }, [])


  return (
    <div>
      {isLoading && <LinearProgress />}
      <Header />
      {/* <Packs/> */}
      {/* <SearchInput fullWidth/> */}
     < EmptyPacksPage/>
      {/* <PacksTable/> */}
    </div>
  )
}

export default App
