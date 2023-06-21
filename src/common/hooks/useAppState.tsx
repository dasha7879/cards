import { isInitializeSelector, isLoadingSelector } from "../../app/app.selectors"
import { useAppSelector } from "./useAppSelector"


export const useAppState = () => {
    const isAuthLoading = useAppSelector(isLoadingSelector)
    const isInitialize = useAppSelector(isInitializeSelector)
    const isPacksLoading = useAppSelector(isLoadingSelector)

    const isLoadingApp = isAuthLoading || isPacksLoading 

    return {
        isAuthLoading,
        isInitialize,
        isLoadingApp,
    }
}


