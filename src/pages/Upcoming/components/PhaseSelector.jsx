import styles from '@styles/pages/Upcoming/PhaseSelector.module.scss'
import { LUNAR_PHASE_INFO } from '@utils/Moon'

import { LunarPhase } from '@components/LunarPhase/LunarPhase'

const PhaseSelector = ({ selectedPhase, onSelectPhase }) => {
    return (
        <div className={styles.upcomingContainer}>
            {LUNAR_PHASE_INFO.map((lunarPhase) => {
                const IconComponent = lunarPhase.icon
                return (
                    <div
                        key={lunarPhase.value}
                        className={styles.upcomingPhase}
                    >
                        <input
                            type="radio"
                            id={`phase-${lunarPhase.value}`}
                            name="upcoming-moon"
                            value={lunarPhase.value}
                            defaultChecked={
                                lunarPhase.value.toLowerCase() ===
                                selectedPhase.toLowerCase()
                            }
                            onChange={(event) => {
                                onSelectPhase(event.target.value)
                            }}
                        />
                        <LunarPhase
                            className={styles.lunarPhase}
                            name={lunarPhase.name}
                            icon={IconComponent}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export { PhaseSelector }
