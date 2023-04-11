import React from 'react';
import './ExpenseItem.css';
import { ExpenseDate } from './ExpenseDate';
import { Card } from '../UI/Card';

export const ExpenseItem = (props) => {
  const clickHandler = () => {
    console.log('Hi')
  }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.item.date}/>
      <div className='expense-item__description'>
        <h2>{props.item.title}</h2>
        <div className='expense-item__price'>${props.item.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};