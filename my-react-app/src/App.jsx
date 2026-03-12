import React, {useState} from "react";
import {Col, Row, Container} from "react-bootstrap";
import './App.css';
import ToDoForm from './components/ToDoForm.jsx';
import ToDoCard from './components/ToDoCard.jsx';

function App (){
    const [toDoCards, setCards] = useState([]);
    const getInputValue = (inputValue) => {
        const lastCard =  toDoCards.at(-1);
        const newId = lastCard ? lastCard.id + 1 : 1;
        const newToDoCard = {
            id:newId,
            text:inputValue,
            isDone: false};
        setCards([...toDoCards, newToDoCard]);
    };
        return(
            <div>
                <h1 className='text-center'>This is my homework #40</h1>
                <hr/>
                <Container className='mt-5' data-container>
                    <Row className= 'mb-5'>
                        <Col xs={4}></Col>
                        <Col xs={4}>
                            <ToDoForm getInputValue={getInputValue}></ToDoForm>
                        </Col>
                        <Col xs={4}></Col>
                    </Row>
                    <Row className= 'mb-5'>
                        {toDoCards.map((card, index) => (
                            <Col xs={2} key={card.id}>
                                <ToDoCard textCard={card.text}
                                          idCard={card.id}
                                          CardIsDone={card.isDone}>
                                </ToDoCard>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        );
}
export default App;


