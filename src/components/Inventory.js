import React, { Component } from 'react';
import Item from './Item';


class Inventory extends Component {

  state = {
    data: this.props.data,
    sort: false,
  }

  componentWillReceiveProps(newProps) {
    this.setState({data: newProps.data});
  }

  handleSort = (key) => {

    this.setState({sort: ! this.state.sort});


    this.state.data.sort((a,b) => {

      let x, y;
      if (key === 'price') {
        x = parseFloat(a[key]);
        y = parseFloat(b[key]);
      } else {
        x = a[key].toLowerCase();
        y = b[key].toLowerCase();
      }

      if (this.state.sort) {
        return ((x < y) ? -1 : 1);
      } else {
        return ((x < y) ? 1 : -1);
      }
    });
  }

  render() {
    var items = this.state.data.map(item => {
      return (
        <Item key={item.id} name={item.name} description={item.description} price={item.price} available_date={item.available_date} taxable={item.taxable}></Item>
      )
    });
    return (
      <div className='inventory-wrapper'>
        <table>
          <thead>
            <tr>
              <th className='sortable' onClick={() => this.handleSort('name')}>Name<i className="fa fa-sort" aria-hidden="true"></i></th>
              <th>Description</th>
              <th className='sortable' onClick={() => this.handleSort('price')}>Price<i className="fa fa-sort" aria-hidden="true"></i></th>
              <th>Date Available</th>
              <th>Taxable</th>
            </tr>
          </thead>
          <tbody>
            {items}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Inventory;
