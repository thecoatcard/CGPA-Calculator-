function createInputFields() {
    const n = parseInt(document.getElementById('subjects').value);
    const container = document.getElementById('fieldsContainer');
    container.innerHTML = '';

    for (let i = 0; i < n; i++) {
        const fieldDiv = document.createElement('div');

        const creditLabel = document.createElement('label');
        creditLabel.textContent = `Credit of Subject ${i + 1}: `;
        const creditInput = document.createElement('input');
        creditInput.type = 'number';
        creditInput.id = `credit${i + 1}`;

        const gradeLabel = document.createElement('label');
        gradeLabel.textContent = ` Grade of Subject ${i + 1} : `;
        const gradeInput = document.createElement('input');
        gradeInput.type = 'text';
        gradeInput.id = `grade${i + 1}`;

        fieldDiv.appendChild(creditLabel);
        fieldDiv.appendChild(creditInput);
        fieldDiv.appendChild(gradeLabel);
        fieldDiv.appendChild(gradeInput);
        container.appendChild(fieldDiv);
    }
}

function calculateGPA() {
    const n = parseInt(document.getElementById('subjects').value);
    let Tcredit = 0;
    let Tscore = 0;

    for (let i = 0; i < n; i++) {
        const credit = parseInt(document.getElementById(`credit${i + 1}`).value);
        const grade = document.getElementById(`grade${i + 1}`).value.toUpperCase();

        let point = 0;
        switch (grade) {
            case 'O':
                point = 10;
                break;
            case 'A+':
                point = 9;
                break;
            case 'A':
                point = 8;
                break;
            case 'B+':
                point = 7;
                break;
            case 'B':
                point = 6;
                break;
            case 'C':
                point = 5;
                break;
            case 'D':
                point = 4;
                break;
        }

        const score = credit * point;
        Tscore += score;
        Tcredit += credit;
    }

    const SGPA = Tscore / Tcredit;
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `<p>The TGPA of student is ${SGPA.toFixed(2)}</p>`;
}