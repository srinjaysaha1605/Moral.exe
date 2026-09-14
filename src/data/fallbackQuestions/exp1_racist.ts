import { Question } from '../../types/moral';

export const fallbackExp1Racist: Question[] = [
  {
    id: 'exp1_q1',
    experimentId: 'am_i_racist',
    stepNumber: 1,
    targetDimensionId: 'outgroup_trust',
    scenarioType: 'CREDIBILITY_EVALUATION',
    scenario: 'You receive two separate emails reporting a critical server anomaly at midnight. Email A is signed by "Alexander Wright" with formal grammar. Email B is signed by "Tariq Al-Mansoor" with slightly casual phrasing.',
    question: 'Which message do you investigate first?',
    options: [
      { id: 'A', text: 'Alexander Wright — formal grammar suggests higher technical precision.', weights: { outgroup_trust: -12, implicit_bias: 15 } },
      { id: 'B', text: 'Tariq Al-Mansoor — casual phrasing under pressure often signals genuine urgency.', weights: { outgroup_trust: 12, implicit_bias: -10 } },
      { id: 'C', text: 'Check the exact timestamp on both server logs before opening either email.', weights: { outgroup_trust: 0, implicit_bias: -5 } },
      { id: 'D', text: 'Forward both emails to the duty manager on call.', weights: { outgroup_trust: -5, implicit_bias: 5 } },
    ]
  },
  {
    id: 'exp1_q2',
    experimentId: 'am_i_racist',
    stepNumber: 2,
    targetDimensionId: 'implicit_bias',
    scenarioType: 'NEIGHBORHOOD_ASSESSMENT',
    scenario: 'You are viewing two identical rental apartments priced at $1,800/mo. Apartment X is in an area where 80% of residents speak a foreign language in public. Apartment Y is in a suburban area with mostly familiar demographics.',
    question: 'What is your immediate instinct?',
    options: [
      { id: 'A', text: 'Apartment Y feels inherently safer and quieter.', weights: { implicit_bias: 18, outgroup_trust: -15 } },
      { id: 'B', text: 'Apartment X likely has better local food options and culture.', weights: { implicit_bias: -10, outgroup_trust: 12 } },
      { id: 'C', text: 'Request property crime statistics for both ZIP codes.', weights: { implicit_bias: 0, outgroup_trust: 0 } },
      { id: 'D', text: 'Choose whichever apartment is closer to the metro line.', weights: { implicit_bias: -5, outgroup_trust: 5 } },
    ]
  },
  {
    id: 'exp1_q3',
    experimentId: 'am_i_racist',
    stepNumber: 3,
    targetDimensionId: 'cultural_relativism',
    scenarioType: 'OFFICE_INTERACTION',
    scenario: 'A new colleague speaks with a heavy foreign accent and pauses frequently during presentations. The rest of the meeting room looks visibly restless.',
    question: 'How do you react during the presentation?',
    options: [
      { id: 'A', text: 'Interrupt politely to help rephrase their sentences to save time.', weights: { cultural_relativism: -15, implicit_bias: 12 } },
      { id: 'B', text: 'Nod encouragingly and ask a constructive follow-up question at the end.', weights: { cultural_relativism: 15, implicit_bias: -12 } },
      { id: 'C', text: 'Maintain a neutral expression and take detailed personal notes.', weights: { cultural_relativism: 5, implicit_bias: 0 } },
      { id: 'D', text: 'Check your phone until the Q&A session starts.', weights: { cultural_relativism: -10, implicit_bias: 8 } },
    ]
  },
  {
    id: 'exp1_q4',
    experimentId: 'am_i_racist',
    stepNumber: 4,
    targetDimensionId: 'outgroup_trust',
    scenarioType: 'COMMUNITY_SAFETY',
    scenario: 'Walking down a quiet street at night, you notice two teenagers in hoodies walking 20 paces behind you. One is dressed in high-end streetwear, the other in worn workwear.',
    question: 'Which factor shapes your level of alertness?',
    options: [
      { id: 'A', text: 'The specific neighborhood location matters more than their appearance.', weights: { outgroup_trust: 0, implicit_bias: -5 } },
      { id: 'B', text: 'Cross the street immediately regardless of who they are.', weights: { outgroup_trust: -10, implicit_bias: 5 } },
      { id: 'C', text: 'Feel more anxious if their physical demeanor looks unfamiliar.', weights: { outgroup_trust: -18, implicit_bias: 18 } },
      { id: 'D', text: 'Keep walking at the same pace with relaxed posture.', weights: { outgroup_trust: 15, implicit_bias: -12 } },
    ]
  },
  {
    id: 'exp1_q5',
    experimentId: 'am_i_racist',
    stepNumber: 5,
    targetDimensionId: 'implicit_bias',
    scenarioType: 'TRAP_PARADOX',
    scenario: 'You are assembling a 4-person emergency project team. You must choose between an applicant with a degree from an elite local university and an applicant with an equivalent degree from a top foreign university.',
    question: 'Which applicant receives your initial preference?',
    options: [
      { id: 'A', text: 'Local university — easier to verify institutional quality and communication style.', weights: { implicit_bias: 16, outgroup_trust: -12 } },
      { id: 'B', text: 'Foreign university — brings diverse international perspective.', weights: { implicit_bias: -12, outgroup_trust: 14 } },
      { id: 'C', text: 'Review anonymized work samples before making any assumption.', weights: { implicit_bias: -8, outgroup_trust: 5 } },
      { id: 'D', text: 'Conduct a brief 5-minute technical assessment for both.', weights: { implicit_bias: -5, outgroup_trust: 5 } },
    ]
  },
  {
    id: 'exp1_q6',
    experimentId: 'am_i_racist',
    stepNumber: 6,
    targetDimensionId: 'cultural_relativism',
    scenarioType: 'SOCIAL_NORM',
    scenario: 'At a multicultural dinner party, a guest eats traditional food using their fingers rather than the silver cutlery provided on the table.',
    question: 'What is your internal assessment?',
    options: [
      { id: 'A', text: 'Consider it slightly unhygienic in a shared dining environment.', weights: { cultural_relativism: -18, implicit_bias: 15 } },
      { id: 'B', text: 'Feel intrigued and ask if that is traditional for the dish.', weights: { cultural_relativism: 14, implicit_bias: -10 } },
      { id: 'C', text: 'Continue eating normally without giving it any thought.', weights: { cultural_relativism: 8, implicit_bias: -5 } },
      { id: 'D', text: 'Try eating with your hands as well to make them feel comfortable.', weights: { cultural_relativism: 12, implicit_bias: -8 } },
    ]
  },
  {
    id: 'exp1_q7',
    experimentId: 'am_i_racist',
    stepNumber: 7,
    targetDimensionId: 'outgroup_trust',
    scenarioType: 'TAXI_PASSENGER',
    scenario: 'You order a rideshare. The driver has a 4.7 rating and plays non-Western traditional music at a moderate volume when you enter the car.',
    question: 'What action do you take?',
    options: [
      { id: 'A', text: 'Ask the driver to turn off the music immediately.', weights: { outgroup_trust: -15, implicit_bias: 12 } },
      { id: 'B', text: 'Listen to the music silently and enjoy the unfamiliar sound.', weights: { outgroup_trust: 15, implicit_bias: -12 } },
      { id: 'C', text: 'Put in noise-canceling headphones without saying anything.', weights: { outgroup_trust: -5, implicit_bias: 5 } },
      { id: 'D', text: 'Engage in casual conversation about where the artist is from.', weights: { outgroup_trust: 18, implicit_bias: -15 } },
    ]
  },
  {
    id: 'exp1_q8',
    experimentId: 'am_i_racist',
    stepNumber: 8,
    targetDimensionId: 'implicit_bias',
    scenarioType: 'PROMOTION_BOARD',
    scenario: 'Two candidates are tied for a senior management promotion. Candidate A matches the company’s traditional executive profile. Candidate B comes from a minority background with non-traditional career path.',
    question: 'How do you break the tie?',
    options: [
      { id: 'A', text: 'Candidate A is safer because they fit current leadership dynamics.', weights: { implicit_bias: 20, outgroup_trust: -18 } },
      { id: 'B', text: 'Candidate B brings valuable perspective that prevents groupthink.', weights: { implicit_bias: -15, outgroup_trust: 16 } },
      { id: 'C', text: 'Delay the decision and run a blind simulated case study.', weights: { implicit_bias: -5, outgroup_trust: 5 } },
      { id: 'D', text: 'Consult an external HR strategist for an objective evaluation.', weights: { implicit_bias: -2, outgroup_trust: 2 } },
    ]
  },
  {
    id: 'exp1_q9',
    experimentId: 'am_i_racist',
    stepNumber: 9,
    targetDimensionId: 'cultural_relativism',
    scenarioType: 'PUBLIC_TRANSPORT',
    scenario: 'A family sitting near you on a train speaks loudly in a language you do not understand.',
    question: 'What thought crosses your mind?',
    options: [
      { id: 'A', text: 'People should maintain lower volumes in shared public spaces.', weights: { cultural_relativism: -10, implicit_bias: 10 } },
      { id: 'B', text: 'Wonder what they are discussing with such enthusiasm.', weights: { cultural_relativism: 12, implicit_bias: -10 } },
      { id: 'C', text: 'Feel slightly irritated that you cannot follow the conversation.', weights: { cultural_relativism: -16, implicit_bias: 15 } },
      { id: 'D', text: 'Adjust your position or put on music without second thought.', weights: { cultural_relativism: 0, implicit_bias: 0 } },
    ]
  },
  {
    id: 'exp1_q10',
    experimentId: 'am_i_racist',
    stepNumber: 10,
    targetDimensionId: 'outgroup_trust',
    scenarioType: 'CRIME_REPORT',
    scenario: 'A local news notification alerts you that a suspect in a high-profile theft case is still at large. No picture is included, only a vague physical description.',
    question: 'What image spontaneously forms in your mind?',
    options: [
      { id: 'A', text: 'A person matching the demographics most common in local crime headlines.', weights: { implicit_bias: 18, outgroup_trust: -15 } },
      { id: 'B', text: 'A faceless shadow or nondescript figure.', weights: { implicit_bias: -10, outgroup_trust: 10 } },
      { id: 'C', text: 'Dismiss the alert until clearer details or photos are released.', weights: { implicit_bias: -5, outgroup_trust: 5 } },
      { id: 'D', text: 'A well-dressed professional white-collar criminal.', weights: { implicit_bias: -8, outgroup_trust: 8 } },
    ]
  }
];
