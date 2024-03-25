function calculateGrade() {
  let htmlMarks = parseInt(document.getElementById('html-marks').value);
  let jsMarks = parseInt(document.getElementById('js-marks').value);
  let cssMarks = parseInt(document.getElementById('css-marks').value);
  let resultElement = document.getElementById('result');
  let averageMarks = (htmlMarks + jsMarks + cssMarks) / 3;
  let grade;
  let passFail;

  if (isNaN(averageMarks) || averageMarks < 0 || averageMarks > 100) {
    resultElement.textContent = 'Invalid input! Please enter numbers between 0 and 100 for HTML, JavaScript, and CSS marks.';
    return;
  }

  if (averageMarks > 79) {
    grade = 'A';
    passFail = 'Pass';
  } else if (averageMarks >= 60) {
    grade = 'B';
    passFail = 'Pass';
  } else if (averageMarks >= 50) {
    grade = 'C';
    passFail = 'Pass';
  } else if (averageMarks >= 40) {
    grade = 'D';
    passFail = 'Pass';
  } else {
    grade = 'E';
    passFail = 'Fail';
  }

  resultElement.innerHTML = `The student's average grade is: ${grade}. Result: ${passFail}`;
}
