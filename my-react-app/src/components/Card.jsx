import React from 'react';

class Card extends React.Component {
    render() {
        const { title, text } = this.props;
         let titleHtml = null;
         let textHtml = null;

         if (title) {
             titleHtml = <h4 className="card-title"> {title} </h4>
         }
         if (text) {
             textHtml = <p className="card-text"> {text} </p>
         }
        return (
            <div className="card">
                <div className="card-body">
                     {titleHtml}
                     {textHtml}
                </div>
            </div>
        )
    }
}
export default Card;