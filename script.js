document.addEventListener('DOMContentLoaded', () => {
    const table = document.getElementById('promise-table');
    const loadingRow = document.getElementById('loading-row');

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
            const row = table.insertRow();
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            cell1.textContent = `Promise ${index + 1}`;
            cell2.textContent = result;
        });

        // Add the total row
        const totalRow = table.insertRow();
        const totalCell1 = totalRow.insertCell(0);
        const totalCell2 = totalRow.insertCell(1);
        totalCell1.textContent = 'Total';
        totalCell2.textContent = total;
    });
});
