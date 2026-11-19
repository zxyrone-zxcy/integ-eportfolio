// Quizzes and exams, from Teams. score: null = turned in, not graded yet.
// Term cut-offs: Prelim to Aug 28, Midterm Sep 1 to Oct 8, Final Oct 9 to Nov 12.
// The Midterm Exam (Oct 13) is dated inside the final window but is kept under Midterm because of its name.
const q = (id, date, title, score, total, topics = [], remarks = '') => ({ id, date, title, score, total, topics, remarks })
const WAIT = 'Turned in, awaiting grade'

export const quizzes = {
  prelim: [
    q('p-q1', '2026-07-25', 'JS 1 Module Quiz 1 result', 100, 100, ['JavaScript']),
    q('p-q2', '2026-07-25', 'JS 1 Module Quiz 2 result', 100, 100, ['JavaScript']),
    q('p-q3', '2026-07-31', 'JS 1 Module 3 Quiz result', null, 100, ['JavaScript'], WAIT),
    q('p-q4', '2026-07-31', 'JS 1 Module 4 Quiz result', null, 100, ['JavaScript'], WAIT),
    q('p-q5', '2026-08-08', 'JS 1 Module 5 Quiz result', 100, 100, ['JavaScript']),
    q('p-q6', '2026-08-08', 'JS 1 Module 6 Quiz result', 100, 100, ['JavaScript']),
    // Title is cut off in the Teams list; replace with the full title.
    q('p-q7', '2026-08-11', 'JavaScript Fundamentals and Control St…', 20, 20, ['JavaScript']),
    q('p-q8', '2026-08-14', 'JS 2 Module 1 to 3 Quiz Result', null, 100, ['JavaScript'], WAIT),
    q('p-q9', '2026-08-18', 'Prelim Practical Examination', 100, 100, ['Exam']),
    q('p-q10', '2026-08-28', 'Prelim Examination ITC C301 SY2026', 36, 45, ['Exam']),
  ],
  midterm: [
    q('m-q1', '2026-09-18', 'WW 2.1 PHP Quiz', 19, 20, ['PHP']),
    q('m-q2', '2026-10-02', 'Midterm Quiz 2: PHP Fundamentals', 19, 20, ['PHP']),
    q('m-q3', '2026-10-02', 'Midterm Practical Examination 2026', 100, 100, ['Exam']),
    q('m-q4', '2026-10-13', 'Midterm Exam result', 30, 70, ['Exam']),
  ],
  final: [],
}
