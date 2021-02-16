import React from 'react';

export function CardForm(props) {
    return (
        <div className="tile">
            <form>
                <div>
                    <label htmlFor='card_term'>term</label>
                    <textarea id="card_term" />
                </div>
                <div>
                    <label htmlFor='card_definition'>definition</label>
                    <textarea id="card_definition" />
                </div>
                <div className="buttons">
                    <button className="primary" type="submit">save</button>
                    <button className="secondary" type="reset">cancel</button>
                </div>
            </form>
        </div>
    )
}