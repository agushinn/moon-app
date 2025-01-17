import styles from '@styles/pages/Upcoming/DateList.module.scss'

import { useSelector } from 'react-redux'

const DateList = ({ dates }) => {
    const language = useSelector((state) => state.language.language)

    return (
        <div className={styles.datesContainer}>
            <ul>
                {dates.map((date) => (
                    <li key={date}>
                        {date.toLocaleDateString(language, {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                        })}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export { DateList }
