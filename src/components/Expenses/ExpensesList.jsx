import './ExpensesList.css';
import { ExpenseItem } from './ExpenseItem';

export const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expenses</h2>
  }

  return (
    <ul className='expenses-list'>
      {props.items.length > 0 && props.items.map(expense => {
        return (
          <ExpenseItem
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
            key={expense.id}
          />
        );
      })}
    </ul>
  );
};