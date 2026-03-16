import type { RuleContext, RuleIssue, RuleModuleResult } from '@/services/rules/types';

// Regras de higiene de acesso (base MVP determinística, sem lógica pesada).
export function evaluateHygieneRules(context: RuleContext): RuleModuleResult {
  const issues: RuleIssue[] = [];

  for (const record of context.records) {
    if (record.accountStatus?.toLowerCase() === 'active' && record.employmentStatus?.toLowerCase() === 'terminated') {
      issues.push({
        code: 'hygiene.active_account_terminated_employee',
        title: 'Conta ativa para colaborador desligado',
        description: 'Conta permanece ativa enquanto o colaborador consta como desligado no RH.',
        category: 'hygiene',
        severity: 'high',
        entityRef: record.entityRef,
      });
    }
  }

  return {
    category: 'hygiene',
    issues: issues.sort((a, b) => a.entityRef.localeCompare(b.entityRef)),
    evaluatedCount: context.records.length,
  };
}
