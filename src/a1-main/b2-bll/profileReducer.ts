import {usersAPI, UsersType} from "../b3-dal/usersAPI";
import {setLoadingApp, setLoadingAppType} from "./appReducer";
import {AppThunkType} from "./store";

const initialState = {
    user: null as null | UsersType
}

export const profileReducer = (state = initialState, action: ProfileActionsType): InitialStateType => {
    console.log(action)
    switch (action.type) {

        case "PROFILE/SET-CURRENT-USER": {
            debugger

            return {...state, ...action.payload}
            // return action.payload.data.map(m=>m.id === action.payload.userID ? {...m} : m)
        }
        default:
            return state
    }
}
//---- Actions
export const setCurrentUser = ( user: UsersType) => ({
    type: "PROFILE/SET-CURRENT-USER",
    payload: {user}
} as const)


//---- Thunk
export const FetchCurrentUserThunk = (userID: number): AppThunkType  => async dispatch => {
    dispatch(setLoadingApp(true))
    debugger
    try {
        const user = await usersAPI.getCurrentUser(userID)
        console.log('user', user)
        dispatch(setCurrentUser(user))
    } catch(e) {}
    finally {
        dispatch(setLoadingApp(false))
    }
}



//---- Types
export type InitialStateType = typeof initialState
export type ProfileActionsType = ReturnType<typeof setCurrentUser> | setLoadingAppType