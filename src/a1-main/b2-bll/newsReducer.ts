import {Dispatch} from "redux";
import {setLoadingApp} from "./appReducer";
import {postsAPI, PostsType} from "../b3-dal/postsAPI";

const initialState: PostsType[] = []


export const newsReducer = (state = initialState, action: NewsActionsType): InitialStateType => {
    switch (action.type) {
        case "NEWS/SET-POSTS": {
            return action.payload.data.map(m => ({...m}))
        }
        default:
            return state
    }
}
//---- Actions
export const setPosts = (data: Array<PostsType>) => ({type: "NEWS/SET-POSTS", payload: {data}} as const)


//---- Thunk
export const FetchPostsThunk = () => (dispatch: Dispatch) => {
    dispatch(setLoadingApp(true))
    postsAPI.getPosts()
        .then((res) => {
            dispatch(setPosts(res.data))
        })
        .finally(() => {
            dispatch(setLoadingApp(false))
        })

}
//---- Types
export type InitialStateType = typeof initialState
export type NewsActionsType = ReturnType<typeof setPosts>