import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { routes } from './routes';

import logo from '../logo.svg';

const Navigation = () => {
  return (
    <BrowserRouter>
        <div className="main-layout">
            <nav>
                <img src={logo} alt="React Logo" />
                <ul>
                    {routes.map((route) => (
                        <li key={route.path}>
                            <NavLink to={route.to} className={({ isActive }) => isActive ? 'nav-active' : ''}>{route.name}</NavLink>
                        </li>
                    ))}
                </ul>
            </nav>

            <Routes>
                {routes.map((route) => (
                    <Route key={route.path} path={route.path} element={route.component()} />
                ))}

                <Route path='/*' element={<Navigate to={routes[0].to} replace />} />
            </Routes>

        </div>
    </BrowserRouter>
  )
}

export default Navigation;