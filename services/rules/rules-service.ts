import { runRulesEngine } from '@/services/rules/engine';
import type { ConsolidatedRuleResult, RuleContext } from '@/services/rules/types';

// Serviço principal para executar o motor de regras do MVP.
export function evaluateAuditRules(context: RuleContext): ConsolidatedRuleResult {
  return runRulesEngine(context);
}

// Interface estável do serviço para reduzir conflitos em integrações futuras.
export const rulesService = {
  evaluateAuditRules,
};
