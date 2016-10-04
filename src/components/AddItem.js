import React, { Component } from 'react';

var DatePicker = require('react-datepicker');
var moment = require('moment');

require('react-datepicker/dist/react-datepicker.css');


class AddItem extends Component {
  state = {
    addingItem: false,
    date: moment(),
    taxable: null,
    name: '',
    description: '',
    price: ''
  }

  addItem = () => {
    this.setState({addingItem: ! this.state.addingItem});
  }

  closeAddItem = () => {
    this.setState({addingItem: false});
  }

  handleChange = (date) => {
    this.setState({date: moment(date)});
  }

  setTaxable = (event) => {
    this.setState({taxable: event.target.value});
  }

  handleNameChange = (event) => {
    this.setState({name: event.target.value});
  }
  handleDescriptionChange = (event) => {
    this.setState({description: event.target.value});
  }

  handlePriceChange = (event) => {
    this.setState({price: event.target.value});
  }

  handleNewItem = (event) => {
    event.preventDefault();

    let data = {
      date: moment(this.state.date).toISOString(),
      name: this.state.name,
      description: this.state.description,
      taxable: this.state.taxable,
      price: this.state.price
    }

    if (this.state.name === '' || this.state.description === '' || this.state.price === '' || this.state.taxable === null) {
      alert('Please fill in all fields.');
      return;
    }

    this.props.handleSubmit(data);

    this.setState({
      name: '',
      description: '',
      taxable: null,
      price: '',
      date: moment(),
      addingItem: false
    });
  }

  renderAddItem = () => {
    if (this.state.addingItem) {
      return (
        <div className='add-item-holder'>
          <h5>Add Item to Inventory</h5>
          <p className='close-add-item' onClick={this.closeAddItem}>close</p>
          <form onSubmit={this.handleNewItem}>
            <div className='form-input-text'>
              <input type='text'
                value={this.state.name}
                onChange={this.handleNameChange}
                placeholder='Item Name' />
              <input type='text'
                value={this.state.description}
                onChange={this.handleDescriptionChange}
                placeholder='Item Description' />
            </div>
            <div className='form-input-other-wrapper'>
              <div className='form-input-other'>
                <input className='form-input-inline'
                  value={this.state.price}
                  onChange={this.handlePriceChange}
                  type='text'
                  placeholder='Item Price' />
              </div>
              <div className='form-input-other'>
                Taxable:
                <p>
                  <input type='radio' name='tax-group' id='radio1' onClick={this.setTaxable} value='true' />
                  <label htmlFor='radio1'>True</label>
                </p>
                <p>
                  <input type='radio' name='tax-group' id='radio2' onClick={this.setTaxable} value='false' />
                  <label htmlFor='radio2'>False</label>
                </p>
              </div>
              <div className='form-input-other'>
                Date Available:
                <DatePicker id='date-picker' selected={this.state.date} onChange={this.handleChange} />
                {/*<label htmlFor='date-picker'>Date Available</label>*/}
              </div>
            </div>
            <input type='submit' value='Create New Item' />
          </form>
        </div>
      )
    }
  }

  render() {
    return (
      <div className='header-container'>
        <div className='header-wrapper'>
          <div className='header-div'>
            <h2>Inventory</h2>
          </div>
          <div className='header-div'>
            <button className='add-item-button waves-effect waves-teal btn-flat' onClick={this.addItem}>Add Item</button>
          </div>
        </div>
        {this.renderAddItem()}
      </div>
    );
  }
}

export default AddItem;
