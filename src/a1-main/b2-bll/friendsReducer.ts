import {Dispatch} from "redux";
import {usersAPI, UsersType} from "../b3-dal/usersAPI";

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
    usersAPI.getUsers()
        .then((res) => {
            dispatch(setUsers(res.data))
            console.log(res.data)
        })

}


//---- Types
export type InitialStateType = typeof initialState
export type FriendsActionsType = ReturnType<typeof setUsers>

// export type isInitializedAppType = ReturnType<typeof isInitializedApp>
// export type setLoadingType = ReturnType<typeof setLoading>