import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { remove } from './expenseActions';
import styles from './ExpenseItem.css';

class ExpenseItem extends Component {
  static propTypes = {
    expense: PropTypes.object.isRequired,
    onEdit: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
  };

  render() {
    const { expense, onEdit, remove } = this.props;

    return (
      <section className={styles.expenseItem}>
        <p>Name: {expense.name}</p>
        <p>Price: ${expense.price}</p>
        <button name="edit" onClick={onEdit}>Edit</button>
        <button name="delete" onClick={() => remove(expense)}>Delete</button>
      </section>
    );
  }
}

export default connect(
  null,
  { remove }
)(ExpenseItem);