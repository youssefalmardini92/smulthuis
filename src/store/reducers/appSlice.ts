import { createSlice, Reducer } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {Themes} from "../../../src/enums/Themes";

export interface appState {
    theme: string
    fullScreen: boolean,
    resource: {
        title: string;
        subtitle: string;
        content: string;
    },
}

const initialState: appState = {
    theme: "primary",
    fullScreen: false,
    resource: {
        title: "",
        subtitle: "",
        content: "",
    }
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        switchTheme: (state: appState, action: PayloadAction<{theme: string}>): void => {
            state.theme = state.theme === Themes.PRIMARY ? Themes.DARK : Themes.PRIMARY;
        },
        toggleFullScreen: (state: appState, action: PayloadAction<{theme: string}>): void => {
            state.fullScreen = !state.fullScreen;
        },
        setResource: (state: appState, action: PayloadAction<{resource: typeof initialState.resource}>): void => {
            state.resource = action.payload.resource;
        },
    },
});

export const { switchTheme, toggleFullScreen } = appSlice.actions

// Extract the reducer from the slice
const appReducer: Reducer<appState> = appSlice.reducer;

export default appSlice.reducer;
