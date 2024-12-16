 // Intersection Observer for lazy-loading multiple sections
 document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".container");

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // Stop observing once loaded
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    sections.forEach(section => observer.observe(section));
  });



function Add()
{
    // event.preventDefault();
//     const table = document.getElementById('dataTable').querySelector('tbody');
//    let text = document.getElementById("autoSizingInput").value;
//    let date= document.getElementById("autoSizingInputGroup").value;
//     let price=document.getElementById("autoSizingInputGroup2").value;
 
//    let type=document.getElementById("autoSizingSelect").value;
  
  const table = document.getElementById('dataTable').querySelector('tbody');
  const item = document.getElementById("autoSizingInput").value.trim();
  const date = document.getElementById("autoSizingInputGroup").value.trim();
  const price = document.getElementById("autoSizingInputGroup2").value.trim();
  const type = document.getElementById("autoSizingSelect").value;
  // Validate form inputs
  if (!item || !date || !price || !type) {
      // Use SweetAlert for a friendly error message
      Swal.fire({
          icon: 'error',
          title: 'Incomplete Form',
          text: 'Please fill in all the required fields!',
      });
      return;
  }
else{
     localStorage.setItem("Item",item);
     localStorage.setItem("Date",date);
     localStorage.setItem("Price",price);
     localStorage.setItem("Type",type);
     
    // Create a new table row
 
    const newRow = document.createElement('tr');

    // Create and append cells to the row
    const nameCell = document.createElement('td');
    nameCell.textContent = item;
    newRow.appendChild(nameCell);
    const ageCell = document.createElement('td');
    ageCell.textContent =date;
    newRow.appendChild(ageCell);
    const priceCell = document.createElement('td');
    priceCell.textContent = price;
    newRow.appendChild(priceCell);
    const emailCell = document.createElement('td');
    emailCell.textContent = type;
    newRow.appendChild(emailCell);
     // creating the button
    const EditButton = document.createElement('button');
    EditButton.textContent = 'Edit';
    EditButton.className = 'btn btn-primary btn-sm active m-2';
    EditButton.onclick = function() {
        editRow(newRow);
    }
   
  // Edit row function

    // Get the current cell values
    function editRow(row) {
    const nameCell = row.cells[0];
    const dateCell = row.cells[1];
    const priceCell = row.cells[2];
    const typeCell = row.cells[3];

    // Prompt the user to enter new values (you can customize this to use a modal or input fields)
    const newName = prompt("Edit Item:", nameCell.textContent) || nameCell.textContent;
    const newDate = prompt("Edit Date:", dateCell.textContent) || dateCell.textContent;
    const newPrice = prompt("Edit Price:", priceCell.textContent) || priceCell.textContent;
    const newType = prompt("Edit Type:", typeCell.textContent) || typeCell.textContent;

    // Update the row with new values
    nameCell.textContent = newName;
    dateCell.textContent = newDate;
    priceCell.textContent = newPrice;
    typeCell.textContent = newType;

        };
        newRow.appendChild(EditButton);
        // creating the delete button
    
            // delete the row
            const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'btn btn-danger btn-sm active m-2';
    deleteButton.onclick = function() {
        // Remove the row
        table.removeChild(newRow);
    };
    newRow.appendChild(deleteButton);
    // Append the row to the table body
    table.appendChild(newRow);

    // Clear the form
     document.getElementById('dataForm').reset();
  

}
}
//function total()
function Total() {
    let total = 0; // Initialize the total amount to 0

    // Get the table rows in the tbody
    const tableRows = document.getElementById('dataTable').querySelectorAll('tbody tr');
    
    tableRows.forEach(row => {
        // Find the price cell (assuming it's the third cell in the row)
        const priceCell = row.cells[2];
        if (priceCell) {
            const priceValue = parseFloat(priceCell.textContent) || 0; // Convert to a number
            total += priceValue; // Add to the total
        }
    });

    // Display the total using SweetAlert
    Swal.fire({
        title: 'Total Amount',
        text: `The total amount is ${total.toFixed(2)}`,
        icon: 'info',
        confirmButtonText: 'OK'
    });
}

