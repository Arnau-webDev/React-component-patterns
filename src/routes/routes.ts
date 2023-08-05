import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

interface Route {
    to: string;
    path: string;
    component: () => JSX.Element,
    name: string;
    children?: Route[]
}

export const routes: Route[] = [
    {
        to: '/lazy1',
        path: 'lazy1',
        component: LazyPage1,
        name: 'LazyPage-1'
    },
    {
        to: '/lazy2',
        path: 'lazy2',
        component: LazyPage2,
        name: 'LazyPage-2'
    },
    {
        to: '/lazy3',
        path: 'lazy3',
        component: LazyPage3,
        name: 'LazyPage-3'
    },
]