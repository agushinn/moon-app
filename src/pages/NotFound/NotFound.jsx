import styles from '@styles/pages/NotFound/NotFound.module.scss'

import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { Header } from '@components/Header/Header'
import { LanguageSwitcher } from '@components/LanguageSwitcher/LanguageSwitcher'

const NotFound = () => {
    const { t } = useTranslation()
    return (
        <section className={styles.notFoundSection}>
            <LanguageSwitcher />
            <Header />
            <h4 className={styles.notFoundTitle}>{t('not-found-title')}</h4>
            <div className={styles.moonContainer}>:(</div>
            <Link className={styles.notFoundLink} to="/moon-app">
                {t('not-found-link')}
            </Link>
        </section>
    )
}

export { NotFound }
