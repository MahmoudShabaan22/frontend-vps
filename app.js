async function fetchData() {
    const container = document.getElementById('data-container');
    container.innerHTML = '<p>Loading...</p>';

    try {
        // ملاحظة هامة جداً: نستخدم المسار النسبي /api/data وليس عنوان الـ Backend المباشر
        const response = await fetch('/api/data');
        const data = await response.json();
        
        container.innerHTML = `
            <h3>API Response:</h3>
            <p><strong>Message:</strong> ${data.message}</p>
            <p><strong>Time:</strong> ${data.timestamp}</p>
            <p><strong>Fact:</strong> ${data.devops_fact}</p>
        `;
    } catch (error) {
        container.innerHTML = `<p style="color: red;">Error fetching data: ${error.message}</p>`;
    }
}