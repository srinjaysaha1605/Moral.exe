import { Question } from '../../types/moral';

export const fallbackExp7Empathy: Question[] = [
  {
    id: 'exp7_q1',
    experimentId: 'how_empathetic_are_you',
    stepNumber: 1,
    targetDimensionId: 'perspective_taking',
    scenarioType: 'DISGRUNTLED_CUSTOMER',
    scenario: 'An angry customer yells at a retail associate over a non-refundable receipt error.',
    question: 'Where is your primary emotional focus?',
    options: [
      { id: 'A', text: 'On the associate — experiencing distress at seeing them publicly humiliated.', weights: { perspective_taking: 18, affective_mirroring: 16 } },
      { id: 'B', text: 'On the customer — trying to understand what frustrating day led to their outburst.', weights: { perspective_taking: 15, emotional_distance: -12 } },
      { id: 'C', text: 'On the disruption to the peaceful atmosphere of the store.', weights: { emotional_distance: 18, affective_mirroring: -15 } },
      { id: 'D', text: 'On whether manager intervention will speed up the checkout line.', weights: { emotional_distance: 15, perspective_taking: -12 } },
    ]
  },
  {
    id: 'exp7_q2',
    experimentId: 'how_empathetic_are_you',
    stepNumber: 2,
    targetDimensionId: 'affective_mirroring',
    scenarioType: 'MOVIE_REACTION',
    scenario: 'When watching a film where a fictional character undergoes intense tragic grief or emotional pain...',
    question: 'What physical/emotional sensation do you experience?',
    options: [
      { id: 'A', text: 'Visceral tears, lump in the throat, or tight chest sensations.', weights: { affective_mirroring: 20, emotional_distance: -20 } },
      { id: 'B', text: 'Intellectual appreciation of the acting without feeling personal sadness.', weights: { emotional_distance: 18, affective_mirroring: -18 } },
      { id: 'C', text: 'Slight melancholy that fades as soon as the credits roll.', weights: { perspective_taking: 8, emotional_distance: 5 } },
      { id: 'D', text: 'I actively avoid watching overly emotional or tragic cinema.', weights: { emotional_distance: 12, affective_mirroring: -10 } },
    ]
  },
  {
    id: 'exp7_q3',
    experimentId: 'how_empathetic_are_you',
    stepNumber: 3,
    targetDimensionId: 'emotional_distance',
    scenarioType: 'STRANGER_DISTRESS',
    scenario: 'You see someone crying quietly by themselves on a park bench.',
    question: 'What do you do?',
    options: [
      { id: 'A', text: 'Approach politely and ask "Are you okay? Do you need anything?"', weights: { perspective_taking: 18, affective_mirroring: 15 } },
      { id: 'B', text: 'Give them privacy and keep walking without interrupting.', weights: { emotional_distance: 12, perspective_taking: 0 } },
      { id: 'C', text: 'Leave a bottle of water or tissue box on the bench near them.', weights: { perspective_taking: 15, emotional_distance: 5 } },
      { id: 'D', text: 'Feel uncomfortable and walk by faster.', weights: { emotional_distance: 16, affective_mirroring: -10 } },
    ]
  },
  {
    id: 'exp7_q4',
    experimentId: 'how_empathetic_are_you',
    stepNumber: 4,
    targetDimensionId: 'perspective_taking',
    scenarioType: 'POLITICAL_OPPONENT',
    scenario: 'You listen to someone express political or social views that directly oppose your core values.',
    question: 'How easily can you articulate their reasoning from their point of view?',
    options: [
      { id: 'A', text: 'Very easily — I can understand the fears or logic driving their stance.', weights: { perspective_taking: 20, emotional_distance: 5 } },
      { id: 'B', text: 'With great difficulty — their logic feels fundamentally flawed or harmful.', weights: { perspective_taking: -18, affective_mirroring: 10 } },
      { id: 'C', text: 'I don\'t try to — I focus on pointing out factual errors.', weights: { emotional_distance: 15, perspective_taking: -15 } },
      { id: 'D', text: 'I tune out as soon as I hear opposing rhetoric.', weights: { perspective_taking: -15, emotional_distance: 12 } },
    ]
  },
  {
    id: 'exp7_q5',
    experimentId: 'how_empathetic_are_you',
    stepNumber: 5,
    targetDimensionId: 'affective_mirroring',
    scenarioType: 'TRAP_PARADOX',
    scenario: 'A friend calls you at 2:00 AM crying over a breakup for the 4th time this month, ruining your sleep before an important work day.',
    question: 'How do you respond?',
    options: [
      { id: 'A', text: 'Listen patiently for 45 minutes, absorbing their pain as if it were your own.', weights: { affective_mirroring: 20, emotional_distance: -18 } },
      { id: 'B', text: 'Comfort them for 5 minutes, then set a firm boundary to go back to sleep.', weights: { perspective_taking: 12, emotional_distance: 15 } },
      { id: 'C', text: 'Feel quiet resentment for their lack of boundary awareness.', weights: { emotional_distance: 18, affective_mirroring: -12 } },
      { id: 'D', text: 'Mute the phone and text an apology in the morning.', weights: { emotional_distance: 20, affective_mirroring: -20 } },
    ]
  },
  {
    id: 'exp7_q6',
    experimentId: 'how_empathetic_are_you',
    stepNumber: 6,
    targetDimensionId: 'perspective_taking',
    scenarioType: 'CORRECTION_FEELINGS',
    scenario: 'You need to deliver severe performance feedback to a well-meaning but incompetent junior team member.',
    question: 'How do you structure the conversation?',
    options: [
      { id: 'A', text: 'Deliver the facts neutrally and directly to avoid prolonging anxiety.', weights: { emotional_distance: 18, perspective_taking: -10 } },
      { id: 'B', text: 'Softly cushion every critique with genuine praise and offer hands-on coaching.', weights: { perspective_taking: 18, affective_mirroring: 15 } },
      { id: 'C', text: 'Have HR handle the conversation to keep it objective.', weights: { emotional_distance: 20, perspective_taking: -15 } },
      { id: 'D', text: 'Feel sick to your stomach for hours before the meeting.', weights: { affective_mirroring: 18, emotional_distance: -18 } },
    ]
  },
  {
    id: 'exp7_q7',
    experimentId: 'how_empathetic_are_you',
    stepNumber: 7,
    targetDimensionId: 'emotional_distance',
    scenarioType: 'CHARITY_DONATION',
    scenario: 'You pass a homeless person holding a sign requesting food or spare change on a freezing cold day.',
    question: 'What is your internal experience?',
    options: [
      { id: 'A', text: 'Intense sadness and guilt about inequality, prompting immediate help.', weights: { affective_mirroring: 18, perspective_taking: 15 } },
      { id: 'B', text: 'A brief moment of pity before mentally returning to your routine.', weights: { emotional_distance: 12, affective_mirroring: -10 } },
      { id: 'C', text: 'Questions about institutional failures and homeless shelter capacity.', weights: { perspective_taking: 10, emotional_distance: 8 } },
      { id: 'D', text: 'Avoiding eye contact to prevent awkward interaction.', weights: { emotional_distance: 18, affective_mirroring: -15 } },
    ]
  },
  {
    id: 'exp7_q8',
    experimentId: 'how_empathetic_are_you',
    stepNumber: 8,
    targetDimensionId: 'affective_mirroring',
    scenarioType: 'VICTORY_JOY',
    scenario: 'A friend or family member wins a major award or competition that you personally competed in and lost.',
    question: 'How do you feel during their victory celebration?',
    options: [
      { id: 'A', text: 'Overjoyed for them — their happiness genuinely lifts your mood.', weights: { affective_mirroring: 18, perspective_taking: 16 } },
      { id: 'B', text: 'Happy for them on the surface, but privately feeling bitter or envious.', weights: { emotional_distance: 10, affective_mirroring: -10 } },
      { id: 'C', text: 'Analyze what specific moves gave them the winning edge over you.', weights: { perspective_taking: 5, emotional_distance: 12 } },
      { id: 'D', text: 'Congratulate them warmly and excuse yourself early.', weights: { perspective_taking: 10, emotional_distance: 8 } },
    ]
  },
  {
    id: 'exp7_q9',
    experimentId: 'how_empathetic_are_you',
    stepNumber: 9,
    targetDimensionId: 'perspective_taking',
    scenarioType: 'ANIMALS_NATURE',
    scenario: 'How do you feel when you see a stray animal caught in heavy rain?',
    question: 'Select your immediate reaction:',
    options: [
      { id: 'A', text: 'Heartbroken — I feel an urgent physical push to rescue or shelter them.', weights: { affective_mirroring: 20, perspective_taking: 18 } },
      { id: 'B', text: 'Hopeful that someone with proper animal control tools finds them.', weights: { emotional_distance: 12, perspective_taking: 0 } },
      { id: 'C', text: 'Slight sympathy, but animals are resilient in nature.', weights: { emotional_distance: 18, affective_mirroring: -16 } },
      { id: 'D', text: 'Take a photo and alert a local rescue group.', weights: { perspective_taking: 12, emotional_distance: 5 } },
    ]
  },
  {
    id: 'exp7_q10',
    experimentId: 'how_empathetic_are_you',
    stepNumber: 10,
    targetDimensionId: 'emotional_distance',
    scenarioType: 'CORE_EMPATHY_SPECTRUM',
    scenario: 'Which statement best describes your capacity for absorbing human emotion?',
    question: 'Choose your statement:',
    options: [
      { id: 'A', text: 'I am a sponge — I absorb the moods and pain of people around me.', weights: { affective_mirroring: 20, emotional_distance: -20 } },
      { id: 'B', text: 'I understand feelings logically, but maintain a protected emotional boundary.', weights: { perspective_taking: 16, emotional_distance: 18 } },
      { id: 'C', text: 'I prioritize practical solutions over emotional processing.', weights: { emotional_distance: 20, perspective_taking: 0 } },
      { id: 'D', text: 'My empathy is reserved strictly for those in my inner circle.', weights: { emotional_distance: 12, perspective_taking: -10 } },
    ]
  }
];

