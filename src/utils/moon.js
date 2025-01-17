import { FirstQuarter } from '@assets/moon-phases-icons/FirstQuarter'
import { Full } from '@assets/moon-phases-icons/Full'
import { LastQuarter } from '@assets/moon-phases-icons/LastQuarter'
import { New } from '@assets/moon-phases-icons/New'
import { WaningCrescent } from '@assets/moon-phases-icons/WaningCrescent'
import { WaningGibbous } from '@assets/moon-phases-icons/WaningGibbous'
import { WaxingCrescent } from '@assets/moon-phases-icons/WaxingCrescent'
import { WaxingGibbous } from '@assets/moon-phases-icons/WaxingGibbous'

const EPOCH = 2440587.5 // Julian Date corresponding to January 1, 1970, 00:00 UTC (Unix epoch)
const LUNAR_CYCLE_DAYS = 29.530588853 // Average length of a lunar cycle (synodic month) in days
const BASE_DATE = 2451549.76042 // Julian Date corresponding to January 1, 2000, 00:00 TT (J2000.0 epoch)
const BASE_DISTANCE_DATE = 2451562.2 // Julian Date used as a reference for lunar distance calculations
const LUNAR_DISTANCE_CYCLE_DAYS = 27.55454988 // Average length of the lunar distance cycle (anomalistic month) in days

const HEMISPHERE = {
    NORTHERN: 'Northern',
    SOUTHERN: 'Southern',
}

const LUNAR_PHASE = {
    NEW: 'New',
    WAXING_CRESCENT: 'Waxing Crescent',
    FIRST_QUARTER: 'First Quarter',
    WAXING_GIBBOUS: 'Waxing Gibbous',
    FULL: 'Full',
    WANING_GIBBOUS: 'Waning Gibbous',
    LAST_QUARTER: 'Last Quarter',
    WANING_CRESCENT: 'Waning Crescent',
}

const LUNAR_PHASE_ICON = {
    [LUNAR_PHASE.NEW]: New,
    [LUNAR_PHASE.WAXING_CRESCENT]: WaxingCrescent,
    [LUNAR_PHASE.FIRST_QUARTER]: FirstQuarter,
    [LUNAR_PHASE.WAXING_GIBBOUS]: WaxingGibbous,
    [LUNAR_PHASE.FULL]: Full,
    [LUNAR_PHASE.WANING_GIBBOUS]: WaningGibbous,
    [LUNAR_PHASE.LAST_QUARTER]: LastQuarter,
    [LUNAR_PHASE.WANING_CRESCENT]: WaningCrescent,
}

const LUNAR_PHASE_INFO = [
    {
        name: LUNAR_PHASE.NEW,
        value: 'new',
        icon: New,
    },
    {
        name: LUNAR_PHASE.WAXING_CRESCENT,
        value: 'waxing-crescent',
        icon: WaxingCrescent,
    },
    {
        name: LUNAR_PHASE.FIRST_QUARTER,
        value: 'first-quarter',
        icon: FirstQuarter,
    },
    {
        name: LUNAR_PHASE.WAXING_GIBBOUS,
        value: 'waxing-gibbous',
        icon: WaxingGibbous,
    },
    {
        name: LUNAR_PHASE.FULL,
        value: 'full',
        icon: Full,
    },
    {
        name: LUNAR_PHASE.WANING_GIBBOUS,
        value: 'waning-gibbous',
        icon: WaningGibbous,
    },
    {
        name: LUNAR_PHASE.LAST_QUARTER,
        value: 'last-quarter',
        icon: LastQuarter,
    },
    {
        name: LUNAR_PHASE.WANING_CRESCENT,
        value: 'waning-crescent',
        icon: WaningCrescent,
    },
]

/**
 * Class representing Julian Date calculations.
 */
class JulianDate {
    /**
     * Converts a given date to Julian Date.
     * @param {Date} date - The date to convert. Defaults to the current date.
     * @returns {number} The Julian Date.
     */
    static fromDate(date = new Date()) {
        return (
            date.getTime() / 86400000 - date.getTimezoneOffset() / 1440 + EPOCH
        )
    }
}

/**
 * Normalizes a value to be within the range [0, 1).
 * @param {number} value - The value to normalize.
 * @returns {number} The normalized value.
 */
const normalize = (value) => {
    value -= Math.floor(value)
    if (value < 0) value += 1
    return value
}

/**
 * Class representing Moon calculations.
 */
class Moon {
    /**
     * Calculates the lunar age in days.
     * @param {Date} date - The date for which to calculate the lunar age. Defaults to the current date.
     * @returns {number} The lunar age in days.
     */
    static lunarAge(date = new Date()) {
        return Moon.lunarAgePercent(date) * LUNAR_CYCLE_DAYS
    }

