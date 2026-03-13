import Link from 'next/link';

// Etapa de processamento da auditoria após mapeamento.
export default function AuditProcessingPage() {
  return (
    <main>
      <h1>Processing</h1>
      <p>Placeholder para estado de processamento da auditoria.</p>
      <Link href="/audits/new/results">Ver resultados</Link>
    </main>
  );
}
