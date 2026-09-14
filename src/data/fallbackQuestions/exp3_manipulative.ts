import { Question } from '../../types/moral';

export const fallbackExp3Manipulative: Question[] = [
  {
    id: 'exp3_q1',
    experimentId: 'how_manipulative_are_you',
    stepNumber: 1,
    targetDimensionId: 'machiavellianism',
    scenarioType: 'RESOURCE_ALLOCATION',
    scenario: 'You want your project idea approved over a rival colleague’s proposal. You discover that your boss dislikes long emails.',
    question: 'How do you format your proposal deliverable?',
    options: [
      { id: 'A', text: 'Send a 1-page bulleted summary while leaking a 30-page complex PDF from your rival.', weights: { machiavellianism: 18, strategic_influence: 15 } },
      { id: 'B', text: 'Focus purely on making your proposal as concise and compelling as possible.', weights: { machiavellianism: -5, strategic_influence: 10 } },
      { id: 'C', text: 'Offer to present both ideas in a joint meeting so the boss can judge fairly.', weights: { machiavellianism: -15, strategic_influence: -10 } },
      { id: 'D', text: 'Informally talk to key stakeholders before sending the official email.', weights: { machiavellianism: 10, strategic_influence: 12 } },
    ]
  },
  {
    id: 'exp3_q2',
    experimentId: 'how_manipulative_are_you',
    stepNumber: 2,
    targetDimensionId: 'strategic_influence',
    scenarioType: 'GROUP_DECISION',
    scenario: 'Your friend group is deciding on a holiday destination. You strongly prefer Beach X, but two friends lean toward Mountain Y.',
    question: 'What strategy do you employ?',
    options: [
      { id: 'A', text: 'Casually forward news articles highlighting bad weather or flight delays at Mountain Y.', weights: { machiavellianism: 16, strategic_influence: 15 } },
      { id: 'B', text: 'Enthusiastically share photos of Beach X and offer to organize the itinerary.', weights: { machiavellianism: 2, strategic_influence: 12 } },
      { id: 'C', text: 'Put it to a simple democratic vote and accept whichever location wins.', weights: { machiavellianism: -12, strategic_influence: -10 } },
      { id: 'D', text: 'Convinces one undecided friend in private first to secure a majority.', weights: { machiavellianism: 12, strategic_influence: 14 } },
    ]
  },
  {
    id: 'exp3_q3',
    experimentId: 'how_manipulative_are_you',
    stepNumber: 3,
    targetDimensionId: 'emotional_leverage',
    scenarioType: 'GUILT_TRIPPING',
    scenario: 'A team member forgets to complete a critical task, forcing you to work late on a Friday evening.',
    question: 'How do you bring it up on Monday morning?',
    options: [
      { id: 'A', text: 'Subtly mention how exhausting your weekend was because of their missed deadline.', weights: { emotional_leverage: 18, machiavellianism: 15 } },
      { id: 'B', text: 'Directly discuss setting up automated calendar alerts to prevent a repeat.', weights: { emotional_leverage: -15, strategic_influence: 8 } },
      { id: 'C', text: 'Say nothing and log the incident quietly in your personal records.', weights: { emotional_leverage: 5, machiavellianism: 10 } },
      { id: 'D', text: 'Bring it up in front of the team during morning standup.', weights: { emotional_leverage: 10, machiavellianism: 8 } },
    ]
  },
  {
    id: 'exp3_q4',
    experimentId: 'how_manipulative_are_you',
    stepNumber: 4,
    targetDimensionId: 'machiavellianism',
    scenarioType: 'FAVOR_RECIPROCITY',
    scenario: 'You perform a significant favor for a coworker without them asking.',
    question: 'What is your primary motive?',
    options: [
      { id: 'A', text: 'Creating leverage you can draw upon when you need a favor in the future.', weights: { machiavellianism: 18, strategic_influence: 16 } },
      { id: 'B', text: 'Simply helping out a teammate when you had extra bandwidth.', weights: { machiavellianism: -18, strategic_influence: -12 } },
      { id: 'C', text: 'Building overall goodwill within the department.', weights: { machiavellianism: 2, strategic_influence: 8 } },
      { id: 'D', text: 'Ensuring your efficiency is noticed by department leadership.', weights: { machiavellianism: 10, strategic_influence: 12 } },
    ]
  },
  {
    id: 'exp3_q5',
    experimentId: 'how_manipulative_are_you',
    stepNumber: 5,
    targetDimensionId: 'emotional_leverage',
    scenarioType: 'TRAP_PARADOX',
    scenario: 'You notice two colleagues having a heated argument over a mistake. You know the exact solution that would end the argument instantly.',
    question: 'When do you step in?',
    options: [
      { id: 'A', text: 'Wait until both are exhausted, then offer the solution so both feel indebted to you.', weights: { machiavellianism: 20, emotional_leverage: 18 } },
      { id: 'B', text: 'Intervene immediately and explain the solution calmly.', weights: { machiavellianism: -15, emotional_leverage: -12 } },
      { id: 'C', text: 'Mind your own business unless directly asked for help.', weights: { machiavellianism: -5, emotional_leverage: -5 } },
      { id: 'D', text: 'Send the solution via email to their manager.', weights: { machiavellianism: 12, emotional_leverage: 8 } },
    ]
  },
  {
    id: 'exp3_q6',
    experimentId: 'how_manipulative_are_you',
    stepNumber: 6,
    targetDimensionId: 'strategic_influence',
    scenarioType: 'BARGAINING',
    scenario: 'You are negotiating the price of a second-hand item online. The seller seems eager to make a quick sale.',
    question: 'How do you structure your negotiation tactic?',
    options: [
      { id: 'A', text: 'Point out non-existent minor defects to lower their price expectation dramatically.', weights: { machiavellianism: 16, strategic_influence: 15 } },
      { id: 'B', text: 'Make a firm cash offer at 20% below listing and state it expires in 1 hour.', weights: { machiavellianism: 8, strategic_influence: 14 } },
      { id: 'C', text: 'Ask what their absolute lowest price is and agree if reasonable.', weights: { machiavellianism: -12, strategic_influence: -8 } },
      { id: 'D', text: 'Pay the listed price if you believe it is fair.', weights: { machiavellianism: -18, strategic_influence: -15 } },
    ]
  },
  {
    id: 'exp3_q7',
    experimentId: 'how_manipulative_are_you',
    stepNumber: 7,
    targetDimensionId: 'emotional_leverage',
    scenarioType: 'FEIGNED_INCOMPETENCE',
    scenario: 'You are assigned a tedious routine administrative task that you thoroughly dislike.',
    question: 'How do you handle the assignment?',
    options: [
      { id: 'A', text: 'Do it deliberately slowly or clumsily so others take it over next time.', weights: { machiavellianism: 18, emotional_leverage: 16 } },
      { id: 'B', text: 'Complete it quickly and request a meeting to discuss redistributing routine work.', weights: { machiavellianism: -10, strategic_influence: 10 } },
      { id: 'C', text: 'Delegate parts of it to junior staff or interns.', weights: { machiavellianism: 10, strategic_influence: 10 } },
      { id: 'D', text: 'Automate it with a script without telling anyone.', weights: { machiavellianism: 5, strategic_influence: 8 } },
    ]
  },
  {
    id: 'exp3_q8',
    experimentId: 'how_manipulative_are_you',
    stepNumber: 8,
    targetDimensionId: 'machiavellianism',
    scenarioType: 'CREDIT_SHARING',
    scenario: 'A junior employee comes up with a brilliant idea during a casual 1-on-1 coffee chat with you.',
    question: 'How do you present this idea to senior leadership?',
    options: [
      { id: 'A', text: 'Present the idea as a collaborative joint initiative you co-developed.', weights: { machiavellianism: 14, strategic_influence: 12 } },
      { id: 'B', text: 'Give full explicit credit to the junior employee in front of leadership.', weights: { machiavellianism: -18, strategic_influence: -10 } },
      { id: 'C', text: 'Encourage the junior employee to present it directly themselves.', weights: { machiavellianism: -15, strategic_influence: -12 } },
      { id: 'D', text: 'Pitch it as your own idea and assign the junior employee execution tasks.', weights: { machiavellianism: 22, strategic_influence: 18 } },
    ]
  },
  {
    id: 'exp3_q9',
    experimentId: 'how_manipulative_are_you',
    stepNumber: 9,
    targetDimensionId: 'strategic_influence',
    scenarioType: 'FLATTERY',
    scenario: 'You need an urgent exception approved by a notoriously difficult compliance officer.',
    question: 'What opening approach do you use?',
    options: [
      { id: 'A', text: 'Praise their reputation for thoroughness and frame your request as seeking their expert advice.', weights: { machiavellianism: 15, strategic_influence: 18 } },
      { id: 'B', text: 'State the official rule clause and attach all requisite documentation.', weights: { machiavellianism: -10, strategic_influence: 0 } },
      { id: 'C', text: 'Ask your manager to reach out on your behalf.', weights: { machiavellianism: 0, strategic_influence: 5 } },
      { id: 'D', text: 'Bring artisanal coffee or snacks to their desk before asking.', weights: { machiavellianism: 18, emotional_leverage: 15 } },
    ]
  },
  {
    id: 'exp3_q10',
    experimentId: 'how_manipulative_are_you',
    stepNumber: 10,
    targetDimensionId: 'machiavellianism',
    scenarioType: 'PHILOSOPHICAL_CORE',
    scenario: 'Which statement aligns closest with your worldview regarding interpersonal relationships?',
    question: 'Select the statement that resonates most:',
    options: [
      { id: 'A', text: 'Most people are guided by self-interest; understanding their levers is essential for success.', weights: { machiavellianism: 20, strategic_influence: 16 } },
      { id: 'B', text: 'Sincerity and direct transparency ultimately yield the strongest long-term bonds.', weights: { machiavellianism: -20, strategic_influence: -15 } },
      { id: 'C', text: 'Adaptability and tact are necessary virtues in a complex world.', weights: { machiavellianism: 5, strategic_influence: 10 } },
      { id: 'D', text: 'Strategy should only be used defensively to protect oneself from others.', weights: { machiavellianism: 0, strategic_influence: 5 } },
    ]
  }
];

