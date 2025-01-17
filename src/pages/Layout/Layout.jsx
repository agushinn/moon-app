import styles from '@styles/pages/Layout/Layout.module.scss'

import { Outlet } from 'react-router-dom'

import { Header } from '@components/Header/Header'
import { LanguageSwitcher } from '@components/LanguageSwitcher/LanguageSwitcher'

const Layout = () => {
    return (
        <main className={styles.layoutContainer}>
            <LanguageSwitcher />
            <Header />
            <Outlet />
        </main>
    )
}

export { Layout }
