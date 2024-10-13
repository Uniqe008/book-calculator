function calculateBooks() {
    const wordsPerSecond = document.getElementById('wordsPerSecond').value;
    const wordsPerBook = document.getElementById('wordsPerBook').value;
    const minutesPerDay = document.getElementById('minutesPerDay').value;
    
    if (wordsPerSecond && wordsPerBook && minutesPerDay) {
        const secondsPerDay = minutesPerDay * 60;
        const totalWordsPerDay = wordsPerSecond * secondsPerDay;
        const daysToFinishBook = wordsPerBook / totalWordsPerDay;
        const booksPerMonth = 30 / daysToFinishBook;
        
        document.getElementById('result').innerHTML = `
            <p>It will take you approximately <strong>${daysToFinishBook.toFixed(2)}</strong> days to read one book.</p>
            <p>You can read around <strong>${booksPerMonth.toFixed(2)}</strong> books in a month.</p>
        `;
    } else {
        document.getElementById('result').innerHTML = "<p>Please fill out all fields.</p>";
    }
}