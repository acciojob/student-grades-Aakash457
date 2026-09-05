import { readFile } from "fs/promises";

async function calculateAverageGrades() {
  try {
    const data = await readFile("./students.json", "utf-8");
    const students = JSON.parse(data);

    students.forEach((student) => {
      const marks = student.marks || student.grades;

      const average =
        marks.reduce((sum, mark) => sum + Number(mark), 0) / marks.length;

      console.log(`${student.name}: ${average.toFixed(2)}`);
    });
  } catch (error) {
    console.error("Error reading students file:", error);
  }
}

calculateAverageGrades();

