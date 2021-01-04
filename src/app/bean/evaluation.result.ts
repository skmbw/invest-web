import {MatchRuleBean} from './match.rule.bean';

export class EvaluationResult {
  code: string;
  name: string;
  evaluationDate: string;
  ruleResultList: MatchRuleBean[];
  type: string;
}
