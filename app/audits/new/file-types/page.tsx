import Link from 'next/link';

// Etapa para selecionar o tipo lógico de cada arquivo enviado.
export default function AuditFileTypesPage() {
  return (
    <main>
      <h1>Seleção do tipo de arquivo</h1>
      <p>Placeholder para classificar cada upload por tipo lógico.</p>
      <Link href="/audits/new/mapping">Continuar para column mapping</Link>
    </main>
  );
}
