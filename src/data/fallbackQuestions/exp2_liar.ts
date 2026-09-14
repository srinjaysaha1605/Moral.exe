import { Question } from '../../types/moral';

export const fallbackExp2Liar: Question[] = [
  {
    id: 'exp2_q1',
    experimentId: 'are_you_a_liar',
    stepNumber: 1,
    targetDimensionId: 'deception_index',
    scenarioType: 'TACTICAL_TRUTH',
    scenario: 'A friend serves you a home-cooked dish that took them 4 hours to make. It tastes distinctly burnt and unpalatable.',
    question: 'When they eagerly ask how it is, what do you say?',
    options: [
      { id: 'A', text: 'Praise the effort and say it tastes fantastic.', weights: { deception_index: 15, tactical_honesty: -12 } },
      { id: 'B', text: 'Mention the flavor profile is interesting but point out the smoky char.', weights: { deception_index: -10, tactical_honesty: 12 } },
      { id: 'C', text: 'Focus exclusively on thanking them for their warmth and hospitality.', weights: { deception_index: 5, tactical_honesty: 0 } },
      { id: 'D', text: 'Politely say you are full after a couple of bites.', weights: { deception_index: 10, tactical_honesty: -5 } },
    ]
  },
  {
    id: 'exp2_q2',
    experimentId: 'are_you_a_liar',
    stepNumber: 2,
    targetDimensionId: 'self_justification',
    scenarioType: 'CV_INFLATION',
    scenario: 'You are applying for your dream job. The application asks if you have "advanced proficiency" in a software tool you have only used twice.',
    question: 'How do you fill out the requirement?',
    options: [
      { id: 'A', text: 'Check "Advanced" and plan to cram tutorials the weekend before starting.', weights: { deception_index: 18, self_justification: 16 } },
      { id: 'B', text: 'Check "Intermediate" to balance enthusiasm with reality.', weights: { deception_index: 8, self_justification: 5 } },
      { id: 'C', text: 'Check "Beginner" and attach a note offering to complete training.', weights: { deception_index: -15, self_justification: -12 } },
      { id: 'D', text: 'Leave it blank and address it directly in the interview.', weights: { deception_index: -12, self_justification: -10 } },
    ]
  },
  {
    id: 'exp2_q3',
    experimentId: 'are_you_a_liar',
    stepNumber: 3,
    targetDimensionId: 'tactical_honesty',
    scenarioType: 'ACCIDENTAL_DAMAGE',
    scenario: 'You accidentally scratch a parked car’s bumper while reversing in a crowded lot. No cameras or witnesses are visible.',
    question: 'What is your immediate course of action?',
    options: [
      { id: 'A', text: 'Write your phone number and insurance details on a paper note.', weights: { deception_index: -20, tactical_honesty: 20 } },
      { id: 'B', text: 'Inspect the scratch — if minor, drive away quietly.', weights: { deception_index: 18, self_justification: 15 } },
      { id: 'C', text: 'Wait 5 minutes near the car to see if the owner returns.', weights: { deception_index: -10, tactical_honesty: 12 } },
      { id: 'D', text: 'Take photos of both cars and report it to your insurance app later.', weights: { deception_index: -5, tactical_honesty: 8 } },
    ]
  },
  {
    id: 'exp2_q4',
    experimentId: 'are_you_a_liar',
    stepNumber: 4,
    targetDimensionId: 'deception_index',
    scenarioType: 'LATE_ARRIVAL',
    scenario: 'You overslept by an hour and missed a mandatory morning client conference call.',
    question: 'What reason do you give your team manager?',
    options: [
      { id: 'A', text: 'Blame an unexpected sudden internet outage or laptop update crash.', weights: { deception_index: 16, self_justification: 12 } },
      { id: 'B', text: 'Admit directly that your alarm failed and take full responsibility.', weights: { deception_index: -18, tactical_honesty: 18 } },
      { id: 'C', text: 'Apologize profusely for the delay without giving specific details.', weights: { deception_index: -2, tactical_honesty: 5 } },
      { id: 'D', text: 'Say you were handling an urgent personal family emergency.', weights: { deception_index: 20, self_justification: 18 } },
    ]
  },
  {
    id: 'exp2_q5',
    experimentId: 'are_you_a_liar',
    stepNumber: 5,
    targetDimensionId: 'self_justification',
    scenarioType: 'TRAP_PARADOX',
    scenario: 'You bought a sweater online, wore it to an event, and kept the tag hidden. The next day you notice a no-questions-asked return policy.',
    question: 'Do you return the sweater for a full refund?',
    options: [
      { id: 'A', text: 'Return it — the store policy explicitly allows returns within 30 days.', weights: { deception_index: 14, self_justification: 18 } },
      { id: 'B', text: 'Keep it — using an item and returning it feels dishonest.', weights: { deception_index: -16, self_justification: -15 } },
      { id: 'C', text: 'Gift it to a friend or sell it on a second-hand app.', weights: { deception_index: -5, self_justification: 0 } },
      { id: 'D', text: 'Return it only if you desperately need the cash back.', weights: { deception_index: 10, self_justification: 10 } },
    ]
  },
  {
    id: 'exp2_q6',
    experimentId: 'are_you_a_liar',
    stepNumber: 6,
    targetDimensionId: 'deception_index',
    scenarioType: 'GOSSIP_CONFIRMATION',
    scenario: 'A colleague asks if you know why a mutual teammate was abruptly fired. You know the exact confidential reason.',
    question: 'How do you respond?',
    options: [
      { id: 'A', text: 'Claim total ignorance ("I have no idea what happened").', weights: { deception_index: 12, tactical_honesty: -10 } },
      { id: 'B', text: 'Say "I know the reason, but I am under strict confidentiality."', weights: { deception_index: -15, tactical_honesty: 16 } },
      { id: 'C', text: 'Share vague hints without revealing explicit details.', weights: { deception_index: 10, tactical_honesty: -5 } },
      { id: 'D', text: 'Change the topic immediately to an upcoming project deadline.', weights: { deception_index: 2, tactical_honesty: 5 } },
    ]
  },
  {
    id: 'exp2_q7',
    experimentId: 'are_you_a_liar',
    stepNumber: 7,
    targetDimensionId: 'tactical_honesty',
    scenarioType: 'EXCESS_CHANGE',
    scenario: 'A busy cashier at a café hands you a $20 bill instead of a $5 bill in change.',
    question: 'What do you do as you walk away?',
    options: [
      { id: 'A', text: 'Immediately return the extra $15 to the cashier.', weights: { deception_index: -20, tactical_honesty: 20 } },
      { id: 'B', text: 'Put it in the tip jar on the counter.', weights: { deception_index: -10, tactical_honesty: 10 } },
      { id: 'C', text: 'Keep it — consider it a lucky break or mistake on their end.', weights: { deception_index: 18, self_justification: 16 } },
      { id: 'D', text: 'Only return it if you notice before stepping out the front door.', weights: { deception_index: 5, self_justification: 5 } },
    ]
  },
  {
    id: 'exp2_q8',
    experimentId: 'are_you_a_liar',
    stepNumber: 8,
    targetDimensionId: 'self_justification',
    scenarioType: 'SECRET_KEEPING',
    scenario: 'You accidentally discover that your partner’s sibling is cheating on their fiancé.',
    question: 'When asked by your partner if everything is okay, what do you do?',
    options: [
      { id: 'A', text: 'Tell your partner the truth immediately.', weights: { deception_index: -15, tactical_honesty: 18 } },
      { id: 'B', text: 'Confront the sibling first and give them 24 hours to confess.', weights: { deception_index: -5, tactical_honesty: 10 } },
      { id: 'C', text: 'Pretend you know nothing to avoid destroying family stability.', weights: { deception_index: 16, self_justification: 15 } },
      { id: 'D', text: 'Send an anonymous message to the fiancé.', weights: { deception_index: 8, self_justification: 8 } },
    ]
  },
  {
    id: 'exp2_q9',
    experimentId: 'are_you_a_liar',
    stepNumber: 9,
    targetDimensionId: 'deception_index',
    scenarioType: 'PERFORMANCE_REVIEW',
    scenario: 'In a self-assessment evaluation, you are asked to rate your personal contribution to a group project where others did 70% of the work.',
    question: 'How do you present your contribution?',
    options: [
      { id: 'A', text: 'Claim equal 33% credit since it was a team effort.', weights: { deception_index: 15, self_justification: 14 } },
      { id: 'B', text: 'Explicitly credit the main contributors and detail your smaller role.', weights: { deception_index: -18, tactical_honesty: 18 } },
      { id: 'C', text: 'Highlight specific small tasks you mastered to make them sound vital.', weights: { deception_index: 10, self_justification: 8 } },
      { id: 'D', text: 'Suggest the manager evaluate the final deliverable rather than individual split.', weights: { deception_index: 0, tactical_honesty: 0 } },
    ]
  },
  {
    id: 'exp2_q10',
    experimentId: 'are_you_a_liar',
    stepNumber: 10,
    targetDimensionId: 'tactical_honesty',
    scenarioType: 'FINAL_TRANSPARENCY',
    scenario: 'How many small, harmless lies (e.g., "I\'m on my way", "I loved your presentation") do you estimate you tell in a typical week?',
    question: 'Which bracket aligns closest to your behavior?',
    options: [
      { id: 'A', text: '0 to 2 — I take extreme care to stay completely literal.', weights: { deception_index: -15, tactical_honesty: 15 } },
      { id: 'B', text: '3 to 7 — Social lubricants are necessary to protect feelings.', weights: { deception_index: 5, tactical_honesty: 0 } },
      { id: 'C', text: '8 to 15 — Strategic communication smooths out daily frictions.', weights: { deception_index: 14, self_justification: 10 } },
      { id: 'D', text: 'I don\'t count them — honesty is contextual, not absolute.', weights: { deception_index: 18, self_justification: 16 } },
    ]
  }
];
