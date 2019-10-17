import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from './components'
import data from './data'

import styles from './HomePage.module.css'

const HomePage = () => {
  console.log(data)

  console.log(Link)

  return (
    <div className={styles.HomePage}>
      <Header />
    </div>
  )
}

export default HomePage
