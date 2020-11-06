const students = [
    { name: 'Thomas', mark: 57 },
    { name: 'Njabulo', mark: 92 },
    { name: 'Peter', mark: 85 },
    { name: 'James', mark: 45 },
  { name: 'Frank', mark: 60 },
    {name : 'Jordan', mark: 77}
]

// Displaying all the students names
const displayStudentNames = (students) => {
  for (let i = 0; i < students.length; i++){
    return  students[i].name
  }

}
// console.log(displayStudentNames(students))

// The average for the students marks

const studentsAverage = (students) => {
  let total = 0;
  for (let i = 0; i < students.length; i++){
    total += students[i].mark;
  }
  let currentTotal = total / (students.length * 100);
  let average = currentTotal * 100;
  return Math.floor(average);

  }
// console.log(studentAverage(students))

// The student with the highest marks in array
const getTopAchiever = (students) => {
  let topStudent = { mark:0};
  for (let i = 0; i < students.length; i++){
    if (topStudent.mark< students[i].mark) {
      
       topStudent= students[i].mark
    }
  }
  return topStudent
  
}
// console.log(getTopAchiever(students))

// find the top two achievers
const getTopTwoAchiever = (students) => {
  let topTwoStudent = [];
  topTwoStudent.push(students.sort((a, b) => b.mark - a.mark)[0])
  topTwoStudent.push(students.sort((a,b)=> b.mark - a.mark)[1])
  return topTwoStudent
}
// find students above average

const studentsAboveAverage = (students) => {
  let studentsAbove = [];
  for (let i = 0; i < students.length; i++){
    if (students[i].mark > studentsAverage(students)) {
      studentsAbove.push(students[i])
    }
  }
  return studentsAbove
}
console.log(studentsAboveAverage(students))