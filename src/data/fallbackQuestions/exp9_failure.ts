import { Question } from '../../types/moral';

export const fallbackExp9Failure: Question[] = [
  {
    id: 'exp9_q1',
    experimentId: 'do_you_fear_failure',
    stepNumber: 1,
    targetDimensionId: 'risk_aversion',
    scenarioType: 'CAREER_PIVOT',
    scenario: 'You are offered a founding role at an exciting startup with 50% chance of high payoff and 50% chance of total collapse within 12 months.',
    question: 'What is your decision regarding your current stable job?',
    options: [
      { id: 'A', text: 'Decline — financial stability and job security are non-negotiable.', weights: { risk_aversion: 20, ego_protection: 15 } },
      { id: 'B', text: 'Accept immediately — high risk is the only pathway to extraordinary growth.', weights: { risk_aversion: -20, ego_protection: -18 } },
      { id: 'C', text: 'Offer to consult part-time for the startup while keeping your day job.', weights: { risk_aversion: 10, ego_protection: 5 } },
      { id: 'D', text: 'Request a 6-month unpaid leave of absence from your current employer.', weights: { risk_aversion: 8, ego_protection: 8 } },
    ]
  },
  {
    id: 'exp9_q2',
    experimentId: 'do_you_fear_failure',
    stepNumber: 2,
    targetDimensionId: 'perfectionism_paralysis',
    scenarioType: 'CREATIVE_PROJECT',
    scenario: 'You have been working on a personal writing or design project for 6 months. It is 85% complete.',
    question: 'Why haven\'t you released it to the public yet?',
    options: [
      { id: 'A', text: 'It needs endless refining — releasing flawed work is unacceptable.', weights: { perfectionism_paralysis: 20, ego_protection: 18 } },
      { id: 'B', text: 'I release early rough drafts to gather quick feedback.', weights: { perfectionism_paralysis: -20, risk_aversion: -15 } },
      { id: 'C', text: 'I got distracted by a newer, more interesting idea.', weights: { perfectionism_paralysis: 5, ego_protection: 5 } },
      { id: 'D', text: 'I am waiting for the right promotional timing.', weights: { perfectionism_paralysis: 12, ego_protection: 10 } },
    ]
  },
  {
    id: 'exp9_q3',
    experimentId: 'do_you_fear_failure',
    stepNumber: 3,
    targetDimensionId: 'ego_protection',
    scenarioType: 'PUBLIC_COMPETITION',
    scenario: 'A company-wide trivia or skill contest is announced. You know you are average at the topic.',
    question: 'Do you sign up?',
    options: [
      { id: 'A', text: 'Skip it — losing publicly in front of peers feels embarrassing.', weights: { ego_protection: 20, risk_aversion: 16 } },
      { id: 'B', text: 'Sign up enthusiastically for the fun of participating.', weights: { ego_protection: -20, risk_aversion: -18 } },
      { id: 'C', text: 'Sign up only if you can join a team with strong players.', weights: { ego_protection: 12, risk_aversion: 8 } },
      { id: 'D', text: 'Watch as a spectator from the audience.', weights: { ego_protection: 10, risk_aversion: 12 } },
    ]
  },
  {
    id: 'exp9_q4',
    experimentId: 'do_you_fear_failure',
    stepNumber: 4,
    targetDimensionId: 'risk_aversion',
    scenarioType: 'NEW_SPORT_SKILL',
    scenario: 'You try a new sport or hobby in front of a group of experts and struggle badly during your first attempt.',
    question: 'How do you handle the situation?',
    options: [
      { id: 'A', text: 'Make self-deprecating jokes and quit early to stop looking clumsy.', weights: { ego_protection: 18, perfectionism_paralysis: 15 } },
      { id: 'B', text: 'Laugh at your mistakes and ask the experts for direct coaching.', weights: { ego_protection: -18, risk_aversion: -16 } },
      { id: 'C', text: 'Practice in private at home before joining the group again.', weights: { perfectionism_paralysis: 16, ego_protection: 14 } },
      { id: 'D', text: 'Blame bad equipment or poor lighting.', weights: { ego_protection: 20, perfectionism_paralysis: 10 } },
    ]
  },
  {
    id: 'exp9_q5',
    experimentId: 'do_you_fear_failure',
    stepNumber: 5,
    targetDimensionId: 'perfectionism_paralysis',
    scenarioType: 'TRAP_PARADOX',
    scenario: 'You are offered $5,000 if you perform a 5-minute stand-up comedy routine at a local club tonight. You have 2 hours to prepare.',
    question: 'Do you accept the challenge?',
    options: [
      { id: 'A', text: 'Refuse — 2 hours is insufficient to guarantee a polished, non-cringe performance.', weights: { perfectionism_paralysis: 20, ego_protection: 18 } },
      { id: 'B', text: 'Accept — for $5,000, bombing on stage for 5 minutes is a hilarious story.', weights: { ego_protection: -20, risk_aversion: -20 } },
      { id: 'C', text: 'Accept, but read funny internet jokes off your phone on stage.', weights: { perfectionism_paralysis: 8, risk_aversion: 5 } },
      { id: 'D', text: 'Negotiate for 10 minutes of preparation time to decide.', weights: { risk_aversion: 12, perfectionism_paralysis: 10 } },
    ]
  },
  {
    id: 'exp9_q6',
    experimentId: 'do_you_fear_failure',
    stepNumber: 6,
    targetDimensionId: 'ego_protection',
    scenarioType: 'MISTAKE_ATTRIBUTION',
    scenario: 'When a project you led fails to meet its key metrics, what is your internal explanation?',
    question: 'Select your instinctual reaction:',
    options: [
      { id: 'A', text: 'External factors (shifting market, bad timing, uncooperative vendors).', weights: { ego_protection: 18, risk_aversion: 12 } },
      { id: 'B', text: 'Flaws in my own strategy, planning, or execution.', weights: { ego_protection: -18, perfectionism_paralysis: 10 } },
      { id: 'C', text: 'Unrealistic expectations set by executive management.', weights: { ego_protection: 14, risk_aversion: 8 } },
      { id: 'D', text: 'Failure is a necessary data point for the next iteration.', weights: { ego_protection: -15, risk_aversion: -15 } },
    ]
  },
  {
    id: 'exp9_q7',
    experimentId: 'do_you_fear_failure',
    stepNumber: 7,
    targetDimensionId: 'risk_aversion',
    scenarioType: 'INVESTMENT_STRATEGY',
    scenario: 'How is your personal savings allocated across financial assets?',
    question: 'Choose your asset profile:',
    options: [
      { id: 'A', text: '90%+ in guaranteed government bonds, high-yield cash, or real estate.', weights: { risk_aversion: 20, ego_protection: 12 } },
      { id: 'B', text: 'A balanced index fund mix (60/40 stocks and bonds).', weights: { risk_aversion: 0, ego_protection: 0 } },
      { id: 'C', text: 'High-growth individual equities, crypto, or private ventures.', weights: { risk_aversion: -20, ego_protection: -15 } },
      { id: 'D', text: 'I keep cash under the mattress or basic checking.', weights: { risk_aversion: 18, perfectionism_paralysis: 10 } },
    ]
  },
  {
    id: 'exp9_q8',
    experimentId: 'do_you_fear_failure',
    stepNumber: 8,
    targetDimensionId: 'perfectionism_paralysis',
    scenarioType: 'FEEDBACK_SEEKING',
    scenario: 'How do you feel when receiving critical feedback on work you poured your heart into?',
    question: 'Select your emotional baseline:',
    options: [
      { id: 'A', text: 'Defensive — I feel personally attacked and immediately defend my choices.', weights: { ego_protection: 20, perfectionism_paralysis: 16 } },
      { id: 'B', text: 'Grateful — direct feedback accelerates my learning curve.', weights: { ego_protection: -20, perfectionism_paralysis: -16 } },
      { id: 'C', text: 'Discouraged — I lose motivation to work on that project.', weights: { perfectionism_paralysis: 18, ego_protection: 15 } },
      { id: 'D', text: 'I smile nod polite, but ignore feedback I disagree with.', weights: { ego_protection: 10, perfectionism_paralysis: 8 } },
    ]
  },
  {
    id: 'exp9_q9',
    experimentId: 'do_you_fear_failure',
    stepNumber: 9,
    targetDimensionId: 'ego_protection',
    scenarioType: 'COMFORT_ZONE',
    scenario: 'When was the last time you attempted something where you were a complete beginner and risk looking foolish?',
    question: 'Select the timeframe:',
    options: [
      { id: 'A', text: 'In the past month — I routinely throw myself into uncomfortable waters.', weights: { risk_aversion: -20, ego_protection: -20 } },
      { id: 'B', text: '6 to 12 months ago.', weights: { risk_aversion: 0, ego_protection: 0 } },
      { id: 'C', text: 'Over 2 years ago — I prefer sticking to areas of established mastery.', weights: { risk_aversion: 18, ego_protection: 18 } },
      { id: 'D', text: 'I can\'t remember — I hate feeling incompetent.', weights: { ego_protection: 22, perfectionism_paralysis: 20 } },
    ]
  },
  {
    id: 'exp9_q10',
    experimentId: 'do_you_fear_failure',
    stepNumber: 10,
    targetDimensionId: 'risk_aversion',
    scenarioType: 'FAILURE_DEFINITIVE',
    scenario: 'Which definition of failure terrifies you the most?',
    question: 'Select your primary fear:',
    options: [
      { id: 'A', text: 'Public humiliation — proving to everyone that I wasn\'t good enough.', weights: { ego_protection: 22, perfectionism_paralysis: 18 } },
      { id: 'B', text: 'Financial ruin — losing safety, shelter, and resource independence.', weights: { risk_aversion: 22, ego_protection: 10 } },
      { id: 'C', text: 'Wasted time — spending years on a path that led nowhere.', weights: { perfectionism_paralysis: 16, risk_aversion: 12 } },
      { id: 'D', text: 'Regret — realizing on my deathbed that I never took the leap.', weights: { risk_aversion: -20, ego_protection: -20 } },
    ]
  }
];

