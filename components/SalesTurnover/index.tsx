/* eslint-disable @next/next/no-img-element */
import { FC } from 'react'
import { FaArrowUp, FaArrowDown } from 'react-icons/fa'

import Card from 'components/Card'

import styles from './SalesTurnover.module.scss'

type TSalesTurnover = {
  direction: 'up' | 'down'
  percentage: number
  amount: number
  [otherProp: string]: any
}

const SalesTurnover:FC<TSalesTurnover> = ({
  direction,
  percentage,
  amount,
  ...props
}) => {


  const amountFormat = new Intl.NumberFormat('id-ID', {style: 'currency', currency: 'IDR'}).format(amount)

  return (
    <Card
      title={'Sales Turnover'}
      theme={'small'}
    >
      <div className={styles.wrapper}>
        <div className={styles.highlight}>
          <span>{amountFormat}</span>
          <img src="/icon-sales-turnover@2x.png" alt="" title="" />
        </div>
        <div className={styles.info}>
          <span className={`${styles.arrow} ${direction}`}>
            {direction === 'up' ? 
              <FaArrowUp />
              :
              <FaArrowDown />
            }
            <span>{percentage}%</span>
          </span>
          <span>last period in products sold</span>
        </div>
      </div>
    </Card>
  )
}

export default SalesTurnover