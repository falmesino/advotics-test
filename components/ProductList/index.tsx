/* eslint-disable @next/next/no-img-element */
import { FC, useEffect } from 'react'
import axios from 'axios'

import styles from './ProductList.module.scss'

type TProductList = {
  data?: any
  url?: string
  [otherProps: string]: any
}

const ProducList:FC<TProductList> = ({
  data,
  url,
  ...props
}) => {

  useEffect(() => {

  }, [url])

  let items = [];

  if (data) {
    for (let i = 0; i < 10; i++) {
      items.push(
        <ProductItem 
          key={i}
          name={`Product #${i}`}
        />
      )
    }
  }
  /* else {
    (typeof data == 'string') && data.map((value: any, index: number) => {
      console.log('data', {
        index, value
      })
      items.push(
        <ProductItem 
          key={index}
          name={value?.name || `Product ${index}`}
          price={value?.price || 0}
          sold={value?.amount || 0}
          image={value?.photo || undefined}
        />
      )
    })
  }
  */

  return (
    <div className={styles.items}>
      {items}
    </div>
  )
}

type TProductItem = {
  image?: string,
  name?: string,
  price?: number,
  sold?: number
}

const ProductItem:FC<TProductItem> = ({
  image = 'https://placekitten.com/128/128',
  name = 'Product Name',
  price = 69420,
  sold = 42069
}) => {

  const pricing = new Intl.NumberFormat('id-ID', {style: 'currency', currency: 'IDR'}).format(price)
  const soldAmount = new Intl.NumberFormat('id-ID').format(sold)
  
  return (
    <>
      <div className={styles.item}>
        <div className={styles.image}>
          <img src={image} alt={name} title={name} />
        </div>
        <div className={styles.body}>
          <div className={styles.name} title={name}>
            {name}
          </div>
          <div className={styles.meta}>
            <span>{pricing}</span>
            <span>{soldAmount}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProducList