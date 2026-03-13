import Link from 'next/link';

// Etapa final com dashboard de resultados da auditoria.
export default function AuditResultsPage() {
  return (
    <main>
      <h1>Results Dashboard</h1>
      <p>Placeholder para visualização de issues, scores e exports.</p>
      <Link href="/dashboard">Voltar ao dashboard</Link>
    </main>
  );
}
