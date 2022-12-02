import { FC } from 'react'

import styles from './PageTitle.module.scss'

type TPageTitle = {
  title: string
}

const PageTitle:FC<TPageTitle> = ({
  title = ''
}) => {
  return (
    <div className={styles.pageTitle}>
      {title}
    </div>
  )
}

export default PageTitle