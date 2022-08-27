import './PizzaBuilder.css';
import Pizza from '../../components/Pizza/Pizza';
import Controls from '../../components/Pizza/Controls/Controls'

import './PizzaBuilder.css';
import { Component } from 'react';

const PRICES = {
    cheese: 40,
    sausage: 50,
    olives: 60,
    mushrooms: 70
}

class PizzaBuilder extends Component {
  state = {
    ingredients: {
      cheese: 0,
      olives: 0,
      sausage: 0,
      mushrooms: 0,
    },
    price: 100
  };

  addIngredient = ingName => {
    const ingredients = {...this.state.ingredients};
    ingredients[ingName]++;
    
    let price = this.state.price;
    price += PRICES[ingName];

    this.setState({ingredients, price});
  };

  removeIngredient = (event, ingName) => {
    event.stopPropagation();
    const ingredients = {...this.state.ingredients};
    if(ingredients[ingName] === 0) return;

    ingredients[ingName]--;

    let price = this.state.price;
    price -= PRICES[ingName];

    this.setState({ingredients, price});
  }

  render() {
    return (
      <div className="pizza-wrap">
        <Pizza ingredients={this.state.ingredients} />
        <Controls 
        ingredients={this.state.ingredients}
        price={this.state.price}
        addIngredient={this.addIngredient}
        removeIngredient={this.removeIngredient}
        />
        
      </div>
    );
  }
}

export default PizzaBuilder
