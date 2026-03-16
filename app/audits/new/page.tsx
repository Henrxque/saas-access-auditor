import Link from 'next/link';

// Etapa de criação de auditoria antes do upload dos arquivos.
export default function NewAuditPage() {
  return (
    <main>
      <h1>New Audit</h1>
      <p>Definição inicial da auditoria (placeholder).</p>
      <Link href="/audits/new/upload">Avançar para upload</Link>
    </main>
  );
}
