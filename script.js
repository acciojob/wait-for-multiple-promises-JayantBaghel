//your JS code here. If required.
// Function to create a promise that resolves after a random time between 1 and 3 seconds
function createPromise(id) {
    const time = Math.random() * 2 + 1; // Random time between 1 and 3 seconds
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: `Promise ${id}`, time: time.toFixed(3) });
        }, time * 1000);
    });
}

// Create an array of 3 promises
const promises = [createPromise(1), createPromise(2), createPromise(3)];

// Add the loading row to the table
const table = document.getElementById('promiseTable');
const loadingRow = document.getElementById('loadingRow');

// Wait for all promises to resolve
const startTime = Date.now();
Promise.all(promises).then((results) => {
    // Calculate total time taken
    const endTime = Date.now();
    const totalTime = ((endTime - startTime) / 1000).toFixed(3);

    // Remove the loading row
    table.removeChild(loadingRow);

    // Add rows for each promise result
    results.forEach((result) => {
        const row = document.createElement('tr');
        const cell1 = document.createElement('td');
        const cell2 = document.createElement('td');
        cell1.textContent = result.id;
        cell2.textContent = result.time;
        row.appendChild(cell1);
        row.appendChild(cell2);
        table.appendChild(row);
    });

    // Add row for total time
    const totalRow = document.createElement('tr');
    const totalCell1 = document.createElement('td');
    const totalCell2 = document.createElement('td');
    totalCell1.textContent = 'Total';
    totalCell2.textContent = totalTime;
    totalRow.appendChild
