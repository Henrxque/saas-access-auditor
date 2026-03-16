import { z } from 'zod';

import type { FileTemplateDefinition } from '@/types/file-template-types';

const acceptedExtensions = ['.csv', '.xlsx', '.xls'] as const;

const templateColumnSchema = z.object({
  key: z.string().min(1),
  label: z.string().min(1),
  required: z.boolean(),
  aliases: z.array(z.string().min(1)).min(1),
  description: z.string().min(1),
});

const fileTemplateDefinitionSchema = z.object({
  templateType: z.enum(['directory_export', 'licenses_export', 'hr_export']),
  displayName: z.string().min(1),
  acceptedExtensions: z.array(z.enum(acceptedExtensions)).min(1),
  maxFilesPerAudit: z.number().int().min(1).max(3),
  requiredColumns: z.array(templateColumnSchema).min(1),
  optionalColumns: z.array(templateColumnSchema),
  matchingNotes: z.object({
    primaryMatch: z.string().min(1),
    supportMatch: z.string().min(1),
    riskContext: z.string().min(1),
  }),
});

// Colunas base para directory_export.
const directoryExportTemplate: FileTemplateDefinition = {
  templateType: 'directory_export',
  displayName: 'Directory Export',
  acceptedExtensions: [...acceptedExtensions],
  maxFilesPerAudit: 3,
  requiredColumns: [
    {
      key: 'email',
      label: 'Email',
      required: true,
      aliases: ['email', 'user_email', 'primary_email', 'mail'],
      description: 'Identificador principal para matching exato.',
    },
    {
      key: 'full_name',
      label: 'Full Name',
      required: true,
      aliases: ['full_name', 'name', 'display_name', 'user_name'],
      description: 'Nome completo para suporte visual ao matching.',
    },
    {
      key: 'account_status',
      label: 'Account Status',
      required: true,
      aliases: ['account_status', 'status', 'user_status'],
      description: 'Status da conta no diretório.',
    },
    {
      key: 'role',
      label: 'Role',
      required: true,
      aliases: ['role', 'job_role', 'access_role'],
      description: 'Função principal da conta no sistema.',
    },
    {
      key: 'is_admin',
      label: 'Is Admin',
      required: true,
      aliases: ['is_admin', 'admin', 'is_super_admin'],
      description: 'Flag de privilégio administrativo.',
    },
    {
      key: 'last_activity_at',
      label: 'Last Activity At',
      required: true,
      aliases: ['last_activity_at', 'last_active_at', 'last_login_at'],
      description: 'Última atividade observada da conta.',
    },
    {
      key: 'department',
      label: 'Department',
      required: true,
      aliases: ['department', 'team', 'org_unit'],
      description: 'Departamento vinculado à conta.',
    },
    {
      key: 'created_at',
      label: 'Created At',
      required: true,
      aliases: ['created_at', 'account_created_at', 'user_created_at'],
      description: 'Data de criação da conta.',
    },
  ],
  optionalColumns: [
    {
      key: 'manager',
      label: 'Manager',
      required: false,
      aliases: ['manager', 'manager_name', 'reports_to'],
      description: 'Gestor associado ao usuário, quando disponível.',
    },
    {
      key: 'location',
      label: 'Location',
      required: false,
      aliases: ['location', 'office', 'site'],
      description: 'Localidade da conta para análises adicionais.',
    },
  ],
  matchingNotes: {
    primaryMatch: 'email exato = match principal',
    supportMatch: 'nome semelhante = apoio visual',
    riskContext: 'status do funcionário influencia análise de risco',
  },
};

