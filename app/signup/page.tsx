import Link from 'next/link';

// Etapa inicial de autenticação (signup) no fluxo principal.
export default function SignupPage() {
  return (
    <main>
      <h1>Signup</h1>
      <p>Placeholder de cadastro para novos usuários.</p>
      <Link href="/dashboard">Criar conta e continuar</Link>
    </main>
  );
}
