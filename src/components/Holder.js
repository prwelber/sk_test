import React, { Component } from 'react';
import AddItem from './AddItem';
import Inventory from './Inventory';

var moment = require('moment');


class Holder extends Component {
  state = {
    data: [
      {id: 1, name: 'Squeak Toy', description: 'squeaky toy for your dog!', price: '5.99', available_date: moment().toISOString(), taxable: 'false'},
      {id: 2, name: 'Chew Toy', description: 'chewing toy for your pup!', price: '10.99', available_date: moment('10-15-2016', 'MM-DD-YYYY').toISOString(), taxable: 'true'},
      {id: 3, name: 'Tug Toy', description: 'dogs love tug of war', price: '15.99', available_date: moment().toISOString(), taxable: 'false'},
      {id: 4, name: 'Fetch Toy', description: 'throw it far and see if your dog will bring it back', price: '3.99', available_date: moment('10-30-2016', 'MM-DD-YYYY').toISOString(), taxable: 'true'}
    ]
  }

  addNewItem = (item) => {
    const items = this.state.data;

    const newItem = {
      id: this.state.data.length + 1,
      name: item.name,
      description: item.description,
      price: item.price,
      available_date: item.date,
      taxable: item.taxable
    };

    const updatedItems = items.concat([newItem]);

    this.setState({data: updatedItems})
  }

  render() {
    return (
      <div className='container'>
        <AddItem handleSubmit={this.addNewItem}></AddItem>
        <Inventory data={this.state.data}></Inventory>
      </div>
    )
  }
}

export default Holder;
