import Card from "../UI/Card";

const ExpenseDate = ({ date })  => {
    
    const month = date.toLocaleString('en-US', { month: 'long'});
    const day = date.toLocaleString('en-US', { day: '2-digit'});
    const year = date.getFullYear();    

    return (
        <Card>
            <div>{month}</div>
            <div>{day}</div>
            <div>{year}</div>
        </Card>

    );


}

export default ExpenseDate;