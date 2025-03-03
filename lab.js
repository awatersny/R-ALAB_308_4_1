// Part 1: Refactoring Old Code
// When code is outdated or inefficient, it often goes through a process called “refactoring.” Refactoring code is the process of restructuring that code without changing its original behavior.
// For the first part of this assignment, revisit your code from ALAB 308.3.1, wherein you create a script that parsed CSVs. Now that you have knowledge of arrays and objects, how would you change your approach to this problem? Take a few minutes to examine and refactor the code before continuing.
// For reference, ALAB 308.3.1 is embedded below. The section on CSV parsing is “Part 3.”

const data = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"

const cells = []
const table = []
cells.length = 4
for(let i = 0; i < cells.length; i++) {
  cells[i] = ""
}
// Keep track of commas
let commaCount = 0
// Loop through the characters of a given CSV string.
for (pos = 0; pos < data.length; pos++) {
  // Store each “cell” of data in a variable.
  if (data[pos] !== ",") {
    for (let i = 0; i < cells.length; i++) {
      if(commaCount === i) {
        // Remove line break for table array
        cells[i] += data[pos] === "\n" ? "" : data[pos]
      }
    }
  } else {
    // When you encounter a comma, move to the next cell.
    commaCount++
  }
  // When you encounter the “\r\n” sequence, move to the next “row.”
  if (data[pos] === "\n" || pos === data.length - 1) {
    // Store your results in a two-dimensional array.
    let row = []
    cells.forEach(cell => {
      row.push(cell)
    })
    table.push(row)
    commaCount = 0
    for(let i = 0; i < cells.length; i++) {
      cells[i] = ""
    }
  }
}

console.log(table)

const objTable = []
for(let i = 1; i < table.length; i++) {
  let fieldObj = {}
  for(let j = 0; j < table[i].length; j++) {
    fieldObj[table[0][j].toLowerCase()] = table[i][j]
  }
  objTable.push(fieldObj)
}

// Remove the last element from the sorted array.
objTable.pop()
// Insert the following object at index 1:
// { id: "48", name: "Barry", occupation: "Runner", age: "25" }
tempObj = objTable.shift()
objTable.unshift({ id: "48", name: "Barry", occupation: "Runner", age: "25" })
objTable.unshift(tempObj)
// Add the following object to the end of the array:
// { id: "7", name: "Bilbo", occupation: "None", age: "111" }
objTable.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" })

console.log(objTable)