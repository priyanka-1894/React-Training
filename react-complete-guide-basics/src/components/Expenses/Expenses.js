import { useState } from "react";

import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import Card from '../UI/Card';

import './Expenses.css';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (filter) => {
        setFilteredYear(filter);
    }

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={ filteredYear } filterExpense={ filterChangeHandler } />

                <ExpensesChart expenses={ filteredExpenses } />
                
                {
                    // { filteredExpenses.map(expense => <ExpenseItem key={ expense.id } title={ expense.title } amount={ expense.amount } date={ expense.date } />) }
                
                    // filteredExpenses.length === 0 ? (<p>No Expenses Found!</p>) : filteredExpenses.map(expense => <ExpenseItem key={ expense.id } title={ expense.title } amount={ expense.amount } date={ expense.date } />)

                }

                {/* { filteredExpenses.length === 0 && <p>No Expenses Found!</p> } 
                { filteredExpenses.length > 0 && filteredExpenses.map(expense => <ExpenseItem key={ expense.id } title={ expense.title } amount={ expense.amount } date={ expense.date } />) } */}

                {/* { expensesContent } */}

                <ExpensesList expenses={ filteredExpenses } />
            </Card>
        </div>
    );
}

export default Expenses;