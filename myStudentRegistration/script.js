function handleFormSubmission(e) {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let email = document.getElementById('email').value;
    let course = document.getElementById('course').value;

    let student = { name, age, email, course };

    addStudent(student);
    displayStudents();
    alert('Student registered successfully!');
    
    document.getElementById('regForm').reset();
}


function addStudent(student) {
    let students = getStudents();
    students.push(student);
    localStorage.setItem('students', JSON.stringify(students));
}


function getStudents() {
    return JSON.parse(localStorage.getItem('students')) || [];
}


function displayStudents() {
    let studentTableBody = document.getElementById('STBody');
    studentTableBody.innerHTML = '';

    let students = getStudents();

    students.forEach((student, index) => {
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.email}</td>
            <td>${student.course}</td>
            <td><button onclick="deleteStudent(${index})">Delete</button></td>
        `;
        studentTableBody.appendChild(row);
    });
}


function deleteStudent(index) {
    let students = getStudents();
    students.splice(index, 1);
    localStorage.setItem('students', JSON.stringify(students));
    displayStudents();
}


document.getElementById('regForm').addEventListener('submit', handleFormSubmission);


displayStudents();
