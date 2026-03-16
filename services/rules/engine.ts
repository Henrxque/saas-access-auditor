import { evaluateHygieneRules } from '@/services/rules/hygiene-rules';
import { evaluateRiskRules } from '@/services/rules/risk-rules';
import type { ConsolidatedRuleResult, RuleContext, RuleIssue, RuleModuleResult } from '@/services/rules/types';
import { evaluateWasteRules } from '@/services/rules/waste-rules';

const MODULE_PIPELINE = [evaluateWasteRules, evaluateRiskRules, evaluateHygieneRules] as const;

// Executa os módulos de regra em ordem fixa e consolida resultado.
export function runRulesEngine(context: RuleContext): ConsolidatedRuleResult {
  const modules: RuleModuleResult[] = MODULE_PIPELINE.map((evaluate) => evaluate(context));

  const issues = modules
    .flatMap((moduleResult) => moduleResult.issues)
    .sort((a, b) => compareIssues(a, b));

  return {
    auditId: context.auditId,
    evaluatedAt: context.evaluatedAt,
    totals: {
      records: context.records.length,
      issues: issues.length,
      byCategory: {
        waste: modules.find((moduleResult) => moduleResult.category === 'waste')?.issues.length ?? 0,
        risk: modules.find((moduleResult) => moduleResult.category === 'risk')?.issues.length ?? 0,
        hygiene: modules.find((moduleResult) => moduleResult.category === 'hygiene')?.issues.length ?? 0,
      },
    },
    issues,
    modules,
  };
}

function compareIssues(a: RuleIssue, b: RuleIssue) {
  const byCategory = a.category.localeCompare(b.category);
  if (byCategory !== 0) return byCategory;

  const bySeverity = severityRank(a.severity) - severityRank(b.severity);
  if (bySeverity !== 0) return bySeverity;

  const byCode = a.code.localeCompare(b.code);
  if (byCode !== 0) return byCode;

  return a.entityRef.localeCompare(b.entityRef);
}

function severityRank(severity: RuleIssue['severity']) {
  const order: Record<RuleIssue['severity'], number> = {
    critical: 0,
    high: 1,
    medium: 2,
    low: 3,
  };

  return order[severity];
}
