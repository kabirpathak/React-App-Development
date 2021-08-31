import React from 'react';
import ExpenseForm from './ExpenseForm';
import Card from '../UI/Card';
const NewExpense = (props) => {

    const saveExpenseDateHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };

        props.onAddExpense(expenseData);
    }
    
    return (
        <Card>
            <ExpenseForm onSaveExpenseData={saveExpenseDateHandler}/>
        </Card>
    );

}

export default NewExpense;