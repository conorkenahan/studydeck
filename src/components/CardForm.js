import React, { useState } from 'react';
import { saveCard } from '../services/cardService';

export function CardForm(props) {
    const [term, setTerm] = useState('');
    const [def, setDef] = useState('');

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
        //call API
        saveCard({ term, definition: def }).then(card => {
            clearForm();
            props.onSave && typeof props.onSave === 'fcuntion' && props.onSave(card)
        })
        //notify parent
        // wire up to form
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
                    <textarea id="card_definition" value={def} onChange={handleDefChange} />
                </div>
                <div className="buttons">
                    <button className="primary" type="submit">save</button>
                    <button className="secondary" type="reset" onClick={clearForm}>cancel</button>
                </div>
            </form>
        </div>
    )
}