import React from 'react';
import { Search } from './Search';

export function Header() {
    return (
        <header className="header-bg">
            <h1 className="header-title">Star Wars Movies</h1>
            <nav className="search">
                <Search/>
            </nav>
        </header>
    )
}
