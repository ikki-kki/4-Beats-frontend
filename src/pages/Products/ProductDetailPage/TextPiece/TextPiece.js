import React from "react";
import "./TextPiece.scss";

class TextPiece extends React.Component {
    render() {
        const { color, title, inText, width } = this.props
        return(
            <div style={{ color: color, width: width }} className="TextPiece">
                <h2>{ title }</h2>
                <p>{ inText }</p>
            </div>
        )
    }
}

export default TextPiece;
