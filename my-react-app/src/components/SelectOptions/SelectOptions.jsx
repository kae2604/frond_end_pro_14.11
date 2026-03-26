import React from 'react';
import PropTypes from 'prop-types';

const SelectOptions = ({ type }) => {
    if (type === 'category') {
        return (
            <>
                <option value="TV">TV</option>
                <option value="Refrigerator">Refrigerator</option>
                <option value="Phone">Phone</option>
                <option value="Monitor">Monitor</option>
                <option value="Laptop">Laptop</option>
                <option value="Tablet">Tablet</option>
                <option value="Speaker">Speaker</option>
                <option value="Headphones">Headphones</option>
                <option value="Camera">Camera</option>
                <option value="Printer">Printer</option>
            </>
        );
    } else if (type === 'brand') {
        return (
            <>
                <option value="Samsung">Samsung</option>
                <option value="LG">LG</option>
                <option value="Apple">Apple</option>
                <option value="Xiaomi">Xiaomi</option>
                <option value="Sony">Sony</option>
                <option value="HP">HP</option>
                <option value="Dell">Dell</option>
                <option value="Asus">Asus</option>
                <option value="Canon">Canon</option>
                <option value="Bose">Bose</option>
            </>
        );
    } else {
        return null;
    }
};

SelectOptions.propTypes = {
    type: PropTypes.string.isRequired,
};

export default SelectOptions;




