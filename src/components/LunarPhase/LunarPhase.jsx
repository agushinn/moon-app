import { useSelector } from 'react-redux'

import styles from '@styles/components/LunarPhase/LunarPhase.module.scss'
import { HEMISPHERE } from '@utils/moon'

import { useTranslation } from 'react-i18next'

const LunarPhase = ({ name, icon: Icon, className = '' }) => {
    const { t } = useTranslation()

    const hemisphere = useSelector(
        (state) => state.hemisphere.currentHemisphere
    )
    return (
        <div className={`${className} ${styles.lunarPhaseContainer} `}>
            <Icon
                className={`${styles.lunarPhaseIcon} ${
                    hemisphere === HEMISPHERE.SOUTHERN
                        ? styles.southern
                        : styles.northern
                }`}
            />
            <h3>{t(`${name.replace(' ', '-').toLowerCase()}-phase`)}</h3>
        </div>
    )
}

export { LunarPhase }
