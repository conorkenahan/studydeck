import React, { useState} from 'react';

export default function CardPreview(props) {
    const [isFront, setIsFront] = useState(true);
    function handleCardFlip() {
        setIsFront(current  => !current)
    }
    
    return (
        <div className={`tile ${isFront ? '' : 'back'}`}>
            <h4 className="cardTerm">{isFront ? props.term : props.definition}</h4>
            <div className="cardButtons">
                <button type="button" className="tertiary" onClick={handleCardFlip}>show back</button>
                <div>
                    <button type="button" className="secondary">edit</button>
                    <button type="button" className="secondary danger">delete</button>
                </div>
            </div>
        </div>
    )
}