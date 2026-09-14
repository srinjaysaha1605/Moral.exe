import { Question } from '../../types/moral';

export const fallbackExp5Control: Question[] = [
  {
    id: 'exp5_q1',
    experimentId: 'are_you_a_control_freak',
    stepNumber: 1,
    targetDimensionId: 'micromanagement',
    scenarioType: 'GROUP_PROJECT',
    scenario: 'You are leading a 4-person team. One teammate submits slides that are functional but visually plain and formatted differently than your preferred layout.',
    question: 'What action do you take before presenting?',
    options: [
      { id: 'A', text: 'Spend 2 hours reformatting all their slides yourself to match your exact standard.', weights: { micromanagement: 20, chaos_intolerance: 18 } },
      { id: 'B', text: 'Present them as-is — content clarity matters more than visual perfection.', weights: { micromanagement: -18, chaos_intolerance: -16 } },
      { id: 'C', text: 'Send them a template and ask them to adjust the fonts if time permits.', weights: { micromanagement: 5, chaos_intolerance: 5 } },
      { id: 'D', text: 'Mention the formatting difference to the team for future reference.', weights: { micromanagement: -2, chaos_intolerance: 0 } },
    ]
  },
  {
    id: 'exp5_q2',
    experimentId: 'are_you_a_control_freak',
    stepNumber: 2,
    targetDimensionId: 'chaos_intolerance',
    scenarioType: 'TRIP_PLANNING',
    scenario: 'You are going on a weekend trip with friends. One friend offers to handle all the navigation and spontaneous stops.',
    question: 'How comfortable do you feel about this arrangement?',
    options: [
      { id: 'A', text: 'Uneasy — I need an explicit itinerary with mapped time slots.', weights: { chaos_intolerance: 20, micromanagement: 16 } },
      { id: 'B', text: 'Completely relaxed — spontaneity makes trips memorable.', weights: { chaos_intolerance: -20, micromanagement: -18 } },
      { id: 'C', text: 'Fine, as long as I can keep Google Maps open on my phone just in case.', weights: { chaos_intolerance: 10, micromanagement: 12 } },
      { id: 'D', text: 'I veto their offer and suggest co-planning the route together.', weights: { chaos_intolerance: 12, micromanagement: 14 } },
    ]
  },
  {
    id: 'exp5_q3',
    experimentId: 'are_you_a_control_freak',
    stepNumber: 3,
    targetDimensionId: 'autonomy_rigidity',
    scenarioType: 'KITCHEN_DELEGATION',
    scenario: 'A friend or partner is helping you cook dinner in your kitchen. They cut vegetables in a non-standard, diagonal shape.',
    question: 'What do you do?',
    options: [
      { id: 'A', text: 'Gently take the knife and show them "the proper way" to cut.', weights: { micromanagement: 18, autonomy_rigidity: 16 } },
      { id: 'B', text: 'Let them cut however they want — it all tastes the same when cooked.', weights: { micromanagement: -18, autonomy_rigidity: -16 } },
      { id: 'C', text: 'Internalize slight frustration but say nothing.', weights: { micromanagement: 8, chaos_intolerance: 10 } },
      { id: 'D', text: 'Assign them a non-prep task like setting the table instead.', weights: { micromanagement: 14, autonomy_rigidity: 12 } },
    ]
  },
  {
    id: 'exp5_q4',
    experimentId: 'are_you_a_control_freak',
    stepNumber: 4,
    targetDimensionId: 'micromanagement',
    scenarioType: 'UNSOLICITED_ADVICE',
    scenario: 'You watch someone struggle for 3 minutes trying to open a jar or solve a simple mechanical puzzle.',
    question: 'When do you intervene?',
    options: [
      { id: 'A', text: 'Step in within 10 seconds and do it for them.', weights: { micromanagement: 18, autonomy_rigidity: 15 } },
      { id: 'B', text: 'Wait until they explicitly ask for assistance.', weights: { micromanagement: -16, autonomy_rigidity: -15 } },
      { id: 'C', text: 'Offer a verbal tip without touching the item.', weights: { micromanagement: 2, autonomy_rigidity: 2 } },
      { id: 'D', text: 'Walk away so they don\'t feel pressured by an audience.', weights: { micromanagement: -10, autonomy_rigidity: -8 } },
    ]
  },
  {
    id: 'exp5_q5',
    experimentId: 'are_you_a_control_freak',
    stepNumber: 5,
    targetDimensionId: 'chaos_intolerance',
    scenarioType: 'TRAP_PARADOX',
    scenario: 'A last-minute storm cancels all flight connections for your vacation. You have 2 hours to completely rebook everything.',
    question: 'How do you handle the disruption?',
    options: [
      { id: 'A', text: 'Feel intense anxiety and anger at the loss of your structured plan.', weights: { chaos_intolerance: 20, micromanagement: 12 } },
      { id: 'B', text: 'Instantly pivot to "crisis management" mode and systematically rebook.', weights: { chaos_intolerance: 5, micromanagement: 15 } },
      { id: 'C', text: 'Embrace the chaos, grab a drink at the airport bar, and figure it out.', weights: { chaos_intolerance: -20, micromanagement: -18 } },
      { id: 'D', text: 'Delegate rebooking to the airline desk agent.', weights: { chaos_intolerance: -10, micromanagement: -12 } },
    ]
  },
  {
    id: 'exp5_q6',
    experimentId: 'are_you_a_control_freak',
    stepNumber: 6,
    targetDimensionId: 'autonomy_rigidity',
    scenarioType: 'FILE_ORGANIZATION',
    scenario: 'You open a shared desktop computer and notice desktop icons scattered completely at random with no folder structure.',
    question: 'What is your physical reaction?',
    options: [
      { id: 'A', text: 'Irritation — you feel an urge to create folders and align them immediately.', weights: { chaos_intolerance: 18, autonomy_rigidity: 18 } },
      { id: 'B', text: 'Indifference — as long as you can find your own file using search.', weights: { chaos_intolerance: -18, autonomy_rigidity: -16 } },
      { id: 'C', text: 'Clean up the desktop icons into neat grids.', weights: { chaos_intolerance: 12, micromanagement: 12 } },
      { id: 'D', text: 'Minimize all windows so you don\'t have to look at it.', weights: { chaos_intolerance: 5, autonomy_rigidity: 5 } },
    ]
  },
  {
    id: 'exp5_q7',
    experimentId: 'are_you_a_control_freak',
    stepNumber: 7,
    targetDimensionId: 'micromanagement',
    scenarioType: 'PASSENGER_SEAT',
    scenario: 'You are sitting in the passenger seat while someone else drives. They take a route that is 3 minutes longer than your preferred GPS path.',
    question: 'How do you react?',
    options: [
      { id: 'A', text: 'Correct their route choice aloud immediately.', weights: { micromanagement: 20, autonomy_rigidity: 18 } },
      { id: 'B', text: 'Say nothing and enjoy looking out the window.', weights: { micromanagement: -18, autonomy_rigidity: -16 } },
      { id: 'C', text: 'Casually mention "Oh, the highway route is usually faster."', weights: { micromanagement: 10, autonomy_rigidity: 10 } },
      { id: 'D', text: 'Quietly monitor the ETA on your phone.', weights: { micromanagement: 12, chaos_intolerance: 10 } },
    ]
  },
  {
    id: 'exp5_q8',
    experimentId: 'are_you_a_control_freak',
    stepNumber: 8,
    targetDimensionId: 'chaos_intolerance',
    scenarioType: 'SURPRISE_PARTY',
    scenario: 'Your friends organize a surprise event for your birthday, keeping all details completely secret until you arrive.',
    question: 'How do you feel in the days leading up to it?',
    options: [
      { id: 'A', text: 'Anxious — you hate not knowing what to wear or what to expect.', weights: { chaos_intolerance: 18, micromanagement: 15 } },
      { id: 'B', text: 'Thrilled — surprises demonstrate effort and love.', weights: { chaos_intolerance: -18, micromanagement: -16 } },
      { id: 'C', text: 'Try to subtly extract hints from friends to figure it out.', weights: { chaos_intolerance: 12, micromanagement: 14 } },
      { id: 'D', text: 'Neutral — as long as it doesn\'t run too late.', weights: { chaos_intolerance: 0, micromanagement: 0 } },
    ]
  },
  {
    id: 'exp5_q9',
    experimentId: 'are_you_a_control_freak',
    stepNumber: 9,
    targetDimensionId: 'autonomy_rigidity',
    scenarioType: 'DELEGATION_TRUST',
    scenario: 'When you delegate a significant task to someone else, how often do you check in on their progress?',
    question: 'Select your habits:',
    options: [
      { id: 'A', text: 'Multiple times a day — ensuring no mistakes slip through.', weights: { micromanagement: 20, chaos_intolerance: 18 } },
      { id: 'B', text: 'Only at agreed milestones or when they request help.', weights: { micromanagement: -18, chaos_intolerance: -16 } },
      { id: 'C', text: 'Once midway through to verify alignment.', weights: { micromanagement: -2, chaos_intolerance: 0 } },
      { id: 'D', text: 'I rarely delegate — it\'s faster to do it myself.', weights: { micromanagement: 16, autonomy_rigidity: 20 } },
    ]
  },
  {
    id: 'exp5_q10',
    experimentId: 'are_you_a_control_freak',
    stepNumber: 10,
    targetDimensionId: 'micromanagement',
    scenarioType: 'CORE_ATTITUDE',
    scenario: 'Which proverb captures your philosophy on life and execution?',
    question: 'Choose your motto:',
    options: [
      { id: 'A', text: '"If you want something done right, do it yourself."', weights: { micromanagement: 20, autonomy_rigidity: 20 } },
      { id: 'B', text: '"Go with the flow; flexibility beats structure."', weights: { micromanagement: -20, chaos_intolerance: -20 } },
      { id: 'C', text: '"Trust, but verify."', weights: { micromanagement: 8, chaos_intolerance: 10 } },
      { id: 'D', text: '"Order is the foundation of all good things."', weights: { chaos_intolerance: 15, micromanagement: 12 } },
    ]
  }
];

