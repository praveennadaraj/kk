let expenses = [];
let total = 0;

function addExpense() {
    const name = document.getElementById('expense-name').value;
    const amount = parseFloat(document.getElementById('expense-amount').value);

    if (name && !isNaN(amount) && amount > 0) {
        expenses.push({ name, amount });
        total += amount;

        updateExpenseList();
        updateTotal();
       
        // Clear the input fields
        document.getElementById('expense-name').value = '';
        document.getElementById('expense-amount').value = '';
    } else {
        alert('Please enter valid expense details.');
    }
}

function updateExpenseList() {
    const expenseList = document.getElementById('expense-list');
    expenseList.innerHTML = '';  // Clear current list

    expenses.forEach((expense, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${expense.name}: $${expense.amount.toFixed(2)} <button onclick="removeExpense(${index})">Remove</button>`;
        expenseList.appendChild(li);
    });
}

function removeExpense(index) {
    total -= expenses[index].amount;
    expenses.splice(index, 1);

    updateExpenseList();
    updateTotal();
}

function updateTotal() {
    document.getElementById('total-expense').textContent = total.toFixed(2);
}
