import { useState, useEffect, useMemo } from 'react'

import '@styles/components/DatePicker/DatePicker.scss'
import 'react-datepicker/dist/react-datepicker.css'

import { useTranslation } from 'react-i18next'

import DatePicker from 'react-datepicker'

const CustomDatePicker = ({ date, getDate, setTodayHandler }) => {
    const { t } = useTranslation()
    const TODAY = useMemo(() => new Date(), [])
    const [isToday, setIsToday] = useState(
        date.toDateString() === TODAY.toDateString()
    )

    useEffect(() => {
        setIsToday(date.toDateString() === TODAY.toDateString())
    }, [date, TODAY])

    return (
        <div className={'datePickerContainer'}>
            {!isToday && (
                <button onClick={setTodayHandler} className={'todayButton'}>
                    {t('date-picker-today-button')}
                </button>
            )}
            <DatePicker selected={date} onChange={getDate} inline />
        </div>
    )
}
export { CustomDatePicker }
