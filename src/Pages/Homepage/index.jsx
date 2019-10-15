import React from 'react'
import { Link } from 'react-router-dom'
import { Circle } from '../../Components'
import data from './data'

import styles from './HomePage.css'

const HomePage = () => {
  console.log(data)
  console.log(styles)
  console.log(Link)

  return (
    <div>
      <Circle />
    </div>
  )
}



export default HomePage
