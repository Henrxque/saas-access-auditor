// Tipos-base para definição dos templates de arquivos do MVP (sem parsing completo).
export type TemplateType = 'directory_export' | 'licenses_export' | 'hr_export';

export type TemplateColumnDefinition = {
  key: string;
  label: string;
  required: boolean;
  aliases: string[];
  description: string;
};

export type FileTemplateDefinition = {
  templateType: TemplateType;
  displayName: string;
  acceptedExtensions: string[];
  maxFilesPerAudit: number;
  requiredColumns: TemplateColumnDefinition[];
  optionalColumns: TemplateColumnDefinition[];
  matchingNotes: {
    primaryMatch: string;
    supportMatch: string;
    riskContext: string;
  };
};
