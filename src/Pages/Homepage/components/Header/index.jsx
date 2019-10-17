import React from 'react'
import styles from './Header.module.css'

import { Circle } from '../../../../Components'

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.links}>
          <a className={styles.link} href='/'>
            Ajax + APIs
          </a>
        </ul>
        <Circle />
      </nav>
    </header>
  )
}

export default Header
