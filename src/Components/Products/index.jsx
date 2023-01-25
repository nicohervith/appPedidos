import React from "react";
import { ProductsData } from "../../data/Product-data";
import "./styles.module.scss";
import styles from './styles.module.scss'

const Products = () => {
  return (
    <div className={styles.productContainer}>
      {ProductsData.map((product, i) => (
        <div key={i} className={styles.product}>
          <img src={product.img} alt={product.name} />
          <div>
            <p>
              {product.name} - ${product.price}
            </p>
          </div>
          <button
            onClick={() => {
              console.log(product);
            }}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
