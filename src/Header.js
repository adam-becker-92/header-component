import React, { useEffect, useState } from 'react';
import Menu from './Menu';
import headerData from './config/header-config.js';
import logo from './logo.svg';

const newInTagline = "New In: Pleasures | Rick Owens | Stone Island";

const Header = () => {
    const [ headers, setHeaders ] = useState();
    const [ selectedItem, setSelectedItem ] = useState();

    useEffect(() => {
        const dataHeaders = headerData.navCatagories.map(({ name, id }) => ({ name, id }));
        setHeaders(dataHeaders);
    }, []);

    return (
        <header className="header" onMouseOver={() => setSelectedItem()}>
            <div className="header__tagline">{newInTagline}</div>
            <div className="header__logo" >
                <img className="header__logo-image" src={logo} alt="logo" />
            </div>
            <div className="header__menu">
                {headers && headers.map(({ name, id }) => {
                    return <span key={ id } className="header__menu-item" onMouseOver={(event) => {
                        event.stopPropagation();
                        setSelectedItem(id)
                    }}>
                            { name }
                        </span>;
                })}
            </div>
            {selectedItem && <Menu id={selectedItem} />}
        </header>
    );
}

export default Header;
