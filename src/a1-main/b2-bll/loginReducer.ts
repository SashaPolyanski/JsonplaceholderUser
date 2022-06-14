// import {Dispatch} from "redux";
// import {api, LoginParamsType} from "../b3-dal/api";
// import {setStatusLoadingApp, setLoadingAppType} from "./appReducer";
// import {setProfile, setProfileType} from "./profileReducer";

const initialState = {
    isLogin: false,
    error: false,
    userID: 1
}


export const authReducer = (state = initialState, action: LoginActionsType): InitialStateType => {
    switch (action.type) {
        case 'LOGIN/SET-IS-LOGGED-IN':
            return {...state, isLogin: action.payload.value}
        case "LOGIN/SET-ERROR":
            return {...state, error: action.payload.error}

        default:
            return state
    }
}


//---- Actions
export const setError = (error: boolean) => ({type: 'LOGIN/SET-ERROR', payload:{error}} as const)
export const setIsLoggedIn = (value: boolean) => ({type: 'LOGIN/SET-IS-LOGGED-IN', payload: {value}} as const)
export const setUserID = (userID: number) => ({type: 'LOGIN/SET-USER-ID', payload: {userID}} as const)


//---- Types
type InitialStateType = typeof initialState
export type LoginActionsType = ReturnType<typeof setError> | ReturnType<typeof setIsLoggedIn> | ReturnType<typeof setUserID>



