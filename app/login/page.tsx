import Link from 'next/link';

// Etapa inicial de autenticação (login) no fluxo principal.
export default function LoginPage() {
  return (
    <main>
      <h1>Login</h1>
      <p>Placeholder de login para entrada no produto.</p>
      <Link href="/dashboard">Continuar para dashboard</Link>
    </main>
  );
}
