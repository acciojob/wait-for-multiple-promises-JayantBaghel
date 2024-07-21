document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.getElementById('output');
    const loadingRow = document.getElementById('loading');

    // Function to create a promise that resolves after a random time between 1 and 3 seconds
    const createRandomPromise = () => {
        return new Promise((resolve) => {
            const time = (Math.random() * 2 + 1).toFixed(3);
            setTimeout(() => {
                resolve(parseFloat(time));
            }, time * 1000);
        });
    };

    // Create 3 promises
    const promises = [createRandomPromise(), createRandomPromise(), createRandomPromise()];

    // Add the promises to Promise.all
    const start = performance.now();
    Promise.all(promises).then((results) => {
        const end = performance.now();
        const total = ((end - start) / 1000).toFixed(3);

        // Remove the loading row
        loadingRow.remove();

        // Add rows for each promise result
        results.forEach((result, index) => {
            const row = document.createElement('tr');
            const cell1 = document.createElement('td');
            const cell2 = document.createElement('td');
            cell1.textContent = `Promise ${index + 1}`;
            cell2.textContent = `${result} seconds`;
            row.appendChild(cell1);
            row.appendChild(cell2);
            tableBody.appendChild(row);
        });

        // Add the total row
        const totalRow = document.createElement('tr');
        const totalCell1 = document.createElement('td');
        const totalCell2 = document.createElement('td');
        totalCell1.textContent = 'Total';
        totalCell2.textContent = `${total} seconds`;
        totalRow.appendChild(totalCell1);
        totalRow.appendChild(totalCell2);
        tableBody.appendChild(totalRow);
    });
});
