import React, { Component } from 'react';

var moment = require('moment');


class Item extends Component {

  isTaxable = (taxable) => {
    if (taxable === 'true') {
      return <td className="taxable-check"><i className="fa fa-check-circle" aria-hidden="true"></i></td>
    }
  }

  renderDate = (date) => {
    return moment(date).format('MM/DD/YYYY')
  }

  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.description}</td>
        <td>{this.props.price}</td>
        <td>{this.renderDate(this.props.available_date)}</td>
        {this.isTaxable(this.props.taxable)}
      </tr>
    )
  }
}

export default Item;
