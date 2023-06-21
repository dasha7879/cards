import { Navigate, Outlet } from "react-router-dom"
import { path } from "../routes/paths"
import { profileSelector } from "../../app/app.selectors"
import { useAppSelector } from "../hooks"

export const RequireAuth = () => {
  const profile = useAppSelector(profileSelector)
  const isUserAuth = !!profile
  return isUserAuth ? <Outlet /> : <Navigate to={path.LOGIN} />
}
