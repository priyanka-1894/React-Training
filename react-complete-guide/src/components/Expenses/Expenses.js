import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
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
                { filteredExpenses.map(expense => <ExpenseItem key={ expense.id } title={ expense.title } amount={ expense.amount } date={ expense.date } />) }
            </Card>
        </div>
    );
}

export default Expenses;