import { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import store from '@store/store'
import { Analytics } from '@vercel/analytics/react'

import './index.css'

import { Provider } from 'react-redux'
import i18n from './i18n'
import { I18nextProvider } from 'react-i18next'

import { Skeleton } from '@pages/Skeleton/Skeleton'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <I18nextProvider i18n={i18n}>
            <Suspense fallback={<Skeleton />}>
                <App />
            </Suspense>
        </I18nextProvider>
        <Analytics />
        {/* <SpeedInsights /> */}
    </Provider>
)
