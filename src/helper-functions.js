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

export { filterChildLinks }