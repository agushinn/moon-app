import { useState } from 'react'

import styles from '@styles/components/LunarTips/LunarTips.module.scss'
import { Projects } from '@assets/moon-tips-category-icons/Projects'
import { Health } from '@assets/moon-tips-category-icons/Health'
import { Plants } from '@assets/moon-tips-category-icons/Plants'

import { useTranslation } from 'react-i18next'

import { lunarTipsObject } from '@components/LunarTips/lunarTipsObject'

const LunarTips = ({ phase }) => {
    const { t } = useTranslation()

    const [showMoonTips, setShowMoonTips] = useState(false)
    const tips = lunarTipsObject[phase.replace(' ', '-').toLowerCase()]
    const phaseFormated = phase.replace(' ', '-').toLowerCase()
    const categorySVGMap = {
        Projects: <Projects />,
        Health: <Health />,
        Plants: <Plants />,
    }

    const displayTipsHandler = () => setShowMoonTips((prev) => !prev)

    return (
        <div className={styles.lunarTipsContainer}>
            <button
                className={`${styles.lunarTipsButton} ${
                    showMoonTips
                        ? styles.buttonTipsActive
                        : styles.buttonTipsInactive
                }`}
                aria-label={showMoonTips ? t('hide-moon-tips') : t('show-moon-tips')}
                onClick={displayTipsHandler}
            />
            <div
                className={`${styles.containerTips} ${
                    showMoonTips ? styles.open : ''
                }`}
            >
                <h3>
                    {t('lunar-tips-title', {
                        phase: t(`${phaseFormated}-phase`),
                    })}
                </h3>
                <ul>
                    {Object.entries(tips).map(([category, categoryTips]) => (
                        <div key={category}>
                            <ul>
                                {categoryTips.map((_, index) => (
                                    <li key={index}>
                                        <div>{categorySVGMap[category]}</div>
                                        <div>
                                            {t(
                                                `${phaseFormated}-${category.toLowerCase()}-${index}-tip`
                                            )}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export { LunarTips }
