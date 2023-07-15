import { createHashRouter } from "react-router-dom"
import { path } from "./paths"
import { Profile } from "../../features/auth/components/Profile"
import { Packs } from "../../features/packs/components/Packs"
import { Learn } from "../../features/learn/components/Learn"
import { CheckEmail } from "../../features/auth/components/checkEmail/CheckEmail"
import { NewPasword } from "../../features/auth/components/NewPassword"
import { ForgotPassword } from "../../features/auth/components/ForgotPassword"
import { Login } from "../../features/auth/components/Login"
import { Registration } from "../../features/auth/components/Registration"
import App from "../../app/components/App"
import { Auth } from "../hoc/Auth"
import { RequireAuth } from "../hoc/RequireAuth"
import { CreatePack } from "../components/CreatePack"
import { Cards } from "../../features/cards/Cards"

export const router = createHashRouter([
  {
    path: path.MAIN,
    element: <App />,
    children: [
      {
        path: path.MAIN,
        element: <RequireAuth />,
        children: [
          {
            path: path.PACKS,
            element: <Packs />,
          },
          {
            path: path.NEWCARDPACK,
            element: <CreatePack/>,//потом убрать
          },
          {
            path: path.CARDS,
            element: <Cards/>,
          },
          {
            path: path.LEARN,
            element: <Learn />,
          },
          {
            path: path.PROFILE,
            element: <Profile />,
          },
        ],
      },
      {
        path: path.AUTH,
        element: <Auth />,
        children: [
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
            path: path.REGISTRATION,
            element: <Registration />,
          },
        ],
      },
    ],
  },
])
