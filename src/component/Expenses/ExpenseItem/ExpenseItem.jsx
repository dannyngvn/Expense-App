import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate/ExpenseDate';
import Card from '../../UI/Card/Card';

const ExpenseItem = props => {
  const { date, amount } = props;
  const [title, setTitle] = useState(props.title);
  console.log('Abcv');
  const clickHandler = () => {
    setTitle('abc');
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
