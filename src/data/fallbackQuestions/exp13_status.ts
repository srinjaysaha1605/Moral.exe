import { Question } from '../../types/moral';

export const fallbackExp13Status: Question[] = [
  {
    id: 'exp13_q1',
    experimentId: 'how_much_do_you_care_about_status',
    stepNumber: 1,
    targetDimensionId: 'prestige_drive',
    scenarioType: 'JOB_TITLE',
    scenario: 'Company A offers you $100k/yr with the title "Junior Operations Associate". Company B offers you $90k/yr with the title "Vice President of Strategic Execution".',
    question: 'Which offer do you lean toward?',
    options: [
      { id: 'A', text: 'Company B ($90k) — prestigious titles unlock far greater long-term market authority.', weights: { prestige_drive: 20, status_signaling: 18 } },
      { id: 'B', text: 'Company A ($100k) — liquid cash compensation matters more than empty titles.', weights: { prestige_drive: -18, status_signaling: -18 } },
      { id: 'C', text: 'Negotiate with Company A to match the VP title before choosing.', weights: { prestige_drive: 12, status_signaling: 12 } },
      { id: 'D', text: 'Choose whichever company has a shorter commute.', weights: { prestige_drive: -12, status_signaling: -10 } },
    ]
  },
  {
    id: 'exp13_q2',
    experimentId: 'how_much_do_you_care_about_status',
    stepNumber: 2,
    targetDimensionId: 'status_signaling',
    scenarioType: 'CAR_PURCHASE',
    scenario: 'You are buying a car with a $40,000 budget.',
    question: 'Which option do you choose?',
    options: [
      { id: 'A', text: 'A 5-year-old luxury German sedan with high mileage that looks expensive.', weights: { status_signaling: 20, prestige_drive: 18 } },
      { id: 'B', text: 'A brand-new practical Japanese hatchback with low maintenance cost.', weights: { status_signaling: -20, social_hierarchy_sensitivity: -18 } },
      { id: 'C', text: 'An electric vehicle that signals environmental awareness.', weights: { status_signaling: 12, prestige_drive: 10 } },
      { id: 'D', text: 'Whatever car has the lowest insurance rate.', weights: { status_signaling: -15, prestige_drive: -15 } },
    ]
  },
  {
    id: 'exp13_q3',
    experimentId: 'how_much_do_you_care_about_status',
    stepNumber: 3,
    targetDimensionId: 'social_hierarchy_sensitivity',
    scenarioType: 'VIP_EVENT',
    scenario: 'You are attending a high-profile industry gala. You notice a separate "VIP Lounge" guarded by security with free champagne.',
    question: 'What is your reaction?',
    options: [
      { id: 'A', text: 'Feel an intense urge to secure a VIP wristband or talk your way past security.', weights: { social_hierarchy_sensitivity: 20, prestige_drive: 18 } },
      { id: 'B', text: 'Indifference — enjoying the main floor and chatting with whoever is near.', weights: { social_hierarchy_sensitivity: -20, status_signaling: -18 } },
      { id: 'C', text: 'Slight irritation at artificial social tiering.', weights: { social_hierarchy_sensitivity: -10, prestige_drive: -10 } },
      { id: 'D', text: 'Take a photo near the entrance to share on social media.', weights: { status_signaling: 18, prestige_drive: 15 } },
    ]
  },
  {
    id: 'exp13_q4',
    experimentId: 'how_much_do_you_care_about_status',
    stepNumber: 4,
    targetDimensionId: 'prestige_drive',
    scenarioType: 'NAME_DROPPING',
    scenario: 'You briefly meet a famous celebrity or billionaire executive at an event.',
    question: 'How many times do you mention this meeting to friends in the next fortnight?',
    options: [
      { id: 'A', text: 'Multiple times — it\'s an exciting personal milestone to share.', weights: { status_signaling: 18, prestige_drive: 16 } },
      { id: 'B', text: 'Only if the topic of celebrities naturally comes up.', weights: { status_signaling: 2, prestige_drive: 0 } },
      { id: 'C', text: 'Never — namedropping sounds insecure.', weights: { status_signaling: -18, prestige_drive: -15 } },
      { id: 'D', text: 'Post a photo with them on Instagram immediately.', weights: { status_signaling: 22, prestige_drive: 20 } },
    ]
  },
  {
    id: 'exp13_q5',
    experimentId: 'how_much_do_you_care_about_status',
    stepNumber: 5,
    targetDimensionId: 'status_signaling',
    scenarioType: 'TRAP_PARADOX',
    scenario: 'You receive a bonus and want to buy a luxury wristwatch. Option X has a prominent logo recognized worldwide. Option Y is hand-crafted with superior movements but no visible brand logo.',
    question: 'Which watch do you buy?',
    options: [
      { id: 'A', text: 'Option X — brand recognition is half the value of luxury goods.', weights: { status_signaling: 20, prestige_drive: 18 } },
      { id: 'B', text: 'Option Y — subtle quality for personal appreciation beats public flexes.', weights: { status_signaling: -15, prestige_drive: 5 } },
      { id: 'C', text: 'Neither — spending thousands on a watch is irrational when phones tell time.', weights: { status_signaling: -22, prestige_drive: -20 } },
      { id: 'D', text: 'Option X, but keep the original receipt for resale value.', weights: { status_signaling: 12, prestige_drive: 10 } },
    ]
  },
  {
    id: 'exp13_q6',
    experimentId: 'how_much_do_you_care_about_status',
    stepNumber: 6,
    targetDimensionId: 'social_hierarchy_sensitivity',
    scenarioType: 'RESTAURANT_SEATING',
    scenario: 'You walk into an exclusive restaurant without a reservation. The host seats you at a dark corner table next to the kitchen door.',
    question: 'How do you feel about the table placement?',
    options: [
      { id: 'A', text: 'Offended — request a prominent table in the main dining area immediately.', weights: { social_hierarchy_sensitivity: 20, status_signaling: 18 } },
      { id: 'B', text: 'Fine — quiet corner tables allow better private conversation.', weights: { social_hierarchy_sensitivity: -18, prestige_drive: -15 } },
      { id: 'C', text: 'Ask if a window table will become available in 15 minutes.', weights: { social_hierarchy_sensitivity: 8, status_signaling: 5 } },
      { id: 'D', text: 'Leave a tip before ordering to see if service improves.', weights: { status_signaling: 14, social_hierarchy_sensitivity: 15 } },
    ]
  },
  {
    id: 'exp13_q7',
    experimentId: 'how_much_do_you_care_about_status',
    stepNumber: 7,
    targetDimensionId: 'prestige_drive',
    scenarioType: 'ALUMNI_NETWORK',
    scenario: 'When introducing yourself at a networking event, how do you phrase your educational background?',
    question: 'Select your style:',
    options: [
      { id: 'A', text: 'Always explicitly name-drop your university/degree if notable.', weights: { status_signaling: 18, prestige_drive: 18 } },
      { id: 'B', text: 'Focus exclusively on your practical skills and current projects.', weights: { status_signaling: -18, prestige_drive: -16 } },
      { id: 'C', text: 'State your field of study without naming the specific school.', weights: { status_signaling: -10, prestige_drive: -10 } },
      { id: 'D', text: 'Wait for them to ask where you studied.', weights: { status_signaling: 0, prestige_drive: 0 } },
    ]
  },
  {
    id: 'exp13_q8',
    experimentId: 'how_much_do_you_care_about_status',
    stepNumber: 8,
    targetDimensionId: 'status_signaling',
    scenarioType: 'FIRST_CLASS_UPGRADE',
    scenario: 'You get a free surprise upgrade to First Class on a transatlantic flight.',
    question: 'What is the first thing you do after sitting in the spacious seat?',
    options: [
      { id: 'A', text: 'Take a photo of the welcome champagne glass to post or send.', weights: { status_signaling: 20, prestige_drive: 18 } },
      { id: 'B', text: 'Put on eye shades and quietly enjoy the legroom.', weights: { status_signaling: -18, prestige_drive: -15 } },
      { id: 'C', text: 'Explore the noise-canceling headphones and menu options.', weights: { status_signaling: 0, prestige_drive: 2 } },
      { id: 'D', text: 'Text your family "You won\'t believe this upgrade!"', weights: { status_signaling: 10, prestige_drive: 8 } },
    ]
  },
  {
    id: 'exp13_q9',
    experimentId: 'how_much_do_you_care_about_status',
    stepNumber: 9,
    targetDimensionId: 'social_hierarchy_sensitivity',
    scenarioType: 'STATUS_SYMBOLS',
    scenario: 'Which of the following achievements would give you the deepest sense of pride?',
    question: 'Choose your top pick:',
    options: [
      { id: 'A', text: 'Being named on a "30 Under 30" or top industry leader list.', weights: { prestige_drive: 22, status_signaling: 20 } },
      { id: 'B', text: 'Building a peaceful, loving home life with financial stability.', weights: { prestige_drive: -20, status_signaling: -20 } },
      { id: 'C', text: 'Inventing or creating a product that solves a real technical problem.', weights: { prestige_drive: 0, status_signaling: -10 } },
      { id: 'D', text: 'Earning enough to never have to work for a boss again.', weights: { social_hierarchy_sensitivity: -10, prestige_drive: 5 } },
    ]
  },
  {
    id: 'exp13_q10',
    experimentId: 'how_much_do_you_care_about_status',
    stepNumber: 10,
    targetDimensionId: 'prestige_drive',
    scenarioType: 'STATUS_CORE_EVALUATION',
    scenario: 'How honest are you with yourself about your desire for social status and respect?',
    question: 'Select your summary stance:',
    options: [
      { id: 'A', text: 'Status is an undeniable driver of human motivation; I actively strive for it.', weights: { prestige_drive: 22, status_signaling: 20 } },
      { id: 'B', text: 'I actively reject status games; autonomy and freedom matter far more.', weights: { prestige_drive: -22, status_signaling: -22 } },
      { id: 'C', text: 'I value respect within my narrow field, but care little for public fame.', weights: { prestige_drive: 10, status_signaling: -10 } },
      { id: 'D', text: 'Status is nice when it happens, but I don\'t chase it.', weights: { prestige_drive: 0, status_signaling: 0 } },
    ]
  }
];

