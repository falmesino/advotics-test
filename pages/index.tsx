/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

import _ from 'lodash'
import axios from 'axios'

import Layout from 'components/Layout'
import PageTitle from 'components/Common/PageTitle'
import Collapsible from 'components/Collapsible'
import Card from 'components/Card'
import ProducList from 'components/ProductList'
import FilterPeriod from 'components/FilterPeriod'
import SalesTurnover from 'components/SalesTurnover'
import ChartComponent from 'components/Chart'

import styles from 'styles/pages/Dashboard.module.scss'

export default function Home() {

  /**
   * Clone the API for future use
   * https://mockapi.io/projects/638865a1a4bb27a7f78519a9
   * https://mockapi.io/clone/638865a1a4bb27a7f78519a9
   */

  const api_base = 'https://638865a1a4bb27a7f78519a8.mockapi.io/'

  const [bestSellingSKU, setBestSellingSKU] = useState<object>({})
  const [topCompetitorSKU, setTopCompetitorSKU] = useState<object>({})

  useEffect(() => {
    axios.get(api_base + 'best_selling').then((response) => {
      setBestSellingSKU(response?.data)
    })
  }, [])

  useEffect(() => {
    axios.get(api_base + 'competitor_sku').then((response) => {
      setTopCompetitorSKU(response?.data)
    })
  }, [])

  return (
    <Layout>

      <section className={styles.section}>
        <div className={styles.containerFluid}>
          <div className={styles.row}>
            <div className={`${styles.col_12} ${styles.col_lg_4}`}>
              <PageTitle title={'Dashboard'} />
            </div>
            <div className={`${styles.col_12} ${styles.col_md_6} ${styles.col_lg_8}`}>
              <FilterPeriod defaultState={false} />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <Collapsible
          title={`Market Insights`}
          defaultState={false}
        >
          <div className={styles.containerFluid}>
            <div className={styles.row}>
              <div className={`${styles.col_12} ${styles.col_sm_6} ${styles.col_lg_4}`}>
                <SalesTurnover
                  direction={'down'}
                  percentage={13.8}
                  amount={3600000}
                />
              </div>
            </div>
            <div className={styles.row}>
              <div className={`${styles.col_12} ${styles.col_md_6}`}>
                <Card title={'Average Purchase Value'}>
                  <ChartComponent />
                </Card>
              </div>
              
              {bestSellingSKU &&
                <div className={`${styles.col_12} ${styles.col_md_3}`}>
                  <Card title={'Best Selling SKU'}>
                    <ProducList data={bestSellingSKU} />
                  </Card>
                </div>
              }

              {topCompetitorSKU &&
                <div className={`${styles.col_12} ${styles.col_md_3}`}>
                  <Card title={'Top Competitor SKU'}>
                    <ProducList data={topCompetitorSKU} />
                  </Card>
                </div>
              }
              </div>
          </div>
        </Collapsible>
      </section>

    </Layout>
  )
}
