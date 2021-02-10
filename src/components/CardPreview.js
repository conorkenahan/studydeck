import React from 'react';

export default function CardPreview() {
    return (
        <div className="tile">
            <h4 className="cardTerm">Term goes here</h4>
            <div className="cardButtons">
                <button type="button" className="tertiary">show back</button>
                <div>
                <button type="button" className="secondary">edit</button>
                <button type="button" className="secondary danger">delete</button>
                </div>
            </div>
        </div>
    )
}