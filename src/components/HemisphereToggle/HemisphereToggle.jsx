import { hemisphereActions } from '@store/hemisphere/hemisphereSlice'

import styles from '@styles/components/HemisphereToggle/HemisphereToggle.module.scss'
import { HEMISPHERE } from '@utils/moon'

import { useSelector, useDispatch } from 'react-redux'

const HemisphereToggle = () => {
    const dispatch = useDispatch()
    const { currentHemisphere } = useSelector((state) => state.hemisphere)

    return (
        <div className={styles.onoffswitch}>
            <input
                type="checkbox"
                name="onoffswitch"
                className={styles.onoffswitchCheckbox}
                id="myonoffswitch"
                tabIndex="0"
                checked={currentHemisphere == HEMISPHERE.NORTHERN}
                onChange={(event) => {
                    dispatch(
                        hemisphereActions.setHemisphere(
                            event.target.checked
                                ? HEMISPHERE.NORTHERN
                                : HEMISPHERE.SOUTHERN
                        )
                    )
                }}
            />
            <label className={styles.onoffswitchLabel} htmlFor="myonoffswitch">
                <span className={styles.onoffswitchInner}></span>
                <span className={styles.onoffswitchSwitch}></span>
            </label>
        </div>
    )
}

export { HemisphereToggle }
