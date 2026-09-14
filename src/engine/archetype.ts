import { ArchetypeDefinition, ArchetypeRule, ExperimentConfig } from '../types/moral';

export function evaluateArchetypeRule(
  score: number,
  rule: ArchetypeRule
): boolean {
  const { operator, value, value2 } = rule;
  switch (operator) {
    case '>':
      return score > value;
    case '>=':
      return score >= value;
    case '<':
      return score < value;
    case '<=':
      return score <= value;
    case 'BETWEEN':
      return score >= value && score <= (value2 ?? 100);
    default:
      return false;
  }
}

export function determineArchetype(
  normalizedScores: Record<string, number>,
  experimentOrArchetypes: ExperimentConfig | ArchetypeDefinition[]
): {
  id: string;
  title: string;
  summary: string;
  color: string;
  badgeIcon?: string;
} {
  const archetypes = Array.isArray(experimentOrArchetypes)
    ? experimentOrArchetypes
    : experimentOrArchetypes.archetypes;

  if (!archetypes || archetypes.length === 0) {
    return {
      id: 'default_archetype',
      title: 'THE ENIGMA',
      summary: 'Your responses display a highly variable pattern that resists singular categorization.',
      color: '#cyan-400',
    };
  }

  for (const archetype of archetypes) {
    if (archetype.rules.length === 0) continue;

    const allRulesPass = archetype.rules.every((rule) => {
      const score = normalizedScores[rule.dimensionId] ?? 50;
      return evaluateArchetypeRule(score, rule);
    });

    if (allRulesPass) {
      return {
        id: archetype.id,
        title: archetype.title || archetype.name || 'ANALYTICAL SUBJECT',
        summary: archetype.summary || archetype.description || archetype.tagline || 'Evaluated behavioral profile.',
        color: archetype.color || archetype.accentColor || '#38bdf8',
        badgeIcon: archetype.badgeIcon,
      };
    }
  }

  const fallback = archetypes[archetypes.length - 1];
  return {
    id: fallback.id,
    title: fallback.title || fallback.name || 'BALANCED PRAGMATIST',
    summary: fallback.summary || fallback.description || fallback.tagline || 'Evaluated behavioral profile.',
    color: fallback.color || fallback.accentColor || '#38bdf8',
    badgeIcon: fallback.badgeIcon,
  };
}
