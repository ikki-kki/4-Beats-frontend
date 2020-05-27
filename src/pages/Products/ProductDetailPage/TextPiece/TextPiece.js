import React from 'react';
import './TextPiece.scss';

class TextPiece extends React.Component {
    render() {
        const { title, inText } = this.props
        return(
            <div className="TextPiece">
                <h2>{ title }</h2>
                <p>{ inText }</p>
            </div>
        )
    }
}

export default TextPiece