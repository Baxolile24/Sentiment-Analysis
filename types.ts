
export enum AppStage {
  HORIZON = 'horizon',
  COMPASS = 'compass'
}

export enum InputMode {
  MANUAL = 'manual',
  SOCIAL = 'social'
}

export type AnalysisSource = 'Manual' | 'X' | 'TikTok' | 'Instagram' | 'Facebook' | 'Reddit' | 'API';

export interface UnifiedAnalysis {
  id: string;
  text: string;
  sentiment: 'Positive' | 'Negative' | 'Neutral';
  confidence_score: number;
  primary_language: string;
  code_switched: boolean;
  key_emotive_phrases: string[];
  business_insight: string;
  explanation: string;
  source: AnalysisSource;
  timestamp: number;
  metrics: {
    reach: number;
    mentions: number;
    age_groups: { label: string; value: number }[];
  };
}

export interface BatchStats {
  total: number;
  positiveCount: number;
  negativeCount: number;
  neutralCount: number;
  avgConfidence: number;
}
