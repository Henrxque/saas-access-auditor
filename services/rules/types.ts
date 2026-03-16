// Tipos compartilhados do motor de regras do MVP.
export type RuleCategory = 'waste' | 'risk' | 'hygiene';

export type RuleSeverity = 'low' | 'medium' | 'high' | 'critical';

export type RuleIssue = {
  code: string;
  title: string;
  description: string;
  category: RuleCategory;
  severity: RuleSeverity;
  entityRef: string;
  metadata?: Record<string, string | number | boolean | null>;
};

export type RuleInputRecord = {
  entityRef: string;
  email?: string;
  accountStatus?: string;
  employmentStatus?: string;
  isAdmin?: boolean;
  lastActivityAt?: string;
  usageLast30d?: number;
  usageLast90d?: number;
  licenseCost?: number;
  licenseStatus?: string;
};

export type RuleContext = {
  auditId: string;
  evaluatedAt: string;
  records: RuleInputRecord[];
};

export type RuleModuleResult = {
  category: RuleCategory;
  issues: RuleIssue[];
  evaluatedCount: number;
};

export type ConsolidatedRuleResult = {
  auditId: string;
  evaluatedAt: string;
  totals: {
    records: number;
    issues: number;
    byCategory: Record<RuleCategory, number>;
  };
  issues: RuleIssue[];
  modules: RuleModuleResult[];
};
