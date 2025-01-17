import { useEffect, useState } from 'react'

import styles from '@styles/pages/Upcoming/Upcoming.module.scss'
import { Moon, LUNAR_PHASE } from '@utils/Moon'

import { PhaseSelector } from '@pages/Upcoming/components/PhaseSelector'
import { DateList } from '@pages/Upcoming/components/DateList'

const Upcoming = () => {
    const [selectedPhase, setSelectedPhase] = useState(
        localStorage.getItem('STORED_SELECTED_PHASE') || LUNAR_PHASE.FULL
    )
    const [upcomingDates, setUpcomingDates] = useState([])

    const selectPhaseHandler = (phase) => {
        setSelectedPhase(phase)
        localStorage.setItem('STORED_SELECTED_PHASE', phase)
    }

    useEffect(() => {
        // Calculate the upcoming dates for the selected phase
        const dates = []
        let date = new Date()

        while (dates.length < 7) {
            const currentPhase = Moon.lunarPhase(date)
                ?.name.replace(' ', '-')
                .toLowerCase()

            if (currentPhase === selectedPhase.toLowerCase()) {
                if (
                    dates.length === 0 ||
                    date.getTime() - dates[dates.length - 1].getTime() >
                        345600000
                ) {
                    dates.push(new Date(date))
                }
            }

            date.setDate(date.getDate() + 1)
        }

        setUpcomingDates(dates)
    }, [selectedPhase])

    return (
        <div className={styles.upcomingSection}>
            <PhaseSelector
                selectedPhase={selectedPhase}
                onSelectPhase={selectPhaseHandler}
            />
            <DateList dates={upcomingDates} />
        </div>
    )
}

export { Upcoming }
