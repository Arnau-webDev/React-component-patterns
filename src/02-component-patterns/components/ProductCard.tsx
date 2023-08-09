import noImage from '../assets/no-image.jpg';

import { useProduct } from '../hooks/useProduct';

import styles from '../styles/styles.module.css';

interface Props {
    product: Product,
}

interface Product {
    id: number,
    title: string,
    img?: string
}


const ProductCard = ({product}: Props) => {

  const { counter, increaseBy } = useProduct();

  const { id, title, img = noImage } = product;

  return (
    <div className={styles.productCard}>
        <img className={styles.productImg} src={img} alt="coffe mug" />

        <span className={styles.productDescription}>{title}</span>

        <div className={styles.buttonsContainer}>
            <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>-</button>
            <div className={styles.countLabel}>{counter}</div>

            <button className={styles.buttonAdd} onClick={() => increaseBy(+1)} >+</button> 

        </div>
    </div>
  )
}

export default ProductCard