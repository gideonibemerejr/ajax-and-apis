import React from 'react'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section className={styles.section}>
      <div className={styles.hero_img} />
      <article className={styles.article}>
        <h1 className={styles.h1}>Ajax + APIs</h1>
        <p className={styles.p}>
          With a short course by{' '}
          <a
            className={styles.link}
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.superhi.com'
          >
            <i>SuperHi</i>
          </a>
          , I learned how to work with Ajax and APIs in a creative, fun way.
          After each lesson, I refactored and added to each application with{' '}
          <a
            className={styles.link}
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.reactjs.org'
          >
            <i>React</i>
          </a>
          .
        </p>
        <blockquote cite='https://www.superhi.com/cources/ajax-and-apis'>
          <p>
            Whenever someone says “Twitter has an API”, what they mean is that
            Twitter has a particular way to let other sites remix their data to
            create brand new projects.
          </p>
          <footer>
            -SuperHi, <cite>Ajax + APIs</cite>
          </footer>
        </blockquote>
      </article>
    </section>
  )
}

export default Hero
