import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputField extends Component {
  state = {
    attr: this.props.attr,
  }

  handleOnchangeField = (event) => {
    const attr = event.target.value;

    this.setState({ attr });
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    const { attr } = this.state;

    this.props.handleAddNew(attr);
  }

  handleOnClickDelete = () => {
    if (this.props.id) {
      this.props.handleDeleteItem(this.props.id);
    } else {
      this.props.handleRemoveActiveField();
    }
  }

  render() {
    return (
      <div className="input-field">
        <div className={`input-field__label ${!this.props.id && 'text-blue'}`}>test attribute</div>
        <div className="input-field__form">
          <form onSubmit={this.handleOnSubmit}>
            <input
              type="text"
              className="input-text"
              autoFocus={!this.props.id}
              value={this.state.attr}
              onChange={this.handleOnchangeField}
            />
          </form>
          <button className="btn btn--empty btn--delete" onClick={this.handleOnClickDelete}>&times;</button>
        </div>
      </div>
    );
  }
}

InputField.propTypes = {
  attr: PropTypes.string,
  id: PropTypes.string,
  handleAddNew: PropTypes.func.isRequired,
  handleDeleteItem: PropTypes.func,
  handleRemoveActiveField: PropTypes.func,
};

InputField.defaultProps = {
  id: null,
  attr: '',
  handleDeleteItem: null,
  handleRemoveActiveField: null,
};

export default InputField;
