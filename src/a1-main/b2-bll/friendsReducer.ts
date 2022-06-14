import {Dispatch} from "redux";
import {usersAPI, UsersType} from "../b3-dal/usersAPI";
import {setLoadingApp, setLoadingAppType} from "./appReducer";

const initialState: Array<UsersType> = []


export const friendsReducer = (state = initialState, action: FriendsActionsType): InitialStateType => {
    switch (action.type) {
        case "FRIENDS/SET-USERS": {
            return action.payload.data.map(m=>({...m}))
        }
        default:
            return state
    }
}
//---- Actions
export const setUsers = (data: Array<UsersType>) => ({type: "FRIENDS/SET-USERS", payload: {data}} as const)


//---- Thunk
export const FetchUsersThunk = () => (dispatch: Dispatch) => {
    dispatch(setLoadingApp(true))
    usersAPI.getUsers()
        .then((res) => {
            dispatch(setUsers(res.data))
        })
        .finally(()=>{
            dispatch(setLoadingApp(false))
        })

}


//---- Types
export type InitialStateType = typeof initialState
export type FriendsActionsType = ReturnType<typeof setUsers> | setLoadingAppType
