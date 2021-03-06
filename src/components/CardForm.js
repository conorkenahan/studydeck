import React, { useState } from 'react';
import { saveCard } from '../services/cardService';

export function CardForm({ onSave, onCancel, card }) {
    const id = card && card.id ? card.id : undefined;

    const [term, setTerm] = useState(id ? card.term : '');
    const [definition, setDef] = useState(id ? card.definition : '');

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
        onCancel && typeof onCancel === 'function' && onCancel();
    }

    function handleSubmit(e) {
        e.preventDefault();
        saveCard({ term, definition, id }).then(card => {
            clearForm();
            onSave && typeof onSave === 'function' && onSave(card)
        });
    }

    return (
        <div className="tile">
            <h4>{id ? 'Update Card' : 'Add Card'}</h4>
            <form onSubmit ={handleSubmit}>
                <div>
                    <label htmlFor={`card_term_${id ? id : 'new'}`} >term</label>
                    <textarea id={`card_term_${id ? id : 'new'}`} value={term} onChange={handleTermChange} />
                </div>
                <div>
                    <label htmlFor={`card_definition_${id ? id : 'new'}`}>definition</label>
                    <textarea id={`card_definition_${id ? id : 'new'}`} value={definition} onChange={handleDefChange} />
                </div>
                <div className="buttons">
                    <button className="primary" type="submit">save</button>
                    <button className="secondary" type="reset" onClick={clearForm}>cancel</button>
                </div>
            </form>
        </div>
    )
}