const initialState = {
    loadingApp: false,
    isInitializedApp: false,
    isLoading: false
}


export const appReducer = (state = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type) {

        default:
            return state
    }
}

//---- Actions
export const isInitializedApp = (isInitialized: boolean) => ({
    type: 'APP/IS-INITIALIZED',
    payload: {isInitialized}
} as const)
export const setStatusLoadingApp = (status: boolean) => ({type: 'APP/SET-LOADING-APP', payload: {status}} as const)
export const setLoading = (value: boolean) => ({type: 'APP/SET-LOADING', payload: {value}} as const)

//---- Types
export type InitialStateType = typeof initialState
export type AppActionsType = setLoadingAppType | isInitializedAppType | setLoadingType
export type setLoadingAppType = ReturnType<typeof setStatusLoadingApp>
export type isInitializedAppType = ReturnType<typeof isInitializedApp>
export type setLoadingType = ReturnType<typeof setLoading>