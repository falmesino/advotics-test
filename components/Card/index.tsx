import { FC, useState } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'

import styles from './Card.module.scss'

type TCard = {
  title?: string
  theme?: string
  [otherProps: string]: any
}

const Card:FC<TCard> = ({
  title = 'Card',
  theme = 'default',
  ...props
}) => {

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={`${styles.title} ${theme}`}>
          {title}
        </div>
        <div className={styles.options}>
          <button type="button" className={styles.dots}>
            <BsThreeDotsVertical />
          </button>
        </div>
      </div>
      <div className={styles.body}>
        {props?.children}
      </div>
    </div>
  )
}

export default Card