// Colunas base para licenses_export.
const licensesExportTemplate: FileTemplateDefinition = {
  templateType: 'licenses_export',
  displayName: 'Licenses Export',
  acceptedExtensions: [...acceptedExtensions],
  maxFilesPerAudit: 3,
  requiredColumns: [
    {
      key: 'email',
      label: 'Email',
      required: true,
      aliases: ['email', 'user_email', 'assignee_email'],
      description: 'Identificador principal para vínculo com usuário.',
    },
    {
      key: 'license_name',
      label: 'License Name',
      required: true,
      aliases: ['license_name', 'sku_name', 'product_name'],
      description: 'Nome da licença/plano atribuído.',
    },
    {
      key: 'license_cost',
      label: 'License Cost',
      required: true,
      aliases: ['license_cost', 'cost', 'unit_cost', 'price'],
      description: 'Custo unitário da licença.',
    },
    {
      key: 'billing_period',
      label: 'Billing Period',
      required: true,
      aliases: ['billing_period', 'billing_cycle', 'period'],
      description: 'Periodicidade de cobrança da licença.',
    },
    {
      key: 'plan_name',
      label: 'Plan Name',
      required: true,
      aliases: ['plan_name', 'plan', 'subscription_plan'],
      description: 'Plano comercial associado.',
    },
    {
      key: 'assigned_at',
      label: 'Assigned At',
      required: true,
      aliases: ['assigned_at', 'assigned_date', 'granted_at'],
      description: 'Data de atribuição da licença.',
    },
    {
      key: 'usage_last_30d',
      label: 'Usage Last 30d',
      required: true,
      aliases: ['usage_last_30d', 'last_30d_usage', 'usage_30_days'],
      description: 'Uso observado nos últimos 30 dias.',
    },
    {
      key: 'usage_last_90d',
      label: 'Usage Last 90d',
      required: true,
      aliases: ['usage_last_90d', 'last_90d_usage', 'usage_90_days'],
      description: 'Uso observado nos últimos 90 dias.',
    },
    {
      key: 'license_status',
      label: 'License Status',
      required: true,
      aliases: ['license_status', 'status', 'assignment_status'],
      description: 'Estado da licença (ativa/inativa/suspensa).',
    },
  ],
  optionalColumns: [
    {
      key: 'currency',
      label: 'Currency',
      required: false,
      aliases: ['currency', 'cost_currency'],
      description: 'Moeda do custo para padronização financeira.',
    },
  ],
  matchingNotes: {
    primaryMatch: 'email exato = match principal',
    supportMatch: 'nome semelhante = apoio visual',
    riskContext: 'status do funcionário influencia análise de risco',
  },
};

// Colunas base para hr_export.
const hrExportTemplate: FileTemplateDefinition = {
  templateType: 'hr_export',
  displayName: 'HR Export',
  acceptedExtensions: [...acceptedExtensions],
  maxFilesPerAudit: 3,
  requiredColumns: [
    {
      key: 'email',
      label: 'Email',
      required: true,
      aliases: ['email', 'work_email', 'employee_email'],
      description: 'Identificador principal do colaborador.',
    },
    {
      key: 'employee_name',
      label: 'Employee Name',
      required: true,
      aliases: ['employee_name', 'name', 'full_name'],
      description: 'Nome do colaborador no RH.',
    },
    {
      key: 'employment_status',
      label: 'Employment Status',
      required: true,
      aliases: ['employment_status', 'employee_status', 'status'],
      description: 'Status trabalhista (ativo/inativo/etc).',
    },
    {
      key: 'department',
      label: 'Department',
      required: true,
      aliases: ['department', 'team', 'business_unit'],
      description: 'Departamento do colaborador.',
    },
    {
      key: 'manager',
      label: 'Manager',
      required: true,
      aliases: ['manager', 'manager_name', 'reports_to'],
      description: 'Gestor direto do colaborador.',
    },
    {
      key: 'termination_date',
      label: 'Termination Date',
      required: true,
      aliases: ['termination_date', 'offboarding_date', 'end_date'],
      description: 'Data de desligamento, quando aplicável.',
    },
    {
      key: 'cost_center',
      label: 'Cost Center',
      required: true,
      aliases: ['cost_center', 'cc', 'cost_centre'],
      description: 'Centro de custo para análises de responsabilidade.',
    },
    {
      key: 'location',
      label: 'Location',
      required: true,
      aliases: ['location', 'office', 'site'],
      description: 'Localidade do colaborador.',
    },
  ],
  optionalColumns: [
    {
      key: 'hire_date',
      label: 'Hire Date',
      required: false,
      aliases: ['hire_date', 'start_date', 'admission_date'],
      description: 'Data de admissão para contexto histórico.',
    },
  ],
  matchingNotes: {
    primaryMatch: 'email exato = match principal',
    supportMatch: 'nome semelhante = apoio visual',
    riskContext: 'status do funcionário influencia análise de risco',
  },
};

export const fileTemplates = [
  directoryExportTemplate,
  licensesExportTemplate,
  hrExportTemplate,
] as const;

export const fileTemplatesSchema = z.array(fileTemplateDefinitionSchema).superRefine((templates, ctx) => {
  const uniqueTypes = new Set(templates.map((template) => template.templateType));

  if (uniqueTypes.size !== templates.length) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: 'templateType deve ser único por template.',
    });
  }

  const requiredTemplateTypes = ['directory_export', 'licenses_export', 'hr_export'];

  for (const requiredType of requiredTemplateTypes) {
    if (!uniqueTypes.has(requiredType)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `Template obrigatório ausente: ${requiredType}.`,
      });
    }
  }
});

// Estrutura validada dos templates-base do MVP.
export const validatedFileTemplates = fileTemplatesSchema.parse(fileTemplates);