export const fallbackExp8Selfish: Question[] = [
  {
    id: 'exp8_q1',
    experimentId: 'are_you_selfish',
    stepNumber: 1,
    targetDimensionId: 'resource_hoarding',
    scenarioType: 'LAST_SLICE',
    scenario: 'You are at a communal lunch with 3 coworkers. There is one high-end artisanal donut left on the platter that everyone clearly wants.',
    question: 'What do you do?',
    options: [
      { id: 'A', text: 'Take it — you arrived first or paid for part of the platter.', weights: { resource_hoarding: 18, self_interest: 16 } },
      { id: 'B', text: 'Offer to cut it into 4 equal quarters for everyone to share.', weights: { altruism: 18, resource_hoarding: -18 } },
      { id: 'C', text: 'Leave it untouched on the table out of politeness.', weights: { altruism: 10, resource_hoarding: -10 } },
      { id: 'D', text: 'Wait 10 minutes to see if anyone claims it, then grab it.', weights: { resource_hoarding: 10, self_interest: 12 } },
    ]
  },
  {
    id: 'exp8_q2',
    experimentId: 'are_you_selfish',
    stepNumber: 2,
    targetDimensionId: 'self_interest',
    scenarioType: 'TIME_INVESTMENT',
    scenario: 'A neighbor asks if you can spend 3 hours this Saturday helping them move heavy furniture.',
    question: 'How do you respond?',
    options: [
      { id: 'A', text: 'Politely decline claiming prior personal commitments.', weights: { self_interest: 18, altruism: -16 } },
      { id: 'B', text: 'Agree enthusiastically without expecting anything in return.', weights: { altruism: 20, self_interest: -18 } },
      { id: 'C', text: 'Agree on the condition that they buy you dinner or help you later.', weights: { self_interest: 12, resource_hoarding: 10 } },
      { id: 'D', text: 'Offer to help for 30 minutes with the heaviest single item.', weights: { self_interest: 5, altruism: 5 } },
    ]
  },
  {
    id: 'exp8_q3',
    experimentId: 'are_you_selfish',
    stepNumber: 3,
    targetDimensionId: 'altruism',
    scenarioType: 'LOTTERY_WIN',
    scenario: 'You unexpectedly win $50,000 in a local sweepstakes.',
    question: 'How do you allocate the funds?',
    options: [
      { id: 'A', text: 'Invest/save 100% of it into your personal wealth portfolio.', weights: { self_interest: 20, resource_hoarding: 18 } },
      { id: 'B', text: 'Donate 20% to charity and share part of it with family/friends.', weights: { altruism: 20, self_interest: -18 } },
      { id: 'C', text: 'Spend it on a luxury vacation or item you\'ve always wanted.', weights: { self_interest: 18, resource_hoarding: 12 } },
      { id: 'D', text: 'Pay off personal debts first before deciding anything else.', weights: { self_interest: 10, resource_hoarding: 10 } },
    ]
  },
  {
    id: 'exp8_q4',
    experimentId: 'are_you_selfish',
    stepNumber: 4,
    targetDimensionId: 'resource_hoarding',
    scenarioType: 'SEATING_COMFORT',
    scenario: 'On a 6-hour packed flight, you have a spacious exit-row seat. The passenger next to you is visibly uncomfortable and asks if you would swap for a standard middle seat.',
    question: 'What do you say?',
    options: [
      { id: 'A', text: 'Refuse — you specifically paid extra or booked early for legroom.', weights: { resource_hoarding: 18, self_interest: 18 } },
      { id: 'B', text: 'Swap seats immediately to relieve their discomfort.', weights: { altruism: 20, resource_hoarding: -20 } },
      { id: 'C', text: 'Offer to swap for the second half of the flight only.', weights: { altruism: 8, self_interest: 5 } },
      { id: 'D', text: 'Call the flight attendant to handle seating adjustments.', weights: { self_interest: 10, resource_hoarding: 10 } },
    ]
  },
  {
    id: 'exp8_q5',
    experimentId: 'are_you_selfish',
    stepNumber: 5,
    targetDimensionId: 'self_interest',
    scenarioType: 'TRAP_PARADOX',
    scenario: 'You are offered an exclusive individual bonus at work if you withhold a key research document from your team until next quarter.',
    question: 'Do you accept the bonus offer?',
    options: [
      { id: 'A', text: 'Yes — personal career and financial advancement is paramount.', weights: { self_interest: 22, resource_hoarding: 18 } },
      { id: 'B', text: 'No — sabotaging team progress for personal gain is unethical.', weights: { altruism: 20, self_interest: -20 } },
      { id: 'C', text: 'Share a partial summary with the team while keeping the raw data.', weights: { self_interest: 10, resource_hoarding: 12 } },
      { id: 'D', text: 'Report the manager making the bonus offer to compliance.', weights: { altruism: 12, self_interest: -10 } },
    ]
  },
  {
    id: 'exp8_q6',
    experimentId: 'are_you_selfish',
    stepNumber: 6,
    targetDimensionId: 'altruism',
    scenarioType: 'BLOOD_DONATION',
    scenario: 'How often do you volunteer time or donate blood/resources without any public recognition?',
    question: 'Select your experience:',
    options: [
      { id: 'A', text: 'Regularly — service to others is a fundamental habit.', weights: { altruism: 20, self_interest: -18 } },
      { id: 'B', text: 'Occasionally — when convenience and timing align.', weights: { self_interest: 2, altruism: 2 } },
      { id: 'C', text: 'Rarely or never — my personal schedule leaves no room for it.', weights: { self_interest: 18, resource_hoarding: 15 } },
      { id: 'D', text: 'Only when organized by my employer or group.', weights: { self_interest: 8, altruism: 0 } },
    ]
  },
  {
    id: 'exp8_q7',
    experimentId: 'are_you_selfish',
    stepNumber: 7,
    targetDimensionId: 'resource_hoarding',
    scenarioType: 'LENDING_TOOLS',
    scenario: 'A friend asks to borrow your expensive camera or high-end tools for a weekend project.',
    question: 'How do you react?',
    options: [
      { id: 'A', text: 'Make an excuse why it\'s unavailable — people rarely treat borrowed gear carefully.', weights: { resource_hoarding: 20, self_interest: 16 } },
      { id: 'B', text: 'Lend it freely with clear instructions on usage.', weights: { altruism: 18, resource_hoarding: -18 } },
      { id: 'C', text: 'Offer to come along and operate the tool for them.', weights: { self_interest: 8, resource_hoarding: 8 } },
      { id: 'D', text: 'Ask for a refundable deposit or guarantee.', weights: { resource_hoarding: 15, self_interest: 12 } },
    ]
  },
  {
    id: 'exp8_q8',
    experimentId: 'are_you_selfish',
    stepNumber: 8,
    targetDimensionId: 'self_interest',
    scenarioType: 'SUBORDINATE_PROMOTION',
    scenario: 'Promoting your best team member will significantly increase your own daily workload for 6 months.',
    question: 'Do you champion their promotion now or delay it?',
    options: [
      { id: 'A', text: 'Champion it immediately — their growth overrides my workload.', weights: { altruism: 20, self_interest: -18 } },
      { id: 'B', text: 'Delay it by 3 months while training a replacement secretly.', weights: { self_interest: 16, resource_hoarding: 14 } },
      { id: 'C', text: 'Recommend them for a role in another department.', weights: { self_interest: 8, altruism: 5 } },
      { id: 'D', text: 'Ask for a personal management compensation bump before approving.', weights: { self_interest: 20, resource_hoarding: 16 } },
    ]
  },
  {
    id: 'exp8_q9',
    experimentId: 'are_you_selfish',
    stepNumber: 9,
    targetDimensionId: 'altruism',
    scenarioType: 'SHARED_CABIN',
    scenario: 'You are staying in a shared vacation house. Who cleans up the common kitchen space after dinner?',
    question: 'What is your usual behavior?',
    options: [
      { id: 'A', text: 'Clean up the entire kitchen, including dishware you didn\'t use.', weights: { altruism: 20, self_interest: -18 } },
      { id: 'B', text: 'Clean strictly your own plate and glass.', weights: { self_interest: 12, resource_hoarding: 8 } },
      { id: 'C', text: 'Wait until a group cleanup system is proposed.', weights: { self_interest: 5, altruism: 0 } },
      { id: 'D', text: 'Disappear to your room early to avoid kitchen duty.', weights: { self_interest: 20, resource_hoarding: 15 } },
    ]
  },
  {
    id: 'exp8_q10',
    experimentId: 'are_you_selfish',
    stepNumber: 10,
    targetDimensionId: 'self_interest',
    scenarioType: 'CORE_ALTRUISM_INDEX',
    scenario: 'When evaluating your actions over the past year, which principle best reflects your conduct?',
    question: 'Select your summary:',
    options: [
      { id: 'A', text: 'I prioritize my own goals, comfort, and security first.', weights: { self_interest: 22, resource_hoarding: 18 } },
      { id: 'B', text: 'I consistently sacrifice personal comfort to support others.', weights: { altruism: 22, self_interest: -20 } },
      { id: 'C', text: 'I seek strict 50/50 reciprocal fairness in every exchange.', weights: { self_interest: 2, resource_hoarding: 2 } },
      { id: 'D', text: 'I am generous to family, but pragmatic with strangers.', weights: { self_interest: 10, altruism: 0 } },
    ]
  }
];
