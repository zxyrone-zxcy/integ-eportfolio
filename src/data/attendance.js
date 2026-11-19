// Attendance from Teams. present = graded 1/1, pending = turned in and awaiting grade,
// noPoints = marked "No points" (not counted either way).
export const attendance = {
  prelim: { present: 11, pending: 1, noPoints: 1 },
  midterm: { present: 8, pending: 0, noPoints: 0 },
  final: { present: 0, pending: 6, noPoints: 0 },
}

export function attendanceTotals() {
  return Object.values(attendance).reduce(
    (a, t) => ({
      present: a.present + t.present,
      pending: a.pending + t.pending,
      noPoints: a.noPoints + t.noPoints,
    }),
    { present: 0, pending: 0, noPoints: 0 },
  )
}
