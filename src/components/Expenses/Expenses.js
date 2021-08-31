import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import { useState } from 'react';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2022');

    const filterChangeHandler = selectedYear => {
        console.log('Expenses.js');
        console.log(selectedYear);
        setFilteredYear(selectedYear);
    }

    return (
        
        <Card>
            
            <ExpenseFilter selected={filteredYear} onChangeFilter = {filterChangeHandler}/>
            {props.items.map(item => (
            <ExpenseItem 
                key= {item.id} 
                title = {item.title} 
                amount = {item.amount} 
                date = {item.date}
                />
            ))}
        </Card>
    );
}

export default Expenses;