import React from 'react';

function ToDoList(props) {
    const {data} = props;
    const renderList = () => {
        return data.map(item => (
                <React.Fragment key={item.id}>
                    <dt>{item.dt}</dt>
                    <dd>{item.dd}</dd>
                </React.Fragment>
            )
        )
    }
        return (
            <dl>
                {renderList()}
            </dl>
        )
}
export default ToDoList;