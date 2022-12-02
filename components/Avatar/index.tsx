/* eslint-disable @next/next/no-img-element */
import { FC } from 'react'
import styles from './Avatar.module.scss'

type TAvatar = {
  username?: string,
  companyName?: string,
  avatarURL?: string
}

const Avatar:FC<TAvatar> = ({
  username = 'Username',
  companyName = 'Company Name',
  avatarURL = 'https://placekitten.com/128/128'
}) => {
  return (
    <div className={styles.avatar}>
      <div className={styles.name}>
        <span className={styles.username}>
          {username}
        </span>
        <span className={styles.company}>
          {companyName}
        </span>
      </div>
      <div className={styles.imageContainer}>
        <img 
          src={avatarURL}
          alt={username}
          title={username}
          className={styles.image}
        />
      </div>
    </div>
  )
}

export default Avatar