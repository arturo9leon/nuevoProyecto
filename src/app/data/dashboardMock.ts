import {
  ActionItem,
  ActivityItem,
  KpiItem,
  PendingItem,
  SummaryMetric,
} from '../model/dashInterface';

export const DASHBOARD_KPIS: KpiItem[] = [
  {
    label: 'Órdenes de compra',
    icon: '🛒',
    color: 'green',
    value: '35',
    subtext: '21 pendientes',
    trendText: '↗ +12% este mes',
    trendTone: 'positive',
  },
  {
    label: 'Valor contratado',
    icon: '↗',
    color: 'green',
    value: 'S/ 21,770,115.50',
    subtext: 'Este mes',
    trendText: '↗ +8% este mes',
    trendTone: 'positive',
  },
  {
    label: 'Entregas MIGO',
    icon: '🚚',
    color: 'amber',
    value: '23',
    subtext: '40 items recibidos',
    trendText: '↘ -2% este mes',
    trendTone: 'negative',
  },
  {
    label: 'Business partneres activos',
    icon: '🏢',
    color: 'blue',
    value: '36',
    subtext: '36 total',
    trendText: '↗ +5% este mes',
    trendTone: 'positive',
  },
];

export const DASHBOARD_ACTIONS: ActionItem[] = [
  {
    icon: '🏢',
    color: 'green',
    title: 'Evaluación de proveedores',
    description: 'Gestionar y evaluar proveedores del sistema',
  },
  {
    icon: '🛡️',
    color: 'red',
    title: 'Panel de administración',
    description: 'Gestión de usuarios y roles del sistema',
  },
  {
    icon: '🧾',
    color: 'blue',
    title: 'Comprobantes',
    description: 'Gestión de facturas y notas',
  },
];

export const DASHBOARD_ACTIVITIES: ActivityItem[] = [
  {
    icon: '🚚',
    code: 'EM 5000000114',
    detail: 'Proveedor Demo SAC - Disco de corte metal 7” x 1/8” x 7/8”',
    status: 'Recibido',
    statusTone: 'success',
  },
  {
    icon: '🚚',
    code: 'EM 5000000113',
    detail: 'Proveedor Demo SAC - Cable de acero 1/2” galvanizado 6x19+FC',
    status: 'Recibido',
    statusTone: 'success',
  },
  {
    icon: '📋',
    code: 'AS 7000000106',
    detail:
      'Proveedor Demo SAC - Mantenimiento correctivo motor eléctrico 15HP - Rebobinado estator',
    status: 'Pendiente',
    statusTone: 'warning',
  },
  {
    icon: '📋',
    code: 'AS 7000000104',
    detail:
      'Proveedor Demo SAC - Capacitación en seguridad industrial y prevención de riesgos',
    status: 'Pendiente',
    statusTone: 'warning',
  },
];

export const DASHBOARD_SUMMARY_METRICS: SummaryMetric[] = [
  {
    label: 'Órdenes ejecutadas',
    value: '34%',
    valueTone: 'green',
    progress: '34%',
    progressTone: 'green',
  },
  {
    label: 'Entregas procesadas',
    value: '23 docs',
    valueTone: 'amber',
    progress: '67%',
    progressTone: 'amber',
  },
  {
    label: 'Servicios aprobados',
    value: '57%',
    valueTone: 'blue',
    progress: '57%',
    progressTone: 'blue',
  },
];

export const DASHBOARD_PENDING_ACTIONS: PendingItem[] = [
  {
    icon: '⚠',
    text: '21 órdenes abiertas',
    tone: 'amber',
  },
  {
    icon: 'ⓘ',
    text: '9 servicios pendientes',
    tone: 'blue',
  },
  {
    icon: '🏢',
    text: '4 proveedores por evaluar',
    tone: 'green',
  },
];
