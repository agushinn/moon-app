import { createSlice } from '@reduxjs/toolkit'

import { HEMISPHERE } from '@utils/moon'

const initialState = {
    currentHemisphere:
        localStorage.getItem('STORED_HEMISPHERE') || HEMISPHERE.NORTHERN,
}

const hemisphereSlice = createSlice({
    name: 'hemisphere',
    initialState,
    reducers: {
        setHemisphere: (state, action) => {
            state.currentHemisphere = action.payload
            localStorage.setItem('STORED_HEMISPHERE', action.payload)
        },
    },
})

export const hemisphereActions = hemisphereSlice.actions
export default hemisphereSlice.reducer
