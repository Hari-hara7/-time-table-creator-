
let timetableData = []; // Placeholder for saved timetable data

function saveTimetable() {
    // Add your save functionality here
    const subject = document.getElementById('subject').value;
    const date = document.getElementById('date').value;
    const startTime = document.getElementById('startTime').value;
    const endTime = document.getElementById('endTime').value;
    const days = Array.from(document.getElementsByName('days'))
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);

    timetableData.push({ subject, date, startTime, endTime, days });
    alert('Timetable saved!');
}

function showTimetable() {
    document.getElementById('create-timetable').style.display = 'none';
    document.getElementById('view-timetable').style.display = 'block';
    displayTimetable();
}

function displayTimetable() {
    const table = document.querySelector('#view-timetable table');
    // Clear existing rows
    table.innerHTML = '<tr><th>Subject</th><th>Date</th><th>Start Time</th><th>End Time</th><th>Days</th></tr>';
    
    // Populate table with saved timetable data
    timetableData.forEach(entry => {
        const row = table.insertRow();
        row.insertCell().textContent = entry.subject;
        row.insertCell().textContent = entry.date;
        row.insertCell().textContent = entry.startTime;
        row.insertCell().textContent = entry.endTime;
        row.insertCell().textContent = entry.days.join(', ');
    });
}

function showCreateTimetable() {
    document.getElementById('view-timetable').style.display = 'none';
    document.getElementById('create-timetable').style.display = 'block';
}
