import React, { useState } from 'react';
const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        console.log(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        console.log(event.target.value);
    }

    //another method of handling events.
    // const titleChangeHandler = (event) => {
    //     setUserInput((prevState) => {
    //         return {...prevState, 
    //                 enteredTitle: event.target.value
    //             };
    //     });
    //     console.log(userInput);
    // }

    // const amountChangeHandler = (event) => {
    //     setUserInput((prevState) => {
    //         return {...prevState, 
    //                 enteredAmount: event.target.value,
    //             };
    //     });
    //     console.log(userInput);
    // }

    // const dateChangeHandler = (event) => {
    //     setUserInput((prevState) => {
    //         return {
    //             ...prevState,
    //             enteredDate: event.target.value,
    //         };
    //     });
    //     console.log(userInput);
    // }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount, 
            date: new Date(enteredDate),
        }

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div>
                <div>
                    <label>Title</label>
                    <input type = 'text' value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div>
                    <label>Amount</label>
                    <input type = 'number' value={enteredAmount} min = "0.01" step = "0.01" onChange={amountChangeHandler}/>
                </div>
                <div>
                    <label>Date</label>
                    <input type = 'date' value={enteredDate} min="2021-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div>
                <button type = 'submit'>Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;