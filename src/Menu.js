import React, { useEffect, useState } from 'react';
import headerData from './config/header-config.js';
import { filterChildLinks } from './helper-functions.js';

const Menu = ({ id: selectedId }) => {
    const [ selectedMenuItems, setSelectedMenuItems ] = useState();

    useEffect(() => {
        const headerOptions = headerData.navCatagories.filter(({ id }) => {
            return selectedId === id;
        });
        setSelectedMenuItems(filterChildLinks(headerOptions[0].children_data));
    }, []);

    return <div className="menu" onMouseOver={(event) => event.stopPropagation()}>
        { selectedMenuItems && Object.keys(selectedMenuItems).map((val, index) => {
            return <div key={val.title} className={`menu__column menu__column--index${index}`}>
                <div className="menu__column-title">{ selectedMenuItems[val].title }</div>
                <div className="menu__column--items">{selectedMenuItems[val].values.map(item => {
                    const name = item.custom_category_name || item.name;
                    return <div key={item.id} className="menu__item">{ name }</div>
                })}</div>
            </div>
        })}
    </div>;
}

export default Menu;
