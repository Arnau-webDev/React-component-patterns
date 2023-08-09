import { ProductCard } from "../components/ProductCard";

import {ProductButtons, ProductImage, ProductTitle} from '../components';

const product = {
  id: 1,
  title: 'Coffe Mug - Card',
  img: './coffee-mug.png'
}

const ShoppingPage = () => {
  return (
    <div>
        <h1>Shopping Store</h1>
        <hr />

        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: "wrap"
        }}>
          {/* <ProductCard product={product} >
            <ProductCard.Image />
            <ProductCard.Title title={'Coffee'} />
            <ProductCard.Buttons counter={0} increaseBy={function (val: number): void {
            throw new Error("Function not implemented.");
          } } />
          </ProductCard> */}

            <ProductCard product={product} >
              <ProductImage />
              <ProductTitle  />
              <ProductButtons />
          </ProductCard>
        </div>
    </div>
  )
}

export default ShoppingPage