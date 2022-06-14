import {AppRootStateType} from "./store";

export const selectIsLoading = (state: AppRootStateType) => state.app.loadingApp
export const selectError = (state: AppRootStateType) => state.auth.error
export const selectIsLogin = (state: AppRootStateType) => state.auth.isLogin
export const selectCurrentUser = (state: AppRootStateType) => state.profile.user
export const selectPostsUser = (state: AppRootStateType) => state.profile.posts
export const selectNews = (state: AppRootStateType) => state.news
export const selectUsers = (state: AppRootStateType) => state.users
export const SelectUserID = (state: AppRootStateType) => state.auth.userID