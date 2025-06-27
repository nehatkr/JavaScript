// Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

var today = new Date(); //get current date

var dd = today.getDate(); //get day of the month

var mm = today.getMonth() + 1; // Get the month (adding 1 because months are zero-based)

var yyyy = today.getFullYear(); //get year

if (mm < 10) {
  // Get the month (adding 1 because months are zero-based)
  mm = "0" + mm;
}

today = mm + "-" + dd + "-" + yyyy;
console.log(today);

today = mm + "/" + dd + "/" + yyyy;
console.log(today);

today = dd + "-" + mm + "-" + yyyy;
console.log(today);

today = dd + "/" + mm + "/" + yyyy;
console.log(today);
