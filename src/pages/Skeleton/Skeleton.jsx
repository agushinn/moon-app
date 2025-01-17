import React from 'react'
import styles from '@styles/pages/Skeleton/Skeleton.module.scss'

const Skeleton = () => {
    return (
        <div className={styles.skeleton}>
            <div className={styles.moon}></div>
        </div>
    )
}

export { Skeleton }
