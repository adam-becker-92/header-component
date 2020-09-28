const returnColumnIndex = (isThirdColumn, isSecondColumn) => isThirdColumn ? 3 : isSecondColumn ? 2 : 1;

const filterChildLinks = (children_data) => {
    const return_object = {};

    children_data.forEach((val) => {
        const columnIndex = returnColumnIndex(val.include_in_menu_column3, val.include_in_menu_column2)
        if(!return_object[columnIndex]) {
            return_object[columnIndex] = {
                values: []
            }
        }

        if(val.is_column_header){
            return_object[columnIndex].title = val.custom_category_name;
        } else {
            return_object[columnIndex].values.push(val);
        }
    });

    return return_object;
}

const filterImages = (menuData) => {
    const returnObject = {};
    console.log(menuData);
    Object.keys(menuData).forEach((key) => {
        const isImageProp = key.match(/dropdown_image/g);
        if(isImageProp && (key !== 'dropdown_image_enabled')){
            const propVal = key.match(/(url|title|link)/)[0];
            const imageIndex = (key.match(/[0-9]/g) || ["0"])[0];
            if(!returnObject[imageIndex]){
                returnObject[imageIndex] = {};
            }
            console.log(propVal);
            returnObject[imageIndex][propVal] = menuData[key];
        }
    });

    return Object.keys(returnObject).map(val => returnObject[val]);
}

export { filterChildLinks, filterImages }