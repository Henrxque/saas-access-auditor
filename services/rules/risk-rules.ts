import type { RuleContext, RuleIssue, RuleModuleResult } from '@/services/rules/types';

// Regras de risco (base MVP determinística, sem lógica pesada).
export function evaluateRiskRules(context: RuleContext): RuleModuleResult {
  const issues: RuleIssue[] = [];

  for (const record of context.records) {
    if (record.isAdmin && record.employmentStatus?.toLowerCase() === 'inactive') {
      issues.push({
        code: 'risk.admin_inactive_employee',
        title: 'Conta admin vinculada a colaborador inativo',
        description: 'Conta com privilégio administrativo em colaborador não ativo no RH.',
        category: 'risk',
        severity: 'critical',
        entityRef: record.entityRef,
      });
    }
  }

  return {
    category: 'risk',
    issues: issues.sort((a, b) => a.entityRef.localeCompare(b.entityRef)),
    evaluatedCount: context.records.length,
  };
}
