function calculateGrade() {
  let marks = parseInt(document.getElementById('marks').value);
  let resultElement = document.getElementById('result');
  let grade;
  let passFail;

  if (isNaN(marks) || marks < 0 || marks > 100) {
    resultElement.textContent = 'Invalid input! Please enter a number between 0 and 100.';
    return;
  }

  if (marks > 79) {
    grade = 'A';
    passFail = 'Pass';
  } else if (marks >= 60) {
    grade = 'B';
    passFail = 'Pass';
  } else if (marks >= 50) {
    grade = 'C';
    passFail = 'Pass';
  } else if (marks >= 40) {
    grade = 'D';
    passFail = 'Pass';
  } else {
    grade = 'E';
    passFail = 'Fail';
  }

  resultElement.textContent = `The student's grade is: ${grade}. Result: ${passFail}`;
}
