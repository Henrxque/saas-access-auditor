import Link from 'next/link';

// Etapa de seleção de tipo de arquivo e column mapping.
export default function AuditMappingPage() {
  return (
    <main>
      <h1>Column Mapping</h1>
      <p>Placeholder para tipo lógico de arquivo e mapeamento de colunas.</p>
      <Link href="/audits/new/processing">Processar auditoria</Link>
    </main>
  );
}
