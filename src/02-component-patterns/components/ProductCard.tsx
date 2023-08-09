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

interface ProductButtonsProps {
    counter: number,
    increaseBy: (val: number) => void,
}

export const ProductImage = ({img = ''}) => ( <img className={styles.productImg} src={ img ? img : noImage } alt="Product Image" /> );

export const ProductTitle = ({title = ''}) => ( <span className={styles.productDescription}>{title}</span> );

export const ProductButtons = ({counter, increaseBy}: ProductButtonsProps) => {
    return (
        <div className={styles.buttonsContainer}>
            <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>-</button>
            <div className={styles.countLabel}>{counter}</div>

            <button className={styles.buttonAdd} onClick={() => increaseBy(+1)} >+</button> 
        </div>
    )
}


const ProductCard = ({product}: Props) => {

  const { counter, increaseBy } = useProduct();

  const { id, title, img = noImage } = product;

  return (
    <div className={styles.productCard}>
        <ProductImage img={img} />

        <ProductTitle title={title} />

        <ProductButtons counter={counter} increaseBy={increaseBy}/>
        
    </div>
  )
}

export default ProductCard