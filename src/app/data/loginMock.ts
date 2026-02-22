import {
  LoginBrandText,
  LoginField,
  LoginFormMeta,
  LoginTopControl,
} from '../model/loginInterface';

export const LOGIN_TOP_CONTROLS: LoginTopControl[] = [
  { icon: '🇵🇪', label: 'País' },
  { icon: '🌐', label: 'Idioma' },
  { icon: '🌙', label: 'Nocturno' },
];

export const LOGIN_BRAND: LoginBrandText = {
  title: 'eSUPPLIER Portal',
  subtitle: 'Portal de Business Partners',
};

export const LOGIN_FORM_META: LoginFormMeta = {
  title: 'Iniciar sesión',
  subtitle: 'Ingresa tu RUC para acceder',
  submitText: 'Iniciar sesión',
  submitRoute: '/home',
};

export const LOGIN_FIELDS: LoginField[] = [
  {
    id: 'ruc',
    label: 'RUC *',
    placeholder: 'RUC',
    type: 'text',
    leadingIcon: '👤',
  },
  {
    id: 'password',
    label: 'Contraseña *',
    placeholder: '********',
    type: 'password',
    leadingIcon: '🔒',
    trailingIcon: '👁️',
  },
];
