import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class IngredientForm extends Component {
  handleInputChange(e) {
    // console.log(e.target.value)
  };

  newIngredient() {
    const URL = 'https://floating-sierra-28728.herokuapp.com/api/v1';
    axios.post(URL + '&name=' + this.nameInput.value)
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
        <button onClick={() => this.newIngredient()}>Create!!</button>
      </div>
    )
  };
}

IngredientForm.propTypes = {
  getIngredientList: PropTypes.func.isRequired
};

export default IngredientForm;
