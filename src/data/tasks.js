// Performance tasks, activities, certificates and project deliverables, from Teams.
// score: null = turned in, not graded yet. Add description / link / reflection to any entry.
// Term cut-offs: Prelim to Aug 28, Midterm Sep 1 to Oct 8, Final Oct 9 to Nov 12.
const t = (id, date, title, score, total, tech = [], remarks = '') => ({
  id, date, title, score, total, tech, remarks, description: '', link: '', reflection: '',
})
const WAIT = 'Turned in, awaiting grade'
const TEACHER = 'Turned in by teacher, awaiting grade'

export const tasks = {
  prelim: [
    // Titles ending in … are cut off in the Teams list; replace with the full title.
    t('p-t1', '2026-07-18', 'CLO P1-1 Project Topic Conceptualization (Individual)', 90, 100, ['Project']),
    t('p-t2', '2026-07-18', 'Project Groupings', null, 100, ['Project'], WAIT),
    t('p-t3', '2026-07-21', 'JS 1 Module', 1, 1, ['JavaScript']),
    t('p-t4', '2026-07-24', 'Final Proposed Project Topic', 100, 100, ['Project']),
    t('p-t5', '2026-07-28', 'CL03-P1: Machine Problem 3.1', 100, 100, ['JavaScript']),
    t('p-t6', '2026-07-28', 'PT ReactJS Installation', 10, 10, ['ReactJS']),
    t('p-t7', '2026-07-31', 'PT ReactJS Creating Pages', 100, 100, ['ReactJS']),
    t('p-t8', '2026-08-04', 'Week 4 Exercise/ Homework', 100, 100, ['JavaScript']),
    t('p-t9', '2026-08-07', 'Week 4 Exercise: JS Form Handlers', 20, 20, ['JavaScript']),
    t('p-t10', '2026-08-11', 'Project proposal', 100, 100, ['Project']),
    t('p-t11', '2026-08-14', 'PT ReactJS Auth', 100, 100, ['ReactJS']),
    t('p-t12', '2026-08-15', 'CLOP1.1 JS 1 Certificate', 100, 100, ['JavaScript', 'Certificate']),
    t('p-t13', '2026-08-21', 'CLOP1.2 JS 2 Certificate', 100, 100, ['JavaScript', 'Certificate']),
    t('p-t14', '2026-08-28', 'Week 7 Activity task ReactJS Transaction', null, 100, ['ReactJS'], WAIT),
  ],
  midterm: [
    t('m-t1', '2026-09-01', 'Midterm PT Laravel Installation', 100, 100, ['Laravel']),
    t('m-t2', '2026-09-01', 'Lab Activity: PHP and HTML Forms Integration', 100, 100, ['PHP', 'HTML']),
    t('m-t3', '2026-09-04', 'Week 8 Activity PT Laravel pages and routes', 100, 100, ['Laravel']),
    t('m-t4', '2026-09-04', 'Week 8 Activity PT Laravel Built in Authentication', 100, 100, ['Laravel']),
    t('m-t5', '2026-09-08', 'Week 9 Activity Task', 100, 100, ['PHP']),
    t('m-t6', '2026-09-11', 'Week 9 PT Database Manipulation', 100, 100, ['PHP', 'Database']),
    t('m-t7', '2026-09-18', 'Week 10 PT PHP Operators and Conditions', 100, 100, ['PHP']),
    t('m-t8', '2026-09-18', 'Week 10 PT Lab Activity', 100, 100, ['PHP']),
    t('m-t9', '2026-09-22', 'Week 11 Activity PT Laravel CRUD', 100, 100, ['Laravel']),
    t('m-t10', '2026-09-22', 'Week 11 P3 Research IEEE output', null, 100, ['Research'], TEACHER),
    t('m-t11', '2026-09-25', 'Week 11 P: Research Paper Updates', null, 100, ['Research'], TEACHER),
  ],
  final: [
    t('f-t6', '2026-10-09', 'Week 13 Activity PT Laravel Reports', null, 100, ['Laravel'], WAIT),
    t('f-t7', '2026-10-16', 'Week 14 PT 50% working system with documentation', 90, 100, ['Project']),
    t('f-t1', '2026-10-21', 'Week 15 PT 100% working system with documentation', null, 100, ['Project'], WAIT),
    t('f-t2', '2026-10-23', 'Project presentation', null, 100, ['Project'], TEACHER),
    t('f-t3', '2026-10-30', 'Week 16 PT Project Documentation', null, 100, ['Project'], TEACHER),
    t('f-t4', '2026-11-04', 'Research paper presentation', null, 100, ['Research'], TEACHER),
    t('f-t5', '2026-11-12', 'Project Final Revision', null, 100, ['Project'], WAIT),
  ],
}
