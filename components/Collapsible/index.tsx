/* eslint-disable @next/next/no-img-element */
import { FC, useState } from 'react'
import { FaChevronUp, FaChevronDown } from 'react-icons/fa'

import styles from './Collapsible.module.scss'

type TCollapsible = {
  title?: string
  defaultState?: boolean
  themeColor?: 'default' | 'light'
  [otherProps: string]: any
}

const Collapsible:FC<TCollapsible> = ({
  title = 'Collapsible',
  defaultState = false,
  themeColor = 'default',
  ...props
}) => {

  const [collapsed, setCollapsed] = useState<boolean>(defaultState)

  const handleCollapsible = () => {
    setCollapsed(!collapsed)
  }

  return (
    <div className={`
      ${styles.collapsible} 
      ${themeColor === 'light' && styles.collapsible__white} 
      ${collapsed && styles.collapsible__collapsed}`
    }>
      <div className={styles.header}>
        <div className={styles.title}>
          {title}
        </div>
        <button
          type="button"
          className={styles.button}
        >
          <img src={"/icon-help.png"} alt="Help" />
          <span>Click Here for Help</span>
        </button>
        <button 
          type="button" 
          className={styles.toggle}
          onClick={handleCollapsible}
        >
          {collapsed ? <FaChevronDown /> : <FaChevronUp />}
        </button>
      </div>
      <div className={styles.body}>
        {props?.children}
      </div>
    </div>
  )
}

export default Collapsible