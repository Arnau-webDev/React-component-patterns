
export interface ProductCardProps {
    product: Product,
    children?: React.ReactElement | React.ReactElement[],
    className?: string,
    style?: React.CSSProperties,
}

export interface Product {
    id: number,
    title: string,
    img?: string
}

export interface ProductContextProps {
    counter: number,
    increaseBy: (val: number) => void,
    product: Product,
}
