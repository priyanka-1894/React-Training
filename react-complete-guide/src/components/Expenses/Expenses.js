import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from '../UI/Card';

import './Expenses.css';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (filter) => {
        setFilteredYear(filter);
        props.filterExpense(filter);
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={ filteredYear } filterExpense={ filterChangeHandler } />
                <ExpenseItem title={ props.expenses[0].title } amount={ props.expenses[0].amount } date={ props.expenses[0].date } />
                <ExpenseItem title={ props.expenses[1].title } amount={ props.expenses[1].amount } date={ props.expenses[1].date } />
                <ExpenseItem title={ props.expenses[2].title } amount={ props.expenses[2].amount } date={ props.expenses[2].date } />
                <ExpenseItem title={ props.expenses[3].title } amount={ props.expenses[3].amount } date={ props.expenses[3].date } />
            </Card>
        </div>
    );
}

export default Expenses;