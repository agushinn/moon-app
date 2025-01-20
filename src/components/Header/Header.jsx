import styles from '@styles/components/Header/Header.module.scss'

import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'

import { HemisphereToggle } from '@components/HemisphereToggle/HemisphereToggle'

const Header = () => {
    const { t } = useTranslation()
    return (
        <header className={styles.header}>
            <HemisphereToggle />
            <nav className={styles.navigation}>
                <ul className={styles.navList}>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? styles.active : ''
                            }
                        >
                            {t('header.today-link')}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/search"
                            className={({ isActive }) =>
                                isActive ? styles.active : ''
                            }
                        >
                            {t('header.search-link')}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/upcoming"
                            className={({ isActive }) =>
                                isActive ? styles.active : ''
                            }
                        >
                            {t('header.upcoming-link')}
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export { Header }
