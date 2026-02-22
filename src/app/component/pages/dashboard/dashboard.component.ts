import { Component } from '@angular/core';
import {
  ActionItem,
  ActivityItem,
  KpiItem,
  PendingItem,
  SummaryMetric,
} from '../../../model/dashInterface';
import {
  DASHBOARD_ACTIONS,
  DASHBOARD_ACTIVITIES,
  DASHBOARD_KPIS,
  DASHBOARD_PENDING_ACTIONS,
  DASHBOARD_SUMMARY_METRICS,
} from '../../../data/dashboardMock';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  readonly kpis: KpiItem[] = DASHBOARD_KPIS;

  readonly actions: ActionItem[] = DASHBOARD_ACTIONS;

  readonly activities: ActivityItem[] = DASHBOARD_ACTIVITIES;

  readonly summaryMetrics: SummaryMetric[] = DASHBOARD_SUMMARY_METRICS;

  readonly pendingActions: PendingItem[] = DASHBOARD_PENDING_ACTIONS;
}
