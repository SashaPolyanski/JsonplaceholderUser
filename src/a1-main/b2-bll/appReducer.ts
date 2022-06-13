const initialState = {
    loadingApp: false,
    isInitializedApp: false,
    isLoading: false
}


export const appReducer = (state = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type) {
        case "APP/SET-LOADING-APP":
        return {...state, loadingApp: action.payload.status}
        default:
            return state
    }
}

//---- Actions
// export const isInitializedApp = (isInitialized: boolean) => ({
//     type: 'APP/IS-INITIALIZED',
//     payload: {isInitialized}
// } as const)
export const setLoadingApp = (status: boolean) => ({type: 'APP/SET-LOADING-APP', payload: {status}} as const)
// export const setLoading = (value: boolean) => ({type: 'APP/SET-LOADING', payload: {value}} as const)

//---- Types
export type InitialStateType = typeof initialState
export type AppActionsType = setLoadingAppType
export type setLoadingAppType = ReturnType<typeof setLoadingApp>
// export type isInitializedAppType = ReturnType<typeof isInitializedApp>
// export type setLoadingType = ReturnType<typeof setLoading>