    /**
     * Calculates the lunar age as a percentage of the lunar cycle.
     * @param {Date} date - The date for which to calculate the lunar age percentage. Defaults to the current date.
     * @returns {number} The lunar age percentage.
     */
    static lunarAgePercent(date = new Date()) {
        return normalize(
            (JulianDate.fromDate(date) - BASE_DATE) / LUNAR_CYCLE_DAYS
        )
    }

    /**
     * Calculates the lunation number.
     * @param {Date} date - The date for which to calculate the lunation number. Defaults to the current date.
     * @returns {number} The lunation number.
     */
    static lunationNumber(date = new Date()) {
        return (
            Math.round(
                (JulianDate.fromDate(date) - BASE_DATE) / LUNAR_CYCLE_DAYS
            ) + 1
        )
    }

    /**
     * Calculates the distance to the Moon in Earth radii.
     * @param {Date} date - The date for which to calculate the lunar distance. Defaults to the current date.
     * @returns {number} The distance to the Moon in Earth radii.
     */
    static lunarDistance(date = new Date()) {
        const julianDate = JulianDate.fromDate(date)
        const lunarAgePercent = Moon.lunarAgePercent(date) * 2 * Math.PI
        const distanceCycle =
            2 *
            Math.PI *
            normalize(
                (julianDate - BASE_DISTANCE_DATE) / LUNAR_DISTANCE_CYCLE_DAYS
            )

        return (
            60.4 -
            3.3 * Math.cos(distanceCycle) -
            0.6 * Math.cos(2 * lunarAgePercent - distanceCycle) -
            0.5 * Math.cos(2 * lunarAgePercent)
        )
    }

    /**
     * Converts the distance from Earth radii to kilometers.
     * @param {number} distance - The distance in Earth radii.
     * @returns {number} The distance in kilometers.
     */
    static convertDistanceToKm(distance) {
        const earthRadiusKm = 6371 // [Km]
        return distance * earthRadiusKm
    }

    /**
     * Determines the current lunar phase.
     * @param {Date} date - The date for which to determine the lunar phase. Defaults to the current date.
     * @returns {Object} An object containing the name and icon of the lunar phase.
     */
    static lunarPhase(date = new Date()) {
        const lunarAge = Moon.lunarAge(date)
        if (lunarAge < 1.84566173161)
            return {
                name: LUNAR_PHASE.NEW,
                icon: LUNAR_PHASE_ICON[LUNAR_PHASE.NEW],
            }
        if (lunarAge < 5.53698519483)
            return {
                name: LUNAR_PHASE.WAXING_CRESCENT,
                icon: LUNAR_PHASE_ICON[LUNAR_PHASE.WAXING_CRESCENT],
            }
        if (lunarAge < 9.22830865805)
            return {
                name: LUNAR_PHASE.FIRST_QUARTER,
                icon: LUNAR_PHASE_ICON[LUNAR_PHASE.FIRST_QUARTER],
            }
        if (lunarAge < 12.91963212127)
            return {
                name: LUNAR_PHASE.WAXING_GIBBOUS,
                icon: LUNAR_PHASE_ICON[LUNAR_PHASE.WAXING_GIBBOUS],
            }
        if (lunarAge < 16.61095558449)
            return {
                name: LUNAR_PHASE.FULL,
                icon: LUNAR_PHASE_ICON[LUNAR_PHASE.FULL],
            }
        if (lunarAge < 20.30227904771)
            return {
                name: LUNAR_PHASE.WANING_GIBBOUS,
                icon: LUNAR_PHASE_ICON[LUNAR_PHASE.WANING_GIBBOUS],
            }
        if (lunarAge < 23.99360251093)
            return {
                name: LUNAR_PHASE.LAST_QUARTER,
                icon: LUNAR_PHASE_ICON[LUNAR_PHASE.LAST_QUARTER],
            }
        if (lunarAge < 27.68492597415)
            return {
                name: LUNAR_PHASE.WANING_CRESCENT,
                icon: LUNAR_PHASE_ICON[LUNAR_PHASE.WANING_CRESCENT],
            }
        return {
            name: LUNAR_PHASE.NEW,
            icon: LUNAR_PHASE_ICON[LUNAR_PHASE.NEW],
        }
    }
}

export {
    Moon,
    JulianDate,
    HEMISPHERE,
    LUNAR_PHASE,
    LUNAR_PHASE_ICON,
    LUNAR_PHASE_INFO,
}
