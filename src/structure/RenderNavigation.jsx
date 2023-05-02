/* eslint-disable no-unused-vars */
import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import {nav} from './Navigation';

export const RenderRoutes = () => {
    return (
    <Routes>
        { nav.map((r, i) => <Route key={i} path={r.path} element={r.element}/>)}
    </Routes>
    )
}

export const RenderMenu = () => {
    return (
        <div className="menu">
            {nav.map((r, i) => r.isMenu ?
            <div key={i} className="menuItem"><Link to={r.path}>{r.name}</Link></div>
            : null)}
        </div>
    )
}