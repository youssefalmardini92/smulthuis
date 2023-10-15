import { createSlice, Reducer } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {Themes} from "../../../src/enums/Themes";

export interface appState {
    theme: string
    fullScreen: boolean,
}

const initialState: appState = {
    theme: "primary",
    fullScreen: false,
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
    },
});

export const { switchTheme, toggleFullScreen } = appSlice.actions

// Extract the reducer from the slice
const appReducer: Reducer<appState> = appSlice.reducer;

export default appSlice.reducer;
