export type Tone = 'green' | 'amber' | 'blue' | 'red';
export type TrendTone = 'positive' | 'negative';

export interface KpiItem {
  label: string;
  icon: string;
  color: Exclude<Tone, 'red'>;
  value: string;
  subtext: string;
  trendText: string;
  trendTone: TrendTone;
}

export interface ActionItem {
  icon: string;
  color: Tone;
  title: string;
  description: string;
}

export interface ActivityItem {
  icon: string;
  code: string;
  detail: string;
  status: string;
  statusTone: 'success' | 'warning';
}

export interface SummaryMetric {
  label: string;
  value: string;
  valueTone: Exclude<Tone, 'red'>;
  progress: string;
  progressTone: Exclude<Tone, 'red'>;
}

export interface PendingItem {
  icon: string;
  text: string;
  tone: Exclude<Tone, 'red'>;
}