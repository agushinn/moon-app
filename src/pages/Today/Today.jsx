import { useState, useEffect } from 'react'

import styles from '@styles/pages/Today/Today.module.scss'
import { Moon } from '@utils/moon'

import { CurrentDate } from '@pages/Today/components/CurrentDate'
import { LunarParameters } from '@pages/Today/components/LunarParameters'
import { LunarPhase } from '@components/LunarPhase/LunarPhase'
import { LunarTips } from '@components/LunarTips/LunarTips'

const Today = () => {
    const [lunarPhase, setLunarPhase] = useState(Moon.lunarPhase())

    useEffect(() => {
        const interval = setInterval(() => {
            const newLunarPhase = Moon.lunarPhase()
            setLunarPhase(newLunarPhase)
        }, 60000)
        return () => clearInterval(interval)
    }, [])

    const { name, icon: Icon } = lunarPhase

    return (
        <section className={styles.todaySection}>
            <LunarPhase name={name} icon={Icon} />
            <LunarTips phase={name} />
            <CurrentDate />
            <LunarParameters />
        </section>
    )
}

export { Today }
