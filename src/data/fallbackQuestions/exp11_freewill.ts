import { Question } from '../../types/moral';

export const fallbackExp11Freewill: Question[] = [
  {
    id: 'exp11_q1',
    experimentId: 'do_you_actually_have_free_will',
    stepNumber: 1,
    targetDimensionId: 'determinism_index',
    scenarioType: 'BEVERAGE_CHOICE',
    scenario: 'You walk into a café and order a coffee. Why did you choose coffee over tea or water?',
    question: 'Select the primary driving factor behind your choice:',
    options: [
      { id: 'A', text: 'My biological sleep deficit, habit loop, and caffeine dependency.', weights: { determinism_index: 20, conformity_bias: 12 } },
      { id: 'B', text: 'A completely autonomous, conscious decision made in that exact moment.', weights: { determinism_index: -20, internal_locus: 20 } },
      { id: 'C', text: 'The visual marketing billboard I walked past 2 minutes ago.', weights: { determinism_index: 15, conformity_bias: 18 } },
      { id: 'D', text: 'Whatever was cheapest on the menu board.', weights: { determinism_index: 10, internal_locus: -5 } },
    ]
  },
  {
    id: 'exp11_q2',
    experimentId: 'do_you_actually_have_free_will',
    stepNumber: 2,
    targetDimensionId: 'conformity_bias',
    scenarioType: 'FASHION_TREND',
    scenario: 'You look at clothing photos from 5 years ago that you used to wear proudly, but now find slightly embarrassing.',
    question: 'Why did your taste change so drastically?',
    options: [
      { id: 'A', text: 'Because social norms and trends dictated what was acceptable then vs now.', weights: { conformity_bias: 20, determinism_index: 16 } },
      { id: 'B', text: 'My personal aesthetic evolved through conscious self-reflection.', weights: { internal_locus: 18, conformity_bias: -18 } },
      { id: 'C', text: 'Fashion is cyclical; industrial marketing forces change our tastes.', weights: { determinism_index: 18, conformity_bias: 15 } },
      { id: 'D', text: 'I don\'t care about fashion — I wear whatever fits.', weights: { conformity_bias: -10, internal_locus: 10 } },
    ]
  },
  {
    id: 'exp11_q3',
    experimentId: 'do_you_actually_have_free_will',
    stepNumber: 3,
    targetDimensionId: 'internal_locus',
    scenarioType: 'LIFE_OUTCOME',
    scenario: 'Reflecting on your current career, location, and social standing...',
    question: 'What proportion of your current life trajectory was shaped by pure luck vs your personal decisions?',
    options: [
      { id: 'A', text: '80% Luck/Environment (birth zip code, timing, parents) & 20% Personal Choice.', weights: { determinism_index: 20, internal_locus: -20 } },
      { id: 'B', text: '80% Personal Choice (grit, decisions, discipline) & 20% Luck.', weights: { internal_locus: 22, determinism_index: -20 } },
      { id: 'C', text: 'A 50/50 interplay between opportunity and choice.', weights: { internal_locus: 5, determinism_index: 5 } },
      { id: 'D', text: 'Systemic socioeconomic forces dictate 95% of human outcomes.', weights: { determinism_index: 22, conformity_bias: 15 } },
    ]
  },
  {
    id: 'exp11_q4',
    experimentId: 'do_you_actually_have_free_will',
    stepNumber: 4,
    targetDimensionId: 'determinism_index',
    scenarioType: 'PREDICTABLE_REACTION',
    scenario: 'Someone cuts you off aggressively in traffic during bumper-to-bumper rush hour.',
    question: 'How controllable is your immediate physiological surge of anger or irritation?',
    options: [
      { id: 'A', text: 'Uncontrollable — neurochemistry and adrenaline fire automatically before thought.', weights: { determinism_index: 20, internal_locus: -18 } },
      { id: 'B', text: 'Fully controllable — I choose my emotional state regardless of external triggers.', weights: { internal_locus: 20, determinism_index: -18 } },
      { id: 'C', text: 'Slightly controllable with practice and deep breath exercises.', weights: { internal_locus: 10, determinism_index: 0 } },
      { id: 'D', text: 'It depends on how tired or hungry I am at that moment.', weights: { determinism_index: 15, internal_locus: -10 } },
    ]
  },
  {
    id: 'exp11_q5',
    experimentId: 'do_you_actually_have_free_will',
    stepNumber: 5,
    targetDimensionId: 'conformity_bias',
    scenarioType: 'TRAP_PARADOX',
    scenario: 'Scientists build a supercomputer that analyzes your DNA, brain scans, and history, predicting your next 10 decisions with 100% accuracy.',
    question: 'Do you believe this is theoretically possible?',
    options: [
      { id: 'A', text: 'Yes — the human brain is a biological machine operating on physics and cause/effect.', weights: { determinism_index: 22, internal_locus: -22 } },
      { id: 'B', text: 'No — human consciousness possesses genuine non-deterministic agency.', weights: { internal_locus: 22, determinism_index: -22 } },
      { id: 'C', text: 'Yes for routine habits, but No for moral choices.', weights: { determinism_index: 10, internal_locus: 10 } },
      { id: 'D', text: 'Quantum randomness prevents 100% accurate prediction.', weights: { determinism_index: -5, internal_locus: 5 } },
    ]
  },
  {
    id: 'exp11_q6',
    experimentId: 'do_you_actually_have_free_will',
    stepNumber: 6,
    targetDimensionId: 'internal_locus',
    scenarioType: 'MORAL_RESPONSIBILITY',
    scenario: 'If human choices are largely shaped by genetics and childhood conditioning, should criminal justice focus on punishment or rehabilitation?',
    question: 'Select your stance:',
    options: [
      { id: 'A', text: 'Rehabilitation — individuals are products of environment, not pure evil.', weights: { determinism_index: 20, internal_locus: -18 } },
      { id: 'B', text: 'Punishment/Accountability — every adult must bear absolute responsibility for choices.', weights: { internal_locus: 20, determinism_index: -18 } },
      { id: 'C', text: 'Public safety isolation regardless of philosophy.', weights: { determinism_index: 5, internal_locus: 0 } },
      { id: 'D', text: 'A hybrid system tailored to psychological evaluations.', weights: { determinism_index: 10, internal_locus: 5 } },
    ]
  },
  {
    id: 'exp11_q7',
    experimentId: 'do_you_actually_have_free_will',
    stepNumber: 7,
    targetDimensionId: 'conformity_bias',
    scenarioType: 'ALGORITHM_PREDICTION',
    scenario: 'An algorithm recommends a movie or music track, and you end up loving it immensely.',
    question: 'How do you interpret this experience?',
    options: [
      { id: 'A', text: 'Proof that my personal taste is predictable and categorized by data.', weights: { determinism_index: 18, conformity_bias: 18 } },
      { id: 'B', text: 'A happy coincidence — I happen to like that specific piece.', weights: { internal_locus: 10, determinism_index: -10 } },
      { id: 'C', text: 'Uncomfortable — I hate being accurately profiled by machines.', weights: { internal_locus: 15, conformity_bias: -15 } },
      { id: 'D', text: 'I actively seek out obscure art to avoid algorithmic loops.', weights: { internal_locus: 18, conformity_bias: -18 } },
    ]
  },
  {
    id: 'exp11_q8',
    experimentId: 'do_you_actually_have_free_will',
    stepNumber: 8,
    targetDimensionId: 'determinism_index',
    scenarioType: 'RANDOM_ACT',
    scenario: 'To prove you have free will, you decide to perform a completely random act right now (e.g. clapping 3 times).',
    question: 'Why did you clap 3 times instead of 4 or 2 times?',
    options: [
      { id: 'A', text: 'Because 3 is a subconsciously familiar pattern programmed into my brain.', weights: { determinism_index: 20, internal_locus: -18 } },
      { id: 'B', text: 'Because I deliberately picked 3 out of my own free agency.', weights: { internal_locus: 18, determinism_index: -18 } },
      { id: 'C', text: 'To prove a point in this behavioral test.', weights: { conformity_bias: 12, determinism_index: 10 } },
      { id: 'D', text: 'I didn\'t clap — I refused to follow the prompt.', weights: { internal_locus: 20, conformity_bias: -20 } },
    ]
  },
  {
    id: 'exp11_q9',
    experimentId: 'do_you_actually_have_free_will',
    stepNumber: 9,
    targetDimensionId: 'internal_locus',
    scenarioType: 'HABIT_CHANGE',
    scenario: 'When you attempt to break a bad habit (e.g. scrolling, sugar, procrastination), how difficult is it?',
    question: 'Select your experience:',
    options: [
      { id: 'A', text: 'Extremely difficult — neural pathways and environmental cues dominate willpower.', weights: { determinism_index: 20, internal_locus: -18 } },
      { id: 'B', text: 'Manageable — when I decide to stop, I stop through mental discipline.', weights: { internal_locus: 20, determinism_index: -18 } },
      { id: 'C', text: 'Easy if I change my physical environment, impossible through willpower alone.', weights: { determinism_index: 15, internal_locus: 0 } },
      { id: 'D', text: 'I rarely attempt habit changes.', weights: { determinism_index: 10, internal_locus: -10 } },
    ]
  },
  {
    id: 'exp11_q10',
    experimentId: 'do_you_actually_have_free_will',
    stepNumber: 10,
    targetDimensionId: 'determinism_index',
    scenarioType: 'FREE_WILL_CONCLUSION',
    scenario: 'Which philosophy describes the illusion vs reality of human choice?',
    question: 'Select your core belief:',
    options: [
      { id: 'A', text: 'Free will is a necessary biological illusion created by the brain.', weights: { determinism_index: 22, internal_locus: -20 } },
      { id: 'B', text: 'Free will is real, sacred, and the foundation of human dignity.', weights: { internal_locus: 22, determinism_index: -22 } },
      { id: 'C', text: 'We have partial free will within narrow biological constraints.', weights: { determinism_index: 5, internal_locus: 5 } },
      { id: 'D', text: 'It doesn\'t matter — acting as if we have free will is pragmatic.', weights: { internal_locus: 10, determinism_index: -5 } },
    ]
  }
];

