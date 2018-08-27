import React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import ExpenseForm from './ExpenseForm';

describe('Expense Form component', () => {
  it('renders add if no expense prop', () => {
    const handleComplete = jest.fn();
    const wrapper = mount(<ExpenseForm onComplete={handleComplete}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();

    const expense = { name: 'bus', price: 5 };

    wrapper.find('input[name="name"]').simulate('change', {
      target: {
        name: 'name',
        value: expense.name
      }
    });

    wrapper.find('input[name="price"]').simulate('change', {
      target: {
        name: 'price',
        value: expense.price
      }
    });

    wrapper.find('button').simulate('submit');

    const calls = handleComplete.mock.calls;
    expect(calls.length).toBe(1);
    expect(calls[0][0]).toEqual(expense);
  });
});