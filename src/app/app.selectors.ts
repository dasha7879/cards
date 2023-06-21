import { RootState } from "./store"


const errorSelector = (state: RootState) => state.app.error
const isInitializeSelector = (state: RootState) => state.app.isAppInitialized
const isLoadingSelector = (state: RootState) => state.app.isLoading
const profileSelector = (state: RootState) => state.auth.profile


export { errorSelector,isInitializeSelector, isLoadingSelector, profileSelector }
