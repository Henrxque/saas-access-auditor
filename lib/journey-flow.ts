import type { MainJourneyStep } from '@/types/flow-types';

// Mapa de transições permitido entre os passos principais do produto.
export const journeyTransitions: Record<MainJourneyStep, MainJourneyStep[]> = {
  'login-signup': ['dashboard'],
  dashboard: ['new-audit'],
  'new-audit': ['upload-files'],
  'upload-files': ['file-type-selection'],
  'file-type-selection': ['column-mapping'],
  'column-mapping': ['processing'],
  processing: ['results-dashboard'],
  'results-dashboard': [],
};

// Representa o estado inicial da jornada principal.
export const initialJourneyStep: MainJourneyStep = 'login-signup';
