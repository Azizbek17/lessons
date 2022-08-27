import React from 'react';
import ControlItem from './ControlItem/Controltem'
import './Controls.css';

const CONTROLS = {
  cheese: 'сыр',
  olives: 'оливки',
  sausage: 'колбаса',
  mushrooms: 'грибы'
}

const Controls = (props) => {

  return (
    <div className="pizza-controls">
      <h3 className='pizza-controls__title'>Выберите ингредиенты</h3>
      <div className='pizza-control__list'>
        {Object.keys(props.ingredients).map(ingName => {
          return <ControlItem
            key={ingName}
            type={ingName}
            title={CONTROLS[ingName]}
            count={props.ingredients[ingName]}
            add={() => props.addIngredient(ingName)}
            remove={(event) => props.removeIngredient(event, ingName)}
          />
        })
        }
      </div>
      <div className='pizza__price'>Цена:<span>{props.price}</span> Сом</div>
    </div>
  );
};

export default Controls;
