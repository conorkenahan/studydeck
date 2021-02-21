import React, { useState } from 'react';
import { saveCard } from '../services/cardService';

export function CardForm(props) {
    const [term, setTerm] = useState('');
    const [definition, setDef] = useState('');

    function handleTermChange(e) {
        const value = e.target.value;
        setTerm(value)
    }
    function handleDefChange(e) {
        const { value } = e.target;
        setDef(value)
    }

    function clearForm() {
        setTerm('');
        setDef('');
    }

    function handleSubmit(e) {
        e.preventDefault();
        saveCard({ term, definition }).then(card => {
            clearForm();
            props.onSave && typeof props.onSave === 'function' && props.onSave(card)
        })
    }

    return (
        <div className="tile" onReset>
            <form onSubmit ={handleSubmit}>
                <div>
                    <label htmlFor="card_term" >term</label>
                    <textarea id="card_term" value={term} onChange={handleTermChange} />
                </div>
                <div>
                    <label htmlFor='card_definition'>definition</label>
                    <textarea id="card_definition" value={definition} onChange={handleDefChange} />
                </div>
                <div className="buttons">
                    <button className="primary" type="submit">save</button>
                    <button className="secondary" type="reset" onClick={clearForm}>cancel</button>
                </div>
            </form>
        </div>
    )
}