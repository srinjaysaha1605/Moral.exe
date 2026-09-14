import { ExperimentConfig, UserAnswerRecord } from '../types/moral';

export function detectContradiction(
  answersHistory: UserAnswerRecord[],
  scores: Record<string, number>,
  experiment: ExperimentConfig
): {
  detected: boolean;
  headline: string;
  detail: string;
} {
  // Check experiment specific contradiction patterns first
  if (experiment.contradictionPatterns && experiment.contradictionPatterns.length > 0) {
    for (const pattern of experiment.contradictionPatterns) {
      if (pattern.check(scores, answersHistory)) {
        return {
          detected: true,
          headline: 'Behavioral Disconnect Identified',
          detail: pattern.template,
        };
      }
    }
  }

  // Generic fallback contradiction detector based on extreme vs subtle dimension variance
  const dimensions = experiment.dimensions;
  if (dimensions.length >= 2) {
    const dim1 = dimensions[0];
    const dim2 = dimensions[1];
    const score1 = scores[dim1.id] ?? 50;
    const score2 = scores[dim2.id] ?? 50;

    if (score1 >= 65 && score2 <= 35) {
      return {
        detected: true,
        headline: `${dim1.name} vs ${dim2.name} Divergence`,
        detail: `You display a high baseline in ${dim1.name.toLowerCase()} (${score1}%), BUT when forced to trade off against ${dim2.name.toLowerCase()}, your choices drastically shifted toward pragmatic self-preservation (${score2}%).`,
      };
    }

    if (score1 <= 35 && score2 >= 65) {
      return {
        detected: true,
        headline: `Covert Alignment Friction`,
        detail: `You score noticeably low in ${dim1.name.toLowerCase()} (${score1}%), BUT your decisions under high-pressure scenarios revealed a strong covert alignment with ${dim2.name.toLowerCase()} (${score2}%).`,
      };
    }
  }

  // Default nuanced contradiction
  return {
    detected: true,
    headline: 'Situational Principle Divergence',
    detail: `Your overall responses indicate a balanced, measured approach across key scenarios, BUT when situational pressure was introduced in direct choice traps, your decisions diverged from your declared principles.`,
  };
}
