import React from 'react'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section className={styles.section}>
      <article className={styles.article}>
        <h1 className={styles.h1}>Ajax + APIs</h1>
        <p className={styles.p}>
          With a short course by{' '}
          <a
            className='HomePage-link'
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.superhi.com'
          >
            <i>SuperHi</i>
          </a>
          , I learned how to work with Ajax and APIs in a creative, fun way.
          After each lesson, I refactored and added to each application with{' '}
          <a
            className='HomePage-link'
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.reactjs.org'
          >
            <i>React</i>
          </a>
          .
        </p>
      </article>
    </section>
  )
}

export default Hero
