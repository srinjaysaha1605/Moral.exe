import { ExperimentConfig } from '../types/moral';
import { fallbackExp1Racist } from './fallbackQuestions/exp1_racist';
import { fallbackExp2Liar } from './fallbackQuestions/exp2_liar';
import { fallbackExp3Manipulative, fallbackExp4Validation } from './fallbackQuestions/exp3_manipulative';
import { fallbackExp5Control, fallbackExp6Betrayal } from './fallbackQuestions/exp5_control';
import { fallbackExp7Empathy, fallbackExp8Selfish } from './fallbackQuestions/exp7_empathy';
import { fallbackExp9Failure, fallbackExp10Manipulated } from './fallbackQuestions/exp9_failure';
import { fallbackExp11Freewill, fallbackExp12Friendship } from './fallbackQuestions/exp11_freewill';
import { fallbackExp13Status, fallbackExp14Survival } from './fallbackQuestions/exp13_status';

export const EXPERIMENTS: ExperimentConfig[] = [
  {
    id: 'am_i_racist',
    title: 'AM I RACIST?',
    tagline: 'Unconscious Outgroup Bias & Micro-Inference Probe',
    category: 'BIAS & PREJUDICE',
    badgeSymbol: '⚙️',
    description: 'Measures subtle, unstated biases toward outgroups, accents, foreign names, and institutional norms through high-velocity decision choices.',
    dimensions: [
      { id: 'implicit_bias', name: 'Implicit Outgroup Bias', description: 'Tendency to assign higher threat or lower competence based on demographic cues.', initialScore: 50 },
      { id: 'outgroup_trust', name: 'Outgroup Trust Index', description: 'Baseline willingness to extend credulity and comfort to unfamiliar profiles.', initialScore: 50 },
      { id: 'cultural_relativism', name: 'Cultural Adaptability', description: 'Flexibility when encountering non-standard social habits and communication styles.', initialScore: 50 },
    ],
    scenarioTypes: ['CREDIBILITY_EVALUATION', 'NEIGHBORHOOD_ASSESSMENT', 'OFFICE_INTERACTION', 'COMMUNITY_SAFETY', 'SOCIAL_NORM', 'CRIME_REPORT'],
    archetypes: [
      {
        id: 'the_egalitarian_idealist',
        name: 'THE EGALITARIAN ABSOLUTIST',
        tagline: 'Zero-Tolerance Outgroup Bias Matrix',
        description: 'Your choices demonstrate an active, conscious effort to neutralize implicit outgroup bias, prioritizing objective data over demographic assumptions.',
        rules: [
          { dimensionId: 'implicit_bias', operator: '<', value: 35 },
          { dimensionId: 'outgroup_trust', operator: '>=', value: 65 },
        ],
        accentColor: '#10B981',
      },
      {
        id: 'the_pragmatic_tribalist',
        name: 'THE INGROUP DEFENDER',
        tagline: 'Elevated Familiarity Bias Matrix',
        description: 'Your responses reveal a noticeable safety preference for familiar cultural signals, institutional pedigree, and insular communication patterns.',
        rules: [
          { dimensionId: 'implicit_bias', operator: '>=', value: 65 },
        ],
        accentColor: '#EF4444',
      },
      {
        id: 'the_analytical_observer',
        name: 'THE COGNITIVE PRAGMATIST',
        tagline: 'Context-Bound Outgroup Neutrality',
        description: 'You attempt to evaluate choices through procedural metrics, though micro-biases emerge under high-uncertainty scenarios.',
        rules: [],
        accentColor: '#F59E0B',
      },
    ],
    contradictionPatterns: [
      {
        id: 'racist_contradiction_1',
        description: 'High stated equality but high implicit bias under pressure',
        check: (scores) => (scores.cultural_relativism ?? 50) >= 60 && (scores.implicit_bias ?? 50) >= 65,
        template: 'You declared strong commitment to cultural open-mindedness, BUT under high-velocity hiring and safety choices, your decisions favored traditional ingroup credentials.',
      },
    ],
    fallbackQuestions: fallbackExp1Racist,
  },
  {
    id: 'are_you_a_liar',
    title: 'ARE YOU A LIAR?',
    tagline: 'Deception Stratigraphy & Tactical Truth Matrix',
    category: 'INTEGRITY & DECEPTION',
    badgeSymbol: '🎭',
    description: 'Calculates your frequency of micro-deceptions, self-justifications, and social fabrications across high-stakes social and financial scenarios.',
    dimensions: [
      { id: 'deception_index', name: 'Deception Propensity', description: 'Frequency of employing active lies or partial truths to smooth friction or gain advantage.', initialScore: 50 },
      { id: 'tactical_honesty', name: 'Tactical Transparency', description: 'Commitment to literal truth even when personally inconvenient or uncomfortable.', initialScore: 50 },
      { id: 'self_justification', name: 'Rationalization Velocity', description: 'Ease of convincing yourself that dishonesty was morally necessary or harmless.', initialScore: 50 },
    ],
    scenarioTypes: ['TACTICAL_TRUTH', 'CV_INFLATION', 'ACCIDENTAL_DAMAGE', 'LATE_ARRIVAL', 'GOSSIP_CONFIRMATION', 'PERFORMANCE_REVIEW'],
    archetypes: [
      {
        id: 'the_truth_purIST',
        name: 'THE LITERAL TRUTHTELLER',
        tagline: 'Zero-Tolerance Deception Profile',
        description: 'You maintain strict commitment to factual accuracy regardless of social friction, discomfort, or minor personal losses.',
        rules: [
          { dimensionId: 'deception_index', operator: '<', value: 30 },
          { dimensionId: 'tactical_honesty', operator: '>=', value: 70 },
        ],
        accentColor: '#06B6D4',
      },
      {
        id: 'the_social_architect',
        name: 'THE TACTICAL FABRICATOR',
        tagline: 'Strategic Social Lubrication Matrix',
        description: 'You treat truth as a flexible tool, regularly deploying white lies and strategic omissions to manage impressions and protect relationships.',
        rules: [
          { dimensionId: 'deception_index', operator: '>=', value: 65 },
        ],
        accentColor: '#EC4899',
      },
      {
        id: 'the_pragmatic_realist',
        name: 'THE PRAGMATIC DIPLOMAT',
        tagline: 'Contextual Truth Management Profile',
        description: 'You default to honesty in structural matters, but readily deploy social lies to prevent useless interpersonal conflict.',
        rules: [],
        accentColor: '#3B82F6',
      },
    ],
    contradictionPatterns: [
      {
        id: 'liar_contradiction_1',
        description: 'Claims total honesty but rationalizes dishonesty in financial/CV choices',
        check: (scores) => (scores.tactical_honesty ?? 50) >= 60 && (scores.self_justification ?? 50) >= 65,
        template: 'You pride yourself on personal honesty, BUT when career advancement or financial return was at stake, your rationalization engine deployed instant excuses.',
      },
    ],
    fallbackQuestions: fallbackExp2Liar,
  },
  {
    id: 'how_manipulative_are_you',
    title: 'HOW MANIPULATIVE ARE YOU?',
    tagline: 'Machiavellian Calculus & Psychological Leverage',
    category: 'POWER & CONTROL',
    badgeSymbol: '♟️',
    description: 'Diagnoses your covert influence tactics, emotional leverage, and willingness to orchestrate human outcomes behind the scenes.',
    dimensions: [
      { id: 'machiavellianism', name: 'Machiavellian Index', description: 'End-justifies-the-means orientation toward strategic human manipulation.', initialScore: 50 },
      { id: 'strategic_influence', name: 'Strategic Influence', description: 'Skill in orchestrating group decisions and steering outcomes covertly.', initialScore: 50 },
      { id: 'emotional_leverage', name: 'Emotional Weaponization', description: 'Willingness to exploit guilt, praise, or feigned incompetence.', initialScore: 50 },
    ],
    scenarioTypes: ['RESOURCE_ALLOCATION', 'GROUP_DECISION', 'GUILT_TRIPPING', 'FAVOR_RECIPROCITY', 'BARGAINING', 'CREDIT_SHARING'],
    archetypes: [
      {
        id: 'the_puppet_master',
        name: 'THE SHADOW STRATEGIST',
        tagline: 'Elevated Machiavellian Influence Matrix',
        description: 'You operate with acute strategic foresight, viewing social dynamics as a chessboard where emotional leverage and covert orchestration yield maximum control.',
        rules: [
          { dimensionId: 'machiavellianism', operator: '>=', value: 70 },
          { dimensionId: 'strategic_influence', operator: '>=', value: 65 },
        ],
        accentColor: '#8B5CF6',
      },
      {
        id: 'the_transparent_collaborator',
        name: 'THE TRANSPARENT DIPLOMAT',
        tagline: 'Direct Non-Manipulative Profile',
        description: 'You reject covert leverage, preferring direct communication, open negotiation, and transparent alignment over psychological games.',
        rules: [
          { dimensionId: 'machiavellianism', operator: '<', value: 35 },
        ],
        accentColor: '#10B981',
      },
      {
        id: 'the_tactical_operator',
        name: 'THE DEFENSIVE PRAGMATIST',
        tagline: 'Reactive Strategic Alignment',
        description: 'You do not actively orchestrate others for pleasure, but willingly deploy tactical maneuvers when pressed into competitive corners.',
        rules: [],
        accentColor: '#6366F1',
      },
    ],
    contradictionPatterns: [
      {
        id: 'manipulation_contradiction_1',
        description: 'Claims direct open style but chooses covert leverage traps',
        check: (scores) => (scores.machiavellianism ?? 50) >= 60 && (scores.emotional_leverage ?? 50) >= 60,
        template: 'You view yourself as a fair, direct team player, BUT when faced with friction, your choices systematically leveraged guilt, flattery, and feigned incompetence.',
      },
    ],
    fallbackQuestions: fallbackExp3Manipulative,
  },
  {
    id: 'do_you_seek_validation',
    title: 'DO YOU SEEK VALIDATION?',
    tagline: 'Approval Dependency & External Mirroring Test',
    category: 'EGO & IDENTITY',
    badgeSymbol: '🪞',
    description: 'Probes how much of your self-worth is externally anchored in public metrics, peer approval, and audience praise.',
    dimensions: [
      { id: 'approval_dependency', name: 'External Approval Drive', description: 'Need for external validation to confirm personal competence and worth.', initialScore: 50 },
      { id: 'external_mirroring', name: 'Social Mirroring Sensitivity', description: 'Degree to which your mood and opinions shift to match ambient group approval.', initialScore: 50 },
    ],
    scenarioTypes: ['SOCIAL_MEDIA', 'WARDROBE_CHOICE', 'PROJECT_FEEDBACK', 'OPINION_CONFORMITY', 'DECISION_CONSULTATION', 'REJECTION_RECOVERY'],
    archetypes: [
      {
        id: 'the_approval_seeker',
        name: 'THE AUDIENCE DEPENDENT',
        tagline: 'High External Mirroring Matrix',
        description: 'Your emotional equilibrium is tightly bound to external reactions, metrics, and peer reassurance. Silence feels like implicit criticism.',
        rules: [
          { dimensionId: 'approval_dependency', operator: '>=', value: 70 },
        ],
        accentColor: '#F43F5E',
      },
      {
        id: 'the_autonomous_sovereign',
        name: 'THE SELF-ANCHORED SOVEREIGN',
        tagline: 'Internal Validation Sovereignty',
        description: 'You derive self-worth almost exclusively from internal standards, remaining unmoved by public praise or ambient disapproval.',
        rules: [
          { dimensionId: 'approval_dependency', operator: '<', value: 35 },
        ],
        accentColor: '#3B82F6',
      },
      {
        id: 'the_balanced_peer',
        name: 'THE DUAL-ANCHORED ADAPTIVE',
        tagline: 'Balanced Social Feedback Loop',
        description: 'You appreciate positive recognition, but retain sufficient internal grounding to survive silence or mild critique.',
        rules: [],
        accentColor: '#10B981',
      },
    ],
    fallbackQuestions: fallbackExp4Validation,
  },
  {
    id: 'are_you_a_control_freak',
    title: 'ARE YOU A CONTROL FREAK?',
    tagline: 'Micromanagement Index & Chaos Intolerance',
    category: 'POWER & CONTROL',
    badgeSymbol: '📐',
    description: 'Measures your compulsion to dictate outcomes, rigidity when delegating, and visceral discomfort in unpredictable environments.',
    dimensions: [
      { id: 'micromanagement', name: 'Micromanagement Compulsion', description: 'Drive to inspect and correct execution down to minute details.', initialScore: 50 },
      { id: 'chaos_intolerance', name: 'Uncertainty Intolerance', description: 'Anxiety generated by spontaneous, unplanned, or changing events.', initialScore: 50 },
      { id: 'autonomy_rigidity', name: 'Process Rigidity', description: 'Insistence on "the correct way" over functional alternatives.', initialScore: 50 },
    ],
    scenarioTypes: ['GROUP_PROJECT', 'TRIP_PLANNING', 'KITCHEN_DELEGATION', 'UNSOLICITED_ADVICE', 'FILE_ORGANIZATION', 'PASSENGER_SEAT'],
    archetypes: [
      {
        id: 'the_architect_of_order',
        name: 'THE ABSOLUTE ARCHITECT',
        tagline: 'High Micromanagement & Chaos Intolerance Matrix',
        description: 'You operate as a relentless controller of environments, processes, and details. You view delegation without oversight as an invitation to disaster.',
        rules: [
          { dimensionId: 'micromanagement', operator: '>=', value: 70 },
          { dimensionId: 'chaos_intolerance', operator: '>=', value: 65 },
        ],
        accentColor: '#EF4444',
      },
      {
        id: 'the_spontaneous_drifter',
        name: 'THE ADAPTIVE FLOW-STATE',
        tagline: 'Low Rigidity & High Fluidity Profile',
        description: 'You embrace ambient chaos, view perfectionist details as wasted energy, and delegate freely without checking back.',
        rules: [
          { dimensionId: 'micromanagement', operator: '<', value: 35 },
          { dimensionId: 'chaos_intolerance', operator: '<', value: 35 },
        ],
        accentColor: '#10B981',
      },
      {
        id: 'the_structural_pragmatist',
        name: 'THE STRUCTURAL CONDUCTOR',
        tagline: 'Targeted High-Standard Execution',
        description: 'You maintain high standards in critical deliverables, but allow flexible execution in low-stakes social domains.',
        rules: [],
        accentColor: '#F59E0B',
      },
    ],
    fallbackQuestions: fallbackExp5Control,
  },
  {
    id: 'would_you_betray_someone',
    title: 'WOULD YOU BETRAY SOMEONE?',
    tagline: 'Loyalty Degradation & Self-Preservation Threshold',
    category: 'MORALITY & ETHICS',
    badgeSymbol: '🗡️',
    description: 'Pinpoints the exact price, threat level, or career payoff required for you to break personal trust and confidentiality.',
    dimensions: [
      { id: 'betrayal_propensity', name: 'Betrayal Propensity', description: 'Willingness to abandon allies when incentives or threats reach critical mass.', initialScore: 50 },
      { id: 'self_preservation', name: 'Self-Preservation Instinct', description: 'Priority placed on personal safety and standing over group loyalty.', initialScore: 50 },
      { id: 'pragmatic_loyalty', name: 'Interpersonal Loyalty', description: 'Commitment to protecting allies regardless of personal cost.', initialScore: 50 },
    ],
    scenarioTypes: ['CAREER_AMBITION', 'SCAPEGOATING', 'WHISTLEBLOWING', 'CONFIDENTIAL_SECRET', 'COMPETITOR_OFFER', 'FRIENDSHIP_TEST'],
    archetypes: [
      {
        id: 'the_pragmatic_mercenary',
        name: 'THE TACTICAL MERCENARY',
        tagline: 'High Self-Preservation & Low Loyalty Profile',
        description: 'Your loyalty has a sharp expiration date. When personal career survival or substantial rewards appear, allies become expendable variables.',
        rules: [
          { dimensionId: 'betrayal_propensity', operator: '>=', value: 65 },
          { dimensionId: 'self_preservation', operator: '>=', value: 70 },
        ],
        accentColor: '#DC2626',
      },
      {
        id: 'the_unshakable_ally',
        name: 'THE UNYIELDING GUARDIAN',
        tagline: 'Absolute Interpersonal Loyalty Matrix',
        description: 'You refuse to sacrifice allies under threat, audit, or temptation, treating trust as an inviolable pact.',
        rules: [
          { dimensionId: 'pragmatic_loyalty', operator: '>=', value: 70 },
          { dimensionId: 'betrayal_propensity', operator: '<', value: 30 },
        ],
        accentColor: '#10B981',
      },
      {
        id: 'the_conditional_loyalist',
        name: 'THE CONDITIONAL ALLY',
        tagline: 'Context-Bound Loyalty Matrix',
        description: 'You protect allies through routine pressure, but recalibrate when personal destruction becomes imminent.',
        rules: [],
        accentColor: '#6366F1',
      },
    ],
    fallbackQuestions: fallbackExp6Betrayal,
  },
  {
    id: 'how_empathetic_are_you',
    title: 'HOW EMPATHETIC ARE YOU?',
    tagline: 'Affective Resonance vs Cognitive Distance Spectrum',
    category: 'EMOTION & EMPATHY',
    badgeSymbol: '🫀',
    description: 'Measures your instinctual emotional resonance with stranger distress versus cognitive detached analysis.',
    dimensions: [
      { id: 'affective_mirroring', name: 'Affective Resonance', description: 'Visceral absorption of other people\'s emotional pain or joy.', initialScore: 50 },
      { id: 'perspective_taking', name: 'Cognitive Perspective-Taking', description: 'Intellectual capacity to reconstruct an opponent\'s reasoning.', initialScore: 50 },
      { id: 'emotional_distance', name: 'Emotional Detachment', description: 'Ability to maintain clinical psychological boundaries in crisis.', initialScore: 50 },
    ],
    scenarioTypes: ['DISGRUNTLED_CUSTOMER', 'MOVIE_REACTION', 'STRANGER_DISTRESS', 'POLITICAL_OPPONENT', 'CORRECTION_FEELINGS', 'CHARITY_DONATION'],
    archetypes: [
      {
        id: 'the_visceral_sponge',
        name: 'THE VISCERAL EMPATH',
        tagline: 'Elevated Affective Resonance Matrix',
        description: 'You absorb ambient emotional pain directly into your physiology, blurring boundaries between your state and others.',
        rules: [
          { dimensionId: 'affective_mirroring', operator: '>=', value: 70 },
          { dimensionId: 'emotional_distance', operator: '<', value: 35 },
        ],
        accentColor: '#EC4899',
      },
      {
        id: 'the_detached_analyst',
        name: 'THE CLINICAL OBSERVER',
        tagline: 'High Emotional Detachment Profile',
        description: 'You process human distress with logical clarity, dissecting causes while remaining insulated from personal emotional contagion.',
        rules: [
          { dimensionId: 'emotional_distance', operator: '>=', value: 70 },
        ],
        accentColor: '#06B6D4',
      },
      {
        id: 'the_empathetic_strategist',
        name: 'THE COGNITIVE EMPATH',
        tagline: 'Balanced Perspective-Taking',
        description: 'You accurately reconstruct feelings and viewpoints without allowing your own emotional baseline to collapse.',
        rules: [],
        accentColor: '#10B981',
      },
    ],
    fallbackQuestions: fallbackExp7Empathy,
  },
  {
    id: 'are_you_selfish',
    title: 'ARE YOU SELFISH?',
    tagline: 'Altruism Spectrum & Resource Hoarding Calculus',
    category: 'MORALITY & ETHICS',
    badgeSymbol: '🤲',
    description: 'Determines your balance between self-interested resource retention and genuine, uncredited sacrifices for others.',
    dimensions: [
      { id: 'self_interest', name: 'Self-Interest Priority', description: 'Drive to maximize personal comfort, money, and time above all.', initialScore: 50 },
      { id: 'resource_hoarding', name: 'Resource Hoarding Index', description: 'Reluctance to share assets, space, and opportunities.', initialScore: 50 },
      { id: 'altruism', name: 'Unconditional Altruism', description: 'Willingness to incur personal loss to benefit strangers or peers.', initialScore: 50 },
    ],
    scenarioTypes: ['LAST_SLICE', 'TIME_INVESTMENT', 'LOTTERY_WIN', 'SEATING_COMFORT', 'BLOOD_DONATION', 'LENDING_TOOLS'],
    archetypes: [
      {
        id: 'the_egoist',
        name: 'THE PRIMARY EGOIST',
        tagline: 'Elevated Self-Interest Matrix',
        description: 'Your choices systematically prioritize personal comfort, wealth security, and individual advantage as top imperatives.',
        rules: [
          { dimensionId: 'self_interest', operator: '>=', value: 70 },
        ],
        accentColor: '#EF4444',
      },
      {
        id: 'the_altruistic_donor',
        name: 'THE SACRIFICIAL ALTRUIST',
        tagline: 'High Unconditional Altruism Matrix',
        description: 'You routinely yield comfort, last slices, seating, and savings to ease friction or lift up those around you.',
        rules: [
          { dimensionId: 'altruism', operator: '>=', value: 70 },
        ],
        accentColor: '#10B981',
      },
      {
        id: 'the_fair_reciprocator',
        name: 'THE RECIPROCAL PRAGMATIST',
        tagline: '50/50 Fair Exchange Profile',
        description: 'You gladly contribute your fair share, but fiercely resist asymmetric scenarios where others free-ride on your generosity.',
        rules: [],
        accentColor: '#3B82F6',
      },
    ],
    fallbackQuestions: fallbackExp8Selfish,
  },
  {
    id: 'do_you_fear_failure',
    title: 'DO YOU FEAR FAILURE?',
    tagline: 'Perfectionism Paralysis & Risk Aversion Meter',
    category: 'EGO & IDENTITY',
    badgeSymbol: '📉',
    description: 'Diagnoses whether your ambitions are throttled by fear of public mistakes, ego protection, or perfectionist paralysis.',
    dimensions: [
      { id: 'risk_aversion', name: 'Risk Aversion Index', description: 'Tendency to choose safety over uncertain high-payoff opportunities.', initialScore: 50 },
      { id: 'perfectionism_paralysis', name: 'Perfectionist Paralysis', description: 'Delaying launch or execution until impossible zero-defect standards are met.', initialScore: 50 },
      { id: 'ego_protection', name: 'Ego Shielding Mechanism', description: 'Defensive moves to avoid public embarrassment or critical evaluation.', initialScore: 50 },
    ],
    scenarioTypes: ['CAREER_PIVOT', 'CREATIVE_PROJECT', 'PUBLIC_COMPETITION', 'NEW_SPORT_SKILL', 'MISTAKE_ATTRIBUTION', 'FEEDBACK_SEEKING'],
    archetypes: [
      {
        id: 'the_paralyzed_perfectionist',
        name: 'THE PARALYZED PERFECTIONIST',
        tagline: 'High Ego Protection & Risk Aversion Matrix',
        description: 'Your fear of public flaws or failure prevents you from shipping projects, taking career leaps, or stepping into unfamiliar arenas.',
        rules: [
          { dimensionId: 'perfectionism_paralysis', operator: '>=', value: 65 },
          { dimensionId: 'ego_protection', operator: '>=', value: 65 },
        ],
        accentColor: '#F59E0B',
      },
      {
        id: 'the_bold_adventURER',
        name: 'THE UNINHIBITED RISK-TAKER',
        tagline: 'Low Ego Protection Profile',
        description: 'You treat failure as trivial data, launching unpolished drafts, competing boldly, and laughing off public mistakes.',
        rules: [
          { dimensionId: 'risk_aversion', operator: '<', value: 35 },
          { dimensionId: 'ego_protection', operator: '<', value: 35 },
        ],
        accentColor: '#10B981',
      },
      {
        id: 'the_calculated_operator',
        name: 'THE CALCULATED STRATEGIST',
        tagline: 'Risk-Mitigated Execution Profile',
        description: 'You take significant risks only after doing homework, balancing personal ambition against measured downside safeguards.',
        rules: [],
        accentColor: '#3B82F6',
      },
    ],
    fallbackQuestions: fallbackExp9Failure,
  },
  {
    id: 'how_easily_can_you_be_manipulated',
    title: 'HOW EASILY CAN YOU BE MANIPULATED?',
    tagline: 'Suggestibility & Persuasion Vulnerability Index',
    category: 'POWER & CONTROL',
    badgeSymbol: '🎯',
    description: 'Probes your susceptibility to artificial urgency, authority framing, social proof, and subtle emotional traps.',
    dimensions: [
      { id: 'suggestibility', name: 'Suggestibility Rating', description: 'Susceptibility to sales framing, flattery, and artificial urgency.', initialScore: 50 },
      { id: 'authority_deference', name: 'Authority Deference', description: 'Uncritical acceptance of titles, uniforms, and formal credentials.', initialScore: 50 },
      { id: 'credulity_index', name: 'Gullibility & Credulity', description: 'Propensity to believe viral or sensational claims without independent verification.', initialScore: 50 },
    ],
    scenarioTypes: ['AUTHORITY_DEFERENCE', 'URGENCY_PRESSURE', 'EXPERT_ENDORSEMENT', 'FLATTERY_TRAP', 'FOOT_IN_THE_DOOR', 'FAKE_NEWS_SENSATIONALISM'],
    archetypes: [
      {
        id: 'the_highly_suggestible',
        name: 'THE CREDULOUS COMPLIANT',
        tagline: 'Elevated Persuasion Vulnerability Profile',
        description: 'You possess high openness and authority deference, making you particularly susceptible to polished sales pitches, urgency banners, and flattery.',
        rules: [
          { dimensionId: 'suggestibility', operator: '>=', value: 65 },
          { dimensionId: 'authority_deference', operator: '>=', value: 65 },
        ],
        accentColor: '#EF4444',
      },
      {
        id: 'the_impervious_skeptic',
        name: 'THE IMPERVIOUS SKEPTIC',
        tagline: 'Zero-Credulity Defense Matrix',
        description: 'You view marketing, authority claims, and social proof with immediate analytical skepticism, demanding raw primary data.',
        rules: [
          { dimensionId: 'suggestibility', operator: '<', value: 35 },
          { dimensionId: 'credulity_index', operator: '<', value: 35 },
        ],
        accentColor: '#10B981',
      },
      {
        id: 'the_vigilant_evaluator',
        name: 'THE PRAGMATIC CRITIC',
        tagline: 'Contextual Persuasion Resistance',
        description: 'You maintain healthy defenses against routine marketing, but remain open to genuine expertise when properly verified.',
        rules: [],
        accentColor: '#3B82F6',
      },
    ],
    fallbackQuestions: fallbackExp10Manipulated,
  },
  {
    id: 'do_you_actually_have_free_will',
    title: 'DO YOU ACTUALLY HAVE FREE WILL?',
    tagline: 'Determinism Index & Locus of Agency Audit',
    category: 'EGO & IDENTITY',
    badgeSymbol: '🌀',
    description: 'Probes whether your choices reflect genuine internal agency or predictable reactions to neurochemistry, algorithms, and social conditioning.',
    dimensions: [
      { id: 'determinism_index', name: 'Determinism Alignment', description: 'Belief/behavior reflecting automatic biological and environmental causation.', initialScore: 50 },
      { id: 'internal_locus', name: 'Internal Agency Locus', description: 'Conviction that personal willpower directly determines life outcomes.', initialScore: 50 },
      { id: 'conformity_bias', name: 'Algorithmic & Social Conformity', description: 'Subconscious drift toward ambient trends, fashion, and algorithmic loops.', initialScore: 50 },
    ],
    scenarioTypes: ['BEVERAGE_CHOICE', 'FASHION_TREND', 'LIFE_OUTCOME', 'PREDICTABLE_REACTION', 'MORAL_RESPONSIBILITY', 'ALGORITHM_PREDICTION'],
    archetypes: [
      {
        id: 'the_biological_automaton',
        name: 'THE DETERMINISTIC AUTOMATON',
        tagline: 'High Environmental & Biological Causation',
        description: 'Your choices show a strong awareness of biological habit loops, social conditioning, and algorithmic influence shaping human behavior.',
        rules: [
          { dimensionId: 'determinism_index', operator: '>=', value: 65 },
        ],
        accentColor: '#8B5CF6',
      },
      {
        id: 'the_sovereign_agent',
        name: 'THE SOVEREIGN AGENT',
        tagline: 'High Internal Locus of Control',
        description: 'You fiercely maintain that personal willpower overrides habit, biological urges, and ambient social programming.',
        rules: [
          { dimensionId: 'internal_locus', operator: '>=', value: 65 },
        ],
        accentColor: '#3B82F6',
      },
      {
        id: 'the_compatibilist',
        name: 'THE COMPATIBILIST REALIST',
        tagline: 'Bounded Agency Framework',
        description: 'You recognize that genetics and environment set the parameters, but maintain that deliberate choice exists within those boundaries.',
        rules: [],
        accentColor: '#10B981',
      },
    ],
    fallbackQuestions: fallbackExp11Freewill,
  },
  {
    id: 'are_you_a_good_friend',
    title: 'ARE YOU A GOOD FRIEND?',
    tagline: 'Sacrificial Reciprocity & Emotional Availability',
    category: 'RELATIONSHIPS',
    badgeSymbol: '🤝',
    description: 'Evaluates your personal cost tolerance for supporting friends during early morning crises, venting calls, and financial pinches.',
    dimensions: [
      { id: 'sacrificial_reciprocity', name: 'Sacrificial Support Index', description: 'Willingness to sacrifice personal sleep, money, and comfort for friends.', initialScore: 50 },
      { id: 'emotional_availability', name: 'Emotional Availability', description: 'Patience and warmth when holding space for peer distress.', initialScore: 50 },
      { id: 'interpersonal_loyalty', name: 'Interpersonal Loyalty', description: 'Refusal to gossip or abandon friends when external conflicts arise.', initialScore: 50 },
    ],
    scenarioTypes: ['AIRPORT_PICKUP', 'VENTING_SESSION', 'DEFENDING_ABSENT', 'BORROWING_MONEY', 'CELEBRATING_SUCCESS', 'MOVING_DAY'],
    archetypes: [
      {
        id: 'the_devoted_pillar',
        name: 'THE UNWAVERING ANCHOR',
        tagline: 'High Sacrificial Loyalty Profile',
        description: 'You are the rarest form of friend — willing to wake up at 4:15 AM, hold strict confidentiality, and lend money without hesitation.',
        rules: [
          { dimensionId: 'sacrificial_reciprocity', operator: '>=', value: 65 },
          { dimensionId: 'interpersonal_loyalty', operator: '>=', value: 65 },
        ],
        accentColor: '#10B981',
      },
      {
        id: 'the_fairweather_companion',
        name: 'THE BOUNDARIED COMPANION',
        tagline: 'High Self-Protection Boundary Profile',
        description: 'You enjoy social connection, but set hard boundaries regarding your sleep, personal savings, and late-night emotional labor.',
        rules: [
          { dimensionId: 'sacrificial_reciprocity', operator: '<', value: 35 },
        ],
        accentColor: '#F59E0B',
      },
      {
        id: 'the_empathetic_confidant',
        name: 'THE EMPATHETIC CONFIDANT',
        tagline: 'High Emotional Availability Profile',
        description: 'You excel at deep active listening and celebrating peer wins, keeping relationships vibrant through genuine care.',
        rules: [],
        accentColor: '#3B82F6',
      },
    ],
    fallbackQuestions: fallbackExp12Friendship,
  },
  {
    id: 'how_much_do_you_care_about_status',
    title: 'HOW MUCH DO YOU CARE ABOUT STATUS?',
    tagline: 'Prestige Drive & Social Hierarchy Sensitivity',
    category: 'EGO & IDENTITY',
    badgeSymbol: '👑',
    description: 'Uncovers how much your choices in job titles, luxury items, VIP access, and name-dropping are driven by prestige signaling.',
    dimensions: [
      { id: 'prestige_drive', name: 'Prestige & Title Drive', description: 'Valuing organizational titles, institutional pedigree, and public accolades.', initialScore: 50 },
      { id: 'status_signaling', name: 'Status Signaling Index', description: 'Desire to display luxury brands, VIP access, or high-status associations.', initialScore: 50 },
      { id: 'social_hierarchy_sensitivity', name: 'Hierarchy Sensitivity', description: 'Acuteness to social tiering, VIP perks, and room seating.', initialScore: 50 },
    ],
    scenarioTypes: ['JOB_TITLE', 'CAR_PURCHASE', 'VIP_EVENT', 'NAME_DROPPING', 'RESTAURANT_SEATING', 'FIRST_CLASS_UPGRADE'],
    archetypes: [
      {
        id: 'the_prestige_maximizer',
        name: 'THE PRESTIGE MAXIMIZER',
        tagline: 'High Status Signaling & Hierarchy Drive',
        description: 'You operate with keen awareness of status ladders, prioritizing titles, luxury signals, and VIP positioning as core measures of success.',
        rules: [
          { dimensionId: 'prestige_drive', operator: '>=', value: 65 },
          { dimensionId: 'status_signaling', operator: '>=', value: 65 },
        ],
        accentColor: '#8B5CF6',
      },
      {
        id: 'the_status_indifferent',
        name: 'THE STATUS INDEPENDENT',
        tagline: 'Zero-Signaling Autonomy Matrix',
        description: 'You reject status games entirely, preferring practical utility, cash compensation, and comfortable obscurity over titles or logos.',
        rules: [
          { dimensionId: 'status_signaling', operator: '<', value: 35 },
          { dimensionId: 'prestige_drive', operator: '<', value: 35 },
        ],
        accentColor: '#10B981',
      },
      {
        id: 'the_subtle_connoisseur',
        name: 'THE UNASSUMING PRAGMATIST',
        tagline: 'Subtle Quality Alignment',
        description: 'You appreciate high quality craftsmanship for personal satisfaction, but dislike vulgar public flexes or shallow name-dropping.',
        rules: [],
        accentColor: '#06B6D4',
      },
    ],
    fallbackQuestions: fallbackExp13Status,
  },
  {
    id: 'would_you_survive_a_moral_dilemma',
    title: 'WOULD YOU SURVIVE A MORAL DILEMMA?',
    tagline: 'Utilitarian Calculus vs Deontological Absolute',
    category: 'MORALITY & ETHICS',
    badgeSymbol: '⚖️',
    description: 'Tests your decision framework when forced to choose between trolley problem sacrifices, lifeboats, dirty bombs, and pharmacy thefts.',
    dimensions: [
      { id: 'pragmatic_utilitarianism', name: 'Utilitarian Calculus', description: 'Willingness to sacrifice individuals to maximize net overall survival.', initialScore: 50 },
      { id: 'deontological_rigidity', name: 'Deontological Absolutism', description: 'Inviolable moral rules regardless of catastrophic consequences.', initialScore: 50 },
      { id: 'moral_relativism', name: 'Moral Relativism', description: 'Flexibility of ethics depending on emergency context.', initialScore: 50 },
    ],
    scenarioTypes: ['LIFEBOAT_CAPACITY', 'TROLLEY_VARIATION', 'MEDICINE_THEFT', 'TORTURE_CLOCK', 'ORGAN_TRANSPLANT', 'WAR_CRIME_ORDER'],
    archetypes: [
      {
        id: 'the_cold_utilitarian',
        name: 'THE RUTHLESS UTILITARIAN',
        tagline: 'High Net-Survival Calculus Profile',
        description: 'When crisis strikes, you calculate net survival mathematically, willing to push trolley strangers or eject lifeboat passengers for the greater good.',
        rules: [
          { dimensionId: 'pragmatic_utilitarianism', operator: '>=', value: 65 },
        ],
        accentColor: '#DC2626',
      },
      {
        id: 'the_moral_absolutist',
        name: 'THE MORAL ABSOLUTIST',
        tagline: 'Unbreakable Deontological Imperative',
        description: 'You refuse to commit murder or lie, holding that basic human rights cannot be violated even if the entire ship sinks.',
        rules: [
          { dimensionId: 'deontological_rigidity', operator: '>=', value: 65 },
        ],
        accentColor: '#3B82F6',
      },
      {
        id: 'the_contextual_survivalist',
        name: 'THE CONTEXTUAL SURVIVALIST',
        tagline: 'Adaptive Emergency Ethics Matrix',
        description: 'You adapt your ethics dynamically based on crisis severity, seeking pragmatic compromises whenever possible.',
        rules: [],
        accentColor: '#F59E0B',
      },
    ],
    fallbackQuestions: fallbackExp14Survival,
  }
];

export function getExperimentById(id: string): ExperimentConfig | undefined {
  return EXPERIMENTS.find((e) => e.id === id);
}

export const EXPERIMENTAL_PROBES = EXPERIMENTS;
