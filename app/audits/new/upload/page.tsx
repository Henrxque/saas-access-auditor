import Link from 'next/link';

// Etapa de upload com suporte para 1 a 3 arquivos no MVP.
export default function AuditUploadPage() {
  return (
    <main>
      <h1>Upload de arquivos</h1>
      <p>Placeholder para upload de 1 a 3 arquivos.</p>
      <Link href="/audits/new/file-types">Continuar para seleção de tipo</Link>
    </main>
  );
}
