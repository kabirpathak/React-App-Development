import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React from 'react';

const ExpenseItem = (props)=> {
   

    return (
        <Card>
            <ExpenseDate date = {props.date}/>
            <div>{props.title}</div>
            <div>{props.amount}</div>
        </Card>
    );
}

export default ExpenseItem;