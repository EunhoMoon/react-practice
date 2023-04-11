import { ExpenseItem } from './ExpenseItem';
import './Expenses.css';
import { Card } from '../UI/Card';

export const Expenses = (props) => {
  return (
    <Card className='expenses'>
      {props.items.map(item => <ExpenseItem item={item} key={item.id}/>) }
    </Card>
  );
};