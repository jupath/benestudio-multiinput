import React, { Component } from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import InputField from './InputField';

class MultiInput extends Component {
  state = {
    attrs: [],
    addNew: false,
  }

  handleOnClickAddNew = () => {
    this.setState({ addNew: true });
  }

  handleAddNew = (attr) => {
    const newAttr = {
      id: shortid.generate(),
      attr,
    };

    this.setState({
      attrs: [
        ...this.state.attrs,
        newAttr,
      ],
      addNew: false,
    });
  }

  handleDeleteItem = (id) => {
    const attrs = this.state.attrs.filter(attr => attr.id !== id);

    this.setState({ attrs });
  }

  handleRemoveActiveField = () => {
    this.setState({ addNew: false });
  }

  handleOnClickSaveForm = () => {
    const { attrs } = this.state;
    this.props.handleSaveForm(attrs);
    this.setState({ attrs: [] });
  }

  render() {
    return (
      <div>
        <div className="multiform">
          <div className="multiform__logo">
            Test
          </div>
          <div className="multiform__content">
            <div className="added-attrs">
              {
                this.state.attrs.length > 0 &&
                this.state.attrs.map(attr =>
                  (<InputField
                    key={attr.id}
                    attr={attr.attr}
                    id={attr.id}
                    handleAddNew={this.handleAddNew}
                    handleDeleteItem={this.handleDeleteItem}
                  />))
              }
            </div>
            {
              this.state.addNew &&
              <InputField
                handleAddNew={this.handleAddNew}
                handleRemoveActiveField={this.handleRemoveActiveField}
              />
            }
            <button className="btn--empty btn--addnew" onClick={this.handleOnClickAddNew}>test attribute</button>
          </div>
        </div>
        <footer className="multiform__footer">
          <button className="btn btn--empty text-uppercase">cancel</button><button className="btn btn--empty btn--blue text-uppercase" onClick={this.handleOnClickSaveForm}>save</button>
        </footer>
      </div>
    );
  }
}

MultiInput.propTypes = {
  handleSaveForm: PropTypes.func.isRequired,
};

export default MultiInput;