export const fallbackExp14Survival: Question[] = [
  {
    id: 'exp14_q1',
    experimentId: 'would_you_survive_a_moral_dilemma',
    stepNumber: 1,
    targetDimensionId: 'pragmatic_utilitarianism',
    scenarioType: 'LIFEBOAT_CAPACITY',
    scenario: 'A sinking ship leaves 6 people on a lifeboat designed strictly for 4. If 2 people do not go overboard, the lifeboat will capsize and all 6 will drown in freezing water.',
    question: 'How do you determine who goes overboard?',
    options: [
      { id: 'A', text: 'Enforce a ruthless decision based on age and survival utility (weakest/oldest first).', weights: { pragmatic_utilitarianism: 20, moral_relativism: 18 } },
      { id: 'B', text: 'Draw random straws so everyone has a strictly equal mathematical chance.', weights: { pragmatic_utilitarianism: 5, deontological_rigidity: 15 } },
      { id: 'C', text: 'Refuse to push anyone — capsize together rather than commit murder.', weights: { deontological_rigidity: 22, pragmatic_utilitarianism: -22 } },
      { id: 'D', text: 'Volunteer yourself first to avoid making a horrific choice.', weights: { deontological_rigidity: 18, pragmatic_utilitarianism: -15 } },
    ]
  },
  {
    id: 'exp14_q2',
    experimentId: 'would_you_survive_a_moral_dilemma',
    stepNumber: 2,
    targetDimensionId: 'deontological_rigidity',
    scenarioType: 'TROLLEY_VARIATION',
    scenario: 'A runaway train is hurtling toward 5 workers. You stand on a footbridge next to a large stranger. Pushing them onto the tracks will stop the train and save the 5 workers.',
    question: 'Do you physically push the stranger?',
    options: [
      { id: 'A', text: 'Push them — saving 5 human lives mathematically outweighs 1 life.', weights: { pragmatic_utilitarianism: 22, deontological_rigidity: -20 } },
      { id: 'B', text: 'Do not push them — actively killing an innocent person is fundamentally wrong.', weights: { deontological_rigidity: 22, pragmatic_utilitarianism: -20 } },
      { id: 'C', text: 'Yell at the 5 workers to jump off the tracks.', weights: { moral_relativism: 0, deontological_rigidity: 5 } },
      { id: 'D', text: 'Jump in front of the train yourself instead.', weights: { deontological_rigidity: 15, pragmatic_utilitarianism: -15 } },
    ]
  },
  {
    id: 'exp14_q3',
    experimentId: 'would_you_survive_a_moral_dilemma',
    stepNumber: 3,
    targetDimensionId: 'moral_relativism',
    scenarioType: 'MEDICINE_THEFT',
    scenario: 'Your child is dying from a rare disease. A pharmacist holds the only cure and charges $100,000 (10x cost). You have $5,000 and no loan options.',
    question: 'Do you break into the pharmacy at night to steal the medicine?',
    options: [
      { id: 'A', text: 'Steal the medicine immediately — human life completely overrides property law.', weights: { moral_relativism: 20, pragmatic_utilitarianism: 18 } },
      { id: 'B', text: 'Refuse to steal — theft is inherently immoral regardless of personal grief.', weights: { deontological_rigidity: 22, moral_relativism: -20 } },
      { id: 'C', text: 'Steal the medicine and leave the $5,000 cash on the counter.', weights: { moral_relativism: 12, pragmatic_utilitarianism: 10 } },
      { id: 'D', text: 'Stage a public protest in front of the pharmacy.', weights: { moral_relativism: 5, deontological_rigidity: 5 } },
    ]
  },
  {
    id: 'exp14_q4',
    experimentId: 'would_you_survive_a_moral_dilemma',
    stepNumber: 4,
    targetDimensionId: 'pragmatic_utilitarianism',
    scenarioType: 'TORTURE_CLOCK',
    scenario: 'A captured insurgent has planted a dirty bomb set to detonate in a city center in 30 minutes. They refuse to speak.',
    question: 'Do you authorize physical torture to extract the bomb location?',
    options: [
      { id: 'A', text: 'Authorize torture — saving 100,000 innocent civilians justifies breaking any rule.', weights: { pragmatic_utilitarianism: 22, moral_relativism: 20 } },
      { id: 'B', text: 'Forbid torture — human rights abuses undermine moral legitimacy unconditionally.', weights: { deontological_rigidity: 22, pragmatic_utilitarianism: -22 } },
      { id: 'C', text: 'Use psychological interrogation tricks, but avoid physical harm.', weights: { pragmatic_utilitarianism: 8, deontological_rigidity: 8 } },
      { id: 'D', text: 'Order immediate citywide evacuation instead.', weights: { pragmatic_utilitarianism: 5, deontological_rigidity: 10 } },
    ]
  },
  {
    id: 'exp14_q5',
    experimentId: 'would_you_survive_a_moral_dilemma',
    stepNumber: 5,
    targetDimensionId: 'moral_relativism',
    scenarioType: 'TRAP_PARADOX',
    scenario: 'In a dystopian famine, you manage a grain warehouse. Distributing grain equally will give everyone 200 calories a day (everyone starves in 2 weeks). Giving full rations to 30% of people lets them survive long enough to harvest next season’s crop.',
    question: 'How do you distribute the grain?',
    options: [
      { id: 'A', text: 'Feed 30% to guarantee human survival for the next season.', weights: { pragmatic_utilitarianism: 22, moral_relativism: 20 } },
      { id: 'B', text: 'Distribute equally to everyone — favoring one group over another is murder.', weights: { deontological_rigidity: 20, pragmatic_utilitarianism: -20 } },
      { id: 'C', text: 'Let the community vote on how to distribute the grain.', weights: { moral_relativism: 10, pragmatic_utilitarianism: 0 } },
      { id: 'D', text: 'Prioritize children and agricultural workers only.', weights: { pragmatic_utilitarianism: 15, moral_relativism: 12 } },
    ]
  },
  {
    id: 'exp14_q6',
    experimentId: 'would_you_survive_a_moral_dilemma',
    stepNumber: 6,
    targetDimensionId: 'deontological_rigidity',
    scenarioType: 'AI_ALGORITHM_DILEMMA',
    scenario: 'An autonomous self-driving car suffers brake failure. It must choose between swerving into a wall (killing its 1 passenger) or continuing straight (killing 3 pedestrians).',
    question: 'How should the car\'s safety code be programmed?',
    options: [
      { id: 'A', text: 'Swerve to kill the 1 passenger to minimize overall loss of life.', weights: { pragmatic_utilitarianism: 20, deontological_rigidity: -18 } },
      { id: 'B', text: 'Protect the passenger at all costs — a car owes primary duty to its owner.', weights: { deontological_rigidity: 18, moral_relativism: 15 } },
      { id: 'C', text: 'Hard brake straight ahead without making active targeted swerves.', weights: { deontological_rigidity: 15, pragmatic_utilitarianism: -10 } },
      { id: 'D', text: 'Apply random decision logic.', weights: { moral_relativism: 18, pragmatic_utilitarianism: -18 } },
    ]
  },
  {
    id: 'exp14_q7',
    experimentId: 'would_you_survive_a_moral_dilemma',
    stepNumber: 7,
    targetDimensionId: 'pragmatic_utilitarianism',
    scenarioType: 'ORGAN_TRANSPLANT',
    scenario: 'A doctor has 5 patients dying of organ failure. A healthy visitor enters the hospital for a routine checkup. The doctor could secretly harvest the visitor\'s organs to save all 5 patients.',
    question: 'Should the doctor perform the organ harvest?',
    options: [
      { id: 'A', text: 'No — harvesting an innocent person destroys trust in medicine and violates rights.', weights: { deontological_rigidity: 22, pragmatic_utilitarianism: -22 } },
      { id: 'B', text: 'Yes — strictly mathematically, saving 5 lives outweighs losing 1 life.', weights: { pragmatic_utilitarianism: 22, moral_relativism: 20 } },
      { id: 'C', text: 'No, but ask the visitor if they would voluntarily donate.', weights: { deontological_rigidity: 15, pragmatic_utilitarianism: -10 } },
      { id: 'D', text: 'Search organ registry databases instead.', weights: { deontological_rigidity: 10, pragmatic_utilitarianism: 0 } },
    ]
  },
  {
    id: 'exp14_q8',
    experimentId: 'would_you_survive_a_moral_dilemma',
    stepNumber: 8,
    targetDimensionId: 'moral_relativism',
    scenarioType: 'WAR_CRIME_ORDER',
    scenario: 'During a conflict, a commanding officer orders you to fire upon a village building where enemy snipers are operating, knowing 3 civilians are inside.',
    question: 'Do you carry out the strike command?',
    options: [
      { id: 'A', text: 'Execute the order — neutralising active threat takes operational priority.', weights: { pragmatic_utilitarianism: 18, moral_relativism: 18 } },
      { id: 'B', text: 'Refuse the order — endangering civilians violates international law.', weights: { deontological_rigidity: 20, moral_relativism: -18 } },
      { id: 'C', text: 'Request permission to send a ground squad in first.', weights: { deontological_rigidity: 10, pragmatic_utilitarianism: 5 } },
      { id: 'D', text: 'Fire warning shots near the building first.', weights: { moral_relativism: 10, deontological_rigidity: 10 } },
    ]
  },
  {
    id: 'exp14_q9',
    experimentId: 'would_you_survive_a_moral_dilemma',
    stepNumber: 9,
    targetDimensionId: 'deontological_rigidity',
    scenarioType: 'TRUTH_VS_GENOCIDE',
    scenario: 'A totalitarian guard asks if you are hiding refugees in your basement. You are hiding 4 innocent people.',
    question: 'Do you lie to the guard?',
    options: [
      { id: 'A', text: 'Lie without hesitation — preserving human lives completely overrides lying.', weights: { moral_relativism: 20, pragmatic_utilitarianism: 20 } },
      { id: 'B', text: 'Tell the truth — lying is a sin in my fundamental moral code.', weights: { deontological_rigidity: 25, pragmatic_utilitarianism: -25 } },
      { id: 'C', text: 'Attempt to bribe or distract the guard without speaking.', weights: { moral_relativism: 12, pragmatic_utilitarianism: 12 } },
      { id: 'D', text: 'Refuse to answer and close the door.', weights: { deontological_rigidity: 10, moral_relativism: 5 } },
    ]
  },
  {
    id: 'exp14_q10',
    experimentId: 'would_you_survive_a_moral_dilemma',
    stepNumber: 10,
    targetDimensionId: 'pragmatic_utilitarianism',
    scenarioType: 'MORAL_COMPASS_CORE',
    scenario: 'In extreme high-pressure survival scenarios, what guides your ultimate decisions?',
    question: 'Choose your fundamental compass:',
    options: [
      { id: 'A', text: 'The Greater Good — maximizing total survival and minimizing net harm.', weights: { pragmatic_utilitarianism: 22, moral_relativism: 18 } },
      { id: 'B', text: 'Unbreakable Principles — certain actions are forbidden no matter the outcome.', weights: { deontological_rigidity: 22, pragmatic_utilitarianism: -22 } },
      { id: 'C', text: 'Pragmatic Relativism — morality is contextual and changes with emergency levels.', weights: { moral_relativism: 22, pragmatic_utilitarianism: 15 } },
      { id: 'D', text: 'Instinctual Self-Preservation — protecting myself and my loved ones first.', weights: { moral_relativism: 15, pragmatic_utilitarianism: 10 } },
    ]
  }
];
