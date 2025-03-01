// Part 1: Refactoring Old Code
// When code is outdated or inefficient, it often goes through a process called “refactoring.” Refactoring code is the process of restructuring that code without changing its original behavior.
// For the first part of this assignment, revisit your code from ALAB 308.3.1, wherein you create a script that parsed CSVs. Now that you have knowledge of arrays and objects, how would you change your approach to this problem? Take a few minutes to examine and refactor the code before continuing.
// For reference, ALAB 308.3.1 is embedded below. The section on CSV parsing is “Part 3.”

const data = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"

let cells = []
let commaCount = 0
// Loop through the characters of a given CSV string.
for (pos = 0; pos < data.length; pos++) {
  // Store each “cell” of data in a variable.
  if (data[pos] !== ",") {
    if(commaCount === 0) {
      cells[0] += data[pos]
    }
    if(commaCount === 1) {
      cells[1] += data[pos]
    }
    if(commaCount === 2) {
      cells[2] += data[pos]
    }
    if(commaCount === 3) {
      cells[3] += data[pos]
    }
  } else {
    // When you encounter a comma, move to the next cell.
    commaCount++
  }
  // When you encounter the “\r\n” sequence, move to the next “row.”
  if (data[pos] === "\n" || pos === data.length - 1) {
    // Log each row of data.
    // You do not need to format the data, the following works well.
    let row = ""
    cells.forEach(cell => {
      let spacing = cell.length > 8 ? "\t\t" : "\t\t\t"
      row += cell + spacing
    })
    console.log(row)
    commaCount = 0
    cells = ["", "", "", ""]
  }
}