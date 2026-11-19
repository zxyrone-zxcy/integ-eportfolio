// Source: "100% Working System and Documentation" (Oct 20, 2026), the group's IEEE-format
// paper, and the Teams assignment list. Personal fields are marked TODO.
export const collaboration = {
  project: 'SignWise ASL',
  fullTitle:
    'SignWise: Development of an Interactive Sign Language Learning Website Using Camera-Based Hand Gesture Recognition',
  summary:
    'SignWise is a web platform that teaches basic American Sign Language through interactive lessons, ' +
    'gesture-based quizzes and real-time, camera-based hand gesture recognition. Learners practice a sign in front ' +
    'of their webcam and get instant Pass or Fail feedback with an accuracy score.',
  duration: 'Jul 24 – Nov 12, 2026',
  course: 'BSIT 301I · José Rizal University',
  demo: 'https://signwiseasl.vercel.app',
  repo: '',
  // TODO: your own role in the group, e.g. 'Front-end developer'. Hidden while empty.
  role: 'Front-end design, gesture recognition and hand-tracking UI, email (SMTP), marketing',
  team: [
    { name: 'Janjay Bugayong', role: '' },
    { name: 'Hyun Eun Kim', role: '' },
    { name: 'Jharell James Sederia', role: '' },
    { name: 'Xyrone Edmund Zamudio', role: '' },
  ],
  tech: ['Laravel', 'MediaPipe Hands', 'JavaScript', 'Dynamic time warping', 'Vercel'],
  objectives: [
    'Detect and evaluate sign language gestures in real time through a webcam.',
    'Give feedback on gesture accuracy and guide the learner toward the correct sign.',
    'Provide interactive lessons, quizzes and practice activities.',
    'Track completed lessons, quiz results and overall progress.',
    'Promote accessible sign language education (SDG 4 Quality Education, SDG 10 Reduced Inequalities).',
  ],
  features: [
    { title: 'Landing page', detail: 'Introduces SignWise with featured beginner lessons and a path to register or log in.' },
    { title: 'Registration and login', detail: 'Email verification, password reset, and clear form errors that keep the user on the page.' },
    { title: 'Lesson catalog', detail: 'Ten beginner ASL lessons (Hello, Thank you, Please, Sorry, Yes, No, Help, Good, More, Love).' },
    { title: 'Gesture recognition', detail: 'MediaPipe finds hand landmarks in the browser and compares them with recorded templates using dynamic time warping. A live accuracy meter shows Pass or Fail.' },
    { title: 'Gesture quizzes', detail: 'Learners sign each word on camera, with up to three retries per question and a score screen at the end.' },
    { title: 'Progress dashboard', detail: 'Lessons completed, pathway progress, gesture accuracy, latest quiz average, and a weekly login streak.' },
    { title: 'Admin tools', detail: 'Administrators add, edit and delete lessons. Learners who open admin pages get a 403 message.' },
    { title: 'Template recorder', detail: 'A developer page records 3 to 5 takes per sign and exports the reference gestures as JSON.' },
  ],
  workflow: [
    'Landing page: a visitor chooses to register or log in.',
    'Register or log in: details are validated and a session starts.',
    'Select a lesson from the catalog.',
    'Learn the sign from the animated demonstration and written reference.',
    'Camera setup: allow access and position the hand in frame.',
    'Gesture recognition: the system shows Pass or Fail in real time.',
    'Practice or quiz: repeat signs and get a session score.',
    'Progress tracking: results are saved to the learner’s own account, then back to lesson selection.',
    'Streak tracking: each verified login adds a check mark to the current week.',
  ],
  // Screenshots of the real site: put images in public/ and list them here.
  // e.g. { src: '/signwise-home.png', caption: 'Landing page' }
  screenshots: [],
  // Group milestones, taken from the Teams assignment list.
  milestones: [
    { id: 1, date: '2026-07-24', title: 'Final proposed project topic', detail: 'SignWise chosen as the group project. Scored 100/100.' },
    { id: 2, date: '2026-08-11', title: 'Project proposal', detail: 'Submitted the proposal. Scored 100/100.' },
    { id: 3, date: '2026-09-22', title: 'Research paper (IEEE format)', detail: 'Drafted the group’s IEEE-style paper, with updates on Sep 25.' },
    { id: 4, date: '2026-10-16', title: '50% working system', detail: 'Week 14 checkpoint. Scored 90/100.' },
    { id: 5, date: '2026-10-20', title: '100% working system and documentation', detail: 'Full system documented with screenshots and workflow diagrams.' },
    { id: 6, date: '2026-10-23', title: 'Project presentation', detail: 'Presented the finished system.' },
    { id: 7, date: '2026-10-30', title: 'Project documentation', detail: 'Week 16 documentation deliverable.' },
    { id: 8, date: '2026-11-04', title: 'Research paper presentation', detail: 'Presented the paper.' },
    { id: 9, date: '2026-11-12', title: 'Project final revision', detail: 'Final revision turned in.' },
  ],
  // TODO: what YOU built or wrote. Each entry: { id, title, detail }. Section is hidden while empty.
  contributions: [
    {
      id: 5,
      title: 'Front-end design',
      detail: 'Designed the overall front end of SignWise ASL: the visual design and page layouts that learners and administrators use, from the landing page and lesson catalog to the practice, quiz and progress screens.',
    },
    {
      id: 1,
      title: 'Gesture recognition accuracy',
      detail: 'Refined how performed signs are matched against the recorded reference gestures, so the Pass or Fail feedback and accuracy score better reflect whether the learner formed the sign correctly.',
    },
    {
      id: 2,
      title: 'Hand-skeleton tracking interface',
      detail: 'Designed and implemented the on-camera hand-skeleton overlay, which follows the learner’s hand in real time so they can see exactly what the system is tracking while they practice.',
    },
    {
      id: 3,
      title: 'SMTP email configuration',
      detail: 'Improved the SMTP setup behind the platform’s account emails, supporting the email verification and password reset flows.',
    },
    {
      id: 4,
      title: 'Marketing ads',
      detail: 'Produced the marketing ads that promote SignWise ASL to prospective learners.',
    },
  ],
  // Limitations stated in the group paper, with the recommended next step.
  challenges: [
    { problem: 'Tracking is less reliable in poor lighting or when the hand is hidden.', solution: 'No hand detected means the attempt is not scored and the learner is asked to adjust. Recommended next: lighting and distance alerts.' },
    { problem: 'Only ten signs are supported, each matched against 3 to 9 recorded templates.', solution: 'Admins can record new templates from the developer page. Continuous signing and regional variants were not evaluated.' },
    { problem: 'Recognition accuracy and response time were not measured.', solution: 'The paper claims only functional behavior and recommends measuring both on the full vocabulary.' },
  ],
  learnings: [
    'Direct feedback: real-time Pass or Fail tells learners whether a hand shape is right, which books and videos cannot.',
    'Client-side processing: running MediaPipe in the browser avoids streaming video to a server and needs only a normal webcam.',
    'Privacy: no video is recorded or stored, in line with the Data Privacy Act of 2012 (RA 10173).',
  ],
}
