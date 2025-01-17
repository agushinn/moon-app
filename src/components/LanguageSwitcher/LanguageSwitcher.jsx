import { languageActions } from '@store/language/languageSlice'

import styles from '@styles/components/LanguageSwitcher/LanguageSwitcher.module.scss'
import EsFlag from '@assets/country-icons/EsFlag.png'
import UsFlag from '@assets/country-icons/UsFlag.png'
import { LOCALE_LANGUAGE } from '@utils/constants'

import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'

const LanguageSwitcher = () => {
    const dispatch = useDispatch()
    const { i18n } = useTranslation()

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
        dispatch(languageActions.setLanguage(lng))
    }

    return (
        <div className={styles.languageSwitcherContainer}>
            <button
                className={`${styles.flagButton} ${
                    LOCALE_LANGUAGE.EN === i18n.language.toLowerCase()
                        ? styles.active
                        : ''
                }`}
                onClick={() => changeLanguage(LOCALE_LANGUAGE.EN)}
            >
                <img
                    className={styles.imageFlag}
                    src={UsFlag}
                    alt="English Flag"
                />
            </button>
            <button
                className={`
                    ${styles.flagButton} ${
                    LOCALE_LANGUAGE.ES === i18n.language.toLowerCase()
                        ? styles.active
                        : ''
                }`}
                onClick={() => changeLanguage(LOCALE_LANGUAGE.ES)}
            >
                <img
                    className={styles.imageFlag}
                    src={EsFlag}
                    alt="Spanish Flag"
                />
            </button>
        </div>
    )
}

export { LanguageSwitcher }
