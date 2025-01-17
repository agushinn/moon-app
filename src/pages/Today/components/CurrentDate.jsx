import { useEffect, useState } from 'react'

import styles from '@styles/pages/Today/CurrentDate.module.scss'

import { useSelector } from 'react-redux'

const CurrentDate = () => {
    const language = useSelector((state) => state.language.language)
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className={styles.currentDate}>
            <p>
                {date.toLocaleString(language, {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric',
                    second: 'numeric',
                    hour12: false,
                })}
            </p>
        </div>
    )
}

export { CurrentDate }
