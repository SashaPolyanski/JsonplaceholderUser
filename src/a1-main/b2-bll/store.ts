import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppActionsType, appReducer} from "./appReducer";
import {authReducer, LoginActionsType} from "./loginReducer";
import {FriendsActionsType, friendsReducer} from "./friendsReducer";
import {ProfileActionsType, profileReducer} from "./profileReducer";
import {NewsActionsType, newsReducer} from "./newsReducer";

const rootReducer = combineReducers({
    app: appReducer,
    auth: authReducer,
    users: friendsReducer,
    profile: profileReducer,
    news: newsReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export const useAppDispatch = () => useDispatch<ThunkDispatch<AppRootStateType, unknown, AppRootActionsType>>()
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

//types
export type AppRootStateType = ReturnType<typeof rootReducer>
// все типы экшенов для App
export type AppRootActionsType = AppActionsType | FriendsActionsType | LoginActionsType | ProfileActionsType | NewsActionsType
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppRootActionsType>

