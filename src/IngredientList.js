import React from 'react';
import PropTypes from 'prop-types';
import { Button, Checkbox, Input, Card, Col } from 'react-materialize';
import './IngredientList.css'

const IngredientList = (props) => {
  return (
  <div>
    <ul>
      {props.ingredients.map((ingredient, i) =>
      <li key={i} className="card cols={4} colm={4}">
        <Input type='checkbox' />
        {ingredient.name}
        <Button checked={ingredient.checked}>Found it</Button>
        <Button checked={ingredient.checked}>Delete</Button>
      </li> )}
    </ul>
</div>
  )
};

IngredientList.propTypes = {
  ingredients: PropTypes.array.isRequired
};

export default IngredientList


        {/* {!this.state.ingredients ? <p>loading...</p> : this.state.ingredients.map( } */}
