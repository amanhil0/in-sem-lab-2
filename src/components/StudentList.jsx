import React from 'react';

export default function StudentList() {
  // Sample names: replace these with your classmates' names if required.
  const students = ['Aman', 'Rahul', 'Priya'];

  return (
    <main>
      <h2>Student List</h2>
      <ul>
        {students.map((student) => (
          <li key={student}>{student}</li>
        ))}
      </ul>
    </main>
  );
}
