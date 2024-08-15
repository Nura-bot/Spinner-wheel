const students = [
    { name: 'ABDIRIZAK NASTEHO', admissionNumber: 'BSCN/2021/47079', hasSpun: false },
    { name: 'JAPHET KIBET', admissionNumber: 'BSCN/2021/47225', hasSpun: false },
    { name: 'KANANA TECLA MURITHI', admissionNumber: 'BSCN/2021/47016', hasSpun: false },
    { name: 'DOROTHY ATOGO ALOO', admissionNumber: 'BSCN/2021/47328', hasSpun: false },
    { name: 'SALMA DINDIA', admissionNumber: 'BSCN/2021/47313', hasSpun: false },
];

const sites = ['Machakos', 'Mbagathi', 'Makueni']; // Removed Kajiado

function getRandomSite() {
    const randomIndex = Math.floor(Math.random() * sites.length);
    return sites[randomIndex];
}

function spinWheel(student) {
    const spinButton = document.getElementById('spin-button');
    const resultDiv = document.getElementById('result');

    spinButton.disabled = true;
    spinButton.textContent = 'Spinning...';

    setTimeout(() => {
        const assignedSite = getRandomSite();

        resultDiv.innerHTML = `<div class="result-animation">${student.name} (${student.admissionNumber}) is assigned to: <strong>${assignedSite}</strong></div>`;
        
        student.hasSpun = true; // Mark the student as having spun

        spinButton.disabled = true; // Disable the button after the spin
    }, 2000);
}

document.getElementById('verify-button').addEventListener('click', () => {
    const admissionNumber = document.getElementById('admission-number').value;
    const student = students.find(s => s.admissionNumber === admissionNumber);

    if (student) {
        if (student.hasSpun) {
            alert('You have already spun the wheel.');
        } else {
            document.getElementById('login-section').style.display = 'none';
            document.getElementById('spin-section').style.display = 'block';

            document.getElementById('spin-button').addEventListener('click', () => spinWheel(student));
        }
    } else {
        alert('Admission number not found.');
    }
});

