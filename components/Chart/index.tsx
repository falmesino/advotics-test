import { FC, useRef } from 'react'

import styles from './Chart.module.scss'

type TChartComponent = {
  [otherProp: string]: any
}

const ChartComponent:FC<TChartComponent> = ({
  ...props
}) => {
  return (
    <div className={styles.chart}>
      <p>Chart goes here</p>
    </div>
  )
}

export default ChartComponent