import { createBrowserRouter } from "react-router-dom"
import { path } from "./paths"
import App from "../../app/App"
import { Profile } from "../../features/auth/Profile"
import { Cards } from "../../features/cards/components/Cards"
import { Packs } from "../../features/packs/components/packs/Packs"
import { Learn } from "../../features/learn/components/Learn"
import { CheckEmail } from "../../features/auth/checkEmail/CheckEmail"
import { NewPasword } from "../../features/auth/NewPassword"
import { ForgotPassword } from "../../features/auth/ForgotPassword"
import { Login } from "../../features/auth/Login"
import { Registration } from "../../features/auth/Registration"

export const router = createBrowserRouter([
  {
    path: path.MAIN,
    element: <App />,
  },
  {
    path: path.LOGIN,
    element: <Login />,
  },
  {
    path: path.CHECK_EMAIL,
    element: <CheckEmail />,
  },
  {
    path: path.FORGOT_PASSWORD,
    element: <ForgotPassword />,
  },
  {
    path: path.NEW_PASSWORD,
    element: <NewPasword />,
  },
  {
    path: path.PROFILE,
    element: <Profile />,
  },
  {
    path: path.REGISTRATION,
    element: <Registration />,
  },
  {
    path: path.LEARN,
    element: <Learn />,
  },
  {
    path: path.PACKS,
    element: <Packs />,
  },
  {
    path: path.CARDS,
    element: <Cards />,
  },
])
