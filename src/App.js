import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';

const INITIAL_DATA = [

  { id: '1', title: 'Car insurance', amount: '250', date : new Date(2021, 2, 28)},
  { id: '2', title: 'Birthday party', amount: '300', date : new Date(2021, 3, 23)},
  { id: '3', title: 'Football shopping', amount: '100', date: new Date(2021, 4, 22)},
];

const App = () => {
  const[expenses, setExpenses] = useState(INITIAL_DATA);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses items = {expenses} />
    </div>
  );
}

export default App;
