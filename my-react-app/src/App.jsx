import React from "react";
import {useState, useEffect, useRef} from "react";
import {Container, Card} from "react-bootstrap";
import { v4 as uuidv4 } from 'uuid';

import ProductForm  from './components/ProductForm/ProductForm.jsx'
import ProductList  from './components/ProductList/ProductList.jsx'
import FiltersBlock from "./components/Filters/FiltersBlock.jsx";
import ModalProductExist  from './components/Modals/ModalProductExist.jsx'

const App = () => {

    const getDataFromLocalStorage = () => {
        return JSON.parse(localStorage.getItem('products')) ?? [];
    };

    const [products, setProducts] = useState(getDataFromLocalStorage);
    const [skuOverlap, setSkuOverlap] = useState(false);
    const [editCard, setEditCard] = useState(null);
    const [filterIsActive, setFilterIsActive] = useState(false);
    const [filterInStock, setFilterInStock] = useState(false);
    const [filterOnMainPage, setFilterOnMainPage] = useState(false);
    const [filterSelectedCategory, setFilterSelectedCategory] = useState('');
    const [filterSelectedBrand, setFilterSelectedBrand] = useState('');

    const formRef = useRef(null);

    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(products));
    }, [products]);

    const handleSubmit = (dataFromForm) => {
        if (editCard !== null) {
            const isDuplicate = products.some(product => product.sku.trim() === dataFromForm.sku.trim() &&
                product.id !== editCard.id);
            if (isDuplicate) {
                setSkuOverlap(true);
                return;
            } else {
                const indexProductToEdit = products.findIndex(product => product.id === editCard.id);
                const updateProducts = [...products];
                updateProducts[indexProductToEdit] = {
                    ...dataFromForm,
                    id: editCard.id,
                };
                setProducts(updateProducts);
                setEditCard(null);
                return
            }
        } else {
            const ProductSameSku = products.some(product => product.sku.trim() === dataFromForm.sku.trim());
            if (ProductSameSku) {
                setSkuOverlap(true);
                return;
            } else {
                const newProduct = { ...dataFromForm, id: uuidv4() };
                setProducts(products => [...products, newProduct]);
                setEditCard(null);
            }
        }
    };

    const handleEdit = (sku) => {
        const cardToEdit =  products.find(product => product.sku === sku);
        setEditCard(cardToEdit);
        formRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const handleClear = () => {
        setEditCard(false);
    };

    const handleDelete = (id) => {
        setProducts(products => products.filter(product => product.id !== id));
    };

    const handleFilterIsActive = () => {
        setFilterIsActive(!filterIsActive);
    };

    const handleFilterInStock = () => {
        setFilterInStock(!filterInStock);
    };

    const handleFilterOnMainPage = () => {
        setFilterOnMainPage(!filterOnMainPage);
    };

    const handleFilterSelectedCategory = (event) => {
        const value = event.target.value;
        setFilterSelectedCategory(value === 'allCategories' ? '' : value);
    };

    const handleFilterSelectedBrand = (event) => {
        const value = event.target.value;
        setFilterSelectedBrand(value === 'allBrands' ? '' : value);
    };

    const handleResetFilters  = () => {
        setFilterIsActive(false);
        setFilterInStock(false);
        setFilterOnMainPage(false);
        setFilterSelectedCategory('');
        setFilterSelectedBrand('');
    };

    let arrayToRender = [...products];

    if(filterIsActive){
        arrayToRender = arrayToRender.filter(product => product.isActive)
    }
    if(filterInStock){
        arrayToRender = arrayToRender.filter(product => product.inStock)
    }
    if(filterOnMainPage){
        arrayToRender = arrayToRender.filter(product => product.showOnMain)
    }
    if(filterSelectedCategory) {
        arrayToRender = arrayToRender.filter(product => product.category === filterSelectedCategory);
    }
    if(filterSelectedBrand) {
        arrayToRender = arrayToRender.filter(product => product.brand === filterSelectedBrand);
    }

    return(
        <div>
            <h1 className="text-center mb-3">This is my homework #45</h1>
            <hr ref={formRef}/>

            {skuOverlap && (
                <ModalProductExist
                    showModal={skuOverlap}
                    onClose={() => setSkuOverlap(false)} />
            )}

            <Container>
                <Card border="" className="mb-4" >
                    <Card.Body>
                        <ProductForm
                            onSubmit={handleSubmit}
                            clear={handleClear}
                            editProduct={editCard && editCard}
                        />
                    </Card.Body>
                </Card>

                <Card border="" className="mb-3">
                    <Card.Body>
                        <FiltersBlock
                            isActive={filterIsActive}
                            inStock={filterInStock}
                            onMainPage={filterOnMainPage}
                            changeIsActive={handleFilterIsActive}
                            changeInStock={handleFilterInStock}
                            changeFilterOnMainPage={handleFilterOnMainPage}
                            selectedCategory={filterSelectedCategory}
                            changeSelectedCategory={handleFilterSelectedCategory}
                            selectedBrand={filterSelectedBrand}
                            changeSelectedBrand={handleFilterSelectedBrand}
                            clickReset={handleResetFilters}
                        ></FiltersBlock>

                        <hr/>

                        <ProductList
                            products={arrayToRender}
                            editCard={handleEdit}
                            deleteCard={handleDelete}
                        />
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
};
export default App;


