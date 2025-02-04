import { configureStore, legacy_createStore } from "@reduxjs/toolkit";
import { counterSlice } from "../pages/contact/CounterReducer";
import { useDispatch, useSelector } from "react-redux";
import { catalogApi } from "../features/catalog/CatalogAPi";
import { uiSlice } from "../layout/uiSlice";

export const store = configureStore({
    reducer: {
        [catalogApi.reducerPath]: catalogApi.reducer,
        counter: counterSlice.reducer,
        ui: uiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(catalogApi.middleware)
    
}) 

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()