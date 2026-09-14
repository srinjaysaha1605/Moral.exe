import { DimensionDefinition, ExperimentConfig, OptionWeights, UserAnswerRecord } from '../types/moral';

export function initializeScores(dimensions: DimensionDefinition[]): Record<string, number> {
  const initial: Record<string, number> = {};
  for (const dim of dimensions) {
    initial[dim.id] = dim.initialScore ?? 50;
  }
  return initial;
}

export function applyAnswerWeights(
  currentScores: Record<string, number>,
  weights?: OptionWeights
): Record<string, number> {
  if (!weights) return { ...currentScores };

  const updated = { ...currentScores };
  for (const [dimId, delta] of Object.entries(weights)) {
    if (updated[dimId] !== undefined) {
      updated[dimId] += delta;
    } else {
      updated[dimId] = 50 + delta;
    }
  }
  return updated;
}

export function normalizeScores(
  rawScores: Record<string, number>,
  dimensions: DimensionDefinition[]
): Record<string, number> {
  const normalized: Record<string, number> = {};

  for (const dim of dimensions) {
    const raw = rawScores[dim.id] ?? 50;
    // Clamp between 0 and 100
    const clamped = Math.max(0, Math.min(100, Math.round(raw)));
    normalized[dim.id] = clamped;
  }

  return normalized;
}

export function calculateNormalizedScores(
  answersHistory: UserAnswerRecord[],
  experiment: ExperimentConfig
): Record<string, number> {
  const dimTotals: Record<string, { sum: number; count: number }> = {};
  for (const dim of experiment.dimensions) {
    dimTotals[dim.id] = { sum: 0, count: 0 };
  }

  for (const record of answersHistory) {
    const dimId = record.dimensionId || record.question?.targetDimensionId;
    const weight = record.selectedOptionWeight ?? (record.selectedOption?.weight ?? 0.5);
    if (dimId && dimTotals[dimId]) {
      dimTotals[dimId].sum += weight;
      dimTotals[dimId].count += 1;
    }
  }

  const resultScores: Record<string, number> = {};
  for (const dim of experiment.dimensions) {
    const data = dimTotals[dim.id];
    if (data && data.count > 0) {
      const avg = data.sum / data.count;
      resultScores[dim.id] = Math.round(avg * 100);
    } else {
      resultScores[dim.id] = dim.initialScore ?? 50;
    }
  }

  return resultScores;
}

export function getIndicatorLevel(score: number): string {
  if (score >= 80) return 'DOMINANT';
  if (score >= 65) return 'ELEVATED';
  if (score >= 40) return 'MODERATE';
  if (score >= 20) return 'LATENT';
  return 'MINIMAL';
}
