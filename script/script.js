const billsTable = document.getElementById('billsTable');
const billInput= document.getElementsByClassName('billInput');
const addSelect = document.getElementById('addSelect').value
/* change these to target the table instead of div
const budgetGoals = document.getElementById('budgetGoals');
const budgetExpenses = document.getElementById('budgetExpenses');
const sum = document.getElementById('summary');
const misc = document.getElementById('miscExpense');
*/
billRow = 0
billCell = 0
billType = []

function insertBill() {
    let name = document.getElementById('billName').value;
    let date = document.getElementById('billDate').value;
    let amount = document.getElementById('billAmount').value;
    let row= billsTable.insertRow(0);
    let cell = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    cell.innerHTML = name;
    cell2.innerHTML = date;
    cell3.innerHTML = amount;
 }

function selectOptionAdd() {
    if (addSelect == 'Bill') {
        document.getElementsByClassName('billInput')[0].style.visibility= 'visible';
        document.getElementsByClassName('billInput')[0].style.display = 'initial';
        document.getElementsByClassName('billInput')[1].style.visibility= 'visible';
        document.getElementsByClassName('billInput')[1].style.display = 'initial';
        document.getElementsByClassName('billInput')[2].style.visibility= 'visible';
        document.getElementsByClassName('billInput')[2].style.display = 'initial';
        document.getElementsByClassName('billInput')[3].style.visibility= 'visible';
        document.getElementsByClassName('billInput')[3].style.display = 'initial';
    console.log(addSelect);} else if (addSelect == 'addMiscExp') {console.log('misc');

    }
    
}

/* -
    - insertBill to insert new row of data with cell of data 
   */