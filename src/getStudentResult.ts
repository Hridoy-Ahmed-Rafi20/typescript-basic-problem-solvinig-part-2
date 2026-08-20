// TODO: define a type for a student
type Student = {
  name: string;
  marks: number[];
};

const getStudentResult = (student: Student) => {
  if (student.marks.length === 0) {
    return "Invalid!. Student's mark is empty";
  }
  // store passed/failed
  let result = "";
  //accessing student marks array
  let mark = student.marks;
  // getting total of marks array
  const getTotal = mark.reduce((acc, currentMark) => acc + currentMark, 0);
  // get average
  const avg = getTotal / mark.length;
  // calculate pass/failed condition
  if (avg >= 40) {
    result = "Passed";
  } else {
    result = "Failed";
  }

  return {
    name: student.name,
    average: avg,
    result: result,
  };
};

getStudentResult({
  name: "Rafi",
  marks: [80, 75, 90, 85],
});

getStudentResult({
  name: "Nabil",
  marks: [30, 35, 40, 25],
});

getStudentResult({
  name: "Fahima",
  marks: [],
});
