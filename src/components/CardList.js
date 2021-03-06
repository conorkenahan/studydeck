import React from 'react';
import { Link } from 'react-router-dom';
import { CardForm } from './CardForm';
import { CardPreview } from './CardPreview';

export function CardList({cards, onAdd, onRemove, onUpdate}) {
    return (
        <div>
            <h3>Your Cards</h3>
            <div className="practiceCTA">
                <Link to='/practice'>Practice!</Link>
            </div>
        <div className="gridContainer">
          <CardForm onSave ={onAdd} />
          {cards.map(card => (
            <CardPreview 
              key={card.id} 
              {...card} 
              onRemove={onRemove}
              onUpdate={onUpdate}
            />
          ))}
        </div>
        </div>
    )
}