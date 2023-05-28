import { authThunks } from "../../../features/auth/auth.slice"
import { useAppDispatch } from "../../../app/hooks"
import s from "./registration.module.css"

export const Registration = () => {
  const dispatch = useAppDispatch()


  const registerHandler = () => {
    dispatch(
      authThunks.register({
        email: "Mik@nya.com",
        password: "1qazxcvBG",
      }),
    )
  }
  return (
    <div className={s.container}>
      <h1>Register</h1>
      <button onClick={registerHandler}>register</button>
    </div>
  )
}
