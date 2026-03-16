import Link from 'next/link';

// Landing mínima para navegar pela jornada principal do MVP.
export default function HomePage() {
  return (
    <main>
      <h1>SaaS Access Auditor</h1>
      <p>Fluxo principal MVP configurado com rotas e estados base.</p>
      <nav>
        <ul>
          <li>
            <Link href="/login">Ir para login</Link>
          </li>
          <li>
            <Link href="/signup">Ir para signup</Link>
          </li>
          <li>
            <Link href="/dashboard">Ir para dashboard</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
