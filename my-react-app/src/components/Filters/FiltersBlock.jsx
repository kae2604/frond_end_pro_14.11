import React from "react";
import {Button} from "react-bootstrap";
import './FilterBlock.scss';
import PropTypes from "prop-types";

import SelectOptions from "../SelectOptions/SelectOptions.jsx";

const FiltersBlock =({isActive, changeIsActive,
                     inStock, changeInStock,
                     onMainPage, changeFilterOnMainPage,
                     selectedCategory, changeSelectedCategory,
                     selectedBrand, changeSelectedBrand,
                     clickReset}) => {

        return (
            <div className="d-flex justify-content-between align-items-center m-3 gap-5">

                <select
                    className="form-select selectOptions"
                    onChange={changeSelectedCategory}
                    value={selectedCategory}
                >
                    <option value="allCategories">All categories</option>
                    <SelectOptions type='category'></SelectOptions>
                </select>

                <select
                    className="form-select selectOptions"
                    onChange={changeSelectedBrand}
                    value={selectedBrand}>
                    <option value="allBrands">All brands</option>
                    <SelectOptions type='brand'></SelectOptions>
                </select>

                <div className="form-check form-switch">
                    <label className="form-check-label" htmlFor="filterActive">
                        Active
                    </label>
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="filterActive"
                        checked={isActive}
                        onChange={changeIsActive}
                    />
                </div>

                <div className="form-check form-switch">
                    <label className="form-check-label" htmlFor="filterInStock">
                        In stock
                    </label>
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="filterInStock"
                        checked={inStock}
                        onChange={changeInStock}
                    />
                </div>

                <div className="form-check form-switch">
                    <label className="form-check-label" htmlFor="inMainPage">
                        On main page
                    </label>
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="inMainPage"
                        checked={onMainPage}
                        onChange={changeFilterOnMainPage}
                    />
                </div>

                <Button
                    className=""
                    onClick={clickReset}
                >Reset filters
                </Button>
            </div>
        )
    };
FiltersBlock.propTypes = {
    isActive: PropTypes.bool.isRequired,
    changeIsActive: PropTypes.func.isRequired,
    inStock: PropTypes.bool.isRequired,
    changeInStock: PropTypes.func.isRequired,
    onMainPage: PropTypes.bool.isRequired,
    changeFilterOnMainPage: PropTypes.func.isRequired,
    selectedCategory: PropTypes.string.isRequired,
    changeSelectedCategory: PropTypes.func.isRequired,
    selectedBrand: PropTypes.string.isRequired,
    changeSelectedBrand: PropTypes.func.isRequired,
    clickReset: PropTypes.func.isRequired,
};
export default FiltersBlock;


