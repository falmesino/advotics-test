/* eslint-disable @next/next/no-img-element */
import { FC } from 'react'
import { HiOutlineMenuAlt2 } from 'react-icons/hi'

import styles from './Navigation.module.scss'

type TNavigation = {
  collapsed?: boolean
  setCollapsed?: any
  customClassName?: string
  [otherProps: string]: any
}

const Navigation:FC<TNavigation> = ({
  collapsed = true,
  setCollapsed,
  customClassName = '',
  ...props
}) => {

  const handleCollapsible = () => {
    setCollapsed(!collapsed)
  }

  return (
    <div className={`${styles.navigation} ${collapsed && styles.navigation__collapsed} ${customClassName} `}>
      <div className={styles.items}>
        <>
          <NavigationButton 
            icon={
              <HiOutlineMenuAlt2 />
            }
            label={`Menu`}
            onClick={handleCollapsible}
          />

          <NavigationButton 
            icon={
              <div className={styles.icon_wrapper}>
                <img src="icon-dashboard.png" alt="Dashboard" title="Dashboard" />
              </div>
            }
            label={`Dashboard`}
            isActive
            onClick={() => {
              alert('Dashboard')
            }}
          />

          { /*<DummyButtons/> */ }

        </>
      </div>
    </div>
  )
}

const DummyButtons = ({
}) => {
  let buttons = []

  for (let i = 0; i < 100; i++) {
    buttons.push(
      <NavigationButton 
        key={i}
        label={`Item no. ${i}`}
        icon={
          <span>
            {i}
          </span>
        }
        onClick={() => {
          alert(`Item no. ${i}`)
        }}
      />
    )
  }

  return (
    <>
      {buttons}
    </>
  )
}

type TNavigationButton = {
  label?: string
  icon?: any
  isActive?: boolean
  onClick?: () => void
}

const NavigationButton:FC<TNavigationButton> = ({
  label = '',
  icon,
  isActive = false,
  onClick = () => {
    return false
  },
}) => {
  return (
    <button
      type="button" 
      className={`${styles.item} ${isActive && styles.item__active}`}
      onClick={onClick}
    >
      <div className={styles.icon}>
        {icon || label.substring(0, 1)}
      </div>
      {label &&
        <div className={styles.label}>
          <span>{label}</span>
        </div>
      }
    </button>
  )
}

export default Navigation