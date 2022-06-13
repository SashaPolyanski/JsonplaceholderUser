import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {appReducer} from "./appReducer";
import {authReducer} from "./loginReducer";
import {friendsReducer} from "./friendsReducer";

const rootReducer = combineReducers({
    app: appReducer,
    auth: authReducer,
    users: friendsReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
export type AppRootStateType = ReturnType<typeof rootReducer>

// все типы экшенов для App
export type AppRootActionsType = any


export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppRootActionsType>
export const useAppDispatch = () => useDispatch<ThunkDispatch<AppRootStateType, unknown, AppRootActionsType>>()
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector


// @ts-ignore
window.store = store;