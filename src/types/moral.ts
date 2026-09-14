/**
 * MORAL.EXE Type Definitions
 * Configuration-driven behavioral analysis platform
 */

export interface DimensionDefinition {
  id: string;
  name: string;
  description: string;
  minLabel?: string;
  maxLabel?: string;
  initialScore?: number;
}

export type OptionWeights = Record<string, number>;

export interface QuestionOption {
  id?: 'A' | 'B' | 'C' | 'D';
  text: string;
  weight?: number;
  code?: string;
  weights?: OptionWeights;
  trapSignal?: string;
}

export interface Question {
  id: string;
  experimentId?: string;
  stepNumber?: number;
  scenario: string;
  question?: string;
  targetDimensionId: string;
  scenarioType?: string;
  difficulty?: string;
  options: QuestionOption[];
  isTrap?: boolean;
}

export interface ArchetypeRule {
  dimensionId: string;
  operator: '>' | '>=' | '<' | '<=' | 'BETWEEN';
  value: number;
  value2?: number;
}

export interface ArchetypeDefinition {
  id: string;
  name?: string;
  title?: string;
  tagline?: string;
  description?: string;
  summary?: string;
  rules: ArchetypeRule[];
  accentColor?: string;
  color?: string;
  badgeIcon?: string;
}

export interface ContradictionPattern {
  id: string;
  description?: string;
  check: (scores: Record<string, number>, answersHistory: any[]) => boolean;
  template: string;
}

export interface ExperimentConfig {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  tagline: string;
  category: string;
  code?: string;
  iconName?: string;
  badgeSymbol?: string;
  dimensions: DimensionDefinition[];
  archetypes: ArchetypeDefinition[];
  scenarioTypes: string[];
  geminiPromptContext?: string;
  fallbackQuestions: Question[];
  contradictionPatterns?: ContradictionPattern[];
}

export interface UserAnswerRecord {
  stepNumber?: number;
  step?: number;
  questionId?: string;
  questionScenario?: string;
  dimensionId?: string;
  selectedOptionIndex?: number;
  selectedOptionText?: string;
  selectedOptionWeight?: number;
  scenarioType?: string;
  difficulty?: string;
  question?: Question;
  selectedOption?: QuestionOption;
  timestamp?: number;
}

export interface BehavioralIndicator {
  id: string;
  name: string;
  score: number; // 0 to 100
  level: string; // e.g. "ELEVATED", "MODERATE", "DOMINANT", "LATENT"
}

export interface FinalBehavioralResult {
  experiment: ExperimentConfig;
  scores: Record<string, number>;
  archetype: {
    id: string;
    title: string;
    summary: string;
    color: string;
    badgeIcon?: string;
  };
  contradiction: {
    detected: boolean;
    headline: string;
    detail: string;
  };
  answersHistory: UserAnswerRecord[];
}
