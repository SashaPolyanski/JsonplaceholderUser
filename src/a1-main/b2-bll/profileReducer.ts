import {usersAPI, UsersType} from "../b3-dal/usersAPI";
import {setLoadingApp, setLoadingAppType} from "./appReducer";
import {AppThunkType} from "./store";
import {postsAPI, PostsType} from "../b3-dal/postsAPI";

const initialState: InitialStateType = {
    user: null,
    posts: []
}

export const profileReducer = (state = initialState, action: ProfileActionsType): InitialStateType => {

    switch (action.type) {
        case "PROFILE/SET-CURRENT-USER":
            return {...state, ...action.payload}
        case "PROFILE/SET-CURRENT-USER-POSTS":
            console.log(action.payload.posts)
            return {...state, posts: [...action.payload.posts]}
        default:
            return state
    }
}
//---- Actions
export const setCurrentUser = (user: UsersType) => ({
    type: "PROFILE/SET-CURRENT-USER",
    payload: {user}
} as const)
export const setCurrentUserPosts = (posts: Array<PostsType>) => ({
    type: "PROFILE/SET-CURRENT-USER-POSTS",
    payload: {posts}
} as const)

//---- Thunk
export const FetchCurrentUserThunk = (userID: number): AppThunkType => async dispatch => {
    dispatch(setLoadingApp(true))
    try {
        const user = await usersAPI.getCurrentUser(userID)
        dispatch(setCurrentUser(user))
    } catch (e) {
    } finally {
        dispatch(setLoadingApp(false))
    }
}
export const FetchCurrentUserPostsThunk = (userID: number): AppThunkType => async dispatch => {
    dispatch(setLoadingApp(true))
    try {
        const posts = await postsAPI.getCurrentUserPost(userID)
        dispatch(setCurrentUserPosts(posts))
        console.log(posts)
    } catch (e) {
    }
    finally {
        dispatch(setLoadingApp(false))
    }
}


//---- Types
export type InitialStateType = {
    user: UsersType | null
    posts: Array<PostsType>
}
export type ProfileActionsType =
    ReturnType<typeof setCurrentUser>
    | setLoadingAppType
    | ReturnType<typeof setCurrentUserPosts>