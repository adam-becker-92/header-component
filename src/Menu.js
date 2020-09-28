import React, { useEffect, useState } from 'react';
import headerData from './config/header-config.js';
import { filterChildLinks, filterImages } from './helper-functions.js';

const Menu = ({ id: selectedId }) => {
    const [ selectedMenuItems, setSelectedMenuItems ] = useState();
    const [ selectedMenuImages, setSelectedMenuImages ] = useState();

    useEffect(() => {
        const headerOptions = headerData.navCatagories.filter(({ id }) => {
            return selectedId === id;
        });

        const menuItems = filterChildLinks(headerOptions[0].children_data)
        setSelectedMenuItems(menuItems);

        const menuImages = filterImages(headerOptions[0]);
        setSelectedMenuImages(menuImages);
    }, []);

    return <div className={`menu menu-${selectedId}`} onMouseOver={(event) => event.stopPropagation()}>
        { selectedMenuItems && Object.keys(selectedMenuItems).map((val, index) => {
            return <div key={val.title} className={`menu__column menu__column--index${index}`}>
                <div className="menu__column-title">{ selectedMenuItems[val].title }</div>
                <div className="menu__column--items">{selectedMenuItems[val].values.map(item => {
                    const name = item.custom_category_name || item.name;
                    return <div key={item.id} className="menu__item">{ name }</div>
                })}</div>
            </div>
        })}
        {selectedMenuImages && <div className="image-container">{selectedMenuImages.map(({ url, title }) => {
            return <div className="image">
                <img src={url} className="image__picture"/>
                <div className="image__title">{ title }</div>
            </div>
        })}
    </div>}</div>;
}

export default Menu;
