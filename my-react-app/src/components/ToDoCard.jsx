import React from 'react';
import {useState} from "react";

 function ToDoCard ({textCard, idCard, CardIsDone}) {
     const [isDone, setIsDone] = useState(CardIsDone);
     const toggleDone =() => setIsDone(!isDone);
     const cardBackground = isDone ? 'secondary' : 'success';
        return (
            <div
                data-card={textCard}
                onClick={(event) => toggleDone(event)}
                className={`mb-4 bg-${cardBackground} card p-3`}>
                <p className={'fs-5'}>
                    {`# ${idCard}`}
                </p>
                <p className={`fs-4 text-center ${isDone ? 'crossText' : ''} text-white`}>
                    {textCard}
                </p>
            </div>
        );
}
export default ToDoCard;