export const fallbackExp12Friendship: Question[] = [
  {
    id: 'exp12_q1',
    experimentId: 'are_you_a_good_friend',
    stepNumber: 1,
    targetDimensionId: 'sacrificial_reciprocity',
    scenarioType: 'AIRPORT_PICKUP',
    scenario: 'A close friend asks for a ride home from the airport at 5:00 AM on a workday. It involves a 40-minute drive each way.',
    question: 'What is your immediate response?',
    options: [
      { id: 'A', text: 'Set your alarm for 4:15 AM and pick them up without hesitation.', weights: { sacrificial_reciprocity: 20, interpersonal_loyalty: 18 } },
      { id: 'B', text: 'Send them $25 toward an Uber so they get home comfortably while you sleep.', weights: { interpersonal_loyalty: 10, emotional_availability: -10 } },
      { id: 'C', text: 'Politely decline and suggest they take the airport express train.', weights: { sacrificial_reciprocity: -18, emotional_availability: -16 } },
      { id: 'D', text: 'Agree, but ask if they can cover gas and coffee.', weights: { sacrificial_reciprocity: 5, interpersonal_loyalty: 5 } },
    ]
  },
  {
    id: 'exp12_q2',
    experimentId: 'are_you_a_good_friend',
    stepNumber: 2,
    targetDimensionId: 'emotional_availability',
    scenarioType: 'VENTING_SESSION',
    scenario: 'Your friend calls you during your favorite evening relaxation time to complain about their workplace drama for the third time this week.',
    question: 'How do you handle the phone call?',
    options: [
      { id: 'A', text: 'Listen attentively for an hour, offering warmth and empathy.', weights: { emotional_availability: 20, interpersonal_loyalty: 16 } },
      { id: 'B', text: 'Interrupt gently to offer actionable solutions to resolve the drama.', weights: { emotional_availability: 5, sacrificial_reciprocity: 10 } },
      { id: 'C', text: 'Say you have 10 minutes before an appointment to keep it brief.', weights: { emotional_availability: -15, sacrificial_reciprocity: -12 } },
      { id: 'D', text: 'Let it go to voicemail and send a text later.', weights: { emotional_availability: -20, interpersonal_loyalty: -18 } },
    ]
  },
  {
    id: 'exp12_q3',
    experimentId: 'are_you_a_good_friend',
    stepNumber: 3,
    targetDimensionId: 'interpersonal_loyalty',
    scenarioType: 'DEFENDING_ABSENT',
    scenario: 'An acquaintance at a party makes a subtle, mocking jab about your close friend who is not present.',
    question: 'How do you react in the group setting?',
    options: [
      { id: 'A', text: 'Shut down the comment firmly: "They are my friend, and that\'s untrue."', weights: { interpersonal_loyalty: 20, sacrificial_reciprocity: 15 } },
      { id: 'B', text: 'Change the subject smoothly without creating group tension.', weights: { interpersonal_loyalty: 5, emotional_availability: 5 } },
      { id: 'C', text: 'Politely chuckle to avoid being seen as awkward or aggressive.', weights: { interpersonal_loyalty: -18, sacrificial_reciprocity: -16 } },
      { id: 'D', text: 'Tell your friend in private later what was said about them.', weights: { interpersonal_loyalty: 10, emotional_availability: 8 } },
    ]
  },
  {
    id: 'exp12_q4',
    experimentId: 'are_you_a_good_friend',
    stepNumber: 4,
    targetDimensionId: 'sacrificial_reciprocity',
    scenarioType: 'BORROWING_MONEY',
    scenario: 'A trusted long-time friend facing a sudden medical emergency asks to borrow $1,000. You have the money in savings, but were saving for a holiday.',
    question: 'Do you lend the money?',
    options: [
      { id: 'A', text: 'Lend it immediately, telling them to repay whenever possible.', weights: { sacrificial_reciprocity: 22, interpersonal_loyalty: 20 } },
      { id: 'B', text: 'Give them $300 as a gift rather than a loan to protect the friendship.', weights: { sacrificial_reciprocity: 14, interpersonal_loyalty: 12 } },
      { id: 'C', text: 'Decline — lending money to friends invariably ruins relationships.', weights: { sacrificial_reciprocity: -18, interpersonal_loyalty: -15 } },
      { id: 'D', text: 'Help them set up an online crowdfunding campaign instead.', weights: { emotional_availability: 8, sacrificial_reciprocity: -5 } },
    ]
  },
  {
    id: 'exp12_q5',
    experimentId: 'are_you_a_good_friend',
    stepNumber: 5,
    targetDimensionId: 'emotional_availability',
    scenarioType: 'TRAP_PARADOX',
    scenario: 'Your close friend is making a terrible romantic or financial decision that will clearly end in disaster.',
    question: 'What is your approach?',
    options: [
      { id: 'A', text: 'Tell them the harsh, unvarnished truth directly, even if it pisses them off.', weights: { interpersonal_loyalty: 18, emotional_availability: 12 } },
      { id: 'B', text: 'Support their happiness silently and be there to pick up the pieces later.', weights: { emotional_availability: 16, interpersonal_loyalty: 10 } },
      { id: 'C', text: 'Ask gentle probing questions to help them see the flaws themselves.', weights: { emotional_availability: 18, interpersonal_loyalty: 15 } },
      { id: 'D', text: 'Mind your own business — adults must make their own mistakes.', weights: { emotional_availability: -18, interpersonal_loyalty: -18 } },
    ]
  },
  {
    id: 'exp12_q6',
    experimentId: 'are_you_a_good_friend',
    stepNumber: 6,
    targetDimensionId: 'interpersonal_loyalty',
    scenarioType: 'CELEBRATING_SUCCESS',
    scenario: 'Your friend gets into a prestigious program or job that you applied for and were rejected from.',
    question: 'How do you handle your personal interaction with them?',
    options: [
      { id: 'A', text: 'Throw them a celebratory dinner with genuine enthusiasm.', weights: { interpersonal_loyalty: 20, emotional_availability: 18 } },
      { id: 'B', text: 'Congratulate them warmly, but take a few days of space to process your grief.', weights: { emotional_availability: 10, interpersonal_loyalty: 8 } },
      { id: 'C', text: 'Send a quick text message and avoid in-person celebrations.', weights: { interpersonal_loyalty: -12, emotional_availability: -14 } },
      { id: 'D', text: 'Subtly point out challenges or stress involved in their new role.', weights: { interpersonal_loyalty: -22, emotional_availability: -20 } },
    ]
  },
  {
    id: 'exp12_q7',
    experimentId: 'are_you_a_good_friend',
    stepNumber: 7,
    targetDimensionId: 'sacrificial_reciprocity',
    scenarioType: 'MOVING_DAY',
    scenario: 'A friend asks for help moving apartments on a hot Saturday afternoon. They offer pizza and beer.',
    question: 'What do you do?',
    options: [
      { id: 'A', text: 'Show up early with work gloves and lift boxes for 6 hours.', weights: { sacrificial_reciprocity: 20, interpersonal_loyalty: 18 } },
      { id: 'B', text: 'Show up for 2 hours to help with lighter items.', weights: { sacrificial_reciprocity: 8, interpersonal_loyalty: 8 } },
      { id: 'C', text: 'Make an excuse why you are unavailable.', weights: { sacrificial_reciprocity: -18, interpersonal_loyalty: -16 } },
      { id: 'D', text: 'Hire a professional mover for them as a gift.', weights: { sacrificial_reciprocity: 12, emotional_availability: -5 } },
    ]
  },
  {
    id: 'exp12_q8',
    experimentId: 'are_you_a_good_friend',
    stepNumber: 8,
    targetDimensionId: 'emotional_availability',
    scenarioType: 'KEEPING_IN_TOUCH',
    scenario: 'How often do you initiate catch-up texts or calls with long-distance friends?',
    question: 'Select your habit:',
    options: [
      { id: 'A', text: 'Constantly — true friendship requires active maintenance regardless of distance.', weights: { emotional_availability: 20, interpersonal_loyalty: 18 } },
      { id: 'B', text: 'Periodically (once a month) when something reminds me of them.', weights: { emotional_availability: 8, interpersonal_loyalty: 8 } },
      { id: 'C', text: 'Rarely — I pick up right where we left off when we happen to meet.', weights: { emotional_availability: -10, interpersonal_loyalty: 5 } },
      { id: 'D', text: 'I wait for them to reach out to me first.', weights: { emotional_availability: -18, interpersonal_loyalty: -15 } },
    ]
  },
  {
    id: 'exp12_q9',
    experimentId: 'are_you_a_good_friend',
    stepNumber: 9,
    targetDimensionId: 'interpersonal_loyalty',
    scenarioType: 'OLD_VS_NEW',
    scenario: 'You start dating a new partner who dislikes your childhood best friend for no concrete reason.',
    question: 'How do you handle the friction?',
    options: [
      { id: 'A', text: 'Make it clear to your partner that your best friend is permanent.', weights: { interpersonal_loyalty: 22, sacrificial_reciprocity: 18 } },
      { id: 'B', text: 'Gradually reduce hangout frequency with your best friend to avoid conflict.', weights: { interpersonal_loyalty: -20, sacrificial_reciprocity: -18 } },
      { id: 'C', text: 'Keep hangouts with your best friend separate without involving your partner.', weights: { interpersonal_loyalty: 10, emotional_availability: 8 } },
      { id: 'D', text: 'Pressure your partner to attend group therapy.', weights: { emotional_availability: 12, interpersonal_loyalty: 12 } },
    ]
  },
  {
    id: 'exp12_q10',
    experimentId: 'are_you_a_good_friend',
    stepNumber: 10,
    targetDimensionId: 'sacrificial_reciprocity',
    scenarioType: 'FRIENDSHIP_INDEX',
    scenario: 'How would your 3 closest friends describe your role in their lives?',
    question: 'Select the description that fits best:',
    options: [
      { id: 'A', text: 'The rock — fiercely loyal, willing to drop everything in a crisis.', weights: { sacrificial_reciprocity: 22, interpersonal_loyalty: 22 } },
      { id: 'B', text: 'The sounding board — compassionate, insightful listener.', weights: { emotional_availability: 20, interpersonal_loyalty: 18 } },
      { id: 'C', text: 'The fun companion — great for events, but maintains personal boundaries.', weights: { emotional_availability: -12, sacrificial_reciprocity: -15 } },
      { id: 'D', text: 'The straight-shooter — honest advice without sugarcoating.', weights: { interpersonal_loyalty: 15, emotional_availability: 10 } },
    ]
  }
];
