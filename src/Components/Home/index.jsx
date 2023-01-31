import React from 'react'
import './styles.module.scss';
import Cart from './../Cart/index'
import styles from './styles.module.scss'
import Acordeon from '../Accordion/Acordeon'

const Home = () => {
  return (
    <div className={styles.home}>
      <Cart/>
      <Acordeon/>
    </div>
  )
}

export default Home