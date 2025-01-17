import { useState } from 'react'

const useLocalStorageDate = (key, initialValue) => {
    const [storageValue, setStorageValue] = useState(
        JSON.parse(localStorage.getItem(key))
            ? new Date(JSON.parse(localStorage.getItem(key)))
            : initialValue
    )

    const setValue = (value) => {
        setStorageValue(value)
        localStorage.setItem(key, JSON.stringify(value))
    }

    return [storageValue, setValue]
}

export { useLocalStorageDate }
