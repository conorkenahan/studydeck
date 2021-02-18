import React, { useState } from 'react';

export function CardForm(props) {
    const [term, setTerm] = useState('');
    const [def, setDef] = useState('');

    function handleTermChange(event) {
        console.log(event)
        const value = event.target.value;
        setTerm(value)
    }
    function handleDefChange(event) {
        const { value } = event.target;
        setDef(value)
    }

    function clearForm(event) {
        setTerm('');
        setDef('');
    }

    return (
        <div className="tile">
            <form>
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