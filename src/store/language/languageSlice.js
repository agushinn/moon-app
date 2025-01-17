import { createSlice } from '@reduxjs/toolkit'

import { LOCALE_LANGUAGE } from '@utils/constants'

const initialState = {
    language: LOCALE_LANGUAGE.EN,
}

const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        setLanguage(state, action) {
            state.language = action.payload
        },
    },
})

export const languageActions = languageSlice.actions
export default languageSlice.reducer
