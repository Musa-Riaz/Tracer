import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    username: string;
    isAuthorized: boolean;
}

const initialState: UserState = {
    username: "",
    isAuthorized: false
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action:PayloadAction<string>) => {
            state.username = action.payload;
        },
        setAuth: (state, action:PayloadAction<boolean>) => {
            state.isAuthorized = action.payload;
        },
        removeUser: (state) => {
            state.username = "";
            state.isAuthorized = false;
        }
    }
})

export const { setUser, setAuth , removeUser } = userSlice.actions;