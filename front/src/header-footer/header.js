// Header.js
import React from 'react';
import { Link } from 'react-router-dom'; // Importer Link pour la navigation
import '../App.css';

function Header() {
    return (
        <div className="header-menu">
            <Link to="/">
                <img src="/logo_myrent.png" style={{ height: '150px', width: '150px' }} alt="Logo Myrent" />
            </Link>

            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <h1 className="h1-header">Myrent</h1>
            </Link>

            <button className="bouton-header btn btn-success">Devenir loueur</button>
            <img src="/icon-admin.png" style={{ height: '30px', width: '30px' }} alt="icon-admin" />
        </div>
    );
}

export default Header;
