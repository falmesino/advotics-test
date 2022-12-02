/* eslint-disable @next/next/no-img-element */
import { FC, useEffect, useState, useRef } from 'react'
import { toast } from 'react-toastify'
import Calendar from 'react-calendar'
import moment from 'moment'
import { FaTimes, FaChevronDown } from 'react-icons/fa'

import { sub, differenceInMonths, differenceInCalendarMonths } from 'date-fns'

import useOnClickOutside from 'libs/useOnClickOutside'

import styles from './FilterPeriod.module.scss'

type TFilterPeriod = {
  defaultState?: boolean
  [otherProps: string]: any
}

const FilterPeriod:FC<TFilterPeriod> = ({
  defaultState = true,
  ...props
}) => {

  const ref = useRef<HTMLDivElement>(null)

  const currentDate = sub(new Date(), { days: 1 })

  console.log('currentDate', currentDate)

  const [collapsed, setCollapsed] = useState<boolean>(true)

  const [date, setDate] = useState<any>([
    sub(new Date(), { days: 7}),
    sub(new Date(), { days: 1})
  ])

  const [dateStart, setDateStart] = useState<any>(sub(new Date(), { days: 7}))
  const [dateEnd, setDateEnd] = useState<any>(sub(new Date(), { days: 1}))

  const [dateStartMin, setDateStartMin] = useState<any>(sub(new Date(), { months: 6}))
  const [dateEndMin, setDateEndMin] = useState<any>(dateStartMin)

  const [dateStartMax, setDateStartMax] = useState<any>(dateEnd)
  const [dateEndMax, setDateEndMax] = useState<any>(dateEnd)

  /**
   * default period: last 7 days ([today-1] - [today-7])
   * 
   * Additional Rules
   * Minimum time range is 1 day
   * Maximum time range is 6 months
   * Today's date and future dates can not be selected
   */

  const handleCollapsible = (collapsed: boolean) => {
    setCollapsed(!collapsed)
  }

  const formatDate = (date: any) => {
    return moment(date).format('DD-MMMM-YYYY')
  }

  const handlePeriods = (period: string = '') => {
    console.log('handlePeriods', period)
  }

  const periodTypes = [
    {
      name: 'Today',
      action: 'today'
    },
    {
      name: 'Yesterday',
      action: 'yesterday'
    },
    {
      name: 'Last 7 days',
      action: 'l7d'
    },
    {
      name: 'Last 30 days',
      action: 'l30d'
    },
    {
      name: 'This Month',
      action: 'tm'
    },
    {
      name: 'Custom',
      action: 'custom'
    }
  ]

  useEffect(() => {

    const diffMonth = differenceInCalendarMonths(dateStart, dateEnd)

    const duration = 0;

    // minimum time range is 1 day

    // maximmum time range is 6 months

    if (diffMonth < -6) {
      toast('Maximmum time range is 6 months')
    }


    console.log('dateStart or dateEnd changed', {
      dateStart,
      dateEnd,
      diffMonth
    })

  }, [dateStart, dateEnd])

  useOnClickOutside(ref, () => handleCollapsible(true))

  return (
    <>
      <div ref={ref} className={`${styles.filterPeriod} ${collapsed && styles.filterPeriod__collapsed}`}>
        <div className={styles.header}>
          <div className={styles.title}>
            <img src="/icon-calendar.png" alt="" title="" />
            <span>Period</span>
          </div>
          <div className={styles.period}>
            <span>{formatDate(dateStart)}</span>
            <span>-</span>
            <span>{formatDate(dateEnd)}</span>
          </div>
          <button
            type="button"
            onClick={() => handleCollapsible(collapsed)}
            className={styles.toggle}
          >
            {collapsed ? <FaTimes /> : <FaChevronDown />}
          </button>
        </div>
        {collapsed &&
          <div className={styles.body}>
            <div className={styles.periods}>
              <div className={styles.buttons}>
                {periodTypes.map((value, index) => {
                    return (
                      <button 
                        key={index}
                        type="button" 
                        className={styles.button}
                        onClick={() => handlePeriods(value.action)}
                      >
                        {value.name}
                      </button>
                    )
                  })
                }
              </div>
              <div className={styles.action}>
                <button
                  type="button"
                  className={styles.apply}
                  onClick={() => alert('applied')}
                >
                  Apply
                </button>
              </div>
            </div>
            <div className={styles.calendars}>
              <div className={styles.calendar}>
                <Calendar
                  onChange={setDateStart}
                  value={dateStart}
                  maxDate={dateStartMax}
                  showDoubleView={false}
                  showNeighboringMonth={false}
                />
              </div>
              <div className={styles.calendar}>
                <Calendar
                  onChange={setDateEnd}
                  value={dateEnd}
                  maxDate={dateEndMax}
                  showDoubleView={false}
                  showNeighboringMonth={false}
                />
              </div>
            </div>
          </div>
        }
      </div>
    </>
  )
}

export default FilterPeriod