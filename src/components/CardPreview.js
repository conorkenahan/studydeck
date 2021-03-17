import React, { useState} from 'react';
import { destroyCard } from '../services/cardService';
import { CardForm } from './CardForm';

export default function CardPreview({ onRemove, onUpdate, ...card }) {
    const [isEditMode, setIsEditMode] = useState(false);
    function handleEdit() {
        setIsEditMode(edit => !edit)
    }

    return isEditMode ? <CardForm onCancel={handleEdit} onSave={onUpdate} card={card} /> : <View {...card} onRemove={onRemove} handleEdit={handleEdit} />
}

function View({ id, term, definition, onRemove, handleEdit }) {
    const [isFront, setIsFront] = useState(true);
    function handleCardFlip() {
        setIsFront(current  => !current)
    }

    function handleDelete() {
        const confirm = window.confirm(`Are you sure you wish to delete "${term}?`)
        if(confirm) {
        destroyCard(id).then(() => {
            onRemove && typeof onRemove === 'function' && onRemove(id)
        }); 
            
        }
    }
    
    return (
        <div className={`tile ${isFront ? '' : 'back'}`} onClick={handleCardFlip}>
            <h4 className="cardTerm">{isFront ? term : definition}</h4>
            <div className="cardButtons">
                <button type="button" className="tertiary" onClick={handleCardFlip}>show back</button>
                <div>
                    <button type="button" className="secondary" onClick={handleEdit}>edit</button>
                    <button type="button" className="secondary danger" onClick={handleDelete}>delete</button>
                </div>
            </div>
        </div>
    )
}