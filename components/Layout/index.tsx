import { FC, useState } from 'react'
import { ToastContainer } from 'react-toastify';

import PageHead from 'components/PageHead'
import Header from 'components/Header'
import Navigation from 'components/Navigation'

import 'react-toastify/dist/ReactToastify.min.css';
import styles from './Layout.module.scss'

type TLayout = {
  [otherProp: string]: any
}

const Layout:FC<TLayout> = ({
  ...props
}) => {

  const [navCollapsed, setNavCollapsed] = useState<boolean>(true)

  return (
    <>
      <PageHead />

      <div className={styles.main}>
        <Header />
        <Navigation
          collapsed={navCollapsed}
          setCollapsed={setNavCollapsed}
        />
        <div className={`${styles.content} ${navCollapsed && styles.content__collapsed}`}>
          {props?.children}
        </div>
      </div>

      <ToastContainer />
    </>
  )
}

export default Layout