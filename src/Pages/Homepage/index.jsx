import React from 'react'
import { Link } from 'react-router-dom'
import { Circle } from '../../Components'
import data from './data'

import styles from './HomePage.module.css'

const HomePage = () => {
  console.log(data)

  console.log(Link)

  return (
    <div className={styles.header}>
      <Circle />
    </div>
  )
}

export default HomePage
