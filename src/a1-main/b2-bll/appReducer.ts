const initialState = {
    loadingApp: false,
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
export const setLoadingApp = (status: boolean) => ({type: 'APP/SET-LOADING-APP', payload: {status}} as const)

 //----Thunk


//---- Types
export type AppActionsType = setLoadingAppType
export type InitialStateType = typeof initialState
export type setLoadingAppType = ReturnType<typeof setLoadingApp>