import React from 'react'
import './styles.module.scss';
import Cart from './../Cart/index'
import Products from "./../Products/index";
import styles from './styles.module.scss'

const Home = () => {
  return (
    <div className={styles.home}>
      <Cart/>
      <Products/>
    </div>
  )
}

export default Home