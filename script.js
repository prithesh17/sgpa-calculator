const subjects = [
    { name: '21XX61', credit: 3 },
    { name: '21XX62', credit: 4 },
    { name: '21XX63', credit: 3 },
    { name: '21XX64x', credit: 3 },
    { name: '21XX65x', credit: 3 },
    { name: '21XXL66', credit: 1 }, 
    { name: 'Mini Project', credit: 2 },
    { name: '21INT68', credit: 3 }
];



function initializeInputs() {
    const inputsContainer = document.getElementById('inputsContainer');
    subjects.forEach((subject, index) => {
        const inputGroup = document.createElement('div');
        inputGroup.className = 'inputGroup';

        inputGroup.innerHTML = `
            <label for="marks${index}">Marks:</label>
            <input type="number" id="marks${index}" placeholder="${subject.name}" required>
            <span>Credit: ${subject.credit}</span>
        `;

        inputsContainer.appendChild(inputGroup);
    });
}

function calculateSGPA(event) {
    event.preventDefault();

    let totCredit = 0;
    let totScore = 0;

    subjects.forEach((subject, index) => {
        const obtainedMarks = parseInt(document.getElementById(`marks${index}`).value);
        const credit = subject.credit;

        totCredit += credit;

        let gradePoints;
        if (obtainedMarks < 100) {
            gradePoints = Math.floor(obtainedMarks / 10) + 1;
        } else {
            gradePoints = 10;
        }

        totScore += gradePoints * credit;
    });

    const sgpa = (totScore / totCredit).toFixed(2);
    document.getElementById('result').textContent = `Your Semester Grade Point Average is ${sgpa}`;
}

initializeInputs();

document.getElementById('sgpaForm').addEventListener('submit', calculateSGPA);
