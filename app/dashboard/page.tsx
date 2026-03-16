import Link from 'next/link';

import { JourneyStateCard } from '@/components/shared/journey-state-card';
import { journeyTransitions } from '@/lib/journey-flow';

// Dashboard principal com transição para criação de nova auditoria.
export default function DashboardPage() {
  return (
    <main>
      <h1>Dashboard</h1>
      <p>Resumo inicial do workspace e atalhos de auditoria.</p>
      <JourneyStateCard
        currentStep="dashboard"
        nextSteps={journeyTransitions.dashboard}
      />
      <Link href="/audits/new">Iniciar nova auditoria</Link>
    </main>
  );
}