export const fallbackExp6Betrayal: Question[] = [
  {
    id: 'exp6_q1',
    experimentId: 'would_you_betray_someone',
    stepNumber: 1,
    targetDimensionId: 'pragmatic_loyalty',
    scenarioType: 'CAREER_AMBITION',
    scenario: 'You are up for a major promotion alongside your close workplace friend. You discover that your friend submitted a project with inflated metrics.',
    question: 'What action do you take?',
    options: [
      { id: 'A', text: 'Report the inflated metrics to HR to ensure a fair selection process.', weights: { pragmatic_loyalty: -20, self_preservation: 18 } },
      { id: 'B', text: 'Confront your friend privately and urge them to correct it themselves.', weights: { pragmatic_loyalty: 15, self_preservation: -10 } },
      { id: 'C', text: 'Say nothing and let management evaluate the submissions.', weights: { pragmatic_loyalty: 5, self_preservation: 5 } },
      { id: 'D', text: 'Use the information as leverage if your friend attempts to undercut you.', weights: { pragmatic_loyalty: -15, betrayal_propensity: 18 } },
    ]
  },
  {
    id: 'exp6_q2',
    experimentId: 'would_you_betray_someone',
    stepNumber: 2,
    targetDimensionId: 'self_preservation',
    scenarioType: 'SCAPEGOATING',
    scenario: 'Your team makes a severe error that loses a $100k client. Senior management demands to know who approved the flawed document. It was a joint decision, but your boss leans toward blaming your absent coworker.',
    question: 'How do you handle the interrogation?',
    options: [
      { id: 'A', text: 'Remain silent and allow the absent coworker to take the brunt of the blame.', weights: { betrayal_propensity: 18, self_preservation: 20 } },
      { id: 'B', text: 'Step forward explicitly and state that it was a joint team mistake.', weights: { betrayal_propensity: -20, pragmatic_loyalty: 20 } },
      { id: 'C', text: 'Clarify your exact individual contribution to distance yourself from the flaw.', weights: { betrayal_propensity: 10, self_preservation: 15 } },
      { id: 'D', text: 'Propose a free recovery plan without dwelling on past blame.', weights: { betrayal_propensity: -5, pragmatic_loyalty: 5 } },
    ]
  },
  {
    id: 'exp6_q3',
    experimentId: 'would_you_betray_someone',
    stepNumber: 3,
    targetDimensionId: 'betrayal_propensity',
    scenarioType: 'WHISTLEBLOWING',
    scenario: 'You learn that your company is secretly dumping non-toxic waste illegally to cut costs. Exposing them will destroy your company stock options.',
    question: 'What do you do?',
    options: [
      { id: 'A', text: 'Leaked evidence anonymously to environmental regulators.', weights: { betrayal_propensity: 15, pragmatic_loyalty: -18 } },
      { id: 'B', text: 'Keep quiet until you have cashed out your stock options, then resign.', weights: { betrayal_propensity: 18, self_preservation: 18 } },
      { id: 'C', text: 'Raise concerns internally through legal counsel.', weights: { betrayal_propensity: -10, pragmatic_loyalty: 10 } },
      { id: 'D', text: 'Mind your own business — corporate compliance is not your job.', weights: { betrayal_propensity: 5, self_preservation: 10 } },
    ]
  },
  {
    id: 'exp6_q4',
    experimentId: 'would_you_betray_someone',
    stepNumber: 4,
    targetDimensionId: 'pragmatic_loyalty',
    scenarioType: 'CONFIDENTIAL_SECRET',
    scenario: 'A close friend confides a secret that could ruin another friend’s reputation if revealed.',
    question: 'Under what condition would you break confidentiality?',
    options: [
      { id: 'A', text: 'Only if keeping the secret puts someone in physical danger.', weights: { pragmatic_loyalty: 18, betrayal_propensity: -18 } },
      { id: 'B', text: 'If revealing it protects my own standing or personal safety.', weights: { pragmatic_loyalty: -15, self_preservation: 18 } },
      { id: 'C', text: 'If the affected friend asks me directly.', weights: { pragmatic_loyalty: -5, betrayal_propensity: 8 } },
      { id: 'D', text: 'Never — secrets are sacred regardless of consequences.', weights: { pragmatic_loyalty: 20, betrayal_propensity: -20 } },
    ]
  },
  {
    id: 'exp6_q5',
    experimentId: 'would_you_betray_someone',
    stepNumber: 5,
    targetDimensionId: 'self_preservation',
    scenarioType: 'TRAP_PARADOX',
    scenario: 'You are caught in an administrative audit for an expense claim mistake. Including your supervisor’s verbal approval shields you completely, but will get them fired.',
    question: 'Do you throw your supervisor under the bus?',
    options: [
      { id: 'A', text: 'Provide the written timeline showing the supervisor’s verbal nod.', weights: { betrayal_propensity: 18, self_preservation: 20 } },
      { id: 'B', text: 'Take full personal blame for the oversight to protect your supervisor.', weights: { betrayal_propensity: -20, pragmatic_loyalty: 20 } },
      { id: 'C', text: 'Offer to repay the money personally out of pocket without naming names.', weights: { betrayal_propensity: -10, pragmatic_loyalty: 12 } },
      { id: 'D', text: 'Consult a lawyer before responding to the audit.', weights: { betrayal_propensity: 5, self_preservation: 10 } },
    ]
  },
  {
    id: 'exp6_q6',
    experimentId: 'would_you_betray_someone',
    stepNumber: 6,
    targetDimensionId: 'betrayal_propensity',
    scenarioType: 'COMPETITOR_OFFER',
    scenario: 'A direct competitor offers you double your salary if you bring over your current company’s client database.',
    question: 'What is your response?',
    options: [
      { id: 'A', text: 'Accept the job and transfer the non-patented client list.', weights: { betrayal_propensity: 22, self_preservation: 18 } },
      { id: 'B', text: 'Reject the offer immediately — stealing IP violates your ethics.', weights: { betrayal_propensity: -20, pragmatic_loyalty: 20 } },
      { id: 'C', text: 'Accept the salary raise but refuse to bring any client data.', weights: { betrayal_propensity: -5, self_preservation: 10 } },
      { id: 'D', text: 'Inform your current boss to leverage a matching counter-offer.', weights: { betrayal_propensity: 8, self_preservation: 14 } },
    ]
  },
  {
    id: 'exp6_q7',
    experimentId: 'would_you_betray_someone',
    stepNumber: 7,
    targetDimensionId: 'pragmatic_loyalty',
    scenarioType: 'FRIENDSHIP_TEST',
    scenario: 'Your long-time business partner makes an offensive comment online that causes a public boycott.',
    question: 'How do you handle your partnership?',
    options: [
      { id: 'A', text: 'Publicly sever ties and buy out their share immediately.', weights: { pragmatic_loyalty: -18, self_preservation: 18 } },
      { id: 'B', text: 'Stand by them publicly while helping them craft a sincere apology.', weights: { pragmatic_loyalty: 20, betrayal_propensity: -18 } },
      { id: 'C', text: 'Issue a neutral statement focusing on company operations.', weights: { pragmatic_loyalty: 0, self_preservation: 8 } },
      { id: 'D', text: 'Wait 72 hours for news coverage to die down before acting.', weights: { pragmatic_loyalty: -5, self_preservation: 10 } },
    ]
  },
  {
    id: 'exp6_q8',
    experimentId: 'would_you_betray_someone',
    stepNumber: 8,
    targetDimensionId: 'self_preservation',
    scenarioType: 'POLITICAL_REALIGNMENT',
    scenario: 'A new CEO takes over who despises your mentor. To safeguard your career, you are expected to align with the CEO’s new agenda.',
    question: 'What is your approach?',
    options: [
      { id: 'A', text: 'Distance yourself from your mentor in meetings and support the CEO.', weights: { betrayal_propensity: 18, self_preservation: 18 } },
      { id: 'B', text: 'Maintain vocal loyalty to your mentor regardless of career risk.', weights: { betrayal_propensity: -20, pragmatic_loyalty: 20 } },
      { id: 'C', text: 'Act as a diplomatic bridge between your mentor and the CEO.', weights: { betrayal_propensity: -2, pragmatic_loyalty: 8 } },
      { id: 'D', text: 'Quietly look for another job while keeping your head down.', weights: { betrayal_propensity: 5, self_preservation: 12 } },
    ]
  },
  {
    id: 'exp6_q9',
    experimentId: 'would_you_betray_someone',
    stepNumber: 9,
    targetDimensionId: 'betrayal_propensity',
    scenarioType: 'CONFESSION',
    scenario: 'If you were guaranteed 100% immunity and $1 Million dollars, would you testify against a close acquaintance involved in financial fraud?',
    question: 'Select your choice:',
    options: [
      { id: 'A', text: 'Yes — financial fraud hurts real people; justice comes first.', weights: { betrayal_propensity: 15, self_preservation: 18 } },
      { id: 'B', text: 'No — personal loyalty supersedes financial rewards.', weights: { betrayal_propensity: -20, pragmatic_loyalty: 20 } },
      { id: 'C', text: 'Only if the crime harmed innocent victims directly.', weights: { betrayal_propensity: 0, pragmatic_loyalty: 5 } },
      { id: 'D', text: 'Yes, but I would give part of the money to their family.', weights: { betrayal_propensity: 12, self_preservation: 12 } },
    ]
  },
  {
    id: 'exp6_q10',
    experimentId: 'would_you_betray_someone',
    stepNumber: 10,
    targetDimensionId: 'pragmatic_loyalty',
    scenarioType: 'LOYALTY_PHILOSOPHY',
    scenario: 'Where do you draw the line on personal loyalty?',
    question: 'Choose your fundamental rule:',
    options: [
      { id: 'A', text: 'Loyalty is absolute until someone betrays me first.', weights: { pragmatic_loyalty: 20, betrayal_propensity: -15 } },
      { id: 'B', text: 'Loyalty is conditional on mutual benefit and shared values.', weights: { pragmatic_loyalty: -10, self_preservation: 15 } },
      { id: 'C', text: 'Self-preservation is a biological necessity; everyone looks out for #1.', weights: { betrayal_propensity: 18, self_preservation: 20 } },
      { id: 'D', text: 'Principles matter more than loyalty to specific individuals.', weights: { pragmatic_loyalty: -15, betrayal_propensity: 0 } },
    ]
  }
];
