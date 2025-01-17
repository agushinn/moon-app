import { useState, useEffect, useMemo } from 'react'
import { useLocalStorageDate } from '@hooks/useLocalStorageDate'

import styles from '@styles/pages/Search/Search.module.scss'
import { Moon } from '@utils/moon'

import { LunarPhase } from '@components/LunarPhase/LunarPhase'
import { CustomDatePicker } from '@components/DatePicker/DatePicker'
import { LunarTips } from '@components/LunarTips/LunarTips'

const Search = () => {
    const TODAY = useMemo(() => new Date(), [])

    const [lunarPhase, setLunarPhase] = useState(Moon.lunarPhase())
    const [date, setDate] = useLocalStorageDate('STORED_SELECTED_DATE', TODAY)

    const getDate = (selectedDate) => {
        setDate(new Date(selectedDate))
    }

    const setTodayHandler = () => {
        setDate(TODAY)
    }

    useEffect(() => {
        setLunarPhase(Moon.lunarPhase(date))
    }, [date, TODAY])

    const { name, icon: Icon } = lunarPhase

    return (
        <section className={styles.searchSection}>
            <LunarPhase name={name} icon={Icon} />
            <LunarTips phase={name} />
            <CustomDatePicker
                date={date}
                getDate={getDate}
                setTodayHandler={setTodayHandler}
            />
        </section>
    )
}

export { Search }