export const fallbackExp4Validation: Question[] = [
  {
    id: 'exp4_q1',
    experimentId: 'do_you_seek_validation',
    stepNumber: 1,
    targetDimensionId: 'approval_dependency',
    scenarioType: 'SOCIAL_MEDIA',
    scenario: 'You post a photo or piece of writing you are personally proud of online. After 3 hours, it has received zero likes or comments.',
    question: 'What is your reaction?',
    options: [
      { id: 'A', text: 'Delete the post — if it didn\'t land, there is no point keeping it up.', weights: { approval_dependency: 18, external_mirroring: 15 } },
      { id: 'B', text: 'Leave it up without giving the engagement count a second thought.', weights: { approval_dependency: -18, external_mirroring: -15 } },
      { id: 'C', text: 'Feel a slight sting of self-doubt and check if the algorithm hid it.', weights: { approval_dependency: 10, external_mirroring: 10 } },
      { id: 'D', text: 'Send the link directly to close friends asking them to check it out.', weights: { approval_dependency: 15, external_mirroring: 12 } },
    ]
  },
  {
    id: 'exp4_q2',
    experimentId: 'do_you_seek_validation',
    stepNumber: 2,
    targetDimensionId: 'external_mirroring',
    scenarioType: 'WARDROBE_CHOICE',
    scenario: 'You wear a bold outfit you love to a casual gathering. Someone makes a subtle sarcastic comment about your style choice.',
    question: 'How do you feel for the rest of the evening?',
    options: [
      { id: 'A', text: 'Feel self-conscious and wish you had worn something ordinary.', weights: { external_mirroring: 18, approval_dependency: 16 } },
      { id: 'B', text: 'Laugh it off and wear the outfit with even greater confidence.', weights: { external_mirroring: -16, approval_dependency: -18 } },
      { id: 'C', text: 'Quietly observe what others are wearing to gauge the room standard.', weights: { external_mirroring: 12, approval_dependency: 8 } },
      { id: 'D', text: 'Avoid standing near the person who made the comment.', weights: { external_mirroring: 8, approval_dependency: 10 } },
    ]
  },
  {
    id: 'exp4_q3',
    experimentId: 'do_you_seek_validation',
    stepNumber: 3,
    targetDimensionId: 'approval_dependency',
    scenarioType: 'PROJECT_FEEDBACK',
    scenario: 'Your manager reviews a report you worked on for a week and says "It\'s fine, thanks" with no additional enthusiasm or praise.',
    question: 'What is your internal conclusion?',
    options: [
      { id: 'A', text: 'Infer that "fine" means mediocre and feel disappointed in your work.', weights: { approval_dependency: 18, external_mirroring: 14 } },
      { id: 'B', text: 'Satisfied that the requirements were met and move on to the next task.', weights: { approval_dependency: -16, external_mirroring: -12 } },
      { id: 'C', text: 'Follow up later asking for specific constructive critique to improve.', weights: { approval_dependency: 0, external_mirroring: -5 } },
      { id: 'D', text: 'Mention how much effort you put into it to see if they reconsider.', weights: { approval_dependency: 15, external_mirroring: 12 } },
    ]
  },
  {
    id: 'exp4_q4',
    experimentId: 'do_you_seek_validation',
    stepNumber: 4,
    targetDimensionId: 'external_mirroring',
    scenarioType: 'OPINION_CONFORMITY',
    scenario: 'In a group of 5 friends, everyone enthusiastically praises a new movie that you personally found boring and uninspired.',
    question: 'When asked for your opinion, what do you say?',
    options: [
      { id: 'A', text: 'Agree that it had great moments to avoid dampening the group mood.', weights: { external_mirroring: 18, approval_dependency: 15 } },
      { id: 'B', text: 'State candidly that you didn\'t enjoy it and explain why.', weights: { external_mirroring: -18, approval_dependency: -16 } },
      { id: 'C', text: 'Give a neutral response like "The visuals were interesting."', weights: { external_mirroring: 10, approval_dependency: 8 } },
      { id: 'D', text: 'Wait to see if anyone else voices criticism before speaking up.', weights: { external_mirroring: 14, approval_dependency: 12 } },
    ]
  },
  {
    id: 'exp4_q5',
    experimentId: 'do_you_seek_validation',
    stepNumber: 5,
    targetDimensionId: 'approval_dependency',
    scenarioType: 'TRAP_PARADOX',
    scenario: 'You complete a difficult solo challenge (e.g., running a marathon or finishing a major creative project). No one else will ever know you did it.',
    question: 'How rewarding does the achievement feel to you?',
    options: [
      { id: 'A', text: 'Significantly less rewarding — sharing achievements gives them real meaning.', weights: { approval_dependency: 20, external_mirroring: 18 } },
      { id: 'B', text: '100% as rewarding — personal mastery is its own complete reward.', weights: { approval_dependency: -20, external_mirroring: -18 } },
      { id: 'C', text: 'Rewarding, but you will likely mention it casually in conversation later.', weights: { approval_dependency: 8, external_mirroring: 10 } },
      { id: 'D', text: 'You would take a photo or keep a token as personal proof.', weights: { approval_dependency: 0, external_mirroring: 0 } },
    ]
  },
  {
    id: 'exp4_q6',
    experimentId: 'do_you_seek_validation',
    stepNumber: 6,
    targetDimensionId: 'external_mirroring',
    scenarioType: 'DECISION_CONSULTATION',
    scenario: 'You are deciding whether to buy a new laptop or redecorate your bedroom.',
    question: 'How many people do you consult before making the final decision?',
    options: [
      { id: 'A', text: '3 or more — getting consensus from friends/family ensures a good choice.', weights: { approval_dependency: 16, external_mirroring: 18 } },
      { id: 'B', text: '0 — I research specifications independently and decide on my own.', weights: { approval_dependency: -18, external_mirroring: -16 } },
      { id: 'C', text: '1 trusted person just to double check.', weights: { approval_dependency: -2, external_mirroring: 2 } },
      { id: 'D', text: 'Post a poll on social media to see what the crowd thinks.', weights: { approval_dependency: 18, external_mirroring: 20 } },
    ]
  },
  {
    id: 'exp4_q7',
    experimentId: 'do_you_seek_validation',
    stepNumber: 7,
    targetDimensionId: 'approval_dependency',
    scenarioType: 'REJECTION_RECOVERY',
    scenario: 'Someone you met recently doesn\'t reply to your friendly text message.',
    question: 'Where does your mind go?',
    options: [
      { id: 'A', text: 'Re-reading your text to see if you said something weird or off-putting.', weights: { approval_dependency: 18, external_mirroring: 15 } },
      { id: 'B', text: 'Assuming they are simply busy and forgetting about it.', weights: { approval_dependency: -16, external_mirroring: -14 } },
      { id: 'C', text: 'Deciding they aren\'t worth your energy anyway.', weights: { approval_dependency: -5, external_mirroring: -5 } },
      { id: 'D', text: 'Sending a follow-up question the next day.', weights: { approval_dependency: 8, external_mirroring: 5 } },
    ]
  },
  {
    id: 'exp4_q8',
    experimentId: 'do_you_seek_validation',
    stepNumber: 8,
    targetDimensionId: 'external_mirroring',
    scenarioType: 'ACCOMPLISHMENT_ANNOUNCEMENT',
    scenario: 'You receive a unexpected pay raise or promotion at work.',
    question: 'Who is the first person you inform?',
    options: [
      { id: 'A', text: 'Post an announcement on professional networks or social media.', weights: { approval_dependency: 18, external_mirroring: 18 } },
      { id: 'B', text: 'Tell your partner or closest confidant in private.', weights: { approval_dependency: -10, external_mirroring: -10 } },
      { id: 'C', text: 'Keep it to yourself until official company announcements go out.', weights: { approval_dependency: -15, external_mirroring: -15 } },
      { id: 'D', text: 'Treat yourself to a nice meal without making a big deal out of it.', weights: { approval_dependency: -12, external_mirroring: -12 } },
    ]
  },
  {
    id: 'exp4_q9',
    experimentId: 'do_you_seek_validation',
    stepNumber: 9,
    targetDimensionId: 'approval_dependency',
    scenarioType: 'SELF_CRITICISM',
    scenario: 'When you make a minor mistake in public (e.g., dropping a tray or stumbling over words), how long does the awkwardness linger in your head?',
    question: 'Select the timeframe:',
    options: [
      { id: 'A', text: 'Hours or days — I keep replaying the moment in my head.', weights: { approval_dependency: 20, external_mirroring: 18 } },
      { id: 'B', text: 'A few minutes at most — people forget instantly.', weights: { approval_dependency: -18, external_mirroring: -16 } },
      { id: 'C', text: 'Until someone laughs or makes light of it.', weights: { approval_dependency: 10, external_mirroring: 12 } },
      { id: 'D', text: 'I crack a self-deprecating joke right away to disarm the tension.', weights: { approval_dependency: 8, external_mirroring: 10 } },
    ]
  },
  {
    id: 'exp4_q10',
    experimentId: 'do_you_seek_validation',
    stepNumber: 10,
    targetDimensionId: 'external_mirroring',
    scenarioType: 'CORE_MOTIVATION',
    scenario: 'Which of these outcomes feels most satisfying to you personally?',
    question: 'Choose your priority:',
    options: [
      { id: 'A', text: 'Being recognized and admired as an exceptional talent by peers.', weights: { approval_dependency: 20, external_mirroring: 20 } },
      { id: 'B', text: 'Quietly mastering a complex craft to your own internal standard.', weights: { approval_dependency: -20, external_mirroring: -20 } },
      { id: 'C', text: 'Building comfortable financial security and peace of mind.', weights: { approval_dependency: -5, external_mirroring: -5 } },
      { id: 'D', text: 'Making a positive difference in other people\'s lives.', weights: { approval_dependency: 2, external_mirroring: -5 } },
    ]
  }
];
