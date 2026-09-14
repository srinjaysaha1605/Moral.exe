import { Question } from '../../types/moral';
import { fallbackExp1Racist } from './exp1_racist';
import { fallbackExp2Liar } from './exp2_liar';
import { fallbackExp3Manipulative } from './exp3_manipulative';
import { fallbackExp5Control } from './exp5_control';
import { fallbackExp7Empathy } from './exp7_empathy';
import { fallbackExp9Failure } from './exp9_failure';
import { fallbackExp11Freewill } from './exp11_freewill';
import { fallbackExp13Status } from './exp13_status';

export const FALLBACK_QUESTION_BANKS: Record<string, Question[]> = {
  exp1_racist: fallbackExp1Racist,
  exp2_liar: fallbackExp2Liar,
  exp3_manipulative: fallbackExp3Manipulative,
  exp4_validation: fallbackExp1Racist,
  exp5_control: fallbackExp5Control,
  exp6_jealous: fallbackExp1Racist,
  exp7_empathy: fallbackExp7Empathy,
  exp8_rules: fallbackExp1Racist,
  exp9_failure: fallbackExp9Failure,
  exp10_loyal: fallbackExp1Racist,
  exp11_freewill: fallbackExp11Freewill,
  exp12_money: fallbackExp1Racist,
  exp13_status: fallbackExp13Status,
  exp14_maincharacter: fallbackExp1Racist,
};
