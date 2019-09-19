const buttonSubmit = document.querySelector('.submit')
const table = document.querySelector('table');

console.log(table)

function buttonClick(poop) {
  let value = document.querySelector(`input[name='${poop}']`).value;
  !value ? value = 12 : null;
  if(value > 12 || value < 0) {
    console.error('enter a number')
    return ''
  }
  return value
}

buttonSubmit.addEventListener('click', ()=> {
  const rowValue =  buttonClick('rows');
  const columnValue = buttonClick('columns');
  table.innerHTML = ''
    for(let i = 1; i <= rowValue; i++) {
      let tableRow = document.createElement('tr');
      for(let j = 1; j <= columnValue; j++) {
        let tableHead = document.createElement('td');
        tableHead.innerText = `${j * i}`
        tableRow.appendChild(tableHead)
      }
      table.appendChild(tableRow)
    }

    document.querySelector('.tableHead')

})