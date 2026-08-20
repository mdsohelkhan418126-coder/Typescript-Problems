// studentResult

interface StudentResult {
    studentId: string;
    studentName: string;
    subject: string;
    marksObtained: number;
    totalMarks: number;
    grade: string;
}

interface ResultSummary {
    studentId: string;
    studentName: string;
    totalMarksObtained: number;
    totalMarks: number;
    percentage: number;
    grade: string;
}

const getStudentResultSummary = (results: StudentResult[]): ResultSummary => {
    const firstResult = results[0];
    if (!firstResult) {
        throw new Error('At least one student result is required.');
    }

    const totalMarksObtained = results.reduce((total, result) => total + result.marksObtained, 0);
    const totalMarks = results.reduce((total, result) => total + result.totalMarks, 0);
    const percentage = (totalMarksObtained / totalMarks) * 100;
    let grade: string;

    if (percentage >= 80) {
        grade = 'A';
    } else if (percentage >= 60) {
        grade = 'B';
    } else {
        grade = 'C';
    }

    return {
        studentId: firstResult.studentId,
        studentName: firstResult.studentName,
        totalMarksObtained,
        totalMarks,
        percentage,
        grade
    };
};

console.log(getStudentResultSummary([
    {
        studentId: 'S001',
        studentName: 'Alice',
        subject: 'Math',
        marksObtained: 85,
        totalMarks: 100,
        grade: 'A'
    },
    {
        studentId: 'S001',
        studentName: 'Alice',
        subject: 'Science',
        marksObtained: 75,
        totalMarks: 100,
        grade: 'B'
    }
]));