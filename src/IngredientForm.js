import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Button } from 'react-materialize';

class IngredientForm extends Component {
  handleInputChange(e) {
    // console.log(e.target.value)
  };

  newIngredient() {
    const URL = 'https://floating-sierra-28728.herokuapp.com/api/v1/';
    axios({method: 'post', url: URL, data: {ingredient_name: this.nameInput.value}})
      .then((response) => {
        console.log(response)
        // fix this to remove input value
        this.nameInput.value = '';
        this.props.getIngredientList();
      })
      .catch(function(error) {
        console.log(error)
      });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          ref={(input) => { this.nameInput = input; }}
          onChange={(e) => this.handleInputChange(e)} />
        <Button onClick={() => this.newIngredient()}>Create!!</Button>
      </div>
    )
  };
}

IngredientForm.propTypes = {
  getIngredientList: PropTypes.func.isRequired
};

export default IngredientForm;
