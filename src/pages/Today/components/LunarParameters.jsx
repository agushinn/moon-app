import { useEffect, useState } from 'react'

import styles from '@styles/pages/Today/LunarParameters.module.scss'
import { Age } from '@assets/moon-data-icons/Age'
import { Distance } from '@assets/moon-data-icons/Distance'
import { Schedule } from '@assets/moon-data-icons/Schedule'
import { Moon } from '@utils/moon'

import { useTranslation } from 'react-i18next'

const LunarParameters = () => {
    const { t } = useTranslation()

    const [lunarAge, setLunarAge] = useState(Moon.lunarAge())
    const [distance, setDistance] = useState(Moon.lunarDistance())
    const [lunationNumber, setLunationNumber] = useState(Moon.lunationNumber())

    useEffect(() => {
        const parametersInterval = setInterval(() => {
            setLunarAge(Moon.lunarAge())
            setDistance(Moon.lunarDistance())
            setLunationNumber(Moon.lunationNumber())
        }, 60000)

        return () => clearInterval(parametersInterval)
    }, [])

    return (
        <div className={styles.lunarParametersContainer}>
            <div className={styles.lunarParameterItem}>
                <div className={`${styles.tooltip} ${styles['tooltip-1']}`}>
                    <b>{t('lunar-age-tooltip-title')}</b>{' '}
                    {t('lunar-age-tooltip')}
                </div>
                <div className={styles.triangle}></div>
                <div className={styles.dataInformation}>
                    <Age />
                    <p>{lunarAge.toFixed(2)}</p>
                </div>
            </div>
            <div className={styles.lunarParameterItem}>
                <div className={`${styles.tooltip} ${styles['tooltip-2']}`}>
                    <b>{t('distance-tooltip-title')}</b>{' '}
                    {t('distance-tooltip', {
                        distance: Moon.convertDistanceToKm(distance).toFixed(2),
                    })}
                </div>
                <div className={styles.triangle}></div>
                <div className={styles.dataInformation}>
                    <Distance />
                    <p>{distance.toFixed(2)}</p>
                </div>
            </div>
            <div className={styles.lunarParameterItem}>
                <div className={`${styles.tooltip} ${styles['tooltip-3']}`}>
                    <b> {t('lunation-number-tooltip-title')}</b>{' '}
                    {t('lunation-number-tooltip')}
                </div>
                <div className={styles.triangle}></div>
                <div className={styles.dataInformation}>
                    <Schedule />
                    <p>{lunationNumber}</p>
                </div>
            </div>
        </div>
    )
}

export { LunarParameters }