export const fallbackExp10Manipulated: Question[] = [
  {
    id: 'exp10_q1',
    experimentId: 'how_easily_can_you_be_manipulated',
    stepNumber: 1,
    targetDimensionId: 'suggestibility',
    scenarioType: 'AUTHORITY_DEFERENCE',
    scenario: 'A charismatic speaker in a suit presents a complex investment thesis using high-sounding financial jargon and polished charts.',
    question: 'What is your immediate internal posture?',
    options: [
      { id: 'A', text: 'Impressed — their expertise and authority signal high credibility.', weights: { suggestibility: 18, authority_deference: 18 } },
      { id: 'B', text: 'Skeptical — jargon often disguises weak underlying business fundamentals.', weights: { suggestibility: -20, credulity_index: -18 } },
      { id: 'C', text: 'Interested, but waiting to read independent audit reports.', weights: { suggestibility: -10, credulity_index: -10 } },
      { id: 'D', text: 'Check online review forums to see what others think.', weights: { suggestibility: 10, authority_deference: 8 } },
    ]
  },
  {
    id: 'exp10_q2',
    experimentId: 'how_easily_can_you_be_manipulated',
    stepNumber: 2,
    targetDimensionId: 'credulity_index',
    scenarioType: 'URGENCY_PRESSURE',
    scenario: 'A hotel booking website displays a flashing red banner: "ONLY 1 ROOM LEFT AT THIS PRICE! 42 PEOPLE ARE VIEWING THIS RIGHT NOW!"',
    question: 'How does this impact your decision speed?',
    options: [
      { id: 'A', text: 'Enter credit card details immediately before the room vanishes.', weights: { suggestibility: 20, credulity_index: 18 } },
      { id: 'B', text: 'Ignore the banner completely — it is a classic artificial scarcity trick.', weights: { suggestibility: -20, credulity_index: -20 } },
      { id: 'C', text: 'Open another tab to search the hotel\'s direct phone number.', weights: { suggestibility: -12, credulity_index: -12 } },
      { id: 'D', text: 'Feel anxious but keep searching for cheaper alternatives.', weights: { suggestibility: 8, credulity_index: 8 } },
    ]
  },
  {
    id: 'exp10_q3',
    experimentId: 'how_easily_can_you_be_manipulated',
    stepNumber: 3,
    targetDimensionId: 'authority_deference',
    scenarioType: 'EXPERT_ENDORSEMENT',
    scenario: 'A doctor appearing in a lab coat on TV endorses a new dietary supplement.',
    question: 'What weight do you place on their advice?',
    options: [
      { id: 'A', text: 'High weight — medical professionals hold verified credentials.', weights: { authority_deference: 18, suggestibility: 15 } },
      { id: 'B', text: 'Zero weight — TV endorsements are paid promotional sponsorships.', weights: { authority_deference: -18, credulity_index: -18 } },
      { id: 'C', text: 'Check PubMed or official medical journal studies on the ingredient.', weights: { authority_deference: -10, credulity_index: -12 } },
      { id: 'D', text: 'Ask your personal family doctor during your next visit.', weights: { authority_deference: 5, suggestibility: 0 } },
    ]
  },
  {
    id: 'exp10_q4',
    experimentId: 'how_easily_can_you_be_manipulated',
    stepNumber: 4,
    targetDimensionId: 'suggestibility',
    scenarioType: 'FLATTERY_TRAP',
    scenario: 'A car salesperson smiles and says, "You look like someone who genuinely appreciates refined engineering rather than cheap mass market trash."',
    question: 'How do you feel in that moment?',
    options: [
      { id: 'A', text: 'Flattered — glad they recognize your taste and standards.', weights: { suggestibility: 18, credulity_index: 16 } },
      { id: 'B', text: 'On guard — recognizing ego-stroking as a sales tactic.', weights: { suggestibility: -18, credulity_index: -18 } },
      { id: 'C', text: 'Focus solely on asking for the vehicle\'s price breakdown sheet.', weights: { suggestibility: -10, credulity_index: -10 } },
      { id: 'D', text: 'Politely nod while continuing to inspect the car.', weights: { suggestibility: 0, credulity_index: 0 } },
    ]
  },
  {
    id: 'exp10_q5',
    experimentId: 'how_easily_can_you_be_manipulated',
    stepNumber: 5,
    targetDimensionId: 'credulity_index',
    scenarioType: 'TRAP_PARADOX',
    scenario: 'A viral video shows a miraculous 10-second hack that cleans burnt pans using only toothpaste and vinegar.',
    question: 'What is your reaction?',
    options: [
      { id: 'A', text: 'Try it immediately on your worst pan at home.', weights: { credulity_index: 18, suggestibility: 16 } },
      { id: 'B', text: 'Assume it\'s edited or fake for algorithm clicks.', weights: { credulity_index: -18, suggestibility: -16 } },
      { id: 'C', text: 'Read the top comments to see if others debunked it.', weights: { credulity_index: -5, suggestibility: 5 } },
      { id: 'D', text: 'Forward it to a family member who loves life hacks.', weights: { credulity_index: 10, suggestibility: 8 } },
    ]
  },
  {
    id: 'exp10_q6',
    experimentId: 'how_easily_can_you_be_manipulated',
    stepNumber: 6,
    targetDimensionId: 'authority_deference',
    scenarioType: 'POLICE_INSTRUCTION',
    scenario: 'An official-looking security guard tells you that you cannot walk on a public sidewalk and must take a 10-minute detour.',
    question: 'How do you respond?',
    options: [
      { id: 'A', text: 'Comply quietly without questioning their authority.', weights: { authority_deference: 20, suggestibility: 16 } },
      { id: 'B', text: 'Ask politely "Which specific regulation or emergency requires this detour?"', weights: { authority_deference: -18, suggestibility: -16 } },
      { id: 'C', text: 'Look around to see if other pedestrians are complying.', weights: { authority_deference: 5, suggestibility: 12 } },
      { id: 'D', text: 'Comply, but file an online inquiry with city management later.', weights: { authority_deference: 8, suggestibility: 0 } },
    ]
  },
  {
    id: 'exp10_q7',
    experimentId: 'how_easily_can_you_be_manipulated',
    stepNumber: 7,
    targetDimensionId: 'suggestibility',
    scenarioType: 'FOOT_IN_THE_DOOR',
    scenario: 'A street fundraiser asks if you have 10 seconds to sign a petition for clean water. Once you sign, they ask for a $20 monthly pledge.',
    question: 'Do you commit to the monthly pledge?',
    options: [
      { id: 'A', text: 'Yes — having signed the petition, saying no to $20 feels hypocritical.', weights: { suggestibility: 20, credulity_index: 18 } },
      { id: 'B', text: 'No — refuse firmly and walk away.', weights: { suggestibility: -20, credulity_index: -18 } },
      { id: 'C', text: 'Offer a one-time $2 coin instead of a recurring monthly subscription.', weights: { suggestibility: 2, credulity_index: 0 } },
      { id: 'D', text: 'Ask for their website link so you can research the charity at home.', weights: { suggestibility: -10, credulity_index: -10 } },
    ]
  },
  {
    id: 'exp10_q8',
    experimentId: 'how_easily_can_you_be_manipulated',
    stepNumber: 8,
    targetDimensionId: 'credulity_index',
    scenarioType: 'FAKE_NEWS_SENSATIONALISM',
    scenario: 'A dramatic headline pops up on your social feed: "GOVERNMENT SECRETLY PASSES NEW TAX ON SAVINGS ACCOUNTS!"',
    question: 'What is your instinct before sharing or reacting?',
    options: [
      { id: 'A', text: 'Feel immediate anger and share it to warn friends.', weights: { credulity_index: 22, suggestibility: 20 } },
      { id: 'B', text: 'Search primary government legislative records to verify official bill status.', weights: { credulity_index: -22, suggestibility: -20 } },
      { id: 'C', text: 'Check mainstream news outlets to see if covered elsewhere.', weights: { credulity_index: -10, suggestibility: -10 } },
      { id: 'D', text: 'Ignore sensational headlines altogether.', weights: { credulity_index: -15, suggestibility: -15 } },
    ]
  },
  {
    id: 'exp10_q9',
    experimentId: 'how_easily_can_you_be_manipulated',
    stepNumber: 9,
    targetDimensionId: 'authority_deference',
    scenarioType: 'SOCIAL_PROOF',
    scenario: 'You arrive at a new restaurant with 200 5-star reviews on an app, but the food you receive is distinctly bland and overcooked.',
    question: 'What do you conclude?',
    options: [
      { id: 'A', text: 'Assume the chef had an off-night since 200 people can\'t be wrong.', weights: { authority_deference: 16, suggestibility: 18 } },
      { id: 'B', text: 'Realize the restaurant likely purchased fake reviews or paid influencers.', weights: { credulity_index: -20, suggestibility: -18 } },
      { id: 'C', text: 'Send the food back to the kitchen immediately.', weights: { authority_deference: -12, suggestibility: -12 } },
      { id: 'D', text: 'Leave a 2-star review describing your actual dish experience.', weights: { suggestibility: -15, credulity_index: -15 } },
    ]
  },
  {
    id: 'exp10_q10',
    experimentId: 'how_easily_can_you_be_manipulated',
    stepNumber: 10,
    targetDimensionId: 'suggestibility',
    scenarioType: 'MANIPULATION_DEFENSE_INDEX',
    scenario: 'How would you rate your personal immunity against psychological persuasion and subtle manipulation tactics?',
    question: 'Select your self-assessment:',
    options: [
      { id: 'A', text: 'Near 100% immune — I analyze motives dissect every pitch.', weights: { suggestibility: -15, credulity_index: -15 } },
      { id: 'B', text: 'Vulnerable when emotional, tired, or in a rush.', weights: { suggestibility: 10, credulity_index: 8 } },
      { id: 'C', text: 'I trust people by default until proven wrong.', weights: { suggestibility: 18, credulity_index: 20 } },
      { id: 'D', text: 'Nobody is immune — systemic awareness is required.', weights: { suggestibility: -10, authority_deference: -10 } },
    ]
  }
];
