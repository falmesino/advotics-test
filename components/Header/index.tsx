import { FC } from 'react'
import { FiLogOut } from 'react-icons/fi'
import Avatar from 'components/Avatar'

import styles from './Header.module.scss'

type THeader = {
  brandName?: string
}

const Header:FC<THeader> = ({
  brandName = 'Advotics',
}) => {

  const handleLogout = () => {
    let isLogout = confirm('End your session?')
    isLogout && alert('See you!')
  }

  return (
    <div className={styles.header}>

      <div className={styles.brand}>
        <span>{brandName}</span>
      </div>

      <div className={styles.itemContainer}>
        <div className={styles.item}>
          <Avatar />
        </div>

        <div className={styles.item}>
          <button
            type="button" 
            className={styles.button}
            onClick={handleLogout}
          >
            <FiLogOut />
          </button>
        </div>
      </div>

    </div>
  )

}

export default Header