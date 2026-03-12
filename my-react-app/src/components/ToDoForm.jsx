import React from 'react';
import {useState} from "react";
import {Form, Button, InputGroup} from "react-bootstrap";

function ToDoForm({getInputValue}) {
    const [placeholderValue, setPlaceholder] = useState('Enter task to do');
    const handleSubmit = (event) =>{
        event.preventDefault();
        const input = event.target.querySelector('input');
        const dataFromInput = input.value;
        if (dataFromInput.trim() === ''){
            input.value = '';
            setPlaceholder('You entered nothing!!!');
            return;
        } else {
            getInputValue(dataFromInput);
            event.target.querySelector('input').value = '';
            setPlaceholder('Enter task to do');
        }
    };
    return (
        <Form onSubmit={handleSubmit} className="mx-auto">
            <InputGroup>
                <Form.Control
                    type='text'
                    placeholder={placeholderValue}
                    className={placeholderValue === 'You entered nothing!!!' ? 'placeholder-red' : ''}
                />
                <Button type='submit'>Submit</Button>
            </InputGroup>
        </Form>
    );
}
export default ToDoForm;




