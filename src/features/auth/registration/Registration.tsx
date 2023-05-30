import { authThunks } from "../auth.slice"
import { useAppDispatch } from "../../../app/hooks"
import s from "./registration.module.css"

export const Registration = () => {

  const dispatch = useAppDispatch()

  const registerHandler = () => {
    dispatch(
      authThunks.register({
        email: "MikhaSma@gmail.com",
        password: "1qazxcvBG90",
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
