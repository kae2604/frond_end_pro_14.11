import {Col, Row, Container} from "react-bootstrap";
import {useState} from "react";

import ButtonBlock from './components/ButtonBlock.jsx';
import LogBlock from './components/LogBlock';

function App() {
    const [elements, setElements] = useState([]);
    const elementsReversed = [...elements].reverse();

    const addNewElement = (value) => {
        let lastElement = {};
        if (elements.length === 0) {
            lastElement.value = 0;
            lastElement.id = 0;
        } else {
            lastElement.value = elements.at(-1).value;
            lastElement.id = elements.at(-1).id;
        }
        const newElement = {
            value: lastElement.value + value,
            id: lastElement.id + 1,
        }
        setElements([...elements, newElement]);
    };

    const deleteElement = (elementID) => {
        console.log(elementID);
        setElements(elements.filter((element) => element.id !== elementID));
    };

        return(
            <div>
                <h1 className='text-center'>This is my homework #42</h1>
                <hr/>
                <Container className='mt-5' data-container>
                    <Row className= 'mb-5'>
                        <Col xs={4}></Col>
                        <Col xs={4}>
                           <ButtonBlock
                               addNewElement = {addNewElement}
                           />
                        </Col>
                        <Col xs={4}></Col>
                    </Row>

                    <Row className= 'mb-5'>
                        <div className="list-group">
                            {elementsReversed.map((element) => (
                                <div key={element.id}>
                                    <LogBlock
                                        elementValue = {element.value}
                                        deleteElement = {()=>deleteElement(element.id)}
                                    />
                                </div>
                            ))}
                        </div>
                    </Row>
                </Container>
            </div>
        )
}
export default App;


