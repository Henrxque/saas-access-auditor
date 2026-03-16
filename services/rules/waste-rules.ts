import type { RuleContext, RuleIssue, RuleModuleResult } from '@/services/rules/types';

// Regras de desperdício (base MVP determinística, sem lógica pesada).
export function evaluateWasteRules(context: RuleContext): RuleModuleResult {
  const issues: RuleIssue[] = [];

  for (const record of context.records) {
    if (record.licenseCost && record.licenseCost > 0 && record.usageLast90d === 0) {
      issues.push({
        code: 'waste.unused_paid_license',
        title: 'Licença paga sem uso recente',
        description: 'Usuário com custo de licença e uso zero nos últimos 90 dias.',
        category: 'waste',
        severity: 'medium',
        entityRef: record.entityRef,
      });
    }
  }

  return {
    category: 'waste',
    issues: issues.sort((a, b) => a.entityRef.localeCompare(b.entityRef)),
    evaluatedCount: context.records.length,
  };
}
