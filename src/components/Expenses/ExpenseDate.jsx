import React from 'react';
import './ExpenseDate.css';

export const ExpenseDate = (props) => {
  const year = props.date.getFullYear();
  const month = props.date.toLocaleDateString('ko-KR', { month: 'long' });
  const day = props.date.toLocaleDateString('ko-KR', { day: '2-digit' });

  return (
    <div className="expense-date">
      <div className="expense-date__year">{year}년</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};