import { Navigate, Outlet } from 'react-router-dom'
import { path } from '../routes/paths'
import { authApi } from '../../features/auth/auth.api'
import { useAppSelector } from '../hooks'
import { profileSelector } from '../../app/app.selectors'

export const Auth = () => {
        
    const profile = useAppSelector(profileSelector)
    const isUserAuth = !!profile //изменить хардкод  и подумать как определить зашел ли юзер в кабинет
    return isUserAuth ? <Navigate to={path.PACKS} /> : <Outlet />
}
