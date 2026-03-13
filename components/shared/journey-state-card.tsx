import type { MainJourneyStep } from '@/types/flow-types';

// Exibe o passo atual e as próximas transições permitidas na jornada.
export function JourneyStateCard({
  currentStep,
  nextSteps,
}: {
  currentStep: MainJourneyStep;
  nextSteps: MainJourneyStep[];
}) {
  return (
    <section>
      <strong>Passo atual:</strong> {currentStep}
      <br />
      <strong>Próximos passos:</strong> {nextSteps.join(', ') || 'fim do fluxo'}
    </section>
  );
}
