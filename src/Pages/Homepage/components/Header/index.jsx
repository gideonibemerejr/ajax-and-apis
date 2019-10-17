import React from 'react'
import styles from './Header.module.css'

import { Circle } from '../../../../Components'
import Hero from '../Hero'

const Header = () => {
  return (
    <header className={styles.header}>
      {/* Nav START */}
      <nav className={styles.nav}>
        <ul className={styles.links}>
          <a className={styles.link} href='/'>
            Ajax + APIs
          </a>

          <li className={styles.link_item}>
            <a className={styles.link} href='#Projects'>
              Projects
            </a>
          </li>
        </ul>
        <Circle />
      </nav>
      {/* Nav END */}

      {/* Hero Section START */}
      <Hero />
      {/* Hero Section END */}
    </header>
  )
}

export default Header
