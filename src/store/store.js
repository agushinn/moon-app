import { configureStore } from '@reduxjs/toolkit'

import hemisphereReducer from '@store/hemisphere/hemisphereSlice'
import languageReducer from '@store/language/languageSlice'

const store = configureStore({
    reducer: {
        hemisphere: hemisphereReducer,
        language: languageReducer,
    },
})

export default store
