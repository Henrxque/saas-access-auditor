// Define os passos da jornada principal do produto para o MVP.
export type MainJourneyStep =
  | 'login-signup'
  | 'dashboard'
  | 'new-audit'
  | 'upload-files'
  | 'file-type-selection'
  | 'column-mapping'
  | 'processing'
  | 'results-dashboard';
